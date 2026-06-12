---
title: "Idempotency"
slug: "/system-design/architecture-resilience/idempotency"
---

# Idempotency

## Overview
Idempotency ensures that performing an operation multiple times has the same outcome as executing it once, preventing duplicate state mutations on network retries.

## Core Mechanics & How It Works
Clients generate a unique Idempotency Key (UUID) and pass it in the request header. The server checks the key against a cache (e.g., Redis). If the key exists, the server returns the cached response directly; otherwise, it locks the key, processes the request, caches the result, and returns.

## Architecture & Common Patterns
Here are the primary ways this topic is implemented in production systems:
- **Idempotent API Keys**:  Storing key-to-response mappings in a database with unique constraints.\n- **Database Unique Constraints**:  Enforcing integrity using constraints (e.g., user_id + order_timestamp) to block duplicate writes.\n
## Trade-offs & Limitations
- **Operational Complexity**: Implementing this concept increases overall design complexity and setup.
- **Resource Constraints**: It often trades CPU/memory for network/disk resources or vice versa.
- **Tradeoffs**:
  - Enforcing idempotency requires database lookups for every request, adding lookup overhead.\n  - Handling concurrent duplicate requests requires distributed locks, introducing race conditions.\n
## System Design Interview Strategy
- **What to Focus On**: Crucial for payment APIs. Explain the detailed mechanics of caching idempotency keys in Redis, managing key expirations, and using database unique constraints as a safety guard.
- **Common Scenarios**: Address how this maps to high availability, consistency constraints, or low-latency targets.

## Visual Architecture Diagram
```mermaid
graph TD\n  Req[Req + Idempotency Key] --> Redis{Key exists in Redis?}\n  Redis -->|Yes: Duplicate| Return[Return Cached Response]\n  Redis -->|No: New| DB[(Save Key & Process Request)]\n  DB --> Cache[Cache Result in Redis]
```
