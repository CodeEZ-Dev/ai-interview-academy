/**
 * AI Interview Academy - Curated Interview Question Bank
 * 50+ real interview questions across 10 AI/ML topic categories
 */

export const TOPICS = [
  { id: 'genai',           label: 'Generative AI',         emoji: '🤖', color: '#6366f1', description: 'LLMs, embeddings & applications' },
  { id: 'rag',             label: 'RAG',                   emoji: '📖', color: '#8b5cf6', description: 'Retrieval Augmented Generation' },
  { id: 'agentic-ai',      label: 'Agentic AI',            emoji: '🧠', color: '#a855f7', description: 'Autonomous AI agents & systems' },
  { id: 'mcp',             label: 'MCP',                   emoji: '🔌', color: '#ec4899', description: 'Model Context Protocol' },
  { id: 'llmops',          label: 'LLMOps',                emoji: '⚙️', color: '#f59e0b', description: 'Operations & lifecycle management' },
  { id: 'gcp',             label: 'GCP GenAI',             emoji: '☁️', color: '#10b981', description: 'Google Cloud AI services' },
  { id: 'architecture',    label: 'Enterprise Architecture',emoji: '🏗️', color: '#06b6d4', description: 'Scalable AI system patterns' },
  { id: 'system-design',   label: 'System Design',         emoji: '🎯', color: '#3b82f6', description: 'Distributed systems design' },
  { id: 'ml-dl',           label: 'ML / Deep Learning',    emoji: '📊', color: '#ef4444', description: 'Machine learning fundamentals' },
  { id: 'data-engineering',label: 'Data Engineering',      emoji: '📦', color: '#84cc16', description: 'Pipelines & data architecture' },
];

