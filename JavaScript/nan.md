# NaN, isNaN and isFinite

> `NaN` ("Not-a-Number") is the result of an invalid number operation. Its type is still `"number"`.

## When you get NaN

```js
0 / 0;              // NaN
Number("hello");    // NaN
parseInt("abc");    // NaN
Math.sqrt(-1);      // NaN
undefined + 1;      // NaN
```

Note that `1 / 0` is `Infinity`, not `NaN`.

## NaN is not equal to itself

```js
NaN === NaN;   // false
NaN == NaN;    // false
```

So you cannot test for it with `===`.

## `isNaN` vs `Number.isNaN`

| | `isNaN(x)` (global) | `Number.isNaN(x)` |
|---|---|---|
| Converts `x` to a number first | Yes | No |
| `"hello"` | `true` (misleading) | `false` |
| `42` | `false` | `false` |
| `NaN` | `true` | `true` |

```js
isNaN("hello");          // true   ("hello" -> NaN first)
Number.isNaN("hello");   // false  (it is a string, not NaN)
Number.isNaN(NaN);       // true
```

Use `Number.isNaN` (or `Object.is(x, NaN)`).

## isFinite

True for a finite number, false for `Infinity`, `-Infinity` and `NaN`.

```js
isFinite(42);          // true
isFinite("Hello");     // false
isFinite(1 / 0);       // false
Number.isFinite("42"); // false (no conversion, stricter)
```

## Remember

- Prefer `Number.isNaN` and `Number.isFinite`. The global versions convert their argument.
