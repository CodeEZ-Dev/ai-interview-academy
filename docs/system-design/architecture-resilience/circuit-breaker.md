---
title: "Circuit Breaker"
slug: "/system-design/architecture-resilience/circuit-breaker"
---

# Circuit Breaker

## Overview
A circuit breaker is a resilience pattern that prevents an application from repeatedly calling a failing dependency, protecting system resources and latency.

## Core Mechanics & How It Works
The breaker operates in three states: Closed (normal execution), Open (dependencies are failing; requests fail fast instantly without network calls), and Half-Open (sends trial requests to check if the dependency has recovered).

## Architecture & Common Patterns
Here are the primary ways this topic is implemented in production systems:
- **Fail-Fast Fallback**:  Returning local static data when the circuit is open.\n- **Adaptive Circuit Breaking**:  Dynamically adjusting failure thresholds based on traffic volume.\n
## Trade-offs & Limitations
- **Operational Complexity**: Implementing this concept increases overall design complexity and setup.
- **Resource Constraints**: It often trades CPU/memory for network/disk resources or vice versa.
- **Tradeoffs**:
  - State management of the circuit breaker requires distributed tracking (e.g., Redis) or memory coordination.\n  - Configuring failure rates and timeout thresholds is difficult.\n
## System Design Interview Strategy
- **What to Focus On**: Trace the state transition diagram (Closed -> Open -> Half-Open -> Closed) and explain how the pattern protects client request threads from locking up on dead dependencies.
- **Common Scenarios**: Address how this maps to high availability, consistency constraints, or low-latency targets.

## Visual Architecture Diagram
```mermaid
stateDiagram-v2\n  [*] --> Closed\n  Closed --> Open: Error Threshold Exceeded\n  Open --> HalfOpen: Reset Timeout Expired\n  HalfOpen --> Closed: Success Rate Met\n  HalfOpen --> Open: Trial Request Fails
```
