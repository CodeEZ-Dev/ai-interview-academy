---
title: "Checksum"
slug: "/system-design/security-governance/checksum"
---

# Checksum

## Overview
A checksum is a small-size datum derived from a block of digital data for the purpose of detecting errors that may have been introduced during its transmission or storage.

## Core Mechanics & How It Works
The sender runs a hashing algorithm (like MD5, SHA-256, or CRC32) over the data block, appending the resulting hash to the package. The receiver runs the same algorithm over the received data; if the generated hash matches the appended checksum, the data block is verified as uncorrupted.

## Architecture & Common Patterns
Here are the primary ways this topic is implemented in production systems:
- **Download Integrity**:  Publishing SHA-256 hashes alongside files.\n- **Storage Scrubbing**:  File systems running periodic checksum checks to detect silent data corruption (bit rot).\n
## Trade-offs & Limitations
- **Operational Complexity**: Implementing this concept increases overall design complexity and setup.
- **Resource Constraints**: It often trades CPU/memory for network/disk resources or vice versa.
- **Tradeoffs**:
  - Calculating checksums for large files consumes CPU and disk read bandwidth.\n  - Weak checksum algorithms (like MD5) are vulnerable to collision attacks, making them unsuitable for security checks.\n
## System Design Interview Strategy
- **What to Focus On**: Explain how checksums ensure data integrity in distributed file storage systems and detect network transmission corruption.
- **Common Scenarios**: Address how this maps to high availability, consistency constraints, or low-latency targets.

## Visual Architecture Diagram
```mermaid
graph LR\n  Data[Data Block] -->|SHA-256| Hash[Checksum: a1b2]\n  Data + Hash -->|Send Network| Receiver[Receiver Runs SHA-256] -->|Match?| Allow[File Accepted]
```
