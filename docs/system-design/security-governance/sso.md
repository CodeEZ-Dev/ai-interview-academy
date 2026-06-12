---
title: "SSO"
slug: "/system-design/security-governance/sso"
---

# SSO

## Overview
Single Sign-On (SSO) is an authentication protocol that allows a user to log in once and access multiple independent applications.

## Core Mechanics & How It Works
SSO uses protocols like SAML (XML assertions) or OpenID Connect (OIDC / OAuth JSON assertions). When a user logs in, the Identity Provider (IdP) generates a cryptographically signed token. Downstream apps verify this signature to authenticate the user's session.

## Architecture & Common Patterns
Here are the primary ways this topic is implemented in production systems:
- **OIDC Integration**:  Using Auth0, Okta, or Keycloak to manage identity tokens.\n- **Central Logins**:  Redirecting users to a shared domain to enter credentials.\n
## Trade-offs & Limitations
- **Operational Complexity**: Implementing this concept increases overall design complexity and setup.
- **Resource Constraints**: It often trades CPU/memory for network/disk resources or vice versa.
- **Tradeoffs**:
  - SSO creates a single target: if the Identity Provider goes down, access is blocked across all linked applications.\n  - Session expiration and logouts must propagate to all downstream apps (single logout complexity).\n
## System Design Interview Strategy
- **What to Focus On**: Explain the OIDC authorization code flow, and discuss how JSON Web Keys Sets (JWKS) verify token signatures.
- **Common Scenarios**: Address how this maps to high availability, consistency constraints, or low-latency targets.

## Visual Architecture Diagram
```mermaid
graph TD\n  User -->|Login| App[App Portal]\n  App -->|Redirect| IdP[Identity Provider Okta]\n  User -->|Credentials| IdP\n  IdP -->|Sign & Send JWT| App
```
