# Default parameters

> ES6 lets a parameter have a default value, used when the argument is missing or `undefined`.

```js
function greet(name = "Guest") {
  console.log("Hello, " + name + "!");
}

greet("John");      // Hello, John!
greet();            // Hello, Guest!
greet(undefined);   // Hello, Guest!
greet(null);        // Hello, null!   (null does not trigger the default)
```

## Rules

- Only `undefined` triggers the default. `null`, `0`, `""` and `false` do not.
- The default is evaluated **at call time**, each call. It can be an expression or a function call.
- Later defaults can use earlier parameters.

```js
function f(a, b = a * 2, c = Date.now()) { return [a, b]; }
f(2);   // [2, 4]
```

- A default can use only earlier parameters (a later one is in the [TDZ](hoisting-and-tdz.md)): `function f(a = b, b) {}` throws.
- Destructuring defaults: `function f({ x = 1, y = 2 } = {}) {}`.

## Before ES6

```js
function greet(name) {
  name = name || "Guest";   // wrong for 0 and ""
}
```

## Remember

- A function's `length` counts only the parameters before the first default.
