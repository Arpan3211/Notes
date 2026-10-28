# Data types

> JavaScript has 7 primitive types and one non-primitive type (object).

## Primitive types

| Type | Example | `typeof` |
|---|---|---|
| String | `"hi"` | `"string"` |
| Number | `42`, `3.14`, `NaN` | `"number"` |
| Boolean | `true` | `"boolean"` |
| undefined | `let x;` | `"undefined"` |
| null | `null` | `"object"` (old bug) |
| BigInt | `10n` | `"bigint"` |
| Symbol | `Symbol("id")` | `"symbol"` |

## Non-primitive (object)

Array, Function, Date, RegExp, Set, Map and plain objects. All of them have `typeof` `"object"`, except functions (`"function"`).

```js
typeof [];            // "object"  -> use Array.isArray([])
typeof function(){};  // "function"
typeof null;          // "object"
```

## Primitive vs non-primitive

| | Primitive | Non-primitive |
|---|---|---|
| Stored as | Value | Reference (address) |
| Mutable | No (immutable) | Yes |
| Compared by | Value | Reference |
| Memory | Stack | Heap |

```js
const a = { x: 1 };
const b = { x: 1 };
a === b;  // false (different references)
a.x = 2;  // allowed even with const (the reference does not change)
```

## Remember

- `const` stops reassignment, not mutation of an object.
- Assigning an object copies the **reference**, not the object (see [shallow vs deep copy](shallow-vs-deep-copy.md)).
- Check arrays with `Array.isArray`, and `null` with `=== null`.
