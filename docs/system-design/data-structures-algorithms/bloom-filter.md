---
title: "Bloom Filter"
slug: "/system-design/data-structures-algorithms/bloom-filter"
---

# Bloom Filter

## Overview
A Bloom Filter is a space-efficient, probabilistic data structure used to test whether an element is a member of a set.

## Core Mechanics & How It Works
A Bloom Filter uses a bit array and multiple independent hash functions. When an element is added, its hashes map to indices in the bit array, setting those bits to 1. To query an element, its hashes are checked; if any mapped bit is 0, the element is **definitely not** in the set. If all are 1, the element is **probably** in the set (introduces false positives, but never false negatives).

## Architecture & Common Patterns
Here are the primary ways this topic is implemented in production systems:
- **Cassandra Read Path Optimization**:  Pre-checking SSTables using Bloom Filters to bypass unnecessary disk reads on key misses.\n- **Duplicate URL Filtering**:  Web crawlers pre-checking visited links.\n
## Trade-offs & Limitations
- **Operational Complexity**: Implementing this concept increases overall design complexity and setup.
- **Resource Constraints**: It often trades CPU/memory for network/disk resources or vice versa.
- **Tradeoffs**:
  - Bloom Filters cannot delete elements without resetting the filter (unless counting filters are used).\n  - They introduce false positives; the false positive rate increases as the bit array fills up.\n
## System Design Interview Strategy
- **What to Focus On**: Explain how a Bloom Filter prevents slow database disk lookups by filtering out missing keys, and calculate how bit array sizing and hash counts control false positive rates.
- **Common Scenarios**: Address how this maps to high availability, consistency constraints, or low-latency targets.

## Visual Architecture Diagram
```mermaid
graph TD\n  Key[Input Key] --> Hash[Hash Functions]\n  Hash --> Array{Bit Array Check}\n  Array -->|Any Bit 0| DefinitelyNo[Result: Definitely Not in Database]\n  Array -->|All Bits 1| ProbablyYes[Result: Query Database]
```
