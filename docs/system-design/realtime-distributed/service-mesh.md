---
title: "Service Mesh"
slug: "/system-design/realtime-distributed/service-mesh"
---

# Service Mesh

## Overview
A service mesh is a dedicated infrastructure layer that manages service-to-service network communication, security, and observability in microservice architectures.

## Core Mechanics & How It Works
A sidecar proxy (e.g., Envoy) is deployed alongside every service container. All service-to-service traffic routes through these proxies, which handle traffic shaping, mutual TLS (mTLS) encryption, retries, and metric collections.

## Architecture & Common Patterns
Here are the primary ways this topic is implemented in production systems:
- **Data Plane**:  The fleet of sidecar proxies managing service network calls.\n- **Control Plane**:  The central control service (e.g., Istio) managing proxy routing configurations, security policies, and TLS certificate distributions.\n
## Trade-offs & Limitations
- **Operational Complexity**: Implementing this concept increases overall design complexity and setup.
- **Resource Constraints**: It often trades CPU/memory for network/disk resources or vice versa.
- **Tradeoffs**:
  - Adding proxies adds network hops, increasing request latency.\n  - Deploying and managing a service mesh adds operational complexity.\n
## System Design Interview Strategy
- **What to Focus On**: Discuss how a service mesh decouples operational concerns (mTLS, retries, rate limiting) from application code, allowing developers to focus on business logic.
- **Common Scenarios**: Address how this maps to high availability, consistency constraints, or low-latency targets.

## Visual Architecture Diagram
```mermaid
graph LR\n  SvcA[App A] -->|localhost| ProxyA[Envoy Proxy A]\n  ProxyA -->|mTLS Encryption| ProxyB[Envoy Proxy B]\n  ProxyB -->|localhost| SvcB[App B]
```
