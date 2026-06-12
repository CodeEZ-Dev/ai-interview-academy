---
title: "LSM Trees"
slug: "/system-design/data-structures-algorithms/lsm-trees"
---

# LSM Trees

## Overview
A Log-Structured Merge-tree (LSM Tree) is a write-optimized data structure used in high-throughput database engines (e.g., Cassandra, RocksDB) to bypass random disk write operations.

## Core Mechanics & How It Works
Incoming writes are appended to an in-memory MemTable and logged to disk (WAL) for durability. When the MemTable fills, it is flushed to disk as a sorted, immutable SSTable (Sorted String Table). Background compaction jobs merge and purge duplicate SSTable keys.

## Architecture & Common Patterns
Here are the primary ways this topic is implemented in production systems:
- **MemTable**:  In-memory search tree (e.g., Skiplist) buffering writes.\n- **SSTable**:  Immutable disk file containing sorted keys.\n- **Compaction (Size-Tiered or Leveled)**:  Background sorting processes that merge SSTables and remove deleted tombstone values.\n
## Trade-offs & Limitations
- **Operational Complexity**: Implementing this concept increases overall design complexity and setup.
- **Resource Constraints**: It often trades CPU/memory for network/disk resources or vice versa.
- **Tradeoffs**:
  - Reads are slower than in B-Trees because lookup queries must search multiple SSTables using Bloom Filters to locate keys.\n  - Background compaction jobs cause write amplification, consuming disk IO and resources.\n
## System Design Interview Strategy
- **What to Focus On**: Explain why LSM trees are preferred for write-heavy systems (like logging or metric collection) and B-Trees for read-heavy transactional systems.
- **Common Scenarios**: Address how this maps to high availability, consistency constraints, or low-latency targets.

## Visual Architecture Diagram
```mermaid
graph TD\n  Write -->|Append| WAL[Write-Ahead Log]\n  Write -->|Buffer| MemTable[MemTable RAM]\n  MemTable -->|Flush when full| SSTable1[SSTable L0 Disk]\n  SSTable1 -->|Compaction| SSTable2[SSTable L1 Disk]
```
