# What is the new keyword used for


The `new` keyword in JavaScript is used to create an instance of a constructor function or a class. When you use `new`, it does the following:

#### 1. **Creates a New Object**

When `new` is called, it creates a new, empty object. This object is then linked to the constructor's prototype.

#### 2. **Sets the `this` Context**

Inside the constructor function or class, `this` is set to the new object being created. This allows you to assign properties and methods to the new object.

#### 3. **Executes the Constructor Function**

The constructor function or class is invoked, allowing you to initialize the new object. If the constructor function returns a non-primitive value (like an object), that value is returned instead of the new object.

#### 4. **Returns the New Object**

The new object is returned automatically, even if the constructor does not explicitly return anything.

#### Example of Using the `new` Keyword

Here’s a simple example to illustrate the use of the `new` keyword:

#### Constructor Function Example:

```javascript
function Person(name, age) {
  this.name = name; // Assign name property
  this.age = age; // Assign age property
}

// Create a new instance of Person
const alice = new Person("Alice", 30);

console.log(alice.name); // Outputs: Alice
console.log(alice.age); // Outputs: 30
```

#### Class Example:

With ES6 classes, you can also use the `new` keyword to create instances:

```javascript
class Animal {
  constructor(name) {
    this.name = name; // Assign name property
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

// Create a new instance of Animal
const dog = new Animal("Dog");

console.log(dog.name); // Outputs: Dog
dog.speak(); // Outputs: Dog makes a noise.
```

#### Summary of What `new` Does

1. **Creates a new object**.
2. **Sets the `this` context** in the constructor to the new object.
3. **Executes the constructor function** or class.
4. **Returns the new object** (or the explicitly returned object if applicable).

#### Important Notes

- **Prototypes**: The newly created object has its internal `[[Prototype]]` property set to the constructor’s prototype, which allows it to inherit methods and properties defined on the prototype.
- **Constructor Functions**: If the constructor function does not explicitly return an object, the newly created object is returned automatically.
- **Cannot be used with non-constructor functions**: If you try to use `new` with a regular function that is not meant to be a constructor, it can lead to unexpected results. For example, calling `new` on an arrow function will throw an error, as arrow functions do not have a `[[Construct]]` method.

#### Conclusion

The `new` keyword is a fundamental part of object-oriented programming in JavaScript, allowing you to create instances of objects based on constructor functions or classes. Understanding how it works is crucial for effective use of JavaScript's prototypal inheritance and object creation.
