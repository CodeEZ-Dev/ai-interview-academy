---
title: "Service Discovery"
slug: "/system-design/architecture-resilience/service-discovery"
---

# Service Discovery

## Overview
Service discovery dynamically resolves the physical IP addresses and ports of auto-scaling microservice instances.

## Core Mechanics & How It Works
Instances register their IP and port with a central Service Registry (e.g., Consul, Eureka) on startup and send continuous heartbeats. Clients query the registry to locate active instances.

## Architecture & Common Patterns
Here are the primary ways this topic is implemented in production systems:
- **Client-Side Discovery**:  Client queries the registry directly and load-balances target IPs.\n- **Server-Side Discovery**:  Client routes traffic to a proxy, which queries the registry and routes the request.\n- **Health-Aware Registry**:  Automatically removing dead instances based on failed heartbeats.\n
## Trade-offs & Limitations
- **Operational Complexity**: Implementing this concept increases overall design complexity and setup.
- **Resource Constraints**: It often trades CPU/memory for network/disk resources or vice versa.
- **Tradeoffs**:
  - Adding a service registry adds system dependencies and network routing hops.\n  - Stale registry caches can lead to connection failures.\n
## System Design Interview Strategy
- **What to Focus On**: Contrast client-side and server-side discovery, and explain how Kubernetes handles service discovery using internal DNS and iptables routing.
- **Common Scenarios**: Address how this maps to high availability, consistency constraints, or low-latency targets.

## Visual Architecture Diagram
```mermaid
graph TD\n  App[App Server A] -->|1. Register IP| Reg[Service Registry]\n  Client -->|2. Get IPs for App| Reg\n  Client -->|3. Route Request| App
```
