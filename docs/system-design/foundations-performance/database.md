---
title: "Database"
slug: "/system-design/foundations-performance/database"
---

# Database

## Overview
A database is an organized collection of data stored and accessed electronically. The selection of data models, storage structures, and consistency engines is critical in system design.

## Core Mechanics & How It Works
Databases write to memory buffers (cache), log changes to disk (WAL) for durability, and periodically flush pages to permanent block storage. Index structures speed up lookup paths.

## Architecture & Common Patterns
Here are the primary ways this topic is implemented in production systems:
- **Relational (RDBMS)**:  Tabular, schema-enforced, strict ACID transactions.\n- **NoSQL**:  Key-Value, Document, Column-family, Graph databases.\n- **Read/Write Splitting**:  Directing write traffic to primary nodes and read traffic to replicas.\n
## Trade-offs & Limitations
- **Operational Complexity**: Implementing this concept increases overall design complexity and setup.
- **Resource Constraints**: It often trades CPU/memory for network/disk resources or vice versa.
- **Tradeoffs**:
  - Relational databases are hard to partition horizontally while preserving ACID.\n  - NoSQL databases scale easily but usually settle for eventual consistency (BASE).\n
## System Design Interview Strategy
- **What to Focus On**: Match the database choice to the query pattern (e.g., Key-Value for user sessions, Graph for social networks, Relational for financial ledgers).
- **Common Scenarios**: Address how this maps to high availability, consistency constraints, or low-latency targets.

## Visual Architecture Diagram
```mermaid
graph TD\n  Client -->|Writes| Primary[Primary DB]\n  Client -->|Reads| Replica1[Read Replica 1]\n  Client -->|Reads| Replica2[Read Replica 2]\n  Primary -->|Async Replication| Replica1\n  Primary -->|Async Replication| Replica2
```