export const QUESTIONS = {
  'genai': [
    {
      id: 'genai-1',
      difficulty: 'easy',
      question: 'What is Generative AI and how does it differ from traditional machine learning?',
      answer: `**Generative AI** creates new content (text, images, code, audio) by learning the underlying data distribution, while traditional ML classifies or predicts from inputs.\n\n**Key differences:**\n- Traditional ML: Input → Classifier → Label/Prediction\n- Generative AI: Prompt → Model → New Original Content\n\n**Core techniques:** Transformer models (GPT, Gemini), Diffusion models (DALL-E), GANs\n\n**Interview tip:** Emphasize that GenAI *learns data distributions* rather than mappings, and requires vastly more compute.`,
    },
    {
      id: 'genai-2',
      difficulty: 'medium',
      question: 'Explain the Transformer architecture and the role of self-attention.',
      answer: `**Transformer** = Encoder + Decoder stacks, built on the **self-attention mechanism**.\n\n**Self-attention formula:** Attention(Q,K,V) = softmax(QKᵀ/√dₖ)V\n\n**How it works:**\n1. Each token attends to *all other tokens* in the sequence\n2. Queries (Q), Keys (K), Values (V) are learned projections\n3. Attention scores determine how much each token influences another\n\n**Key advantages:**\n- Parallelizable (unlike RNNs)\n- Handles long-range dependencies\n- Multi-head attention captures different relationship types\n\n**Interview tip:** Explain why √dₖ scaling prevents vanishing gradients.`,
    },
    {
      id: 'genai-3',
      difficulty: 'medium',
      question: 'What is prompt engineering and what are the key techniques?',
      answer: `**Prompt engineering** is crafting inputs to LLMs to elicit desired outputs without modifying model weights.\n\n**Key techniques:**\n- **Zero-shot:** Direct instruction, no examples\n- **Few-shot:** 2–5 examples in the prompt\n- **Chain-of-Thought (CoT):** "Let's think step by step"\n- **ReAct:** Reasoning + Action interleaved\n- **System prompts:** Set role/persona/constraints\n\n**Best practices:**\n- Be explicit and specific\n- Use delimiters (""" or XML tags)\n- Ask for structured output (JSON)\n- Iterate and test systematically`,
    },
    {
      id: 'genai-4',
      difficulty: 'hard',
      question: 'What is RLHF (Reinforcement Learning from Human Feedback) and why is it critical for LLMs?',
      answer: `**RLHF** aligns LLM behavior with human preferences through three stages:\n\n1. **Supervised Fine-Tuning (SFT):** Train on human-curated demonstrations\n2. **Reward Model Training:** Human raters rank outputs; train a reward model\n3. **RL Optimization (PPO):** Fine-tune LLM to maximize reward model score\n\n**Why critical:**\n- Reduces harmful, biased, or unhelpful outputs\n- Enables instruction following\n- Bridges gap between "predict next token" and "be useful"\n\n**Challenges:** Reward hacking, expensive human labeling, reward model brittleness\n\n**Alternatives:** Constitutional AI (CAI), DPO (Direct Preference Optimization)`,
    },
    {
      id: 'genai-5',
      difficulty: 'hard',
      question: 'Explain the difference between fine-tuning, PEFT, and LoRA.',
      answer: `**Full Fine-Tuning:** Update all model parameters — expensive, risk of catastrophic forgetting.\n\n**PEFT (Parameter-Efficient Fine-Tuning):** Only update a small subset of parameters.\n\n**LoRA (Low-Rank Adaptation):**\n- Freezes pre-trained weights W\n- Adds low-rank decomposition: W + ΔW = W + AB where A∈R^(d×r), B∈R^(r×k)\n- Rank r << d,k → dramatically fewer trainable params\n- At inference: merge LoRA weights back (no latency overhead)\n\n**Variants:** QLoRA (quantized base model + LoRA), AdaLoRA (adaptive rank)\n\n**When to use LoRA:** Domain adaptation with limited GPU budget`,
    },
    {
      id: 'genai-6',
      difficulty: 'medium',
      question: 'What are hallucinations in LLMs and how do you mitigate them?',
      answer: `**Hallucination:** LLM generates confident but factually incorrect or fabricated information.\n\n**Types:**\n- Intrinsic (contradicts source)\n- Extrinsic (unverifiable claims)\n\n**Root causes:** Training data gaps, autoregressive token prediction, lack of grounding\n\n**Mitigation strategies:**\n1. **RAG** — Ground responses in retrieved facts\n2. **Temperature reduction** — More deterministic outputs\n3. **Self-consistency** — Sample multiple outputs, take majority\n4. **Citation forcing** — Require sources in the prompt\n5. **Output validation** — Post-process with fact-checker\n6. **Constitutional AI** — Critique and revise outputs`,
    },
    {
      id: 'genai-7',
      difficulty: 'easy',
      question: 'What are embeddings and how are they used in AI applications?',
      answer: `**Embeddings** are dense vector representations that capture semantic meaning of text, images, or other data.\n\n**Key properties:**\n- Similar concepts → vectors close in embedding space\n- Dimensionality: typically 384–3072 dimensions\n- Generated by encoder models (e.g., text-embedding-ada-002, Gemini Embeddings)\n\n**Applications:**\n- **Semantic search:** Find similar documents\n- **RAG:** Retrieve relevant context for LLMs\n- **Clustering:** Group similar content\n- **Classification:** Train lightweight classifiers on top\n- **Recommendation:** Find similar items\n\n**Distance metrics:** Cosine similarity, dot product, Euclidean distance`,
    },
    {
      id: 'genai-8',
      difficulty: 'medium',
      question: 'What is temperature in LLMs and when would you set it low vs. high?',
      answer: `**Temperature** scales the logit distribution before sampling:\n- softmax(logits / T)\n\n**Temperature = 0 (greedy):** Always picks the highest probability token — deterministic, repetitive\n\n**Low temperature (0.1–0.3):**\n- More focused, conservative outputs\n- Use for: code generation, factual Q&A, structured data extraction\n\n**High temperature (0.7–1.2):**\n- More creative, diverse outputs\n- Use for: brainstorming, story writing, ideation\n\n**Related parameters:**\n- **Top-p (nucleus sampling):** Only sample from top-p probability mass\n- **Top-k:** Only sample from top k tokens`,
    },
    {
      id: 'genai-9',
      difficulty: 'hard',
      question: 'Explain the concept of "context window" and its architectural implications.',
      answer: `**Context window** = maximum tokens the model can process in one forward pass (input + output combined).\n\n**Evolution:** GPT-3 (4K) → GPT-4 (128K) → Gemini 1.5 Pro (1M tokens)\n\n**Architectural challenges:**\n- Self-attention is O(n²) in sequence length → quadratic memory/compute\n- KV cache stores K,V matrices for all tokens in context\n\n**Solutions:**\n- **Flash Attention:** Memory-efficient attention via tiling\n- **Sliding window attention** (Mistral): Local attention window\n- **Ring Attention:** Distributed context across devices\n- **RoPE / ALiBi:** Better positional encodings for long contexts\n\n**Practical implications:** Long contexts ≠ perfect recall — "lost in the middle" problem`,
    },
    {
      id: 'genai-10',
      difficulty: 'medium',
      question: 'What evaluation metrics do you use for LLM outputs?',
      answer: `**Reference-based metrics:**\n- **BLEU:** n-gram overlap (translation, summarization)\n- **ROUGE:** Recall-oriented n-gram overlap\n- **BERTScore:** Semantic similarity using embeddings\n\n**LLM-as-Judge:**\n- Use a strong model (GPT-4, Gemini) to rate outputs on dimensions: faithfulness, relevance, coherence, helpfulness\n\n**Task-specific:**\n- Code: execution correctness (HumanEval pass@k)\n- RAG: Ragas framework (faithfulness, answer relevancy, context recall)\n- Chatbots: MT-Bench, LMSYS Chatbot Arena (human ELO ratings)\n\n**Production:** Track user thumbs-up/down, task completion rates`,
    },
  ],

  'rag': [
    {
      id: 'rag-1',
      difficulty: 'easy',
      question: 'What is RAG (Retrieval-Augmented Generation) and why is it preferred over pure fine-tuning?',
      answer: `**RAG** combines a retrieval system with a generative LLM:\n1. **Retrieve** relevant documents from a knowledge base\n2. **Augment** the prompt with retrieved context\n3. **Generate** a grounded response\n\n**Advantages over fine-tuning:**\n- ✅ Knowledge can be updated without retraining\n- ✅ Reduces hallucinations (grounded in real documents)\n- ✅ Cheaper and faster to maintain\n- ✅ Source citations are possible\n- ✅ Domain adaptation with no model weight changes\n\n**When fine-tuning wins:** Teaching new reasoning patterns, format changes, or when retrieval latency is unacceptable`,
    },
    {
      id: 'rag-2',
      difficulty: 'medium',
      question: 'Explain the difference between Naive RAG, Advanced RAG, and Modular RAG.',
      answer: `**Naive RAG:** Index → Retrieve top-k chunks → Stuff into prompt → Generate\n*Problems:* Poor retrieval quality, irrelevant chunks, context stuffing\n\n**Advanced RAG:**\n- Pre-retrieval: Query rewriting, HyDE (hypothetical document embedding)\n- Retrieval: Hybrid search (dense + sparse), re-ranking\n- Post-retrieval: Context compression, re-ranking with cross-encoder\n\n**Modular RAG:**\n- Treats RAG as composable modules\n- Routing: decide which retrieval strategy to use\n- Fusion: combine multiple retrieved sets\n- Iterative/Adaptive RAG: multi-hop retrieval\n- Self-RAG: model decides when to retrieve`,
    },
    {
      id: 'rag-3',
      difficulty: 'medium',
      question: 'What are chunking strategies and how do you choose the right one?',
      answer: `**Fixed-size chunking:** Split by N tokens with overlap\n- Simple, predictable — good baseline\n\n**Sentence/paragraph chunking:** Respect natural language boundaries\n- Better semantic coherence\n\n**Recursive character splitting:** Hierarchical split (paragraph → sentence → word)\n- Default in LangChain\n\n**Semantic chunking:** Split based on embedding similarity shifts\n- Best quality, most expensive\n\n**Document-aware:** Respect markdown headers, HTML structure\n\n**Choosing strategy:**\n- Short, structured docs → small chunks (256–512 tokens)\n- Long narrative docs → larger chunks (1024+ tokens)\n- Always include overlap (10–20%) to avoid context loss at boundaries`,
    },
    {
      id: 'rag-4',
      difficulty: 'hard',
      question: 'What is Hybrid Search and why is it better than pure vector search for RAG?',
      answer: `**Dense (vector) search:** Embeds query and docs into vector space, finds semantically similar docs via cosine/ANN search\n*Good for:* Paraphrase matching, conceptual similarity\n*Bad for:* Exact keyword matching, rare terms, proper nouns\n\n**Sparse (keyword) search:** BM25/TF-IDF based term frequency matching\n*Good for:* Exact matches, rare technical terms, product codes\n*Bad for:* Synonyms, semantic similarity\n\n**Hybrid Search:** Combine both scores\n- Reciprocal Rank Fusion (RRF): merge ranked lists\n- Linear combination: α·dense_score + (1-α)·sparse_score\n\n**Result:** Best of both worlds — widely used in production RAG pipelines (Weaviate, Elasticsearch, Pinecone)`,
    },
    {
      id: 'rag-5',
      difficulty: 'hard',
      question: 'How do you evaluate a RAG pipeline? Explain key Ragas metrics.',
      answer: `**Ragas framework** evaluates RAG on 4 dimensions without human labels:\n\n1. **Faithfulness:** Are all claims in the answer supported by the retrieved context?\n   - LLM-verified: each sentence cross-checked against chunks\n\n2. **Answer Relevancy:** Does the answer address the question?\n   - Reverse-generate questions from answer, measure similarity\n\n3. **Context Precision:** Are the retrieved chunks actually used?\n   - Ratio of relevant chunks in top-k\n\n4. **Context Recall:** Did we retrieve all necessary information?\n   - Requires reference answer (ground truth)\n\n**Additional:** Context Entity Recall, Answer Correctness, Answer Similarity\n\n**Production metrics:** End-to-end latency, retrieval hit rate, user satisfaction scores`,
    },
    {
      id: 'rag-6',
      difficulty: 'medium',
      question: 'What are vector databases and how do they enable RAG at scale?',
      answer: `**Vector databases** store, index, and query high-dimensional embeddings efficiently using **Approximate Nearest Neighbor (ANN)** algorithms.\n\n**Key ANN algorithms:**\n- **HNSW** (Hierarchical Navigable Small World) — Fast, accurate, memory-intensive\n- **IVF** (Inverted File Index) — Cluster-based, good for large scale\n- **PQ** (Product Quantization) — Compression for memory efficiency\n\n**Popular options:**\n| DB | Highlights |\n|---|---|\n| Pinecone | Managed, production-ready |\n| Weaviate | Hybrid search, GraphQL |\n| Qdrant | Rust-based, filtering |\n| ChromaDB | Local dev, embedded |\n| pgvector | Postgres extension |\n\n**Trade-offs:** Recall vs. speed vs. memory — tune HNSW parameters (ef, M)`,
    },
    {
      id: 'rag-7',
      difficulty: 'medium',
      question: 'What is HyDE (Hypothetical Document Embedding) and when should you use it?',
      answer: `**HyDE** improves retrieval by generating a *hypothetical* answer to the query first, then using that answer's embedding for retrieval (instead of the query's embedding).\n\n**Why it works:**\n- A hypothetical answer is semantically closer to real documents than a short question\n- LLMs can "hallucinate" in the right direction — toward document space\n\n**Process:**\n1. Query: "How does attention work?"\n2. LLM generates: "Attention works by computing Q, K, V matrices..."\n3. Embed the generated answer\n4. Use that embedding for ANN search\n\n**Best for:** Queries that are short/ambiguous where direct embedding poorly represents intent\n\n**Caution:** Adds one LLM call latency; hallucinated content can mislead retrieval`,
    },
    {
      id: 'rag-8',
      difficulty: 'hard',
      question: 'Design a production-grade RAG pipeline for a 10M document enterprise knowledge base.',
      answer: `**Architecture:**\n\n**Ingestion:**\n- Document parsers (Unstructured.io, LlamaParse)\n- Chunking (semantic + recursive fallback)\n- Metadata enrichment (date, source, entity extraction)\n- Batch embedding (GPU acceleration)\n- Dual index: vector (Weaviate) + BM25 (Elasticsearch)\n\n**Retrieval:**\n- Hybrid search (RRF fusion)\n- Metadata pre-filtering\n- Re-ranking with cross-encoder (BGE-reranker)\n- Context compression (LLMLingua)\n\n**Generation:**\n- Structured prompt with citation slots\n- Faithfulness guard (check answer against context)\n- Streaming response\n\n**Observability:** Ragas metrics, latency histograms, retrieval hit rate dashboard`,
    },
  ],

  'agentic-ai': [
    {
      id: 'agent-1',
      difficulty: 'easy',
      question: 'What is an AI Agent and how does it differ from a regular LLM call?',
      answer: `**AI Agent** is an LLM-powered system that can take *actions* to achieve a goal, not just produce text.\n\n**Key differences:**\n| Aspect | LLM Call | AI Agent |\n|---|---|---|\n| Action | Generate text | Execute tools/actions |\n| Memory | Stateless (per call) | Persistent memory |\n| Planning | None | Goal decomposition |\n| Iterations | Single | Multi-step loops |\n\n**Core components:**\n- **LLM:** The "brain" — reasoning and planning\n- **Tools:** APIs, code execution, search, databases\n- **Memory:** Short-term (context) + Long-term (vector store)\n- **Orchestrator:** The loop: observe → think → act → observe\n\n**Examples:** AutoGPT, LangChain agents, Google Gemini agents`,
    },
    {
      id: 'agent-2',
      difficulty: 'medium',
      question: 'Explain the ReAct (Reasoning + Acting) pattern for agents.',
      answer: `**ReAct** interleaves **reasoning traces** and **actions** in a single LLM prompt, enabling agents to plan while executing.\n\n**Loop:**\n1. **Thought:** "I need to find the current population of India"\n2. **Action:** search("India population 2024")\n3. **Observation:** "1.44 billion"\n4. **Thought:** "Now I can answer the question"\n5. **Answer:** "India's population is approximately 1.44 billion"\n\n**Why it works:**\n- Reasoning steps improve action selection\n- Observations update reasoning dynamically\n- Natural error recovery through self-reflection\n\n**Limitations:** Long trajectories → context overflow; errors can compound\n\n**Variants:** ReAct + RAG, Reflexion (self-critique), Tree of Thought`,
    },
    {
      id: 'agent-3',
      difficulty: 'hard',
      question: 'What are multi-agent systems and when do you need them over single agents?',
      answer: `**Multi-agent system:** Multiple specialized agents collaborate to solve complex tasks.\n\n**When to use:**\n- Task requires parallel subtask execution\n- Domain specialization (researcher + writer + code agent)\n- Peer review / debate to improve quality\n- Scale beyond single context window\n\n**Patterns:**\n- **Supervisor:** Orchestrator agent routes to specialized sub-agents\n- **Peer-to-peer:** Agents communicate directly\n- **Pipeline:** Sequential handoffs (A → B → C)\n\n**Frameworks:** LangGraph, AutoGen, CrewAI\n\n**Challenges:**\n- Inter-agent communication overhead\n- Error propagation across agents\n- Non-deterministic behavior\n- Coordination and deadlock prevention\n\n**Design principle:** Each agent should have a single, well-defined responsibility`,
    },
    {
      id: 'agent-4',
      difficulty: 'medium',
      question: 'What is a tool/function call in agentic AI and how does it work?',
      answer: `**Tool calling** allows LLMs to request execution of external functions by outputting structured JSON.\n\n**How it works:**\n1. Define tools as JSON schemas (name, description, parameters)\n2. Pass tool definitions to LLM with the user query\n3. LLM outputs: \`{"tool": "search", "params": {"query": "..."}}\`\n4. Host code executes the tool\n5. Result is fed back to LLM as observation\n6. LLM continues reasoning\n\n**Best practices:**\n- Clear, unambiguous tool descriptions (LLM reads them!)\n- Strong type definitions\n- Handle tool errors gracefully — feed error back as observation\n- Limit tool surface area — fewer tools = better selection\n\n**Standards:** OpenAI function calling, Gemini tool use, Anthropic tool use`,
    },
    {
      id: 'agent-5',
      difficulty: 'hard',
      question: 'How do you handle memory in long-running AI agents?',
      answer: `**Memory types for agents:**\n\n1. **Sensory/Working memory:** Current context window — limited tokens\n\n2. **Episodic memory:** Past conversation/task history\n   - Store summaries in vector DB\n   - Retrieve relevant episodes at query time\n\n3. **Semantic memory:** Factual knowledge base\n   - RAG over documents\n   - Entity stores\n\n4. **Procedural memory:** Learned skills/patterns\n   - Successful tool call sequences\n   - Cached reasoning chains\n\n**Strategies:**\n- **Summarization:** Compress old history into rolling summary\n- **Vector memory:** Embed and retrieve relevant past actions\n- **Structured state:** Track key facts in a schema (JSON state)\n\n**Frameworks:** LangChain Memory modules, Mem0, Zep`,
    },
    {
      id: 'agent-6',
      difficulty: 'medium',
      question: 'What are agent design patterns (e.g., Reflection, Planning, Tool Use)?',
      answer: `**Core agent design patterns:**\n\n**1. Reflection:**\n- Agent critiques its own output\n- "Is this answer correct? What could be improved?"\n- Iterates until quality threshold met\n\n**2. Planning (task decomposition):**\n- Break complex goal into subtasks\n- **CoT Planner:** Step-by-step natural language plan\n- **Graph-based:** DAG of dependent tasks\n\n**3. Tool Use:**\n- Augment LLM with external capabilities\n- Calculator, search, code interpreter, APIs\n\n**4. Multi-agent collaboration:**\n- Specialized agents for subtasks\n- Supervisor coordinates\n\n**5. Human-in-the-loop:**\n- Agent pauses for human approval on high-risk actions\n- Critical for production safety`,
    },
    {
      id: 'agent-7',
      difficulty: 'hard',
      question: 'How do you evaluate and ensure safety in production AI agents?',
      answer: `**Evaluation:**\n- **Task completion rate:** % of tasks successfully completed\n- **Step efficiency:** Steps taken vs. optimal path\n- **Tool call accuracy:** Correct tool selection rate\n- **Human evaluation:** Quality of final output\n\n**Safety strategies:**\n\n1. **Action sandboxing:** Run code in isolated containers (E2B, Docker)\n2. **Human-in-the-loop gates:** Require approval for irreversible actions\n3. **Tool permission scoping:** Read-only vs. write access by default\n4. **Output filtering:** Block PII, harmful content before returning\n5. **Rate limiting:** Prevent runaway API/cost loops\n6. **Trajectory monitoring:** Alert on unexpected tool call patterns\n7. **Rollback mechanisms:** Undo agent actions where possible\n\n**Principle:** Minimum necessary permissions (principle of least privilege)`,
    },
  ],

  'mcp': [
    {
      id: 'mcp-1',
      difficulty: 'easy',
      question: 'What is the Model Context Protocol (MCP) and why was it created?',
      answer: `**MCP** (Model Context Protocol) is an open standard by Anthropic that defines how AI assistants connect to external data sources and tools — a *USB-C for AI integrations*.\n\n**Why it was created:**\n- Before MCP: Every AI app had custom, one-off integrations with every tool\n- N apps × M tools = N×M integrations to maintain\n- After MCP: N apps + M tools = N+M integrations (standardized protocol)\n\n**What MCP provides:**\n- Standardized interface for **Resources** (data access)\n- Standardized interface for **Tools** (action execution)\n- Standardized interface for **Prompts** (reusable templates)\n\n**Adopted by:** Claude, Cursor, Continue, Zed, and many more`,
    },
    {
      id: 'mcp-2',
      difficulty: 'medium',
      question: 'Explain the MCP client-server architecture.',
      answer: `**MCP Architecture:**\n\n**Host:** The application (Claude Desktop, Cursor IDE)\n**Client:** Lives inside the host — manages MCP connections\n**Server:** Exposes tools/resources over MCP protocol\n\n**Flow:**\n1. Host starts → Client connects to MCP Server(s)\n2. Client discovers available tools/resources via capabilities handshake\n3. LLM requests a tool call\n4. Client routes request to appropriate server\n5. Server executes and returns result\n6. Client returns result to LLM\n\n**Transport layers:**\n- **stdio:** Local process communication (local servers)\n- **SSE (HTTP+Server-Sent Events):** Remote servers\n- **WebSocket:** Bidirectional streaming\n\n**Key principle:** One host can connect to multiple MCP servers simultaneously`,
    },
    {
      id: 'mcp-3',
      difficulty: 'medium',
      question: 'What are MCP Resources, Tools, and Prompts?',
      answer: `**Three core MCP primitives:**\n\n**Resources (data access):**\n- Expose data to the LLM's context\n- Examples: file contents, DB query results, API responses\n- Identified by URIs: \`file:///path/to/file\`, \`db://table/row\`\n- Model can *read* but not directly execute\n\n**Tools (action execution):**\n- Functions the LLM can call to take actions\n- Examples: write file, run query, send email\n- Defined with JSON Schema for parameters\n- Actual execution happens server-side\n\n**Prompts (reusable templates):**\n- Pre-defined prompt templates with parameters\n- Surfaced to users as slash commands or workflows\n- Example: /summarize-pr, /explain-code\n\n**Key insight:** Resources = read, Tools = write/act, Prompts = templates`,
    },
    {
      id: 'mcp-4',
      difficulty: 'hard',
      question: 'How do you build a custom MCP server? What are the key steps?',
      answer: `**Building an MCP server (Python with mcp SDK):**\n\n\`\`\`python\nfrom mcp.server import Server\nfrom mcp.server.stdio import stdio_server\nfrom mcp import types\n\napp = Server("my-server")\n\n@app.list_tools()\nasync def list_tools():\n    return [types.Tool(\n        name="search_db",\n        description="Search the product database",\n        inputSchema={"type":"object","properties":{"query":{"type":"string"}}}\n    )]\n\n@app.call_tool()\nasync def call_tool(name, arguments):\n    if name == "search_db":\n        results = db.search(arguments["query"])\n        return [types.TextContent(type="text", text=str(results))]\n\nasync def main():\n    async with stdio_server() as streams:\n        await app.run(*streams)\n\`\`\`\n\n**Key steps:**\n1. Define tools with schemas\n2. Implement handlers\n3. Choose transport (stdio for local, SSE for remote)\n4. Register in client config (claude_desktop_config.json)`,
    },
    {
      id: 'mcp-5',
      difficulty: 'hard',
      question: 'What are the security considerations when deploying MCP servers?',
      answer: `**MCP Security Best Practices:**\n\n**Authentication & Authorization:**\n- MCP 2025-03-26 spec adds OAuth 2.0 support for remote servers\n- Scope tool permissions to minimum required access\n- Validate caller identity before executing sensitive tools\n\n**Input Validation:**\n- Sanitize all tool input parameters (SQL injection, path traversal)\n- Validate against JSON Schema strictly\n- Rate limit tool call frequency\n\n**Prompt Injection risks:**\n- Malicious content in resources could hijack tool use\n- "Ignore previous instructions" in a fetched document\n- Mitigation: separate system context from user/resource content\n\n**Data exposure:**\n- Resources should only expose necessary data\n- Avoid returning secrets/credentials in tool responses\n- Log all tool executions for audit trail\n\n**Network security (remote servers):**\n- HTTPS/TLS for SSE transport\n- API key rotation and expiry`,
    },
  ],

  'llmops': [
    {
      id: 'llmops-1',
      difficulty: 'easy',
      question: 'What is LLMOps and how does it differ from traditional MLOps?',
      answer: `**LLMOps** = Operations practices for building, deploying, and maintaining LLM-powered applications in production.\n\n**Key differences from MLOps:**\n\n| Aspect | MLOps | LLMOps |\n|---|---|---|\n| Model training | Custom, frequent retraining | Rarely retrain; use pre-trained |\n| Evaluation | Metrics (accuracy, F1) | Human eval, LLM-as-judge |\n| Serving | Fixed latency SLAs | Variable latency (streaming) |\n| Data | Training datasets | Prompts, context, retrieved docs |\n| Cost driver | Training compute | Inference tokens |\n| Versioning | Model versions | Prompt versions + model versions |\n\n**LLMOps additional concerns:** Prompt management, guardrails, hallucination monitoring, cost per query tracking`,
    },
    {
      id: 'llmops-2',
      difficulty: 'medium',
      question: 'How do you monitor LLM applications in production?',
      answer: `**Production LLM Monitoring dimensions:**\n\n**Performance metrics:**\n- Latency (TTFT — time to first token, total latency)\n- Token throughput (tokens/sec)\n- Cache hit rate\n- Error rate / timeout rate\n\n**Quality metrics (automated):**\n- Faithfulness / hallucination rate\n- Response relevancy scores\n- Toxicity / safety scores\n\n**Business metrics:**\n- User thumbs up/down rate\n- Task completion rate\n- Session length, return rate\n\n**Cost metrics:**\n- Cost per query (input + output tokens)\n- Monthly spend by use case\n\n**Tools:** LangSmith, Phoenix (Arize), Weights & Biases, Grafana + custom exporters\n\n**Alerting:** Spike in hallucination rate, latency degradation, cost anomalies`,
    },
    {
      id: 'llmops-3',
      difficulty: 'hard',
      question: 'How do you implement prompt versioning and A/B testing for LLM applications?',
      answer: `**Prompt Versioning:**\n- Store prompts in version control (Git) or prompt management systems\n- Each prompt has: version, template, model, parameters, metadata\n- Test before promote: dev → staging → production\n\n**Prompt Management Tools:** LangSmith Hub, Promptfoo, HumanLayer, custom DB\n\n**A/B Testing LLM apps:**\n1. Define hypothesis: "Prompt v2 reduces hallucinations by 15%"\n2. Define evaluation metric (automated + human)\n3. Split traffic: 50% prompt v1, 50% prompt v2\n4. Collect outputs, run evals on both\n5. Statistical significance test\n6. Promote winner\n\n**Challenges:**\n- LLM outputs are non-deterministic (need sufficient sample size)\n- Evaluation is expensive (LLM-as-judge costs tokens)\n- User experience consistency during test\n\n**Shadow testing:** Run new prompt in parallel, compare offline before switching`,
    },
    {
      id: 'llmops-4',
      difficulty: 'medium',
      question: 'What strategies do you use to optimize LLM inference costs?',
      answer: `**Token reduction strategies:**\n- **Prompt compression:** LLMLingua, selective context pruning\n- **Caching:** Semantic cache (GPTCache) for repeated/similar queries\n- **Prompt prefix caching:** Cache shared system prompt KV states\n\n**Model selection strategies:**\n- Route simple queries to smaller/cheaper models (GPT-3.5, Gemini Flash)\n- Reserve large models for complex tasks\n- Use local models (Llama 3, Mistral) for high-volume, less critical tasks\n\n**Batching:**\n- Batch inference for offline jobs\n- Async queuing for non-real-time requests\n\n**Quantization:**\n- INT8/INT4 for open-source model serving\n- 4-bit quantization (GGUF) for local deployment\n\n**Rule of thumb:** 80% of queries can use cheaper models; route intelligently`,
    },
    {
      id: 'llmops-5',
      difficulty: 'hard',
      question: 'Design a CI/CD pipeline for an LLM application.',
      answer: `**LLM CI/CD Pipeline:**\n\n**Development:**\n- Dev writes/modifies prompt + code\n- Unit tests: Input/output format validation\n- Integration tests: LLM call mocked or real\n\n**CI (on PR):**\n1. Lint + type check\n2. Unit + integration tests\n3. **Eval suite:** Run 50+ golden examples through the pipeline\n4. Compare eval scores to baseline (fail if regression > threshold)\n5. Cost estimate: token count analysis\n\n**CD (on merge to main):**\n1. Deploy to staging\n2. Shadow test: Run real traffic through new + old version\n3. Automated eval on shadow traffic\n4. Human review dashboard\n5. Canary rollout: 5% → 25% → 100% traffic\n6. Rollback trigger: Eval score drops, error rate spikes\n\n**Tools:** GitHub Actions, LangSmith, Promptfoo, Arize Phoenix`,
    },
  ],

  'gcp': [
    {
      id: 'gcp-1',
      difficulty: 'easy',
      question: 'What is Vertex AI and what are its key capabilities for GenAI?',
      answer: `**Vertex AI** is Google Cloud's unified ML and GenAI platform.\n\n**Key GenAI capabilities:**\n\n**Model Garden:**\n- Access to Google models (Gemini 1.5 Pro/Flash, Imagen)\n- Open-source models (Llama, Mistral, Falcon)\n- Third-party models\n\n**Vertex AI Studio:**\n- Prompt design and testing UI\n- Fine-tuning and evaluation UI\n- No-code GenAI prototyping\n\n**Generative AI on Vertex:**\n- Grounding with Google Search\n- RAG Engine (Vertex AI Search)\n- Agent Builder (DFCX + Vertex)\n- Evaluation Service\n\n**MLOps:**\n- Model Registry, Pipelines, Monitoring\n- Feature Store, Experiments tracking\n\n**Interview tip:** Vertex AI = "one-stop-shop" for ML + GenAI on Google Cloud`,
    },
    {
      id: 'gcp-2',
      difficulty: 'medium',
      question: 'What is Gemini API and how does it compare to GPT-4?',
      answer: `**Gemini** is Google DeepMind's multimodal model family available via Vertex AI and Google AI Studio.\n\n**Model tiers:**\n- **Gemini 1.5 Flash:** Fast, cost-efficient, 1M token context\n- **Gemini 1.5 Pro:** Advanced reasoning, 1M token context, multimodal\n- **Gemini Ultra:** Highest capability (enterprise)\n\n**vs. GPT-4:**\n| Feature | Gemini 1.5 Pro | GPT-4 |\n|---|---|---|\n| Context window | 1M tokens | 128K tokens |\n| Multimodal | Text, image, video, audio | Text, image |\n| Native tool use | ✅ | ✅ |\n| Code execution | ✅ (Vertex) | ✅ (Code Interpreter) |\n| GCP integration | Native | Via Azure OpenAI |\n\n**Key Gemini advantages:** Massive context window, native video understanding, grounding with Google Search`,
    },
    {
      id: 'gcp-3',
      difficulty: 'medium',
      question: 'How do you implement RAG on Google Cloud using Vertex AI?',
      answer: `**Vertex AI RAG Engine (managed):**\n- Fully managed RAG pipeline\n- Import docs from GCS, Drive, Slack\n- Auto-chunking + embedding\n- Built-in vector search\n- Query with grounding in Gemini calls\n\n**DIY RAG on GCP:**\n1. **Ingestion:** Dataflow pipeline → parse docs → embed via Vertex text-embedding-004\n2. **Storage:** Vertex AI Vector Search (ScaNN ANN engine)\n3. **Retrieval:** Vector Search query → top-k chunks\n4. **Generation:** Gemini API with retrieved context + grounding\n\n**Vertex AI Search:**\n- Enterprise search over structured + unstructured data\n- Built-in hybrid search, ranking\n- Answer generation with citations\n\n**Cost optimization:** Use Vertex AI batch embeddings for large ingestion jobs`,
    },
    {
      id: 'gcp-4',
      difficulty: 'hard',
      question: 'What is Vertex AI Agent Builder and how do you build agents on GCP?',
      answer: `**Vertex AI Agent Builder** = Low-code/pro-code platform for building conversational and task agents.\n\n**Components:**\n\n**Dialogflow CX (DFCX):**\n- Flow-based conversational agents\n- State machine: pages, routes, intents\n- Integrates with Gemini for LLM-powered responses\n\n**Generative Playbooks:**\n- Natural language agent behavior specification\n- "When user asks about billing, check their account then answer"\n- No explicit state machines needed\n\n**Data Stores:**\n- Connect to GCS, BigQuery, websites, Drive\n- Auto-indexed for RAG\n\n**Tools:**\n- OpenAPI-defined function tools\n- Code execution tool\n- Custom webhook tools\n\n**Building with Vertex AI SDK (Python):**\n\`\`\`python\nfrom vertexai.preview import reasoning_engines\napp = reasoning_engines.LangchainAgent(model="gemini-1.5-pro", tools=[...])\n\`\`\``,
    },
    {
      id: 'gcp-5',
      difficulty: 'medium',
      question: 'How does Grounding with Google Search work in Vertex AI?',
      answer: `**Grounding** connects Gemini to real-time Google Search or custom data stores, reducing hallucinations and enabling up-to-date responses.\n\n**How it works:**\n1. User sends query to Gemini via Vertex AI\n2. Grounding module sends a search query to Google Search\n3. Retrieved snippets are added to Gemini's context\n4. Gemini generates a response grounded in search results\n5. Response includes citations/sources\n\n**Types:**\n- **Google Search grounding:** Real-time web search (requires DV360 access)\n- **Vertex AI Search grounding:** Your custom enterprise data\n- **Inline grounding:** Manually pass retrieved context\n\n**Code example:**\n\`\`\`python\ntool = Tool.from_google_search_retrieval(\n    google_search_retrieval=grounding.GoogleSearchRetrieval()\n)\nmodel.generate_content(prompt, tools=[tool])\n\`\`\`\n\n**Use case:** News summaries, financial data, product lookups requiring fresh data`,
    },
  ],

  'system-design': [
    {
      id: 'sd-1',
      difficulty: 'medium',
      question: 'Design a scalable LLM API serving system handling 100K requests/day.',
      answer: `**Architecture:**\n\n**Gateway Layer:**\n- API Gateway (Kong/AWS API GW) — auth, rate limiting, routing\n- Load balancer distributes across serving nodes\n\n**Serving Layer:**\n- LLM inference servers: vLLM (continuous batching, PagedAttention)\n- Auto-scaling: scale on GPU utilization or queue depth\n- Multiple model instances per GPU (smaller models)\n\n**Caching Layer:**\n- **Semantic cache:** GPTCache — cache similar queries (cosine sim > 0.95)\n- **KV cache:** Prefix caching for shared system prompts\n- Redis for auth tokens, rate limit counters\n\n**Observability:**\n- Latency P50/P95/P99, TTFT, token throughput\n- Cost per request tracking\n- Distributed tracing (Jaeger)\n\n**100K/day ≈ ~1.2 req/sec average** — modest, but design for 10x burst`,
    },
    {
      id: 'sd-2',
      difficulty: 'hard',
      question: 'How do you design a rate limiting system for an AI API?',
      answer: `**Multi-tier rate limiting:**\n\n**Algorithms:**\n- **Token Bucket:** Allows burst, refills at steady rate — best for API rate limits\n- **Sliding Window:** Smooth request counting over time window\n- **Fixed Window:** Simple but allows burst at window boundaries\n\n**Implementation (distributed):**\n- Redis INCR + EXPIRE for counters\n- Lua scripts for atomic check-and-increment\n- Redis Cluster for high availability\n\n**Tiers for AI APIs:**\n1. **Request/min:** Prevent burst abuse (e.g., 60 req/min)\n2. **Token/min:** Count input+output tokens (e.g., 100K tokens/min)\n3. **Concurrent requests:** Limit parallel streams\n4. **Daily/monthly spend cap:** Cost guard\n\n**Response:** 429 Too Many Requests + Retry-After header\n\n**Edge cases:** Streaming requests (count tokens as they come), retries with exponential backoff`,
    },
    {
      id: 'sd-3',
      difficulty: 'medium',
      question: 'What caching strategies are most effective for AI/LLM applications?',
      answer: `**Caching layers for AI apps:**\n\n**1. Semantic Cache (most impactful for LLMs):**\n- Embed incoming query\n- Check vector store for similar past queries (cosine sim > threshold)\n- Return cached response if match found\n- Tools: GPTCache, Redis + pgvector\n\n**2. Exact match cache:**\n- Hash prompt → lookup in Redis/Memcached\n- Works for templated queries with same inputs\n\n**3. KV Cache (model-level):**\n- Cache key-value matrices for shared prompt prefixes\n- vLLM supports prefix caching\n- Huge savings for shared system prompts\n\n**4. Embedding Cache:**\n- Cache document embeddings — reuse across queries\n- Avoids repeated embedding API calls during RAG\n\n**5. CDN-level:**\n- Cache static responses (FAQ answers, product descriptions)\n- Cache invalidation on content update\n\n**Eviction:** LRU with TTL based on content freshness requirements`,
    },
    {
      id: 'sd-4',
      difficulty: 'hard',
      question: 'Design a real-time streaming response system for a chatbot application.',
      answer: `**Requirements:** Low latency first token (TTFT < 500ms), smooth streaming, handle disconnects\n\n**Architecture:**\n\n**Client → API Gateway → Stream Router → LLM Service**\n\n**Streaming protocols:**\n- **SSE (Server-Sent Events):** Simple, HTTP, one-directional — ideal for chat\n- **WebSocket:** Bidirectional — better for multi-turn with real-time input\n\n**Backend (vLLM):**\n- Continuous batching — new requests join batch without waiting\n- PagedAttention — efficient KV cache memory management\n- Streaming: yield tokens as generated\n\n**API design:**\n\`\`\`\nPOST /chat/stream\nContent-Type: text/event-stream\n\ndata: {"token": "Hello"}\ndata: {"token": " world"}\ndata: [DONE]\n\`\`\`\n\n**Handle disconnects:**\n- Client reconnects with Last-Event-ID\n- Server resumes from checkpoint or restarts generation\n\n**Backpressure:** Queue tokens if client reads slower than generation`,
    },
    {
      id: 'sd-5',
      difficulty: 'medium',
      question: 'Explain CAP theorem and how it applies to AI application databases.',
      answer: `**CAP Theorem:** A distributed system can guarantee at most 2 of 3:\n- **C**onsistency: All nodes see the same data simultaneously\n- **A**vailability: Every request gets a (non-error) response\n- **P**artition tolerance: System works despite network splits\n\n*Since network partitions always happen in practice, choose CA or CP.*\n\n**AI application database choices:**\n\n**CP (Consistency + Partition):**\n- MongoDB, HBase, ZooKeeper\n- Use for: User auth, billing, model registry\n\n**AP (Availability + Partition):**\n- DynamoDB, Cassandra, CouchDB\n- Use for: Chat history, usage logs, session state\n\n**Special case — Vector DBs:**\n- Pinecone, Weaviate: Eventual consistency (AP-leaning)\n- ANN search: Already approximate — some inconsistency acceptable\n\n**Interview tip:** Always justify your choice based on the specific use case's tolerance for stale reads vs. downtime`,
    },
  ],

  'ml-dl': [
    {
      id: 'ml-1',
      difficulty: 'easy',
      question: 'What is the bias-variance tradeoff and how does it relate to model selection?',
      answer: `**Bias:** Error from wrong assumptions in the model (underfitting)\n**Variance:** Error from sensitivity to small fluctuations in training data (overfitting)\n\n**The tradeoff:**\n- High bias → model too simple → misses patterns (underfitting)\n- High variance → model too complex → memorizes noise (overfitting)\n- Goal: find the sweet spot that minimizes total error = Bias² + Variance + Irreducible Error\n\n**Model selection implications:**\n- Linear regression: High bias, low variance\n- Deep neural networks: Low bias, high variance → need regularization\n- Ensemble methods (Random Forest): Reduce variance via bagging\n- Boosting (XGBoost): Reduce bias iteratively\n\n**Regularization techniques:** L1 (Lasso — sparsity), L2 (Ridge — weight decay), Dropout (neural nets), Early stopping`,
    },
    {
      id: 'ml-2',
      difficulty: 'medium',
      question: 'Explain backpropagation and the vanishing gradient problem.',
      answer: `**Backpropagation:** Algorithm to compute gradients via the chain rule, enabling weight updates in neural networks.\n\n**Forward pass:** Input → activations → loss\n**Backward pass:** Compute ∂Loss/∂W for every layer by chaining partial derivatives from output to input\n\n**Vanishing gradient problem:**\n- In deep networks, gradients are multiplied layer-by-layer during backprop\n- Sigmoid/tanh derivatives are < 1 → gradients shrink exponentially toward input layers\n- Early layers learn very slowly or not at all\n\n**Solutions:**\n- **ReLU activation:** Gradient = 1 for positive inputs (no saturation)\n- **Batch Normalization:** Normalize activations, prevents extreme values\n- **Skip connections (ResNets):** Gradient highway through the network\n- **LSTM/GRU gates:** Selective gradient flow in RNNs\n- **Gradient clipping:** Cap gradient magnitude during training`,
    },
    {
      id: 'ml-3',
      difficulty: 'medium',
      question: 'What is the difference between supervised, unsupervised, and self-supervised learning?',
      answer: `**Supervised Learning:**\n- Learns from labeled data (input → label pairs)\n- Examples: classification, regression\n- Algorithms: logistic regression, SVM, neural networks\n- Limitation: requires expensive human labels\n\n**Unsupervised Learning:**\n- Finds patterns in unlabeled data\n- Examples: clustering (K-means, DBSCAN), dimensionality reduction (PCA, t-SNE), anomaly detection\n- No ground truth labels needed\n\n**Self-Supervised Learning (SSL):**\n- Creates supervision signal from the data itself\n- Predict masked tokens (BERT), predict next token (GPT)\n- Contrastive learning: image augmentations should have similar embeddings (SimCLR, CLIP)\n- **Key for LLMs:** Pre-train on massive unlabeled text via next-token prediction\n- Foundation for transfer learning to downstream tasks`,
    },
    {
      id: 'ml-4',
      difficulty: 'hard',
      question: 'Explain the attention mechanism in Transformers mathematically.',
      answer: `**Scaled Dot-Product Attention:**\n\n\`\`\`\nAttention(Q, K, V) = softmax(QKᵀ / √dₖ) · V\n\`\`\`\n\n**Dimensions:**\n- Q (Queries): [seq_len, d_model]\n- K (Keys): [seq_len, d_model]\n- V (Values): [seq_len, d_model]\n\n**Steps:**\n1. Compute similarity scores: QKᵀ → [seq_len, seq_len] matrix\n2. Scale by √dₖ to prevent vanishing gradients\n3. Apply softmax → attention weights (sum to 1 per row)\n4. Weighted sum of values: weights · V\n\n**Why √dₖ scaling?** Dot products grow large with high dimensionality → softmax becomes very peaked → gradients vanish\n\n**Multi-Head Attention:**\n- Run h attention heads in parallel with different Q,K,V projections\n- Each head captures different relationship types\n- Concatenate and project: MultiHead(Q,K,V) = Concat(head₁,...,headₕ)Wᴼ`,
    },
    {
      id: 'ml-5',
      difficulty: 'medium',
      question: 'How do you handle class imbalance in machine learning?',
      answer: `**Problem:** Model biased toward majority class (e.g., 99% normal, 1% fraud)\n\n**Data-level techniques:**\n- **Oversampling minority:** SMOTE (Synthetic Minority Over-sampling)\n- **Undersampling majority:** Random undersampling, Tomek links\n- **Combined:** SMOTEENN\n\n**Algorithm-level techniques:**\n- **Class weights:** Set class_weight='balanced' — penalizes majority class errors more\n- **Threshold tuning:** Move decision threshold from 0.5 to optimize for recall/precision tradeoff\n- **Ensemble:** BalancedBaggingClassifier, EasyEnsemble\n\n**Evaluation metrics (critical — don't use accuracy!):**\n- Precision, Recall, F1-score\n- ROC-AUC (overall ranking ability)\n- PR-AUC (better for severe imbalance)\n- Matthews Correlation Coefficient (MCC)\n\n**Interview tip:** Always ask about the cost of false positives vs. false negatives — it drives the strategy`,
    },
  ],

  'data-engineering': [
    {
      id: 'de-1',
      difficulty: 'easy',
      question: 'What is the difference between ETL and ELT, and when would you use each?',
      answer: `**ETL (Extract, Transform, Load):**\n- Transform data *before* loading into the warehouse\n- Transformation happens in a separate ETL server\n- Data warehouse receives clean, ready data\n\n**ELT (Extract, Load, Transform):**\n- Load raw data *first*, transform inside the warehouse\n- Leverages modern data warehouse compute (BigQuery, Snowflake, Redshift)\n- Raw data is always preserved\n\n**When ETL:**\n- Legacy on-prem data warehouses with limited compute\n- Sensitive data that must be masked before loading\n- Strict data quality requirements before storage\n\n**When ELT:**\n- Cloud data warehouses (BigQuery, Snowflake) — cheap, scalable compute\n- Need to preserve raw data for reprocessing\n- Exploratory analytics — schema evolves frequently\n- Faster ingestion at scale\n\n**Modern stack:** ELT via dbt (transform in warehouse) + Fivetran/Airbyte (ingest)`,
    },
    {
      id: 'de-2',
      difficulty: 'medium',
      question: 'What are the main differences between batch processing and stream processing?',
      answer: `**Batch Processing:**\n- Processes bounded datasets at scheduled intervals\n- High latency (minutes to hours)\n- High throughput — optimized for large volumes\n- Tools: Apache Spark, Hadoop MapReduce, BigQuery batch jobs\n- Use cases: Daily reports, ML training, historical analytics\n\n**Stream Processing:**\n- Processes unbounded, continuous data in real or near-real time\n- Low latency (milliseconds to seconds)\n- Handles one event or micro-batches at a time\n- Tools: Apache Kafka + Flink/Spark Streaming, AWS Kinesis, Pub/Sub\n- Use cases: Fraud detection, real-time dashboards, alerting, LLM monitoring\n\n**Lambda Architecture:** Both batch (accuracy layer) + streaming (speed layer)\n**Kappa Architecture:** Stream processing only — simpler, single codebase\n\n**For AI:** Real-time feature pipelines → low-latency model serving`,
    },
    {
      id: 'de-3',
      difficulty: 'medium',
      question: 'What is a data lakehouse and how does it combine the best of data lakes and warehouses?',
      answer: `**Data Lake:** Cheap object storage (S3, GCS) + any data format, but no ACID, poor query performance\n\n**Data Warehouse:** Fast queries, ACID, structured, but expensive, rigid schema\n\n**Data Lakehouse:** Combines both:\n- **Storage:** Open formats on object storage (Parquet, ORC)\n- **Table format layer:** Delta Lake, Apache Iceberg, Apache Hudi\n  - ACID transactions\n  - Schema evolution\n  - Time travel (version history)\n  - Z-ordering for query pruning\n- **Query engine:** Spark, Trino, DuckDB, BigQuery on external tables\n\n**Key benefits:**\n- Single copy of data (no ETL to separate warehouse)\n- Unified serving for BI + ML workloads\n- Open standards — no vendor lock-in\n\n**For AI/ML:** Store training data in lakehouse → query with Spark → train model on the same platform`,
    },
    {
      id: 'de-4',
      difficulty: 'hard',
      question: 'Design a data pipeline for ingesting and processing LLM interaction logs at scale.',
      answer: `**Requirements:** Ingest millions of LLM prompts/responses per day, enable analytics + model evaluation\n\n**Architecture:**\n\n**Ingestion:**\n- Application → Kafka topics (prompt_logs, response_logs)\n- Schema: {user_id, session_id, timestamp, model, prompt_tokens, response_tokens, latency_ms, response_text}\n- Kafka partitioning by session_id\n\n**Stream Processing (Flink/Spark Streaming):**\n- Real-time aggregations: req/min, avg latency, error rate per model\n- PII detection + masking (regex + Presidio)\n- Route to: DLT (raw), Elasticsearch (search), monitoring dashboard\n\n**Batch Processing (dbt + BigQuery):**\n- Daily: cost per user, model comparison reports\n- Weekly: quality scoring (run evals on sample)\n\n**Storage:**\n- Raw logs: Delta Lake on GCS (compressed Parquet, partitioned by date/model)\n- Aggregates: BigQuery for analytics\n- Hot data: Redis for real-time dashboards\n\n**Governance:** Column-level lineage, PII tagging, retention policies`,
    },
  ],

  'architecture': [
    {
      id: 'arch-1',
      difficulty: 'medium',
      question: 'How do you design a secure, enterprise-grade GenAI application?',
      answer: `**Security layers for enterprise GenAI:**\n\n**Identity & Access:**\n- OAuth 2.0 / OIDC for authentication\n- RBAC: Different user roles → different model access\n- API key management with rotation\n\n**Data Security:**\n- PII detection before sending to LLM (Presidio, GLiNER)\n- Data residency compliance (region-locked endpoints)\n- Encryption in transit (TLS 1.3) and at rest\n- Audit logging of all LLM interactions\n\n**LLM-specific risks:**\n- **Prompt injection:** Sanitize user input, separate system/user context\n- **Data exfiltration:** Output filtering, DLP on responses\n- **Jailbreaking:** Guardrails (NeMo Guardrails, Llama Guard)\n\n**Infrastructure:**\n- VPC private endpoints (no public LLM API calls)\n- WAF in front of AI gateway\n- Secrets management (Vault, GCP Secret Manager)\n\n**Compliance:** SOC 2, GDPR, HIPAA — model your threat model against regulatory requirements`,
    },
    {
      id: 'arch-2',
      difficulty: 'hard',
      question: 'Explain microservices patterns for AI/ML systems.',
      answer: `**Key microservice patterns for AI systems:**\n\n**1. Model-as-a-Service:**\n- Each model exposed as an independent REST/gRPC service\n- Independent versioning and scaling\n- Sidecar for auth, logging, rate limiting\n\n**2. Strangler Fig pattern:**\n- Gradually migrate monolithic ML pipeline to microservices\n- Route % of traffic to new AI service, increase incrementally\n\n**3. Saga pattern (for multi-step AI workflows):**\n- Coordinate: ingest → embed → index → notify\n- Each step has compensating transaction on failure\n- Choreography (events) or Orchestration (coordinator)\n\n**4. CQRS for AI feature stores:**\n- Command: write new feature values (async)\n- Query: read latest features for inference (sync, low latency)\n\n**5. Circuit breaker:**\n- Wrap LLM API calls with circuit breaker\n- If error rate > threshold: open circuit, return fallback\n- Tools: Resilience4j, Polly\n\n**Communication:** gRPC for inter-service (typed, fast), Kafka for async events`,
    },
  ],
};

export const ALL_DIFFICULTIES = ['easy', 'medium', 'hard'];

export const DIFFICULTY_COLORS = {
  easy: { bg: '#dcfce7', text: '#166534', border: '#86efac' },
  medium: { bg: '#fef9c3', text: '#854d0e', border: '#fde047' },
  hard: { bg: '#fee2e2', text: '#991b1b', border: '#fca5a5' },
};

export function getQuestionsForTopic(topicId, difficulty = null) {
  const questions = QUESTIONS[topicId] || [];
  if (difficulty) return questions.filter(q => q.difficulty === difficulty);
  return questions;
}

export function getTotalQuestionCount() {
  return Object.values(QUESTIONS).reduce((sum, qs) => sum + qs.length, 0);
}
