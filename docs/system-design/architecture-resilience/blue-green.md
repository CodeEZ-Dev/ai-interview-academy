---
title: "Blue-Green"
slug: "/system-design/architecture-resilience/blue-green"
---

# Blue-Green

## Overview
Blue-Green deployment is a release pattern that reduces risk and downtime by running two identical production environments, only one of which serves active user traffic.

## Core Mechanics & How It Works
One environment (Blue) runs the active production version, while the new version is deployed and tested in the second environment (Green). Once validated, the router switches traffic to Green instantly.

## Architecture & Common Patterns
Here are the primary ways this topic is implemented in production systems:
- **Router/LB Switch**:  Modifying load balancer weights to direct traffic from one region to another.\n- **Instant Rollback**:  Reverting the router switch if errors are detected in the new version.\n
## Trade-offs & Limitations
- **Operational Complexity**: Implementing this concept increases overall design complexity and setup.
- **Resource Constraints**: It often trades CPU/memory for network/disk resources or vice versa.
- **Tradeoffs**:
  - Requires maintaining double the hardware capacity, doubling infrastructure costs.\n  - Shared databases must support backward-compatible schemas (no destructive column drops).\n
## System Design Interview Strategy
- **What to Focus On**: Highlight the database compatibility requirement: use the expand-and-contract pattern to support migrations without breaking the active app version.
- **Common Scenarios**: Address how this maps to high availability, consistency constraints, or low-latency targets.

## Visual Architecture Diagram
```mermaid
graph TD\n  LB[Router] -->|Switch Traffic| Blue[Blue Environment: V1.0 Active]\n  LB -.-> Green[Green Environment: V1.1 Staging/Warm]
```
