---
title: "Data Pipeline"
slug: "/system-design/data-structures-algorithms/data-pipeline"
---

# Data Pipeline

## Overview
A data pipeline is a sequence of processing steps that automates the movement, transformation, and storage of data between systems.

## Core Mechanics & How It Works
Pipelines run on scheduled triggers or event queues. They are modeled as Directed Acyclic Graphs (DAGs) using workflow orchestrators (like Airflow) to manage task dependencies, failures, and retries.

## Architecture & Common Patterns
Here are the primary ways this topic is implemented in production systems:
- **DAG Orchestration**:  Defining processing tasks as dependent graphs.\n- **Idempotent Run Retries**:  Ensuring running a pipeline task multiple times does not duplicate loaded records.\n
## Trade-offs & Limitations
- **Operational Complexity**: Implementing this concept increases overall design complexity and setup.
- **Resource Constraints**: It often trades CPU/memory for network/disk resources or vice versa.
- **Tradeoffs**:
  - Complex data pipelines are difficult to monitor and debug when failures cascade across tasks.\n  - Handling network failures and partial data write errors requires rollback mechanisms.\n
## System Design Interview Strategy
- **What to Focus On**: Explain how you monitor data pipelines for data quality issues (e.g., verifying row counts, schema shapes, Null ratios) using tools like Great Expectations.
- **Common Scenarios**: Address how this maps to high availability, consistency constraints, or low-latency targets.

## Visual Architecture Diagram
```mermaid
graph TD\n  TaskA[Fetch Logs] --> TaskB[Parse JSON]\n  TaskA --> TaskC[Fetch User Profiles]\n  TaskB --> TaskD[Join & Load]\n  TaskC --> TaskD
```
