---
title: "Throughput"
slug: "/system-design/foundations-performance/throughput"
---

# Throughput

## Overview
Throughput represents the rate at which a system processes successful actions or requests per unit of time (e.g., Requests Per Second, Transactions Per Second, or Megabytes Per Second).

## Core Mechanics & How It Works
Throughput is determined by the system's narrowest bottleneck (e.g., database write limits, network card capacity, thread pool size). It is important to distinguish throughput from latency; a system can have high throughput (processing millions of batch transactions) but high latency (each taking minutes).

## Architecture & Common Patterns
Here are the primary ways this topic is implemented in production systems:
- **Batching**:  Grouping multiple read/write requests together to minimize connection overhead.\n- **Non-blocking I/O**:  Allowing a single thread to manage thousands of concurrent active connections.\n- **Read Replicas**:  Distributing query operations to scale read throughput.\n
## Trade-offs & Limitations
- **Operational Complexity**: Implementing this concept increases overall design complexity and setup.
- **Resource Constraints**: It often trades CPU/memory for network/disk resources or vice versa.
- **Tradeoffs**:
  - Increasing throughput by batching can increase the latency of individual requests.\n  - Non-blocking architectures are highly concurrent but harder to debug and write.\n
## System Design Interview Strategy
- **What to Focus On**: Explain how you will scale write throughput (e.g., using database partitions, LSM tree databases like Cassandra, or message brokers like Kafka).
- **Common Scenarios**: Address how this maps to high availability, consistency constraints, or low-latency targets.

## Visual Architecture Diagram
```mermaid
graph LR\n  BatchInput[Individual Writes] --> Queue[In-Memory Queue]\n  Queue -->|Batched Flush| DB[(DB Writes scaled by Batching)]
```
