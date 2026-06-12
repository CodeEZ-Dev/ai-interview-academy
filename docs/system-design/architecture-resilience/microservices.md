---
title: "Microservices"
slug: "/system-design/architecture-resilience/microservices"
---

# Microservices

## Overview
Microservices are an architectural style structuring an application as a collection of small, autonomous, loosely coupled services, each matching a single business capability.

## Core Mechanics & How It Works
Services communicate over network boundaries using lightweight protocols (HTTP/REST, gRPC, AMQP). Each service manages its own database to ensure schema autonomy.

## Architecture & Common Patterns
Here are the primary ways this topic is implemented in production systems:
- **Database per Service**:  Ensuring services do not share raw database access, avoiding database coupling.\n- **API Gateway**:  A single routing entry point managing cross-cutting concerns (auth, rate limiting).\n- **Saga Pattern**:  Managing distributed transactions across microservices using event-based local transactions.\n
## Trade-offs & Limitations
- **Operational Complexity**: Implementing this concept increases overall design complexity and setup.
- **Resource Constraints**: It often trades CPU/memory for network/disk resources or vice versa.
- **Tradeoffs**:
  - Microservices introduce distributed system complexity, including network latency, serialization costs, and partial failure routing.\n  - Debugging, end-to-end tracing, and transaction handling are much harder than in monoliths.\n
## System Design Interview Strategy
- **What to Focus On**: Avoid claiming microservices are always better. State that they help scale development across large teams, but warn about the added operational overhead and network latency.
- **Common Scenarios**: Address how this maps to high availability, consistency constraints, or low-latency targets.

## Visual Architecture Diagram
```mermaid
graph TD\n  Gateway[API Gateway] --> UserSvc[User Service]\n  Gateway --> OrderSvc[Order Service]\n  UserSvc --> UserDB[(User DB)]\n  OrderSvc --> OrderDB[(Order DB)]
```
