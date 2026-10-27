# Universal Adaptive Study Platform

A self-contained, offline-first study workspace for any subject. Paste or type course material, then turn its headings into navigable lessons, review modes, source-based recall cards, glossary entries, and an interactive concept map.

## Quick start

1. Download or clone this repository.
2. Open `index.html` in a current browser. No server or installation is required.
3. Select **Edit course text** and paste your syllabus, notes, or learning material.
4. Use Markdown headings (`#`, `##`, `###`) to organize the material.
5. Select **Apply and build course**.
6. Navigate the generated lessons, change the explanation mode, practice recall, explore the concept map, and export your source or notes.

## Content format

The app accepts plain text and a small, safe subset of Markdown:

```markdown
# Course title
A short course introduction.

## Topic one
Explanation, examples, formulas, and applications.

### Subtopic
More detail.

Q: What does this concept mean?
A: An answer supported by the course material.

## Glossary
**Term**: Definition from your material.
Another term:: Another definition.
```

- A level-two heading (`##`) creates a lesson section.
- Level-three/four headings remain inside a lesson.
- `Q:` and `A:` pairs create recall cards.
- `**Term**: definition` or `Term:: definition` creates glossary entries.
- The app does not call an AI service. Its conversational helper finds matching passages in your source rather than inventing explanations.

## Features

- Single-file HTML/CSS/JavaScript application.
- No remote fonts, frameworks, images, APIs, or network requests.
- Responsive teal-lime interface with glass-like panels and animated SVG/CSS visual styling.
- Collapsible, auto-hiding-on-mobile course sidebar.
- Source-aware lesson navigation and search.
- Beginner, Standard, Deep-Dive, Revision, and Conversational presentation modes.
- Recall cards derived from supplied Q/A pairs or lesson text.
- Concept map generated from headings, with links to lessons.
- Source-based glossary.
- Session notes, arithmetic workbench, search, Markdown export, and HTML download.
- Print stylesheet and reduced-motion support.

## Important behavior

This is a local, source-driven learning workspace, not a cloud AI tutor. It organizes and displays the material entered by the learner. It does not automatically research missing content, verify domain claims, or generate a new authoritative course from a title alone. Add the explanations, answer keys, and examples you want the platform to teach. Keep copies of notes using export; notes are held in memory during the current session.

## Repository layout

- `index.html` — complete offline application.
- `docs/CONTENT-FORMAT.md` — paste-ready content structure.
- `docs/ARCHITECTURE.md` — implementation overview and extension guidance.
- `examples/sample-course.md` — reusable sample content in the supported format.
- `.github/workflows/smoke.yml` — runs static checks on pushes and pull requests.
- `tests/smoke.mjs` — dependency-free static checks using Node.js built-ins.
- `tests/MANUAL-CHECKLIST.md` — browser behavior checklist.

## Run the checks

With Node.js installed:

```bash
node tests/smoke.mjs
```

For a manual browser check, see `tests/MANUAL-CHECKLIST.md`. Static checks do not replace testing in every browser/device.

## GitHub Pages

The application can also be served as a static site through GitHub Pages. It does not require Pages to function; opening `index.html` locally is supported.

## License

Released under the MIT License. See `LICENSE`.
