---
title: "Full-Text Search"
slug: "/system-design/observability-search/full-text-search"
---

# Full-Text Search

## Overview
Full-text search handles linguistic searches across unstructured document text, returning ranked results based on search relevance.

## Core Mechanics & How It Works
Engines build inverted indexes mapping terms to document IDs. Text is processed through analysis pipelines: tokenization (splitting words), normalization (lowercasing), stemming (reducing words to roots), and stop-word filtering.

## Architecture & Common Patterns
Here are the primary ways this topic is implemented in production systems:
- **Inverted Index**:  Core index structure mapping words to document IDs.\n- **TF-IDF / BM25**:  Algorithms scoring search relevance based on term frequency and document length.\n
## Trade-offs & Limitations
- **Operational Complexity**: Implementing this concept increases overall design complexity and setup.
- **Resource Constraints**: It often trades CPU/memory for network/disk resources or vice versa.
- **Tradeoffs**:
  - Maintaining inverted indexes consumes significant storage space and memory.\n  - Updates to search indices add latency, making real-time search indexing hard.\n
## System Design Interview Strategy
- **What to Focus On**: Explain the inverted index structure, contrast database wildcard lookups (LIKE queries) with indexed text searches, and recommend dedicated search engines like Elasticsearch.
- **Common Scenarios**: Address how this maps to high availability, consistency constraints, or low-latency targets.

## Visual Architecture Diagram
```mermaid
graph TD\n  Doc[Doc 1: 'Learn AI'] --> Parser[Tokenizer & Normalizer]\n  Parser --> InvIndex[Inverted Index: 'learn' -> Doc 1, 'ai' -> Doc 1]
```
