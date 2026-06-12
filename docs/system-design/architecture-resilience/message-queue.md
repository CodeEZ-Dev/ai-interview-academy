---
title: "Message Queue"
slug: "/system-design/architecture-resilience/message-queue"
---

# Message Queue

## Overview
A message queue is a point-to-point communication channel that buffers asynchronous messages between producers and consumers.

## Core Mechanics & How It Works
Producers push tasks to the queue. The queue persists messages in memory or disk and distributes them to active workers, ensuring each task is processed by a single consumer (competing consumers pattern).

## Architecture & Common Patterns
Here are the primary ways this topic is implemented in production systems:
- **Competing Consumers**:  Multiple workers pulling from a single queue to distribute heavy CPU processing.\n- **Dead Letter Queue (DLQ)**:  A secondary queue where poison messages (repeatedly failing tasks) are routed for inspection.\n- **Priority Queue**:  Processing high-priority tasks before normal tasks.\n
## Trade-offs & Limitations
- **Operational Complexity**: Implementing this concept increases overall design complexity and setup.
- **Resource Constraints**: It often trades CPU/memory for network/disk resources or vice versa.
- **Tradeoffs**:
  - Message queues require infrastructure monitoring, and adding them adds queueing delay to request paths.\n  - Queues can overflow if consumer processing speeds fall behind producer write rates.\n
## System Design Interview Strategy
- **What to Focus On**: Explain how message queues help absorb traffic spikes (load leveling), and discuss how you configure timeouts and retries on consumer nodes.
- **Common Scenarios**: Address how this maps to high availability, consistency constraints, or low-latency targets.

## Visual Architecture Diagram
```mermaid
graph LR\n  Prod[Web App] -->|Enqueue Task| Queue[Job Queue]\n  Queue --> Worker1[Worker A]\n  Queue --> Worker2[Worker B]\n  Queue -->|Failing Task| DLQ[Dead Letter Queue]
```
