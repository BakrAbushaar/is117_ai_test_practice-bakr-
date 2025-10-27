# Lesson 5: Build with Eleventy 🏗️

⏱️ **Time:** Reading: 7 min | Practice: 10 min | Total: ~17 min 📚 **Level:**
Beginner 🎯 **Goal:** Understand how Eleventy transforms Markdown into a static
website

---

## 🚀 TL;DR

Eleventy reads Markdown files from `src/`, applies layouts from
`src/_includes/`, and outputs HTML to `_site/`. It's like a document converter
that creates a complete website.

---

## 🤔 What Is Eleventy?

**Eleventy (11ty)** is a **static site generator**.

**What that means:**

- **Input:** Markdown files (easy to write)
- **Output:** HTML files (ready for web)
- **Magic:** Templates + Layouts = Complete Website

**Why use it?**

- Write content in Markdown (simple)
- Get professional HTML (complex)
- No database needed
- Super fast websites
- Easy to deploy

---

## 📁 Eleventy Project Structure

```
is117_ai_test_practice/
├── src/                    # Source files (you edit these)
│   ├── _includes/          # Layouts & templates
│   │   └── base.njk        # Main layout wrapper
│   ├── css/                # Styles
│   │   └── style.css       # Main stylesheet
│   ├── js/                 # JavaScript
│   │   └── main.js         # Main script
│   ├── index.md            # Home page
│   ├── about.md            # About page
│   └── 404.md              # Error page
├── _site/                  # Built files (Eleventy creates these)
│   ├── index.html          # Generated home page
│   ├── about/index.html    # Generated about page
│   └── css/style.css       # Copied styles
├── .eleventy.js            # Eleventy configuration
└── package.json            # Project configuration
```

**Key Concept:** You ONLY edit files in `src/`. Eleventy builds `_site/`.

---

## 🔄 The Build Process

### Step 1: You Write Markdown

**File:** `src/about.md`

```markdown
---
layout: base.njk
title: About Us
---

# About This Project

This is a quality-first web development course.
```

---

### Step 2: Eleventy Applies Layout

**File:** `src/_includes/base.njk`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>{{ title }}</title>
    <link rel="stylesheet" href="/css/style.css" />
  </head>
  <body>
    {{ content | safe }}
  </body>
</html>
```

---

### Step 3: Eleventy Outputs HTML

**File:** `_site/about/index.html`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>About Us</title>
    <link rel="stylesheet" href="/css/style.css" />
  </head>
  <body>
    <h1>About This Project</h1>
    <p>This is a quality-first web development course.</p>
  </body>
</html>
```

**✨ Markdown → Layout → HTML!**

---

## 📝 Markdown Front Matter

**Front matter** = Metadata at the top of Markdown files

```markdown
---
layout: base.njk
title: My Page Title
description: Page description for SEO
---

# Page Content Starts Here
```

**Required fields:**

- `layout` - Which template to use
- `title` - Page title (shows in browser tab)

**Optional fields:**

- `description` - SEO description
- `tags` - For organizing content
- `date` - For blog posts

---

## 🎨 Layouts & Templates

### What's a Layout?

A **layout** wraps your content with HTML structure.

**Think of it like:**

- Content = Picture
- Layout = Picture Frame

### Base Layout (base.njk)

**Location:** `src/_includes/base.njk`

**What it does:**

- Adds `<!DOCTYPE html>` and `<html>` tags
- Links to CSS and JavaScript
- Includes navigation
- Wraps your content in proper HTML structure

**Key Variables:**

- `{{ title }}` - Page title from front matter
- `{{ content | safe }}` - Your Markdown content (converted to HTML)

---

## 🏃 Running Eleventy

### Development Mode (Live Reload)

```bash
npm start
```

**What this does:**

1. Builds `_site/` from `src/`
2. Starts local server at <http://localhost:8080>
3. Watches for file changes
4. Rebuilds automatically when you save

**Output:**

```bash
[11ty] Writing _site/index.html from ./src/index.md
[11ty] Writing _site/about/index.html from ./src/about.md
[11ty] Wrote 3 files in 0.08 seconds
[11ty] Watching…
[11ty] Server at http://localhost:8080/is117_ai_test_practice/
```

**Use this when:** Actively developing and want to see changes instantly

---

### Production Build (One-Time)

```bash
npm run build
```

**What this does:**

