# JavaScript modules

> A module is a file with its own scope that exports some values and imports others. Use **ES modules** today.

## Module systems

| System | Syntax | Where | Loading | Status |
|---|---|---|---|---|
| **ES modules (ESM)** | `import` / `export` | browsers, Node.js, bundlers | static, async | standard, use this |
| **CommonJS (CJS)** | `require()` / `module.exports` | Node.js (default in older code) | synchronous, dynamic | legacy in Node |
| **AMD** | `define([deps], fn)` | browsers (RequireJS) | async | obsolete |
| **UMD** | wrapper that supports AMD, CJS and globals | libraries | | older libraries |
| **Script tags** | globals | browsers | in tag order | pollutes the global scope |

## ES modules

```js
// math.js
export const PI = 3.14;                       // named export
export function add(a, b) { return a + b; }
export default function multiply(a, b) { return a * b; }   // one default per file

// app.js
import multiply, { add, PI } from "./math.js";
import * as math from "./math.js";             // namespace import
import { add as sum } from "./math.js";        // rename
const { divide } = await import("./divide.js"); // dynamic import (lazy loading)
```

```html
<script type="module" src="app.js"></script>
```

## CommonJS

```js
// math.js
function add(a, b) { return a + b; }
module.exports = { add };

// app.js
const { add } = require("./math.js");
```

## ESM vs CommonJS

| | ESM | CommonJS |
|---|---|---|
| Imports | static, hoisted | dynamic, run in order |
| Values | **live bindings** | copies of the exported values |
| Strict mode | always | optional |
| Top-level `await` | yes | no |
| `this` at top level | `undefined` | `module.exports` |
| Tree shaking | yes (see [tree shaking](tree-shaking.md)) | hard |

## Module pattern (before ES modules)

An [IIFE](iife.md) that returns a public API and keeps the rest private.

## Remember

- Each module runs **once** and is cached.
- Module scope is private: top-level variables do not become `window` properties.
- In Node, use `"type": "module"` in `package.json` or the `.mjs` extension for ESM.
- Circular imports can give `undefined` values, so avoid them.
