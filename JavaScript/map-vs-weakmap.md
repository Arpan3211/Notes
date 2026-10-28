# Map vs WeakMap

> `Map` is a key-value collection for any key type. `WeakMap` holds its object keys weakly, so they can be garbage collected.

| | `Map` | `WeakMap` |
|---|---|---|
| Key types | any (primitives and objects) | objects only |
| References to keys | strong (keeps keys alive) | weak (key can be garbage collected) |
| Iterable (`for...of`, `forEach`) | yes | no |
| `size` | yes | no |
| `clear()`, `keys()`, `values()`, `entries()` | yes | no |
| Methods | `set get has delete clear` | `set get has delete` |

```js
const map = new Map();
map.set("name", "Alice");
map.set(1, "one");
map.set({ id: 1 }, "object key");
map.get("name");   // "Alice"
map.size;          // 3
for (const [k, v] of map) console.log(k, v);

const weak = new WeakMap();
let user = { name: "Bob" };
weak.set(user, "private data");
weak.get(user);    // "private data"
user = null;       // the entry can now be garbage collected
```

## Map vs plain object

- Map keeps insertion order, accepts any key type, and has `size`.
- Objects only use strings or symbols as keys and have inherited properties.

## When to use

- **Map**: general key-value storage, counting, caching with any key, when you need to iterate.
- **WeakMap**: attach private data or a cache to objects (DOM nodes, instances) without causing memory leaks.

Related: `Set` and `WeakSet` (unique values, weakly held for `WeakSet`).

## Remember

- A `WeakMap` cannot be inspected or listed, by design.
- See [garbage collection](garbage-collection.md).
