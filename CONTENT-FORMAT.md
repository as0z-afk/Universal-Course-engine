# Content Format

The app is designed for copy/paste workflows. You can paste plain text, but Markdown headings give the clearest result.

## Recommended structure

```markdown
# Course title
One concise introduction and the course's purpose.

## Unit or topic
Explain the concept in context.

### Subtopic
Include examples, formulae, procedures, cases, evidence, and limitations.

## Worked example
Given: ...
Required: ...
Method: ...
Steps: ...
Result: ...
Interpretation: ...

## Practice
Q: A question answerable from the material?
A: The supported answer.

## Glossary
**Term**: Definition.
Other term:: Definition.
```

## Parsing behavior

- The first top-level heading (`#`) determines the course title.
- `##` headings become navigable lesson sections.
- `###` and `####` headings remain within a lesson.
- `Q:` / `Question:` followed by `A:` / `Answer:` creates a recall item.
- Bold definitions and double-colon definitions populate the glossary.
- Basic lists, blockquotes, fenced code blocks, bold, italics, and inline code are supported.

The app is not an AI model and cannot infer reliable missing content. Include the explanations and answers you want it to teach.
