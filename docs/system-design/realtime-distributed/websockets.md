---
title: "WebSockets"
slug: "/system-design/realtime-distributed/websockets"
---

# WebSockets

## Overview
The WebSocket protocol enables persistent, bidirectional, full-duplex communication channels between client and server over a single TCP connection.

## Core Mechanics & How It Works
Communication begins with an HTTP request containing `Upgrade: websocket` headers. The server accepts this connection upgrade, converting the short-lived HTTP session into a persistent TCP socket.

## Architecture & Common Patterns
Here are the primary ways this topic is implemented in production systems:
- **Connection Scaling**:  Using a Redis Pub/Sub backplane to route messages across multiple WebSocket server instances.\n- **Heartbeat/Ping-Pong**:  Periodically sending packets to keep connections alive and detect dead sockets.\n
## Trade-offs & Limitations
- **Operational Complexity**: Implementing this concept increases overall design complexity and setup.
- **Resource Constraints**: It often trades CPU/memory for network/disk resources or vice versa.
- **Tradeoffs**:
  - Maintaining thousands of open TCP connections is memory-intensive and complicates horizontal scaling.\n  - Load balancing WebSockets requires sticky sessions or layer 4 TCP routing.\n
## System Design Interview Strategy
- **What to Focus On**: Explain how you scale a chat application (e.g., using a Redis Pub/Sub backplane to route messages between user connections hosted on different servers).
- **Common Scenarios**: Address how this maps to high availability, consistency constraints, or low-latency targets.

## Visual Architecture Diagram
```mermaid
graph LR\n  Client -->|HTTP Upgrade Request| Server\n  Server -->|WebSocket Connection Upgraded| Client\n  Client <-->|Bidirectional Frames| Server
```
