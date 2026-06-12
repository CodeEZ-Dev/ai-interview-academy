---
title: "Data Warehouse"
slug: "/system-design/data-structures-algorithms/data-warehouse"
---

# Data Warehouse

## Overview
A data warehouse (DWH) is a database system optimized for analytical queries, business intelligence reporting, and high-performance data scans.

## Core Mechanics & How It Works
Data warehouses store structured data using columnar layouts (groups of values for a column are stored together on disk) rather than row-based layouts, reducing IO during scans. They run queries using MPP (Massively Parallel Processing) engines.

## Architecture & Common Patterns
Here are the primary ways this topic is implemented in production systems:
- **Star Schema**:  Structuring data into central Fact tables (events/orders) linked to Dimension tables (users/products).\n- **Columnar Storage**:  Storing database tables on disk by column to accelerate aggregations.\n
## Trade-offs & Limitations
- **Operational Complexity**: Implementing this concept increases overall design complexity and setup.
- **Resource Constraints**: It often trades CPU/memory for network/disk resources or vice versa.
- **Tradeoffs**:
  - Data warehouses require schema definitions before loading, making them slow to adapt to new unstructured data.\n  - High CPU and query licensing costs.\n
## System Design Interview Strategy
- **What to Focus On**: Explain why columnar storage is ideal for analytics (aggregating millions of rows for a single column) and why row storage is better for transactional point lookups.
- **Common Scenarios**: Address how this maps to high availability, consistency constraints, or low-latency targets.

## Visual Architecture Diagram
```mermaid
graph TD\n  Fact[Fact Table: Sales] --> Dim1[Dimension Table: Date]\n  Fact --> Dim2[Dimension Table: Store]\n  Fact --> Dim3[Dimension Table: Product]
```
