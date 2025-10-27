# Code as Textbook: AI-Assisted Web Development with Quality Gates

**Course Project:** Building a Professional Static Website with AI Coding
Assistants **Learning Objectives:** Master prompting techniques, code quality
standards, and modern web development workflows **Target Audience:** Students
learning AI-assisted web development

---

## 📚 Table of Contents

1. [Introduction](#introduction)
2. [Core Concepts](#core-concepts)
3. [Technology Stack Explained](#technology-stack-explained)
4. [Project Architecture](#project-architecture)
5. [Code Quality Gates Deep Dive](#code-quality-gates-deep-dive)
6. [AI Prompting Strategies](#ai-prompting-strategies)
7. [Step-by-Step Recreation Guide](#step-by-step-recreation-guide)
8. [Understanding Each Tool](#understanding-each-tool)
9. [Common Challenges & Solutions](#common-challenges--solutions)
10. [Assessment & Learning Outcomes](#assessment--learning-outcomes)

---

## Introduction

### What Is This Project?

This project demonstrates how to build a **production-ready static website**
using an AI coding assistant while maintaining **professional code quality
standards**. The key learning objective is not just to build a website, but to
understand how to use AI effectively while enforcing best practices through
automated tools.

### Why Code Quality Gates Matter

In professional software development, **code quality gates** are automated
checks that prevent poorly written code from reaching production. They ensure:

- **Consistency** - Code follows the same style across the team
- **Reliability** - Fewer bugs make it to production
- **Maintainability** - Other developers (or AI assistants) can understand your
  code
- **Performance** - Optimized code loads faster for users
- **Accessibility** - Websites work for everyone, including users with
  disabilities

### The AI Coding Assistant Challenge

When working with AI coding assistants, there's a risk:

- AI might generate code that "works" but doesn't follow best practices
- Different AI sessions might produce inconsistent code styles
- Without guardrails, technical debt accumulates quickly

**Solution:** Implement automated quality gates that force both you AND the AI
to maintain standards.

---

## Core Concepts

### 1. Static Site Generation

**What it is:** Building HTML files at build-time rather than on-demand for each
visitor.

**Why it matters:**

- ⚡ **Faster** - Pre-built HTML loads instantly
- 💰 **Cheaper** - No server processing needed
- 🔒 **Secure** - No server-side vulnerabilities
- 📈 **Scalable** - Can handle millions of visitors on a CDN

**Tools:** Eleventy (11ty), Jekyll, Hugo, Next.js (static export)

**Analogy:** It's like preparing all your meals for the week on Sunday (static)
vs. cooking each meal when hungry (dynamic).

### 2. Continuous Integration/Continuous Deployment (CI/CD)

**What it is:** Automated pipeline that tests and deploys your code.

**The Pipeline:**

```
Code Push → Quality Checks → Build → Test → Deploy
```

**Why it matters:**

- 🤖 **Automation** - No manual deployment steps
- ✅ **Safety** - Bad code never reaches production
- 🚀 **Speed** - Deploy multiple times per day safely
- 📊 **Visibility** - See exactly what broke and why

### 3. Pre-commit Hooks

**What it is:** Code that runs automatically before you commit changes to Git.

**Why it matters:**

- 🛡️ **Prevention** - Stop bad code before it enters the repository
- ⚡ **Fast Feedback** - Catch issues immediately, not in CI/CD
- 🎯 **Efficiency** - Only check files you changed

**Analogy:** Like spell-check in your word processor - catches mistakes before
you send the email.

### 4. Linting vs. Formatting

**Linting (ESLint, Stylelint):**

- Finds potential **bugs and code quality issues**
- Example: "You declared a variable but never used it"
- Example: "This CSS property is misspelled"

**Formatting (Prettier):**

- Fixes **visual appearance and style**
- Example: "Use single quotes instead of double quotes"
- Example: "Add spaces around this operator"

**Key Difference:**

- Linters find **problems** that could cause bugs
- Formatters fix **cosmetic issues** for consistency

### 5. Configuration Files

Modern projects use many config files. Here's what each does:

| File                | Purpose                        | Example Setting               |
| ------------------- | ------------------------------ | ----------------------------- |
| `package.json`      | Lists dependencies and scripts | `"start": "eleventy --serve"` |
| `.eslintrc.json`    | JavaScript linting rules       | `"no-console": "warn"`        |
| `.prettierrc`       | Code formatting rules          | `"singleQuote": true`         |
| `.stylelintrc.json` | CSS linting rules              | `"color-hex-length": "short"` |
| `.eleventy.js`      | Static site generator config   | `input: "src"`                |
| `.gitignore`        | Files Git should ignore        | `node_modules/`               |
| `.editorconfig`     | Editor behavior                | `indent_size = 2`             |

---

## Technology Stack Explained

### Frontend Technologies

#### 1. Eleventy (11ty) - Static Site Generator

**What it does:** Converts templates and markdown into HTML.

**Why we chose it:**

- 🎯 **Simple** - Zero config to get started
- 🚀 **Fast** - Builds in milliseconds
- 🔧 **Flexible** - Use any template language
- 📚 **Well-documented** - Great learning resource

**How it works:**

```
Input: src/index.md (Markdown + Front Matter)
↓
Process: Eleventy reads templates and data
↓
Output: _site/index.html (Pure HTML)
```

#### 2. Nunjucks - Template Language

**What it does:** Adds logic to HTML (loops, conditionals, variables).

**Example:**

```html
{# Template with variable #}
<h1>{{ site.title }}</h1>

{# Loop example #} {% for item in items %}
<li>{{ item }}</li>
{% endfor %}
```

**Why we chose it:**

- 🎨 **Powerful** - Can do complex layouts
- 📖 **Readable** - Looks like HTML
- 🔄 **Reusable** - Create components and partials

#### 3. CSS (No Framework)

**What we're doing:** Writing vanilla CSS with modern features.

**Why no framework:**

- 📚 **Learning** - Understand CSS fundamentals
- ⚡ **Performance** - No extra kilobytes
- 🎨 **Control** - Complete styling freedom

**Modern CSS features used:**

- CSS Custom Properties (variables)
- Flexbox and Grid layouts
- Media queries for responsive design

#### 4. Vanilla JavaScript

**What we're doing:** Using modern JavaScript without jQuery or frameworks.

**Why vanilla:**

- 📚 **Learning** - Master the language itself
- ⚡ **Performance** - No library overhead
- 🆕 **Modern** - ES2021+ features are powerful

---

### Development Tools

#### 1. Node.js & npm

**Node.js:** JavaScript runtime (runs JS outside the browser) **npm:** Package
manager (installs tools and libraries)

**Why we need them:**

- 🛠️ All our build tools run on Node.js
- 📦 npm manages dependencies
- 🚀 npm scripts automate tasks

**Key npm commands:**

```bash
npm install          # Install dependencies
npm start           # Start dev server
npm run build       # Build for production
npm test            # Run all tests
```

#### 2. Git & GitHub

**Git:** Version control (tracks code changes) **GitHub:** Code hosting platform
(stores your repository)

**Why we need them:**

- 📜 **History** - See every change ever made
- 🔄 **Collaboration** - Multiple people can work together
- 🚀 **Deployment** - GitHub Actions automates everything
- 📦 **Backup** - Your code is safe in the cloud

#### 3. VS Code

**What it is:** Code editor with extensions.

**Why we configured it:**

- 🎨 **Formatting** - Auto-format on save
- 🔍 **Linting** - See errors in real-time
- 🚀 **Tasks** - Run builds with keyboard shortcuts
- 🤖 **Extensions** - Add powerful features

**Extensions we use:**

- **ESLint** - Shows JavaScript errors inline
- **Prettier** - Formats code automatically
- **Stylelint** - Validates CSS
- **Markdownlint** - Checks markdown files

---

## Project Architecture

### Directory Structure

```
117_site/
│
├── src/                          # Source files (what you edit)
│   ├── _data/                    # Global data available to all pages
│   │   └── site.js               # Site metadata (title, URL, etc.)
│   │
│   ├── _includes/                # Reusable components (partials)
│   │   └── page-header.njk       # Header component
│   │
│   ├── _layouts/                 # Page templates
│   │   └── base.njk              # Main layout (header, footer)
│   │
│   ├── assets/                   # Static files
│   │   ├── css/
│   │   │   └── main.css          # Styles
│   │   ├── js/
│   │   │   └── main.js           # JavaScript
│   │   └── images/               # Images
│   │
│   ├── index.md                  # Homepage content
│   ├── about.md                  # About page content
│   ├── 404.md                    # Error page
│   └── robots.txt                # SEO file
│
├── _site/                        # Built website (auto-generated)
│   └── (HTML, CSS, JS files)
│
├── .github/                      # GitHub-specific files
│   └── workflows/
│       └── ci-cd.yml             # Automated deployment
│
├── .vscode/                      # VS Code workspace config
│   ├── settings.json             # Editor settings
│   ├── extensions.json           # Recommended extensions
│   └── tasks.json                # Quick run tasks
│
├── .husky/                       # Git hooks
│   └── pre-commit                # Runs before each commit
│
├── docs/                         # Documentation
│   └── AI-GUIDE.md               # Guide for AI assistants
│
├── .eleventy.js                  # Eleventy configuration
├── .eslintrc.json                # ESLint rules
├── .prettierrc                   # Prettier rules
├── .stylelintrc.json             # Stylelint rules
├── .editorconfig                 # Editor configuration
├── .gitignore                    # Files Git ignores
├── package.json                  # Project metadata & scripts
├── package-lock.json             # Locked dependency versions
└── README.md                     # Project documentation
```

### How the Build Process Works

```
┌─────────────────────────────────────────────────────────┐
│ 1. Developer writes/edits files in src/                │
└─────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────┐
│ 2. Pre-commit hooks run (lint-staged + Husky)          │
│    • ESLint checks JavaScript                          │
│    • Stylelint checks CSS                              │
│    • Prettier formats all files                        │
└─────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────┐
│ 3. Code committed to Git                                │
└─────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────┐
│ 4. Pushed to GitHub (triggers CI/CD)                    │
└─────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────┐
│ 5. GitHub Actions runs quality checks                   │
│    • ESLint (JavaScript)                                │
│    • Stylelint (CSS)                                    │
│    • Markdownlint (Markdown)                            │
│    • Prettier (formatting check)                        │
└─────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────┐
│ 6. Eleventy builds the site                             │
│    • Processes templates                                │
│    • Generates HTML                                     │
│    • Copies assets                                      │
│    • Creates sitemap                                    │
└─────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────┐
│ 7. Lighthouse CI tests the built site                   │
│    • Performance score                                  │
│    • Accessibility score                                │
│    • Best practices score                               │
│    • SEO score                                          │
└─────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────┐
│ 8. Deploy to GitHub Pages (if all checks pass)          │
└─────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────┐
│ 9. Website live at yourusername.github.io/117_site      │
└─────────────────────────────────────────────────────────┘
```

---

## Code Quality Gates Deep Dive

### Layer 1: Editor Integration (Real-Time Feedback)

**When it runs:** As you type in VS Code

**What happens:**

- ESLint underlines JavaScript errors
- Stylelint underlines CSS errors
- Prettier suggests formatting changes

**Learning benefit:** Immediate feedback helps you learn best practices.

**Example:**

```javascript
// You type this:
var x = 5;

// ESLint immediately warns:
// ⚠️ Unexpected var, use let or const instead
// ⚠️ 'x' is assigned but never used

// You fix it:
const meaningfulName = 5;
```

### Layer 2: Format on Save (Automatic Fixes)

**When it runs:** Every time you save a file

**What happens:**

- Prettier automatically reformats the file
- ESLint auto-fixes simple issues
- Stylelint auto-fixes CSS when possible

**Learning benefit:** See correct formatting instantly.

**Example:**

```javascript
// Before save (messy):
function foo() {
  const x = 5;
  return x * 2;
}

// After save (formatted):
function foo() {
  const x = 5;
  return x * 2;
}
```

### Layer 3: Pre-Commit Hooks (Pre-Git Validation)

**When it runs:** Before your code is committed to Git

**Tool:** Husky + lint-staged

**What happens:**

1. You run `git commit`
2. Husky intercepts the commit
3. lint-staged runs linters on staged files only
4. If any check fails, commit is blocked

**Learning benefit:** Forces you to fix issues before they enter version
control.

**Configuration:** `.husky/pre-commit`

```bash
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

npx lint-staged
```

**Configuration:** `.lintstagedrc.json`

```json
{
  "*.{js,mjs,cjs}": ["eslint --fix", "prettier --write"],
  "*.css": ["stylelint --fix", "prettier --write"],
  "*.{html,json,md}": ["prettier --write"]
}
```

**What this means:**

- JavaScript files: Run ESLint, then Prettier
- CSS files: Run Stylelint, then Prettier
- HTML/JSON/Markdown: Run Prettier only

### Layer 4: CI/CD Pipeline (Server-Side Validation)

**When it runs:** Every push to GitHub

**Tool:** GitHub Actions

**What happens:**

```
Job 1: Quality Checks (parallel)
├── ESLint
├── Stylelint
├── Markdownlint
└── Prettier check

Job 2: Build (runs after Job 1)
└── Eleventy build

Job 3: Lighthouse CI (runs after Job 2)
└── Performance tests

Job 4: Deploy (runs after all pass)
└── Push to GitHub Pages
```

**Learning benefit:** Ensures quality even if someone bypasses local checks.

**Configuration:** `.github/workflows/ci-cd.yml`

```yaml
jobs:
  quality-checks:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
      - run: npm ci
      - run: npm run lint
```

### Layer 5: Lighthouse CI (Performance Validation)

**When it runs:** After the site is built

**What it tests:**

- **Performance** - Load time, responsiveness
- **Accessibility** - Screen reader support, contrast ratios
- **Best Practices** - HTTPS, modern APIs
- **SEO** - Meta tags, mobile-friendly

**Score requirements:**

```json
{
  "categories:performance": ["error", { "minScore": 0.9 }],
  "categories:accessibility": ["error", { "minScore": 0.9 }],
  "categories:best-practices": ["error", { "minScore": 0.9 }],
  "categories:seo": ["error", { "minScore": 0.9 }]
}
```

**Learning benefit:** Ensures your site is fast and accessible.

---

## AI Prompting Strategies

### Effective Prompting Principles

#### 1. Be Specific About Constraints

❌ **Bad prompt:**

> "Create a website"

✅ **Good prompt:**

> "Create a static website using Eleventy with Nunjucks templates. Include
> ESLint for JavaScript linting, Prettier for formatting, and Stylelint for CSS.
> Set up pre-commit hooks with Husky and lint-staged. Configure GitHub Actions
> for CI/CD with Lighthouse CI."

**Why it works:** The AI knows exactly what tools to use and how to configure
them.

#### 2. Request Configuration Files First

❌ **Bad approach:**

> "Write some code for me"

✅ **Good approach:**

> "First, create package.json with all necessary dependencies. Then create
> configuration files for ESLint, Prettier, and Stylelint. Then set up the
> project structure."

**Why it works:** Establishes the environment before writing code.

#### 3. Ask for Explanations

✅ **Effective addition:**

> "Explain why you chose these ESLint rules and what each rule does."

**Why it works:** You learn the reasoning, not just the implementation.

#### 4. Iterate in Steps

✅ **Effective workflow:**

```
1. "Set up basic Eleventy project"
2. "Add ESLint with specific rules for ES2021"
3. "Configure Prettier to work with ESLint"
4. "Add Stylelint for CSS validation"
5. "Set up pre-commit hooks"
6. "Create GitHub Actions workflow"
```

**Why it works:** Each step can be tested and understood before moving forward.

#### 5. Reference Documentation

✅ **Effective prompt:**

> "Using the official Eleventy documentation, create a configuration that uses
> Nunjucks as the template engine and outputs to \_site/"

**Why it works:** AI will follow best practices from official sources.

### Prompts for This Project

#### Initial Setup Prompt

```
I want to create a GitHub Pages site with code quality gates using Node.js.

Requirements:
- Use Eleventy (11ty) as the static site generator
- Use Nunjucks for templating
- Include ESLint for JavaScript linting
- Include Prettier for code formatting
- Include Stylelint for CSS linting
- Include Markdownlint for markdown files
- Set up Husky for pre-commit hooks
- Configure lint-staged to run linters on staged files
- Set up GitHub Actions for CI/CD
- Include Lighthouse CI for performance testing
- Configure VS Code with recommended extensions and settings

Make this project "KISS" (Keep It Simple, Stupid) and suitable for learning.
Create an AI-GUIDE.md that helps AI assistants quickly understand the project.
```

#### Configuration Prompt

```
For each configuration file, explain:
1. What the tool does
2. Why we're using it
3. What each configuration option means
4. How it integrates with other tools

Create these configuration files:
- .eslintrc.json
- .prettierrc
- .stylelintrc.json
- .lintstagedrc.json
- .editorconfig
- .markdownlint.json
```

#### Structure Prompt

```
Create an Eleventy project structure with:
- src/ folder for source files
- _data/ for global data (use site.js with environment variables)
- _includes/ for reusable components
- _layouts/ for page templates
- assets/ for CSS, JavaScript, and images
- A base layout with header and footer
- Homepage and about page
- Custom 404 error page
- robots.txt for SEO
- Automatic sitemap generation
```

#### Quality Gates Prompt

```
Set up comprehensive quality gates:

1. Pre-commit hooks that:
   - Run ESLint on JavaScript files
   - Run Stylelint on CSS files
   - Run Prettier on all applicable files
   - Block commit if any check fails

2. GitHub Actions workflow that:
   - Runs all linters
   - Builds the site
   - Runs Lighthouse CI
   - Deploys to GitHub Pages only if all checks pass
   - Continues even if Lighthouse CI fails (use continue-on-error)

3. VS Code configuration that:
   - Formats code on save
   - Shows linting errors in real-time
   - Suggests recommended extensions
   - Includes tasks for common operations
```

#### Learning Documentation Prompt

```
Create comprehensive documentation that:
- Explains every tool and why it's used
- Shows how to use the AI assistant effectively
- Provides troubleshooting guides
- Includes examples of common tasks
- Explains the code quality gates
- Helps future AI assistants understand the project quickly

Write this for students learning AI-assisted web development.
```

### Debugging with AI

When something doesn't work:

✅ **Good debugging prompt:**

```
I'm getting this error: [paste error]

Here's my configuration file:
[paste file content]

Here's what I tried:
1. [action 1]
2. [action 2]

What's wrong and how do I fix it?
```

**Why it works:** Provides complete context for diagnosis.

---

## Step-by-Step Recreation Guide

### Phase 1: Initial Setup (30 minutes)

#### Step 1: Create Project

```bash
# Create project directory
mkdir 117_site
cd 117_site

# Initialize Git
git init

# Initialize npm
npm init -y
```

**Prompt for AI:**

> "Create a package.json for an Eleventy static site project with development
> dependencies for ESLint, Prettier, Stylelint, Markdownlint, Husky,
> lint-staged, Lighthouse CI, and Eleventy. Include npm scripts for start,
> build, lint, format, and test."

#### Step 2: Install Dependencies

```bash
npm install --save-dev @11ty/eleventy @lhci/cli eslint eslint-config-prettier prettier stylelint stylelint-config-standard stylelint-prettier husky lint-staged markdownlint-cli @quasibit/eleventy-plugin-sitemap
```

**What each dependency does:**

- `@11ty/eleventy` - Static site generator
- `@lhci/cli` - Lighthouse CI tool
- `eslint` - JavaScript linter
- `eslint-config-prettier` - Disables ESLint rules that conflict with Prettier
- `prettier` - Code formatter
- `stylelint` - CSS linter
- `stylelint-config-standard` - Standard CSS rules
- `stylelint-prettier` - Integrates Prettier with Stylelint
- `husky` - Git hooks manager
- `lint-staged` - Run linters on staged files
- `markdownlint-cli` - Markdown linter
- `@quasibit/eleventy-plugin-sitemap` - Automatic sitemap generation

#### Step 3: Create Configuration Files

**Prompt for AI:**

> "Create these configuration files with detailed comments explaining each
> option: .eslintrc.json, .prettierrc, .stylelintrc.json, .lintstagedrc.json,
> .editorconfig, .markdownlint.json, and .gitignore"

**Files to create:**

`.eslintrc.json`:

```json
{
  "env": {
    "browser": true,
    "es2021": true,
    "node": true
  },
  "extends": ["eslint:recommended", "prettier"],
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "rules": {
    "no-console": "warn",
    "no-unused-vars": ["warn", { "argsIgnorePattern": "^_" }],
    "prefer-const": "error",
    "no-var": "error"
  }
}
```

`.prettierrc`:

```json
{
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "useTabs": false,
  "trailingComma": "es5",
  "printWidth": 80,
  "arrowParens": "always",
  "endOfLine": "lf"
}
```

`.stylelintrc.json`:

```json
{
  "extends": ["stylelint-config-standard", "stylelint-prettier/recommended"],
  "rules": {
    "color-hex-length": "short",
    "color-named": "never",
    "declaration-no-important": true
  }
}
```

#### Step 4: Configure Pre-commit Hooks

```bash
# Initialize Husky
npx husky install

# Add pre-commit hook
npx husky add .husky/pre-commit "npx lint-staged"
```

**What happens:**

- Creates `.husky/` directory
- Creates pre-commit script
- Runs before every `git commit`

### Phase 2: Project Structure (30 minutes)

#### Step 5: Create Directory Structure

**Prompt for AI:**

> "Create the following directory structure and explain what each folder is for:
> src/\_data, src/\_includes, src/\_layouts, src/assets/css, src/assets/js,
> src/assets/images"

```bash
mkdir -p src/{_data,_includes,_layouts,assets/{css,js,images}}
```

#### Step 6: Create Eleventy Config

**Prompt for AI:**

> "Create .eleventy.js that: uses src/ as input, \_site/ as output, configures
> Nunjucks as the template engine, adds passthrough copy for assets, includes
> sitemap plugin, and adds useful filters like readableDate and current year
> shortcode."

`.eleventy.js`:

```javascript
const sitemap = require('@quasibit/eleventy-plugin-sitemap');

module.exports = function (eleventyConfig) {
  // Add sitemap plugin
  eleventyConfig.addPlugin(sitemap, {
    sitemap: {
      hostname:
        process.env.SITE_URL || 'https://yourusername.github.io/117_site',
    },
  });

  // Copy static assets
  eleventyConfig.addPassthroughCopy('src/assets/css');
  eleventyConfig.addPassthroughCopy('src/assets/js');
  eleventyConfig.addPassthroughCopy('src/assets/images');
  eleventyConfig.addPassthroughCopy('src/robots.txt');

  // Watch CSS files for changes
  eleventyConfig.addWatchTarget('src/assets/css/');

  // Add date filter
  eleventyConfig.addFilter('readableDate', (dateObj) => {
    return new Date(dateObj).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  });

  // Add current year shortcode
  eleventyConfig.addShortcode('year', () => `${new Date().getFullYear()}`);

  return {
    dir: {
      input: 'src',
      output: '_site',
      includes: '_includes',
      layouts: '_layouts',
      data: '_data',
    },
    templateFormats: ['md', 'njk', 'html'],
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
  };
};
```

#### Step 7: Create Global Data

**Prompt for AI:**

> "Create src/\_data/site.js that exports site metadata (title, description,
> URL, author) and reads from environment variables with fallback defaults."

### Phase 3: Content Creation (45 minutes)

#### Step 8: Create Base Layout

**Prompt for AI:**

> "Create src/\_layouts/base.njk with: semantic HTML5, proper meta tags,
> responsive viewport, link to main.css, header with site title and navigation,
> main content area, footer with copyright using the year shortcode, and link to
> main.js."

#### Step 9: Create Components

**Prompt for AI:**

> "Create src/\_includes/page-header.njk that displays page title and optional
> description."

#### Step 10: Create Pages

**Prompt for AI:**

> "Create homepage (src/index.md), about page (src/about.md), and custom 404
> page (src/404.md) using markdown with front matter. Include engaging content
> that demonstrates the project's features."

#### Step 11: Create Styles

**Prompt for AI:**

> "Create src/assets/css/main.css with: CSS custom properties for theming, reset
> styles, responsive typography, mobile-first grid layout, header and footer
> styles, and hover effects. Follow modern CSS best practices and ensure all
> styles pass Stylelint."

**Requirements:**

- Use CSS custom properties
- Mobile-first responsive design
- No `!important` declarations
- Short hex colors (#fff not #ffffff)
- Semantic class names

#### Step 12: Create JavaScript

**Prompt for AI:**

> "Create src/assets/js/main.js with smooth scrolling for anchor links. Use
> modern ES2021+ syntax, no console.log statements, and ensure it passes
> ESLint."

### Phase 4: CI/CD Setup (30 minutes)

#### Step 13: Create GitHub Actions Workflow

**Prompt for AI:**

> "Create .github/workflows/ci-cd.yml with jobs for: quality checks (ESLint,
> Stylelint, Markdownlint, Prettier), build (Eleventy), Lighthouse CI (with
> continue-on-error), and deploy to GitHub Pages. Use actions/checkout@v4,
> actions/setup-node@v4, and deploy-pages@v4."

**Workflow structure:**

```yaml
name: CI/CD Pipeline

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  quality-checks:
    # Run all linters
  build:
    # Build the site
  lighthouse:
    # Run performance tests
  deploy:
    # Deploy to GitHub Pages
```

#### Step 14: Configure Lighthouse CI

**Prompt for AI:**

> "Create lighthouserc.json with performance budgets requiring 90+ scores for
> performance, accessibility, best practices, and SEO. Include assertions for
> FCP < 2s, LCP < 2.5s, CLS < 0.1, and TBT < 300ms."

### Phase 5: VS Code Integration (20 minutes)

#### Step 15: Configure VS Code

**Prompt for AI:**

> "Create VS Code workspace configuration with: recommended extensions
> (.vscode/extensions.json), settings for format-on-save and auto-fix
> (.vscode/settings.json), and tasks for common operations
> (.vscode/tasks.json)."

**Extensions to recommend:**

- dbaeumer.vscode-eslint
- esbenp.prettier-vscode
- stylelint.vscode-stylelint
- davidanson.vscode-markdownlint

### Phase 6: Documentation (30 minutes)

#### Step 16: Create Documentation

**Prompt for AI:**

> "Create comprehensive documentation: README.md for humans, AI-GUIDE.md for AI
> assistants, and .env.example for environment configuration. Include setup
> instructions, available scripts, deployment guide, and troubleshooting."

#### Step 17: Create SEO Files

**Prompt for AI:**

> "Create src/robots.txt for search engines and ensure sitemap is automatically
> generated."

### Phase 7: Testing & Deployment (30 minutes)

#### Step 18: Test Locally

```bash
# Format all files
npm run format

# Run all linters
npm run lint

# Build the site
npm run build

# Start dev server
npm start
```

**Visit:** `http://localhost:8080`

#### Step 19: Test Pre-commit Hooks

```bash
# Make a change to a file
echo "test" >> src/index.md

# Stage the change
git add src/index.md

# Try to commit (hooks should run)
git commit -m "Test commit"
```

**Expected:** Prettier formats the file, linters run, commit succeeds.

#### Step 20: Deploy to GitHub

```bash
# Create repository on GitHub
# Then:
git remote add origin https://github.com/YOUR_USERNAME/117_site.git
git branch -M main
git add .
git commit -m "Initial commit: Static site with quality gates"
git push -u origin main
```

**Then:**

1. Go to repository **Settings** → **Pages**
2. Select **GitHub Actions** as source
3. Wait for deployment (check **Actions** tab)
4. Visit your site!

---

## Understanding Each Tool

### ESLint - JavaScript Linter

**Purpose:** Finds problems in JavaScript code.

**What it catches:**

```javascript
// ❌ Bad practices ESLint catches:
var x = 5; // Use let or const
const unused = 10; // Variable declared but never used
if ((x = 5)) {
} // Assignment in condition (likely a bug)
console.log('debug'); // Console statements (our rule)

// ✅ ESLint-approved code:
const meaningfulName = 5;
const result = meaningfulName * 2;
return result;
```

**Configuration breakdown:**

```json
{
  "env": {
    "browser": true, // Allow browser globals (window, document)
    "es2021": true, // Enable ES2021 features
    "node": true // Allow Node.js globals (process, require)
  },
  "extends": [
    "eslint:recommended", // Use ESLint's recommended rules
    "prettier" // Disable formatting rules (Prettier handles that)
  ],
  "rules": {
    "no-console": "warn", // Warn about console.log (not error)
    "prefer-const": "error", // Force const when variable isn't reassigned
    "no-var": "error" // Ban 'var', use let/const instead
  }
}
```

### Prettier - Code Formatter

**Purpose:** Makes code look consistent.

**What it fixes:**

```javascript
// Before Prettier:
function foo() {
  return 5 + 3;
}

// After Prettier:
function foo() {
  return 5 + 3;
}
```

**Configuration breakdown:**

```json
{
  "semi": true, // Add semicolons
  "singleQuote": true, // Use 'quotes' not "quotes"
  "tabWidth": 2, // 2 spaces per indent
  "trailingComma": "es5", // Add commas where ES5 allows
  "printWidth": 80, // Wrap lines at 80 characters
  "arrowParens": "always" // (x) => x, not x => x
}
```

### Stylelint - CSS Linter

**Purpose:** Enforces CSS best practices.

**What it catches:**

```css
/* ❌ Bad CSS Stylelint catches: */
.class {
  color: #ffffff; /* Should be #fff (hex-length: short) */
  color: red; /* Should use hex (color-named: never) */
  margin: 10px !important; /* No !important (declaration-no-important) */
}

/* ✅ Stylelint-approved CSS: */
.class {
  color: #fff;
  margin: 10px;
}
```

**Configuration breakdown:**

```json
{
  "extends": [
    "stylelint-config-standard", // Standard CSS rules
    "stylelint-prettier/recommended" // Integrate with Prettier
  ],
  "rules": {
    "color-hex-length": "short", // #fff not #ffffff
    "color-named": "never", // #f00 not red
    "declaration-no-important": true // Ban !important
  }
}
```

### Husky - Git Hooks Manager

**Purpose:** Runs scripts automatically on Git events.

**How it works:**

```
You run: git commit
    ↓
Husky intercepts
    ↓
Runs: .husky/pre-commit script
    ↓
Script runs: npx lint-staged
    ↓
If successful: Commit proceeds
If fails: Commit blocked
```

**Setup:**

```bash
npx husky install           # Enable Git hooks
npx husky add .husky/pre-commit "npx lint-staged"
```

### lint-staged - Selective Linting

**Purpose:** Only lint files you're committing (not the entire project).

**Why it matters:**

- ⚡ **Fast** - Only checks changed files
- 🎯 **Relevant** - Only your changes need to pass
- 👥 **Team-friendly** - Don't block commits for old code

**Configuration:**

```json
{
  "*.{js,mjs,cjs}": [
    "eslint --fix", // Fix auto-fixable issues
    "prettier --write" // Format the file
  ],
  "*.css": ["stylelint --fix", "prettier --write"],
  "*.{html,json,md}": [
    "prettier --write" // Just format these
  ]
}
```

### Lighthouse CI - Performance Testing

**Purpose:** Ensures your site is fast, accessible, and follows best practices.

**What it measures:**

1. **Performance (90+ required)**
   - First Contentful Paint (FCP) - When first content appears
   - Largest Contentful Paint (LCP) - When main content loads
   - Time to Interactive (TTI) - When page is usable
   - Total Blocking Time (TBT) - How long page is frozen

2. **Accessibility (90+ required)**
   - Color contrast ratios
   - Alt text on images
   - Keyboard navigation
   - Screen reader compatibility

3. **Best Practices (90+ required)**
   - HTTPS usage
   - No console errors
   - Modern image formats
   - No vulnerable libraries

4. **SEO (90+ required)**
   - Meta descriptions
   - Mobile-friendly
   - Readable font sizes
   - Valid robots.txt

**Configuration:**

```json
{
  "ci": {
    "collect": {
      "staticDistDir": "./_site" // Test the built site
    },
    "assert": {
      "categories:performance": ["error", { "minScore": 0.9 }],
      "first-contentful-paint": ["warn", { "maxNumericValue": 2000 }]
    }
  }
}
```

---

## Common Challenges & Solutions

### Challenge 1: Pre-commit Hooks Not Running

**Symptom:** Changes commit without linting.

**Diagnosis:**

```bash
# Check if Husky is installed
ls -la .husky

# Check if pre-commit script exists
cat .husky/pre-commit

# Check if it's executable
ls -l .husky/pre-commit
```

**Solution:**

```bash
# Reinstall Husky
npm run prepare

# Make pre-commit executable
chmod +x .husky/pre-commit

# Test it
git commit --allow-empty -m "Test commit"
```

**AI Prompt:**

> "My pre-commit hooks aren't running. Here's my .husky/pre-commit file: [paste
>
> > content]. What's wrong?"

### Challenge 2: ESLint and Prettier Conflicts

**Symptom:** ESLint complains about formatting that Prettier handles.

**Diagnosis:**

```bash
# Check if eslint-config-prettier is installed
npm ls eslint-config-prettier
```

**Solution:**

- Ensure `"prettier"` is last in ESLint's `extends` array
- This disables ESLint formatting rules

**AI Prompt:**

> "ESLint is complaining about formatting issues that Prettier should handle. My
> .eslintrc.json: [paste]. How do I fix conflicts?"

### Challenge 3: Stylelint Errors

**Symptom:** CSS that looks fine triggers errors.

**Common issues:**

```css
/* Error: Unknown property */
.class {
  background: linear-gradient(...); /* Might need specific syntax */
}

/* Error: Unexpected empty source */
/* Empty CSS file */

/* Error: Expected selector before "{" */
.class {
  /* Opening brace on new line not allowed in some configs */
}
```

**Solution:**

```bash
# Auto-fix what's fixable
npx stylelint "src/**/*.css" --fix

# Check specific file
npx stylelint src/assets/css/main.css
```

**AI Prompt:**

> "I'm getting Stylelint errors: [paste errors]. My CSS: [paste code]. How do I
> fix this?"

### Challenge 4: Build Fails in CI but Works Locally

**Symptom:** `npm test` passes locally but fails on GitHub Actions.

**Common causes:**

1. Different Node.js versions
2. Missing environment variables
3. Case-sensitive file paths (Mac/Windows vs Linux)

**Solution:**

1. Check Node.js version:

```yaml
# In .github/workflows/ci-cd.yml
- uses: actions/setup-node@v4
  with:
    node-version: '20' # Match your local version
```

2. Test with clean install:

```bash
rm -rf node_modules package-lock.json
npm install
npm test
```

**AI Prompt:**

> "My build passes locally but fails in GitHub Actions with this error: [paste >
>
> > error]. My workflow file: [paste]. What's different between local and CI?"

### Challenge 5: Lighthouse Scores Below 90

**Symptom:** Lighthouse CI fails due to low scores.

**Common issues and fixes:**

**Performance issues:**

```css
/* Before: Large images slow down load */
img {
  width: 100%;
}

/* After: Responsive images with max-width */
img {
  max-width: 100%;
  height: auto;
  loading: lazy; /* Lazy load offscreen images */
}
```

**Accessibility issues:**

```html
<!-- Before: No alt text -->
<img src="logo.png" />

<!-- After: Descriptive alt text -->
<img src="logo.png" alt="Company logo" />
```

**AI Prompt:**

> "My Lighthouse performance score is 75. The main issues are: [paste issues].
> How do I optimize for 90+?"

### Challenge 6: VS Code Not Auto-Formatting

**Symptom:** Saving files doesn't format them.

**Diagnosis:**

1. Check if Prettier extension is installed
2. Check VS Code settings
3. Check if `.prettierrc` exists

**Solution:**

1. Install Prettier extension:
   - Open VS Code Extensions (Cmd+Shift+X)
   - Search "Prettier"
   - Install "Prettier - Code formatter"

2. Check settings:

```json
// .vscode/settings.json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode"
}
```

3. Verify Prettier recognizes config:

```bash
npx prettier --check src/**/*.js
```

**AI Prompt:**

> "VS Code isn't auto-formatting on save. My settings.json: [paste]. Is Prettier
> configured correctly?"

---

## Assessment & Learning Outcomes

### Skills Checklist

After completing this project, you should be able to:

#### Foundational Skills

- [ ] Explain what static site generation is and why it's useful
- [ ] Describe the difference between linting and formatting
- [ ] Understand how pre-commit hooks prevent bad code
- [ ] Explain the CI/CD pipeline flow

#### Tool Proficiency

- [ ] Install and configure ESLint for JavaScript
- [ ] Install and configure Prettier for code formatting
- [ ] Install and configure Stylelint for CSS
- [ ] Set up Husky and lint-staged for pre-commit hooks
- [ ] Create GitHub Actions workflows for CI/CD
- [ ] Configure Lighthouse CI for performance testing

#### Eleventy/11ty Mastery

- [ ] Create an Eleventy project from scratch
- [ ] Use Nunjucks templates effectively
- [ ] Create layouts and partials
- [ ] Pass data to templates
- [ ] Configure passthrough copy for assets
- [ ] Generate sitemaps automatically

#### AI Prompting Skills

- [ ] Write specific, constraint-based prompts
- [ ] Request explanations, not just code
- [ ] Iterate in logical steps
- [ ] Debug with AI using complete context
- [ ] Ask for configuration before implementation

#### Web Development Best Practices

- [ ] Write semantic HTML5
- [ ] Create responsive CSS without frameworks
- [ ] Write modern JavaScript (ES2021+)
- [ ] Optimize for performance (Lighthouse scores)
- [ ] Ensure accessibility (WCAG compliance)
- [ ] Implement proper SEO (meta tags, sitemap, robots.txt)

### Project Rubric

| Category                   | Criteria                                   | Points         |
| -------------------------- | ------------------------------------------ | -------------- |
| **Project Setup (15 pts)** | Correct package.json with all dependencies | 5              |
|                            | All configuration files present and valid  | 5              |
|                            | Project structure follows conventions      | 5              |
| **Code Quality (30 pts)**  | All JavaScript passes ESLint               | 10             |
|                            | All CSS passes Stylelint                   | 10             |
|                            | All files formatted with Prettier          | 10             |
| **Functionality (25 pts)** | Site builds successfully                   | 10             |
|                            | All pages load and display correctly       | 10             |
|                            | Navigation works, links are valid          | 5              |
| **Quality Gates (20 pts)** | Pre-commit hooks working                   | 5              |
|                            | GitHub Actions workflow runs               | 10             |
|                            | Lighthouse scores 90+ in all categories    | 5              |
| **Documentation (10 pts)** | README explains setup and usage            | 5              |
|                            | Code has appropriate comments              | 5              |
| **Total**                  |                                            | **100 points** |

### Reflection Questions

Answer these to demonstrate understanding:

1. **Linting vs Formatting**
   - What's the difference between ESLint and Prettier?
   - Why do we need both?
   - Give an example of what each tool catches.

2. **Pre-commit Hooks**
   - What happens when you run `git commit`?
   - Why block commits that fail linting?
   - What's the benefit of lint-staged over running all linters?

3. **CI/CD Pipeline**
   - Describe each job in the GitHub Actions workflow.
   - Why run quality checks before building?
   - What happens if Lighthouse CI fails?

4. **AI Prompting**
   - What makes a good prompt for an AI coding assistant?
   - How did you debug issues with AI help?
   - What would you prompt differently next time?

5. **Web Performance**
   - What does Lighthouse measure?
   - How did you optimize for 90+ scores?
   - Why does performance matter for users?

### Extension Challenges

Ready for more? Try these:

#### Challenge 1: Add Unit Tests

- Install Jest or Vitest
- Write tests for JavaScript functions
- Add test job to GitHub Actions
- Achieve 80%+ code coverage

**AI Prompt:**

> "Add Jest unit testing to this Eleventy project. Create tests for any utility
> functions, configure Jest for ES modules, and add a test job to GitHub
> Actions."

#### Challenge 2: Add E2E Tests

- Install Playwright
- Write tests for navigation and forms
- Run E2E tests in CI/CD
- Generate test reports

**AI Prompt:**

> "Add Playwright E2E testing. Test that: homepage loads, navigation works, 404
> page appears for invalid URLs. Configure for GitHub Actions."

#### Challenge 3: Advanced Accessibility

- Install axe-core CLI
- Add automated accessibility tests
- Fix any issues found
- Document accessibility features

**AI Prompt:**

> "Add axe-core accessibility testing. Create npm script to test built site, add
> to CI/CD, and ensure WCAG 2.1 AA compliance."

#### Challenge 4: Optimize Performance

- Compress images with sharp
- Minify HTML with html-minifier
- Inline critical CSS
- Achieve 95+ Lighthouse scores

**AI Prompt:**

> "Optimize this site for 95+ Lighthouse performance. Add image compression,
> HTML minification, and critical CSS inlining to the build process."

#### Challenge 5: Add Blog

- Create blog collection in Eleventy
- Add pagination
- Generate RSS feed
- Style blog posts with syntax highlighting

**AI Prompt:**

> "Add a blog to this Eleventy site with: markdown posts in src/blog/,
> pagination (5 posts per page), RSS feed, and syntax highlighting for code
> blocks."

---

## Resources for Further Learning

### Official Documentation

- [Eleventy](https://www.11ty.dev/docs/) - Static site generator
- [ESLint](https://eslint.org/docs/latest/) - JavaScript linter
- [Prettier](https://prettier.io/docs/en/) - Code formatter
- [Stylelint](https://stylelint.io/) - CSS linter
- [Husky](https://typicode.github.io/husky/) - Git hooks
- [Lighthouse](https://developer.chrome.com/docs/lighthouse/) - Performance
  testing

### Web Standards

- [MDN Web Docs](https://developer.mozilla.org/) - HTML, CSS, JavaScript
  reference
- [WCAG Guidelines](https://www.w3.org/WAI/WCAG21/quickref/) - Accessibility
  standards
- [Web.dev](https://web.dev/) - Performance and best practices

### AI Prompting

- [OpenAI Prompt Engineering](https://platform.openai.com/docs/guides/prompt-engineering) -
  Prompting techniques
- [Anthropic Prompt Library](https://docs.anthropic.com/claude/prompt-library) -
  Example prompts

### Git & GitHub

- [Pro Git Book](https://git-scm.com/book/en/v2) - Comprehensive Git guide
- [GitHub Actions Documentation](https://docs.github.com/en/actions) - CI/CD
  automation
- [GitHub Pages Documentation](https://docs.github.com/en/pages) - Static site
  hosting

---

## Conclusion

You've now learned how to:

✅ Build a professional static website with Eleventy ✅ Enforce code quality
standards automatically ✅ Use AI coding assistants effectively ✅ Deploy with
CI/CD to GitHub Pages ✅ Optimize for performance and accessibility ✅ Maintain
standards through multiple layers of validation

**Key Takeaway:** Code quality gates aren't obstacles—they're guardrails that
help you (and AI) produce better code faster. By automating standards
enforcement, you can focus on building features while maintaining professional
quality.

### Next Steps

1. ✅ Complete the project following this guide
2. 📝 Answer the reflection questions
3. 🚀 Deploy your site to GitHub Pages
4. 🎯 Try extension challenges
5. 📚 Explore related technologies (React, TypeScript, etc.)

**Remember:** The best way to learn is by doing. Use your AI assistant, but
understand what it creates. Ask "why" not just "how."

---

**Happy coding!** 🚀

_"Code as Textbook" - Learn by building, build by learning._
