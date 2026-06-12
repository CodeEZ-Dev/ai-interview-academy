---
title: "Cache Stampede"
slug: "/system-design/observability-search/cache-stampede"
---

# Cache Stampede

## Overview
A cache stampede (dogpiling) is a failure pattern that occurs when a popular cache key expires, causing multiple concurrent requests to miss the cache at once and overwhelm the database.

## Core Mechanics & How It Works
When a high-traffic key expires, all concurrent requests miss the cache. If 1,000 threads attempt to read and write the missing value simultaneously, it causes database locking and CPU exhaustion.

## Architecture & Common Patterns
Here are the primary ways this topic is implemented in production systems:
- **Mutex Locking**:  Using a distributed lock to allow only the first thread to fetch the value from the database, while other threads wait.\n- **Probabilistic Early Expiration**:  Calculating key expiration probabilistically and refreshing the key in the background before it actually expires.\n- **Background Refresh**:  Running cron tasks to refresh cache keys before they expire, bypass-loading client requests.\n
## Trade-offs & Limitations
- **Operational Complexity**: Implementing this concept increases overall design complexity and setup.
- **Resource Constraints**: It often trades CPU/memory for network/disk resources or vice versa.
- **Tradeoffs**:
  - Distributed locks add code complexity and latency.\n  - Early expiration can cause unnecessary background database writes.\n
## System Design Interview Strategy
- **What to Focus On**: Outline how you prevent stampedes for popular keys (like homepage configurations or product details) using mutex locking or probabilistic early expiration.
- **Common Scenarios**: Address how this maps to high availability, consistency constraints, or low-latency targets.

## Visual Architecture Diagram
```mermaid
graph TD\n  Req[1000 Parallel Requests] --> Cache{Cache Miss}\n  Cache -->|Acquire Lock: Thread 1| DB[(Query DB & Write Cache)]\n  Cache -->|Lock Active: Thread 2-1000| Wait[Wait or Return Stale Value]
```
