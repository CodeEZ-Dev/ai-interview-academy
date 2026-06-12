---
title: "Retry Logic"
slug: "/system-design/architecture-resilience/retry-logic"
---

# Retry Logic

## Overview
Retry logic is the mechanism of resending a failed request to recover from transient network errors or temporary service outages.

## Core Mechanics & How It Works
Blind retries can overload a struggling service, causing a 'retry storm'. Safe retries require exponential backoff, randomized jitter, and idempotency guarantees on the target service.

## Architecture & Common Patterns
Here are the primary ways this topic is implemented in production systems:
- **Exponential Backoff**:  Doubling the delay time between consecutive retries.\n- **Randomized Jitter**:  Adding random noise to the delay to prevent synchronized retry spikes from multiple clients.\n- **Non-Retryable Exceptions**:  Immediately failing requests on client errors (4xx) or authorization failures.\n
## Trade-offs & Limitations
- **Operational Complexity**: Implementing this concept increases overall design complexity and setup.
- **Resource Constraints**: It often trades CPU/memory for network/disk resources or vice versa.
- **Tradeoffs**:
  - Retries increase client-perceived latency on persistent failures.\n  - Non-idempotent endpoints can cause duplicate payments or double writes on retries.\n
## System Design Interview Strategy
- **What to Focus On**: Explain the math behind exponential backoff with jitter and why retries should only be applied to idempotent endpoints.
- **Common Scenarios**: Address how this maps to high availability, consistency constraints, or low-latency targets.

## Visual Architecture Diagram
```mermaid
graph TD\n  Call[Call API] -->|Fail| Wait[Wait: 2^attempt + random Jitter] --> Retry[Retry Call]
```
