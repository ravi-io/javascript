# System Design & Behavioral Questions

These questions test your problem-solving process, teamwork, and how you handle real-world developer scenarios.

---

### 1. "How do you approach a complex bug that you can't figure out?"

**Answer:**
"I have a systematic 4-step process for debugging:
1.  **Isolation:** I try to reproduce the bug in the simplest possible environment to rule out external factors.
2.  **Observation:** I use Browser DevTools (Network tab, Console) and server logs to see exactly where the data is failing.
3.  **Hypothesis:** I make an educated guess about why it's happening and test that specific part of the code (commenting things out or using `debugger`).
4.  **Verification:** Once fixed, I don't just move on; I try to break it again to make sure the fix is robust.
**Example:** In my E-Commerce app, I once had a bug where the cart would double-count items. I used step-by-step logging to find that my 'Add to Cart' function was being triggered twice—once by the button click and once by a parent container's click event. I used `e.stopPropagation()` to fix it."

---

### 2. "How do you handle feedback or a code review that is very critical?"

**Answer:**
"I view code reviews as a learning opportunity, not a personal attack. I'm always open to feedback because it helps me become a better developer. If I disagree with a suggestion, I don't argue; instead, I'll explain my reasoning and ask for their perspective. Usually, there's a middle ground or a better solution that we both agree on after a short discussion."

---

### 3. "What is your process for starting a new project from scratch?"

**Answer:**
"I follow a plan-first approach:
1.  **Requirement Analysis:** I write down exactly what the app needs to do (e.g., 'Users must be able to upload images').
2.  **Tech Stack Selection:** I choose tools based on the project focus. If I need speed and SEO, I pick **Next.js**. If I need a flexible database, I pick **MongoDB**.
3.  **Schema Design:** I design the database models (Prisma or Drizzle) before writing any UI code.
4.  **MVP First:** I build the 'Minimum Viable Product' first—the core features that work. Then I add the 'nice-to-have' features.
5.  **Documentation:** I write a clear `README.md` so others (and my future self) can understand how to run and maintain the project."

---

### 4. "Where do you see yourself in 5 years?"

**Answer:**
"In 5 years, I want to be a **Senior Full Stack Developer** or a **Tech Lead**. I want to be someone who not only writes great code but also helps design the architecture of large-scale systems and mentors junior developers. I'm particularly interested in deep-diving into **System Design** and **Cloud Infrastructure** (AWS/Azure) to build apps that can handle millions of users."

---

### 5. "Why should we hire you?"

**Answer:**
"You should hire me because I bring a unique combination of **technical skill** and **problem-solving logic** (from my Physics background). I'm not just a 'coder'; I'm a developer who cares about the user experience, performance, and clean code. I have a proven track record of building complex apps from start to finish—like an AI chat app and a full gaming hub. I'm a quick learner, a team player, and I'm ready to bring that same dedication to your team."
