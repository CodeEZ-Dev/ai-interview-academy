---
title: "Materialized View"
slug: "/system-design/observability-search/materialized-view"
---

# Materialized View

## Overview
A materialized view stores the precomputed results of a database query, providing fast read access to complex aggregations.

## Core Mechanics & How It Works
Unlike standard virtual views, materialized views persist query results on disk. They must be refreshed when underlying tables change, either synchronously (on database writes) or asynchronously (on schedules or triggers).

## Architecture & Common Patterns
Here are the primary ways this topic is implemented in production systems:
- **Immediate Refresh**:  Synchronously updating the view during base table transactions (slows down writes).\n- **Lazy Refresh**:  Updating the view asynchronously using background jobs or change stream events.\n
## Trade-offs & Limitations
- **Operational Complexity**: Implementing this concept increases overall design complexity and setup.
- **Resource Constraints**: It often trades CPU/memory for network/disk resources or vice versa.
- **Tradeoffs**:
  - Materialized views consume storage space and add write latency during data updates.\n  - If refreshed asynchronously, views serve stale data between updates.\n
## System Design Interview Strategy
- **What to Focus On**: Recommend materialized views to accelerate read performance for dashboard reporting queries, and explain how you manage view staleness.
- **Common Scenarios**: Address how this maps to high availability, consistency constraints, or low-latency targets.

## Visual Architecture Diagram
```mermaid
graph TD\n  Write[User Click] --> BaseTable[(Raw Logs Table)]\n  BaseTable -->|Async Schedule Refresh| MatView[(Materialized Aggregate Table)]\n  Reader[Dashboard API] --> MatView
```
