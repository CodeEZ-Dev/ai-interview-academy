---
title: "Event Sourcing"
slug: "/system-design/realtime-distributed/event-sourcing"
---

# Event Sourcing

## Overview
Event Sourcing is an architectural pattern where application state updates are stored as an ordered, append-only sequence of events.

## Core Mechanics & How It Works
Instead of modifying table cells directly, the system appends events (e.g., `ItemAddedToCart`, `ItemRemoved`) to an event store database. Current state is reconstructed by reading and replaying this event log.

## Architecture & Common Patterns
Here are the primary ways this topic is implemented in production systems:
- **State Snapshotting**:  Periodically saving state snapshots to speed up replay times.\n- **Projection Engine**:  Projecting events to read-optimized views (often paired with CQRS).\n
## Trade-offs & Limitations
- **Operational Complexity**: Implementing this concept increases overall design complexity and setup.
- **Resource Constraints**: It often trades CPU/memory for network/disk resources or vice versa.
- **Tradeoffs**:
  - Replaying millions of events on startup is slow unless snapshots are used.\n  - Correcting schema errors requires database migration strategies like event upcasting.\n
## System Design Interview Strategy
- **What to Focus On**: Highlight how Event Sourcing provides audit trails and time-travel capabilities, and discuss the coordination patterns needed when pairing it with CQRS.
- **Common Scenarios**: Address how this maps to high availability, consistency constraints, or low-latency targets.

## Visual Architecture Diagram
```mermaid
graph LR\n  Event1[User Created] --> EventStore[(Event Store Log)]\n  Event2[Address Updated] --> EventStore\n  EventStore -->|Replay Events| State[Current Profile State]
```
