# Contributing to AI Interview Academy

Thank you for your interest in contributing! We welcome contributions from the community.

## How to Contribute

### Adding New Content

1. **Fork the repository**
2. **Create a branch**: `git checkout -b content/your-topic`
3. **Create a new markdown file** in the appropriate category
4. **Follow the content format**:
   ```markdown
   ---
   sidebar_position: X
   title: Your Title
   slug: your-slug
   ---

   # Your Title

   ## Question
   ## Answer
   ## Architecture Diagram
   ## Key Points
   ## Interview Tips
   ## References
   ```
5. **Add to sidebars.js**
6. **Test locally**: `npm start`
7. **Commit and push**
8. **Create a Pull Request**

### Reporting Issues

- Use GitHub Issues to report problems
- Provide clear description and reproduction steps
- Include screenshots if applicable

### Improving Documentation

- Fix typos and grammar errors
- Improve clarity and examples
- Add missing references
- Update outdated information

## Content Guidelines

### Writing Style
- Clear and concise
- Technical but accessible
- Use examples generously
- Explain the "why"

### Format
- Use hierarchical headers
- Bold key terms
- Include code blocks
- Add Mermaid diagrams for complex topics
- Provide references

### Quality Checklist
- [ ] Follows content format
- [ ] Includes relevant examples
- [ ] Has architecture diagram (if applicable)
- [ ] Includes references
- [ ] Tested locally
- [ ] Added to sidebars.js
- [ ] No typos or grammar errors

## Development Setup

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build

# Deploy to GitHub Pages
npm run deploy
```

## Code of Conduct

- Be respectful and inclusive
- Welcome diverse perspectives
- Provide constructive feedback
- Follow best practices

## Questions?

- Check existing documentation
- Search existing issues/PRs
- Ask in GitHub Discussions
- Email or contact maintainers

---

Thank you for contributing! 🎉
