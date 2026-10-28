# The `new` keyword

> `new` creates an object from a constructor function or class, and links it to the constructor's prototype.

## What `new` does (4 steps)

1. Creates a new empty object.
2. Links its `[[Prototype]]` to `Constructor.prototype`.
3. Runs the constructor with `this` set to the new object.
4. Returns the object (unless the constructor returns another **object**, then that is returned).

```js
function Person(name, age) {
  this.name = name;
  this.age = age;
}
Person.prototype.hello = function () { return "Hi " + this.name; };

const alice = new Person("Alice", 30);
alice.hello();                       // "Hi Alice"
alice.__proto__ === Person.prototype;  // true
```

```js
class Animal {
  constructor(name) { this.name = name; }
  speak() { console.log(`${this.name} makes a noise.`); }
}
new Animal("Dog").speak();   // Dog makes a noise.
```

## `function User(){}` vs `User()` vs `new User()`

| | `function User() {}` | `var user = User()` | `var user = new User()` |
|---|---|---|---|
| What it is | function declaration | normal call | constructor call |
| `this` | n/a | global object (`undefined` in strict mode) | the new object |
| Creates a new object | no | no | yes |
| Result | a reusable function | return value (or `undefined`) | the new instance |
| Prototype link | no | no | yes |

```js
function User() { this.name = "John"; }

const a = User();       // undefined, and `name` leaks to the global object (sloppy mode)
const b = new User();   // { name: "John" }
```

## Rules

- Arrow functions cannot be used with `new` (`TypeError: is not a constructor`).
- Calling a class without `new` throws a `TypeError`.
- Name constructors in PascalCase. Inside a constructor you can check `new.target` to see if `new` was used.
- Returning a primitive from a constructor is ignored. Returning an object replaces the instance.

## Remember

- See [prototypes](prototypal-inheritance.md) for how the link works and [classes](classes.md) for the class syntax.
