# Copy-Paste Prompts: Initial Setup 🚀

⏱️ **Time:** Complete setup in 10 minutes 🎯 **Goal:** Get your development
environment ready with minimal typing

---

## 🚀 TL;DR

Copy these prompts into your AI assistant to set up your project. Edit the parts
in `[BRACKETS]` with your specific values.

---

## 📋 Before You Start

Make sure you have installed:

- [ ] Node.js 20 or higher
- [ ] Git
- [ ] A code editor (VS Code recommended)
- [ ] An AI coding assistant (GitHub Copilot, ChatGPT, Claude, etc.)

---

## 🎯 Setup Sequence

### Step 1: Fork and Clone the Repository

#### Prompt:

```
I want to fork and clone the repository at https://github.com/kaw393939/is117_ai_test_practice

Explain the steps to:
1. Fork the repository to my GitHub account
2. Clone my forked repository locally
3. Verify the setup worked

Provide exact terminal commands for macOS/Linux.
```

#### What You'll Get:

- Instructions to fork on GitHub
- `git clone` command
- Verification steps

---

### Step 2: Install Dependencies

#### Prompt:

```
I just cloned an Eleventy project. The package.json includes:
- Eleventy 2.0.1
- ESLint
- Prettier
- Stylelint
- Husky
- lint-staged

What command do I run to install all dependencies?
What does npm install actually do?
How do I know if it worked?
```

#### What You'll Get:

- `npm install` command
- Explanation of what gets installed
- How to verify success

---

### Step 3: Explore the Project Structure

#### Prompt:

```
I have an Eleventy project with this structure:

```

project/ ├── src/ │ ├── \_layouts/ │ ├── \_data/ │ └── styles/ ├── .eleventy.js
├── package.json └── .eslintrc.json

```

Explain what each directory and file does.
Keep explanations to 1-2 sentences each.
```

#### What You'll Get:

- Quick overview of project structure
- Purpose of each key file
- How files work together

---

### Step 4: Run the Development Server

#### Prompt:

```
I want to run my Eleventy site locally for development.

My package.json has these scripts:
- "start": "eleventy --serve"
- "build": "eleventy"
- "test": "npm run lint"

Which command starts the dev server?
What URL do I visit in my browser?
How do I stop the server?
```

#### What You'll Get:

- `npm start` command
- localhost URL
- How to stop (Ctrl+C)

---

### Step 5: Verify Quality Tools Work

#### Prompt:

```
My project has ESLint, Prettier, Stylelint, and pre-commit hooks set up.

How do I test that each tool is working correctly?
Provide specific commands to run each tool.
What output indicates success vs errors?
```

#### What You'll Get:

- Commands to test each linter
- How to interpret results
- What "passing" looks like

---

## 🎨 Customization Prompts

### Customize Site Metadata

#### Prompt:

```
I need to update my Eleventy site's metadata in src/_data/site.js

Current values are placeholder text. I want to change:
- title: "[YOUR_SITE_TITLE]"
- description: "[YOUR_DESCRIPTION]"
- author: "[YOUR_NAME]"
- url: "[YOUR_GITHUB_PAGES_URL]"

Show me the updated site.js file with my values.
Explain what each field is used for in the templates.
```

**Remember to replace `[BRACKETS]` with your actual information!**

---

### Update pathPrefix for Your Repository

#### Prompt:

````
I forked the repository to my GitHub account: [YOUR_GITHUB_USERNAME]
My repository name is: [YOUR_REPO_NAME]

The .eleventy.js file has:
```javascript
pathPrefix: "/is117_ai_test_practice/";
````

What should I change this to for my forked repository? Why does Eleventy need
this for GitHub Pages?

```

**Example:** If your username is `janedoe` and repo is `my-eleventy-site`, your pathPrefix should be `/my-eleventy-site/`

---

### Enable GitHub Pages

#### Prompt:

```

7. Navigate to your new repository on GitHub (the URL will be shown after
   creation, typically `https://github.com/YOUR_USERNAME/YOUR_REPO_NAME`)

```

---

## 🐛 Troubleshooting Prompts

### If npm install Fails

#### Prompt:

```

I ran `npm install` and got this error:

[PASTE YOUR FULL ERROR MESSAGE HERE]

My environment:

- Operating System: [macOS/Windows/Linux]
- Node.js version: [run `node --version`]
- npm version: [run `npm --version`]

What's causing this error and how do I fix it?

```

---

### If Dev Server Won't Start

#### Prompt:

```

I ran `npm start` but the dev server won't start.

Error message: [PASTE ERROR HERE]

Expected: Server should start on <http://localhost:8080> Actual: [WHAT'S
HAPPENING]

How do I fix this?

```

---

### If Pre-commit Hook Blocks Commit

#### Prompt:

```

