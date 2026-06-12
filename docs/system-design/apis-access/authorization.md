---
title: "Authorization"
slug: "/system-design/apis-access/authorization"
---

# Authorization

## Overview
Authorization (AuthZ) is the process of verifying what resources or actions an authenticated identity has permission to access (determining 'what you can do').

## Core Mechanics & How It Works
Authorization models evaluate access rules based on user roles, scopes, ownership attributes, and security policies.

## Architecture & Common Patterns
Here are the primary ways this topic is implemented in production systems:
- **Role-Based Access Control (RBAC)**:  Assigning permissions to roles, and users to roles.\n- **Attribute-Based Access Control (ABAC)**:  Decisions based on attributes (e.g., user department, resource owner, IP address).\n- **Relationship-Based Access Control (ReBAC)**:  Graph-based permission checks (e.g., Google Zanzibar model).\n
## Trade-offs & Limitations
- **Operational Complexity**: Implementing this concept increases overall design complexity and setup.
- **Resource Constraints**: It often trades CPU/memory for network/disk resources or vice versa.
- **Tradeoffs**:
  - RBAC is simple to manage but lacks granularity (e.g., checking if a user owns a specific file).\n  - ABAC and ReBAC are highly granular but computationally complex and harder to audit.\n
## System Design Interview Strategy
- **What to Focus On**: Demonstrate understanding of the separation of concerns: Authenticate at the gateway level, authorize at both the gateway (coarse-grained roles) and individual service (fine-grained resource checks) levels.
- **Common Scenarios**: Address how this maps to high availability, consistency constraints, or low-latency targets.

## Visual Architecture Diagram
```mermaid
graph TD\n  User[User with Role: Editor] --> Check{Permission Check: Can Delete?}\n  Check -->|No| Reject[403 Forbidden]\n  Check -->|Yes: Only Admin| Delete[Delete Resource]
```
