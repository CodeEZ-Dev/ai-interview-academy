---
title: "Latency"
slug: "/system-design/foundations-performance/latency"
---

# Latency

## Overview
Latency is the duration it takes for a request to travel from the sender to the receiver and back. It is the end-to-end time delay in a system, crucial for user experience and real-time processing.

## Core Mechanics & How It Works
System latency is composed of: propagation delay (network transit time), serialization delay (converting data format), queueing delay (waiting in server buffers), and processing delay (CPU and database query times).

## Architecture & Common Patterns
Here are the primary ways this topic is implemented in production systems:
- **Edge Caching**:  Reducing propagation delay by serving assets closer to users via CDNs.\n- **Connection Pooling**:  Reusing TCP/database connections to bypass handshake latency.\n- **Asynchronous Processing**:  Offloading slow work to background threads so the client receives an immediate response.\n
## Trade-offs & Limitations
- **Operational Complexity**: Implementing this concept increases overall design complexity and setup.
- **Resource Constraints**: It often trades CPU/memory for network/disk resources or vice versa.
- **Tradeoffs**:
  - Optimizing for latency often requires in-memory storage (RAM), which is volatile and expensive compared to disk space.\n  - Lowering latency can sometimes compromise consistency or thorough validation checks.\n
## System Design Interview Strategy
- **What to Focus On**: Mention the latency numbers of different operations (e.g., L1 cache access vs. memory access vs. network roundtrip across regions).
- **Common Scenarios**: Address how this maps to high availability, consistency constraints, or low-latency targets.

## Visual Architecture Diagram
```mermaid
graph LR\n  Client -->|Network Latency| LB[Load Balancer]\n  LB -->|Serialization Latency| App[App Server]\n  App -->|Disk/Query Latency| DB[(Database)]
```
