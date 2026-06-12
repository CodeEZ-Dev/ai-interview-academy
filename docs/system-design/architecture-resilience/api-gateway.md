---
title: "API Gateway"
slug: "/system-design/architecture-resilience/api-gateway"
---

# API Gateway

## Overview
An API Gateway is a reverse proxy serving as the single entry point for all client requests, routing them to appropriate downstream microservices.

## Core Mechanics & How It Works
The gateway handles common tasks like SSL/TLS termination, authentication token checks, rate limiting, request routing, header injection, CORS, and response aggregation.

## Architecture & Common Patterns
Here are the primary ways this topic is implemented in production systems:
- **BFF (Backend For Frontend)**:  Dedicated gateways for mobile, web, and external clients.\n- **SSL Offloading**:  Decrypting SSL traffic at the gateway, routing unencrypted HTTP internally.\n- **Gateway Routing**:  Dynamic path-based routing (/api/v1/orders -> Order Service).\n
## Trade-offs & Limitations
- **Operational Complexity**: Implementing this concept increases overall design complexity and setup.
- **Resource Constraints**: It often trades CPU/memory for network/disk resources or vice versa.
- **Tradeoffs**:
  - The API Gateway is a potential single point of failure and bottleneck if not scaled properly.\n  - Adding custom business logic to the gateway couples it to downstream services.\n
## System Design Interview Strategy
- **What to Focus On**: Explain how you would scale the API gateway horizontally and outline what tasks belong at the gateway level vs. at the individual service level.
- **Common Scenarios**: Address how this maps to high availability, consistency constraints, or low-latency targets.

## Visual Architecture Diagram
```mermaid
graph TD\n  Client[Client Requests] --> GW[API Gateway: Auth + Rate Limit]\n  GW -->|Route User API| UserSvc[User Service]\n  GW -->|Route Cart API| CartSvc[Cart Service]
```
