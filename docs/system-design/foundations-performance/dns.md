---
title: "DNS"
slug: "/system-design/foundations-performance/dns"
---

# DNS

## Overview
The Domain Name System (DNS) translates human-readable domain names (e.g., google.com) into machine-readable IP addresses.

## Core Mechanics & How It Works
DNS resolutions involve recursive resolvers, root name servers, TLD name servers, and authoritative name servers. Records are cached heavily at the client, OS, router, and ISP levels.

## Architecture & Common Patterns
Here are the primary ways this topic is implemented in production systems:
- **A Record**:  Maps domain to IPv4.\n- **CNAME Record**:  Maps domain to another domain alias.\n- **Geo-DNS Routing**:  Resolves domains to the geographically closest server IP.\n- **Weighted DNS**:  Distributes traffic across IPs for simple DNS-level load balancing.\n
## Trade-offs & Limitations
- **Operational Complexity**: Implementing this concept increases overall design complexity and setup.
- **Resource Constraints**: It often trades CPU/memory for network/disk resources or vice versa.
- **Tradeoffs**:
  - DNS records are cached for hours/days (TTL), making instant failovers hard.\n  - DNS lacks instant health-awareness, potentially routing users to dead servers until records expire.\n
## System Design Interview Strategy
- **What to Focus On**: Describe how Geo-DNS helps in routing users to local regions and how dynamic DNS can be used for load balancing and blue-green deployments.
- **Common Scenarios**: Address how this maps to high availability, consistency constraints, or low-latency targets.

## Visual Architecture Diagram
```mermaid
graph TD\n  Client -->|Query: domain.com| Resolver[DNS Resolver]\n  Resolver -->|Cached? No| Auth[Authoritative Name Server]\n  Auth -->|IP: 192.0.2.1| Resolver\n  Resolver -->|Return IP| Client
```
