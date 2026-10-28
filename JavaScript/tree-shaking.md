# Tree shaking

> A build step that removes **unused exports** (dead code) from the final bundle, so the files are smaller.

```js
// math.js
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;
export const unused = () => console.log("never called");

// app.js
import { add } from "./math";
console.log(add(2, 3));
// bundle contains only `add`
```

## What it needs

| Requirement | Why |
|---|---|
| **ES modules** (`import` / `export`) | their imports are static, so the bundler can analyse them at build time (CommonJS `require` is dynamic) |
| **Production mode** | Webpack `mode: "production"`, Rollup, Vite and esbuild enable it by default |
| **No side effects** | code that runs on import cannot be removed safely |
| **`"sideEffects": false`** in `package.json` | tells the bundler that unused files can be dropped |

```json
{ "name": "my-lib", "sideEffects": ["*.css"] }
```

## Tips

- Import only what you need: `import { debounce } from "lodash-es"` (not `import _ from "lodash"`).
- Avoid `export default { a, b, c }` objects: they cannot be shaken apart.
- Check bundle size with a visualiser (webpack-bundle-analyzer, rollup-plugin-visualizer).

## Remember

- Tree shaking = removing unused **exports**. Minification = shortening code. Code splitting = loading in pieces. All three reduce load time.
- See [modules](modules.md) and [performance optimization](performance-optimization.md).
