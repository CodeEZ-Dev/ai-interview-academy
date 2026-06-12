import React from 'react';
import Link from '@docusaurus/Link';
import {motion} from 'framer-motion';
import styles from './styles.module.css';

const fadeIn = {
  hidden: {opacity: 0, y: 18},
  visible: {opacity: 1, y: 0},
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const stats = [
  ['1500+', 'Interview Questions'],
  ['100+', 'AI Topics'],
  ['50+', 'Mock Interviews'],
  ['Weekly', 'Updates'],
];

const trustCards = [
  ['1500+', 'Interview Questions', 'Structured practice across core AI engineering and architecture interviews.'],
  ['Weekly', 'Updated Weekly', 'Fresh questions and scenarios aligned with current GenAI industry expectations.'],
  ['Industry', 'Real Industry Scenarios', 'Production-style design prompts, debugging cases, and architecture trade-offs.'],
  ['Enterprise', 'Enterprise Architecture Focus', 'Security, governance, scaling, and platform patterns for serious systems.'],
  ['RAG + Agents', 'RAG & Agentic AI Coverage', 'Deep coverage for retrieval, orchestration, tools, memory, and evaluation.'],
  ['Mock', 'Mock Interview Practice', 'Practice loops for explaining decisions clearly under interview pressure.'],
];

const categories = [
  ['G', 'Generative AI', '220 questions', 'Beginner to Advanced', 'LLM fundamentals, embeddings, evaluation, and production GenAI patterns.', '/docs/genai'],
  ['R', 'RAG', '180 questions', 'Intermediate', 'Chunking, retrieval, vector search, reranking, grounding, and enterprise RAG design.', '/docs/rag'],
  ['A', 'Agentic AI', '160 questions', 'Advanced', 'Agent architecture, planning, tool use, multi-agent workflows, and reliability.', '/docs/agentic-ai'],
  ['M', 'MCP', '90 questions', 'Intermediate', 'Model Context Protocol concepts, resources, tools, prompts, and integration design.', '/docs/mcp'],
  ['O', 'LLMOps', '130 questions', 'Advanced', 'Prompt lifecycle, model selection, monitoring, evaluation, deployment, and cost control.', '/docs/llmops'],
  ['P', 'Prompt Engineering', '140 questions', 'Beginner to Advanced', 'Prompt patterns, structured outputs, evaluations, and interview-ready examples.', '/docs/genai/prompt-engineering'],
  ['V', 'Vector Databases', '120 questions', 'Intermediate', 'Indexes, similarity search, metadata filters, scaling, and retrieval trade-offs.', '/docs/rag/vector-databases'],
  ['E', 'AI Architecture', '150 questions', 'Advanced', 'Enterprise integration, governance, resilience, observability, and secure AI platforms.', '/docs/architecture'],
  ['C', 'Cloud AI', '110 questions', 'Intermediate', 'Managed AI services, Vertex AI patterns, cloud RAG, and deployment decisions.', '/docs/gcp'],
  ['B', 'Enterprise AI', '200 questions', 'Advanced', 'System design, compliance, data platforms, and operating models for AI at scale.', '/docs/system-design'],
];

const paths = [
  ['GenAI Engineer', '6 weeks', '42 topics', 'Intermediate', '/docs/genai'],
  ['RAG Architect', '5 weeks', '36 topics', 'Advanced', '/docs/rag'],
  ['Agentic AI Developer', '7 weeks', '48 topics', 'Advanced', '/docs/agentic-ai'],
  ['AI Solution Architect', '8 weeks', '55 topics', 'Expert', '/docs/architecture'],
  ['LLMOps Engineer', '6 weeks', '40 topics', 'Advanced', '/docs/llmops'],
];

const filters = ['RAG', 'Agentic AI', 'MCP', 'LLMOps', 'GenAI', 'Cloud AI'];

const recentTopics = ['RAG evaluation strategy', 'Agent tool reliability', 'Vector index trade-offs'];

function SectionHeader({eyebrow, title, children}) {
  return (
    <div className={styles.sectionHeader}>
      <span className={styles.eyebrow}>{eyebrow}</span>
      <h2>{title}</h2>
      {children ? <p>{children}</p> : null}
    </div>
  );
}

function MetricCard({value, label}) {
  return (
    <motion.div className={styles.metricCard} variants={fadeIn}>
      <span>{value}</span>
      <p>{label}</p>
    </motion.div>
  );
}

function CategoryCard({item, index}) {
  const [icon, name, questions, difficulty, description, to] = item;
  return (
    <motion.div variants={fadeIn}>
      <Link
        className={`${styles.categoryCard} ${index === 0 || index === 7 ? styles.categoryWide : ''}`}
        to={to}
      >
        <div className={styles.cardTopline}>
          <span className={styles.iconBadge} aria-hidden="true">{icon}</span>
          <span className={styles.difficulty}>{difficulty}</span>
        </div>
        <h3>{name}</h3>
        <p>{description}</p>
        <div className={styles.cardMeta}>
          <span>{questions}</span>
          <span>Open path</span>
        </div>
      </Link>
    </motion.div>
  );
}

function PathCard({path}) {
  const [name, duration, topics, level, to] = path;
  return (
    <motion.div variants={fadeIn}>
      <Link className={styles.pathCard} to={to}>
        <span className={styles.pathLabel}>{level}</span>
        <h3>{name}</h3>
        <div className={styles.pathMeta}>
          <span>{duration}</span>
          <span>{topics}</span>
        </div>
      </Link>
    </motion.div>
  );
}

function HeroDashboard() {
  return (
    <motion.aside
      className={styles.heroDashboard}
      initial={{opacity: 0, y: 22, scale: 0.98}}
      animate={{opacity: 1, y: 0, scale: 1}}
      transition={{duration: 0.65, delay: 0.15, ease: 'easeOut'}}
      aria-label="AI Interview Academy platform metrics"
    >
      <div className={styles.dashboardHeader}>
        <div>
          <span className={styles.windowDot} />
          <span className={styles.windowDot} />
          <span className={styles.windowDot} />
        </div>
        <span>Live prep dashboard</span>
      </div>
      <div className={styles.dashboardHero}>
        <p>Interview readiness</p>
        <strong>84%</strong>
        <div className={styles.progressTrack}>
          <span />
        </div>
      </div>
      <div className={styles.metricGrid}>
        {stats.map(([value, label]) => (
          <div className={styles.dashboardMetric} key={label}>
            <strong>{value}</strong>
            <span>{label}</span>
          </div>
        ))}
      </div>
      <div className={styles.timeline}>
        <div>
          <span />
          <p>RAG system design mock</p>
          <strong>Today</strong>
        </div>
        <div>
          <span />
          <p>Agent reliability review</p>
          <strong>Next</strong>
        </div>
      </div>
    </motion.aside>
  );
}

function SearchPanel() {
  return (
    <motion.section
      className={styles.searchPanel}
      variants={fadeIn}
      initial="hidden"
      animate="visible"
      transition={{duration: 0.5, delay: 0.25}}
      aria-labelledby="search-title"
    >
      <label id="search-title" className={styles.searchLabel} htmlFor="homepage-search">
        Search the academy
      </label>
      <div className={styles.searchBox}>
        <span aria-hidden="true">⌕</span>
        <input
          id="homepage-search"
          type="search"
          placeholder="Search interview questions, topics, architectures..."
        />
        <Link to="/search" className={styles.searchButton}>Search</Link>
      </div>
      <div className={styles.filters} aria-label="Quick filters">
        {filters.map((filter) => (
          <Link key={filter} to={`/search?q=${encodeURIComponent(filter)}`}>
            {filter}
          </Link>
        ))}
      </div>
    </motion.section>
  );
}

function PrepDashboard() {
  return (
    <section className={styles.dashboardSection} aria-labelledby="prep-dashboard-title">
      <div className={styles.container}>
        <SectionHeader
          eyebrow="Practice System"
          title="Interview Preparation Dashboard"
        >
          Keep the most important signals visible while you prepare: progress, quiz performance, mocks, and recent study focus.
        </SectionHeader>
        <motion.div
          className={styles.prepGrid}
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{once: true, amount: 0.2}}
        >
          <motion.article className={styles.progressCard} variants={fadeIn}>
            <span>Progress</span>
            <strong>68%</strong>
            <div className={styles.progressTrack}>
              <span />
            </div>
            <p>Core platform topics completed</p>
          </motion.article>
          <motion.article className={styles.dashboardCard} variants={fadeIn}>
            <span>Recent Topics</span>
            <ul>
              {recentTopics.map((topic) => <li key={topic}>{topic}</li>)}
            </ul>
          </motion.article>
          <MetricCard value="82%" label="Quiz Score" />
          <MetricCard value="14" label="Mock Interviews Completed" />
          <MetricCard value="9 days" label="Learning Streak" />
        </motion.div>
      </div>
    </section>
  );
}

