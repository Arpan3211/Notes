# Host objects vs native objects

> Native objects come from the JavaScript language itself. Host objects come from the environment running the code (browser, Node.js).

| | Native (built-in) | Host |
|---|---|---|
| Defined by | ECMAScript specification | the environment |
| Available | in every JS environment | only in that environment |
| Examples | `Object`, `Array`, `Function`, `Date`, `RegExp`, `Math`, `JSON`, `Promise`, `Map`, `Error` | browser: `window`, `document`, `fetch`, `XMLHttpRequest`, `localStorage`, `navigator`; Node.js: `process`, `Buffer`, `fs`, `require` |
| Purpose | core language features | talk to the environment (DOM, files, network) |

```js
const d = new Date();                 // native
JSON.stringify({ a: 1 });             // native

document.getElementById("btn");       // host (browser only)
require("fs").readFileSync("a.txt");  // host (Node.js only)
```

## Remember

- `document` throws in Node.js, and `fs` does not exist in the browser.
- Host objects may behave differently across environments, so feature-detect before using them (see [feature detection](feature-detection.md)).
- `globalThis` is the global object in both (`window` in browsers, `global` in Node).
