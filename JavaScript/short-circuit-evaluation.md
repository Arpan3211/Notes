# Short-circuit evaluation

> `&&`, `||` and `??` stop as soon as the result is known, and return one of the operands (not a boolean).

| Operator | Returns |
|---|---|
| `a && b` | `a` if `a` is falsy, otherwise `b` |
| `a \|\| b` | `a` if `a` is truthy, otherwise `b` |
| `a ?? b` | `a` unless it is `null` or `undefined`, then `b` |

```js
true && "Hello";    // "Hello"   (both evaluated)
false && "World";   // false     (right side skipped)
true || "Hello";    // true      (right side skipped)
false || "World";   // "World"   (both evaluated)
```

## Common uses

```js
const name = user.name || "Guest";          // default value
isLoggedIn && showProfile();                // run only when true
user && user.address && user.address.city;  // guard (optional chaining `?.` is cleaner)
```

## Remember

- Falsy values: `false`, `0`, `""`, `null`, `undefined`, `NaN`, `0n`.
- `||` treats `0` and `""` as missing. Use `??` when those are valid (see [`??` vs `||`](nullish-coalescing-vs-or.md)).
