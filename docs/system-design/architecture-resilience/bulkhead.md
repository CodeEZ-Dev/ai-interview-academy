---
title: "Bulkhead"
slug: "/system-design/architecture-resilience/bulkhead"
---

# Bulkhead

## Overview
The bulkhead pattern isolates system resources (CPU, memory, threads, connection pools) into bounded compartments to prevent a failure in one area from crashing the entire application.

## Core Mechanics & How It Works
Services designate dedicated thread pools and queues for each external dependency. If a dependency goes down, only its assigned thread pool fills up, leaving other threads free to serve unrelated requests.

## Architecture & Common Patterns
Here are the primary ways this topic is implemented in production systems:
- **Thread Pool Isolation**:  Separate thread pools for each outgoing API client.\n- **Client Isolation**:  Partitioning user groups to separate hardware clusters (e.g., premium users on dedicated servers).\n
## Trade-offs & Limitations
- **Operational Complexity**: Implementing this concept increases overall design complexity and setup.
- **Resource Constraints**: It often trades CPU/memory for network/disk resources or vice versa.
- **Tradeoffs**:
  - Managing multiple thread pools increases CPU context switching and memory allocation.\n  - Unused capacity in one bulkhead cannot be easily shared with overloaded bulkheads.\n
## System Design Interview Strategy
- **What to Focus On**: Use the ship hull analogy: partitioning a ship into bulkheads prevents a single hole from sinking the entire vessel. Translate this to thread pool isolation in microservices.
- **Common Scenarios**: Address how this maps to high availability, consistency constraints, or low-latency targets.

## Visual Architecture Diagram
```mermaid
graph TD\n  Gateway[API Gateway] --> PoolA[Thread Pool A: User Service]\n  Gateway --> PoolB[Thread Pool B: Payment Service: Failed/Blocked]\n  PoolA --> ServiceA[User Svc]\n  PoolB --> ServiceB[Payment Svc]
```
