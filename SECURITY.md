# Security Policy

## Scope

The application is a static, offline-first HTML study workspace. It is not designed to store secrets or process sensitive information.

## Reporting

Please report potential security issues privately to the repository maintainer before publishing a public exploit description. Include the affected browser, reproduction steps, and the expected versus observed behavior.

## Security principles

- Course text is displayed as escaped text with a limited Markdown renderer; it is not executed as HTML or JavaScript.
- Imported text files are read locally in the browser.
- No network requests or telemetry are required.
- No `eval()` or `new Function()` is used.
- The arithmetic workbench parses a limited expression grammar instead of executing user input.
