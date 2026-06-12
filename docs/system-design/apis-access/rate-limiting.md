---
title: "Rate Limiting"
slug: "/system-design/apis-access/rate-limiting"
---

# Rate Limiting

## Overview
Rate limiting restricts the number of requests a user or client can make to a system within a given timeframe, protecting the system from denial-of-service (DDoS) attacks, brute-forcing, and resource exhaustion.

## Core Mechanics & How It Works
Rate limiters run at the edge (API Gateway, CDN) or inside middleware. They identify clients (by IP, API key, JWT claims) and check usage against counters stored in fast in-memory databases like Redis.

## Architecture & Common Patterns
Here are the primary ways this topic is implemented in production systems:
- **Token Bucket**:  Tokens accumulate in a bucket up to a capacity; each request consumes a token. Allows handling bursty traffic.\n- **Leaky Bucket**:  Requests enter a queue and leak out at a constant rate, smoothing traffic spikes.\n- **Sliding Window Counter**:  Precise limit tracking across overlapping time windows.\n
## Trade-offs & Limitations
- **Operational Complexity**: Implementing this concept increases overall design complexity and setup.
- **Resource Constraints**: It often trades CPU/memory for network/disk resources or vice versa.
- **Tradeoffs**:
  - Distributed rate limiting requires shared state (e.g., Redis), adding latency and potential single points of failure.\n  - Loose limit sync policies can lead to limit bypasses; strict sync adds overhead.\n
## System Design Interview Strategy
- **What to Focus On**: Discuss how to handle rate-limit headers (e.g., X-RateLimit-Limit, X-RateLimit-Remaining, Retry-After) and how to scale the rate limiter using Redis Lua scripts.
- **Common Scenarios**: Address how this maps to high availability, consistency constraints, or low-latency targets.

## Visual Architecture Diagram
```mermaid
graph TD\n  Req[Incoming Request] --> LimitCheck{Limit Exceeded? Redis check}\n  LimitCheck -->|No: Increment Counter| Service[Forward to App]\n  LimitCheck -->|Yes| HTTP429[Return HTTP 429 Too Many Requests]
```
