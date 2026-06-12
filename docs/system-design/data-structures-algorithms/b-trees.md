---
title: "B-Trees"
slug: "/system-design/data-structures-algorithms/b-trees"
---

# B-Trees

## Overview
A B-Tree is a self-balancing search tree structure optimized for block storage systems, commonly used in relational database indexes.

## Core Mechanics & How It Works
B-Trees (specifically B+ Trees) store keys and values in sorted blocks. Each node has a large branching factor (fan-out), minimizing the tree depth and block reads needed to locate keys on disk.

## Architecture & Common Patterns
Here are the primary ways this topic is implemented in production systems:
- **B+ Tree**:  Leaf nodes are linked sequentially, optimizing range query scans.\n- **Page Allocation**:  Storing tree nodes in fixed-size disk blocks (typically 4KB/8KB).\n
## Trade-offs & Limitations
- **Operational Complexity**: Implementing this concept increases overall design complexity and setup.
- **Resource Constraints**: It often trades CPU/memory for network/disk resources or vice versa.
- **Tradeoffs**:
  - Inserts and updates require page splits and tree rebalancing, causing random disk write overhead.\n  - B-Trees suffer from write amplification during index modifications.\n
## System Design Interview Strategy
- **What to Focus On**: Explain why B+ Trees are ideal for relational database indexes due to their O(log N) point lookup latencies and O(1) leaf pointer range scans.
- **Common Scenarios**: Address how this maps to high availability, consistency constraints, or low-latency targets.

## Visual Architecture Diagram
```mermaid
graph TD\n  Root[Root Page] --> Key1[Branch Page]\n  Root --> Key2[Branch Page]\n  Key1 --> Leaf1[Leaf Page: Pointer to Data]\n  Key1 --> Leaf2[Leaf Page: Pointer to Data]\n  Leaf1 <-> Leaf2
```
