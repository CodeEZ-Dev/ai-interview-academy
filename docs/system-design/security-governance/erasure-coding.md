---
title: "Erasure Coding"
slug: "/system-design/security-governance/erasure-coding"
---

# Erasure Coding

## Overview
Erasure coding (EC) is a data protection method that breaks data into fragments, expands and encodes them with redundant data pieces, and stores them across different locations.

## Core Mechanics & How It Works
Using Reed-Solomon algorithms, a file is split into $K$ data blocks and $M$ parity blocks. The system can reconstruct the original file even if any $M$ blocks are lost, providing high durability.

## Architecture & Common Patterns
Here are the primary ways this topic is implemented in production systems:
- **AWS S3 Durability**:  Using erasure coding (e.g., 12 data blocks, 4 parity blocks) to guarantee 11 nines of durability with low storage overhead.\n- **RAID-6 Storage configurations.**: \n
## Trade-offs & Limitations
- **Operational Complexity**: Implementing this concept increases overall design complexity and setup.
- **Resource Constraints**: It often trades CPU/memory for network/disk resources or vice versa.
- **Tradeoffs**:
  - Reconstructing lost blocks is computationally expensive, increasing read latency during recovery.\n  - Writing parity blocks adds CPU encoding overhead.\n
## System Design Interview Strategy
- **What to Focus On**: Contrast Erasure Coding (e.g., 1.5x storage overhead for high durability) with simple database replication (which requires 3x storage overhead for three replicas), highlighting storage cost savings.
- **Common Scenarios**: Address how this maps to high availability, consistency constraints, or low-latency targets.

## Visual Architecture Diagram
```mermaid
graph TD\n  File[File Data] --> Split{EC Splitter}\n  Split --> D1[Data Block 1]\n  Split --> D2[Data Block 2]\n  Split --> P1[Parity Block 1]\n  Split --> P2[Parity Block 2]\n  Note[Can reconstruct original from any 2 blocks]
```
