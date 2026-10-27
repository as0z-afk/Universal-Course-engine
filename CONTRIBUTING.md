# Contributing

Thanks for helping improve the Universal Adaptive Study Platform.

## Principles

- Keep the core app framework-free and offline-capable.
- Keep the HTML app self-contained unless a change clearly explains why the single-file contract must change.
- Do not add external fonts, runtime CDNs, tracking, telemetry, or API requirements.
- Preserve user-provided material; do not execute it as code or HTML.
- Make interactions functional, keyboard-accessible, and understandable on small screens.
- Use domain-neutral language and let the user's content determine lesson structure.
- Provide static/text alternatives for essential visuals and honor reduced-motion preferences.

## Pull requests

1. Describe the user problem and the behavior being changed.
2. Test `node tests/smoke.mjs`.
3. Follow `tests/MANUAL-CHECKLIST.md` for UI or JavaScript changes.
4. Avoid claiming browser coverage that was not tested.
