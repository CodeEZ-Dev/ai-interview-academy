---
title: "Data Lake"
slug: "/system-design/data-structures-algorithms/data-lake"
---

# Data Lake

## Overview
A data lake is a centralized repository that stores raw, unstructured, semi-structured, and structured data at any scale without pre-defined schemas.

## Core Mechanics & How It Works
Data is written in its raw format (JSON, CSV, logs, images) to cheap object storage systems (like AWS S3 or Google Cloud Storage). Schemas are applied when data is queried (schema-on-read).

## Architecture & Common Patterns
Here are the primary ways this topic is implemented in production systems:
- **Schema-on-Read**:  Querying raw files directly using engines like Athena or Presto, defining schemas dynamically.\n- **Delta Lake**:  Adding transaction logs on top of object stores to support ACID and data versioning.\n
## Trade-offs & Limitations
- **Operational Complexity**: Implementing this concept increases overall design complexity and setup.
- **Resource Constraints**: It often trades CPU/memory for network/disk resources or vice versa.
- **Tradeoffs**:
  - Without cataloging and metadata governance, a data lake can degenerate into an unorganized, unsearchable 'data swamp'.\n  - Queries on raw data have higher latencies compared to optimized data warehouses.\n
## System Design Interview Strategy
- **What to Focus On**: Describe the data lake as a landing zone for raw historical data, and explain how it differs from a structured data warehouse.
- **Common Scenarios**: Address how this maps to high availability, consistency constraints, or low-latency targets.

## Visual Architecture Diagram
```mermaid
graph TD\n  Sources[App Logs + Raw JSON + Images] --> ObjectStore[(S3 Raw Object Storage)]\n  ObjectStore --> QueryEngine[Athena / Presto Query schema-on-read]
```
