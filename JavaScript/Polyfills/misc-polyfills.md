# Other polyfills: deep copy and fetch

## Deep copy

A recursive copy that also handles circular references (the `WeakMap` remembers what was already copied), dates and symbol keys. Tested.

```js
function deepCopy(obj, seen = new WeakMap()) {
  if (obj === null || typeof obj !== "object") return obj;   // primitives and functions are returned as they are
  if (obj instanceof Date) return new Date(obj);
  if (seen.has(obj)) return seen.get(obj);                   // circular reference
  const copy = Array.isArray(obj) ? [] : {};
  seen.set(obj, copy);
  for (const key of Reflect.ownKeys(obj)) copy[key] = deepCopy(obj[key], seen);
  return copy;
}

const original = { a: { b: [1, { c: 2 }] } };
original.self = original;               // circular
const copy = deepCopy(original);
copy.a.b[1].c = 99;
original.a.b[1].c;                      // 2  (unchanged)
copy.self === copy;                     // true
```

Missing on purpose: `Map`, `Set`, `RegExp` and class prototypes. In real code use `structuredClone` (see [shallow vs deep copy](../shallow-vs-deep-copy.md)).

## fetch on top of XMLHttpRequest

A minimal sketch for old browsers (the real `fetch` has many more features).

```js
function myFetch(url, options = {}) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(options.method || "GET", url);
    Object.entries(options.headers || {}).forEach(([k, v]) => xhr.setRequestHeader(k, v));

    xhr.onload = () =>
      resolve({
        ok: xhr.status >= 200 && xhr.status < 300,
        status: xhr.status,
        statusText: xhr.statusText,
        text: () => Promise.resolve(xhr.responseText),
        json: () => Promise.resolve(JSON.parse(xhr.responseText)),
      });
    xhr.onerror = () => reject(new TypeError("Network request failed"));   // only network errors reject

    xhr.send(options.body || null);
  });
}
```

## Remember

- `fetch` does not reject on HTTP errors (404, 500). Check `response.ok`.
- Before writing a polyfill, check support (see [feature detection](../feature-detection.md)).

## More to practise

`Array.prototype.find` / `findIndex`, `String.prototype.repeat` / `charAt`, `min`, `max`, `sum`, `anagrams`.
