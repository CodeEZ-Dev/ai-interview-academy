---
title: "ETL"
slug: "/system-design/data-structures-algorithms/etl"
---

# ETL

## Overview
ETL (Extract, Transform, Load) is a data integration process that moves data from multiple source systems into a unified analytical database (Data Warehouse).

## Core Mechanics & How It Works
Data is extracted from operational databases, transformed in a staging area (renaming fields, joining sources, validating records), and loaded into analytical schemas.

## Architecture & Common Patterns
Here are the primary ways this topic is implemented in production systems:
- **Extract-Transform-Load (ETL)**:  Traditional pattern where transformation occurs on a staging server before loading.\n- **Extract-Load-Transform (ELT)**:  Modern pattern where raw data is loaded directly into target cloud data warehouses, using their massive parallel compute resources to run transformations via SQL.\n
## Trade-offs & Limitations
- **Operational Complexity**: Implementing this concept increases overall design complexity and setup.
- **Resource Constraints**: It often trades CPU/memory for network/disk resources or vice versa.
- **Tradeoffs**:
  - ETL pipelines require regular schema maintenance to prevent breakage when source schemas change.\n  - Transformations consume staging resources and add load delays.\n
## System Design Interview Strategy
- **What to Focus On**: Contrast ETL (staging transformations) with ELT (cloud-scale database transformations), and recommend ELT for modern cloud databases like Snowflake or BigQuery.
- **Common Scenarios**: Address how this maps to high availability, consistency constraints, or low-latency targets.

## Visual Architecture Diagram
```mermaid
graph LR\n  Sources[(MySQL / Logs / API)] -->|Extract| Staging[Staging / transformation Server]\n  Staging -->|Load| Target[(Cloud Data Warehouse)]
```
