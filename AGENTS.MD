# Contributing Guidelines

This repository is a small prototype used by multiple automated agents.
Follow these rules when contributing:

1. **Stay focused.** Limit pull requests to a single purpose and keep
diffs minimal.
2. **Document your changes.** Update `readme.md` or other docs when you
   add new features or commands.
3. **Check Python files.** Run `python -m py_compile $(git ls-files '*.py')`
   before committing to ensure syntax correctness.
4. **Avoid side effects.** Do not change formatting or other files that
   are unrelated to your PR.
5. **Use clear commit messages.** Summarize your changes in the first
   line and provide additional context if needed.
