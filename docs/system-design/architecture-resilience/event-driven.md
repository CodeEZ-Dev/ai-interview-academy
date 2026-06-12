---
title: "Event-Driven"
slug: "/system-design/architecture-resilience/event-driven"
---

# Event-Driven

## Overview
An event-driven architecture is a software design pattern where decoupled services react to events published by producers, enabling asynchronous processing.

## Core Mechanics & How It Works
Producers emit events (state updates) to an event broker (Kafka, RabbitMQ, SNS). Consumers subscribe to topics, processing events independently without the producer blocking.

## Architecture & Common Patterns
Here are the primary ways this topic is implemented in production systems:
- **Publish-Subscribe**:  Routing an event to all interested service consumers.\n- **Event Collaboration**:  Services perform local work, emit a completion event, and trigger downstream workers.\n- **Change Data Capture (CDC)**:  Streaming database changes as event notifications.\n
## Trade-offs & Limitations
- **Operational Complexity**: Implementing this concept increases overall design complexity and setup.
- **Resource Constraints**: It often trades CPU/memory for network/disk resources or vice versa.
- **Tradeoffs**:
  - Event-driven architectures introduce eventual consistency, out-of-order execution, and duplicate deliveries.\n  - Tracing distributed asynchronous request flows requires structured correlation IDs.\n
## System Design Interview Strategy
- **What to Focus On**: Explain how you will handle duplicate events (idempotency) and describe tracing schemas for asynchronous messaging queues.
- **Common Scenarios**: Address how this maps to high availability, consistency constraints, or low-latency targets.

## Visual Architecture Diagram
```mermaid
graph LR\n  Prod[Order Service] -->|Publish: OrderCreated| Broker[Event Broker]\n  Broker -->|Push Event| Cons1[Inventory Service]\n  Broker -->|Push Event| Cons2[Email Service]
```
