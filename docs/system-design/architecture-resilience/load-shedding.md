---
title: "Load Shedding"
slug: "/system-design/architecture-resilience/load-shedding"
---

# Load Shedding

## Overview
Load shedding is the practice of intentionally rejecting incoming requests under heavy load to protect system resources and keep the server from crashing.

## Core Mechanics & How It Works
Servers monitor local metrics (CPU, memory, request queues). When these metrics cross critical thresholds, the server rejects new requests, returning an HTTP 503 Service Unavailable or 429 Too Many Requests.

## Architecture & Common Patterns
Here are the primary ways this topic is implemented in production systems:
- **Priority-Based Shedding**:  Dropping low-priority requests (e.g., telemetry, recommendations) while accepting high-priority transactions (e.g., checkouts).\n- **Queue-Limit Rejection**:  Dropping incoming requests immediately when queue depths are exceeded.\n
## Trade-offs & Limitations
- **Operational Complexity**: Implementing this concept increases overall design complexity and setup.
- **Resource Constraints**: It often trades CPU/memory for network/disk resources or vice versa.
- **Tradeoffs**:
  - Users experience transient errors during traffic spikes.\n  - Determining priority rules and trigger thresholds is difficult.\n
## System Design Interview Strategy
- **What to Focus On**: Explain why load shedding is better than letting a system fail slowly, as it maintains normal latencies for the requests that do get accepted.
- **Common Scenarios**: Address how this maps to high availability, consistency constraints, or low-latency targets.

## Visual Architecture Diagram
```mermaid
graph TD\n  Req[Incoming Traffic] --> Monitor{CPU > 90%?}\n  Monitor -->|Yes: Shed Load| Reject[HTTP 503 Reject]\n  Monitor -->|No| Process[Process Request]
```
