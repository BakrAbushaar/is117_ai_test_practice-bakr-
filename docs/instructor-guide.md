# 🎓 Instructor Guide

**For educators using this course content**

This guide provides teaching strategies, suggested activities, assessment ideas,
and ways to adapt the content for your classroom.

---

## 📚 Course Overview

### What This Course Teaches

**Core Skills:**

- AI-assisted development with quality assurance
- Static site generation with Eleventy
- Automated testing and deployment (CI/CD)
- Code quality enforcement (linting, formatting)
- DRY (Don't Repeat Yourself) principles

**Time Commitment:**

- **Self-paced reading:** ~2-3 hours
- **Hands-on practice:** ~3-5 hours
- **Full project completion:** ~6-8 hours total

**Prerequisites:**

- Basic HTML/CSS knowledge helpful but not required
- GitHub account (free)
- Computer with internet access

---

## 🎯 Learning Outcomes

By completing this course, students will be able to:

1. **Use AI coding assistants effectively** while maintaining code quality
2. **Build and deploy** a static website with automated workflows
3. **Implement quality gates** to catch errors automatically
4. **Apply DRY principles** to prevent code duplication
5. **Use modern development tools** (Git, GitHub Actions, linters)
6. **Debug common issues** systematically

---

## 🏫 Classroom Integration Options

### Option 1: Self-Paced Individual Learning (Minimal Instructor Time)

**Use case:** Supplement to existing web development course

**How it works:**

1. Assign lessons as homework
2. Students complete at their own pace
3. Weekly check-ins via discussion board
4. Final project showcase at end of term

**Instructor time:** 1-2 hours/week

**Benefits:**

- Flexible for diverse student schedules
- Students can replay/review content
- Works for online or hybrid classes

---

### Option 2: Flipped Classroom (Moderate Instructor Time)

**Use case:** Primary curriculum with guided practice

**How it works:**

1. **Pre-class:** Students read lesson and watch any linked videos
2. **In-class:** Live coding session applying the concepts
3. **Practice:** Students work on exercises while instructor circulates
4. **Wrap-up:** Common issues discussion and next lesson preview

**Example Schedule (10 weeks, 2 hours/week):**

| Week | Pre-Class (30 min) | In-Class (1.5 hours)                               |
| ---- | ------------------ | -------------------------------------------------- |
| 1    | Lessons 1-2        | Setup environment together, discuss quality gates  |
| 2    | Lesson 3-4         | Practice prompt engineering, fork and clone repos  |
| 3    | Lesson 5           | Build pages with Eleventy, troubleshoot together   |
| 4    | Lesson 6           | Configure ESLint/Prettier, fix linting errors      |
| 5    | Lesson 7           | Set up pre-commit hooks, test intentional failures |
| 6    | Lesson 8           | Configure GitHub Actions, watch pipeline run       |
| 7    | Lesson 9           | Run Lighthouse, optimize performance               |
| 8    | Lesson 10          | Debugging workshop with common errors              |
| 9    | Work Week          | Project work time                                  |
| 10   | Presentations      | Student showcases                                  |

**Instructor time:** 2-3 hours/week

---

### Option 3: Workshop Series (Intensive)

**Use case:** Weekend bootcamp or intensive workshop

**How it works:**

- **Day 1:** Lessons 1-5 (Understanding + Basic Building)
- **Day 2:** Lessons 6-10 (Quality Gates + Deployment)
- **Day 3:** Project work and presentations

**Instructor time:** 3 full days + prep

---

## 🎮 Suggested Classroom Activities

### Activity 1: "Quality Gate Fail Party" (Lesson 6-7)

**Goal:** Normalize errors and practice debugging

**How it works:**

1. Intentionally write bad code together (missing semicolons, unused variables)
2. Commit and watch pre-commit hooks block it
3. Fix errors as a class
4. Celebrate successful commit!

**Time:** 20 minutes

**Learning outcome:** Errors are normal and fixable

---

### Activity 2: "DRY Detective" (Lesson 5 + Duplication)

**Goal:** Identify code duplication and refactor

**How it works:**

1. Show website with duplicated CSS (3 buttons with identical styles)
2. Students identify duplication
3. Refactor together using CSS classes
4. Run duplication checker to verify 0% duplication

**Time:** 15 minutes

**Materials provided:** Example "bad" code in
`docs/examples/duplication-demo.md`

---

### Activity 3: "Prompt Engineering Challenge" (Lesson 3)

**Goal:** Practice writing effective AI prompts

**How it works:**

1. Give students a task: "Create a contact form page"
2. Students write prompts for AI assistant
3. Share prompts and compare results
4. Discuss what made some prompts more effective

**Time:** 30 minutes

**Assessment:** Quality of generated code and clarity of prompt

---

### Activity 4: "Pipeline Debugging Race" (Lesson 8)

**Goal:** Practice reading CI/CD logs and fixing issues

**How it works:**

1. Instructor pushes intentionally broken code
2. Students race to:
   - Identify which job failed
   - Read the error logs
   - Determine the fix
   - Submit solution via GitHub issue

**Time:** 25 minutes

**Prize ideas:** GitHub stickers, "CI/CD Master" badge

---

### Activity 5: "Lighthouse Optimization Competition" (Lesson 9)

**Goal:** Apply performance optimization techniques

**How it works:**

1. Start with low-scoring page (large images, no alt text, poor SEO)
2. Students compete to improve Lighthouse score
3. Share optimization strategies
4. Highest score wins

**Scoring:**

- Performance: 40%
- Accessibility: 30%
- Best Practices: 15%
- SEO: 15%

**Time:** 45 minutes

---

## 📊 Assessment Ideas

### Formative Assessment (During Course)

**Option 1: Knowledge Checks**

- Use the built-in knowledge check quizzes (Lesson 5 has example)
- Students self-assess understanding
- No grades, just feedback

**Option 2: Weekly Check-ins**

- Brief surveys: "What's one thing you learned this week?"
- Identify struggling students early
- Adjust pace as needed

**Option 3: Code Review Discussions**

- Students post their commits to discussion board
- Peer review: "I like...", "I wonder...", "What if...?"
- Instructor highlights exemplary work

---

### Summative Assessment (End of Course)

**Option 1: Portfolio Project (Recommended)**

**Assignment:** Build a personal website with:

- At least 3 pages
- Quality gates passing (0% duplication, all linters)
- Deployed via GitHub Pages
- Lighthouse scores: 90+ across all categories

**Rubric:**

| Criteria          | Points | Description                          |
| ----------------- | ------ | ------------------------------------ |
| **Functionality** | 25     | Site builds and deploys successfully |
| **Code Quality**  | 25     | All linters pass, 0% duplication     |
| **Design**        | 20     | Visually appealing, accessible       |
| **Content**       | 15     | Clear, professional content          |
| **Documentation** | 10     | Good README with setup instructions  |
| **Creativity**    | 5      | Unique features or customization     |

**Total:** 100 points

---

**Option 2: Group Project**

**Assignment:** Teams of 3-4 build a themed site (e.g., "Local Businesses",
"Student Clubs", "Portfolio Collection")

**Additional requirements:**

- Collaborative Git workflow (branches, pull requests)
- Team README documenting who did what
- CI/CD pipeline must pass before merging

**Benefits:**

- Practices teamwork
- Real-world Git collaboration
- Peer accountability

---

**Option 3: Technical Blog Post**

**Assignment:** Write a tutorial teaching someone else how to:

- Set up a quality gate (choose one from course)
- Explain why it matters
- Provide step-by-step instructions
- Include screenshots/code examples

**Audience:** Future students or online learners

**Assessment criteria:**

- Clarity of explanation
- Accuracy of technical details
- Usefulness of examples
- Professional writing

---

## 🛠️ Technical Setup for Instructors

### Before First Class:

1. **Fork the repository** to your organization account
2. **Test the full workflow** yourself (takes ~2 hours)
3. **Create example "bad" code** for debugging activities
4. **Prepare troubleshooting** sheet with common student errors

### Recommended Tools:

- **GitHub Classroom** - Auto-create repos for each student
- **Discord/Slack** - Quick Q&A and peer support
- **Zoom/Teams** - For live coding demos
- **GitHub Discussions** - Async Q&A attached to repo

---

## 🎤 Lecture/Presentation Ideas

### Week 1: "Why AI Won't Replace Developers"

**Thesis:** AI generates code, but humans ensure quality

**Talking points:**

- Show AI-generated code with duplication
- Demonstrate how quality gates catch it
- Discuss future of AI-native development

**Activity:** Students generate code with ChatGPT, then run through quality
gates

---

### Week 4: "The Economics of Code Quality"

**Thesis:** Technical debt costs more to fix later than prevent now

**Talking points:**

- Cost of bugs in production vs. development
- Time saved by automated testing
- Career value of quality-focused skills

**Activity:** Calculate time saved by pre-commit hooks (students estimate manual
checks)

---

### Week 8: "Modern Developer Workflow"

**Thesis:** Professional developers use automation, not manual testing

**Talking points:**

- What companies actually use (CI/CD is standard)
- Portfolio value of this project
- Transferable skills to other tech stacks

**Guest speaker idea:** Invite local developer to talk about their CI/CD setup

---

## 📝 Adapting Content for Your Needs

### For Beginner Students:

**Slow down:**

- Split lessons into 2 sessions each
- Add more guided practice
- Provide pre-written prompts to modify

**Extra resources:**

- HTML/CSS crash course (Khan Academy, freeCodeCamp)
- Git basics tutorial
- Command line introduction

---

### For Advanced Students:

**Extend:**

- Add TypeScript support
- Implement additional quality gates (security scanning)
- Build more complex features (search, blog pagination)
- Contribute to open-source

**Challenge projects:**

- Convert site to Next.js
- Add backend API (serverless functions)
- Implement A/B testing

---

### For Online/Async Classes:

**Enhance with:**

- Pre-recorded video walkthroughs (10-15 min each)
- Weekly live Q&A sessions (30 min)
- Peer code review assignments
- Discussion board milestones

**Tools:**

- Loom for quick screencasts
- GitHub Discussions for threaded Q&A
- Calendly for office hours scheduling

---

## 🌐 External Resources to Share

### Official Documentation:

- [Eleventy Docs](https://www.11ty.dev/docs/)
- [ESLint Rules](https://eslint.org/docs/rules/)
- [Prettier Options](https://prettier.io/docs/en/options.html)
- [GitHub Actions Docs](https://docs.github.com/en/actions)
- [Lighthouse Scoring](https://developer.chrome.com/docs/lighthouse/performance/performance-scoring/)

### Video Tutorials (Supplement):

- [Eleventy Crash Course](https://www.youtube.com/results?search_query=eleventy+crash+course) -
  YouTube
- [Git & GitHub for Beginners](https://www.youtube.com/results?search_query=git+github+beginners) -
  YouTube
- [CI/CD Explained](https://www.youtube.com/results?search_query=ci+cd+explained) -
  YouTube

### Interactive Learning:

- [Learn Git Branching](https://learngitbranching.js.org/) - Visual Git tutorial
- [GitHub Skills](https://skills.github.com/) - Hands-on GitHub tutorials
- [MDN Web Docs](https://developer.mozilla.org/) - HTML/CSS/JS reference

### Communities:

- [Eleventy Discord](https://www.11ty.dev/blog/discord/) - Ask Eleventy
  questions
- [Dev.to](https://dev.to/) - Developer community for sharing projects
- [Stack Overflow](https://stackoverflow.com/) - Technical Q&A

---

## 💡 Tips for Success

### Do:

✅ **Test everything yourself first** - Run through all lessons before assigning
✅ **Share your own struggles** - Normalize that instructors make errors too ✅
**Celebrate small wins** - First successful commit, first deployed site ✅
**Encourage experimentation** - "Break things and fix them" mindset ✅ **Provide
real-world context** - Connect lessons to job skills

### Don't:

❌ **Rush through setup** - Week 1 is critical for success ❌ **Skip the
"why"** - Students need context, not just instructions ❌ **Ignore struggling
students** - Identify them early in Week 2-3 ❌ **Grade harshly on first
attempts** - Focus on learning, not perfection ❌ **Forget to update links** -
Run link checker before each term!

---

## 🔄 Continuous Improvement

### Gather Feedback:

**Mid-course survey (Week 5):**

- What's working well?
- What's confusing?
- Pace too fast/slow?
- What would you add/remove?

**End-of-course reflection:**

- Most valuable lesson?
- What will you use in future projects?
- What was most challenging?
- How confident do you feel with these tools?

### Update Content:

- **Quarterly:** Check for broken links (run `npm run lint:links`)
- **Annually:** Update tool versions and screenshots
- **As needed:** Add new lessons based on student questions

---

## 📞 Support for Instructors

### Questions?

- **GitHub Discussions:** [Post question in instructor forum]
- **Email:** [Your institution's support email]
- **Office Hours:** [Schedule if you're offering this]

### Contributing:

Found a typo? Have a great activity? Want to improve content?

1. Fork the repository
2. Make your changes
3. Submit a pull request
4. We'll review and merge if appropriate

**We welcome instructor contributions!**

---

## 📄 License & Attribution

This course content is open-source and free to use for educational purposes.

**When using this content:**

- ✅ Adapt for your classroom
- ✅ Add your own activities
- ✅ Share with other educators
- ✅ Attribute original source

**Not allowed:**

- ❌ Sell as a commercial product
- ❌ Remove attribution
- ❌ Use for non-educational purposes without permission

---

## 🎉 Final Thoughts

This course teaches students skills they'll use their entire careers:

- **AI collaboration** - Will only become more important
- **Quality assurance** - Core professional skill
- **Automation** - Industry standard practice
- **Problem-solving** - Transferable to any technology

**Your role as instructor** is to:

1. Provide context and real-world connections
2. Troubleshoot when students get stuck
3. Celebrate progress and build confidence
4. Prepare students for professional development

**Thank you for using this course!** Your feedback makes it better for everyone.

---

## 🔗 Quick Links

- [📚 Course Lessons](../lessons/)
- [🤖 AI Prompts](../prompts/)
- [📖 Reference Docs](../reference/)
- [🏠 Main README](../../README.md)

---

**Last Updated:** October 27, 2025  
**Version:** 2.0 (Self-Paced Edition)  
**Maintainer:** [Your name/institution]
