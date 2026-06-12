---
title: "Scalability"
slug: "/system-design/foundations-performance/scalability"
---

# Scalability

## Overview
Scalability refers to a system's capacity to handle an increasing amount of work or its potential to be enlarged to accommodate that growth. In system design, scaling is primarily evaluated along two dimensions: horizontal (scaling out by adding more machines) and vertical (scaling up by adding resources like CPU/RAM to a single machine).

## Core Mechanics & How It Works
Scaling vertically is bound by hardware limits and introduces a single point of failure (SPOF). Scaling horizontally requires load balancing, stateless application servers, and data partitioning strategies. Designers must identify critical system bottlenecks: CPU-bound tasks (e.g., encryption, processing), I/O-bound tasks (e.g., disk writes, network queries), and database lock contentions.

## Architecture & Common Patterns
Here are the primary ways this topic is implemented in production systems:
- **Vertical Scaling (Scale Up)**:  Increasing hardware capacity of a single instance.\n- **Horizontal Scaling (Scale Out)**:  Partitioning load across stateless nodes.\n- **Stateless Architecture**:  Offloading session state to a shared database or cache to allow any node to handle any request.\n- **Functional Decomposition**:  Splitting monolithic functions into isolated services that scale independently.\n
## Trade-offs & Limitations
- **Operational Complexity**: Implementing this concept increases overall design complexity and setup.
- **Resource Constraints**: It often trades CPU/memory for network/disk resources or vice versa.
- **Tradeoffs**:
  - Horizontal scale increases network overhead, distributed state complexity, and deployment difficulty.\n  - Vertical scale is simpler to build but exhibits steep cost curves and strict physical limits.\n
## System Design Interview Strategy
- **What to Focus On**: Always ask about scale requirements (QPS, DAU, storage size) first. Explain why you choose horizontal scaling, and address how to handle stateless routing.
- **Common Scenarios**: Address how this maps to high availability, consistency constraints, or low-latency targets.

## Visual Architecture Diagram
```mermaid
graph TD\n  LB[Load Balancer] --> App1[App Server 1]\n  LB --> App2[App Server 2]\n  LB --> App3[App Server 3]\n  App1 --> DB[(Shared Database)]\n  App2 --> DB\n  App3 --> DB
```
