# Interactive Activity Design Guide

## Reusable activity engines

Implement content as data consumed by reusable components. At minimum support:

1. Multiple choice
2. Fill in the blank
3. Picture-to-word and word-to-picture matching
4. Drag and drop sorting
5. Drag an object to a location
6. Memory cards
7. Sentence builder and sentence unscramble
8. Missing-letter and word-scramble tasks
9. Image guessing and progressive reveal
10. True/false
11. Story and dialogue sequencing
12. Listening multiple choice
13. Listen and type
14. Dictation
15. Record and replay speaking
16. Picture description
17. Guided role-play
18. Phonics sound sorting
19. CLIL challenge
20. Values decision scenario
21. Unit challenge
22. Spaced review

## Common activity data

Each activity needs:

- stable unique `id`;
- `unitId`;
- section and skill;
- difficulty level;
- short learner instruction;
- prompt;
- accepted answer or answers;
- distractors where applicable;
- English hint;
- optional Persian hint;
- correct and retry feedback;
- mastery tags;
- internal source curriculum reference;
- original-content declaration.

## Scoring

- Core accuracy: correct items / attempted scored items.
- Do not reduce a score for replaying audio or using accessibility controls.
- Speaking recording without recognition is completion-based plus self-assessment.
- Open writing should use deterministic checks only for required target words or structures.
- Parent dashboard should distinguish completion, accuracy, and mastery.

## Answer normalisation

For controlled writing and dictation:

- trim leading/trailing spaces;
- collapse repeated spaces;
- compare case-insensitively;
- normalise curly and straight apostrophes;
- optionally ignore terminal punctuation;
- preserve meaningful word order;
- permit documented variants such as `bookstore` / `book store` when appropriate.

## Dictation behaviour

1. Hide text initially.
2. Play with SpeechSynthesis at normal or slow speed.
3. Allow replay without penalty.
4. Compare word by word.
5. Mark missing, incorrect, and extra words.
6. Permit a second attempt.
7. Reveal the target only after completion or explicit request.

## Listening behaviour

- Do not show the transcript before submission.
- Provide play, pause/stop, replay, and slow-speed controls.
- Show a transcript after completion.
- Use newly written scripts aligned with the unit target.

## Speaking behaviour

Base mode:

- play a model;
- record with MediaRecorder;
- replay locally;
- provide a child-friendly self-check such as `I said the target words`.

Enhanced mode:

- use SpeechRecognition only when available;
- show recognised text;
- check presence of target words;
- state clearly that this is not a precise pronunciation grade.

## Reading text limits

For the first implementation:

- Welcome/Units 1–3: 35–70 words per original passage;
- Units 4–6: 50–90 words;
- Units 7–9: 60–110 words;
- short sentences and controlled grammar;
- optional tappable glossary;
- no copied source story.

## Adaptive review

Track per mastery tag:

- attempts;
- correct attempts;
- consecutive correct answers;
- recent errors;
- last practised timestamp;
- mastery score from 0 to 1;
- next review date.

Suggested intervals:

- error: immediate retry and same-session review;
- initial success: 1 day;
- repeated success: 3 days;
- stable mastery: 7 days;
- continued mastery: 14–30 days.

## Accessibility acceptance criteria

- all actions are keyboard reachable;
- visible focus indicator;
- buttons have accessible names;
- drag tasks have a non-drag alternative;
- audio tasks have post-answer transcripts;
- motion respects `prefers-reduced-motion`;
- text size can be increased;
- interactive targets are at least about 44px.