I tried to commit my changes with `git commit -m "my message"` but the
pre-commit hook blocked it with these errors:

[PASTE ERROR OUTPUT]

How do I:

1. Understand what these errors mean
2. Fix them automatically if possible
3. Verify the fixes before committing again

```

---

### If GitHub Actions Fails

#### Prompt:

```

I pushed to GitHub but the Actions workflow failed.

Workflow: [quality-checks / build / lighthouse / deploy] Error log: [PASTE
RELEVANT SECTION]

My pathPrefix in .eleventy.js: "[YOUR_PATH_PREFIX]" My GitHub Pages settings:
[describe settings]

What went wrong and how do I fix it?

```

---

## 🔧 Configuration Prompts

### Customize ESLint Rules

#### Prompt:

```

My .eslintrc.json currently has these rules: [PASTE YOUR CURRENT CONFIG]

I want to:

- [CHANGE_1: e.g., "Allow console.log in development"]
- [CHANGE_2: e.g., "Enforce semicolons"]
- [CHANGE_3: e.g., "Set max line length to 100"]

Show me the updated configuration. Explain what each rule change does.

```

---

### Add More File Types to Prettier

#### Prompt:

```

My .prettierrc currently formats JavaScript, CSS, and Markdown.

I want to also format:

- [FILE_TYPE_1: e.g., JSON]
- [FILE_TYPE_2: e.g., YAML]

How do I:

1. Update Prettier configuration
2. Update .lintstagedrc.json to format these in pre-commit
3. Test that it works

```

---

### Customize Husky Hooks

#### Prompt:

```

My project uses Husky for pre-commit hooks.

Current pre-commit hook runs: lint-staged

I want to also run:

- [TASK_1: e.g., "Run tests"]
- [TASK_2: e.g., "Check for large files"]

How do I update .husky/pre-commit to include these? Will this slow down commits
significantly?

```

---

## 📊 Verification Prompts

### Check Everything is Working

#### Prompt:

```

I've completed the initial setup. Help me verify everything works:

Checklist:

- [ ] Dependencies installed
- [ ] Dev server runs
- [ ] ESLint passes
- [ ] Prettier formats code
- [ ] Stylelint passes
- [ ] Pre-commit hooks work
- [ ] Build succeeds
- [ ] Site deployed to GitHub Pages

For each item, provide:

1. Command to verify
2. Expected output for success
3. What to do if it fails

```

---

## 🎯 Next Steps Prompt

#### After Setup is Complete:

```

I've successfully set up my Eleventy project with quality gates.

Now I want to:

1. Create a new page
2. Add custom styles
3. Ensure it passes all quality checks

Walk me through creating my first custom page from scratch. Show me the complete
workflow from creation to deployment.

```

---

## 💡 Pro Tips

### Tip 1: Save Your Prompts

Create a `PROMPTS.md` file in your project and save prompts that worked well for you.

### Tip 2: Modify, Don't Memorize

You don't need to remember these. Bookmark this page and copy-paste as needed.

### Tip 3: Include Context

When using these prompts, always paste relevant error messages, file contents, or configuration when asked.

### Tip 4: Iterate

If the first response isn't quite right, follow up with:

```

"That's close, but I need [SPECIFIC_CHANGE]"

````

---

## 📋 Quick Command Reference

Once setup is complete, you'll use these commands:

```bash
# Start development server
npm start

# Run all linters
npm test

# Format all code
npm run format

# Build for production
npm run build

# Commit changes (triggers pre-commit hooks)
git add .
git commit -m "Your message"

# Push to GitHub (triggers CI/CD)
git push
````

---

## 🔗 Related Resources

- [📚 Lesson 4: Setup Your Environment](../lessons/04-setup-your-environment.md)
- [📝 Configuration Prompts](configuration.md)
- [🐛 Debugging Prompts](debugging.md)
- [📖 File Structure Reference](../reference/file-structure.md)

---

## 🎊 Completion Checklist

Mark these off as you complete each setup step:

- [ ] Forked repository on GitHub
- [ ] Cloned repository locally
- [ ] Ran `npm install` successfully
- [ ] Started dev server with `npm start`
- [ ] Viewed site at <http://localhost:8080>
- [ ] Ran `npm test` (all linters pass)
- [ ] Updated site metadata in `src/_data/site.js`
- [ ] Updated `pathPrefix` in `.eleventy.js`
- [ ] Pushed to GitHub
- [ ] Enabled GitHub Pages
- [ ] Verified deployment at GitHub Pages URL

---

**🎉 Setup complete! Ready to build your first page?**

### [👉 Go to Building Pages Prompts](building-pages.md)

---

**Remember:** These prompts are templates. Customize them with your specific
information for best results! 🎯
