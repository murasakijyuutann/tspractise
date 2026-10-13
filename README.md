# tsplayground

A general, all-round TypeScript practice repo. Each file is a short, self-contained lesson on one TypeScript concept, from the basics up to advanced type-level programming.

## How the lessons work

Each lesson file mixes two kinds of checks:

- **Type-level checks:** assertions like `ok<Equal<A, B>>(...)` that fail to compile if a type isn't what you expect.
- **Runtime output:** `console.log` calls that show the matching JavaScript behaviour next to the types.

## Running a lesson

Install dependencies once:

```bash
npm install
```

Then run any lesson file with [`tsx`](https://github.com/privatenumber/tsx):

```bash
npx tsx app/01-keysof.ts
```

Note it's `npx` (runs a tool), not `npm` (manages packages).

`tsx` doesn't check types; it only strips them and runs the code. To catch failing type assertions, run the TypeScript compiler:

```bash
npx tsc --noEmit
```

## Lessons

| File | Topic |
| --- | --- |
| `app/01-keysof.ts` | `keyof` and `keyof typeof` |
| `app/02-indexed-access.ts` | Indexed access types (`T[K]`) |

## Next.js

This repo was bootstrapped with Next.js, so `npm run dev` still starts a dev server at [http://localhost:3000](http://localhost:3000). The practice lessons don't need it.
