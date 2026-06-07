# AI Interview Academy

> Master Generative AI, RAG, Agentic AI, MCP, LLMOps, Cloud AI, and Enterprise Architecture Interviews

[![Deploy to GitHub Pages](https://github.com/munusami/ai-interview-academy/actions/workflows/deploy.yml/badge.svg)](https://github.com/munusami/ai-interview-academy/actions/workflows/deploy.yml)
[![GitHub License](https://img.shields.io/github/license/munusami/ai-interview-academy)](LICENSE)
[![GitHub Stars](https://img.shields.io/github/stars/munusami/ai-interview-academy)](https://github.com/munusami/ai-interview-academy)

## 📚 About

AI Interview Academy is a comprehensive, open-source documentation website dedicated to interview preparation and knowledge sharing for modern AI technologies. Built with Docusaurus, it provides structured, searchable content covering:

- **Generative AI** - Fundamentals, LLMs, and practical applications
- **RAG** - Retrieval Augmented Generation and best practices
- **Agentic AI** - Building autonomous AI agents
- **MCP** - Model Context Protocol and integrations
- **LLMOps** - Operations and lifecycle management
- **GCP GenAI** - Google Cloud's generative AI services
- **Enterprise Architecture** - Building scalable AI systems
- **System Design** - Distributed systems and architecture patterns
- **ML/DL** - Machine Learning and Deep Learning fundamentals
- **Data Engineering** - Pipelines, warehouses, and infrastructure

## 🚀 Quick Start

### Prerequisites

- **Node.js**: Version 18 or higher
- **npm**: Version 9 or higher (or yarn/pnpm)
- **Git**: For version control

### Local Setup

```bash
# Clone the repository
git clone https://github.com/munusami/ai-interview-academy.git
cd ai-interview-academy

# Install dependencies
npm install

# Start development server
npm start
```

The site will open at `http://localhost:3000`

### Build for Production

```bash
# Build static site
npm run build

# Serve production build locally
npm run serve
```

## 📖 Project Structure

```
ai-interview-academy/
├── docs/                           # Documentation content
│   ├── genai/                     # Generative AI resources
│   ├── rag/                       # RAG and retrieval
│   ├── agentic-ai/                # Agentic AI systems
│   ├── mcp/                       # Model Context Protocol
│   ├── llmops/                    # LLMOps and operations
│   ├── gcp/                       # GCP Generative AI
│   ├── architecture/              # Enterprise architecture
│   ├── system-design/             # System design patterns
│   ├── ml-dl/                     # ML and DL fundamentals
│   ├── data-engineering/          # Data engineering topics
│   └── daily-challenges/          # Weekly challenges
├── static/                         # Static assets
│   ├── img/                       # Images and diagrams
│   │   ├── rag/
│   │   ├── agentic-ai/
│   │   ├── architecture/
│   │   └── gcp/
│   └── css/                       # Custom CSS
├── blog/                          # Blog posts
├── src/                           # React components
│   ├── components/                # Custom React components
│   ├── pages/                     # Custom pages
│   └── css/                       # Custom styles
├── docusaurus.config.js           # Main configuration
├── sidebars.js                    # Sidebar navigation
└── package.json                   # Dependencies

```

## 🎯 Content Format

Each documentation page follows a consistent structure:

```markdown
# Question Title

## Question
The interview question

## Answer
Comprehensive answer with examples

## Architecture Diagram
Visual representation using Mermaid

## Key Points
- Bullet point 1
- Bullet point 2

## Interview Tips
Tips for answering in interviews

## Common Follow-up Questions
Q&A format

## References
Useful links and resources
```

## ✨ Features

### 🌙 Dark Mode Support
- Automatic detection of system preferences
- Toggle button in navbar
- Persistent user preference

### 🔍 Full Text Search
- Client-side search using Lunr
- Search across all documentation
- Instant results as you type

### 📊 Mermaid Diagrams
- Architecture diagrams
- Flow charts
- Sequence diagrams
- Built-in rendering

### 📱 Responsive Design
- Mobile-friendly interface
- Optimized for all screen sizes
- Touch-friendly navigation

### 🔗 SEO Optimized
- Meta tags and Open Graph
- XML sitemaps
- Automatic sitemap generation
- Structured data markup

## 🛠️ Available Commands

```bash
# Start development server
npm start

# Build for production
npm run build

# Clear build artifacts
npm run clear

# Serve production build
npm run serve

# Deploy to GitHub Pages (local)
npm run deploy

# Write translations (i18n)
npm run write-translations

# Generate heading IDs
npm run write-heading-ids
```

## 📦 VS Code Tasks

Open Command Palette (Cmd+Shift+P) and search for "Tasks: Run Task":

- **Start Local Server** - Launch dev server on http://localhost:3000
- **Build Site** - Build production-ready site
- **Clear Build** - Remove build artifacts
- **Serve Built Site** - Serve production build
- **Install Dependencies** - Install npm packages

## 🚀 Deployment

### Automatic Deployment (GitHub Actions)

The site automatically deploys to GitHub Pages on every push to `main`:

1. GitHub Actions runs tests and builds the site
2. Artifacts are deployed to `gh-pages` branch
3. Site is live at: `https://munusami.github.io/ai-interview-academy/`

### Manual Deployment

```bash
# Build the site
npm run build

# Deploy to GitHub Pages
npm run deploy
```

## 📋 Deployment Checklist

- [ ] Update `docusaurus.config.js` with your GitHub username and repo
- [ ] Update `organizationName` and `projectName`
- [ ] Update `baseUrl` if repo name differs
- [ ] Enable GitHub Pages in repository settings
- [ ] Set deployment branch to `gh-pages`
- [ ] Add Google Analytics ID (optional)

## 🤝 Contributing

Contributions are welcome! Here's how to contribute:

### Adding New Content

1. **Create a new markdown file** in appropriate category under `docs/`
2. **Follow the content format** described above
3. **Add to sidebars.js** for navigation
4. **Include diagrams** using Mermaid
5. **Add references** for further learning

### Code Contribution

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes
4. Commit: `git commit -m 'Add amazing feature'`
5. Push: `git push origin feature/amazing-feature`
6. Open a Pull Request

### Guidelines

- Write clear, concise documentation
- Use examples and diagrams when possible
- Include references and citations
- Ensure code blocks have syntax highlighting
- Test locally before submitting PR
- Follow Markdown best practices

## 📝 Content Guidelines

### Writing Style
- Technical but accessible
- Use examples generously
- Include real-world applications
- Explain the "why" not just "how"

### Structure
- Start with fundamentals
- Progress to advanced concepts
- Include practical examples
- Provide diagrams for complex topics

### Formatting
- Use headers hierarchically
- Bold key terms
- Use code blocks for technical content
- Include links to related topics
- Add references for citations

## 🎓 Learning Paths

### For Beginners
1. Start with ML/DL fundamentals
2. Learn System Design basics
3. Explore Generative AI concepts
4. Progress to RAG and LLMOps

### For Interview Prep
1. Review your target area (RAG, Agentic AI, etc.)
2. Study architecture patterns
3. Practice with daily challenges
4. Review enterprise patterns

### For Specific Roles
- **ML Engineers**: ML/DL → Architecture → LLMOps
- **Data Engineers**: Data Engineering → ML/DL → Architecture
- **Backend Engineers**: System Design → Architecture → LLMOps
- **Cloud Engineers**: GCP → Architecture → LLMOps

## 📚 Resources

### Official Documentation
- [Docusaurus Docs](https://docusaurus.io/)
- [React Documentation](https://react.dev/)
- [Markdown Guide](https://www.markdownguide.org/)
- [Mermaid Diagrams](https://mermaid.js.org/)

### AI/ML Resources
- [DeepLearning.AI](https://www.deeplearning.ai/)
- [Papers with Code](https://paperswithcode.com/)
- [ArXiv.org](https://arxiv.org/)
- [Hugging Face Hub](https://huggingface.co/)

## 🐛 Issue Tracking

Found an issue or have a suggestion?

1. Check [existing issues](https://github.com/munusami/ai-interview-academy/issues)
2. Create a [new issue](https://github.com/munusami/ai-interview-academy/issues/new)
3. Provide clear description and examples

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👏 Acknowledgments

- Built with [Docusaurus](https://docusaurus.io/)
- Inspired by community learning initiatives
- Thanks to all [contributors](https://github.com/munusami/ai-interview-academy/graphs/contributors)

## 📞 Contact

- **GitHub**: [@munusami](https://github.com/munusami)
- **GitHub Issues**: [Report issues](https://github.com/munusami/ai-interview-academy/issues)
- **Discussions**: [Join discussions](https://github.com/munusami/ai-interview-academy/discussions)

## 🗺️ Roadmap

- [ ] Interactive code examples
- [ ] Video tutorials
- [ ] Weekly challenge system
- [ ] Community forums
- [ ] Mobile app
- [ ] Multi-language support
- [ ] Advanced search filters
- [ ] Personalized learning paths

## 📊 Statistics

- **Categories**: 11
- **Topics**: 50+
- **Code Examples**: 100+
- **Diagrams**: 30+
- **Contributors**: Growing community

---

**Last Updated**: 2024

**Version**: 1.0.0

**Maintained by**: [Your Name](https://github.com/munusami)

---

<div align="center">

⭐ **If you find this helpful, please star the repository!** ⭐

[GitHub](https://github.com/munusami/ai-interview-academy) • [Website](https://munusami.github.io/ai-interview-academy/) • [Report Issue](https://github.com/munusami/ai-interview-academy/issues)

</div>
