---
title: "Consistency Models"
slug: "/system-design/apis-access/consistency-models"
---

# Consistency Models

## Overview
Consistency models establish the rules governing the order and visibility of database updates across a distributed system.

## Core Mechanics & How It Works
Models define what value a read operation is guaranteed to return relative to concurrent write operations.

## Architecture & Common Patterns
Here are the primary ways this topic is implemented in production systems:
- **Strong Consistency (Linearizability)**:  All reads return the latest write, regardless of node location. Requires coordination.\n- **Eventual Consistency**:  Replicas update asynchronously; if no new writes occur, all nodes eventually agree.\n- **Causal Consistency**:  Operations causally related are observed in order; concurrent ones may appear out of order.\n- **Read-Your-Writes Consistency**:  A client will always see their own updates immediately.\n
## Trade-offs & Limitations
- **Operational Complexity**: Implementing this concept increases overall design complexity and setup.
- **Resource Constraints**: It often trades CPU/memory for network/disk resources or vice versa.
- **Tradeoffs**:
  - Strong consistency requires node coordination, increasing write latency and reducing availability.\n  - Eventual consistency provides low latency and high availability but complicates application logic due to temporary data discrepancies.\n
## System Design Interview Strategy
- **What to Focus On**: Walk through consistency needs for different data domains (e.g., strong consistency for user account balances, eventual consistency for social media post likes).
- **Common Scenarios**: Address how this maps to high availability, consistency constraints, or low-latency targets.

## Visual Architecture Diagram
```mermaid
graph TD\n  Client -->|1. Write: X=5| Leader[Leader Node]\n  Leader -->|2. Async Replication| Follower[Follower Node]\n  Reader1 -->|Read X=5| Leader\n  Reader2 -->|Read X=0 stale| Follower
```
