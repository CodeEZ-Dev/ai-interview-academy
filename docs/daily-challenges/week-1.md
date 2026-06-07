---
sidebar_position: 1
title: Daily Challenges - Week 1
slug: week-1
---

# Daily Challenges - Week 1

## Challenge 1: RAG System Design

**Difficulty**: Medium  
**Time**: 30 minutes

### Problem

Design a RAG system for a customer support chatbot that answers questions about a company's products using:
- Product documentation (PDF)
- FAQ database
- Recent support conversations

### Requirements

1. How would you structure the retrieval?
2. What vector embedding model would you choose?
3. How would you handle multi-modal queries (text + images)?
4. What's your evaluation strategy?

### Sample Solution

**Architecture**:
- Embed documentation chunks with multi-lingual model
- Dual retrieval: BM25 for exact matches, semantic for similarity
- Re-rank results with cross-encoder
- Add metadata filtering by product category

## Challenge 2: LLMOps Pipeline

**Difficulty**: Hard  
**Time**: 45 minutes

### Problem

Design the complete LLMOps lifecycle for a content generation service that needs:
- Multiple language support
- Cost optimization
- Quality monitoring
- Scalability

### Deliverables

1. Architecture diagram
2. Monitoring strategy
3. Cost estimation
4. Failure handling

## Challenge 3: Agentic System

**Difficulty**: Medium  
**Time**: 35 minutes

### Problem

Design an agent that can:
- Search the web for information
- Analyze data
- Generate reports
- Schedule meetings

### Think About

1. What tools does the agent need?
2. How do you prevent infinite loops?
3. How do you verify tool outputs?
4. What's your backup strategy if a tool fails?

---

**Next**: [Week 2 Challenges](./week-2.md)
