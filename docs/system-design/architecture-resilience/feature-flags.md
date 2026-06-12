---
title: "Feature Flags"
slug: "/system-design/architecture-resilience/feature-flags"
---

# Feature Flags

## Overview
Feature flags (toggles) decouple deployment from release, allowing features to be enabled or disabled dynamically in production without redeploying code.

## Core Mechanics & How It Works
Application code wraps features in conditional checks. A feature flag service evaluates the flag value at runtime based on the client context (e.g., user ID, tenant, region).

## Architecture & Common Patterns
Here are the primary ways this topic is implemented in production systems:
- **Release Toggles**:  Hiding incomplete features until launch.\n- **Permission Toggles**:  Unlocking features for premium or internal beta users.\n- **Circuit Breaker Toggles**:  Instantly disabling a resource-heavy feature if backend databases are overloaded.\n
## Trade-offs & Limitations
- **Operational Complexity**: Implementing this concept increases overall design complexity and setup.
- **Resource Constraints**: It often trades CPU/memory for network/disk resources or vice versa.
- **Tradeoffs**:
  - Feature flags introduce technical debt, as old toggles must be cleaned up to avoid spaghetti code.\n  - Evaluating flags dynamically can add network latency if flag states are not cached locally.\n
## System Design Interview Strategy
- **What to Focus On**: Highlight how feature flags support dark launching, A/B testing, and emergency shutdowns of failing code paths.
- **Common Scenarios**: Address how this maps to high availability, consistency constraints, or low-latency targets.

## Visual Architecture Diagram
```mermaid
graph TD\n  App[App Code] --> Check{Is Flag Enabled?}\n  Check -->|Yes: Render UI| NewFeature[New Feature]\n  Check -->|No| OldFeature[Old Feature]
```
