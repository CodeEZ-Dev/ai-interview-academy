---
title: "Capacity"
slug: "/system-design/foundations-performance/capacity"
---

# Capacity

## Overview
Capacity planning is the practice of determining the system resources (CPU, RAM, storage, network bandwidth, IOPS, connection pools) required to meet demand and support SLA targets.

## Core Mechanics & How It Works
Estimating capacity involves calculating active user numbers, average/peak requests per second, payload size, storage growth rates, and safety margins (e.g., designing for 2x peak load).

## Architecture & Common Patterns
Here are the primary ways this topic is implemented in production systems:
- **Over-provisioning**:  Keeping resources well above expected peaks to absorb spikes.\n- **Resource Quotas & Limits**:  Enforcing limits on containers to prevent one service from starving others.\n- **Data Retention Policies**:  Archiving or deleting old data to control disk storage growth.\n
## Trade-offs & Limitations
- **Operational Complexity**: Implementing this concept increases overall design complexity and setup.
- **Resource Constraints**: It often trades CPU/memory for network/disk resources or vice versa.
- **Tradeoffs**:
  - Over-provisioning leads to low utilization and high cloud costs.\n  - Under-provisioning causes system degradation, queue overflows, and out-of-memory crashes.\n
## System Design Interview Strategy
- **What to Focus On**: Walk through basic back-of-the-envelope calculations: storage needs for 5 years, memory needs for cached data, and bandwidth requirements for files.
- **Common Scenarios**: Address how this maps to high availability, consistency constraints, or low-latency targets.

## Visual Architecture Diagram
```mermaid
graph TD\n  IncomingTraffic[Incoming Traffic] --> Buffer[Thread Pool/Queue Limit]\n  Buffer -->|Under Limit| Process[Normal Processing]\n  Buffer -->|Over Limit| Discard[Load Shedding / Overflows]
```
