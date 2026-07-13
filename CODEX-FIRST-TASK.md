# First Codex Task

Copy the text below into a new Codex task connected to the `big-english-2-adventure` repository.

---

You are working in the GitHub repository `big-english-2-adventure`.

Before changing code, read these repository files in full:

- `README.md`
- `docs/content-guidelines.md`
- `curriculum/course-structure.json`
- `curriculum/course-structure.schema.json`
- `docs/curriculum-map.md`
- `docs/activity-design-guide.md`
- `docs/implementation-plan.md`
- `TASKS.md`

Treat `docs/content-guidelines.md` as mandatory and `curriculum/course-structure.json` as the authoritative curriculum source.

Do not request the original textbook PDF. Do not search for or download the textbook. Do not add source page images, publisher assets, original audio, song lyrics, full stories, or long copied exercises.

For this first task, create a production-quality first slice of the application:

1. Initialise React, TypeScript, and Vite in the existing repository.
2. Use React Router with `HashRouter` for GitHub Pages compatibility.
3. Add responsive styling, accessibility foundations, Vitest, and React Testing Library.
4. Implement validated curriculum loading from the supplied JSON.
5. Implement local progress storage, basic mastery tracking, SpeechSynthesis, and MediaRecorder record/replay.
6. Implement the learner home page, unit selection page, parent dashboard foundation, Persian hint toggle with RTL support, and rewards foundation.
7. Fully implement the Welcome Unit and Unit 1 only.
8. Welcome Unit and Unit 1 must include original activities for vocabulary, grammar, listening, reading, speaking, writing, dictation, phonics where applicable, CLIL, culture, values, mixed review, and mastery reporting.
9. Build reusable engines for multiple choice, fill blank, matching, drag/drop with keyboard fallback, memory cards, sentence builder, listening, dictation, speaking recording, reading comprehension, and phonics sorting.
10. Use original SVG/CSS illustrations only. Do not imitate the textbook page design or characters.
11. Add tests for scoring, answer normalisation, dictation comparison, progress persistence, routing, and curriculum validation.
12. Add `.github/workflows/deploy.yml` for GitHub Pages.
13. Add npm scripts for `validate-content`, `test`, and `build`.
14. Run:

```bash
npm install
npm run validate-content
npm run test
npm run build
```

Fix all failures before finishing.

Update `TASKS.md` accurately. Do not create clickable placeholder pages for unfinished units.

At the end report:

- implemented features;
- changed files;
- tests and build results;
- manual GitHub Pages steps;
- exact remaining tasks.

Proceed directly with implementation. Do not stop after planning.

---
