---
title: "Strangler Pattern"
slug: "/system-design/realtime-distributed/strangler-pattern"
---

# Strangler Pattern

## Overview
The Strangler Fig pattern is a legacy migration strategy where developers incrementally replace legacy system modules with new microservices until the legacy system is completely deprecated.

## Core Mechanics & How It Works
An API Gateway or proxy intercepts client requests. New features are routed to the new system; old paths are routed to the legacy system. Over time, legacy features are migrated, and the routing proxy redirects users to the new services.

## Architecture & Common Patterns
Here are the primary ways this topic is implemented in production systems:
- **Interception Facade**:  A routing proxy deployed in front of both systems.\n- **Database Sync**:  Using event pipelines to sync database updates between legacy and new databases during migration.\n
## Trade-offs & Limitations
- **Operational Complexity**: Implementing this concept increases overall design complexity and setup.
- **Resource Constraints**: It often trades CPU/memory for network/disk resources or vice versa.
- **Tradeoffs**:
  - Managing hybrid routing paths complicates system deployment configurations.\n  - Syncing database state across two database engines can lead to consistency and conflict-resolution issues.\n
## System Design Interview Strategy
- **What to Focus On**: Highlight the risk reduction of the strangler pattern compared to a risky, all-at-once 'big bang' rewrite.
- **Common Scenarios**: Address how this maps to high availability, consistency constraints, or low-latency targets.

## Visual Architecture Diagram
```mermaid
graph TD\n  Client --> Proxy{Routing Proxy}\n  Proxy -->|Legacy Route: /orders| Old[(Legacy System)]\n  Proxy -->|Migrated Route: /users| New[(New Microservice)]
```
