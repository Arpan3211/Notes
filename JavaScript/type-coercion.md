# Type coercion

> JavaScript automatically converts a value from one type to another during an operation or comparison.

## Rules to remember

| Situation | What happens | Example |
|---|---|---|
| `+` with a string | other side becomes a string | `5 + "10"` is `"510"` |
| `- * /` | both sides become numbers | `"10" - 5` is `5` |
| `==` | operands converted to a common type | `5 == "5"` is `true` |
| `===` | no conversion | `5 === "5"` is `false` |
| Boolean context (`if`, `!`, `&&`) | value becomes truthy or falsy | `if ("")` is false |

```js
var x = 5, y = "10";
x + y;           // "510"
y - x;           // 5
"5" * "2";       // 10
true + 1;        // 2
[] + {};         // "[object Object]"
null == undefined;  // true
null === undefined; // false
```

## Falsy values (everything else is truthy)

`false`, `0`, `-0`, `0n`, `""`, `null`, `undefined`, `NaN`.

Note that `"0"`, `[]` and `{}` are **truthy**.

## Implicit vs explicit

- **Implicit**: done by the engine (`"5" * 2`).
- **Explicit**: you convert it yourself: `Number("5")`, `String(5)`, `Boolean(1)`, `parseInt("5px")`.

## Remember

- Use `===` to avoid surprises.
- `NaN` is never equal to anything, including itself.
