# Static vs dynamic typing

> JavaScript is **dynamically typed**: a variable has no fixed type, the value does, and types are checked at run time.

## What that means

- No type is declared, and a variable can hold any type over time.
- Types are checked while the code runs, not before.
- JavaScript converts types automatically in some operations (coercion).

```js
let x = 5;        // number
x = "Hello";      // now a string
x = true;         // now a boolean

5 + "10";         // "510"  (number converted to string)
```

## Static vs dynamic

| | Static (Java, C++, TypeScript) | Dynamic (JavaScript, Python) |
|---|---|---|
| Type checking | At compile time | At run time |
| Declare types | Required | Not required |
| Type errors found | Before running | While running |

## Pros and cons

- Pros: flexible, fast to write.
- Cons: type bugs show up at run time. TypeScript adds static types to fix this.

## Interview answer

JavaScript is dynamically typed (and weakly typed because of coercion). It does no type checking at compile time.
