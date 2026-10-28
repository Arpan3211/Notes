# Shallow copy vs deep copy (and cloning objects)

> A shallow copy copies only the top level (nested objects are shared). A deep copy copies everything, so the copy is fully independent.

```js
const original = { name: "Rajat", address: { city: "Pune" }, tags: [1, 2] };

const shallow = { ...original };
shallow.address.city = "Mumbai";
original.address.city;   // "Mumbai"  (nested object is shared)

const deep = structuredClone(original);
deep.address.city = "Delhi";
original.address.city;   // "Mumbai"  (unchanged)
```

## Ways to copy

| Method | Type | Notes |
|---|---|---|
| `{ ...obj }`, `[...arr]` | shallow | most common |
| `Object.assign({}, obj)` | shallow | |
| `arr.slice()`, `Array.from(arr)` | shallow | arrays |
| `JSON.parse(JSON.stringify(obj))` | deep | loses functions, `undefined`, `Symbol`, `Date` (becomes string), `Map`, `Set`; fails on circular references |
| `structuredClone(obj)` | deep | built-in, handles `Date`, `Map`, `Set`, circular refs; not functions or class methods |
| `_.cloneDeep(obj)` (lodash) | deep | handles most cases |

## Compare

| | Shallow | Deep |
|---|---|---|
| Nested objects | shared (same reference) | copied |
| Speed | fast | slower |
| Use when | flat objects, or you only change top-level fields | nested data you will mutate |

## Remember

- `=` does not copy: `const b = a` makes both names point to the same object.
- In React and Redux, copy with spread at each level you change instead of deep copying everything.
- `Object.freeze` makes an object read-only (shallow). See [mutable vs immutable](mutable-vs-immutable.md).
