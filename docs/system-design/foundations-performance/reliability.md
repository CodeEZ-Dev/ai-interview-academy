---
title: "Reliability"
slug: "/system-design/foundations-performance/reliability"
---

# Reliability

## Overview
Reliability is the probability that a system will perform its intended function correctly under specified conditions for a specified period. While availability is about 'being up', reliability is about 'not failing or corrupting data' while up.

## Core Mechanics & How It Works
Reliability focus areas include transaction safety, graceful degradation under stress, error boundaries to prevent fault cascade, and offline recovery mechanics.

## Architecture & Common Patterns
Here are the primary ways this topic is implemented in production systems:
- **Fault Isolation**:  Using microservices or sandboxes to keep failures contained.\n- **Graceful Degradation**:  Shutting off non-essential features (e.g., recommendations) to keep core transaction paths running.\n- **Write-Ahead Logging (WAL)**:  Ensuring transaction history is written to disk before modifying database state.\n
## Trade-offs & Limitations
- **Operational Complexity**: Implementing this concept increases overall design complexity and setup.
- **Resource Constraints**: It often trades CPU/memory for network/disk resources or vice versa.
- **Tradeoffs**:
  - Ensuring strict reliability increases write latency and overall processing overhead.\n  - It requires rigorous testing, defensive programming, and validation guards.\n
## System Design Interview Strategy
- **What to Focus On**: Distinguish between availability and reliability. Explain how you will handle failures gracefully without corrupting database state.
- **Common Scenarios**: Address how this maps to high availability, consistency constraints, or low-latency targets.

## Visual Architecture Diagram
```mermaid
graph TD\n  Request --> Gateway[API Gateway]\n  Gateway -->|Healthy| Auth[Auth Service]\n  Gateway -->|Slow/Failing| Fallback[Degraded Static Auth Cache]
```
