---
title: "Tracing"
slug: "/system-design/observability-search/tracing"
---

# Tracing

## Overview
Distributed tracing tracks request lifecycles as they propagate across multiple microservices and network boundaries.

## Core Mechanics & How It Works
When a request starts, the gateway generates a unique Trace ID. As the request calls downstream services, context headers propagate the Trace ID along with Span IDs (representing individual units of work).

## Architecture & Common Patterns
Here are the primary ways this topic is implemented in production systems:
- **W3C Trace Context**:  Standardization of trace propagation headers.\n- **Context Propagation**:  Passing trace contexts through HTTP headers, metadata fields, or gRPC contexts.\n
## Trade-offs & Limitations
- **Operational Complexity**: Implementing this concept increases overall design complexity and setup.
- **Resource Constraints**: It often trades CPU/memory for network/disk resources or vice versa.
- **Tradeoffs**:
  - Tracing 100% of requests adds significant network overhead and storage costs.\n  - Requires instrumenting all HTTP/gRPC clients and queue publishers across services.\n
## System Design Interview Strategy
- **What to Focus On**: Explain sampling strategies (e.g., head-based sampling vs. tail-based sampling) to balance tracing coverage against storage budgets.
- **Common Scenarios**: Address how this maps to high availability, consistency constraints, or low-latency targets.

## Visual Architecture Diagram
```mermaid
graph LR\n  Client -->|TraceID: 123| API[API Gateway]\n  API -->|SpanID: A| UserSvc[User Service]\n  UserSvc -->|SpanID: B| DB[(PostgreSQL)]
```
