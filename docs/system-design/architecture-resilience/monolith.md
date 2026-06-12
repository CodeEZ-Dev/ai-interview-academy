---
title: "Monolith"
slug: "/system-design/architecture-resilience/monolith"
---

# Monolith

## Overview
A monolithic architecture is a software design pattern where the entire application, including user interface, business logic, and database access layer, is built and deployed as a single unit.

## Core Mechanics & How It Works
All components share the same memory space, and call each other using in-process function execution, bypassing network boundaries. The database is shared across all application modules.

## Architecture & Common Patterns
Here are the primary ways this topic is implemented in production systems:
- **Modular Monolith**:  Structuring code into logical packages/modules to enforce clear boundaries, preparing for potential service separation.\n- **Shared Database Monolith**:  Single database schema accessed by all application domains.\n
## Trade-offs & Limitations
- **Operational Complexity**: Implementing this concept increases overall design complexity and setup.
- **Resource Constraints**: It often trades CPU/memory for network/disk resources or vice versa.
- **Tradeoffs**:
  - Monoliths become slow to build, test, and deploy as team sizes grow.\n  - Scaling requires deploying duplicates of the entire application, even if only one resource-heavy module needs scale.\n
## System Design Interview Strategy
- **What to Focus On**: Emphasize that starting with a modular monolith is often the best design choice for early-stage products, as it avoids premature distributed architecture complexity.
- **Common Scenarios**: Address how this maps to high availability, consistency constraints, or low-latency targets.

## Visual Architecture Diagram
```mermaid
graph TD\n  Client --> Monolith[Monolithic App: UI + Auth + Billing + Catalog]\n  Monolith --> DB[(Shared DB)]
```