1. Cleans `_site/` directory
2. Builds from `src/` with production settings
3. Exits (doesn't watch)

**Use this when:**

- Testing final build
- Before deploying to GitHub Pages
- Running in CI/CD pipeline

---

## ⚙️ Eleventy Configuration

**File:** `.eleventy.js`

**What it does:** Tells Eleventy how to build your site

**Key settings in our project:**

```javascript
module.exports = function (eleventyConfig) {
  // Copy CSS and JS to _site without processing
  eleventyConfig.addPassthroughCopy('src/css');
  eleventyConfig.addPassthroughCopy('src/js');

  return {
    dir: {
      input: 'src', // Read from src/
      output: '_site', // Write to _site/
      includes: '_includes', // Layouts in src/_includes/
    },
    pathPrefix: '/is117_ai_test_practice/', // GitHub Pages path
  };
};
```

**Don't edit this unless:** You know what you're doing or following specific
instructions

---

## 📄 Creating New Pages

### Option 1: Simple Page

**File:** `src/contact.md`

```markdown
---
layout: base.njk
title: Contact Us
---

# Get In Touch

Email: student@example.com
```

**Result:** New page at `/contact/`

---

### Option 2: Page in Subdirectory

**File:** `src/blog/my-first-post.md`

```markdown
---
layout: base.njk
title: My First Blog Post
date: 2025-10-27
---

# My First Post

This is my first blog post!
```

**Result:** New page at `/blog/my-first-post/`

---

## 🎨 Adding Styles

### Option 1: Edit Existing CSS (Preferred - DRY!)

**File:** `src/css/style.css`

```css
/* Add to existing file - don't duplicate! */
.contact-form {
  max-width: 600px;
  margin: 0 auto;
}
```

**✅ DRY:** Check if similar styles exist before adding new ones!

---

### Option 2: New Stylesheet (Only if Needed)

**File:** `src/css/contact.css`

```css
/* Only create new file if logically separate */
.contact-specific-style {
  color: blue;
}
```

**Add to layout:**

```html
<link rel="stylesheet" href="/css/contact.css" />
```

**⚠️ Warning:** Creating multiple CSS files can lead to duplication. Prefer one
main stylesheet.

---

## 🔍 How to Check Existing Code (Prevent Duplication!)

### Before Adding CSS:

```bash
# Search existing styles
grep -r "max-width" src/css/
grep -r "display: flex" src/css/
```

### Before Adding JavaScript:

```bash
# Search existing functions
grep -r "function" src/js/
grep -r "addEventListener" src/js/
```

### Before Adding HTML Structure:

```bash
# Search existing layouts
cat src/_includes/base.njk
```

**Golden Rule:** **CHECK → REUSE → ONLY THEN CREATE NEW**

---

## 🚨 Common Build Errors

### Error: "Cannot find module 'eleventy'"

**Fix:**

```bash
npm install
```

**Cause:** Dependencies not installed

---

### Error: "Layout not found"

**Fix:**

Check front matter in your Markdown:

```markdown
---
layout: base.njk # Must match file in _includes/
---
```

**Cause:** Typo in layout name or file doesn't exist

---

### Error: "ENOENT: no such file or directory"

**Fix:**

Check file paths in `.eleventy.js`:

```javascript
dir: {
  input: "src",        # Make sure src/ exists
  output: "_site",     # Eleventy creates this
  includes: "_includes"  # Must be in src/_includes/
}
```

**Cause:** Incorrect directory configuration

---

### Error: Port 8080 already in use

**Fix:**

```bash
# Kill existing process
lsof -i :8080  # Find PID
kill -9 [PID]  # Kill it

# Or use different port
npx eleventy --serve --port=8081
```

---

## 💡 Pro Tips

### Tip 1: Use Live Reload

Keep `npm start` running while coding. Save files and see instant updates in
browser!

### Tip 2: Check Build Output

Look at `_site/` after building to see exactly what gets deployed:

```bash
npm run build
ls -la _site/
cat _site/index.html  # See generated HTML
```

### Tip 3: Use Markdown Preview

VS Code has built-in Markdown preview:

- Open `.md` file
- Press `Cmd+Shift+V` (Mac) or `Ctrl+Shift+V` (Windows/Linux)
- See formatted preview

### Tip 4: Learn Nunjucks Basics

Templates use **Nunjucks** syntax:

```nunjucks
{{ variable }}           // Output variable
{% if condition %}       // Conditional
{% for item in items %}  // Loop
```

[Nunjucks Documentation](https://mozilla.github.io/nunjucks/)

---

## 🎮 Quick Practice Activity (2 minutes)

**Create a new page:**

1. Create `src/projects.md`:

```markdown
---
layout: base.njk
title: My Projects
---

# My Projects

Here are some cool projects I'm working on!
```

2. Build: `npm start`
3. Visit: <http://localhost:8080/is117_ai_test_practice/projects/>
4. See your new page! ✅

**Working?** You understand Eleventy!

---

## 🆘 Need Help?

### 🤖 AI Assistance (Copy-Paste Prompts)

Stuck? Use these ready-made prompts with AI assistants:

- **[Building Pages Prompts](../prompts/building-pages.md)** - Create new pages
  with DRY enforcement
- **[Debugging Prompts](../prompts/debugging.md)** - Fix build errors
- **[Configuration Prompts](../prompts/configuration.md)** - Setup Eleventy

### � Documentation

- [Eleventy Official Docs](https://www.11ty.dev/docs/)
- [Front Matter Guide](https://www.11ty.dev/docs/data-frontmatter/)
- [Nunjucks Templates](https://mozilla.github.io/nunjucks/)

---

## ✅ Verification Checklist

Before moving to the next lesson, verify:

- [ ] Understand `src/` vs `_site/` difference
- [ ] Know what front matter is
- [ ] Can create new Markdown pages
- [ ] Can run development server (`npm start`)
- [ ] Can build for production (`npm run build`)
- [ ] Understand layouts wrap content
- [ ] Know to check existing CSS before adding new
- [ ] Can find generated HTML in `_site/`
- [ ] Understand pathPrefix for GitHub Pages
- [ ] Can debug common build errors

**All checked?** Ready for Lesson 6! 🎉

---

## 🧠 Knowledge Check

Test your understanding before moving on:

### 1. What files should you edit when adding content?

a) Files in `_site/` directory b) Files in `src/` directory ✅ c) Files in
`node_modules/` d) The `.eleventy.js` file

**Explanation:** Always edit files in `src/`. The `_site/` folder is generated
by Eleventy and gets overwritten on every build.

---

### 2. What is front matter?

a) The header navigation of your site b) YAML metadata at the top of Markdown
files ✅ c) The first paragraph of content d) CSS styles for headings

