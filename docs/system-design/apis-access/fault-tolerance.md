---
title: "Fault Tolerance"
slug: "/system-design/apis-access/fault-tolerance"
---

# Fault Tolerance

## Overview
Fault tolerance is the property that enables a system to continue operating properly in the event of the failure of some of its components.

## Core Mechanics & How It Works
It requires proactive failure domain design, active monitoring, component isolation, redundancy, and graceful degradation paths.

## Architecture & Common Patterns
Here are the primary ways this topic is implemented in production systems:
- **Active Redundancy**:  Keeping backup servers running synchronously.\n- **Degraded Operations**:  Returning fallback default states when a system dependency fails.\n- **Self-Healing**:  Orchestrators auto-terminating and restarting unhealthy nodes.\n
## Trade-offs & Limitations
- **Operational Complexity**: Implementing this concept increases overall design complexity and setup.
- **Resource Constraints**: It often trades CPU/memory for network/disk resources or vice versa.
- **Tradeoffs**:
  - Designing fault-tolerant systems is expensive and adds code and deployment path complexity.\n  - It can mask underlying defects if debugging and alerts are not set up properly.\n
## System Design Interview Strategy
- **What to Focus On**: Explain that fault tolerance does not mean avoiding errors completely. It means containing errors within a blast radius and keeping the rest of the application running.
- **Common Scenarios**: Address how this maps to high availability, consistency constraints, or low-latency targets.

## Visual Architecture Diagram
```mermaid
graph TD\n  Client --> App[App Server]\n  App -->|Read Catalog: OK| DB[(DB)]\n  App -->|Read Personal Recommendations: Failed| RecCache[Return static top-10 items]
```
