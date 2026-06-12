---
title: "Metrics"
slug: "/system-design/observability-search/metrics"
---

# Metrics

## Overview
Metrics are numerical telemetry values measured over time, representing system performance and business KPIs.

## Core Mechanics & How It Works
Metrics are stored in time-series databases. They are categorized as Counters (strictly incrementing values, e.g., total requests), Gauges (fluctuating values, e.g., memory usage), and Histograms/Summaries (distributions of values, e.g., request latencies).

## Architecture & Common Patterns
Here are the primary ways this topic is implemented in production systems:
- **Prometheus Pull Model**:  Prometheus server scrapes metric endpoints exposed by applications.\n- **StatsD Push Model**:  Applications push metrics to a local daemon over UDP.\n
## Trade-offs & Limitations
- **Operational Complexity**: Implementing this concept increases overall design complexity and setup.
- **Resource Constraints**: It often trades CPU/memory for network/disk resources or vice versa.
- **Tradeoffs**:
  - High-cardinality metrics (e.g., using user IDs as metric tags) can overload time-series databases.\n  - Aggregated metrics can hide short latency spikes (e.g., averages hiding 99th percentile anomalies).\n
## System Design Interview Strategy
- **What to Focus On**: Discuss the 'Four Golden Signals' of API monitoring: Latency, Traffic (throughput), Errors, and Saturation (resource limits).
- **Common Scenarios**: Address how this maps to high availability, consistency constraints, or low-latency targets.

## Visual Architecture Diagram
```mermaid
graph TD\n  App[App Service] -->|Exposes: /metrics| Scraper[Prometheus Server]\n  Scraper -->|Alert rule triggered| AlertManager[Alerting Engine]
```
