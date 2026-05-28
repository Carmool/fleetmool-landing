---
name: address-todos
description: Surface all outstanding tech debt — from TODO.md plus inline `// TODO:`, `# TODO:`, `{/* TODO: */}`, and `<!-- TODO: -->` comments in the codebase — then help the user pick one item to actually do now. Use when the user says "what's left to do", "any tech debt?", "let's clean up TODOs", or invokes `/address-todos`.
---

# Address TODOs

## When to invoke

Use this skill whenever the user asks any of:

- "What TODOs are open?"
- "What tech debt do we have?"
- "Anything left to clean up?"
- "Let's work on a TODO"
- Or explicitly types `/address-todos`.

Do **not** invoke it as a side-effect of unrelated work — only when the user is asking about outstanding work.

## What it does

1. **Read `TODO.md`** at the project root (if it exists). This is the curated, prose-level debt list.
2. **Grep for inline TODO comments** across the codebase. Search patterns:
   - `// TODO:` (JS/TS)
   - `/* TODO:` and `{/* TODO:` (block / JSX)
   - `# TODO:` (shell, Python, YAML)
   - `<!-- TODO:` (HTML/MD)
   Limit to source dirs (`app/`, `functions/`, `public/`, `.github/`, root configs); skip `node_modules`, `build`, `.git`, `build/server`, `build/client`.
3. **Merge and dedupe**: if a TODO.md item references a file/line that also has an inline comment, mention it once.
4. **Present a short list** (max ~10 items) grouped by source: "From TODO.md" and "Inline in code", each with file path + line number where applicable.
5. **Ask which one to tackle** — do not start implementing.
6. **Once the user picks one**, do that work end-to-end: read context, propose the change, implement, verify (build/lint/test as appropriate), and offer to commit.

## How to run the scan

Use a single bash call combining `cat TODO.md` and a grep across the codebase. Example:

```bash
echo "=== TODO.md ===" && \
(cat TODO.md 2>/dev/null || echo "(no TODO.md)") && \
echo "" && \
echo "=== Inline TODOs ===" && \
grep -rn --include="*.ts" --include="*.tsx" --include="*.js" --include="*.jsx" \
  --include="*.css" --include="*.md" --include="*.yml" --include="*.yaml" \
  --include="*.json" --include="*.sh" --include="*.py" \
  --exclude-dir=node_modules --exclude-dir=build --exclude-dir=.git \
  --exclude-dir=dist --exclude-dir=.next --exclude-dir=.cache \
  -E "(//|#|<!--|\{?/\*)\s*TODO:" . 2>/dev/null || echo "(no inline TODOs)"
```

Adjust file extensions to fit the actual project (this is a Remix + Bun project, but the same skill should work in other repos — fall back to a broader `grep -rn "TODO:"` if no matches).

## How to present results

Keep the summary tight. Format like:

```
Open items:

From TODO.md
  1. Remove `app/routes/script[.]js.tsx` legacy stub once cache expires
  2. Change Cloudflare Browser Cache TTL to "Respect Existing Headers"
  ...

Inline in code
  4. app/components/Hero.tsx:42  // TODO: extract animation hook
  5. functions/[[path]].ts:8     // TODO: tighten Env interface
```

Then ask: "Which one do you want me to tackle?" — wait for the user's pick before writing any code.

## What counts as done

A TODO is "done" when:

- For `TODO.md` items: the checkbox is ticked off, the work is committed, AND the item is either removed or moved to a "Done" section in the file.
- For inline comments: the underlying issue is fixed AND the comment is removed in the same change. Don't leave the comment behind once the work is done.

## Edge cases

- **No TODO.md and no inline TODOs**: tell the user there's nothing tracked and ask if they want to add one.
- **Many inline TODOs (>20)**: don't list all of them — show the top 10 by file recency (newest mtime first) and tell the user how many were truncated.
- **TODO with no clear owner/context**: ask the user for context before implementing. Don't guess intent from a one-liner comment.
- **Cache/infra TODOs that depend on a date** (like the ones currently in this repo's TODO.md): check the date — if the prerequisite hasn't happened yet, surface it but note "blocked until YYYY-MM-DD" rather than starting.
