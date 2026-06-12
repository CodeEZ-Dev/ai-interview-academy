---
title: "Client-Server"
slug: "/system-design/foundations-performance/client-server"
---

# Client-Server

## Overview
The client-server model is a distributed application framework partitioning tasks between providers of a resource or service (servers) and service requesters (clients).

## Core Mechanics & How It Works
Clients initiate communication sessions by sending requests over protocols like HTTP, TCP, or WebSockets, and servers listen for incoming requests, process them, and return responses.

## Architecture & Common Patterns
Here are the primary ways this topic is implemented in production systems:
- **Request-Response**:  Standard HTTP pattern (stateless).\n- **Persistent Connections**:  WebSockets/HTTP Keep-Alive for low-overhead streams.\n- **Stateless Servers**:  Servers store no client context, enabling simple horizontal scaling.\n
## Trade-offs & Limitations
- **Operational Complexity**: Implementing this concept increases overall design complexity and setup.
- **Resource Constraints**: It often trades CPU/memory for network/disk resources or vice versa.
- **Tradeoffs**:
  - Centralizing business logic on the server makes it a bottleneck and target.\n  - Clients are untrusted; all inputs must be thoroughly validated on the server.\n
## System Design Interview Strategy
- **What to Focus On**: Discuss API gateways and load balancers as the entry point of the server boundary, shielding internal architectures from clients.
- **Common Scenarios**: Address how this maps to high availability, consistency constraints, or low-latency targets.

## Visual Architecture Diagram
```mermaid
graph LR\n  Client[Client UI/Mobile] -->|API Request| Gateway[API Gateway]\n  Gateway -->|Internal Routing| Server[Microservice Server]
```
