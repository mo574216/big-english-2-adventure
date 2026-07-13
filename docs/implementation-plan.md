# Implementation Plan

## Technical baseline

- React + TypeScript + Vite
- React Router with `HashRouter`
- Vitest + React Testing Library
- Static data-driven curriculum
- LocalStorage progress service
- Browser SpeechSynthesis service abstraction
- MediaRecorder speaking mode
- Optional SpeechRecognition progressive enhancement
- GitHub Actions deployment to GitHub Pages
- No backend and no API key

## Proposed repository layout

```text
src/
  app/
  components/
  activities/
  data/
    curriculum/
    units/
    checkpoints/
  features/
    learner/
    progress/
    rewards/
    parent-dashboard/
    accessibility/
  services/
    speech/
    storage/
    scoring/
    adaptive-learning/
  styles/
  types/
  utils/
  tests/
public/
  icons/
  illustrations/
.github/workflows/deploy.yml
```

## Delivery phases

### Phase 1 — Foundation and curriculum ingestion

- Initialise Vite React TypeScript project.
- Copy or transform `curriculum/course-structure.json` into validated application data.
- Implement schema/content validation.
- Configure HashRouter and GitHub Pages base path.
- Create design tokens, responsive shell, navigation, and accessibility settings.

### Phase 2 — Shared engines

- Scoring and answer normalisation.
- Progress and mastery services.
- SpeechSynthesis and MediaRecorder services.
- Reusable multiple-choice, fill-blank, matching, drag/drop, memory, sentence-builder, listening, dictation, speaking, reading, and phonics components.
- Parent and learner dashboards.

### Phase 3 — First production slice

Fully implement:

- Welcome Unit;
- Unit 1;
- home/dashboard;
- rewards foundation;
- Persian hint toggle;
- tests and deployment workflow.

Do not show unfinished units as clickable production pages.

### Phase 4 — Units 2–3 and Checkpoint 1–3

Complete activity banks, reviews, adaptive tags, and parent reports.

### Phase 5 — Units 4–6 and Checkpoint 4–6

Add maps, clocks, route tasks, career reasoning, and routine sequencing.

### Phase 6 — Units 7–9 and Checkpoint 7–9

Add food preference, animal habitat, calendar, month, season, and celebration tasks.

### Phase 7 — Original Starters-style practice

Implement new listening, reading/writing, and speaking practice using original scenes and scripts.

### Phase 8 — Audit and release

- content completeness audit;
- copyright audit;
- accessibility audit;
- responsive audit;
- test and production build;
- GitHub Pages deployment;
- README and parent instructions.

## Definition of done for each unit

A unit is complete only when:

- all listed vocabulary and grammar targets are represented;
- listening, reading, speaking, writing, dictation, phonics, CLIL, culture, and values are implemented where applicable;
- activities use original text and assets;
- progress and mastery tags work;
- keyboard and non-drag alternatives work;
- content validation passes;
- tests and production build pass;
- no visible placeholder remains.
