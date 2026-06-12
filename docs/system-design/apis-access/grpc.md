---
title: "gRPC"
slug: "/system-design/apis-access/grpc"
---

# gRPC

## Overview
gRPC is an open-source, high-performance remote procedure call (RPC) framework developed by Google, running over HTTP/2 and using Protocol Buffers (protobuf) as its interface description language.

## Core Mechanics & How It Works
gRPC compiles service contracts (.proto files) into client stubs and server skeletons. It communicates using binary serialization and leverages HTTP/2 multiplexing, header compression, and bidirectional streaming.

## Architecture & Common Patterns
Here are the primary ways this topic is implemented in production systems:
- **Unary RPC**:  Single request, single response.\n- **Server Streaming**:  Client sends request, server streams responses back.\n- **Client Streaming**:  Client streams requests, server returns single response.\n- **Bidirectional Streaming**:  Concurrent, independent request/response streams.\n
## Trade-offs & Limitations
- **Operational Complexity**: Implementing this concept increases overall design complexity and setup.
- **Resource Constraints**: It often trades CPU/memory for network/disk resources or vice versa.
- **Tradeoffs**:
  - gRPC is binary-based and not human-readable out-of-the-box, making testing harder.\n  - Browser support is limited without proxy layers like gRPC-Web.\n
## System Design Interview Strategy
- **What to Focus On**: Recommend gRPC for internal microservices communication to reduce serialization overhead and enforce strict interface schemas.
- **Common Scenarios**: Address how this maps to high availability, consistency constraints, or low-latency targets.

## Visual Architecture Diagram
```mermaid
graph LR\n  ClientSvc[Client Service] -->|gRPC: Protobuf over HTTP/2| ServerSvc[Server Service]\n  ClientSvc -.->|Compile Contract| Proto[schema.proto]
```
