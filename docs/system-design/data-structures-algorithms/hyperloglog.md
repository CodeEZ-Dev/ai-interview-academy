---
title: "HyperLogLog"
slug: "/system-design/data-structures-algorithms/hyperloglog"
---

# HyperLogLog

## Overview
HyperLogLog (HLL) is a probabilistic data structure used to estimate the cardinality (number of unique elements) of very large datasets using minimal memory.

## Core Mechanics & How It Works
HLL estimates cardinality by hashing elements and observing the distribution of leading zeros in the binary hashes. To reduce estimation variance, it hashes elements to separate buckets (registers) and computes their harmonic mean.

## Architecture & Common Patterns
Here are the primary ways this topic is implemented in production systems:
- **Unique Visitor Tracking**:  Counting daily unique users (UVs) on high-traffic websites using Redis HyperLogLog.\n- **Real-Time Analytics**:  Tracking unique search queries or unique ad clicks.\n
## Trade-offs & Limitations
- **Operational Complexity**: Implementing this concept increases overall design complexity and setup.
- **Resource Constraints**: It often trades CPU/memory for network/disk resources or vice versa.
- **Tradeoffs**:
  - HLL returns approximate counts (typically with a ~1% error rate), making it unsuitable for exact accounting.\n  - It does not store the actual elements, so it cannot list the unique keys.\n
## System Design Interview Strategy
- **What to Focus On**: Highlight the memory efficiency of HyperLogLog (e.g., estimating 100 million unique items using only 12KB of memory in Redis, compared to gigabytes needed for a standard hash set).
- **Common Scenarios**: Address how this maps to high availability, consistency constraints, or low-latency targets.

## Visual Architecture Diagram
```mermaid
graph LR\n  Stream[High Volume Stream] -->|Hash & Bucket| HLL[HyperLogLog Registers]\n  HLL -->|Harmonic Mean Estimation| Count[~99% Accurate Unique Count]
```
