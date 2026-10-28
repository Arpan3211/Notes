# Currying and unary functions

> Currying turns `f(a, b, c)` into `f(a)(b)(c)`: a chain of functions that each take one argument.

## Unary function

A function that takes exactly one argument (arity 1). Currying builds functions out of unary functions.

```js
const square = (n) => n * n;   // unary
```

Arity names: unary (1), binary (2), ternary (3), variadic (any number).

## Currying

```js
function sum(a) {
  return (b) => (c) => a + b + c;
}
sum(1)(2)(3);   // 6

const add = (x) => (y) => x + y;
add(2)(3);      // 5
```

## Why use it

- Reuse a function with some arguments fixed (partial application).
- Build specialised functions from a general one.

```js
const multiply = (a) => (b) => a * b;
const double = multiply(2);
double(5);   // 10
```

## Generic curry helper

```js
function curry(fn) {
  return function curried(...args) {
    return args.length >= fn.length
      ? fn.apply(this, args)
      : (...more) => curried.apply(this, [...args, ...more]);
  };
}
const add3 = curry((a, b, c) => a + b + c);
add3(1)(2)(3);   // 6
add3(1, 2)(3);   // 6
```

## Remember

- Currying relies on [closures](closures.md): each inner function remembers earlier arguments.
- Currying = one argument at a time. Partial application = fix some arguments, take the rest later.
