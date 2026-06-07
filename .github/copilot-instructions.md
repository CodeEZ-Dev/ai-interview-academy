# GitHub Copilot Instructions

This workspace contains the AI Interview Academy project - a comprehensive documentation website for Generative AI, RAG, Agentic AI, and related technologies.

## Project Overview

- **Type**: Docusaurus documentation website
- **Framework**: React + Docusaurus 3
- **Deployment**: GitHub Pages
- **Language**: JavaScript/Markdown

## Quick Commands

### Development
```bash
npm install          # Install dependencies
npm start           # Start local dev server (port 3000)
npm run build       # Build for production
npm run clear       # Clear build artifacts
npm run serve       # Serve production build
```

### VS Code Tasks
Run tasks from Command Palette (Cmd+Shift+P):
- **Start Local Server** - Launch dev server
- **Build Site** - Build production version
- **Clear Build** - Remove build artifacts
- **Serve Built Site** - Serve production build
- **Install Dependencies** - Install npm packages

### Docker
```bash
docker-compose up        # Run development environment
docker-compose run build # Build the site
```

## Project Structure

```
ai-interview-academy/
├── docs/              # Documentation content
│   ├── genai/        # Generative AI
│   ├── rag/          # RAG
│   ├── agentic-ai/   # Agentic AI
│   ├── mcp/          # MCP
│   ├── llmops/       # LLMOps
│   ├── gcp/          # GCP GenAI
│   ├── architecture/ # Enterprise Architecture
│   ├── system-design/# System Design
│   ├── ml-dl/        # ML/DL
│   └── data-engineering/
├── static/            # Static assets
├── src/               # React components
├── blog/              # Blog posts
├── docusaurus.config.js
├── sidebars.js
└── package.json
```

## Key Features

- ✨ Dark mode support
- 🔍 Full-text search
- 📊 Mermaid diagrams
- 📱 Responsive design
- 🚀 GitHub Pages deployment
- 🔗 SEO optimized

## Configuration

### Update Before Deployment

1. **GitHub Settings**:
   - Update `organizationName` in `docusaurus.config.js`
   - Update `projectName`
   - Update `baseUrl`

2. **Repository**:
   - Enable GitHub Pages
   - Set deployment branch to `gh-pages`

3. **Analytics** (Optional):
   - Add Google Analytics ID in `docusaurus.config.js`

## Content Guidelines

- Follow markdown format with frontmatter
- Include title, sidebar_position, and slug
- Structure: Question → Answer → Diagram → Key Points → References
- Use Mermaid for architecture diagrams
- Add code examples where applicable

## Deployment

### Automatic (GitHub Actions)
- Push to `main` branch
- GitHub Actions builds and deploys automatically
- Site live at: `https://username.github.io/ai-interview-academy/`

### Manual
```bash
npm run build
npm run deploy
```

## Common Tasks

### Add New Documentation Page
1. Create `.md` file in `docs/category/`
2. Add to `sidebars.js`
3. Follow content format
4. Test locally: `npm start`
5. Commit and push

### Add New Category
1. Create directory in `docs/`
2. Add to `sidebars.js`
3. Create `index.md` file
4. Add sample pages

### Customize Styling
- Edit `src/css/custom.css` for global styles
- Edit `src/pages/index.module.css` for homepage
- Use CSS modules for components

## Troubleshooting

### Port 3000 in use
```bash
# macOS/Linux
lsof -i :3000
kill -9 <PID>

# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

### Build errors
```bash
npm run clear
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Search not working
- Ensure `docusaurus-lunr-search` is installed
- Clear `.docusaurus` folder
- Rebuild: `npm run build`

## Resources

- [Docusaurus Docs](https://docusaurus.io/)
- [React Docs](https://react.dev/)
- [Mermaid Diagrams](https://mermaid.js.org/)
- [GitHub Pages](https://pages.github.com/)

## Support

- Check [README.md](README.md)
- See [CONTRIBUTING.md](CONTRIBUTING.md)
- Visit [GitHub Issues](https://github.com/CodeEZ-Dev/ai-interview-academy.git)

---

**Last Updated**: 2024