export default function HomepageLanding() {
  return (
    <main className={styles.pageShell}>
      <section className={styles.hero} aria-labelledby="home-hero-title">
        <div className={styles.heroGrid}>
          <motion.div
            className={styles.heroCopy}
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            <motion.span className={styles.heroBadge} variants={fadeIn}>
              AI interview prep for production builders
            </motion.span>
            <motion.h1 id="home-hero-title" variants={fadeIn}>
              Master the AI systems interviews that define modern engineering careers.
            </motion.h1>
            <motion.p variants={fadeIn}>
              Prepare for Generative AI, RAG, Agentic AI, MCP, LLMOps, Cloud AI, and enterprise architecture interviews with structured paths, scenario-driven questions, and practical system design coverage.
            </motion.p>
            <motion.div className={styles.heroActions} variants={fadeIn}>
              <Link className={styles.primaryButton} to="/docs/intro">Start Learning</Link>
              <Link className={styles.secondaryButton} to="/interview-quiz">Practice Quiz</Link>
              <Link className={styles.textButton} to="https://github.com/CodeEZ-Dev/ai-interview-academy">
                View GitHub Repository
              </Link>
            </motion.div>
          </motion.div>
          <HeroDashboard />
        </div>
        <div className={styles.heroSearchWrap}>
          <SearchPanel />
        </div>
      </section>

      <section className={styles.trustSection} aria-labelledby="trust-title">
        <div className={styles.container}>
          <SectionHeader
            eyebrow="Trusted Preparation"
            title="Why AI Engineers Choose AI Interview Academy"
          >
            Built for people who need to explain real trade-offs, not memorize shallow definitions.
          </SectionHeader>
          <motion.div
            className={styles.trustGrid}
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, amount: 0.2}}
          >
            {trustCards.map(([metric, title, description]) => (
              <motion.article className={styles.trustCard} key={title} variants={fadeIn}>
                <span>{metric}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <section className={styles.categoriesSection} aria-labelledby="categories-title">
        <div className={styles.container}>
          <SectionHeader
            eyebrow="Learning Catalog"
            title="Explore High-Signal AI Interview Topics"
          >
            Choose a topic and jump directly into curated explanations, diagrams, trade-offs, and interview framing.
          </SectionHeader>
          <motion.div
            className={styles.bentoGrid}
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, amount: 0.15}}
          >
            {categories.map((item, index) => (
              <CategoryCard item={item} index={index} key={item[1]} />
            ))}
          </motion.div>
        </div>
      </section>

      <section className={styles.pathsSection} aria-labelledby="paths-title">
        <div className={styles.container}>
          <SectionHeader
            eyebrow="Career Paths"
            title="Choose Your Career Path"
          >
            Study by role so every concept connects to the systems, decisions, and vocabulary your interviewers expect.
          </SectionHeader>
          <motion.div
            className={styles.pathsGrid}
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, amount: 0.2}}
          >
            {paths.map((path) => <PathCard path={path} key={path[0]} />)}
          </motion.div>
        </div>
      </section>

      <PrepDashboard />

      <section className={styles.finalCta} aria-labelledby="final-cta-title">
        <div className={styles.container}>
          <motion.div
            className={styles.finalCtaCard}
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, amount: 0.25}}
            variants={fadeIn}
          >
            <span className={styles.eyebrow}>Ready when you are</span>
            <h2 id="final-cta-title">Build interview confidence with a system, not scattered notes.</h2>
            <div className={styles.heroActions}>
              <Link className={styles.primaryButton} to="/docs/intro">Start Learning</Link>
              <Link className={styles.secondaryButton} to="/interview-quiz">Practice Quiz</Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
