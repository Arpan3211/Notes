# Arrow functions

> A shorter function syntax (ES6) that has no `this`, `arguments`, `super` or `new.target` of its own.

```js
const add = (a, b) => a + b;        // implicit return
const square = (n) => n * n;        // one parameter: parentheses optional
const make = () => ({ id: 1 });     // return an object: wrap it in ()
const log = (x) => { console.log(x); };  // block body needs `return`
```

## Arrow vs regular function

| | Regular function | Arrow function |
|---|---|---|
| Own `this` | yes (depends on the call) | no (takes `this` from the surrounding scope) |
| `arguments` object | yes | no (use rest `...args`) |
| Use with `new` (constructor) | yes | no (`TypeError`) |
| `super`, `new.target` | yes | no |
| `call` / `apply` / `bind` change `this` | yes | no |
| Hoisted | declarations are | no (like any expression) |
| Has `prototype` | yes | no |

## Lexical `this` (why they exist)

```js
function Person() {
  this.age = 25;
  setTimeout(function () { console.log(this.age); }, 0);  // undefined (own `this`)
  setTimeout(() => console.log(this.age), 0);             // 25 (outer `this`)
}
new Person();
```

Arrow functions capture `this` from where they are **defined**, which removes the old `var self = this` and `.bind(this)` workarounds.

## When not to use an arrow function

```js
const obj = {
  name: "Arpan",
  printName: () => console.log(this.name),   // `this` is NOT obj -> undefined
  printOk() { console.log(this.name); },     // method shorthand -> "Arpan"
};

btn.addEventListener("click", () => this);   // `this` is not the button (use function or event.currentTarget)

const f = () => console.log(arguments);      // ReferenceError (no arguments)
const g = (...args) => console.log(args);    // use rest parameters
```

Also avoid arrow functions for object methods, prototype methods, constructors and event handlers that need `this`.

## Remember

- Arrow functions are best for callbacks (`map`, `filter`, `setTimeout`, promises).
- See [this keyword](this-keyword.md) for all `this` rules.
