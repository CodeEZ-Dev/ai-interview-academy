---
title: "Alerting"
slug: "/system-design/observability-search/alerting"
---

# Alerting

## Overview
Alerting is the process of notifying operators when system metrics cross predefined thresholds or point to critical outages.

## Core Mechanics & How It Works
Alert managers evaluate telemetry streams using rules. If a rule triggers, the manager groups, deduplicates, and routes notifications to communication platforms (PagerDuty, Slack, email) based on on-call schedules.

## Architecture & Common Patterns
Here are the primary ways this topic is implemented in production systems:
- **Multi-Window Multi-Burn-Rate Alerting**:  Alerting based on how fast the error budget is depleted.\n- **Alert Escalation Path**:  Routing alerts to primary engineers first, then secondary managers if not acknowledged.\n
## Trade-offs & Limitations
- **Operational Complexity**: Implementing this concept increases overall design complexity and setup.
- **Resource Constraints**: It often trades CPU/memory for network/disk resources or vice versa.
- **Tradeoffs**:
  - Low alert thresholds cause alert fatigue, leading to ignored alerts.\n  - High thresholds delay response times during outages.\n
## System Design Interview Strategy
- **What to Focus On**: Explain how you use Service Level Objectives (SLOs) and Error Budgets to define actionable alerts rather than relying on noisy cpu-limit triggers.
- **Common Scenarios**: Address how this maps to high availability, consistency constraints, or low-latency targets.

## Visual Architecture Diagram
```mermaid
graph LR\n  Prometheus[Alert Rule Triggered] --> AlertManager[AlertManager]\n  AlertManager -->|Format & Page| PagerDuty[On-Call Engineer]
```
