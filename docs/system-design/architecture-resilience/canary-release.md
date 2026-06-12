---
title: "Canary Release"
slug: "/system-design/architecture-resilience/canary-release"
---

# Canary Release

## Overview
A canary release is a deployment strategy where a software update is rolled out to a small subset of servers or users before full deployment.

## Core Mechanics & How It Works
Traffic routing configurations direct a small percentage of requests (e.g., 2%) to the new canary version. Metrics are monitored for error spikes or latency regressions. If clear, the rollout percentage is increased gradually.

## Architecture & Common Patterns
Here are the primary ways this topic is implemented in production systems:
- **Sticky Canary**:  Routing users to the canary based on user ID or cookie to ensure a consistent experience.\n- **Automated Canary Analysis (ACA)**:  Using automated tools (e.g., Spinnaker) to evaluate canary telemetry.\n
## Trade-offs & Limitations
- **Operational Complexity**: Implementing this concept increases overall design complexity and setup.
- **Resource Constraints**: It often trades CPU/memory for network/disk resources or vice versa.
- **Tradeoffs**:
  - Canary deployments complicate routing logic at the API Gateway level.\n  - Running multiple versions of a service simultaneously requires backward-compatible database schemas.\n
## System Design Interview Strategy
- **What to Focus On**: Explain how you monitor metrics (e.g., HTTP 5xx error rates, response latencies) on the canary compared to baseline nodes to determine rollback triggers.
- **Common Scenarios**: Address how this maps to high availability, consistency constraints, or low-latency targets.

## Visual Architecture Diagram
```mermaid
graph TD\n  LB[Load Balancer] -->|98% Traffic| Prod[Production V1.0]\n  LB -->|2% Traffic| Canary[Canary V1.1]\n  Canary -->|Alert Triggered? Rollback| LB
```
