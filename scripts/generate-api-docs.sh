#!/bin/bash
rm -rf docs/api
npx typedoc --out docs/api src/index.ts src/types.ts src/runtime.ts
# Note: outputting to docs/api where docs/ is the github pages root (conceptually)
