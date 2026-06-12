---
title: "Sidecar"
slug: "/system-design/realtime-distributed/sidecar"
---

# Sidecar

## Overview
The sidecar pattern deploys a secondary helper container alongside a primary application container within a single deployment unit (e.g., a Kubernetes Pod), sharing disk, network namespace, and lifecycle.

## Core Mechanics & How It Works
The helper container runs auxiliary tasks (such as logging, proxy routing, secrets management, or configuration sync) without changing the main application code.

## Architecture & Common Patterns
Here are the primary ways this topic is implemented in production systems:
- **Log Shipper Sidecar**:  Shippping console logs to a central index.\n- **Local Cache Proxy**:  Proxying query lookups to a local in-memory store.\n- **Envoy Sidecar**:  Routing microservice network traffic.\n
## Trade-offs & Limitations
- **Operational Complexity**: Implementing this concept increases overall design complexity and setup.
- **Resource Constraints**: It often trades CPU/memory for network/disk resources or vice versa.
- **Tradeoffs**:
  - Running multiple containers per pod increases host resource overhead.\n  - Container startup dependencies can lead to race conditions.\n
## System Design Interview Strategy
- **What to Focus On**: Explain how the sidecar pattern supports modular infrastructure setups, and describe how sidecar containers share localhost network boundaries with main application containers.
- **Common Scenarios**: Address how this maps to high availability, consistency constraints, or low-latency targets.

## Visual Architecture Diagram
```mermaid
graph TD\n  subgraph Pod [Single Deployment Pod]\n    App[Main App Container]\n    Sidecar[Sidecar: Log Forwarder Container]\n    App -->|Write Logs| SharedDisk[Shared Disk/Socket]\n    Sidecar -->|Read & Ship| SharedDisk\n  end
```
