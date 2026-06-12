---
title: "Encryption"
slug: "/system-design/security-governance/encryption"
---

# Encryption

## Overview
Encryption is the cryptographic process of encoding data to prevent unauthorized access, decryptable only with the correct key.

## Core Mechanics & How It Works
Symmetric encryption (e.g., AES) uses the same key for encryption and decryption, making it fast and suitable for large payloads. Asymmetric encryption (e.g., RSA) uses a public key to encrypt and a private key to decrypt, facilitating secure key exchange.

## Architecture & Common Patterns
Here are the primary ways this topic is implemented in production systems:
- **Encryption in Transit**:  Using TLS (HTTPS) to encrypt network data packets.\n- **Encryption at Rest**:  Encrypting database storage disks using AES-256.\n- **Envelope Encryption**:  Encrypting data with a Data Encryption Key (DEK), and encrypting the DEK with a Key Encryption Key (KEK) managed by a KMS.\n
## Trade-offs & Limitations
- **Operational Complexity**: Implementing this concept increases overall design complexity and setup.
- **Resource Constraints**: It often trades CPU/memory for network/disk resources or vice versa.
- **Tradeoffs**:
  - Cryptographic operations add CPU overhead, increasing query and request latencies.\n  - Losing encryption keys results in permanent data loss.\n
## System Design Interview Strategy
- **What to Focus On**: Demonstrate envelope encryption mechanics (separating data key storage from master key systems) and outline TLS handshake protocols.
- **Common Scenarios**: Address how this maps to high availability, consistency constraints, or low-latency targets.

## Visual Architecture Diagram
```mermaid
graph LR\n  Plain[Plaintext Data] -->|Encrypt with DEK| Cipher[Ciphertext]\n  DEK[Data Encryption Key] -->|Encrypt with KEK| EncDEK[Encrypted DEK]\n  KMS[KMS Service holds KEK] -.-> EncDEK
```
