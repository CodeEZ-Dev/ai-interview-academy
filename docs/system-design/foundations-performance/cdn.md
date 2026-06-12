---
title: "CDN"
slug: "/system-design/foundations-performance/cdn"
---

# CDN

## Overview
A Content Delivery Network (CDN) is a geographically distributed network of proxy servers (Points of Presence / PoPs) that cache and serve static and dynamic content closer to end users.

## Core Mechanics & How It Works
CDNs intercept client requests, serving static assets (HTML, CSS, JS, images) from local edge memory, or routing back to the origin server only when there is a cache miss.

## Architecture & Common Patterns
Here are the primary ways this topic is implemented in production systems:
- **Static Asset Caching**:  Long TTL caching for images, media, and build assets.\n- **Edge Compute**:  Running lightweight JavaScript logic (e.g., auth checks, redirects) directly on CDN edge servers.\n- **Origin Shielding**:  Using a parent cache layer to protect the application origin server from concurrent CDN misses.\n
## Trade-offs & Limitations
- **Operational Complexity**: Implementing this concept increases overall design complexity and setup.
- **Resource Constraints**: It often trades CPU/memory for network/disk resources or vice versa.
- **Tradeoffs**:
  - CDNs introduce caching costs and propagation latency when purging files globally.\n  - Dynamic features (personalized user feeds) are hard to cache at the edge.\n
## System Design Interview Strategy
- **What to Focus On**: Highlight CDN usage for media streaming, static websites, and reducing global server propagation latency.
- **Common Scenarios**: Address how this maps to high availability, consistency constraints, or low-latency targets.

## Visual Architecture Diagram
```mermaid
graph LR\n  User[User in Tokyo] -->|Edge Request| PoP[Tokyo CDN Edge]\n  PoP -->|Cache Miss| Origin[Origin Server in NY]\n  Origin -->|Returns File| PoP\n  PoP -->|Cache & Return| User
```
