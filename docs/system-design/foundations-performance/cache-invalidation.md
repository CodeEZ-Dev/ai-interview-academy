---
title: "Cache Invalidation"
slug: "/system-design/foundations-performance/cache-invalidation"
---

# Cache Invalidation

## Overview
Cache invalidation is the process of declaring cached data stale or incorrect and removing or replacing it, ensuring database modifications are reflected in client reads.

## Core Mechanics & How It Works
Data is invalidated using Time-To-Live (TTL) expiration, explicit deletion (purging on database writes), or cache-aside write policies.

## Architecture & Common Patterns
Here are the primary ways this topic is implemented in production systems:
- **TTL-Based Invalidation**:  Automatically evicting keys after a set duration.\n- **Write-Through Update**:  Direct update of the cache key on database write.\n- **Active Invalidation (CDC)**:  Databases emitting events (Change Data Capture) that trigger cache purges.\n
## Trade-offs & Limitations
- **Operational Complexity**: Implementing this concept increases overall design complexity and setup.
- **Resource Constraints**: It often trades CPU/memory for network/disk resources or vice versa.
- **Tradeoffs**:
  - Short TTLs increase database load; long TTLs increase data staleness risk.\n  - Active invalidation logic is complex to implement and debug across microservices.\n
## System Design Interview Strategy
- **What to Focus On**: Quote the famous computer science saying: 'There are only two hard things in Computer Science: cache invalidation and naming things.' Walk through invalidation strategies for a specific scenario (e.g., updating a user profile).
- **Common Scenarios**: Address how this maps to high availability, consistency constraints, or low-latency targets.

## Visual Architecture Diagram
```mermaid
graph TD\n  Write[Write Request] --> DB[(Update DB)]\n  DB --> Event[Change Event]\n  Event --> CachePurge[Invalidate/Delete Cache Key]
```
