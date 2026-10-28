# Prototypes and prototypal inheritance

> Every object has a hidden link to another object (its prototype). If a property is not found on the object, JavaScript looks along this **prototype chain**.

## Prototype chain

```js
const animal = { speak() { console.log(`${this.name} makes a noise.`); } };
const dog = Object.create(animal);   // dog's prototype is animal
dog.name = "Dog";

dog.speak();                         // found on animal
dog.toString();                      // found on Object.prototype
dog.fly;                             // undefined (end of the chain: null)
```

Lookup order: the object itself, then its prototype, then that prototype's prototype... until `null`.

## `prototype` vs `__proto__`

| | `prototype` | `__proto__` |
|---|---|---|
| Exists on | constructor functions (and classes) | every object |
| Meaning | the object that **instances will inherit from** | the object this object **inherits from** (its `[[Prototype]]`) |
| Use | add shared methods | inspect the chain (prefer `Object.getPrototypeOf`) |

```js
function Person(name) { this.name = name; }
Person.prototype.greet = function () { return `Hi, ${this.name}`; };

const alice = new Person("Alice");
alice.greet();                                    // "Hi, Alice"
alice.__proto__ === Person.prototype;             // true
Object.getPrototypeOf(alice) === Person.prototype; // true
Person.prototype.constructor === Person;          // true
```

## Why use it

- Methods are stored once on the prototype and shared by all instances (saves memory).
- Objects can be extended at run time.

## Useful methods

| Method | Use |
|---|---|
| `Object.create(proto)` | new object with a chosen prototype |
| `Object.getPrototypeOf(o)` / `Object.setPrototypeOf(o, p)` | read / change the prototype |
| `o.hasOwnProperty("x")` / `Object.hasOwn(o, "x")` | own property, not inherited |
| `proto.isPrototypeOf(o)` / `o instanceof Fn` | check the chain |

## Remember

- ES6 `class` is syntax on top of the same prototype system (see [classes](classes.md)).
- Do not use `__proto__` in new code. Setting a prototype after creation is slow.
- `new` sets `instance.__proto__ = Constructor.prototype` (see [`new`](new-keyword.md)).
- Chain of built-ins: array -> `Array.prototype` -> `Object.prototype` -> `null`.
