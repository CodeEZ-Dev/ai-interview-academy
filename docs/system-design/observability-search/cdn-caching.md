---
title: "CDN Caching"
slug: "/system-design/observability-search/cdn-caching"
---

# CDN Caching

## Overview
CDN caching stores content on geographically distributed edge servers, reducing origin load and user latency.

## Core Mechanics & How It Works
CDNs cache responses based on HTTP headers (Cache-Control, ETag). Edge servers evaluate these headers to decide whether to serve content locally or check the origin server.

## Architecture & Common Patterns
Here are the primary ways this topic is implemented in production systems:
- **Stale-While-Revalidate**:  Serving stale cached content instantly while fetching the updated version in the background.\n- **Origin Shielding**:  Protecting the origin database by adding a secondary parent caching layer.\n
## Trade-offs & Limitations
- **Operational Complexity**: Implementing this concept increases overall design complexity and setup.
- **Resource Constraints**: It often trades CPU/memory for network/disk resources or vice versa.
- **Tradeoffs**:
  - CDNs introduce caching costs and propagation latency when purging files globally.\n  - Dynamic features (personalized user feeds) are hard to cache at the edge.\n
## System Design Interview Strategy
- **What to Focus On**: Explain how standard HTTP headers (like `Cache-Control: public, max-age=3600`) determine CDN behavior.
- **Common Scenarios**: Address how this maps to high availability, consistency constraints, or low-latency targets.

## Visual Architecture Diagram
```mermaid
graph LR\n  User[User] -->|Request| Edge[CDN Edge]\n  Edge -->|Valid TTL| User\n  Edge -->|Expired: Fetch Origin| Origin[Origin Server]
```
