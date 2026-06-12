---
title: "WebRTC"
slug: "/system-design/realtime-distributed/webrtc"
---

# WebRTC

## Overview
WebRTC (Web Real-Time Communication) is an open-source project enabling peer-to-peer (P2P) audio, video, and data streaming directly between browsers without intermediate media servers.

## Core Mechanics & How It Works
Peers exchange connection metadata (SDP offers/answers) through a signaling server. They locate direct network paths using STUN servers, or route media through TURN relays if firewalls block direct connection.

## Architecture & Common Patterns
Here are the primary ways this topic is implemented in production systems:
- **Signaling Channel**:  An HTTP/WebSocket server used to negotiate connection details.\n- **STUN/TURN Servers**:  Infrastructure used for NAT traversal.\n- **Mesh/SFU/MCU**:  Routing topologies used for multi-user video conferencing.\n
## Trade-offs & Limitations
- **Operational Complexity**: Implementing this concept increases overall design complexity and setup.
- **Resource Constraints**: It often trades CPU/memory for network/disk resources or vice versa.
- **Tradeoffs**:
  - P2P mesh topologies scale poorly as user counts increase (requiring N*(N-1) connections), consuming significant client bandwidth.\n  - TURN relay servers are expensive to run because they must proxy all video data.\n
## System Design Interview Strategy
- **What to Focus On**: Explain when to use STUN (direct P2P routing) vs. TURN (relaying traffic due to strict symmetric NATs) and distinguish between SFU and MCU video architectures.
- **Common Scenarios**: Address how this maps to high availability, consistency constraints, or low-latency targets.

## Visual Architecture Diagram
```mermaid
graph TD\n  PeerA[Peer A] -->|Signaling: SDP| Svc[Signaling Server]\n  PeerB[Peer B] -->|Signaling: SDP| Svc\n  PeerA -->|NAT Check| STUN[STUN Server]\n  PeerA <-->|Direct P2P Media stream| PeerB
```
