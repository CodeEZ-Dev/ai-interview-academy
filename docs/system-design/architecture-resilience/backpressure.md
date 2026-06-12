---
title: "Backpressure"
slug: "/system-design/architecture-resilience/backpressure"
---

# Backpressure

## Overview
Backpressure is a flow-control protocol where a downstream system limits the write speed of upstream systems to prevent consumer overload and memory exhaustion.

## Core Mechanics & How It Works
When consumer buffers or thread pools fill up, the system signals the upstream writer to pause or slow down. If the producer ignores this signal, the consumer drops messages (load shedding) or blocks TCP window sizes.

## Architecture & Common Patterns
Here are the primary ways this topic is implemented in production systems:
- **TCP Window Flow Control**:  Receiver adjusts window size dynamically to throttle the sender.\n- **Reactive Streams Protocol**:  Consumer requests a specific number of items from the producer (pull-based flow control).\n- **Queue-Limit Throttle**:  Blocking incoming writes when queues reach capacity.\n
## Trade-offs & Limitations
- **Operational Complexity**: Implementing this concept increases overall design complexity and setup.
- **Resource Constraints**: It often trades CPU/memory for network/disk resources or vice versa.
- **Tradeoffs**:
  - Backpressure propagates load upstream, potentially causing outages in frontend systems if they cannot handle the slowdown.\n  - It requires coordinated protocols across services.\n
## System Design Interview Strategy
- **What to Focus On**: Explain what happens when a system lacks backpressure (unbounded queues causing out-of-memory crashes) and how to design pull-based consumer models.
- **Common Scenarios**: Address how this maps to high availability, consistency constraints, or low-latency targets.

## Visual Architecture Diagram
```mermaid
graph LR\n  Producer[Fast Producer] -->|Send Data| Buffer[Buffer Queue: Full]\n  Buffer -->|Feedback: Slow Down| Producer\n  Buffer --> Consumer[Slow Consumer]
```
