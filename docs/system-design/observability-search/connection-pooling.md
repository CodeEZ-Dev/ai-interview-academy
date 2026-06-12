---
title: "Connection Pooling"
slug: "/system-design/observability-search/connection-pooling"
---

# Connection Pooling

## Overview
Connection pooling is the practice of maintaining a cache of open database connections that are reused across multiple client requests, reducing connection handshake latency.

## Core Mechanics & How It Works
Establishing a TCP connection requires multiple network round-trips and authentication handshakes, consuming CPU and memory. A connection pool manager initializes a set of connections on startup, leases them to requests, and returns them to the pool once requests complete.

## Architecture & Common Patterns
Here are the primary ways this topic is implemented in production systems:
- **Dynamic Sizing**:  Sizing pools dynamically based on active load.\n- **Proxy-Based Pooling**:  Using intermediate proxies (e.g., PgBouncer) to pool connections across multiple application servers.\n
## Trade-offs & Limitations
- **Operational Complexity**: Implementing this concept increases overall design complexity and setup.
- **Resource Constraints**: It often trades CPU/memory for network/disk resources or vice versa.
- **Tradeoffs**:
  - Holding idle connections open consumes database memory resources.\n  - If the pool size is too small, requests block waiting for connections; if too large, the database runs out of worker threads.\n
## System Design Interview Strategy
- **What to Focus On**: Discuss pool sizing guidelines (e.g., PostgreSQL connections limit calculations) and recommend using proxy-based poolers in serverless architectures.
- **Common Scenarios**: Address how this maps to high availability, consistency constraints, or low-latency targets.

## Visual Architecture Diagram
```mermaid
graph LR\n  Client[App Request] -->|Lease connection| Pool{Connection Pool}\n  Pool -->|SQL Query| DB[(Database Engine)]\n  Pool -->|Return connection| Client
```
