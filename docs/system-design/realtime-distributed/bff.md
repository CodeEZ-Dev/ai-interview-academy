---
title: "BFF"
slug: "/system-design/realtime-distributed/bff"
---

# BFF

## Overview
The Backend-for-Frontend (BFF) pattern introduces dedicated backend API gateways for each client frontend type (e.g., iOS, Web, Android).

## Core Mechanics & How It Works
Rather than routing all clients to a single, generic API, BFFs translate client requests into optimal shapes for specific platforms. For example, a mobile BFF filters out heavy text fields to save user data, while a web BFF includes rich tables.

## Architecture & Common Patterns
Here are the primary ways this topic is implemented in production systems:
- **Mobile BFF**:  Optimizing payload sizes and merging API responses to minimize mobile roundtrips.\n- **Public API BFF**:  Enforcing strict versioning and security scopes for third-party integrations.\n
## Trade-offs & Limitations
- **Operational Complexity**: Implementing this concept increases overall design complexity and setup.
- **Resource Constraints**: It often trades CPU/memory for network/disk resources or vice versa.
- **Tradeoffs**:
  - BFFs add codebase duplication, requiring developers to maintain multiple backend adapter layers.\n  - Deploying updates requires coordinating releases across frontend and BFF applications.\n
## System Design Interview Strategy
- **What to Focus On**: Recommend the BFF pattern when target frontends require different data formats, authentication flows, or call patterns.
- **Common Scenarios**: Address how this maps to high availability, consistency constraints, or low-latency targets.

## Visual Architecture Diagram
```mermaid
graph TD\n  iOSClient[iOS Mobile] --> iOSBFF[iOS BFF Service]\n  WebClient[Web Browser] --> WebBFF[Web BFF Service]\n  iOSBFF --> Microservices[Core Microservice API]\n  WebBFF --> Microservices
```
