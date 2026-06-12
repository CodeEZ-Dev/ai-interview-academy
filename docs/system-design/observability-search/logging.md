---
title: "Logging"
slug: "/system-design/observability-search/logging"
---

# Logging

## Overview
Logging is the practice of recording structured discrete events emitted by applications during runtime to aid in auditing and debugging.

## Core Mechanics & How It Works
Applications output logs as structured JSON blocks containing timestamps, log levels (INFO, WARN, ERROR), trace/correlation IDs, and context metrics. Logs are collected by agents and stored in centralized, indexed engines.

## Architecture & Common Patterns
Here are the primary ways this topic is implemented in production systems:
- **Structured Logging**:  Emitting logs in JSON format instead of unstructured text.\n- **Log Aggregation**:  Using tools like Filebeat or Fluentd to collect logs, shipping them to Elasticsearch or Loki.\n
## Trade-offs & Limitations
- **Operational Complexity**: Implementing this concept increases overall design complexity and setup.
- **Resource Constraints**: It often trades CPU/memory for network/disk resources or vice versa.
- **Tradeoffs**:
  - High-volume logging (especially in debug mode) degrades application disk IO and network throughput.\n  - Logging can leak sensitive PII data (e.g., passwords, credit card numbers) if not properly masked.\n
## System Design Interview Strategy
- **What to Focus On**: Discuss the importance of masking personal data (PII) before logging, and advocate for structured logging (JSON) over raw string outputs.
- **Common Scenarios**: Address how this maps to high availability, consistency constraints, or low-latency targets.

## Visual Architecture Diagram
```mermaid
graph LR\n  App[App Instance] -->|JSON Log| Agent[Log Forwarder]\n  Agent --> Elasticsearch[(Central Index)]
```
