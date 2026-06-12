---
title: "Correlation ID"
slug: "/system-design/observability-search/correlation-id"
---

# Correlation ID

## Overview
A correlation ID is a unique request identifier generated at the start of a workflow and passed through every service call to group related logs.

## Core Mechanics & How It Works
The API Gateway checks for a correlation ID header (e.g., `X-Correlation-ID`) in incoming requests. If missing, it generates a UUID and injects it into the request context, ensuring all logs emitted along the request path contain this identifier.

## Architecture & Common Patterns
Here are the primary ways this topic is implemented in production systems:
- **HTTP Header Propagation**:  Forwarding the ID header in all downstream HTTP requests.\n- **Thread Local Storage**:  Keeping the ID in thread context to automatically inject it into log outputs.\n
## Trade-offs & Limitations
- **Operational Complexity**: Implementing this concept increases overall design complexity and setup.
- **Resource Constraints**: It often trades CPU/memory for network/disk resources or vice versa.
- **Tradeoffs**:
  - If a single downstream service fails to propagate the header, the debugging trail breaks.\n  - Asynchronous boundary jumps (like thread pools or message queues) require manual propagation logic.\n
## System Design Interview Strategy
- **What to Focus On**: Demonstrate how correlation IDs unify logs across services, database queries, and message queues to simplify distributed debugging.
- **Common Scenarios**: Address how this maps to high availability, consistency constraints, or low-latency targets.

## Visual Architecture Diagram
```mermaid
graph LR\n  GW[Gateway: Inject correlation-id: xyz] --> SvcA[Service A: log: xyz]\n  SvcA --> Queue[Message Queue: carries xyz] --> SvcB[Service B: log: xyz]
```
