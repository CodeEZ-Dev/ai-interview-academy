/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a set of docs in the sidebar
 - provide next/previous navigation
 
 The sidebars can be generated from the filesystem, or explicitly defined here.
 
 Create as many sidebars as you want.
 */

module.exports = {
  docsSidebar: [
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'intro',
      ],
    },
    {
      type: 'category',
      label: 'Generative AI',
      collapsed: true,
      items: [
        'genai/what-is-genai',
        'genai/llm-fundamentals',
        'genai/prompt-engineering',
        'genai/fine-tuning',
        'genai/evaluation-metrics',
      ],
    },
    {
      type: 'category',
      label: 'RAG (Retrieval Augmented Generation)',
      collapsed: true,
      items: [
        'rag/what-is-rag',
        'rag/types-of-rag',
        'rag/rag-architecture',
        'rag/vector-databases',
        'rag/retrieval-strategies',
        'rag/chunking-strategies',
        'rag/enterprise-rag',
      ],
    },
    {
      type: 'category',
      label: 'Agentic AI',
      collapsed: true,
      items: [
        'agentic-ai/what-is-agentic-ai',
        'agentic-ai/agent-architecture',
        'agentic-ai/agent-types',
        'agentic-ai/multi-agent-systems',
        'agentic-ai/tools-and-functions',
        'agentic-ai/planning-strategies',
      ],
    },
    {
      type: 'category',
      label: 'MCP (Model Context Protocol)',
      collapsed: true,
      items: [
        'mcp/mcp-fundamentals',
        'mcp/mcp-architecture',
        'mcp/client-server-model',
        'mcp/resources-and-prompts',
        'mcp/tool-use',
        'mcp/best-practices',
      ],
    },
    {
      type: 'category',
      label: 'LLMOps',
      collapsed: true,
      items: [
        'llmops/llmops-lifecycle',
        'llmops/model-selection',
        'llmops/data-pipeline',
        'llmops/monitoring-logging',
        'llmops/cost-optimization',
        'llmops/ci-cd-llms',
        'llmops/prompt-management',
      ],
    },
    {
      type: 'category',
      label: 'GCP Generative AI',
      collapsed: true,
      items: [
        'gcp/vertex-ai-overview',
        'gcp/palm-api',
        'gcp/gemini-api',
        'gcp/text-generation',
        'gcp/embeddings',
        'gcp/rag-on-vertex',
        'gcp/agents-on-vertex',
      ],
    },
    {
      type: 'category',
      label: 'Enterprise Architecture',
      collapsed: true,
      items: [
        'architecture/microservices-genai',
        'architecture/scalability-patterns',
        'architecture/security-privacy',
        'architecture/governance',
        'architecture/observability',
        'architecture/disaster-recovery',
      ],
    },
    {
      type: 'category',
      label: 'System Design',
      collapsed: true,
      items: [
        'system-design/design-principles',
        'system-design/distributed-systems',
        'system-design/caching-strategies',
        'system-design/rate-limiting',
        'system-design/load-balancing',
        'system-design/database-design',
      ],
    },
    {
      type: 'category',
      label: 'Machine Learning & Deep Learning',
      collapsed: true,
      items: [
        'ml-dl/ml-fundamentals',
        'ml-dl/supervised-learning',
        'ml-dl/unsupervised-learning',
        'ml-dl/neural-networks',
        'ml-dl/transformers',
        'ml-dl/computer-vision',
        'ml-dl/nlp-basics',
      ],
    },
    {
      type: 'category',
      label: 'Data Engineering',
      collapsed: true,
      items: [
        'data-engineering/data-pipeline',
        'data-engineering/etl-elt',
        'data-engineering/data-warehousing',
        'data-engineering/big-data-tools',
        'data-engineering/stream-processing',
        'data-engineering/data-quality',
      ],
    },
    {
      type: 'category',
      label: 'Daily Challenges',
      collapsed: true,
      items: [
        'daily-challenges/week-1',
        'daily-challenges/week-2',
        'daily-challenges/week-3',
      ],
    },
  ],
};
