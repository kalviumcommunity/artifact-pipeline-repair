# artifact-pipeline-repair

Intentionally broken Module 2 assessment starter. Repair only permitted files.

## Preparation

Fork this public repository, enable Actions in your fork, clone YOUR fork and install Node 22 and Git. No secrets, cloud account, paid runners or Jenkins server needed. Use GitHub-hosted Ubuntu runners. Standard public-repository Actions use is free subject to GitHub account policies.

```bash
git clone https://github.com/YOUR-USERNAME/artifact-pipeline-repair.git
cd artifact-pipeline-repair
npm ci
git checkout -b fix/module2
# Empty commit triggers your own failed run; fork does not inherit upstream runs.
git commit --allow-empty -m "chore: capture initial CI failure"
git push -u origin fix/module2
```

Capture failed run and exact error before fixing. Workflow also supports manual Actions runs. Read assessment before editing.

## Pipeline requirements

Job order: test, build, verify, preview. Each job gets its own runner. Fix exactly three `needs` values: build needs test, verify needs build, preview needs verify.

Build creates `dist/index.html`. Upload artifact `app-build` from `dist/`. Verification downloads `app-build` into `received/`. Correct these four upload/download fields; preview download is already correct. Preserve `if-no-files-found: error` and exact-content verification.

Preview must run only when validation succeeds and `github.ref == 'refs/heads/main'`. Use `success()` with this branch condition. It only checks packaged HTML, never deploys. Demonstrate successful main run and feature-branch run with preview skipped.

## Allowed edits

`.github/workflows/ci.yml` (three dependencies, four artifact fields, one preview condition), `pipeline-review.md` (three written lines).

Do not change scripts, package files, tests, triggers or permissions. No skips for required validation, retries, `continue-on-error`, `|| true` or fabricated artifact files.

## Local smoke test

```bash
npm ci
npm test
npm run build
```

Local commands do not prove artifact transfer or job ordering. Actual GitHub Actions logs are required. Explain dependencies/artifacts, main condition, and observed feature-branch preview status in three review lines.

## Evidence and submission

One PDF with three task sections, at least one real screenshot per task, corrected diff and requested explanation. Show original failure, successful main run and feature run with preview skipped. GitHub CLI logs are acceptable real screenshot evidence. Do not submit video or PR.

Grade only the three technical tasks and requested evidence, using assessment.md rubric (6 + 7 + 7 = 20). Repository/fork URLs, GitHub fork status, branch-name labels, run URLs/IDs and commit hashes are not separately required or graded. A standalone working repository, including the instructor reference repository, is valid when it contains this exercise and demonstrates the required Actions behaviour. No deduction solely for instructor-repository rather than student-fork evidence. Actual Actions transfer and main/feature results remain required.

Local setup and dependency preparation happen before assessment. Runner queues, network outages and account restrictions should not consume working time; report to instructor. Never expose credentials. Written answers are human-graded, not certified by green CI.
