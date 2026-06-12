---
title: "Authentication"
slug: "/system-design/apis-access/authentication"
---

# Authentication

## Overview
Authentication (AuthN) is the security process of verifying the identity of a user, service, or device (verifying 'who you are').

## Core Mechanics & How It Works
Authentication uses credentials like passwords, multi-factor tokens (MFA), OAuth client credentials, JSON Web Tokens (JWT), or X.509 client certificates to verify identities.

## Architecture & Common Patterns
Here are the primary ways this topic is implemented in production systems:
- **Session-Based Auth**:  Server stores session in database/Redis; client holds a session cookie.\n- **Token-Based Auth (JWT)**:  Stateless tokens containing signatures and claims, verified by the server without database lookups.\n- **OAuth 2.0 / OIDC**:  Delegated access flow where identity is verified by a central provider.\n
## Trade-offs & Limitations
- **Operational Complexity**: Implementing this concept increases overall design complexity and setup.
- **Resource Constraints**: It often trades CPU/memory for network/disk resources or vice versa.
- **Tradeoffs**:
  - Session auth is easy to revoke but requires database storage and scaling lookup throughput.\n  - JWT is stateless and fast but hard to invalidate before the expiration time (TTL) runs out.\n
## System Design Interview Strategy
- **What to Focus On**: Explain token revocation strategies (e.g., using short-lived access tokens with long-lived refresh tokens, and keeping a blacklist database for revoked refresh tokens).
- **Common Scenarios**: Address how this maps to high availability, consistency constraints, or low-latency targets.

## Visual Architecture Diagram
```mermaid
graph TD\n  User -->|Credentials| Provider[Identity Provider]\n  Provider -->|Signed JWT Token| User\n  User -->|Bearer JWT Token| App[App Server]\n  App -->|Verify Signature locally| Allow[Resource Access Granted]
```
