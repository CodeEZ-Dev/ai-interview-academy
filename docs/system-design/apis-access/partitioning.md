---
title: "Partitioning"
slug: "/system-design/apis-access/partitioning"
---

# Partitioning

## Overview
Partitioning is the process of splitting a single database table or index into smaller, self-contained slices to improve management and query performance.

## Core Mechanics & How It Works
Unlike sharding (which splits data across separate physical nodes), partitioning is often managed within a single database instance, grouping database rows on disk by partition key.

## Architecture & Common Patterns
Here are the primary ways this topic is implemented in production systems:
- **Range Partitioning**:  Grouping by date or numeric ranges (e.g., logs_2026_q1).\n- **Hash Partitioning**:  Using a hash function on the partition key to distribute data uniformly.\n- **List Partitioning**:  Grouping by explicit values (e.g., country_code = 'US').\n
## Trade-offs & Limitations
- **Operational Complexity**: Implementing this concept increases overall design complexity and setup.
- **Resource Constraints**: It often trades CPU/memory for network/disk resources or vice versa.
- **Tradeoffs**:
  - Queries not containing the partition key must search all partitions (partition pruning bypass), degrading performance.\n  - Maintaining partitions requires maintenance scripts (e.g., automatically creating next month's tables).\n
## System Design Interview Strategy
- **What to Focus On**: Describe how partition pruning allows database engines to skip scanning unrelated data directories, speeding up query execution.
- **Common Scenarios**: Address how this maps to high availability, consistency constraints, or low-latency targets.

## Visual Architecture Diagram
```mermaid
graph TD\n  Table[Large Orders Table] --> Partition1[Order Hash 0-999]\n  Table --> Partition2[Order Hash 1000-1999]\n  Table --> Partition3[Order Hash 2000+]
```
