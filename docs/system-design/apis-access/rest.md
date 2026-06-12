---
title: "REST"
slug: "/system-design/apis-access/rest"
---

# REST

## Overview
Representational State Transfer (REST) is an architectural style for design of networked applications, relying on stateless, client-server, cacheable communications using HTTP verbs.

## Core Mechanics & How It Works
REST models operations on resources using standard HTTP verbs: GET (read), POST (create), PUT (update/replace), PATCH (partial update), and DELETE (remove). It uses status codes (2xx success, 4xx client error, 5xx server error) to report outcomes.

## Architecture & Common Patterns
Here are the primary ways this topic is implemented in production systems:
- **Stateless REST**:  Each request contains all context needed to execute it.\n- **HATEOAS**:  Hypermedia as the Engine of Application State, where responses include links to related actions.\n- **HTTP Caching**:  Using ETag, Cache-Control, and Last-Modified headers.\n
## Trade-offs & Limitations
- **Operational Complexity**: Implementing this concept increases overall design complexity and setup.
- **Resource Constraints**: It often trades CPU/memory for network/disk resources or vice versa.
- **Tradeoffs**:
  - REST is simple and widely supported but can suffer from over-fetching (returning unnecessary fields) or under-fetching (requiring multiple roundtrips).\n  - Enforcing true HATEOAS adds client parsing complexity.\n
## System Design Interview Strategy
- **What to Focus On**: Be ready to specify correct HTTP status codes (e.g., 201 Created, 409 Conflict, 429 Too Many Requests) and contrast REST with GraphQL and gRPC.
- **Common Scenarios**: Address how this maps to high availability, consistency constraints, or low-latency targets.

## Visual Architecture Diagram
```mermaid
graph LR\n  Client -->|GET /orders/123| Server\n  Server -->|200 OK JSON Order Payload| Client
```
