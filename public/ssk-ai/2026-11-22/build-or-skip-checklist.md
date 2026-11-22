# SSK AI Hub — Build-or-Skip Lab checklist
November 15–21, 2026 edition · ravindrassk.com/ssk-ai/tech-news

## Reader challenge
Pick a task you currently do manually. Run it 10 times with your current
workflow and 10 times with an AI-assisted workflow. Record completed tasks,
corrections and total time. Publish what failed — not only what worked.

| Run | Workflow (manual / AI) | Completed? (Y/N) | Corrections | Time (min) | What failed |
|-----|------------------------|------------------|-------------|------------|-------------|
| 1   |                        |                  |             |            |             |
| 2   |                        |                  |             |            |             |
| 3   |                        |                  |             |            |             |
| 4   |                        |                  |             |            |             |
| 5   |                        |                  |             |            |             |
| 6   |                        |                  |             |            |             |
| 7   |                        |                  |             |            |             |
| 8   |                        |                  |             |            |             |
| 9   |                        |                  |             |            |             |
| 10  |                        |                  |             |            |             |

## Pick one path

### Student — Agent reliability scorecard using synthetic tasks
- [ ] Write 10–20 synthetic tasks, each with a known correct outcome.
- [ ] Run the agent on every task; log each step, retry and human correction.
- [ ] Score completion, interventions and traceability; re-run after any prompt or tool change.
- Success metric: pass rate and reproducible failures.

### Developer — Tiered model router for code maintenance
- [ ] Collect real maintenance tasks from one repository, each with tests the model cannot see.
- [ ] Classify each task as routine or complex; send routine work to a fast model and complex work to a stronger one.
- [ ] Run the tests; record cost, retries and pass/fail for every task.
- Success metric: cost per passing task.

### Creator — Interactive educational world prototype
- [ ] Choose one learning goal and script the scene that teaches it.
- [ ] Build the scene with user controls; label all simulated content clearly.
- [ ] Test with a few people; note where navigation or consistency breaks.
- Success metric: navigation coherence and user feedback.

These are proposed exercises. SSK AI Hub has not run them and claims no results.
