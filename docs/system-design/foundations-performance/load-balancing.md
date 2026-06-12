---
title: "Load Balancing"
slug: "/system-design/foundations-performance/load-balancing"
---

# Load Balancing

## Overview
Load balancing is the method of distributing network traffic across a fleet of backend servers to prevent overload, maximize throughput, and ensure high availability.

## Core Mechanics & How It Works
Load balancers run at Layer 4 (L4: TCP/UDP, routing based on IP/Port) or Layer 7 (L7: HTTP/HTTPS, routing based on URL, headers, cookies). They execute continuous health checks to redirect traffic away from dead nodes.

## Architecture & Common Patterns
Here are the primary ways this topic is implemented in production systems:
- **Weighted Round Robin**:  Distributing traffic sequentially relative to server capacity.\n- **Least Connections**:  Routing to the server with the fewest active sessions.\n- **Consistent Hashing**:  Routing requests from the same user to the same server, minimizing cache misses.\n
## Trade-offs & Limitations
- **Operational Complexity**: Implementing this concept increases overall design complexity and setup.
- **Resource Constraints**: It often trades CPU/memory for network/disk resources or vice versa.
- **Tradeoffs**:
  - Layer 7 load balancers require decrypting SSL/TLS, consuming significant CPU.\n  - Load balancers can become a single point of failure if not deployed in active-passive HA configurations.\n
## System Design Interview Strategy
- **What to Focus On**: Explain the difference between L4 and L7 load balancers, and discuss how consistent hashing handles adding or removing servers from a cluster.
- **Common Scenarios**: Address how this maps to high availability, consistency constraints, or low-latency targets.

## Visual Architecture Diagram
```mermaid
graph TD\n  Client[Clients] --> LB{L7 Load Balancer}\n  LB -->|Health Check: OK| App1[App Server A]\n  LB -->|Health Check: OK| App2[App Server B]\n  LB -->|Health Check: Dead| App3[App Server C: Dropped]
```
