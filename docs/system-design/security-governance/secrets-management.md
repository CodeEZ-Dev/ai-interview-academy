---
title: "Secrets Management"
slug: "/system-design/security-governance/secrets-management"
---

# Secrets Management

## Overview
Secrets management is the practice of securing sensitive credentials, API keys, database passwords, and cryptographic keys from exposure.

## Core Mechanics & How It Works
Instead of hardcoding secrets in code, applications fetch encrypted credentials at runtime from a secure Vault service, authenticated using instance metadata or IAM roles.

## Architecture & Common Patterns
Here are the primary ways this topic is implemented in production systems:
- **Central Vault Storage**:  Using HashiCorp Vault or AWS Secrets Manager to store credentials.\n- **Dynamic Rotation**:  Automatically changing database passwords and API keys on schedules without app redeployments.\n
## Trade-offs & Limitations
- **Operational Complexity**: Implementing this concept increases overall design complexity and setup.
- **Resource Constraints**: It often trades CPU/memory for network/disk resources or vice versa.
- **Tradeoffs**:
  - Secrets manager service outages block applications from boot-loading or connecting to databases.\n  - Integrating secure auth checks across container orchestrators adds deployment complexity.\n
## System Design Interview Strategy
- **What to Focus On**: Highlight the security risks of checking plaintext secrets into Git, and explain how dynamic secret rotation reduces key leak vulnerabilities.
- **Common Scenarios**: Address how this maps to high availability, consistency constraints, or low-latency targets.

## Visual Architecture Diagram
```mermaid
graph LR\n  App[App Server Pod] -->|IAM Auth| Vault{Secrets Manager}\n  Vault -->|Return DB Password| App\n  App -->|Connect| DB[(PostgreSQL)]
```
