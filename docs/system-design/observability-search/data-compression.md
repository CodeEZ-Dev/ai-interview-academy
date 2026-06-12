---
title: "Data Compression"
slug: "/system-design/observability-search/data-compression"
---

# Data Compression

## Overview
Data compression reduces the physical size of data in transit or at rest to optimize bandwidth and storage costs.

## Core Mechanics & How It Works
Compression algorithms use patterns in data to reduce bit sizes. Common algorithms include Gzip/Brotli (for text transit over HTTP) and Snappy/Zstd (for high-speed database block compression).

## Architecture & Common Patterns
Here are the primary ways this topic is implemented in production systems:
- **HTTP Content-Encoding**:  Compressing text assets (HTML/JS) using Gzip or Brotli before sending them to clients.\n- **Columnar Compression**:  Applying run-length encoding to column values in analytical databases.\n
## Trade-offs & Limitations
- **Operational Complexity**: Implementing this concept increases overall design complexity and setup.
- **Resource Constraints**: It often trades CPU/memory for network/disk resources or vice versa.
- **Tradeoffs**:
  - Compression requires CPU processing cycles to compress and decompress data, which can increase latency if CPU resources are constrained.\n  - Double compression (e.g., compressing already-compressed files like JPEGs) wastes CPU resources without saving space.\n
## System Design Interview Strategy
- **What to Focus On**: Explain when compression is beneficial (e.g., saving network bandwidth on large JSON payloads) vs. when the CPU overhead outweighs the savings.
- **Common Scenarios**: Address how this maps to high availability, consistency constraints, or low-latency targets.

## Visual Architecture Diagram
```mermaid
graph LR\n  Client[App] -->|Compress| Payload[Brotli Payload] -->|Send| Server[Server] -->|Decompress| Data[JSON]
```
