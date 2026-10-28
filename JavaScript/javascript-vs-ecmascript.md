# JavaScript vs ECMAScript

> ECMAScript (ES) is the **standard**. JavaScript is the **language** that implements it, plus extras from the environment.

| | JavaScript | ECMAScript |
|---|---|---|
| What it is | the programming language browsers and Node.js run | the specification (ECMA-262) that defines the language |
| Role | implementation | blueprint |
| Versions | no formal versions | ES5 (2009), ES6/ES2015, then yearly: ES2016, ES2017... |
| Includes | the core language **and** host APIs (DOM, `fetch`, Node's `fs`) | only the core language (syntax, `Array`, `Promise`, `Map`...) |

## Key ES versions

| Version | Notable features |
|---|---|
| ES5 (2009) | `forEach`, `map`, `filter`, `JSON`, strict mode |
| ES6 / ES2015 | `let`, `const`, arrow functions, classes, template literals, destructuring, modules, promises, `Map`, `Set`, spread, generators |
| ES2017 | `async` / `await`, `Object.entries` |
| ES2020 | optional chaining `?.`, `??`, `BigInt`, `Promise.allSettled` |
| ES2022 | class fields and private `#x`, top-level `await`, `.at()` |

## Remember

- "Modern JavaScript" usually means ES6 and later.
- Engines: V8, SpiderMonkey, JavaScriptCore. Babel and TypeScript compile new syntax for older browsers.
- See also [host vs native objects](host-vs-native-objects.md).
