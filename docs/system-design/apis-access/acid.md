---
title: "ACID"
slug: "/system-design/apis-access/acid"
---

# ACID

## Overview
ACID is a set of properties (Atomicity, Consistency, Isolation, Durability) that guarantee database transactions are processed reliably.

## Core Mechanics & How It Works
- **Atomicity**: All operations in a transaction succeed, or the entire transaction is rolled back.\n- **Consistency**: Transactions transition the database from one valid state to another, preserving constraints.\n- **Isolation**: Concurrent execution of transactions leaves the database in the same state as if they were run sequentially. Managed using locks or Multi-Version Concurrency Control (MVCC).\n- **Durability**: Once committed, transactions remain written, surviving server crashes.

## Architecture & Common Patterns
Here are the primary ways this topic is implemented in production systems:
- **Two-Phase Commit (2PC)**:  Ensuring ACID across distributed databases (adds coordination latency).\n- **MVCC**:  Allowing readers to read consistent snapshots without blocking incoming writes.\n
## Trade-offs & Limitations
- **Operational Complexity**: Implementing this concept increases overall design complexity and setup.
- **Resource Constraints**: It often trades CPU/memory for network/disk resources or vice versa.
- **Tradeoffs**:
  - Enforcing strong isolation (such as Serializable isolation) locks resources, degrading system concurrency and throughput.\n  - Distributed ACID transactions scale poorly due to lock propagation delays.\n
## System Design Interview Strategy
- **What to Focus On**: Identify isolation levels (Read Uncommitted, Read Committed, Repeatable Read, Serializable) and explain how MVCC handles concurrent read/write operations.
- **Common Scenarios**: Address how this maps to high availability, consistency constraints, or low-latency targets.

## Visual Architecture Diagram
```mermaid
graph TD\n  Tx[Transaction Start] --> Step1[Step 1: Debit Account]\n  Tx --> Step2[Step 2: Credit Account]\n  Step2 -->|Success| Commit[Commit All: Atomicity]\n  Step2 -->|Failure| Rollback[Rollback All: Net Zero Change]
```
