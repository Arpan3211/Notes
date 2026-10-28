# null vs undefined vs undeclared

> `undefined` = declared but no value. `null` = intentionally empty. Undeclared = does not exist.

| | `undefined` | `null` | Undeclared |
|---|---|---|---|
| Meaning | no value assigned yet | intentional "no value" | variable was never declared |
| `typeof` | `"undefined"` | `"object"` (historic bug) | `"undefined"` (no error) |
| Reading it | no error | no error | `ReferenceError` |
| Example | `let a;` | `let a = null;` | `console.log(b);` |

## How `undefined` appears

```js
let x;                // declared, not assigned
x;                    // undefined
(function () {})();   // a function with no return gives undefined
({}).missing;         // a missing property gives undefined
```

## `null`

```js
let user = null;             // "no user yet"
typeof null;                 // "object"
```

## Undeclared

```js
console.log(z);              // ReferenceError: z is not defined
typeof z;                    // "undefined" (typeof is safe here)
```

## Checking

```js
x === undefined;
x === null;
x == null;          // true for both null and undefined
x ?? "default";     // fallback for null or undefined
```

## Remember

- `null == undefined` is `true`, `null === undefined` is `false`.
- Assigning to an undeclared name in sloppy mode creates a global. Strict mode throws instead (see [strict mode](strict-mode.md)).
- `let` variables in the TDZ also throw (see [hoisting and TDZ](hoisting-and-tdz.md)).
