---
title: "MapReduce"
slug: "/system-design/data-structures-algorithms/mapreduce"
---

# MapReduce

## Overview
MapReduce is a distributed programming model designed to process large-scale datasets in parallel across clusters of servers.

## Core Mechanics & How It Works
The workflow runs in three phases:\n- **Map**: Master node partitions the input data and assigns sub-problems to worker nodes, which extract key-value pairs.\n- **Shuffle/Sort**: System groups values by key and routes them to reduce workers.\n- **Reduce**: Worker nodes aggregate the values for each key to produce the final dataset.

## Architecture & Common Patterns
Here are the primary ways this topic is implemented in production systems:
- **Hadoop MapReduce**:  Classic batch compute engine utilizing HDFS.\n- **Distributed Word Count**:  Standard example of mapping text lines and reducing word frequencies.\n
## Trade-offs & Limitations
- **Operational Complexity**: Implementing this concept increases overall design complexity and setup.
- **Resource Constraints**: It often trades CPU/memory for network/disk resources or vice versa.
- **Tradeoffs**:
  - MapReduce writes all intermediate states to disk, causing high disk write and network IO latency.\n  - It is unsuitable for iterative algorithms or real-time stream computations.\n
## System Design Interview Strategy
- **What to Focus On**: Explain the Map-Shuffle-Reduce workflow and contrast MapReduce with memory-based compute models like Apache Spark.
- **Common Scenarios**: Address how this maps to high availability, consistency constraints, or low-latency targets.

## Visual Architecture Diagram
```mermaid
graph TD\n  Input[Input Data] --> Map[Map Workers]\n  Map --> Shuffle[Shuffle/Sort by Key]\n  Shuffle --> Reduce[Reduce Workers]\n  Reduce --> Output[Output File]
```
