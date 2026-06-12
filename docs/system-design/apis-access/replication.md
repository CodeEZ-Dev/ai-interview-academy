---
title: "Replication"
slug: "/system-design/apis-access/replication"
---

# Replication

## Overview
Data replication copies data across multiple servers, increasing read throughput, providing database backups, and supporting high availability.

## Core Mechanics & How It Works
Writes are processed by a single node (leader-follower) or multiple nodes (multi-leader, leaderless) and copied to other nodes. Replication is run synchronously (blocking writes until all nodes confirm) or asynchronously (non-blocking).

## Architecture & Common Patterns
Here are the primary ways this topic is implemented in production systems:
- **Single-Leader Replication**:  All writes go to a master node; reads go to read-only followers.\n- **Multi-Leader Replication**:  Writes accepted at multiple master nodes (common for multi-datacenter setups).\n- **Leaderless Replication (Dynamo-style)**:  Writes are sent to all nodes; read/write quorums (W + R > N) enforce consistency.\n
## Trade-offs & Limitations
- **Operational Complexity**: Implementing this concept increases overall design complexity and setup.
- **Resource Constraints**: It often trades CPU/memory for network/disk resources or vice versa.
- **Tradeoffs**:
  - Synchronous replication guarantees consistency but slows down write latency and stops writes if a replica goes offline.\n  - Asynchronous replication is fast but risks data loss if the leader crashes before writes are replicated.\n
## System Design Interview Strategy
- **What to Focus On**: Discuss quorum formulas (R + W > N) for leaderless replication, and explain how conflict resolution (like Last-Write-Wins or CRDTs) works in multi-leader databases.
- **Common Scenarios**: Address how this maps to high availability, consistency constraints, or low-latency targets.

## Visual Architecture Diagram
```mermaid
graph TD\n  Client -->|Write| Leader[Leader DB]\n  Leader -->|Sync Write| Replica1[Replica A]\n  Leader -->|Async Write| Replica2[Replica B]
```
