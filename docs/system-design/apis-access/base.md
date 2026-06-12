---
title: "BASE"
slug: "/system-design/apis-access/base"
---

# BASE

## Overview
BASE is a consistency model (Basically Available, Soft State, Eventual Consistency) optimized for high availability and scale in distributed databases.

## Core Mechanics & How It Works
Unlike strict ACID constraints, BASE assumes that immediate consistency can be sacrificed. Replicas synchronize asynchronously, allowing temporary read inconsistencies while writes complete quickly.

## Architecture & Common Patterns
Here are the primary ways this topic is implemented in production systems:
- **Eventual Consistency**:  Replicas sync via background gossip protocols.\n- **Conflict Resolution (LWW)**:  Resolving concurrent write conflicts using timestamps (Last-Write-Wins).\n- **CRDTs**:  Conflict-Free Replicated Data Types that merge state changes deterministically.\n
## Trade-offs & Limitations
- **Operational Complexity**: Implementing this concept increases overall design complexity and setup.
- **Resource Constraints**: It often trades CPU/memory for network/disk resources or vice versa.
- **Tradeoffs**:
  - Developers must handle stale reads and potential conflict reconciliation in the application layer.\n  - Debugging data propagation lags is difficult.\n
## System Design Interview Strategy
- **What to Focus On**: Contrast BASE with ACID. Use BASE when horizontal scale and availability are the primary goals, and ACID for transactional accuracy (such as checkouts or banking transactions).
- **Common Scenarios**: Address how this maps to high availability, consistency constraints, or low-latency targets.

## Visual Architecture Diagram
```mermaid
graph LR\n  Write[Write to Node A] -->|Acknowledge immediately| Client\n  NodeA -->|Async Gossip Sync| NodeB[Node B updated eventually]
```