**Explanation:** Front matter is YAML data between `---` delimiters that
provides information like layout, title, and other metadata.

---

### 3. What does the `npm start` command do?

a) Installs dependencies b) Runs development server with live reload ✅ c)
Deploys to GitHub Pages d) Formats your code

**Explanation:** `npm start` runs Eleventy in development mode, watches for
changes, and provides live reload at <http://localhost:8080>.

---

### 4. Before adding new CSS, you should:

a) Just create a new stylesheet b) Check if similar styles already exist ✅ c)
Delete all existing CSS d) Ask permission from instructor

**Explanation:** Following DRY principles, always check existing CSS first.
Reuse what exists, extend if needed, only create new when necessary.

---

### 5. What happens to files in `_site/` when you run `npm run build`?

a) They are backed up b) They are committed to Git c) They are completely
regenerated ✅ d) Nothing happens to them

**Explanation:** The `_site/` directory is deleted and rebuilt on every build.
Never edit files there directly—edit in `src/` instead.

---

## 📚 Key Takeaways

### ✅ DO:

- Edit files in `src/` only
- Use front matter in Markdown files
- Check existing CSS before creating new
- Keep `npm start` running while developing
- Look at `_site/` to see what gets deployed

### ❌ DON'T:

- Edit files in `_site/` (gets overwritten!)
- Create multiple CSS files unnecessarily
- Duplicate existing styles
- Edit `.eleventy.js` without understanding it
- Forget to set layout in front matter

---

## 📊 Progress Tracker

You've completed:

- [x] ~~Lesson 1: What Is This Project?~~
- [x] ~~Lesson 2: Why Quality Gates?~~
- [x] ~~Lesson 3: Prompt Engineering Basics~~
- [x] ~~Lesson 4: Setup Your Environment~~
- [x] ~~Lesson 5: Build with Eleventy~~
- [ ] Lesson 6: ESLint & Prettier
- [ ] Lessons 7-10...

---

## 🚀 Next Steps

Now that you understand Eleventy, let's set up code quality tools!

### [👉 Continue to Lesson 6: ESLint & Prettier](06-eslint-prettier.md)

---

## 🔗 Quick Links

- [🏠 Back to Course Index](../../README.md)
- [📝 Building Pages Prompts](../prompts/building-pages.md)
- [📚 File Structure Guide](../reference/file-structure.md)

---

**You're now an Eleventy builder!** 🏗️✨
