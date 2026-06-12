---
title: "Monitoring"
slug: "/system-design/observability-search/monitoring"
---

# Monitoring

## Overview
Monitoring collects and evaluates system signals to determine whether services are operating within normal parameters.

## Core Mechanics & How It Works
Monitoring engines evaluate thresholds, run scheduled uptime checks, and display system state metrics on visual dashboards.

## Architecture & Common Patterns
Here are the primary ways this topic is implemented in production systems:
- **Black-Box Monitoring**:  Testing services externally (e.g., pinging API endpoints to check response status).\n- **White-Box Monitoring**:  Checking internal application state using telemetry data.\n- **Synthetic Testing**:  Running automated browser scripts in production to simulate user flows.\n
## Trade-offs & Limitations
- **Operational Complexity**: Implementing this concept increases overall design complexity and setup.
- **Resource Constraints**: It often trades CPU/memory for network/disk resources or vice versa.
- **Tradeoffs**:
  - Static alert thresholds generate false alerts (flapping) during minor traffic spikes.\n  - Dashboards can become cluttered, making it hard to identify critical issues quickly.\n
## System Design Interview Strategy
- **What to Focus On**: Discuss monitoring from a user perspective. Focus on user-facing anomalies (e.g., payment failures or slow checkouts) rather than just system-level alerts (e.g., high CPU).
- **Common Scenarios**: Address how this maps to high availability, consistency constraints, or low-latency targets.

## Visual Architecture Diagram
```mermaid
graph TD\n  Monitor[Monitor Server] -->|Synthetic ping| API[API Gateway]\n  Monitor -->|Scrape metrics| Host[Host Metrics]\n  Monitor -->|Display| Dashboard[Grafana Dashboard]
```
