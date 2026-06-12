---
title: "High Availability"
slug: "/system-design/apis-access/high-availability"
---

# High Availability

## Overview
High availability (HA) refers to a system design protocol that ensures a high level of operational performance, usually uptime, over a given period.

## Core Mechanics & How It Works
HA is implemented by eliminating single points of failure through redundancy, deploying databases in multi-AZ (Availability Zone) and multi-region modes, and setting up automated failovers via load balancers.

## Architecture & Common Patterns
Here are the primary ways this topic is implemented in production systems:
- **Multi-AZ Deployment**:  Hosting instances in separate physical datacenters.\n- **Virtual IP (VIP) Failover**:  Using keepalived or heartbeat tools to transfer IPs between nodes.\n- **Global Load Balancing (GSLB)**:  DNS-based routing to direct users away from offline regions.\n
## Trade-offs & Limitations
- **Operational Complexity**: Implementing this concept increases overall design complexity and setup.
- **Resource Constraints**: It often trades CPU/memory for network/disk resources or vice versa.
- **Tradeoffs**:
  - Deploying multi-region increases database write replication latency and data replication costs.\n  - Maintaining configuration parity across redundant environments is operationally challenging.\n
## System Design Interview Strategy
- **What to Focus On**: Address database replication lag in multi-AZ/multi-region designs, and explain how reads from local regions are balanced against write synchronization latency.
- **Common Scenarios**: Address how this maps to high availability, consistency constraints, or low-latency targets.

## Visual Architecture Diagram
```mermaid
graph TD\n  User --> GSLB[Geo-Load Balancer]\n  GSLB -->|Route to Zone A| zoneA[US-East Region]\n  GSLB -->|Route to Zone B| zoneB[US-West Region]\n  zoneA -->|Sync Replication| zoneB
```
