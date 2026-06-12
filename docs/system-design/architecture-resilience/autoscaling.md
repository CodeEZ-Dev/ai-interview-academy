---
title: "Autoscaling"
slug: "/system-design/architecture-resilience/autoscaling"
---

# Autoscaling

## Overview
Autoscaling dynamically adjusts the number of active server instances in a cluster based on real-time traffic demand.

## Core Mechanics & How It Works
Monitoring agents collect metrics (CPU, memory, queue lag). When metrics cross scale-up thresholds, the orchestrator spins up new instances; when traffic drops, instances are decommissioned.

## Architecture & Common Patterns
Here are the primary ways this topic is implemented in production systems:
- **Horizontal Pod Autoscaler (HPA)**:  Adjusting container instance counts based on CPU utilization.\n- **Vertical Pod Autoscaler (VPA)**:  Adjusting CPU/RAM allocations of existing containers.\n- **Predictive Scaling**:  Scaling instances based on historical patterns before spikes arrive.\n
## Trade-offs & Limitations
- **Operational Complexity**: Implementing this concept increases overall design complexity and setup.
- **Resource Constraints**: It often trades CPU/memory for network/disk resources or vice versa.
- **Tradeoffs**:
  - Spinning up containers takes time, potentially causing slow responses during rapid traffic spikes.\n  - Autoscaling can oscillate (thrashing) if scale-down rules are too aggressive.\n
## System Design Interview Strategy
- **What to Focus On**: Discuss metric selection (e.g., using message queue lag rather than CPU for consumer scaling) and how to configure cooldown periods.
- **Common Scenarios**: Address how this maps to high availability, consistency constraints, or low-latency targets.

## Visual Architecture Diagram
```mermaid
graph TD\n  Metrics[Telemetry Agent] -->|CPU > 80%| Scale{Scale Trigger}\n  Scale -->|Deploy Instance| Fleet[Application fleet size increases]
```
