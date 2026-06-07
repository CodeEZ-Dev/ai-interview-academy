---
sidebar_position: 2
title: Types of RAG
slug: types-of-rag
---

# Types of RAG

## Question

What are the different types of RAG implementations and when would you use each?

## Answer

RAG implementations vary in complexity and retrieval strategy. Understanding different RAG types helps you choose the right approach for your use case.

### RAG Types

#### 1. **Naive RAG**
The simplest RAG approach with basic retrieval workflow.

```
Query → Embedding → Vector Search → Top K → Context → LLM → Response
```

**Pros**: Simple to implement, works well for small datasets  
**Cons**: Limited quality, no re-ranking or filtering

#### 2. **Advanced RAG**
Enhanced retrieval with multiple optimization strategies.

Features:
- Query expansion
- Re-ranking
- Metadata filtering
- Semantic similarity
- Hybrid search (BM25 + semantic)

#### 3. **Modular RAG**
Flexible architecture with pluggable components.

```
Query → Query Processor → Retriever (Pluggable)
                          ├─ Vector Search
                          ├─ BM25
                          ├─ Hybrid
                          └─ Custom
         → Processor (Pluggable)
         → Generator (Pluggable)
         → Response
```

#### 4. **Agentic RAG**
RAG with autonomous decision-making and multi-step retrieval.

```
Goal → Reasoning → Decide Retrieval Strategy
  ↓
May need multiple retrievals
  ↓
Iterative refinement
  ↓
Final Response
```

## Comparison Table

| Type | Complexity | Quality | Speed | Cost |
|------|-----------|---------|-------|------|
| Naive | Low | Basic | Fast | Low |
| Advanced | Medium | Good | Medium | Medium |
| Modular | High | Excellent | Configurable | High |
| Agentic | Very High | Best | Slower | High |

## Key Points

✅ Start with Naive RAG for prototyping  
✅ Use Advanced RAG for production systems  
✅ Modular RAG for flexibility  
✅ Agentic RAG for complex scenarios  

## References

- [RAG Evaluation Framework](https://arxiv.org/abs/2309.15217)
- [Advanced RAG Techniques](https://arxiv.org/abs/2401.15884)

---

**Related Topics**: Retrieval Strategies, Enterprise RAG, Vector Databases

**Previous**: [What is RAG?](./what-is-rag.md) | **Next**: [RAG Architecture](./rag-architecture.md)
