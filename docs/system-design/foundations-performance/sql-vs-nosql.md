---
title: "SQL vs NoSQL"
slug: "/system-design/foundations-performance/sql-vs-nosql"
---

# SQL vs NoSQL

## Overview
Comparing relational SQL databases (structured, normalized, table-based) and non-relational NoSQL databases (flexible schema, horizontal scale, specialized storage models).

## Core Mechanics & How It Works
SQL databases rely on schemas and SQL query engines, using B-Trees or B+ Trees for indices. NoSQL databases use Key-Value stores, Document stores (JSON/BSON), Column-family stores (LSM trees), or Graph stores (index-free adjacency).

## Architecture & Common Patterns
Here are the primary ways this topic is implemented in production systems:
- **Normalization (SQL)**:  Reducing data redundancy by separating concerns into linked tables.\n- **Denormalization (NoSQL)**:  Embedding nested data inside single records to enable single-key lookups.\n- **Hybrid Persistence**:  Using SQL for transactions (orders/billing) and NoSQL for analytics or catalogs.\n
## Trade-offs & Limitations
- **Operational Complexity**: Implementing this concept increases overall design complexity and setup.
- **Resource Constraints**: It often trades CPU/memory for network/disk resources or vice versa.
- **Tradeoffs**:
  - SQL databases scale horizontally through complex sharding and replication setups.\n  - NoSQL databases lack join query support, requiring application-side join logic.\n
## System Design Interview Strategy
- **What to Focus On**: Do not declare one database type superior. State that SQL is ideal for structured data and ACID guarantees, while NoSQL is preferred for rapid schema evolution and high horizontal scale.
- **Common Scenarios**: Address how this maps to high availability, consistency constraints, or low-latency targets.

## Visual Architecture Diagram
```mermaid
graph TD\n  SQL[SQL: Normalized, Joins] -->|ACID, Transactions| RDBMS[(PostgreSQL/MySQL)]\n  NoSQL[NoSQL: Denormalized, Key Lookup] -->|Scalability, Dynamic Schema| Document[(MongoDB)]
```
