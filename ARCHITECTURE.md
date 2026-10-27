# Architecture

## Single-file application

`index.html` contains the UI, styles, content parser, lightweight Markdown renderer, lesson navigation, five presentation modes, source-based practice, glossary, concept map, notes, and local utilities. The app avoids build tools and runtime dependencies.

## Data flow

1. Source text is held in `state.source`.
2. `parseCourse()` identifies the title, lesson sections, explicit question/answer pairs, and glossary definitions.
3. The current view is rendered from parsed records.
4. Interactive tools operate on the source and current session state.
5. Export produces a local text, Markdown, or HTML file through a guarded Blob download.

## Safety and limitations

The renderer escapes text before applying its small Markdown subset. External Markdown images/HTML are not supported. Links are limited to explicitly written HTTP(S) Markdown links. The conversational view performs local keyword matching; it does not produce AI-generated answers. The calculator supports a small arithmetic grammar and never evaluates arbitrary JavaScript.

## Extending

Prefer small changes that keep the default app self-contained. If adding a new parser rule, add an example to `docs/CONTENT-FORMAT.md`. Add a smoke assertion or manual browser-test step for new user-facing behavior.
