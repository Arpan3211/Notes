# Operators

> Arithmetic, assignment, comparison, logical, nullish and ternary operators.

## Arithmetic

`+  -  *  /  %  **` (and `++`, `--`)

```js
7 % 3;   // 1  (remainder)
2 ** 3;  // 8  (power)
```

## Assignment

`=  +=  -=  *=  /=  %=  **=`

```js
let y = 5;
y += 3;   // y = y + 3 -> 8
let d = 2;
d **= 3;  // d = d ** 3 -> 8
```

## Comparison

| Operator | Meaning | Example |
|---|---|---|
| `==` | equal after type coercion | `1 == "1"` is `true` |
| `===` | strictly equal (value and type) | `1 === "1"` is `false` |
| `!=` / `!==` | not equal / strictly not equal | |
| `> >= < <=` | greater / less | `250 >= 250` is `true` |

Prefer `===`. See [type coercion](type-coercion.md).

## Logical

```js
true || false;    // true   (OR: first truthy value)
1 > 2 && 2 > 1;   // false  (AND: first falsy value)
!true;            // false  (NOT)
```

`||` and `&&` return one of their operands, not just `true`/`false`. See [short-circuit evaluation](short-circuit-evaluation.md).

## Nullish coalescing `??`

Returns the right side only when the left is `null` or `undefined`. See [`??` vs `||`](nullish-coalescing-vs-or.md).

```js
null ?? "I win";   // "I win"
0 ?? "x";          // 0   (0 is not nullish)
"" ?? "x";         // ""
```

## Ternary `condition ? a : b`

```js
const result = x == 1 ? "one" : "other";
```

## BigInt

Integers beyond `Number.MAX_SAFE_INTEGER` (2^53 - 1 = 9,007,199,254,740,991).

```js
const sum = 12345678901234567890n + 98765432109876543210n;
5 + 10n;          // TypeError: cannot mix BigInt and Number
BigInt(5) + 10n;  // 15n
```

## Remember

- `**` is power, `%` is remainder (not modulo for negatives).
- `+` with a string concatenates: `5 + "10"` is `"510"`.
- BigInt and Number cannot be mixed without converting.
