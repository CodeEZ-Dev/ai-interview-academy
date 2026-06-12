---
title: "Denormalization"
slug: "/system-design/apis-access/denormalization"
---

# Denormalization

## Overview
Denormalization is a database optimization technique where redundant data is deliberately added to a normalized database schema to improve read performance by avoiding joins.

## Core Mechanics & How It Works
Rather than performing SQL JOINs across multiple tables at query time, child resource attributes are duplicated directly inside parent records.

## Architecture & Common Patterns
Here are the primary ways this topic is implemented in production systems:
- **Data Duplication**:  Storing both `user_id` and `user_name` directly in an `orders` table to display order histories without querying the users table.\n- **Materialized Summaries**:  Storing computed counts (e.g., `num_likes`) directly on a post record, updated via background triggers.\n
## Trade-offs & Limitations
- **Operational Complexity**: Implementing this concept increases overall design complexity and setup.
- **Resource Constraints**: It often trades CPU/memory for network/disk resources or vice versa.
- **Tradeoffs**:
  - Updates to the master record must propagate to all duplicated fields, risking data inconsistency.\n  - Denormalization increases storage footprint due to redundant text strings.\n
## System Design Interview Strategy
- **What to Focus On**: Discuss the read-to-write ratio of the application. If reads are 99% of traffic, denormalization is a highly effective trade-off; if writes are frequent, normalized tables are preferred.
- **Common Scenarios**: Address how this maps to high availability, consistency constraints, or low-latency targets.

## Visual Architecture Diagram
```mermaid
graph LR\n  Normal[Normalized: Orders Table -> User ID -> User Table]\n  Denormal[Denormalized: Orders Table has User ID & User Name directly]
```
