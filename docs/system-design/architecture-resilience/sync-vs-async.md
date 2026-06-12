---
title: "Sync vs Async"
slug: "/system-design/architecture-resilience/sync-vs-async"
---

# Sync vs Async

## Overview
Comparing synchronous (blocking, request-response, execution waits) and asynchronous (non-blocking, callback/event-based) request execution flows.

## Core Mechanics & How It Works
Synchronous systems require the client to wait for processing to complete. Asynchronous systems return an immediate receipt (e.g., HTTP 202 Accepted), running tasks in the background and notifying clients via polling, webhooks, or WebSockets.

## Architecture & Common Patterns
Here are the primary ways this topic is implemented in production systems:
- **Polling**:  Client periodically queries the server for status updates.\n- **Webhook**:  Server sends an HTTP POST request to the client when background processing completes.\n- **Reactive Streaming**:  Non-blocking event streaming handlers (RxJS, Spring WebFlux).\n
## Trade-offs & Limitations
- **Operational Complexity**: Implementing this concept increases overall design complexity and setup.
- **Resource Constraints**: It often trades CPU/memory for network/disk resources or vice versa.
- **Tradeoffs**:
  - Synchronous flows are simple to build but lock server threads, reducing concurrency limits.\n  - Asynchronous flows scale well but complicate UX design, transaction handling, and error propagation.\n
## System Design Interview Strategy
- **What to Focus On**: Explain when to transition a process from synchronous to asynchronous (e.g., generating PDF reports or uploading files) to prevent request timeouts.
- **Common Scenarios**: Address how this maps to high availability, consistency constraints, or low-latency targets.

## Visual Architecture Diagram
```mermaid
graph TD\n  Sync[Sync: Client -> Wait -> App -> Wait -> DB -> Response]\n  Async[Async: Client -> App -> Return ID -> App processes in background]
```
