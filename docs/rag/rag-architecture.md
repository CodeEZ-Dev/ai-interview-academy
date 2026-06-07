---
sidebar_position: 3
title: RAG Architecture
slug: /rag/rag-architecture
---

# Retrieval-Augmented Generation Architecture

## Question
What are the key components of a RAG system architecture?

## Answer
RAG systems combine three main components: retrieval, augmentation, and generation.

### Core Components
1. **Document Store** - Repository of indexed documents
2. **Retriever** - Finds relevant documents (BM25, Dense, Hybrid)
3. **Augmentation** - Constructs context from retrieved documents
4. **Generator** - LLM that generates responses using context

### Retrieval Methods
- **Sparse Retrieval** - BM25, TF-IDF
- **Dense Retrieval** - Embedding-based, semantic search
- **Hybrid Retrieval** - Combines sparse and dense
- **Reranking** - Cross-encoder models for ranking

### Document Processing
- **Chunking** - Split documents into manageable pieces
- **Embedding** - Convert chunks to vector representations
- **Indexing** - Store embeddings for fast retrieval
- **Metadata** - Attach source information

### Augmentation Strategies
- **Context Window** - Add top-k retrieved documents
- **Query Expansion** - Generate multiple queries
- **Prompt Conditioning** - Inject system instructions
- **Cascade Augmentation** - Multi-stage retrieval

## Architecture Diagram
```mermaid
graph LR
A[Query] --> B[Embedding Model]
B --> C[Vector DB]
C --> D[Retrieve Top-k]
D --> E[Construct Context]
E --> F[LLM]
F --> G[Response]
```

## Key Points
- Modular design allows component optimization
- Retrieval quality directly impacts generation
- Embedding model choice is critical
- Reranking improves precision

## Interview Tips
- Explain trade-offs between retrieval methods
- Discuss scaling considerations
- Share production system experience

## References
- [Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks](https://arxiv.org/abs/2005.11401)
- [Dense Passage Retrieval for Open-Domain Question Answering](https://arxiv.org/abs/2004.04906)
