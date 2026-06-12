---
title: "Sharding"
slug: "/system-design/apis-access/sharding"
---

# Sharding

## Overview
Sharding is a horizontal database partitioning technique where data is distributed across multiple independent physical database instances (shards).

## Core Mechanics & How It Works
Applications use a shard key to determine which database node stores a particular row. A lookup hash function maps the key to the target shard.

## Architecture & Common Patterns
Here are the primary ways this topic is implemented in production systems:
- **Key/Hash Sharding**:  Applying a hash function to the shard key (e.g., user_id) to map to a shard ID.\n- **Directory-Based Sharding**:  Using a lookup database service that maps keys to physical shards.\n- **Range Sharding**:  Sharding based on key value ranges (e.g., alphabetically or by geographical region).\n
## Trade-offs & Limitations
- **Operational Complexity**: Implementing this concept increases overall design complexity and setup.
- **Resource Constraints**: It often trades CPU/memory for network/disk resources or vice versa.
- **Tradeoffs**:
  - Cross-shard joins are extremely slow and complex, requiring application-side stitching.\n  - If a shard key is poorly chosen (e.g., company name with one massive tenant), it creates hot shards that exhaust storage and IOPS.\n
## System Design Interview Strategy
- **What to Focus On**: Choosing a shard key is a classic system design interview question. Pick a key that is highly cardinal (has many unique values) and matches the primary query access pattern to avoid cross-shard routing.
- **Common Scenarios**: Address how this maps to high availability, consistency constraints, or low-latency targets.

## Visual Architecture Diagram
```mermaid
graph TD\n  App[App Server] -->|shardKey: Hash user_id| Router{Query Router}\n  Router -->|user_id: 1-10000| Shard1[(Database Shard A)]\n  Router -->|user_id: 10001+| Shard2[(Database Shard B)]
```
