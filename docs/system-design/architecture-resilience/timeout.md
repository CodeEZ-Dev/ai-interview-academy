---
title: "Timeout"
slug: "/system-design/architecture-resilience/timeout"
---

# Timeout

## Overview
A timeout sets an upper limit on how long a client waits for a response from a server or dependency before aborting the connection.

## Core Mechanics & How It Works
Without timeouts, slow dependencies lock client threads indefinitely, exhausting resources. Timeouts must be propagated across the system call stack (deadline propagation).

## Architecture & Common Patterns
Here are the primary ways this topic is implemented in production systems:
- **Connection Timeout**:  Limit on establishing a TCP connection.\n- **Read Timeout**:  Limit on waiting for data packets once connected.\n- **Deadline Propagation**:  Passing a remaining execution budget header down the call chain.\n
## Trade-offs & Limitations
- **Operational Complexity**: Implementing this concept increases overall design complexity and setup.
- **Resource Constraints**: It often trades CPU/memory for network/disk resources or vice versa.
- **Tradeoffs**:
  - Short timeouts cause false errors on slow networks.\n  - Long timeouts lock up threads, reducing system availability during partial failures.\n
## System Design Interview Strategy
- **What to Focus On**: Recommend setting timeouts slightly above the 99th percentile of a dependency's latency profile, and discuss passing deadlines (e.g., X-Request-Deadline) in headers.
- **Common Scenarios**: Address how this maps to high availability, consistency constraints, or low-latency targets.

## Visual Architecture Diagram
```mermaid
graph LR\n  Client -->|GET with 500ms timeout| Svc[Service]\n  Svc -->|Takes 1s| DB[(DB)]\n  Client -->|Aborts at 500ms| Client
```
