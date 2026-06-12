import React from 'react';
import Layout from '@theme/Layout';
import HomepageLanding from '../components/HomepageLanding';

export default function Home() {
  return (
    <Layout
      title="AI Interview Academy"
      description="Modern AI interview preparation for GenAI, RAG, Agentic AI, MCP, LLMOps, Cloud AI, and Enterprise Architecture."
    >
      <HomepageLanding />
    </Layout>
  );
}
