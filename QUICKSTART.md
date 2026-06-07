# Quick Start Guide

## 🚀 Get Up and Running in 5 Minutes

### Prerequisites
- Node.js 18+ ([Download](https://nodejs.org/))
- npm 9+ (comes with Node.js)
- Git

### Step 1: Navigate to Project
```bash
cd ai-interview-academy
```

### Step 2: Install Dependencies
```bash
npm install
```

### Step 3: Start Development Server
```bash
npm start
```

The site will open at `http://localhost:3000` 🎉

## 📝 Adding Content

### Create a New Page

1. Create a file: `docs/category/page-name.md`
2. Add frontmatter:
```markdown
---
sidebar_position: 1
title: Your Title
slug: your-slug
---
```

3. Write content using the format:
   - Question
   - Answer
   - Architecture Diagram (optional)
   - Key Points
   - Interview Tips
   - References

4. Add to `sidebars.js`:
```javascript
'category/page-name',
```

5. Push to GitHub and it deploys automatically! 🚀

## 🛠️ Available Commands

| Command | Purpose |
|---------|---------|
| `npm start` | Start dev server |
| `npm run build` | Build for production |
| `npm run serve` | Serve production build |
| `npm run deploy` | Deploy to GitHub Pages |
| `npm run clear` | Clear build cache |

## 🐳 Using Docker

```bash
# Start with Docker
docker-compose up

# Build with Docker
docker-compose run build
```

## 📚 Content Structure

```
docs/
├── genai/                    # Generative AI topics
├── rag/                      # RAG implementation
├── agentic-ai/               # Agentic AI systems
├── mcp/                      # Model Context Protocol
├── llmops/                   # LLMOps practices
├── gcp/                      # GCP Generative AI
├── architecture/             # Enterprise architecture
├── system-design/            # System design patterns
├── ml-dl/                    # ML/DL fundamentals
├── data-engineering/         # Data engineering
└── daily-challenges/         # Weekly interview challenges
```

## 🔍 Full Documentation

- [README.md](README.md) - Complete project documentation
- [CONTRIBUTING.md](CONTRIBUTING.md) - Contribution guidelines
- [.github/copilot-instructions.md](.github/copilot-instructions.md) - Development instructions

## 🌐 Deployment

### Automatic (Recommended)
1. Push to `main` branch
2. GitHub Actions builds and deploys
3. Site live at: `https://yourusername.github.io/ai-interview-academy/`

### Manual
```bash
npm run build
npm run deploy
```

## ⚙️ Configuration

Update these before deploying:

**docusaurus.config.js**:
```javascript
organizationName: 'your-github-username',
projectName: 'ai-interview-academy',
baseUrl: '/ai-interview-academy/',
```

**GitHub Repository Settings**:
- Enable GitHub Pages
- Set source to `gh-pages` branch

## 🆘 Troubleshooting

### Port 3000 already in use
```bash
# macOS/Linux
lsof -i :3000 | grep LISTEN | awk '{print $2}' | xargs kill -9

# Windows
netstat -ano | findstr :3000
```

### Build errors
```bash
npm run clear
rm -rf node_modules
npm install
npm run build
```

### Search not working
```bash
npm run clear
npm run build
```

## 📊 Project Stats

- **11 Categories** of AI topics
- **50+ Documentation** pages
- **100+ Code examples**
- **30+ Architecture diagrams**
- **SEO Optimized**
- **Dark mode support**
- **Mobile responsive**

## 🎓 Learning Path

**Beginner** → **Intermediate** → **Advanced** → **Expert**

1. Start with ML/DL fundamentals
2. Learn System Design basics
3. Explore Generative AI
4. Deep dive into RAG
5. Master Agentic AI
6. Study Enterprise Architecture
7. Practice with daily challenges

## 🤝 Contributing

We welcome contributions! See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

## 📞 Support

- 📖 [Full Documentation](README.md)
- 🐛 [Report Issues](https://github.com/munusami/ai-interview-academy/issues)
- 💬 [Discussions](https://github.com/munusami/ai-interview-academy/discussions)
- 📧 Contact via GitHub

## 🎯 Next Steps

1. ✅ Set up development environment
2. 📖 Read documentation
3. ✏️ Add content
4. 🚀 Deploy to GitHub Pages
5. 👥 Invite contributions
6. 📈 Grow the community

---

**Questions?** Check the [README.md](README.md) or create an issue on GitHub!

Happy learning! 🎉
