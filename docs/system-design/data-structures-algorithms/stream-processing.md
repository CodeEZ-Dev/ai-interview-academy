---
title: "Stream Processing"
slug: "/system-design/data-structures-algorithms/stream-processing"
---

# Stream Processing

## Overview
Stream processing is the continuous execution of computations on an unbounded, real-time stream of incoming events as they occur.

## Core Mechanics & How It Works
Events (e.g., sensor clicks, stock trades) are ingested by message brokers (Kafka, Kinesis) and processed dynamically using stream engines (Flink, Spark Streaming) using time-window techniques (tumbling, sliding, session).

## Architecture & Common Patterns
Here are the primary ways this topic is implemented in production systems:
- **Real-Time Fraud Detection**:  Analyzing transaction events within a 10-second sliding window.\n- **Aggregation Engine**:  Continuously summing metric data for real-time dashboards.\n
## Trade-offs & Limitations
- **Operational Complexity**: Implementing this concept increases overall design complexity and setup.
- **Resource Constraints**: It often trades CPU/memory for network/disk resources or vice versa.
- **Tradeoffs**:
  - Stream processing requires managing in-memory state, checkpointing, and out-of-order events.\n  - Ensuring exactly-once processing semantics is difficult and adds overhead.\n
## System Design Interview Strategy
- **What to Focus On**: Explain exactly-once processing semantics, discuss event-time vs. processing-time windowing, and show how watermarks handle delayed events.
- **Common Scenarios**: Address how this maps to high availability, consistency constraints, or low-latency targets.

## Visual Architecture Diagram
```mermaid
graph LR\n  Kafka[Kafka Event Stream] -->|Ingest| Flink[Flink Engine]\n  Flink -->|Sliding Window Aggregation| DB[(Real-Time DB)]
```
