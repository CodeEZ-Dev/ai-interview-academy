---
title: "Consensus"
slug: "/system-design/security-governance/consensus"
---

# Consensus

## Overview
Consensus is the process of getting multiple independent nodes in a distributed system to agree on a single data value or system state.

## Core Mechanics & How It Works
Consensus engines use crash-fault-tolerant protocols (like Paxos or Raft) or Byzantine-fault-tolerant protocols (like PBFT for untrusted environments). They require a majority quorum of active nodes to agree and commit updates.

## Architecture & Common Patterns
Here are the primary ways this topic is implemented in production systems:
- **Raft Replicated State Machine**:  Keeping databases synchronized by electing a leader and replicating log entries in order.\n- **Paxos Protocol**:  The classic consensus algorithm used by early systems like Chubby.\n
## Trade-offs & Limitations
- **Operational Complexity**: Implementing this concept increases overall design complexity and setup.
- **Resource Constraints**: It often trades CPU/memory for network/disk resources or vice versa.
- **Tradeoffs**:
  - Consensus requires multiple network roundtrips, limiting the write throughput of the coordinator database.\n  - If a majority of nodes go offline (loss of quorum), the cluster rejects all writes, sacrificing availability.\n
## System Design Interview Strategy
- **What to Focus On**: Explain the Raft consensus stages (leader election, log replication, safety guards) and how quorum limits block split-brain updates.
- **Common Scenarios**: Address how this maps to high availability, consistency constraints, or low-latency targets.

## Visual Architecture Diagram
```mermaid
graph TD\n  Leader[Leader Node] -->|Propose Write| NodeA[Follower A: Accept]\n  Leader -->|Propose Write| NodeB[Follower B: Accept]\n  Leader -->|Propose Write| NodeC[Follower C: Offline]\n  Leader -->|Quorum Met 3/4| Commit[Commit Update]
```
