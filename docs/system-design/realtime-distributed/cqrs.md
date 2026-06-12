---
title: "CQRS"
slug: "/system-design/realtime-distributed/cqrs"
---

# CQRS

## Overview
CQRS (Command Query Responsibility Segregation) is an architectural pattern that separates read models (Queries) from write models (Commands) for a data store.

## Core Mechanics & How It Works
Commands handle state updates, enforce business invariants, and write to a write-optimized database. Queries read data from a denormalized, read-optimized database replica. State changes are synchronized asynchronously.

## Architecture & Common Patterns
Here are the primary ways this topic is implemented in production systems:
- **Asynchronous Projection**:  Using event messages to update read databases after commands commit.\n- **Read-Optimized Views**:  Pre-formatting data shapes to match specific user interfaces.\n
## Trade-offs & Limitations
- **Operational Complexity**: Implementing this concept increases overall design complexity and setup.
- **Resource Constraints**: It often trades CPU/memory for network/disk resources or vice versa.
- **Tradeoffs**:
  - CQRS introduces eventual consistency between read and write databases.\n  - It adds architecture complexity, requiring multiple database systems and event sync logic.\n
## System Design Interview Strategy
- **What to Focus On**: Recommend CQRS for systems with high read-to-write disparities or complex business validation requirements, and address how you handle eventual consistency in the user interface.
- **Common Scenarios**: Address how this maps to high availability, consistency constraints, or low-latency targets.

## Visual Architecture Diagram
```mermaid
graph TD\n  Client -->|Command: Write| CmdDb[(Write DB)]\n  CmdDb -->|Sync Event| ReadDb[(Denormalized Read DB)]\n  Client -->|Query: Read| ReadDb
```
