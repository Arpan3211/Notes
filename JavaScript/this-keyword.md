# The `this` keyword

> `this` is decided by **how a function is called**, not where it is written (arrow functions are the exception).

## Rules (in order of priority)

| # | How it is called | `this` is | Example |
|---|---|---|---|
| 1 | with `new` | the new object | `new Person("A")` |
| 2 | explicit binding: `call`, `apply`, `bind` | the object you pass | `fn.call(user)` |
| 3 | as a method: `obj.method()` | `obj` (the object before the dot) | `person.greet()` |
| 4 | plain function call: `fn()` | global object (sloppy mode) or `undefined` (strict mode) | `showThis()` |
| 5 | arrow function | `this` of the surrounding scope (lexical) | `() => this` |
| 6 | DOM event handler (regular function) | the element | `btn.addEventListener("click", function () {})` |
| 7 | top level of a script | `window` (browser) / `globalThis` | `console.log(this)` |

```js
const person = {
  name: "Alice",
  greet() { console.log("Hello, " + this.name); },
};
person.greet();                // Hello, Alice   (rule 3)

const fn = person.greet;
fn();                          // Hello, undefined  (rule 4: `this` lost)

fn.call({ name: "Bob" });      // Hello, Bob     (rule 2)
const bound = person.greet.bind(person);
bound();                       // Hello, Alice
```

## Losing `this`

```js
setTimeout(person.greet, 0);               // `this` is lost
setTimeout(() => person.greet(), 0);       // fix 1: arrow wrapper
setTimeout(person.greet.bind(person), 0);  // fix 2: bind
```

## Arrow function inside a method

```js
const obj = {
  name: "Alice",
  greet() {
    const inner = () => console.log("Hello, " + this.name);  // `this` is obj
    inner();
  },
};
obj.greet();   // Hello, Alice
```

## Strict mode

In a plain call `this` is `undefined`, not the global object (see [strict mode](strict-mode.md)).

## Remember

- Use arrow functions for callbacks that need the outer `this`, regular methods for object methods (see [arrow functions](arrow-functions.md)).
- `bind` creates a new function, `call` and `apply` run it now (see [call, apply, bind](call-apply-bind.md)).
- In classes, methods lose `this` when passed as callbacks. Bind them in the constructor or use class fields with arrows.
