# Classes

> ES6 `class` is cleaner syntax over constructor functions and prototypes.

```js
class Person {
  constructor(name, age) {     // runs on `new`
    this.name = name;
    this.age = age;
  }
  greet() {                    // stored on Person.prototype (shared)
    console.log(`Hi, I am ${this.name}, ${this.age}`);
  }
}

const alice = new Person("Alice", 30);
alice.greet();   // Hi, I am Alice, 30
```

## Inheritance

```js
class Animal {
  constructor(name) { this.name = name; }
  speak() { console.log(`${this.name} makes a noise.`); }
}

class Dog extends Animal {
  constructor(name) {
    super(name);                 // required before using `this`
  }
  speak() {                      // overrides the parent
    super.speak();               // call the parent version
    console.log(`${this.name} barks.`);
  }
}
new Dog("Buddy").speak();
```

## Members

```js
class Circle {
  #radius;                          // private field
  static PI = 3.14159;              // static property
  constructor(r) { this.#radius = r; }
  get area() { return Circle.PI * this.#radius ** 2; }   // getter
  set radius(v) { if (v > 0) this.#radius = v; }         // setter
  static unit() { return new Circle(1); }                // static method
}
const c = new Circle(5);
c.area;      // getter used like a property
c.#radius;   // SyntaxError (private)
```

| Member | Syntax | Lives on |
|---|---|---|
| Method | `greet() {}` | the prototype |
| Static | `static x` | the class itself |
| Getter / setter | `get x()` / `set x(v)` | the prototype |
| Private | `#x` | the instance, hidden outside |
| Class field | `count = 0;` | each instance |

## Class vs constructor function

- Classes are not hoisted like functions (they are in the [TDZ](hoisting-and-tdz.md)).
- Calling a class without `new` throws.
- Class bodies run in [strict mode](strict-mode.md).
- Under the hood `typeof Person` is `"function"` and methods are on `Person.prototype` (see [prototypes](prototypal-inheritance.md)).

## Remember

- In a subclass constructor, call `super()` before `this`.
- Methods passed as callbacks lose `this`. Use an arrow field (`handle = () => {}`) or `bind`.
- JavaScript has no multiple inheritance. Use mixins or composition.
