# What are the limitations of arrow functions


Arrow functions in JavaScript provide a concise syntax for writing functions, but they come with certain limitations compared to traditional function expressions. Here are some of the key limitations of arrow functions:

#### 1. **No `this` Binding**

Arrow functions do not have their own `this` context; instead, they lexically bind `this` from the surrounding scope. This can lead to unexpected behavior if you're expecting `this` to refer to the object from which the method is called.

#### Example:

```javascript
const obj = {
  value: 42,
  getValue: function () {
    const arrowFunc = () => {
      console.log(this.value); // Lexically binds `this` from `getValue`
    };
    arrowFunc();
  },
};

obj.getValue(); // Outputs: 42
```

However, if you try to use an arrow function where you expect `this` to refer to the object:

```javascript
const obj = {
  value: 42,
  getValue: function () {
    const arrowFunc = () => {
      console.log(this.value);
    };
    setTimeout(arrowFunc, 1000); // Lexical `this` will still refer to `obj`
  },
};

obj.getValue(); // Outputs: 42
```

In contrast, if you used a regular function:

```javascript
const obj = {
  value: 42,
  getValue: function () {
    const regularFunc = function () {
      console.log(this.value); // `this` refers to the global object, not `obj`
    };
    setTimeout(regularFunc, 1000);
  },
};

obj.getValue(); // Outputs: undefined (in strict mode) or `undefined` (in non-strict mode)
```

#### 2. **Cannot Be Used as Constructors**

Arrow functions cannot be used as constructor functions. They do not have a `[[Construct]]` method, so you cannot create instances of an arrow function using the `new` keyword.

#### Example:

```javascript
const Person = (name) => {
  this.name = name; // `this` is not bound to the new instance
};

const alice = new Person("Alice"); // TypeError: Person is not a constructor
```

#### 3. **No `arguments` Object**

Arrow functions do not have their own `arguments` object. If you need access to the arguments passed to the function, you must use a regular function.

#### Example:

```javascript
const arrowFunc = () => {
  console.log(arguments); // ReferenceError: arguments is not defined
};

function regularFunc() {
  console.log(arguments); // Works as expected
}

regularFunc(1, 2, 3); // Outputs: [1, 2, 3]
arrowFunc(1, 2, 3); // Throws an error
```

#### 4. **No `super` and `new.target`**

Arrow functions do not have a `super` binding, which means they cannot use `super` to call methods from the parent class in class inheritance. They also do not have a `new.target` binding, which is used to detect whether a function was called with `new`.

#### Example:

```javascript
class Parent {
  constructor() {
    console.log("Parent constructor");
  }
  sayHello() {
    console.log("Hello from Parent");
  }
}

class Child extends Parent {
  constructor() {
    super(); // Calls Parent constructor
    const arrowFunc = () => {
      super.sayHello(); // ReferenceError: Cannot access 'super' before initialization
    };
    arrowFunc();
  }
}

const child = new Child(); // TypeError: Cannot access 'super' before initialization
```

#### 5. **Not Suitable for All Use Cases**

Due to the limitations in their behavior and structure, arrow functions may not be suitable for all situations, especially where function context, dynamic `this` binding, or the `arguments` object is essential.

#### Summary

- **Arrow functions** provide a concise syntax but come with limitations such as not having their own `this`, `arguments`, `super`, and `new.target`, as well as not being usable as constructors.
- Understanding these limitations helps developers choose the appropriate function type for their specific use case, ensuring that the intended behavior is achieved in their JavaScript code.

---

---

---

## Why arrow function don't have this


Arrow functions in JavaScript don’t have their own `this` because they are designed to inherit the `this` value from their surrounding context (or lexical scope). This is a key difference from regular functions, which define their own `this` based on how they are invoked. Here’s a breakdown of why and how arrow functions behave this way:

### Regular Functions and `this`

In a regular function, `this` is determined by how the function is called. For example:

- If a function is called as a method of an object, `this` refers to the object.
- If a function is called in the global scope, `this` refers to the global object (or `undefined` in strict mode).
- If used in an event handler, `this` refers to the element that triggered the event.

### Arrow Functions and Lexical `this`

Arrow functions differ because they **do not create their own `this`**. Instead, they capture the `this` value from their surrounding lexical environment at the time the function is defined.

This behavior is useful because it eliminates the need for workarounds like `var self = this` (common in older code) or using `.bind()` to ensure a consistent `this`.

### Example 1: Regular Function vs Arrow Function in Object Method

#### Regular Function:

```javascript
const obj = {
  name: "Arpan",
  printName: function () {
    console.log(this.name); // 'this' refers to the object 'obj'
  },
};

obj.printName(); // Output: "Arpan"
```

Here, `this` refers to `obj` because `printName` is called as a method of `obj`.

#### Arrow Function:

```javascript
const obj = {
  name: "Arpan",
  printName: () => {
    console.log(this.name); // 'this' refers to the surrounding context, not 'obj'
  },
};

obj.printName(); // Output: undefined
```

In the case of an arrow function, `this` is **lexically scoped**. Since arrow functions don’t have their own `this`, the value of `this` inside `printName` is the `this` of the outer context, which, in this case, is likely the global object (or `undefined` in strict mode).

### Example 2: Arrow Function Inside a Regular Function (Lexical `this`)

In cases where nested functions are used, arrow functions help avoid the ambiguity of `this`:

#### Without Arrow Function:

```javascript
function Person() {
  this.age = 25;

  setTimeout(function () {
    console.log(this.age); // 'this' refers to the global object or 'undefined' in strict mode
  }, 1000);
}

const person = new Person(); // Output: undefined
```

In this example, the inner function in `setTimeout` has its own `this`, which refers to the global object (not the `Person` instance). To access the `Person` instance's `this`, you’d need to bind `this` or use a workaround.

#### With Arrow Function:

```javascript
function Person() {
  this.age = 25;

  setTimeout(() => {
    console.log(this.age); // 'this' is inherited from the outer function (Person instance)
  }, 1000);
}

const person = new Person(); // Output: 25
```

Here, the arrow function inside `setTimeout` uses the `this` of the outer `Person` function, so it correctly logs `25`.

### Why Arrow Functions Don't Have Their Own `this`:

- Arrow functions were introduced to simplify certain use cases where preserving the value of `this` was common.
- Lexically scoped `this` ensures that arrow functions don’t unexpectedly change their context, making the code easier to read and more predictable, especially in callback-heavy code like asynchronous programming or event handlers.
