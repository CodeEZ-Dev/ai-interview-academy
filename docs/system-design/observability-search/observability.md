---
title: "Observability"
slug: "/system-design/observability-search/observability"
---

# Observability

## Overview
Observability measures how well a system's internal state can be inferred from its external outputs, primarily logs, metrics, and distributed traces.

## Core Mechanics & How It Works
Monitoring tells you *when* a system is broken; observability helps you understand *why* it broke by correlating system signals across distributed call chains.

## Architecture & Common Patterns
Here are the primary ways this topic is implemented in production systems:
- **The Three Pillars**:  Logs (records of discrete events), Metrics (aggregatable numeric measurements), and Traces (end-to-end request paths).\n- **Unified Agent**:  Collecting all telemetry using a single agent (like OpenTelemetry) to minimize host resource consumption.\n
## Trade-offs & Limitations
- **Operational Complexity**: Implementing this concept increases overall design complexity and setup.
- **Resource Constraints**: It often trades CPU/memory for network/disk resources or vice versa.
- **Tradeoffs**:
  - Generating, transmitting, and storing telemetry data consumes significant CPU, network bandwidth, and storage space.\n  - High instrumentation coverage increases application code complexity.\n
## System Design Interview Strategy
- **What to Focus On**: Use the terminology of OpenTelemetry (spans, traces, collectors) and explain how you correlate metrics with traces during troubleshooting.
- **Common Scenarios**: Address how this maps to high availability, consistency constraints, or low-latency targets.

## Visual Architecture Diagram
```mermaid
graph TD\n  App[App Node] -->|Trace + Metric + Log| Agent[OTel Collector]\n  Agent --> Storage[(Jaeger/Prometheus/Elastic)]
```
