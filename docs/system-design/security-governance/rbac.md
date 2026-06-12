---
title: "RBAC"
slug: "/system-design/security-governance/rbac"
---

# RBAC

## Overview
Role-Based Access Control (RBAC) restricts system access to authorized users based on their assigned role within an organization.

## Core Mechanics & How It Works
Administrators create Roles containing lists of allowed Operations (permissions). Users are assigned to one or more Roles. The authorization middleware checks the user's role before granting access to resource paths.

## Architecture & Common Patterns
Here are the primary ways this topic is implemented in production systems:
- **Role Inheritance**:  Senior roles inherit all permissions of junior roles (e.g., Admin inherits Editor and Viewer permissions).\n- **Least Privilege**:  Granting users the minimal role needed to perform their job.\n
## Trade-offs & Limitations
- **Operational Complexity**: Implementing this concept increases overall design complexity and setup.
- **Resource Constraints**: It often trades CPU/memory for network/disk resources or vice versa.
- **Tradeoffs**:
  - RBAC cannot easily enforce resource-level constraints (e.g., allowing an editor to modify only their own articles), leading to 'role explosion'.\n  - Role assignments require audit trails.\n
## System Design Interview Strategy
- **What to Focus On**: Discuss the database schema for a typical RBAC implementation (Users, Roles, Permissions, UserRoles join table, RolePermissions join table).
- **Common Scenarios**: Address how this maps to high availability, consistency constraints, or low-latency targets.

## Visual Architecture Diagram
```mermaid
graph TD\n  User[User: Alice] --> Role[Role: Editor]\n  Role --> Perm1[Permission: Read]\n  Role --> Perm2[Permission: Update]
```
