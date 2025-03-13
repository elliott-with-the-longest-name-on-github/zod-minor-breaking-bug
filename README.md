```bash
pnpm i
```

Then go to `packages/downstream/index.ts` to see the infinitely-deep recursion error (it might take several seconds to appear, as it bogs down the compiler for a significant amount of time).