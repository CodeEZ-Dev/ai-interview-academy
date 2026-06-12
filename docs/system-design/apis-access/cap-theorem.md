---
title: "CAP Theorem"
slug: "/system-design/apis-access/cap-theorem"
---

# CAP Theorem

## Overview
The CAP theorem states that a distributed data store can guarantee at most two of three attributes: Consistency, Availability, and Partition tolerance.

## Core Mechanics & How It Works
Because physical networks are imperfect, network partitions (P) are unavoidable. Distributed systems must decide how to behave when a partition occurs: either reject writes to preserve Consistency (CP) or accept writes but allow temporary inconsistencies to preserve Availability (AP).

## Architecture & Common Patterns
Here are the primary ways this topic is implemented in production systems:
- **CP (Consistency + Partition Tolerance)**:  Rejecting requests if replication nodes cannot communicate.\n- **AP (Availability + Partition Tolerance)**:  Allowing nodes to read and write locally during a partition, resolving data conflicts later (eventual consistency).\n
## Trade-offs & Limitations
- **Operational Complexity**: Implementing this concept increases overall design complexity and setup.
- **Resource Constraints**: It often trades CPU/memory for network/disk resources or vice versa.
- **Tradeoffs**:
  - CP systems increase write failures and latencies during network hiccups.\n  - AP systems risk serving stale or conflict-ridden data to users.\n
## System Design Interview Strategy
- **What to Focus On**: Avoid claiming you want a 'CAP' system that does all three. Acknowledge that network partitions are a physical reality, so you must select either CP or AP behavior during partitions.
- **Common Scenarios**: Address how this maps to high availability, consistency constraints, or low-latency targets.

## Visual Architecture Diagram
```mermaid
graph LR\n  NodeA[Node A US] -.-x|Network Partition| NodeB[Node B EU]\n  ClientA -->|Write: x=2| NodeA\n  ClientB -->|Read: x?| NodeB\n  Note[AP returns stale x=1, CP rejects read/write]
```
