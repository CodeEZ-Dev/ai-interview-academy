---
title: "GraphQL"
slug: "/system-design/apis-access/graphql"
---

# GraphQL

## Overview
GraphQL is a query language and runtime for APIs that lets clients define the exact structure of data they need, eliminating over-fetching and under-fetching.

## Core Mechanics & How It Works
Clients post query or mutation documents to a single endpoint (typically `/graphql`). The server parses, validates, and runs the query against a defined schema using resolver functions.

## Architecture & Common Patterns
Here are the primary ways this topic is implemented in production systems:
- **Single Endpoint Routing**:  Unified gateway API representing all backend services.\n- **Schema Stitching / Federation**:  Composing multiple sub-schemas into a single gateway schema.\n- **Query Complexity Analysis**:  Scoring client queries to block expensive nested requests.\n
## Trade-offs & Limitations
- **Operational Complexity**: Implementing this concept increases overall design complexity and setup.
- **Resource Constraints**: It often trades CPU/memory for network/disk resources or vice versa.
- **Tradeoffs**:
  - GraphQL makes client caching difficult because all operations are POST requests.\n  - N+1 database query issues can occur inside nested resolvers if not optimized with tools like DataLoader.\n
## System Design Interview Strategy
- **What to Focus On**: Explain the N+1 problem in GraphQL and how batching/caching with dataloaders resolves it during query execution.
- **Common Scenarios**: Address how this maps to high availability, consistency constraints, or low-latency targets.

## Visual Architecture Diagram
```mermaid
graph TD\n  Client -->|query { user { name, posts } }| Gateway[GraphQL Gateway]\n  Gateway -->|Resolver 1| UserSvc[User Service]\n  Gateway -->|Resolver 2| PostSvc[Post Service]
```
