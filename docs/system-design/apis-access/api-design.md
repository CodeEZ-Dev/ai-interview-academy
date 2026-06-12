---
title: "API Design"
slug: "/system-design/apis-access/api-design"
---

# API Design

## Overview
API design establishes the contract between software clients and services. Well-designed APIs are clean, predictable, secure, performant, and backward-compatible.

## Core Mechanics & How It Works
APIs are built on clear endpoints, consistent payload formats (e.g., JSON), standard request/response headers, pagination parameters, error response schemas, and authentication hooks.

## Architecture & Common Patterns
Here are the primary ways this topic is implemented in production systems:
- **Resource-Oriented Naming**:  Using nouns, not verbs (e.g., /api/v1/orders).\n- **Versioning**:  URI versioning (/v1/), header versioning, or query parameter versioning.\n- **Pagination**:  Offset-based (LIMIT/OFFSET) or Cursor-based (next_token) for large lists.\n
## Trade-offs & Limitations
- **Operational Complexity**: Implementing this concept increases overall design complexity and setup.
- **Resource Constraints**: It often trades CPU/memory for network/disk resources or vice versa.
- **Tradeoffs**:
  - Strict API schemas provide type safety but slow down developer iteration.\n  - Offset pagination is easy to build but degrades on deep offsets, whereas cursor pagination scales well but doesn't support jumping to random pages.\n
## System Design Interview Strategy
- **What to Focus On**: Suggest cursor-based pagination for high-volume or real-time feeds (like social media feeds) and outline error handling conventions (e.g., returning RFC 7807 problem details).
- **Common Scenarios**: Address how this maps to high availability, consistency constraints, or low-latency targets.

## Visual Architecture Diagram
```mermaid
graph LR\n  Client -->|GET /v1/users?limit=10| API[API Gateway]\n  API -->|JSON Response with Cursor| Client
```
