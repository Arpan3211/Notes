# Prototypal in Javascript


**Explanation**:

Javascript have Prototypal behaviour
The term **"Prototypal"** in JavaScript refers to the concept of using a **prototype** object as a template from which other objects can inherit properties and methods.

#### Understanding "Prototypal"

1. **Prototype**: A prototype is an object from which other objects inherit properties. In JavaScript, almost every object has a prototype, which is another object from which it inherits properties. The prototype serves as a blueprint for creating objects that share common behavior.
2. **Prototypal Inheritance**: This is a form of object-oriented inheritance where objects can inherit directly from other objects. In JavaScript, objects have an internal link (often referred to as `[[Prototype]]` or `__proto__`) that points to their prototype. When you try to access a property or method on an object, JavaScript first looks for it on that object. If it does not find it, it looks at the object's prototype, and so on, up the prototype chain.
3. **Prototypal**: The adjective "prototypal" is derived from the noun "prototype." It describes anything related to or based on the concept of prototypes. Thus, "prototypal inheritance" refers to the inheritance of properties and methods in JavaScript based on prototypes.

#### Why "Prototypal"?

JavaScript is designed around a flexible, prototype-based model for objects rather than the classical class-based model found in languages like Java or C++.

- **Dynamic and Flexible**: In prototypal inheritance, objects can inherit directly from other objects, which provides more flexibility. You can easily extend objects or modify prototypes at runtime, allowing for dynamic changes in inheritance.
- **Memory Efficient**: Since methods and properties can be shared across instances through the prototype, memory usage is more efficient than copying properties or methods to every instance

```js
// Create a prototype object
const animalPrototype = {
  speak() {
    console.log(`${this.name} makes a noise.`);
  },
};

// Create a new object that inherits from the prototype
const dog = Object.create(animalPrototype);
dog.name = "Dog";
dog.speak(); // Output: Dog makes a noise.
```

In this example:

- `animalPrototype` is the **prototype** object.
- `dog` is an object that inherits properties and methods from `animalPrototype` using `Object.create()`.
- `speak` is a method defined on the prototype that is available to any object inheriting from it.

#### Prototypal Inheritance in JavaScript

In JavaScript, every object has an internal property called `[[Prototype]]` (often referred to as `__proto__`), which points to another object. This chain of objects is called the **prototype chain**. When a property or method is accessed on an object, JavaScript will first look for that property or method on the object itself. If it is not found, it will look up the prototype chain until it finds the property or method or reaches the end of the chain.

- **Prototype Chain**: An object inherits from another object through its prototype. When you try to access a property or method on an object, JavaScript will search through the object’s own properties, and if it doesn’t find it, it will look up the prototype chain.
- **Object Inheritance**: In JavaScript, objects can inherit directly from other objects, creating a prototype chain. This is in contrast to classical inheritance, where classes inherit from other classes.
- **`Object.create()` Method**: This method allows you to create a new object with a specified prototype, providing a more direct way to set up inheritance.
- **Constructor Functions and `new` Keyword**: Before ES6, constructor functions and the `new` keyword were used to create objects with shared methods and properties. This involves setting the prototype of the created objects.
- **`__proto__` and `prototype` Properties**:
  - **`__proto__`**: A property that every object has (though not recommended for direct use in modern JavaScript) that points to the prototype of the object.
  - **`prototype`**: A property of constructor functions (functions meant to be used with the `new` keyword) that points to the prototype object, which is used to build the `__proto__` of instances created by that constructor.
