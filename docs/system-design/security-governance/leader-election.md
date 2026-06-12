---
title: "Leader Election"
slug: "/system-design/security-governance/leader-election"
---

# Leader Election

## Overview
Leader election is the process of designating a single coordinator node in a distributed cluster to manage tasks and prevent split-brain conflicts.

## Core Mechanics & How It Works
Distributed clusters use consensus engines (like ZooKeeper, etcd, or Consul) to execute leader elections. Nodes attempt to acquire a distributed lock with a lease timeout. The node that secures the lock becomes the leader and sends heartbeats to renew the lease.

## Architecture & Common Patterns
Here are the primary ways this topic is implemented in production systems:
- **Lease-Based Election**:  Using Consul sessions or etcd keys with TTLs to maintain leadership.\n- **Raft Leader Election**:  Nodes transition to Candidate state on heartbeat timeouts, requesting votes from other nodes.\n
## Trade-offs & Limitations
- **Operational Complexity**: Implementing this concept increases overall design complexity and setup.
- **Resource Constraints**: It often trades CPU/memory for network/disk resources or vice versa.
- **Tradeoffs**:
  - Network splits can cause two nodes to believe they are the leader (split-brain), risking double writes.\n  - Election processes take time, causing temporary service disruptions when leaders fail.\n
## System Design Interview Strategy
- **What to Focus On**: Explain how distributed locks with lease TTLs and fencing tokens prevent split-brain issues.
- **Common Scenarios**: Address how this maps to high availability, consistency constraints, or low-latency targets.

## Visual Architecture Diagram
```mermaid
graph TD\n  NodeA[Node A: Active Leader] -->|Send Heartbeats| Reg{ZooKeeper / etcd Lock}\n  NodeB[Node B: Follower] -->|Leader Timeout?| Candidate[Become Candidate & Ask Votes]
```
