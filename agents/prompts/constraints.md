# Hard constraints for code generation

## Architecture
- Astro framework with Tailwind CSS

## Security & Privacy
- Never log tokens or PII. Avoid printing payloads containing names, emails, phone numbers, addresses. Do not hardcode secrets.

## Operational limits and workflow requirements
- Max files per change: 10 (including tests and docs). If more are needed, split into multiple PRs. 
- Cost/latency budgets: Prefer small patches (<200 LoC changed); avoid regenerating large files. 
- Never modify: .env*, production secrets, lockfiles, Dockerfiles without explicit instruction. 
- Rollback policy: If any step (lint/test/build) fails, revert file changes in that step and produce a summary of what was attempted and why it failed.