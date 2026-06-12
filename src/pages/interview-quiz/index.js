import React, { useState, useEffect, useCallback } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import { TOPICS, QUESTIONS, DIFFICULTY_COLORS, getTotalQuestionCount, getQuestionsForTopic } from './_questions';
import styles from './index.module.css';

// ─── Difficulty Badge ────────────────────────────────────────────────────────
function DifficultyBadge({ level }) {
  const colors = DIFFICULTY_COLORS[level];
  return (
    <span
      className={styles.difficultyBadge}
      style={{ background: colors.bg, color: colors.text, borderColor: colors.border }}
    >
      {level === 'easy' ? '🟢 Easy' : level === 'medium' ? '🟡 Medium' : '🔴 Hard'}
    </span>
  );
}

// ─── Progress Bar ────────────────────────────────────────────────────────────
function ProgressBar({ current, total, score }) {
  const pct = total > 0 ? Math.round((current / total) * 100) : 0;
  return (
    <div className={styles.progressWrapper}>
      <div className={styles.progressMeta}>
        <span>Question {current} of {total}</span>
        <span>✅ {score.correct} correct &nbsp;|&nbsp; ❌ {score.incorrect} need practice</span>
      </div>
      <div className={styles.progressTrack}>
        <div className={styles.progressFill} style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}

// ─── Flip Card ───────────────────────────────────────────────────────────────
function FlipCard({ question, isFlipped, onFlip }) {
  // Render markdown-like bold (**text**) in a simple way
  const renderText = (text) => {
    if (!text) return null;
    const lines = text.split('\n');
    return lines.map((line, i) => {
      const parts = line.split(/(\*\*[^*]+\*\*)/g);
      return (
        <span key={i}>
          {parts.map((part, j) => {
            if (part.startsWith('**') && part.endsWith('**')) {
              return <strong key={j}>{part.slice(2, -2)}</strong>;
            }
            // Render code blocks inline
            if (part.startsWith('`') && part.endsWith('`')) {
              return <code key={j} className={styles.inlineCode}>{part.slice(1, -1)}</code>;
            }
            return part;
          })}
          {i < lines.length - 1 && <br />}
        </span>
      );
    });
  };

  return (
    <div
      className={`${styles.cardScene} ${isFlipped ? styles.cardFlipped : ''}`}
      onClick={onFlip}
      role="button"
      tabIndex={0}
      aria-label={isFlipped ? 'Click to see question' : 'Click to reveal answer'}
      onKeyDown={(e) => e.key === 'Enter' && onFlip()}
    >
      <div className={styles.card}>
        {/* Front — Question */}
        <div className={styles.cardFront}>
          <div className={styles.cardLabel}>
            <span className={styles.cardLabelIcon}>❓</span> Interview Question
          </div>
          <DifficultyBadge level={question.difficulty} />
          <p className={styles.questionText}>{question.question}</p>
          <div className={styles.flipHint}>
            <span className={styles.flipIcon}>🔄</span> Click to reveal answer
          </div>
        </div>

        {/* Back — Answer */}
        <div className={styles.cardBack}>
          <div className={styles.cardLabel}>
            <span className={styles.cardLabelIcon}>💡</span> Answer
          </div>
          <DifficultyBadge level={question.difficulty} />
          <div className={styles.answerText}>{renderText(question.answer)}</div>
          <div className={styles.flipHint}>
            <span className={styles.flipIcon}>🔄</span> Click to see question
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Topic Selector ───────────────────────────────────────────────────────────
function TopicSelector({ onSelect }) {
  return (
    <div className={styles.topicSelectorWrapper}>
      <div className={styles.topicHeader}>
        <h2 className={styles.topicTitle}>Choose a Topic to Practice</h2>
        <p className={styles.topicSubtitle}>
          {getTotalQuestionCount()}+ curated interview questions across {TOPICS.length} categories
        </p>
      </div>
      <div className={styles.topicGrid}>
        {TOPICS.map((topic) => {
          const count = (QUESTIONS[topic.id] || []).length;
          return (
            <button
              key={topic.id}
              className={styles.topicCard}
              style={{ '--topic-color': topic.color }}
              onClick={() => onSelect(topic)}
              id={`topic-${topic.id}`}
            >
              <div className={styles.topicCardGlow} />
              <span className={styles.topicEmoji}>{topic.emoji}</span>
              <h3 className={styles.topicName}>{topic.label}</h3>
              <p className={styles.topicDesc}>{topic.description}</p>
              <span className={styles.topicCount}>{count} questions</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

// ─── Self-Assessment Buttons ─────────────────────────────────────────────────
function SelfAssess({ onAnswer, isFlipped }) {
  if (!isFlipped) return null;
  return (
    <div className={styles.assessWrapper}>
      <p className={styles.assessPrompt}>How did you do?</p>
      <div className={styles.assessButtons}>
        <button
          id="btn-got-it"
          className={`${styles.assessBtn} ${styles.assessBtnGood}`}
          onClick={() => onAnswer('correct')}
        >
          ✅ Got it!
        </button>
        <button
          id="btn-need-practice"
          className={`${styles.assessBtn} ${styles.assessBtnBad}`}
          onClick={() => onAnswer('incorrect')}
        >
          ❌ Need practice
        </button>
      </div>
    </div>
  );
}

// ─── End Screen ──────────────────────────────────────────────────────────────
function EndScreen({ topic, score, total, onRestart, onChangeTopic }) {
  const pct = total > 0 ? Math.round((score.correct / total) * 100) : 0;
  const emoji = pct >= 80 ? '🏆' : pct >= 60 ? '👍' : '📚';
  const message =
    pct >= 80 ? "Excellent! You're interview-ready!" :
    pct >= 60 ? "Good job! A bit more practice and you'll nail it." :
    "Keep studying — you'll get there!";

  return (
    <div className={styles.endScreen}>
      <div className={styles.endEmoji}>{emoji}</div>
      <h2 className={styles.endTitle}>Session Complete!</h2>
      <p className={styles.endMessage}>{message}</p>

      <div className={styles.scoreCard}>
        <div className={styles.scoreItem}>
          <span className={styles.scoreValue}>{score.correct}</span>
          <span className={styles.scoreLabel}>Correct</span>
        </div>
        <div className={styles.scoreDivider} />
        <div className={styles.scoreItem}>
          <span className={styles.scoreValue}>{score.incorrect}</span>
          <span className={styles.scoreLabel}>Need Practice</span>
        </div>
        <div className={styles.scoreDivider} />
        <div className={styles.scoreItem}>
          <span className={styles.scoreValue}>{pct}%</span>
          <span className={styles.scoreLabel}>Score</span>
        </div>
      </div>

      <div className={styles.endActions}>
        <button id="btn-restart-quiz" className={styles.endBtnPrimary} onClick={onRestart}>
          🔄 Retry {topic.label}
        </button>
        <button id="btn-change-topic" className={styles.endBtnSecondary} onClick={onChangeTopic}>
          📚 Choose Another Topic
        </button>
        <Link
          id="btn-read-docs"
          className={styles.endBtnOutline}
          to={`/docs/${topic.id}`}
        >
          📖 Read Full Docs →
        </Link>
      </div>
    </div>
  );
}

// ─── Main Quiz Component ──────────────────────────────────────────────────────
function QuizSession({ topic, onBack }) {
  const [questions] = useState(() => {
    const qs = getQuestionsForTopic(topic.id);
    return [...qs].sort(() => Math.random() - 0.5);
  });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [score, setScore] = useState({ correct: 0, incorrect: 0 });
  const [answered, setAnswered] = useState(new Set());
  const [finished, setFinished] = useState(false);

  const currentQ = questions[currentIndex];
  const total = questions.length;

  const handleFlip = () => setIsFlipped((f) => !f);

  const handleAnswer = useCallback((result) => {
    if (answered.has(currentIndex)) return;
    setAnswered((prev) => new Set([...prev, currentIndex]));
    setScore((prev) => ({
      ...prev,
      [result]: prev[result] + 1,
    }));

    // Auto-advance after 600ms
    setTimeout(() => {
      if (currentIndex + 1 < total) {
        setCurrentIndex((i) => i + 1);
        setIsFlipped(false);
      } else {
        setFinished(true);
      }
    }, 600);
  }, [currentIndex, answered, total]);

  const handleRestart = () => {
    setCurrentIndex(0);
    setIsFlipped(false);
    setScore({ correct: 0, incorrect: 0 });
    setAnswered(new Set());
    setFinished(false);
  };

  if (finished) {
    return (
      <EndScreen
        topic={topic}
        score={score}
        total={total}
        onRestart={handleRestart}
        onChangeTopic={onBack}
      />
    );
  }

  return (
    <div className={styles.sessionWrapper}>
      {/* Header */}
      <div className={styles.sessionHeader}>
        <button className={styles.backBtn} onClick={onBack} id="btn-back-to-topics">
          ← All Topics
        </button>
        <div className={styles.sessionTopic}>
          <span className={styles.sessionTopicEmoji}>{topic.emoji}</span>
          <span className={styles.sessionTopicName}>{topic.label}</span>
        </div>
      </div>

      {/* Progress */}
      <ProgressBar
        current={Math.min(currentIndex + (answered.has(currentIndex) ? 1 : 0), total)}
        total={total}
        score={score}
      />

      {/* Flip Card */}
      <div className={styles.cardContainer}>
        <FlipCard question={currentQ} isFlipped={isFlipped} onFlip={handleFlip} />
      </div>

      {/* Self-assessment */}
      <SelfAssess onAnswer={handleAnswer} isFlipped={isFlipped} />

      {/* Navigation */}
      <div className={styles.navControls}>
        <button
          id="btn-prev-question"
          className={styles.navBtn}
          disabled={currentIndex === 0}
          onClick={() => { setCurrentIndex((i) => i - 1); setIsFlipped(false); }}
        >
          ← Previous
        </button>
        <span className={styles.navCounter}>{currentIndex + 1} / {total}</span>
        <button
          id="btn-next-question"
          className={styles.navBtn}
          disabled={currentIndex === total - 1}
          onClick={() => { setCurrentIndex((i) => i + 1); setIsFlipped(false); }}
        >
          Next →
        </button>
      </div>
    </div>
  );
}

// ─── Page Root ────────────────────────────────────────────────────────────────
export default function InterviewQuiz() {
  const [selectedTopic, setSelectedTopic] = useState(null);

  return (
    <Layout
      title="Interactive Interview Quiz | AI Interview Academy"
      description="Practice AI/ML interview questions with an interactive flip-card quiz. Topics: GenAI, RAG, Agentic AI, MCP, LLMOps, GCP, System Design, and more."
    >
      <div className={styles.pageRoot}>
        {/* Animated background */}
        <div className={styles.bgGradient} aria-hidden="true">
          <div className={styles.bgOrb1} />
          <div className={styles.bgOrb2} />
          <div className={styles.bgOrb3} />
        </div>

        {/* Page hero */}
        {!selectedTopic && (
          <div className={styles.pageHero}>
            <div className={styles.pageHeroBadge}>🎯 Interactive Practice</div>
            <h1 className={styles.pageHeroTitle}>AI Interview Quiz</h1>
            <p className={styles.pageHeroSubtitle}>
              Flip through real interview questions, reveal answers, and track your confidence — all in one place.
            </p>
          </div>
        )}

        <div className={styles.pageContent}>
          {!selectedTopic ? (
            <TopicSelector onSelect={setSelectedTopic} />
          ) : (
            <QuizSession
              topic={selectedTopic}
              onBack={() => setSelectedTopic(null)}
            />
          )}
        </div>
      </div>
    </Layout>
  );
}
