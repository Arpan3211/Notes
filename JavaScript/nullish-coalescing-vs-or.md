# `??` vs `||`

> Both give a fallback value. `||` replaces any falsy value, `??` only `null` and `undefined`.

| Operator | Falls back when the left side is | Example |
|---|---|---|
| `\|\|` (logical OR) | any falsy: `false`, `0`, `""`, `null`, `undefined`, `NaN` | `"" \|\| "x"` is `"x"` |
| `??` (nullish coalescing) | only `null` or `undefined` | `"" ?? "x"` is `""` |

```js
0 || 10;        // 10
0 ?? 10;        // 0
false || "a";   // "a"
false ?? "a";   // false
null ?? "Guest"; // "Guest"
```

## Real example

```js
const user = { name: "", age: 0, nickname: null };

user.name || "Anonymous";   // "Anonymous"  (empty string lost)
user.name ?? "Anonymous";   // ""           (kept)
user.age ?? 18;             // 0            (kept)
user.nickname ?? "Guest";   // "Guest"
```

## Which to use

- `??`: `0`, `""` and `false` are valid values (counts, text, flags).
- `||`: any falsy value should be replaced.

## Remember

- Mixing `??` with `||` or `&&` without parentheses is a `SyntaxError`.
- Related: optional chaining `a?.b ?? "default"`.
