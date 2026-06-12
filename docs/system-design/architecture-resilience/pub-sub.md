---
title: "Pub/Sub"
slug: "/system-design/architecture-resilience/pub-sub"
---

# Pub/Sub

## Overview
Publish-Subscribe (Pub/Sub) is a messaging pattern where producers (publishers) send messages to a topic without knowing who the receivers (subscribers) are.

## Core Mechanics & How It Works
The Pub/Sub broker duplicates incoming messages and forwards them to all subscription queues registered to the topic, separating publishers from consumer configurations.

## Architecture & Common Patterns
Here are the primary ways this topic is implemented in production systems:
- **Topic Partitioning**:  Splitting a topic across shards (e.g., Kafka partitions) to scale consumer groups horizontally.\n- **Fanout Routing**:  Broadcasting messages to all connected endpoints (e.g., AWS SNS fanout to SQS queues).\n
## Trade-offs & Limitations
- **Operational Complexity**: Implementing this concept increases overall design complexity and setup.
- **Resource Constraints**: It often trades CPU/memory for network/disk resources or vice versa.
- **Tradeoffs**:
  - Message replication across multiple queues consumes broker memory and network IO.\n  - Pub/Sub systems make debugging message flow difficult, as any system can subscribe to topics dynamically.\n
## System Design Interview Strategy
- **What to Focus On**: Differentiate Pub/Sub (broadcast to multiple consumers) from Message Queues (point-to-point, single worker consumption).
- **Common Scenarios**: Address how this maps to high availability, consistency constraints, or low-latency targets.

## Visual Architecture Diagram
```mermaid
graph TD\n  Pub[Publisher] --> Topic((Topic: UserSignup))\n  Topic --> Sub1[Sub Queue: EmailService]\n  Topic --> Sub2[Sub Queue: AnalyticsService]
```
