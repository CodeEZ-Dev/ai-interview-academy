---
title: "Indexing"
slug: "/system-design/apis-access/indexing"
---

# Indexing

## Overview
A database index is a data structure that improves the speed of data retrieval operations on a table at the cost of additional write overhead and storage space.

## Core Mechanics & How It Works
Indexes provide a fast lookup path to rows, bypassing slow full-table scans. Common index types include B+ Trees (for range and equality queries) and Hash Indexes (for point lookups).

## Architecture & Common Patterns
Here are the primary ways this topic is implemented in production systems:
- **Clustered Index**:  The index structure determines the physical storage order of rows in the table (usually the primary key).\n- **Non-Clustered Index**:  The index structure points to the physical location of the row data.\n- **Composite Index**:  An index built on multiple columns, matching query prefixes.\n
## Trade-offs & Limitations
- **Operational Complexity**: Implementing this concept increases overall design complexity and setup.
- **Resource Constraints**: It often trades CPU/memory for network/disk resources or vice versa.
- **Tradeoffs**:
  - Every index adds write overhead (the write penalty) because updates, inserts, and deletes must update the index structure.\n  - Excessive indices consume memory, competing with query caching budgets.\n
## System Design Interview Strategy
- **What to Focus On**: Explain the leftmost prefix rule for composite indexes, and explain how indexes optimize search queries but degrade high-frequency write throughput.
- **Common Scenarios**: Address how this maps to high availability, consistency constraints, or low-latency targets.

## Visual Architecture Diagram
```mermaid
graph TD\n  Root[B+ Tree Root Node] --> Branch[Branch Nodes]\n  Branch --> LeafA[Leaf: Pointer to Data Row 1]\n  Branch --> LeafB[Leaf: Pointer to Data Row 2]
```
