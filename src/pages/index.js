import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './index.module.css';

export default function Home() {
  return (
    <Layout
      title={`AI Interview Academy`}
      description="Master Generative AI, RAG, Agentic AI, MCP, LLMOps, Cloud AI, and Enterprise Architecture"
    >
      <main>
        {/* Hero Section */}
        <div className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              🚀 AI Interview Academy
            </h1>
            <p className={styles.heroSubtitle}>
              Master Generative AI, RAG, Agentic AI, MCP, LLMOps, Cloud AI, and Enterprise Architecture Interviews
            </p>
            <div className={styles.buttons}>
              <Link
                className={styles.buttonPrimary}
                to="/docs/intro"
              >
                Start Learning →
              </Link>
              <Link
                className={styles.buttonSecondary}
                to="/interview-quiz"
              >
                🎯 Practice Quiz
              </Link>
              <Link
                className={styles.buttonGhost}
                to="https://github.com/CodeEZ-Dev/ai-interview-academy.git"
              >
                GitHub ↗
              </Link>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <section className={styles.features}>
          <div className={styles.container}>
            <h2>📚 What You'll Learn</h2>
            <div className={styles.grid}>
              <Link to="/docs/genai" className={styles.card}>
                <h3>🤖 Generative AI</h3>
                <p>LLMs, embeddings, and practical applications</p>
              </Link>
              <Link to="/docs/rag" className={styles.card}>
                <h3>📖 RAG</h3>
                <p>Retrieval Augmented Generation patterns</p>
              </Link>
              <Link to="/docs/agentic-ai" className={styles.card}>
                <h3>🧠 Agentic AI</h3>
                <p>Building autonomous AI agents</p>
              </Link>
              <Link to="/docs/mcp" className={styles.card}>
                <h3>🔌 MCP</h3>
                <p>Model Context Protocol</p>
              </Link>
              <Link to="/docs/llmops" className={styles.card}>
                <h3>⚙️ LLMOps</h3>
                <p>Operations and lifecycle management</p>
              </Link>
              <Link to="/docs/gcp" className={styles.card}>
                <h3>☁️ GCP GenAI</h3>
                <p>Google Cloud AI services</p>
              </Link>
              <Link to="/docs/architecture" className={styles.card}>
                <h3>🏗️ Architecture</h3>
                <p>Enterprise patterns</p>
              </Link>
              <Link to="/docs/system-design" className={styles.card}>
                <h3>🎯 System Design</h3>
                <p>Scalable distributed systems</p>
              </Link>
              <Link to="/docs/ml-dl" className={styles.card}>
                <h3>📊 ML/DL</h3>
                <p>Machine learning fundamentals</p>
              </Link>
              <Link to="/docs/data-engineering" className={styles.card}>
                <h3>📦 Data Engineering</h3>
                <p>Pipelines and warehouses</p>
              </Link>
            </div>
          </div>
        </section>

        {/* Quiz CTA Section */}
        <section className={styles.quizCta}>
          <div className={styles.container}>
            <div className={styles.quizCtaInner}>
              <div className={styles.quizCtaText}>
                <div className={styles.quizCtaBadge}>🎯 Interactive Practice</div>
                <h2 className={styles.quizCtaTitle}>Test Your Knowledge</h2>
                <p className={styles.quizCtaDesc}>
                  Flip through 50+ real interview questions across 10 AI topics.
                  Self-assess, track your score, and build confidence for your next interview.
                </p>
                <div className={styles.quizCtaStats}>
                  <div className={styles.quizCtaStat}>
                    <span className={styles.quizCtaStatNum}>50+</span>
                    <span className={styles.quizCtaStatLabel}>Questions</span>
                  </div>
                  <div className={styles.quizCtaStat}>
                    <span className={styles.quizCtaStatNum}>10</span>
                    <span className={styles.quizCtaStatLabel}>Topics</span>
                  </div>
                  <div className={styles.quizCtaStat}>
                    <span className={styles.quizCtaStatNum}>3</span>
                    <span className={styles.quizCtaStatLabel}>Difficulty Levels</span>
                  </div>
                </div>
                <Link className={styles.quizCtaBtn} to="/interview-quiz">
                  Launch Quiz →
                </Link>
              </div>
              <div className={styles.quizCtaVisual} aria-hidden="true">
                <div className={styles.quizCard}>
                  <div className={styles.quizCardLabel}>❓ Interview Question</div>
                  <p className={styles.quizCardQ}>What is RAG and how does it reduce hallucinations?</p>
                  <div className={styles.quizCardHint}>Click to reveal answer 🔄</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className={styles.howWorks}>
          <div className={styles.container}>
            <h2>✨ How to Use</h2>
            <div className={styles.steps}>
              <div className={styles.step}>
                <div className={styles.stepNumber}>1</div>
                <h4>Browse Topics</h4>
                <p>Explore interview questions in your area of interest</p>
              </div>
              <div className={styles.step}>
                <div className={styles.stepNumber}>2</div>
                <h4>Study Content</h4>
                <p>Read comprehensive answers with diagrams and examples</p>
              </div>
              <div className={styles.step}>
                <div className={styles.stepNumber}>3</div>
                <h4>Practice</h4>
                <p>Apply knowledge through daily challenges</p>
              </div>
              <div className={styles.step}>
                <div className={styles.stepNumber}>4</div>
                <h4>Ace Interviews</h4>
                <p>Use learned concepts and interview tips</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.cta}>
          <div className={styles.container}>
            <h2>Ready to Level Up?</h2>
            <p>Start your AI interview preparation journey today</p>
            <Link
              className={styles.buttonLarge}
              to="/docs/intro"
            >
              Get Started Now →
            </Link>
          </div>
        </section>
      </main>
    </Layout>
  );
}
