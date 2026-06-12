---
title: "Caching"
slug: "/system-design/foundations-performance/caching"
---

# Caching

## Overview
Caching stores frequently or recently requested data in a fast, temporary access medium (typically RAM) to bypass slow disk reads or complex database computations.

## Core Mechanics & How It Works
Caches are deployed at multiple layers (Browser, CDN, API Gateway, Application Memory, Distributed Cache like Redis). When data is requested, a 'hit' returns it instantly; a 'miss' fetches it from the database and writes it to the cache.

## Architecture & Common Patterns
Here are the primary ways this topic is implemented in production systems:
- **Cache-Aside (Lazy Loading)**:  App checks cache; if miss, loads from DB, writes to cache, and returns.\n- **Write-Through**:  App writes to cache and DB synchronously.\n- **Write-Behind (Write-Back)**:  App writes to cache immediately; cache updates DB asynchronously.\n
## Trade-offs & Limitations
- **Operational Complexity**: Implementing this concept increases overall design complexity and setup.
- **Resource Constraints**: It often trades CPU/memory for network/disk resources or vice versa.
- **Tradeoffs**:
  - Caching adds data inconsistency risks (stale data in cache).\n  - It requires memory management, eviction policies (LRU, LFU), and protection against cold-start failures.\n
## System Design Interview Strategy
- **What to Focus On**: Understand eviction algorithms (Least Recently Used is the industry standard) and sizing parameters based on memory usage.
- **Common Scenarios**: Address how this maps to high availability, consistency constraints, or low-latency targets.

## Visual Architecture Diagram
```mermaid
graph LR\n  App[Application] -->|1. Check Key| Cache{Redis Cache}\n  Cache -->|Hit| Return[Return Value]\n  Cache -->|Miss| DB[(Database)]\n  DB -->|2. Write Back| Cache
```
