---
title: "Time Series"
slug: "/system-design/observability-search/time-series"
---

# Time Series

## Overview
A time-series database (TSDB) is optimized for storing and querying data points indexed by time (e.g., telemetry, stock ticks, IoT metrics).

## Core Mechanics & How It Works
Writes are append-only. Storage engines optimize for high write throughput and use compression formats (like double-delta) to package numeric values over time.

## Architecture & Common Patterns
Here are the primary ways this topic is implemented in production systems:
- **Downsampling**:  Aggregating historical high-resolution data (e.g., converting 1-second metrics to 1-minute averages) to control storage growth.\n- **Retention Windows**:  Automatically purging or archiving old metrics.\n
## Trade-offs & Limitations
- **Operational Complexity**: Implementing this concept increases overall design complexity and setup.
- **Resource Constraints**: It often trades CPU/memory for network/disk resources or vice versa.
- **Tradeoffs**:
  - TSDBs are poor at handling random updates or deletions of historically written points.\n  - High metric tag cardinality causes storage index bloat.\n
## System Design Interview Strategy
- **What to Focus On**: Recommend time-series databases (like InfluxDB or Prometheus) for storing high-frequency server metrics and real-time telemetry.
- **Common Scenarios**: Address how this maps to high availability, consistency constraints, or low-latency targets.

## Visual Architecture Diagram
```mermaid
graph LR\n  Host[Host Stats] -->|Append Only| TSDB[(InfluxDB / TimescaleDB)]\n  TSDB -->|Downsampling| Archive[(Long Term Storage)]
```
