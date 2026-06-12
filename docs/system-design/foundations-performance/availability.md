---
title: "Availability"
slug: "/system-design/foundations-performance/availability"
---

# Availability

## Overview
Availability is the percentage of time a system remains operational and accessible to perform its required functions. It is commonly measured in 'nines' (e.g., 99.9% / Three Nines or 99.999% / Five Nines). Achieving high availability (HA) requires elimination of single points of failure (SPOFs), automatic recovery, and fault detection.

## Core Mechanics & How It Works
Availability is calculated as MTBF / (MTBF + MTTR), where MTBF is Mean Time Between Failures and MTTR is Mean Time To Repair. Minimizing MTTR is accomplished through automated health checks, self-healing systems, and rapid failover routing.

## Architecture & Common Patterns
Here are the primary ways this topic is implemented in production systems:
- **Active-Active Redundancy**:  Multiple nodes handle traffic concurrently, distributing load.\n- **Active-Passive Redundancy**:  Hot/Warm standby nodes ready to take over if the primary node fails.\n- **Health Checks & Probes**:  Continuous heartbeats checking node responsiveness.\n- **Geo-Redundancy**:  Deploying services in separate geographical regions.\n
## Trade-offs & Limitations
- **Operational Complexity**: Implementing this concept increases overall design complexity and setup.
- **Resource Constraints**: It often trades CPU/memory for network/disk resources or vice versa.
- **Tradeoffs**:
  - Higher availability requires redundant resources, significantly increasing cost.\n  - Active-Active setups present data synchronization challenges, leading to consistency trade-offs.\n
## System Design Interview Strategy
- **What to Focus On**: Do not just state you want 100% availability. Calculate the downtime allowance (e.g., 99.99% allows ~52 minutes of downtime per year) and explain how you design redundancy to meet it.
- **Common Scenarios**: Address how this maps to high availability, consistency constraints, or low-latency targets.

## Visual Architecture Diagram
```mermaid
graph TD\n  Client --> DNS[Geo-DNS]\n  DNS -->|Region A| Active1[Active Region]\n  DNS -->|Region B| Active2[Active Region]\n  Active1 -.->|Sync/Replication| Active2
```
