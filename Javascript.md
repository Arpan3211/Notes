[Mohamed-Hashem - Repositories](https://github.com/Mohamed-Hashem?tab=repositories)
[Sudheerj-Javascript - Repositories](https://github.com/sudheerj/javascript-interview-questions)
[Sudheerj-All - Repositories](https://github.com/sudheerj?tab=repositories)

[https://quickref.me/javascript.html](https://quickref.me/javascript.html) Cheetsheet

[https://quickref.me/es6.html](https://quickref.me/es6.html) ES6 Cheetsheet

---

---

### <u>**Q1. Data types in JS**</u>

**Explanation**:

- **String** :Primitive Data Types typeof is string
- **Number** :Primitive Data Types typeof is number
- **Boolean** :Primitive Data Types typeof is boolean
- **undefined** :Primitive Data Types typeof is undefined
- **null** :Primitive Data Types typeof is object
- **bigint** :Primitive Data Types typeof is bigint
- **object** typeof is object
- **Array** typeof is object

```jsx
//Symbol
let uniqueID = Symbol("id"); // Symbol     :Primitive Data Types
```

**Arrays in JavaScript:**

- An array in JavaScript is a list-like object used to store multiple values in a single variable.
- Arrays can hold values of any type, such as numbers, strings, objects, other arrays, etc.
- Arrays have a `typeof` operator that returns `"object"`,
- For example, arrays have a `length` property, which gives the number of elements in the array, and methods like `push()`, `pop()`, `map()`, `filter()`, etc.

**Common Examples of Non-Primitive Types:**

- **`Array`**: Special type of object used to store ordered collections.

  `let fruits = ['apple', 'banana', 'cherry']; // Array`

- **`Function`**: A block of code designed to perform a particular task. Functions are also objects in JavaScript.
  `` function greet(name) {   return `Hello, ${name}!`; } ``
- **`Date`**: An object representing a date and time.

  `let currentDate = new Date(); // Date`

- **`RegExp`**: Represents regular expressions, which are patterns used to match character combinations in strings.

  `let regex = /hello/; // RegExp`

- **`Set`**: Represents a collection of unique values.
  `let uniqueNumbers = new Set([1, 2, 3]); // Set`
- **`Map`**: Represents a collection of key-value pairs where keys can be of any data type.
  `let map = new Map(); map.set('name', 'Alice'); map.set('age', 25);`

#### **Key Characteristics of Non-Primitive Data Types:**

- **Mutability:** Objects are mutable, meaning their properties can be changed even if the object itself is `const`.
- **Stored by Reference:** Non-primitive values are stored as references. When you assign an object to a variable, you are assigning the reference (or memory address) to the variable, not the object itself.
- **Comparisons:** When comparing two objects (including arrays and functions), they are considered equal only if they reference the same object in memory.

#### **Difference Between Primitive and Non-Primitive Data Types:**

| Feature               | Primitive Data Types                                     | Non-Primitive Data Types                      |
| --------------------- | -------------------------------------------------------- | --------------------------------------------- |
| **Types**             | Number, String, Boolean, Symbol, Null, Undefined, BigInt | Object (includes Array, Function, Date, etc.) |
| **Mutability**        | Immutable                                                | Mutable                                       |
| **Stored by**         | Value                                                    | Reference                                     |
| **Comparison**        | Compared by value                                        | Compared by reference                         |
| **Memory Allocation** | Stored in the stack                                      | Stored in the heap                            |

#### **Summary:**

- **Primitive data types** are basic types that represent single values and are immutable.
- **Non-primitive data types** (Objects) can hold collections of values or more complex entities, are mutable, and are compared by reference.

---

---

### <u>**Q2. Arithmetic Operators**</u>

**Explanation:**
**+** , **-** , _**/**_ , **%**

---

---

### <u>**Q3.Assignment Operators**</u>

**Explanation:**

- **Assignment Operator (=)**: The most basic assignment operator is the equal sign (=), which assigns a value to a variable. For example:

```jsx
let x = 10;

let y = 5;
y += 3; // Equivalent to y = y + 3, assigns the value 8 to y

let z = 7;
z -= 2; // Equivalent to z = z - 2, assigns the value 5 to z

let a = 4;
a *= 6; // Equivalent to a = a * 6, assigns the value 24 to a

let b = 10;
b /= 2; // Equivalent to b = b / 2, assigns the value 5 to b

let c = 13;
c %= 4; // Equivalent to c = c % 4, assigns the value 1 to c

let d = 2;
d **= 3; // Equivalent to d = d ** 3, assigns the value 8 to d  ===> 2 * 2 * 2
```

---

---

### <u>**Q4. string litrilers or string interpolation**</u>

**Explanation**

```jsx
>
> let age = 7;
> // String concatenation
> 'Tommy is ' + age + ' years old.';
>
> // String interpolation
> `Tommy is ${age} years old.`;

```

---

---

### <u>**Q5. Turnory operator**</u>

**Explanation:**

```jsx
var x = 1;
// => true
result = x == 1 ? true : false;
```

---

---

### <u>**Q6. operators**</u>

**Logical OR**

```jsx
true || false; // true
10 > 5 || 10 > 20; // true
false || false; // false
10 > 100 || 10 > 20; // false
```

**Logical AND**

```jsx
true && true; // true
1 > 2 && 2 > 1; // false
true && false; // false
4 === 4 && 3 > 1; // true
```

**Comparison Operators**

```jsx
1 > 3; // false
3 > 1; // true
250 >= 250; // true
1 === 1; // true
1 === 2; // false
1 === "1"; // false
```

**Logical Operator !**

```jsx
let lateToWork = true;
let oppositeValue = !lateToWork;

// => false
console.log(oppositeValue);
```

**Nullish coalescing operator ??**

```jsx
null ?? "I win"; //  'I win'
undefined ?? "Me too"; //  'Me too'

false ?? "I lose"; //  false
0 ?? "I lose again"; //  0
"" ?? "Damn it"; //  ''
```

**BigInt addition**

**`BigInt`** is a built-in data type in JavaScript that allows you to represent and work with integers larger than the maximum safe integer limit for the `Number` data type.

In JavaScript, the `Number` type can only safely represent integers between `-(2^53 - 1)` and `2^53 - 1` (i.e., from `-9,007,199,254,740,991` to `9,007,199,254,740,991`). This range is defined by the `Number.MAX_SAFE_INTEGER` and `Number.MIN_SAFE_INTEGER` constants.

```jsx
const big1 = 12345678901234567890n;
const big2 = 98765432109876543210n;
const sum = big1 + big2; // Addition
const difference = big1 - big2; // Subtraction
const product = big1 * big2; // Multiplication
const quotient = big2 / big1; // Division (result will be a BigInt)

const num = 5;
const bigIntNum = 10n;
const result = num + bigIntNum; // TypeError: Cannot mix BigInt and other type

const result = bigIntNum + BigInt(num); // Convert Number to BigInt
```

---

---

### <u>**Q7. explain scope in javascript**</u>

**Explanation:**

```jsx
let globalScope = "Global scope";
function varScopeExample() {
  if (true) {
    if (true) {
      if (true) {
        var functionalScope = "functionalScope";
        let BlocalScope = "Block scope";
        console.log(BlocalScope);
        console.log(functionalScope);
        console.log(globalScope);
      }
      console.log(functionalScope);
    }
    console.log(functionalScope);
  }
  console.log(functionalScope);
}
console.log(globalScope);
varScopeExample();
```

**Understanding the Difference Between let, const, and var in JavaScript!**

#### **var**

**Scope**: Function-scoped.  
**Hoisting**: Variables declared with var are hoisted to the top of their scope, but not initialized.  
**Usage**: Generally considered outdated due to its tendency to cause bugs. Use with caution!

#### **let**

**Scope**: Block-scoped.  
**Hoisting**: Variables declared with let are hoisted to the top of their block scope, but are not initialized.  
**Usage**: Ideal for variables that will be reassigned or have limited block scope.

#### **const**

**Scope**: Block-scoped.  
**Hoisting**: Similar to let, const is also block-scoped and not initialized during hoisting.  
**Usage**: Best for variables that will not be reassigned (though their properties can still be mutated).  
Key Takeaway:

---

---

### <u>**Q8: Execution Context in JavaScript**</u>

The **execution context** is an abstract concept that holds information about the environment in which the JavaScript code is evaluated and executed. It contains information about variables, functions, the value of `this`, and more.

#### Types of Execution Contexts

There are primarily three types of execution contexts in JavaScript:

- **Global Execution Context (GEC):**
  - This is the default execution context.
  - Created when the JavaScript script starts to run.
  - In this context, the global object (`window` in browsers, `global` in Node.js) and the special variable `this` point to the global object.
- **Function Execution Context (FEC):**
  - Created whenever a function is invoked.
  - Each function has its own execution context, which is created when the function is called.
  - The `this` value, variables, and functions declared inside the function are contained in this context.
- **Eval Execution Context:**
  - Created inside the `eval()` function if it is invoked.
  - Rarely used and not recommended due to security and performance issues.

Every execution context consists of three main components:

1. **Variable Environment:**

   - Contains variable declarations, function declarations, and arguments for the function context.

2. **Lexical Environment:**

   - Holds the reference to the environment where the code is physically written (its parent environment). It's the scope chain that determines which variables are accessible.

3. **`this` Binding:**

   - Refers to the object that the function is executed on.

#### Execution Context Lifecycle

The execution context has two phases:

1. **Creation Phase:**

   - The JavaScript engine parses the code and sets up memory space for variables and functions.
   - It creates a global execution context (GEC) when the script begins to run.
   - During this phase, all variable and function declarations are stored in memory:
     - Variables are initialized with `undefined`.
     - Functions are stored in their entirety.
   - The lexical environment and variable environment are also created in this phase.

2. **Execution Phase:**

   - The JavaScript engine executes the code line by line.
   - Variables are assigned values, and functions are executed.
   - The engine keeps track of the current execution context using the **execution stack**.

#### Execution Stack (Call Stack)

- The **execution stack** (or call stack) is a stack structure that keeps track of all execution contexts created during the execution of a script.
- When the JavaScript engine first encounters the code, it creates a global execution context and pushes it to the stack.
- When a function is invoked, a new function execution context is created and pushed onto the stack.
- When a function completes, its execution context is popped from the stack, and control returns to the previous context.

```jsx
|       Function Execution Context (FEC)       | <--- Current execution context
|  -----------------------------------------   |
|  Variable Environment: { a: 2, b: 3, result: 6 } |
|  Lexical Environment: { ... }                |
|  this: global/window                         |
|--------------------------------------------- |
|       Global Execution Context (GEC)         |
|  -----------------------------------------   |
|  Variable Environment: { x: 10, multiply: f } |
|  Lexical Environment: { ... }                |
|  this: global/window                         |
-----------------------------------------------

```

---

---

### <u>**Q9.Closures**</u>

**Explanation:**

- A **closure** is a feature in JavaScript where an inner function has access to the outer (enclosing) function's variables. This concept is critical to understanding JavaScript's execution context and function scoping. Closures provide a way to access and manipulate variables outside of their current scope, enabling powerful and flexible patterns in coding.

A **closure** is formed when:

1. **A function is declared inside another function.**
2. **The inner function maintains access to the outer function's variables even after the outer function has returned.**

A closure gives the inner function access to three levels of scope:

1. Its own scope (local variables).
2. The scope of the outer function.
3. The global scope.

   ```jsx
   function Counter() {
     let count = 0; // Private variable encapsulated in the closure

     return {
       increment: function () {
         count++;
       },
       getCount: function () {
         return count;
       },
     };
   }

   const counter = Counter();
   counter.increment();
   console.log(counter.getCount()); // Outputs 1
   ```

```javascript
function outerFunction() {
  let outerVariable = "I am from the outer scope";

  function innerFunction() {
    console.log(outerVariable); // Accessing a variable from the outer function
  }

  return innerFunction;
}

const myClosure = outerFunction(); // The outerFunction returns innerFunction
myClosure(); // Output: "I am from the outer scope"
```

- **Creation of Closure:** When `outerFunction` is called, it creates a local variable `outerVariable` and defines `innerFunction` inside of it. The `innerFunction` has access to `outerVariable` due to lexical scoping.
- **Returning a Function:** The `outerFunction` returns the `innerFunction` to the variable `myClosure`. At this point, the `outerFunction` has completed its execution and its execution context is removed from the stack, but its scope is not destroyed.
- **Preservation of Scope:** The `innerFunction`, now stored in `myClosure`, still retains access to `outerVariable` from the `outerFunction` even though `outerFunction` has finished executing. This is because the `innerFunction` forms a closure over `outerVariable`.

#### Common Pitfalls and Considerations

1. **Memory Leaks:** Since closures keep references to variables in their scope chain, they can potentially cause memory leaks if not handled properly. Functions holding onto unused references can prevent garbage collection.
2. **Overuse of Closures:** While closures are powerful, overusing them can lead to complex and less readable code. It is essential to balance the use of closures with maintainability.
3. **Performance Concerns:** Closures can have performance implications due to the way JavaScript engines need to maintain references to the variables they capture. In hot code paths, this might affect performance.

---

---

### <u>**Q10.Explain Hoisting in javascript.**</u>

**Explanation:**

In Javascript we declare the variable using ( var , let and const ) , and we accessing the varibles or function after the decletation but in case of var and normal functions we can access the variables before decleration

```jsx
//------**Variable Hoisting: -----

console.log(myVar); // undefined
var myVar = 10;
console.log(myVar) //10

// ----function Hoisting: ------

sayHello(); // Output: Hello!
function sayHello() {
console.log('Hello!');
}

sayHi(); // Error: sayHi is not a function
var sayHi = function() {
  console.log('Hi!');
};**
```

---

---

### <u>**Q11.What is the difference between a deep copy and a shallow copy?**</u>

**Shallow Copy:**

- A shallow copy of an object or array creates a new copy of the top-level structure, but it does not recursively duplicate nested objects or arrays. Instead, it retains references to the same nested objects or arrays as the original.
- In a shallow copy, changes made to nested objects or arrays in the copied structure will affect the original and vice versa because they share the same references.
  Example:

```jsx
const original = {
  a: 1,
  b: [2, 3],
};

const shallowCopy = { ...original };

shallowCopy.b.push(4); // Modifies the shallow copy and the original
console.log(original.b); // Output: [2, 3, 4]
```

**Deep Copy:**

- A deep copy of an object or array creates a completely independent duplicate of the entire structure, including all nested objects or arrays. It does not share any references with the original.
- In a deep copy, changes made to nested objects or arrays in the copied structure do not affect the original, and vice versa, as they are entirely separate.
- Deep copying can be more complex and typically requires recursive traversal of the entire structure to ensure all nested elements are duplicated.

```jsx
const original = {
  a: 1,
  b: [2, 3],
};

const deepCopy = JSON.parse(JSON.stringify(original));

deepCopy.b.push(4); // Modifies the deep copy, but the original remains unchanged
console.log(original.b); // Output: [2, 3]
```

---

---

### <u>**Q12 What is Callback in JavaScript?**</u>

**Explanation:**

1. **Definition**: A callback function is a function passed as an argument to another function. It is typically used to be executed later, after an asynchronous operation or upon an event.
2. **Usage**: Callbacks are often used for handling asynchronous operations like data fetching, timers, or event handling.

**Example**:

```jsx
function fetchData(url, callback) {
  // Simulated data fetching
  setTimeout(() => {
    const data = "Some data from the server";
    callback(data);
  }, 1000);
}

function handleData(data) {
  console.log(data);
}

fetchData("<https://example.com/api>", handleData);
```

```jsx
function isEven(num) {
  if (num % 2 === 0) {
    return num;
  }
}

function printMag(callback, mag) {
  console.log(`${mag}: ${callback}`);
}
printMag(isEven(3), "Massage");
```

---

---

### <u>**Q13 What is Object Destructuring? (with examples)**</u>

**Explanation:**

- object destructuring is a simple way to extracting values from object and assign them to a variables so it would easy to read
- It’s introduced in ES6 ( 2015 )

  ```jsx
  const person = { firstName: "John", lastName: "Doe" };
  const { firstName, lastName } = person;

  console.log(firstName); // 'John'
  console.log(lastName); // 'Doe'
  ```

---

---

### <u>**Q14 Higher order function**</u>

**Explanation:**

1. **Definition**: A higher-order function is a function that either takes one or more functions as arguments or returns a function as its result. Higher-order functions enable behavior parameterization and can be used to create more reusable and flexible code.
2. **Usage**: Higher-order functions are used to abstract and encapsulate common patterns or behaviors, often by providing a level of indirection.

```jsx
function filterArray(array, filterFn) {
  const filtered = [];
  for (const item of array) {
    if (filterFn(item)) {
      filtered.push(item);
    }
  }
  return filtered;
}
const numbers = [1, 2, 3, 4, 5, 6];

const isEven = (num) => num % 2 === 0;

const evenNumbers = filterArray(numbers, isEven);
console.log(evenNumbers); // Output: [2, 4, 6]

//---------------------------------------------------------------

// Higher-Order Function that returns a function
function operationFactory(operation) {
  // The returned function takes two numbers and performs the specified operation
  return function (a, b) {
    return operation(a, b);
  };
}

// Define functions to perform specific mathematical operations
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

// Use the operationFactory HOF to create operation functions
const addFunction = operationFactory(add);
const subtractFunction = operationFactory(subtract);
const multiplyFunction = operationFactory(multiply);
const divideFunction = operationFactory(divide);

// Now, you can use these generated functions to perform operations
console.log(addFunction(5, 3)); // 8
console.log(subtractFunction(10, 4)); // 6
console.log(multiplyFunction(6, 7)); // 42
console.log(divideFunction(100, 5)); // 20
```

---

---

### <u>**Q15 what are first class functions**</u>

**Explanation:**

- In JavaScript, functions are treated as first-class citizens, which means they can be assigned to variables, passed as arguments, and returned from other functions. This enables the usage of callbacks.
- In programming languages, including JavaScript, first-class functions refer to the concept of treating functions as values, allowing them to be assigned to variables, passed as arguments to other functions, and returned from functions.

#### Functions can be assigned to variables:

```jsx
var add = function (a, b) {
  return a + b;
};

console.log(add(2, 3)); // Output: 5
```

#### Functions can be returned from other functions:

```jsx
function multiplier(factor) {
  return function (number) {
    return number * factor;
  };
}

var multiplyByTwo = multiplier(2);
console.log(multiplyByTwo(5)); // Output: 10
```

#### Functions can be passed as arguments to other functions:

```jsx
function greet(name) {
  console.log("Hello, " + name + "!");
}

function sayHello(callback) {
  callback("John");
}

sayHello(greet); // Output: Hello, John!
```

#### Functions can be stored in data structures:

```jsx
var mathOperations = {
  add: function (a, b) {
    return a + b;
  },
  subtract: function (a, b) {
    return a - b;
  },
};

console.log(mathOperations.add(2, 3)); // Output: 5
```

The concept of first-class functions is powerful as it enables higher-order functions, functional programming paradigms, and greater flexibility in designing and structuring code. It allows functions to be treated as data, opening up possibilities for creating more dynamic and expressive programs

---

---

### <u>**Q16 Explain event loop in js with code examples in simple words**</u>

**Explanation:**

1. **Single-Threaded JavaScript:** JavaScript is a single-threaded language, which means it executes one piece of code at a time. If a particular task takes a long time to complete, it can cause the entire program to freeze and become unresponsive. The event loop helps mitigate this issue.
2. **Asynchronous Operations:** JavaScript supports asynchronous operations, such as making API requests, reading files, or setting timeouts. These operations don't block the execution of subsequent code and allow JavaScript to continue executing other tasks concurrently.
3. **Event Loop:** The event loop is responsible for managing the execution of asynchronous tasks in JavaScript. It consists of two main components: the call stack and the task queue.

- **Call Stack:** The call stack keeps track of function calls and maintains the order of execution. When a function is called, it is added to the top of the call stack. When a function finishes executing, it is removed from the stack.
- **Task Queue:** The task queue holds tasks or events that are ready to be processed. When an asynchronous operation completes or an event occurs, the corresponding task or event is placed in the task queue. and there is two types of task queue **[ microtack queue and macrotask queue ]**

#### Microtask Queue

Microtasks are tasks that need to be executed immediately after the currently executing script (the current JavaScript call stack) has completed and before any other macrotasks. They are prioritized over macrotasks and are typically used for small and urgent tasks that must be executed as soon as possible.
**Common examples of microtasks:**

- Promises (e.g., `Promise.resolve()`)
- `process.nextTick()` (Node.js specific)
- `MutationObserver` callbacks

**How Microtask Queue Works:**

- Microtasks are executed after the current call stack is empty but before the event loop moves to the next macrotask.
- All microtasks in the microtask queue are executed continuously until the queue is empty, **before** any macrotasks are executed.

#### Macrotask Queue

Macrotasks are tasks that are scheduled to be executed after the current execution context (the current JavaScript code execution) is complete and the microtask queue is empty. They represent tasks that are less urgent and can be scheduled at a lower priority.

**Common examples of macrotasks:**

- `setTimeout()`, `setInterval()`
- `setImmediate()` (Node.js specific)
- `I/O` operations (like network requests)
- UI rendering tasks
- `requestAnimationFrame()`

**How Macrotask Queue Works:**

- When the call stack is empty, and all microtasks have been executed, the event loop checks the macrotask queue.
- The event loop picks the first task in the macrotask queue and executes it.
- After executing a macrotask, the event loop will check for any pending microtasks. If there are any, it will execute them before processing the next macrotask.

1. **Event Loop Execution: The event loop continuously checks if the call stack is empty. If the call stack is empty, it takes the first task from the task queue and pushes it onto the call stack for execution. This process is repeated indefinitely as long as there are tasks in the task queue.**

Here's a simplified example

```jsx
console.log("Start");

setTimeout(() => {
  console.log("Macrotask 1: setTimeout");
}, 0);

Promise.resolve().then(() => {
  console.log("Microtask 1: Promise");
});

console.log("End");


//Output:
Start
End
Microtask 1: Promise
Macrotask 1: setTimeout

```

---

---

### <u>**Q17 What is the difference between Call, Apply and Bind**</u>

**Explanation:**

- **Call:** The call() method invokes a function with a given `this` value and arguments provided one by one

```jsx
var employee1 = { firstName: "John", lastName: "Rodson" };
var employee2 = { firstName: "Jimmy", lastName: "Baily" };

function invite(greeting1, greeting2) {
  console.log(
    greeting1 + " " + this.firstName + " " + this.lastName + ", " + greeting2
  );
}

invite.call(employee1, "Hello", "How are you?"); // Hello John Rodson, How are you?
invite.call(employee2, "Hello", "How are you?"); // Hello Jimmy Baily, How are you?
```

- **Apply:** Invokes the function with a given `this` value and allows you to pass in arguments as an array

```jsx
var employee1 = { firstName: "John", lastName: "Rodson" };
var employee2 = { firstName: "Jimmy", lastName: "Baily" };

function invite(greeting1, greeting2) {
  console.log(
    greeting1 + " " + this.firstName + " " + this.lastName + ", " + greeting2
  );
}

invite.apply(employee1, ["Hello", "How are you?"]); // Hello John Rodson, How are you?
invite.apply(employee2, ["Hello", "How are you?"]); // Hello Jimmy Baily, How are you?
```

- **bind:** returns a new function, allowing you to pass any number of arguments

```jsx
var employee1 = { firstName: "John", lastName: "Rodson" };
var employee2 = { firstName: "Jimmy", lastName: "Baily" };

function invite(greeting1, greeting2) {
  console.log(
    greeting1 + " " + this.firstName + " " + this.lastName + ", " + greeting2
  );
}

var inviteEmployee1 = invite.bind(employee1);
var inviteEmployee2 = invite.bind(employee2);
inviteEmployee1("Hello", "How are you?"); // Hello John Rodson, How are you?
inviteEmployee2("Hello", "How are you?"); // Hello Jimmy Baily, How are you?
```

Call and apply are pretty interchangeable. Both execute the current function immediately. You need to decide whether it’s easier to send in an array or a comma separated list of arguments. You can remember by treating Call is for **comma** (separated list) and Apply is for **Array**.

Whereas Bind creates a new function that will have `this` set to the first parameter passed to bind().

---

---

### <u>**Q18 What is a promise**</u>

**Explanation:**

A promise is an object that may gives us a value after some time in the future with either a resolved value or a reason that it’s not resolved(for example, network error). It will be in one of the 3 possible states: fulfilled, rejected, or pending.

The syntax of Promise creation looks like below,

```jsx
function fetchData() {
  return new Promise((resolve, reject) => {
    // Simulate an asynchronous operation (e.g., fetching data from a server)
    setTimeout(() => {
      const data = "This is the fetched data.";
      const error = false; // Change to true to simulate an error

      if (!error) {
        resolve(data); // Resolve the Promise with the data
      } else {
        reject("An error occurred"); // Reject the Promise with an error message
      }
    }, 2000); // Simulating a 2-second delay
  });
}

// Using the Promise
fetchData()
  .then((data) => {
    console.log("Data received:", data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
```

---

---

### <u>**Q19 What are the three states of promise**</u>

**Explanation:**

Promises have three states:

1. **Pending:** This is an initial state of the Promise before an operation begins
2. **Fulfilled:** This state indicates that the specified operation was completed.
3. **Rejected:** This state indicates that the operation did not complete. In this case an error value will be thrown.

---

---

### <u>**Q20 What is promise chaining**</u>

**Explanation:**

The process of executing a sequence of asynchronous tasks one after another using promises is known as Promise chaining. Let's take an example of promise chaining for calculating the final result,

```jsx
new Promise(function (resolve, reject) {
  setTimeout(() => resolve(1), 1000);
})
  .then(function (result) {
    console.log(result); // 1
    return result * 2;
  })
  .then(function (result) {
    console.log(result); // 2
    return result * 3;
  })
  .then(function (result) {
    console.log(result); // 6
    return result * 4;
  });
```

1. The initial promise resolves in 1 second,
2. After that `.then` handler is called by logging the result(1) and then return a promise with the value of result \* 2.
3. After that the value passed to the next `.then` handler by logging the result(2) and return a promise with result \* 3.
4. Finally the value passed to the last `.then` handler by logging the result(6) and return a promise with result \* 4.

---

---

### <u>**Q21 What is promise.all**</u>

**Explanation:**

Promise.all is a promise that takes an array of promises as an input (an iterable), and it gets resolved when all the promises get resolved or any one of them gets rejected. For example, the syntax of promise.all method is below,

```jsx
const promise1 = Promise.resolve(1);
const promise2 = Promise.resolve(2);

Promise.all([promise1, promise2]).then((results) => {
  console.log(results); // [1, 2]
});
```

**Note:** Remember that the order of the promises(output the result) is maintained as per input order.

---

---

### <u>**Q22 Explain async/await in JavaScript.**</u>

**Explanation:**

- _Async and await are special syntax to work with Promises._
- The **`async`** keyword is placed before a function to denote that the function is asynchronous and can be used as a Promise.
- The **`await`** keyword, on the other hand, tells JavaScript to wait for the async operation to complete before proceeding to the next task in the function.
- The `await` keyword can only be used in an `async` function

```jsx
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = "This is the fetched data.";
      const error = false; // Change to true to simulate an error

      if (!error) {
        resolve(data);
      } else {
        reject("An error occurred");
      }
    }, 2000);
  });
}

async function getData() {
  try {
    const data = await fetchData();
    console.log("Data received:", data);
  } catch (error) {
    console.error("Error:", error);
  }
}

getData();
```

---

---

### <u>**Q23 What is a unary function**</u>

**Explanation:**

- A unary function (i.e. monadic) is a function that accepts exactly one argument. It stands for a single argument accepted by a function.
- Let us take an example of unary function,

```jsx
const unaryFunction = (a) => console.log(a * a); // Add 10 to the given argument and display the value
```

---

---

### <u>**Q24 Explain differance between map and forEach , filter , reduce**</u>

**Explanation:**

##### MAP

- **map.**
- map function created a new array
- map function perform a given operation on “copy” of each element from original array.
- map skip the empty element while doing operation but return in result

```jsx
// Return new array
let arr = [1, 2, 3, 4, 5];
let newArr = arr.map((val) => {
  return val * val;
});
console.log(newArr);
//---------------------------------------------------------------------
//map skip the empty element while doing operation but return in result
let arr = [1, , 3, 4, 5];
let newArr = arr.map((val) => {
  return val * val;
});
console.log(newArr); //[ 1, <1 empty item>, 9, 16, 25 ]
```

##### FILTER

- The **`filter()`** method in JavaScript is used to create a new array containing all elements that pass a specific test (predicate) provided by a callback function. It doesn't modify the original array; instead, it returns a new array with the elements that satisfy the condition defined in the callback function.

```jsx
const numbers = [1, 2, 3, 4, 5, 6];

const evenNumbers = numbers.filter(function (number) {
  return number % 2 === 0;
});

console.log(evenNumbers); // Output: [2, 4, 6]
```

##### forEach:

- forEach does not create a new array based on given array . It’s return undefined.
- forEach function is performed a operation on each element of array.
- forEach skip the empty element and does not return in result also.
- forEach directly affect the original array.

```jsx
// didn't create a new array , return undefined
let arr = [1, 2, 3, 4, 5];
let newArr = arr.forEach((val) => {
  return val * val;
});
console.log(newArr);
//---------------------------------------------------------------------
// but it's operatable in array element
const numbers = [1, 2, 3, 4, 5];

numbers.forEach((number, index, array) => {
  array[index] = number * 2; // Mutates the original array
});

console.log(numbers); // [2, 4, 6, 8, 10]

//---------------------------------------------------------------------
//foreach skip the empty element and does not return in result also.
let arr = [1, , 3, 4, 5];

arr.forEach((val) => {
  console.log(val * val);
});
//---------------------------------------------------------------------
//forEach directly affect the original array.
const numbers = [1, 2, 3, 4];
numbers.forEach(function (number, index, array) {
  // You can modify the original array within the callback
  array[index] = number * 2;
});
// The original array has been modified
console.log(numbers); // [2, 4, 6, 8]
```

##### REDUCE:

- The **`reduce()`** method takes a callback function as its argument, which you can use to define how the accumulation is done.
- It iterates over each element of an array and accumulates a result.

```jsx
const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);

console.log(sum); // Output: 15
```

---

---

### <u>**Q25 Is javascript a statically typed or a dynamically typed language?**</u>

**Explanation:**

- JavaScript is a multi-paradigm, **dynamic** language with types and operators, standard built-in objects, and methods. Its syntax is based on the Java and C languages — many structures from those languages apply to JavaScript as well. JavaScript supports object-oriented programming with [object prototypes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain) and classes.

1. **Type Determination at Runtime**: In JavaScript, you don't need to explicitly declare the data type of a variable. The type of a variable is determined when the program is executed. For example:

   ```jsx
   let x = 5; // x is a number
   x = "Hello"; // x is now a string
   x = true; // x is now a boolean
   ```

   The variable `x` starts as a number, changes to a string, and then changes to a boolean, all within the same code block. JavaScript doesn't require you to specify the type when declaring the variable.

2. **Dynamic Type Checking**: JavaScript will automatically perform type conversions when you perform operations on variables of different types. For example:

   ```jsx
   let num = 5;
   let str = "10";
   let result = num + str; // JavaScript converts num to a string and performs string concatenation
   ```

   In this case, JavaScript will convert the number `5` to a string and concatenate it with the string `"10"`, resulting in the string `"510"`.

3. **No Static Type Checking**: Unlike statically typed languages (e.g., Java or C++), JavaScript does not perform type checking at compile time. There is no strict enforcement of data types for variables before running the code.
4. **Pros and Cons**: Dynamic typing provides flexibility and ease of use, making it suitable for rapid development. However, it can also lead to runtime errors if not used carefully. Developers need to be cautious about variable types when writing JavaScript code to avoid unexpected behavior.

---

---

### <u>**Q26 Types of loop in Javascript**</u>

**Explanation:**

1. **for Loop:** The **`for`** loop is used for iterating over a range of values a specified number of times.

   ```jsx
   for (let i = 0; i < 5; i++) {
     // Code to be executed 5 times
   }
   ```

2. **do...while Loop:** Similar to the **`while`** loop, but it guarantees that the code block is executed at least once, as the condition is checked after the loop body.

   ```jsx
   let i = 0;
   do {
     // Code to be executed at least once
     i++;
   } while (i < 5);
   ```

3. **for...of Loop:** The **`for...of`** loop is used to iterate over the values of iterable objects like arrays, strings, and more.

   ```jsx
   const fruits = ["apple", "banana", "cherry"];
   for (const fruit of fruits) {
     console.log(fruit);
   }
   ```

4. **for...await...of Loop (Asynchronous Iteration):** Used for asynchronous iteration over the values of asynchronous iterable objects, like Promises.

   ```jsx
   async function asyncFunction() {
     for await (const result of asyncIterable) {
       console.log(result);
     }
   }
   ```

5. **while Loop:** The **`while`** loop repeatedly executes a block of code as long as a specified condition is true.

   ```jsx
   let i = 0;
   while (i < 5) {
     // Code to be executed as long as i is less than 5
     i++;
   }
   ```

6. **for...in Loop:** The **`for...in`** loop is used to iterate over the properties of an object.

   ```jsx
   const person = { name: "John", age: 30 };
   for (let key in person) {
     console.log(key, person[key]);
   }
   ```

7. **forEach() Method:** Arrays have a **`forEach()`** method that allows you to iterate over their elements.

   ```jsx
   const numbers = [1, 2, 3, 4, 5];
   numbers.forEach(function (number) {
     console.log(number);
   });
   ```

---

---

### <u>**Q27 What Is Currying in JavaScript?**</u>

**Explanation:**

- Currying in js is transform a functions with multiple arguments into a nested series of function.
- each taking a single argument.
- Currying helps you avoid passing the same variable multiple times, and it helps you create a higher order function.

Regular function

```jsx
function sum(a) {
  return (b) => {
    return (c) => {
      return a + b + c;
    };
  };
}
console.log(sum(1)(2)(3)); // 6
```

Arrow function

```jsx
const add = (x) => (y) => x + y;

console.log(add(2)(3)); // 5
```

---

---

### <u>**Q28 What Is `promise.race` method in JavaScript?**</u>

**Explanation:**

- promise.race mathod takes a iteratable promises as a input but return a single promise.
- It returns a single promise that settles (either resolves or rejects) with the result of the first promise to settle among the input promises.
- **`Promise.race()`** is often used in scenarios where you want to implement a timeout for an operation or fetch data from multiple sources, and you're interested in the result from the fastest source or the quickest response.
- In the below example a gives the result as second promise becouse it settles first ( fastest )

```jsx
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 1 resolved");
  }, 1000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 2 resolved");
  }, 500);
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Promise 3 rejected");
  }, 1500);
});

Promise.race([promise1, promise2, promise3])
  .then((result) => {
    console.log("First promise to settle:", result);
  })
  .catch((error) => {
    console.error("First promise to reject:", error);
  });
```

---

---

### <u>**Q29 How dose event flow in Javascript**</u>

**Explanation**:

Event flow in JavaScript can be understood as the order in which events (like clicks or keyboard presses) are handled by different parts of a web page. There are two main phases: capturing and bubbling.

- Event flow, also known as the event propagation model.
- **`element`**:**addEventListener( eventType, eventHandler, useCapture )**`
- **`eventType`**: The type of the event (e.g., "click", "mouseover").
- **`eventHandler`**: The function to be executed when the event occurs.
- **`useCapture`**: A boolean value indicating whether to use the capturing phase (**`true`**) or the bubbling phase (**`false`**). The default is **`false`**.
- `element.addEventListener("click", eventHandler, true[capturing] or false[bubbling] );`

#### **Capturing Phase**:

- Think of it like a top-down approach. Events start from the highest level in the web page's structure (like the whole page itself) and go down to the specific element where the event happened.
- During the capturing phase, event handlers registered on ancestor elements are triggered before the event reaches the target element.

```jsx
<!DOCTYPE html>
<html>
<head>
    <title>Event Flow Example</title>
</head>
<body>
    <div id="parent">
        <button id="child">Click me!</button>
    </div>
    <script>
        document.getElementById("parent").addEventListener("click", function() {
            alert("Parent Div Clicked!");
        }, true);

        document.getElementById("child").addEventListener("click", function() {
            alert("Button Clicked!");
        }, true);
    </script>
</body>
</html>
```

#### **Bubbling Phase**:

- Think of it as the opposite, a bottom-up approach. Events start from the specific element where the event occurred and then go up through the hierarchy to the highest level (like the whole page).
- During the bubbling phase, event handlers registered on the target element or any of its ancestor elements are triggered in order, starting from the target element and moving up.

```jsx
<!DOCTYPE html>
<html>
<head>
    <title>Event Flow Example</title>
</head>
<body>
    <div id="parent">
        <button id="child">Click me!</button>
    </div>
    <script>
        document.getElementById("parent").addEventListener("click", function() {
            alert("Parent Div Clicked!");
        }, false);

        document.getElementById("child").addEventListener("click", function() {
            alert("Button Clicked!");
        }, false);
    </script>
</body>
</html>
```

---

---

### <u>**Q30 How dose event delegation in Javascript**</u>

**Explanation**:

- **Event delegation** is a concept in JavaScript where you attach a single event listener to a common ancestor element of multiple child elements rather than attaching individual event listeners to each child element. This allows you to manage events more efficiently, reduce memory usage, and simplify your code.

```jsx
<ul id="categories">
  <li id="laptops">Laptops</li>
  <li id="mobiles">Mobiles</li>
  <li id="shoes">Shoes</li>
  <li id="clothes">Clothes</li>
</ul>

<div id="output">Selected Category: None</div>

<script>
  const categoriesList = document.getElementById("categories");
  const output = document.getElementById("output");

  categoriesList.addEventListener("click", function(event) {
    if (event.target.tagName === "LI") {
      const selectedCategory = event.target.textContent;
      output.textContent = "Selected Category: " + selectedCategory;

      // You can use the unique IDs here if needed
      const categoryId = event.target.id;
      // Example: Alert the category's ID
      console.log("Category ID: " + categoryId);
    }
  });
</script>
```

---

---

### <u>**Q31 what is short-circuit evaluation in Javascript**</u>

**Explanation**:

Short-circuit evaluation is a feature in JavaScript where logical operators like **`&&`** and **`||`** can skip evaluating the second operand if the result is already known from the first operand.

Let's take the **`&&`** operator as an example. It's often used for "and" conditions. If the left operand is **`false`**, the result is guaranteed to be **`false`**, so JavaScript doesn't bother checking the right operand. Here's a simple example using the console:

```jsx
console.log(true && "Hello"); // Output: "Hello" (Both operands are evaluated)
console.log(false && "World"); // Output: false (Right operand is skipped because the left one is false)
```

In the first example, both operands are evaluated, and we get "Hello" because both are truthy. In the second example, the left operand is **`false`**, so JavaScript doesn't need to check the right operand, and the result is **`false`**

Certainly! The **`||`** operator is often used for "or" conditions. If the left operand is **`true`**, the result is guaranteed to be **`true`**, so JavaScript skips evaluating the right operand. Here's an example:

```jsx
console.log(true || "Hello"); // Output: true (Right operand is skipped because the left one is true)
console.log(false || "World"); // Output: "World" (Both operands are evaluated)
```

In the first example, the left operand is **`true`**, so JavaScript doesn't need to check the right operand, and the result is **`true`**. In the second example, both operands are evaluated, and we get "World" because the left operand is falsy, and the right operand is used to determine the result.

---

---

### <u>**Q32 Explains **`this`** key word in Javascript**</u>

**Explanation**:

- **`this`** keyword is a special keyword that refers to the current object, or the object on which a method is being invoked.
- **Global Context:**
- When used outside of any function or object, **`this`** refers to the global object, which is **`window`** in a browser context or **`global`** in Node.js.

```jsx
console.log(this === window); // In a browser, this is true
```

**Method Context:**

- When **`this`** is used within an object method, it refers to the object itself.

```jsx
javascriptCopy code
const person = {
  name: "John",
  greet: function() {
    console.log("Hello, " + this.name);
  }
};

person.greet(); // `this` inside greet() refers to the `person` object

```

**Explicit Binding:**

- You can explicitly set the value of **`this`** using methods like **`call()`**, **`apply()`**, or **`bind()`** when calling a function.

```jsx
javascriptCopy code
function greet() {
  console.log("Hello, " + this.name);
}

const person = { name: "Bob" };
greet.call(person); // `this` is explicitly set to `person` object

```

**Function Context:**

- Inside a regular function, **`this`** depends on how the function is called. It can vary based on the calling context.

```jsx
javascriptCopy code
function myFunction() {
  console.log(this); // `this` depends on how the function is called
}

myFunction(); // In this case, `this` refers to the global object

```

**Arrow Functions:**

- Arrow functions do not have their own **`this`** context; they inherit the **`this`** value from the enclosing (lexical) context.

```jsx
javascriptCopy code
const obj = {
  name: "Alice",
  greet: () => {
    console.log("Hello, " + this.name); // `this` refers to the enclosing context (global object)
  }
};

obj.greet();

```

---

---

### <u>**Q33 Explains Implicit type coercion in Javascript**</u>

**Explanation**:

- Implicit type coercion in JavaScript refers to the automatic conversion of one data type to another by the JavaScript engine when performing operations or comparisons. This can sometimes lead to unexpected or counterintuitive results if you're not aware of how type coercion works.

```jsx
var x = 5; // x is a number
var y = "10"; // y is a string

var result = x + y; // JavaScript implicitly converts x to a string and then performs string concatenation
console.log(result); // Output: "510"
```

1. **String and Number Interactions**:
   - When you use the **`+`** operator to combine a string and a number, the number is converted to a string, and the two strings are concatenated.
2. **Comparison Operators**:
   - When you use comparison operators like **`==`** or **`!=`**, JavaScript tries to convert operands to a common type before making the comparison. This can lead to unexpected results.
   - For example, **`5 == "5"`** will evaluate to **`true`** because the string **`"5"`** is implicitly converted to the number **`5`** for the comparison.
3. **Truthy and Falsy Values**:
   - JavaScript has truthy and falsy values. When you use values in a boolean context (e.g., in an **`if`** statement), JavaScript will implicitly convert values to **`true`** or **`false`** based on whether they are truthy or falsy.

---

---

### <u>**Q34 Explains IIFE ( Immediately-Invoked Function Expression ) in Javascript**</u>

**Explanation**:

An Immediately-Invoked Function Expression, or IFE, is a JavaScript function that is defined and executed right away. It's typically wrapped in parentheses to indicate it's a function expression, and then immediately followed by another set of parentheses to invoke it. IFEs are commonly used to create private scopes, manage variables, and encapsulate code.

```jsx
(function () {
  var privateVariable = 42;
  console.log("This is an IFE. Private variable:", privateVariable);
})();
```

---

---

### <u>**Q35 Explains NaN "Not-a-Number" in JavaScript.**</u>

**Explanation**:

- "NaN in JavaScript means 'Not-a-Number.' It shows up when there's some math problem that doesn't make sense, like dividing by zero. To check for NaN, you can use **`isNaN()`**. It's like asking, 'Is this a weird math result?' If it's weird, **`isNaN()`** says 'true,'
- The **`isNaN()`** function is useful for checking whether a value is a valid number or not, especially when dealing with user input or calculations."

```jsx
console.log(isNaN(42)); // Output: false
console.log(isNaN("Hello")); // Output: true (because "Hello" can't be converted to a number)
console.log(isNaN(NaN)); // Output: true
```

---

---

### <u>**Q36 Explains default parameters in JavaScript.**</u>

**Explanation**:

- Default parameters, introduced in ECMAScript 6 (ES6), allow you to set default values for function parameters.
- This feature makes it easier to handle cases where a function is called without providing values for all of its parameters.
- If a parameter is not provided by the caller, the default value is used instead.

```jsx
function greet(name = "Guest") {
  console.log("Hello, " + name + "!");
}

greet("John"); // Output: "Hello, John!"
greet(); // Output: "Hello, Guest!" (default parameter used)
```

---

---

### <u>**Q37 Explains undefined , null , isFinite function in JavaScript.**</u>

**Explanation**:

- **Undefined**: In JavaScript, `undefined` is a primitive value that typically represents the absence of a value. It's the default value of declared variables that haven't been assigned a value, or the result of accessing non-existent object properties. You can check for it using `typeof variable === "undefined"`.
- **Null**: `null` is a value that represents the intentional absence of any object value or no value at all. It's often used to indicate that a variable should have no value. You can check for it using `variable === null`.
- **isFinite() Function**: `isFinite()` is a built-in JavaScript function used to check if a value is a finite number. It returns `true` if the value is a finite number and can be converted to a number; otherwise, it returns `false`. This is useful for checking if a value is a valid number before performing numerical operations.

For example:

```jsx
var undefinedVar;
console.log(typeof undefinedVar === "undefined"); // true

var nullVar = null;
console.log(nullVar === null); // true

var number = 42;
console.log(isFinite(number)); // true

var notANumber = "Hello";
console.log(isFinite(notANumber)); // false
```

---

---

### <u>**Q38 explain regular expression with example**</u>

**Explanation**:

- A regular expression, often referred to as a "regex," is a powerful tool in JavaScript used for pattern matching within strings. It allows you to search for and manipulate text based on patterns. Regular expressions are created using a special syntax.

```jsx
// Example: Matching email addresses with a simple regex
const emailPattern = /\\w+@\\w+\\.\\w+/;

const text = "You can reach me at john@example.com or mary@example.org.";

const matches = text.match(emailPattern);

console.log(matches); // Outputs: ["john@example.com", "mary@example.org"]
```

---

---

### <u>**Q39 what is raw string**</u>

**Explanation**:

- A "raw string" refers to a string that is created using the template literal syntax (backticks) and is tagged with a special function called **`String.raw`**. This allows you to create strings that treat backslashes (**`\\`**) as literal characters, rather than as escape characters.

```jsx
const rawString = String.raw`This is a raw string\\nNot an escaped newline.`;

console.log(rawString);
```

---

---

### <u>**Q40 explain nested templates in js**</u>

**Explanation**:

- when we are using one string templates in another string templates. so this exprasion in known as a nested templates.

```jsx
// Article Template
const articleTemplate = (title, content) => `
  <article>
    <h2>${title}</h2>
    <p>${content}</p>
  </article>
`;

// Page Template
const pageTemplate = (articles) => `
  <html>
  <head>
    <title>My Blog</title>
  </head>
  <body>
    ${articles}
  </body>
  </html>
`;

// Creating Articles
const article1 = articleTemplate(
  "Article 1",
  "This is the content of Article 1."
);
const article2 = articleTemplate(
  "Article 2",
  "This is the content of Article 2."
);

// Assembling the Page
const articles = article1 + article2;
const page = pageTemplate(articles);

console.log(page);
```

---

---

### <u>**41 why Javascript in single therated and it's advantages**</u>

**Explanation**:

JavaScript is single-threaded because it has a single call stack and one thread of execution. This means it can execute one operation at a time, and it waits for one task to complete before moving on to the next. Here are some key advantages of JavaScript being single-threaded:

1. **Simplicity:** It simplifies programming and avoids the complexities of dealing with concurrent threads, preventing race conditions and deadlocks.
2. **Predictability:** Code execution is ordered and deterministic, making it easier to reason about and debug.
3. **Cross-Platform Compatibility:** Single-threading ensures consistent behavior across different platforms and browsers.
4. **Responsive User Interfaces:** JavaScript's single-threaded model keeps the user interface responsive because it doesn't block the main thread.
5. **Asynchronous Operations:** JavaScript can perform asynchronous tasks, like network requests or timers, which allows it to handle multiple tasks efficiently without blocking the main thread.

---

---

### <u>**Q42 Explain isNaN vs Number.isNaN**</u>

**Explanation**:

**`isNaN`** and **`Number.isNaN`** are two JavaScript functions used to check if a value is NaN (Not-a-Number). However, they have a key difference in their behavior that is important to understand.

1. **`isNaN`**:

   - **`isNaN`** is a global JavaScript function that checks if a value is NaN.
   - It attempts to convert the value to a number before performing the check, which can lead to unexpected results. It can also produce false positives for non-NaN values that can be coerced into NaN.
   - For example, **`isNaN("hello")`** will return **`true`**, which might not be the expected behavior.

   ```jsx
   javascriptCopy code
   isNaN("hello"); // true
   isNaN(42);       // false

   ```

2. **`Number.isNaN`**:

   - **`Number.isNaN`** is a method specifically designed to check if a value is precisely NaN.
   - It does not attempt to convert the value to a number. It returns **`true`** only if the value is exactly equal to NaN.
   - This method provides a more reliable and predictable way to test for NaN.

   ```jsx
   javascriptCopy code
   Number.isNaN("hello"); // false
   Number.isNaN(42);       // false
   Number.isNaN(NaN);      // true

   ```

---

---

### <u>**Q43 Explain garbage collector in js**</u>

**Explanation**:

In JavaScript, you create objects and variables during the execution of your code. These objects and variables are stored in memory. Over time, some of them become unused, either because they go out of scope or are no longer needed by your code. If memory were never freed up, your program could eventually run out of memory and crash. This is where the garbage collector comes into play.

```jsx
function createAndUseObject() {
  let myObject = { data: "This is an object" };
  console.log(myObject.data);
}

createAndUseObject();
```

In this code, we create an object called **`myObject`** within the **`createAndUseObject`** function. After the function call, **`myObject`** goes out of scope, and technically, we no longer need it. However, if JavaScript were to hold onto the memory allocated for **`myObject`** indefinitely, it would lead to inefficient memory usage.

This is where the garbage collector steps in. It tracks objects and variables and determines when they are no longer needed. In this case, after **`createAndUseObject`** is executed, the garbage collector identifies that **`myObject`** is no longer used in the program, so it frees up the memory associated with it, making it available for other objects or variables.

---

---

### <u>**Q44 Explain `Map` vs `WeakMap` in JavaScript**</u>

**Explanation**:

#### Map

- **Keys:** `Map` can use any type of value as keys: strings, objects, numbers, or even other maps.
- **References:** `Map` holds strong references to its keys, meaning the key-value pair will not be garbage-collected as long as the map exists, even if there are no other references to the key.
- **Iteration:** `Map` is iterable, which means you can loop over its entries with methods like `forEach()`, `for...of`, or by converting it to an array.
- **Size:** `Map` has a `size` property that reflects the number of key-value pairs stored in it.
- **Use Case:** Suitable when you need to store a collection of items with various types of keys, and you need to access the size or iterate over the entries.

```js
- // Create a new Map
const map = new Map();

// Add key-value pairs
map.set('name', 'Alice');
map.set(1, 'one');
map.set(true, 'boolean value');
map.set({ id: 1 }, 'object key');

// Get values
console.log(map.get('name')); // Output: Alice
console.log(map.get(1));      // Output: one

// Iterate over Map entries
map.forEach((value, key) => {
  console.log(key, value);
});

// Output:
// name Alice
// 1 one
// true boolean value
// { id: 1 } object key

```

#### WeakMap

- **Keys:** `WeakMap` can only use objects as keys. Primitive types (like strings, numbers, and symbols) cannot be used as keys.
- **References:** `WeakMap` holds weak references to its keys, meaning if there are no other references to a key object, it can be garbage-collected. This ensures that memory is efficiently used.
- **Iteration:** `WeakMap` is _not_ iterable. You cannot loop through its entries or access its size, as it is designed to be "weak" and allow garbage collection.
- **Size:** `WeakMap` does not have a `size` property.
- **Use Case:** Suitable for cases where you need to associate some data with an object without preventing the object from being garbage-collected. For example, caching or metadata for objects.

```js
- // Create a new WeakMap
const weakMap = new WeakMap();

// Create some objects
const obj1 = { name: 'Alice' };
const obj2 = { name: 'Bob' };

// Add key-value pairs
weakMap.set(obj1, 'metadata for Alice');
weakMap.set(obj2, 'metadata for Bob');

// Get values
console.log(weakMap.get(obj1)); // Output: metadata for Alice
console.log(weakMap.get(obj2)); // Output: metadata for Bob

// No iteration is possible, so this would not work:
// weakMap.forEach((value, key) => console.log(key, value)); // Error: weakMap.forEach is not a function

// If obj1 is no longer referenced, it can be garbage-collected
obj1 = null; // Removes reference to the object

// At this point, the entry for obj1 in the WeakMap can be garbage-collected

```

#### Key Differences and Use Cases

| Feature                | `Map`                                   | `WeakMap`                                                  |
| ---------------------- | --------------------------------------- | ---------------------------------------------------------- |
| **Key Type**           | Any value (objects, primitives)         | Only objects                                               |
| **Garbage Collection** | No automatic garbage collection of keys | Keys are weakly held, allowing collection                  |
| **Iteration**          | Iterable (`forEach`, `for...of`, etc.)  | Not iterable                                               |
| **Size Property**      | Has `size` property                     | No `size` property                                         |
| **Use Case**           | General-purpose key-value storage       | Use when key objects should not prevent garbage collection |

##### When to Use `Map` vs `WeakMap`

- **Use `Map`** when:
  - You need a collection of key-value pairs with various types of keys.
  - You require operations like iteration, checking the size, or retrieving all keys/values.
- **Use `WeakMap`** when:
  - You want to associate data with objects without affecting their garbage collection.
  - You do not need to enumerate the collection or access the size of the collection.

---

---

### <u>**Q45 Can you provide an illustration of how ES6 has altered the approach to working with "this" in JavaScript?**</u>

**Explanation**:

In JavaScript, `this` is a keyword that refers to the object from which the current code is being executed.
the value of `this` can be tricky because it depends on the context in which a function is called, not just where it is defined

#### Key Changes Introduced by ES6

1. **Arrow Functions (`=>`)**: Arrow functions were introduced in ES6 to make handling `this` more intuitive. Unlike traditional functions, arrow functions do not have their own `this`.Instead, they capture `this` from their lexical (surrounding) scope. This means that the value of `this` inside an arrow function is always equal to the value of `this` in the scope where the arrow function is defined.
2. **No Rebinding of `this`**: Arrow functions are particularly useful for writing concise callback functions, like those used with array methods (`map`, `filter`, `reduce`), because they maintain the context of `this` from the enclosing scope.

- **Shorter Syntax**: Arrow functions provide a more concise way to write functions, often reducing the boilerplate code required.

##### 3. Key Differences Between Traditional Functions and Arrow Functions

| Aspect                 | Traditional Functions                      | Arrow Functions                                        |
| ---------------------- | ------------------------------------------ | ------------------------------------------------------ |
| **Own `this` Context** | Yes, determined by the call site           | No, inherits `this` from the lexical scope             |
| **Use Case**           | When function needs its own `this` context | When you want `this` to refer to the surrounding scope |
| **Binding `this`**     | May need `.bind()`, `call()`, or `apply()` | No need for binding, as `this` is lexically scoped     |
| **Constructor**        | Can be used as constructors (`new Fn()`)   | Cannot be used as constructors                         |
| **Arguments Object**   | Has its own `arguments` object             | Does not have its own `arguments` object               |

---

---

### <u>**Q46 Prototypal in Javascript**</u>

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

---

---

### <u>**Q47 Differentiate between a variable that is null, undefined, or undeclared.**</u>

**Explanation**:

#### 1. `undefined`

- **Definition**: A variable that has been declared but has not been assigned any value yet is `undefined`.
- **Type**: It is a primitive value in JavaScript and has its own type, `"undefined"`.
- **How It Occurs**:
  - When a variable is declared but not assigned any value.
  - When a function does not explicitly return a value.
  - When accessing a property that does not exist on an object.
- **Example**:

  ```javascript
  let x;
  console.log(x); // Output: undefined

  function myFunction() {}
  console.log(myFunction()); // Output: undefined

  const obj = {};
  console.log(obj.missingProperty); // Output: undefined
  ```

#### 2. `null`

- **Definition**: A variable that is explicitly assigned the value `null` represents the intentional absence of any object value.
- **Type**: `null` is a primitive value, but its type is `"object"`. This is considered a bug in JavaScript's type system, but it has been retained for compatibility.
- **How It Occurs**:
  - When a developer intentionally assigns `null` to a variable to indicate "no value" or "empty."
  - It is often used as a placeholder for objects that will be assigned later.
- **Example**:

  ```javascript
  let y = null;
  console.log(y); // Output: null

  const person = { name: null }; // The person has no name currently.
  console.log(person.name); // Output: null
  ```

#### 3. Undeclared

- **Definition**: A variable that has not been declared at all in the current scope (i.e., does not exist).
- **Type**: Trying to access an undeclared variable throws a `ReferenceError`.
- **How It Occurs**:
  - When a variable is used without being declared (i.e., without `var`, `let`, or `const`).
- **Example**:
  ```javascript
  console.log(z); // Output: ReferenceError: z is not defined
  ```

#### Summary of Differences

| Aspect              | `undefined`                                        | `null`                                     | **Undeclared**                                |
| ------------------- | -------------------------------------------------- | ------------------------------------------ | --------------------------------------------- |
| **Definition**      | A variable declared but not assigned a value       | A variable explicitly set to "no value"    | A variable that hasn't been declared          |
| **Type**            | `"undefined"`                                      | `"object"` (due to historical reasons)     | No type (throws `ReferenceError` if accessed) |
| **Usage Scenario**  | Default state of declared variables without values | Represents an intentional absence of value | A variable that does not exist in any scope   |
| **Error on Access** | No                                                 | No                                         | Yes (`ReferenceError`)                        |
| **Example**         | `let a;`                                           | `let a = null;`                            | `console.log(b); // ReferenceError`           |

---

---

### Q Common Scenarios for Employing Anonymous Functions

**Anonymous functions** in JavaScript are functions that do not have a name. They are often used when you want to define a function for immediate use or when you do not need to reuse the function elsewhere. Here are some common scenarios where anonymous functions are typically employed:

1. **Callbacks in Higher-Order Functions**

   - **Scenario**: Many JavaScript functions, such as array methods (`map`, `filter`, `reduce`), event handlers, and asynchronous functions, require a function to be passed as an argument. Anonymous functions are perfect for this because they provide a quick, concise way to define a function only where it is needed.
   - **Example**:
     ```javascript
     // Using an anonymous function with the map method
     const numbers = [1, 2, 3];
     const squared = numbers.map(function (num) {
       return num * num;
     });
     console.log(squared); // Output: [1, 4, 9]
     ```
   - **Explanation**: The `map` method takes a function as an argument to apply it to each element of the array. The anonymous function is used here to avoid the overhead of defining a separate named function.

2. **Event Handlers**

   - **Scenario**: When attaching event listeners (e.g., for clicks, keyboard input, etc.), you often use an anonymous function to handle the event. This is because the function is specific to that particular event and typically does not need to be reused elsewhere.
   - **Example**:
     ```javascript
     // Adding an event listener with an anonymous function
     document.getElementById("myButton").addEventListener("click", function () {
       alert("Button clicked!");
     });
     ```
   - **Explanation**: The function handling the `click` event is only needed once and does not require a name.

3. **Immediately Invoked Function Expressions (IIFE)**

   - **Scenario**: Anonymous functions are often used in **Immediately Invoked Function Expressions (IIFE)** to create a local scope and avoid polluting the global namespace.
   - **Example**:
     ```javascript
     (function () {
       const message = "Hello, World!";
       console.log(message);
     })();
     ```
   - **Explanation**: The anonymous function is immediately executed after it is defined. This pattern is commonly used to encapsulate code and avoid variable conflicts.

4. **Promises and Asynchronous Code**

   - **Scenario**: Anonymous functions are frequently used with **Promises** or other asynchronous code (like `fetch`, `setTimeout`, or `setInterval`) to define what should happen when the asynchronous operation completes.
   - **Example**:
     ```javascript
     // Using an anonymous function with a Promise
     fetch("https://api.example.com/data")
       .then(function (response) {
         return response.json();
       })
       .then(function (data) {
         console.log(data);
       })
       .catch(function (error) {
         console.error("Error:", error);
       });
     ```
   - **Explanation**: Each `then` and `catch` block uses an anonymous function to define the behavior that should occur when the Promise resolves or rejects.

5. **Short Functions in Functional Programming**

   - **Scenario**: In functional programming styles, you often use small functions that are passed as arguments to other functions. Anonymous functions are commonly used in these contexts to keep the code concise and readable.
   - **Example**:
     ```javascript
     const nums = [1, 2, 3, 4, 5];
     const evenNumbers = nums.filter(function (num) {
       return num % 2 === 0;
     });
     console.log(evenNumbers); // Output: [2, 4]
     ```
   - **Explanation**: The anonymous function inside the `filter` method checks for even numbers, and there is no need to name this small function since it's only used once.

6. **Dynamic Function Creation**

   - **Scenario**: In situations where you need to dynamically create functions (e.g., for use with user-generated content, creating custom event handlers, etc.), anonymous functions are a natural choice.
   - **Example**:

     ```javascript
     // Dynamically create a function based on user input
     const createMultiplier = function (factor) {
       return function (number) {
         return number * factor;
       };
     };

     const double = createMultiplier(2);
     console.log(double(5)); // Output: 10
     ```

   - **Explanation**: The inner function created is an anonymous function returned by another function, allowing for dynamic behavior.

#### Benefits of Using Anonymous Functions

- **Conciseness**: Reduces the need to declare and name functions that are only used once.
- **Clarity**: Makes the code more readable when the function's purpose is clear and localized to a specific operation.
- **Scope Control**: Limits the scope of variables, reducing the risk of variable name conflicts.
- **Flexibility**: Enables quick and flexible code writing, particularly in event-driven or asynchronous environments.

#### Summary

Anonymous functions are ideal when:

- You need to pass a function as an argument (callbacks).
- You want to define functions for one-time use (event handlers, promises).
- You want to create local scopes (IIFE).
- You prefer to keep your code concise and readable, especially in functional programming patterns or when dealing with asynchronous tasks.

---

---

### <u>**Q48 Distinction Between Host Objects and Native Objects in JavaScript**</u>

**Explanation**:

JavaScript objects can be broadly categorized into two types: **Host Objects** and **Native Objects**. Understanding the difference between these two types is essential for knowing how JavaScript interacts with its environment.

#### 1. Native Objects

- **Definition**: **Native objects** (also known as **built-in objects**) are the objects that are part of the JavaScript language specification (ECMAScript). These objects are available in any JavaScript environment (like a browser or Node.js) and are created by the JavaScript engine itself.
- **Examples**:
  - **Core JavaScript Objects**: `Object`, `Function`, `Array`, `String`, `Number`, `Boolean`, `Date`, `RegExp`, `Error`, etc.
  - **Global Objects**: `Math`, `JSON`, `Reflect`, `Promise`, etc.
- **Characteristics**:
  - They are defined in the ECMAScript specification.
  - They provide core language functionalities that are essential for the JavaScript language to work correctly.
  - Native objects are available in any compliant JavaScript environment (such as browsers or Node.js).
- **Example Usage**:
  ```javascript
  // Using native objects
  const arr = new Array(1, 2, 3); // Native object: Array
  const currentDate = new Date(); // Native object: Date
  const jsonString = JSON.stringify({ name: "John" }); // Native object: JSON
  const sqrt = Math.sqrt(16); // Native object: Math
  ```

#### 2. Host Objects

- **Definition**: **Host objects** are objects provided by the host environment (such as a web browser, Node.js, etc.) to enable interaction with the environment itself. They are not defined by the JavaScript language specification but are instead defined by the environment in which JavaScript is running.
- **Examples**:
  - **Web Browsers**: `window`, `document`, `XMLHttpRequest`, `fetch`, `console`, `localStorage`, `history`, `navigator`, `HTMLElement`, etc.
  - **Node.js**: `process`, `Buffer`, `http`, `fs` (file system), `global`, etc.
- **Characteristics**:

  - Host objects provide functionality to interact with the host environment (like manipulating the DOM in a browser, or handling file systems in Node.js).
  - They are environment-specific; some host objects are only available in certain environments (e.g., the `document` object is specific to browsers).
  - Host objects are not part of the ECMAScript specification but are defined by the environment's API.

- **Example Usage**:

  ```javascript
  // Using host objects in a browser environment
  document.getElementById("myButton").addEventListener("click", function () {
    console.log("Button clicked!");
  }); // Host object: document

  // Using host objects in Node.js
  const fs = require("fs"); // Host object: fs (file system)
  fs.readFile("example.txt", "utf8", (err, data) => {
    if (err) throw err;
    console.log(data);
  });
  ```

#### Key Differences Between Host Objects and Native Objects

| Feature           | **Native Objects**                                                  | **Host Objects**                                                             |
| ----------------- | ------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| **Definition**    | Built-in objects defined by the ECMAScript specification            | Objects provided by the host environment (browser, Node.js, etc.)            |
| **Examples**      | `Object`, `Array`, `Function`, `Date`, `Math`, `JSON`, etc.         | `window`, `document`, `XMLHttpRequest` (browsers); `process`, `fs` (Node.js) |
| **Availability**  | Available in all JavaScript environments                            | Environment-specific; different objects in browsers vs. Node.js              |
| **Specification** | Part of the ECMAScript language specification                       | Defined by the host environment's API                                        |
| **Purpose**       | Provides core language functionality                                | Provides environment-specific functionality                                  |
| **Modifiability** | Typically not modifiable or are frozen in modern JavaScript engines | Can vary widely; may be modifiable in some environments                      |

#### Summary

- **Native Objects**: Are built into the JavaScript language itself and are available in any environment. Examples include `Object`, `Array`, `Math`, etc.
- **Host Objects**: Are provided by the JavaScript environment (such as a browser or Node.js) and enable interaction with that environment. Examples include `document`, `window` in browsers, and `process`, `fs` in Node.js.

Understanding the distinction between host objects and native objects helps developers write more environment-aware code and better understand the capabilities and limitations of JavaScript in different contexts.

---

---

### Q Clarify the distinctions among 'function User(){}', 'var user = User()', and 'var user = new User()'

Let's clarify the distinctions between the three different ways of using functions in JavaScript:

1. **`function User() {}`**
2. **`var user = User()`**
3. **`var user = new User()`**

These represent different ways of defining and using functions in JavaScript, and each has a specific purpose and behavior.

#### 1. `function User() {}`

- **What It Is**: This is a **function declaration**. It defines a function named `User`.
- **Purpose**: It creates a reusable function that can be called to execute its code.
- **Characteristics**:
  - The function `User` is hoisted to the top of its scope, which means you can call it before it is defined in your code.
  - It can be invoked directly using its name (e.g., `User()`).
- **Use Case**: You typically use function declarations to define reusable blocks of code that perform a specific task.

- **Example**:

  ```javascript
  function User() {
    console.log("User function called");
  }

  // Call the function directly
  User(); // Output: "User function called"
  ```

#### 2. `var user = User()`

- **What It Is**: This is a **function call** where the function `User` is invoked, and its return value (if any) is assigned to the variable `user`.
- **Purpose**: To execute the `User` function and assign its result to a variable.
- **Characteristics**:
  - The function `User` is called, and the code inside it runs.
  - If `User` has a return statement, the return value is assigned to `user`. If there is no return statement, `user` will be `undefined`.
  - The function does **not** create a new object or instance when called in this way.
- **Use Case**: You use this pattern when you want to execute a function and use its output for further processing.

- **Example**:

  ```javascript
  function User() {
    console.log("User function called");
    return "Hello";
  }

  var user = User(); // Calls the function
  console.log(user); // Output: "Hello"
  ```

#### 3. `var user = new User()`

- **What It Is**: This is a **constructor call** using the `new` keyword with the `User` function.
- **Purpose**: To create a new object instance using the `User` function as a **constructor**.
- **Characteristics**:
  - The `new` keyword creates a new object and sets its prototype to `User.prototype`.
  - The `User` function is executed with `this` bound to the newly created object.
  - If `User` does not explicitly return an object, the newly created object is returned by default.
  - The `User` function is treated as a constructor, and properties and methods can be attached to `this` within it to define the structure and behavior of the object.
- **Use Case**: You use this pattern to create instances of objects, especially when implementing custom object types or using JavaScript classes.

- **Example**:

  ```javascript
  function User() {
    this.name = "John";
    this.sayHello = function () {
      console.log("Hello, " + this.name);
    };
  }

  var user = new User(); // Creates a new instance of User
  console.log(user.name); // Output: "John"
  user.sayHello(); // Output: "Hello, John"
  ```

#### Key Differences

| Aspect                    | `function User() {}`        | `var user = User()`                              | `var user = new User()`                                       |
| ------------------------- | --------------------------- | ------------------------------------------------ | ------------------------------------------------------------- |
| **Definition**            | Function Declaration        | Function Call                                    | Constructor Call                                              |
| **Purpose**               | Defines a reusable function | Executes the function and assigns the result     | Creates a new instance of an object                           |
| **Return Value**          | N/A                         | Return value of `User` function or `undefined`   | A new object instance (unless the function returns an object) |
| **Use of `this`**         | N/A                         | `this` is the global object (in non-strict mode) | `this` is the newly created object                            |
| **Creates a New Object?** | No                          | No                                               | Yes                                                           |
| **Prototype Setup**       | No                          | No                                               | Yes, sets `User.prototype` as the prototype                   |
| **Hoisting Behavior**     | Hoisted                     | Depends on the function                          | Depends on the function                                       |

#### Summary

- **`function User() {}`**: A function declaration that defines a reusable function.
- **`var user = User()`**: A function call that executes `User` and assigns its result to `user`.
- **`var user = new User()`**: A constructor call that creates a new object instance using `User` as the constructor, allowing you to create multiple objects with shared methods and properties.

---

---

### <u>**Q49 Define strict mode and outline some of its advantages and disadvantages.**</u>

#### Strict Mode in JavaScript

**Strict Mode** is a way to opt into a restricted variant of JavaScript that enforces a stricter set of rules and behaviors compared to the normal mode. It helps catch common coding mistakes and prevent unsafe practices, making the code more robust and easier to maintain.

Strict Mode can be enabled in two ways:

1. **Globally**: By placing `"use strict";` at the top of a JavaScript file or script.
2. **Locally**: By placing `"use strict";` at the beginning of a function to apply strict mode only within that function.

#### Advantages of Strict Mode

1. **Catches Common Errors**:

   - **Syntax Errors**: Strict mode throws errors for syntax issues that are silently ignored in non-strict mode, such as missing or incorrect use of `var`, `let`, or `const`.
   - **Assignment Errors**: It prevents assignments to non-writable properties, such as trying to assign to read-only properties or to variables that are undeclared.

   ```javascript
   "use strict";
   x = 3.14; // ReferenceError: x is not defined
   ```

2. **Prevents Dangerous Features**:

   - **Eliminates `this` Coercion**: In strict mode, `this` is `undefined` in functions called in the global context or with `call`/`apply` if not explicitly bound, which helps avoid unintended behavior.

   ```javascript
   "use strict";
   function foo() {
     console.log(this); // undefined
   }
   foo();
   ```

   - **Disallows Duplicate Parameters**: Strict mode disallows duplicate parameter names in function definitions, which can prevent confusion and bugs.

   ```javascript
   "use strict";
   function sum(a, a) {
     // SyntaxError: Duplicate parameter name not allowed in this context
     return a + a;
   }
   ```

   - **Prohibits `with` Statement**: The `with` statement is not allowed in strict mode, which helps avoid confusion caused by variable scope issues.

   ```javascript
   "use strict";
   with (Math) {
     // SyntaxError: 'with' statements are not allowed in strict mode
     x = cos(2);
   }
   ```

3. **Improves Performance**:

   - **Optimization**: Some JavaScript engines can optimize code better when running in strict mode because it enforces a cleaner and more predictable execution environment.

4. **Enhances Security**:

   - **Safer Code**: Strict mode prevents the use of features that are considered unsafe or that can lead to security vulnerabilities, such as `eval` and `with`.

5. **Facilitates Debugging**:
   - **Error Detection**: By catching common mistakes and errors early, strict mode can make debugging easier and help developers write more reliable code.

#### Disadvantages of Strict Mode

1. **Compatibility Issues**:

   - **Legacy Code**: Strict mode can break existing code that relies on non-strict mode behaviors. For example, code that uses undeclared variables or assigns to read-only properties may throw errors in strict mode.

2. **Limited Use in Older Environments**:

   - **Older Browsers**: Some older browsers may not fully support strict mode, which can cause issues if compatibility with legacy browsers is a requirement.

3. **Potential for Increased Code Complexity**:

   - **Migration Challenges**: Enabling strict mode in a large codebase may require significant refactoring to fix errors and adapt code to stricter rules.

4. **Learning Curve**:
   - **Understanding Rules**: Developers need to be familiar with the stricter rules of strict mode to effectively use it, which may require additional learning and adjustment.

#### Summary

**Strict Mode** is a beneficial feature in JavaScript that helps catch common errors, prevent dangerous features, improve performance, and enhance security. However, it can also lead to compatibility issues, require code refactoring, and necessitate a learning curve for understanding its stricter rules. When used appropriately, strict mode can lead to cleaner, more robust, and more maintainable code.

---

---

### <u>**Q50 How do you clone an object in JavaScript?**</u>

In JavaScript, there are several ways to clone an object. Here are some common methods:

#### 1. Using the Spread Operator

The spread operator (`...`) creates a shallow copy of an object.

```javascript
const original = { a: 1, b: 2 };
const copy = { ...original };
```

#### 2. Using `Object.assign()`

`Object.assign()` also creates a shallow copy of an object.

```javascript
const original = { a: 1, b: 2 };
const copy = Object.assign({}, original);
```

#### 3. Using `JSON.parse()` and `JSON.stringify()`

For deep cloning (copying nested objects), you can use `JSON.parse()` and `JSON.stringify()`. Note that this method has limitations, such as not supporting functions, `undefined`, or special objects like `Date`.

```javascript
const original = { a: 1, b: { c: 2 } };
const copy = JSON.parse(JSON.stringify(original));
```

#### 4. Using a Utility Library

Libraries like Lodash provide utility functions for deep cloning. For example, with Lodash:

```javascript
const _ = require("lodash");
const original = { a: 1, b: { c: 2 } };
const copy = _.cloneDeep(original);
```

Choose the method based on whether you need a shallow or deep copy and the specific requirements of your use case.

---

---

### <u>**Q51 Explain the concept of debouncing and throttling.**</u>

Sure! Debouncing and throttling are techniques used to control the frequency of function execution, particularly in response to events like user input or scrolling. They help improve performance and prevent unnecessary processing.

#### Debouncing

**Concept:** Debouncing ensures that a function is only executed after a certain period of inactivity. In other words, it waits for the user to stop triggering an event before running the function.

**Example:** Imagine a search box that suggests results as you type. Without debouncing, the search function could run every time you press a key, which can be inefficient. Debouncing ensures that the search function only runs after you stop typing for a set amount of time.

**Code Example:**

```javascript
function debounce(func, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => func.apply(this, args), delay);
  };
}

function search(query) {
  console.log("Searching for:", query);
}

const debouncedSearch = debounce(search, 300);

// Example usage: call debouncedSearch while typing
debouncedSearch("hello");
debouncedSearch("hello w");
debouncedSearch("hello wo");
// The search function will only be called with 'hello wo' after 300ms of inactivity
```

#### Throttling

**Concept:** Throttling ensures that a function is executed at most once in a specified time interval. It limits the rate at which a function is called.

**Example:** Imagine you have a scrolling event that triggers a function to update some UI elements. Without throttling, this function could run many times per second as you scroll, causing performance issues. Throttling ensures the function runs at a controlled rate.

**Code Example:**

```javascript
function throttle(func, limit) {
  let lastCall = 0;
  return function (...args) {
    const now = new Date().getTime();
    if (now - lastCall >= limit) {
      lastCall = now;
      func.apply(this, args);
    }
  };
}

function handleScroll() {
  console.log("Handling scroll event");
}

const throttledScroll = throttle(handleScroll, 1000); // Function will run at most once per second

// Example usage: call throttledScroll during scrolling
window.addEventListener("scroll", throttledScroll);
```

#### Summary

- **Debouncing**: Delays the function call until the event stops firing for a specified time. Useful for scenarios like search input where you want to wait until the user has finished typing.
- **Throttling**: Limits the function call to a specified rate, regardless of how often the event occurs. Useful for scenarios like scrolling where you want to control the frequency of updates.

---

---

### <u>**Q52 Temporal Dead Zone**</u>

The Temporal Dead Zone (TDZ) is a concept in JavaScript related to how variables are handled when using `let` and `const` declarations. It refers to the time between the entering of a block scope (like inside a function or a block) and the actual declaration of a variable within that block. During this period, the variable is in a "dead zone" and cannot be accessed.

Here's a simplified explanation:

#### What is TDZ?

- **Before Declaration**: If you try to access a variable declared with `let` or `const` before its declaration in its block scope, you'll get a `ReferenceError`. This is because the variable is in the TDZ.
- **After Declaration**: Once the declaration has been encountered in the code, the variable can be used as normal.

#### Why Does TDZ Exist?

The TDZ exists to prevent the use of variables before they are properly initialized. It helps avoid bugs that could arise from accessing variables before they are set.

#### Example of TDZ

Here’s an example to illustrate TDZ:

```javascript
function example() {
  console.log(a); // ReferenceError: Cannot access 'a' before initialization
  let a = 3;
}

example();
```

In this example:

- The variable `a` is declared with `let` but is accessed before its declaration.
- This results in a `ReferenceError` because `a` is in the TDZ.

#### TDZ with `const`

The same rules apply to variables declared with `const`, but since `const` also requires initialization at the time of declaration, the TDZ ensures that the variable cannot be accessed until it's initialized.

```javascript
function example() {
  console.log(b); // ReferenceError: Cannot access 'b' before initialization
  const b = 5;
}

example();
```

#### How to Avoid TDZ Errors

- **Declare Variables Early**: Declare variables at the beginning of your block scope to avoid accessing them before they are initialized.
- **Initialize Variables**: Make sure variables declared with `let` and `const` are initialized before use.

#### Summary

The Temporal Dead Zone is a period during which variables declared with `let` and `const` are inaccessible. It starts at the beginning of the block and ends when the variable is declared and initialized. This concept helps prevent errors related to the use of variables before they are ready.

---

---

### <u>**Q53 Mutable/Immutable data types**</u>

In JavaScript, data types can be categorized into mutable and immutable. Understanding these concepts is crucial for effective programming and managing state.

#### Immutable Data Types

**Definition:** Immutable data types are those whose values cannot be changed once they are created. When you modify an immutable value, a new value is created instead of modifying the original one.

**JavaScript Examples:**

- **Primitive Types:** These are immutable. When you work with primitive types, you're always working with a copy of the value, not the value itself. If you assign a primitive value to a variable and then modify it, you create a new value.
  - **String:**
    ```javascript
    let str = "hello";
    let newStr = str.toUpperCase(); // 'HELLO'
    console.log(str); // 'hello' (original string remains unchanged)
    ```
  - **Number:**
    ```javascript
    let num = 5;
    let newNum = num + 1; // 6
    console.log(num); // 5 (original number remains unchanged)
    ```
  - **Boolean:**
    ```javascript
    let bool = true;
    let newBool = !bool; // false
    console.log(bool); // true (original boolean remains unchanged)
    ```

#### Mutable Data Types

**Definition:** Mutable data types are those whose values can be changed after they are created. Modifying a mutable value will affect the original value.

**JavaScript Examples:**

- **Objects:**
  ```javascript
  let person = { name: "Alice", age: 25 };
  person.age = 26; // Mutates the original object
  console.log(person.age); // 26
  ```
- **Arrays:**
  ```javascript
  let numbers = [1, 2, 3];
  numbers.push(4); // Mutates the original array
  console.log(numbers); // [1, 2, 3, 4]
  ```

#### Key Differences

1. **Modification:**

   - **Immutable:** Cannot be modified. Changes result in new values.
   - **Mutable:** Can be modified. Changes affect the original value.

2. **Performance:**

   - **Immutable:** Often leads to safer and more predictable code, especially in functional programming paradigms.
   - **Mutable:** Can be more performant in scenarios where frequent changes to data are required, but requires careful management to avoid unintended side effects.

3. **Use Cases:**
   - **Immutable:** Useful in functional programming, state management (e.g., Redux in React), and to ensure data integrity.
   - **Mutable:** Useful in scenarios where data changes frequently and the overhead of creating new instances is undesirable.

#### Summary

- **Immutable Data Types**: Primitive types in JavaScript (e.g., `string`, `number`, `boolean`). They cannot be changed once created.
- **Mutable Data Types**: Objects and arrays. Their values can be changed, which affects the original data structure.

Understanding and correctly using mutable and immutable types can help you write more predictable and maintainable code.

---

---

### <u>**Q54 Event Propagation**</u>

Event propagation in JavaScript refers to the way events move through the DOM (Document Object Model) hierarchy. It helps you control how events are handled and how they affect different elements in a web page.

##### Phases of Event Propagation

1. **Capturing Phase (Capture Phase):**

   - The event starts from the top of the DOM tree (document) and travels down to the target element.
   - This phase is also known as the capturing phase.

2. **Target Phase:**

   - The event reaches the target element where it was originally triggered.

3. **Bubbling Phase:**
   - The event then bubbles up from the target element back up to the top of the DOM tree.
   - This is known as the bubbling phase.

##### Example to Illustrate Event Propagation

Let's consider a simple HTML structure:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Event Propagation Example</title>
  </head>
  <body>
    <div id="parent">
      <button id="child">Click Me</button>
    </div>
    <script>
      // Event listener for capturing phase
      document.getElementById("parent").addEventListener(
        "click",
        function () {
          console.log("Parent DIV (Capturing)");
        },
        true
      ); // Third argument 'true' indicates capturing phase

      // Event listener for target phase
      document.getElementById("child").addEventListener("click", function () {
        console.log("Child BUTTON (Target)");
      });

      // Event listener for bubbling phase
      document.getElementById("parent").addEventListener("click", function () {
        console.log("Parent DIV (Bubbling)");
      });
    </script>
  </body>
</html>
```

##### Explanation

1. **Capturing Phase:**

   - The `click` event starts at the `document` and travels down to the target (`button`). The first event listener (`Parent DIV (Capturing)`) is set with the `true` argument, so it logs its message during the capturing phase.

2. **Target Phase:**

   - The event reaches the `button` element, and the second event listener (`Child BUTTON (Target)`) logs its message.

3. **Bubbling Phase:**
   - The event bubbles up from the `button` element to the `div`, and the third event listener (`Parent DIV (Bubbling)`) logs its message.

##### Output in Console:

```
Parent DIV (Capturing)
Child BUTTON (Target)
Parent DIV (Bubbling)
```

##### Key Points

- **Capturing Phase**: Use the third argument in `addEventListener` as `true` to handle events during the capturing phase.
- **Bubbling Phase**: By default, event listeners handle events during the bubbling phase if the third argument is omitted or set to `false`.

#### Event Propagation Control

You can control the propagation of events using `event.stopPropagation()` to prevent further propagation in both capturing and bubbling phases.

**Example:**

```javascript
document.getElementById("child").addEventListener("click", function (event) {
  console.log("Child BUTTON (Target)");
  event.stopPropagation(); // Stops the event from bubbling up
});
```

In this case, the bubbling phase will not occur after clicking the button, and the console will only show:

```
Child BUTTON (Target)
```

Understanding event propagation helps you manage event handling efficiently and control how events interact with different elements in your web application.

---

---

### <u>**Q55 Generator Functions**</u>

Generator functions in JavaScript are a special type of function that allows you to pause and resume execution. They are useful for handling asynchronous operations, managing complex state, and creating iterators.

##### Key Features of Generator Functions

1. **Yielding Values:**

   - Generator functions use the `yield` keyword to produce a sequence of values. Each time `yield` is encountered, the function's execution is paused, and the value is returned to the caller.
   - The function can be resumed later from where it was paused.

2. **Iterating Values:**

   - Generators are iterable, meaning you can use them in a `for...of` loop or any other construct that works with iterables.

3. **Control Flow:**
   - Generators allow you to control the execution flow by pausing and resuming.

##### Creating a Generator Function

You define a generator function using the `function*` syntax. Here’s a simple example:

```javascript
function* numberGenerator() {
  yield 1;
  yield 2;
  yield 3;
}
```

##### Using a Generator Function

You create a generator object by calling the generator function. You can then use the generator's `next()` method to retrieve values one at a time.

**Example:**

```javascript
const generator = numberGenerator();

console.log(generator.next()); // { value: 1, done: false }
console.log(generator.next()); // { value: 2, done: false }
console.log(generator.next()); // { value: 3, done: false }
console.log(generator.next()); // { value: undefined, done: true }
```

- `value` is the value yielded by the generator.
- `done` is a boolean indicating whether the generator has completed its execution.

##### Example: Generator Function with Infinite Sequence

You can also create generators that produce an infinite sequence of values:

```javascript
function* infiniteNumbers() {
  let i = 0;
  while (true) {
    yield i++;
  }
}

const generator = infiniteNumbers();

console.log(generator.next().value); // 0
console.log(generator.next().value); // 1
console.log(generator.next().value); // 2
// and so on...
```

##### Generator Function with Parameters

Generators can also accept parameters, which can be used in conjunction with the `yield` keyword:

```javascript
function* countFrom(start) {
  let count = start;
  while (true) {
    yield count++;
  }
}

const counter = countFrom(5);

console.log(counter.next().value); // 5
console.log(counter.next().value); // 6
console.log(counter.next().value); // 7
```

##### Using Generators for Asynchronous Operations

Generators are often used with Promises to handle asynchronous operations:

```javascript
function* fetchData() {
  const data1 = yield fetch("https://api.example.com/data1").then((response) =>
    response.json()
  );
  const data2 = yield fetch("https://api.example.com/data2").then((response) =>
    response.json()
  );
  return [data1, data2];
}

const generator = fetchData();

function handle(generator, value) {
  const result = generator.next(value);
  if (result.done) {
    return Promise.resolve(result.value);
  }
  return Promise.resolve(result.value).then((val) => handle(generator, val));
}

handle(generator).then((result) => console.log(result));
```

##### Summary

- **Definition**: Generator functions are defined using `function*` and use `yield` to pause and resume execution.
- **Iterables**: Generators are iterable, which means you can use them with loops and other iterable-based constructs.
- **Control Flow**: They allow for complex control flows and can manage asynchronous operations effectively.

Generator functions are powerful tools for managing state and handling complex control flows in JavaScript applications.

---

---

### <u>**Q56 difference between shallow copy and deep copy in JavaScript**</u>

➤ Shallow Copy:  
A shallow copy creates a new object, but only copies the references of nested objects. If the original object contains other objects, only their references are copied, not the actual nested objects.

➤ Example:

```js

Using Object.assign or the spread operator (...) creates a shallow copy.

const original = { name: "Rajat", address: { city: "Pune" } };
const shallowCopy = { ...original };
shallowCopy.address.city = "Mumbai";
console.log(original.address.city);
Output: "Mumbai"
```

➤ Deep Copy:  
A deep copy creates a new object and recursively copies all nested objects, ensuring complete duplication of the original object. Changes to the deep copy do not affect the original object.

➤ Example:

```js

Using libraries like lodash or JSON.parse(JSON.stringify()) and recursive functions can achieve deep copying.

const _ = require('lodash');
const original = { name: "Rajat", address: { city: "Pune" } };
const deepCopy = _.cloneDeep(original);
deepCopy.address.city = "Mumbai";
console.log(original.address.city);
Output: "Pune"
```

➤ Use Cases:

- Shallow Copy: Suitable for simple objects or when only the top-level properties need duplication.
- Deep Copy: Necessary for complex objects with nested structures to ensure complete independence from the original object.

➤ Performance:

- Shallow Copy: Faster and less resource-intensive.
- Deep Copy: Slower and more resource-intensive due to recursive copying.

That’s the difference between shallow copy and deep copy in JavaScript

---

---

### <u>**Q57 Memoization**</u>

Memoization is a technique used to optimize functions by caching their results based on the inputs. This helps avoid redundant calculations by storing previously computed results and returning them when the same inputs are encountered again.

Here's a basic implementation of memoization in JavaScript:

#### Memoization Function

```javascript
function memoize(fn) {
  const cache = new Map();

  return function (...args) {
    const key = JSON.stringify(args); // Create a cache key from function arguments
    if (cache.has(key)) {
      return cache.get(key); // Return cached result if it exists
    }
    const result = fn(...args); // Compute result if not in cache
    cache.set(key, result); // Store result in cache
    return result;
  };
}
```

#### Example Usage

Let's use the `memoize` function to optimize a computationally expensive function, like computing Fibonacci numbers.

```javascript
// Expensive Fibonacci function
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// Create a memoized version of the Fibonacci function
const memoizedFibonacci = memoize(fibonacci);

console.log(memoizedFibonacci(10)); // Computed result, stored in cache
console.log(memoizedFibonacci(10)); // Result fetched from cache
```

#### Explanation

1. **Cache Creation:**

   - `const cache = new Map();` creates a `Map` to store cached results.

2. **Key Creation:**

   - `const key = JSON.stringify(args);` converts the function arguments into a string key. This helps in uniquely identifying the result for specific inputs.

3. **Cache Check:**

   - `if (cache.has(key)) return cache.get(key);` checks if the result for the given key is already in the cache.

4. **Result Computation and Caching:**

   - `const result = fn(...args);` computes the result if not cached.
   - `cache.set(key, result);` stores the result in the cache for future use.

5. **Return Result:**
   - The function returns the result, whether it's fetched from the cache or computed afresh.

#### Notes

- **Cache Key:** In the implementation above, the cache key is created using `JSON.stringify(args)`. This works well for simple data types, but for more complex objects, you might need a more sophisticated method to create unique keys.

- **Performance Considerations:** Memoization is particularly useful for functions with expensive computations and a relatively small set of unique inputs. If the number of unique inputs grows too large, the cache size might become a concern.

- **Limitations:** This simple memoization technique assumes that arguments are JSON serializable. If you use more complex data types (like functions or instances of custom classes), you'll need a more advanced key generation strategy.

This basic memoization implementation can be a powerful tool to optimize performance and avoid redundant computations in your JavaScript applications.

---

---

### <u>**Q58 clearAllTimeout**</u>

To implement a `clearAllTimeout()` function in JavaScript, you need to keep track of all active timeouts that you set using `setTimeout`. The function should then clear all of these timeouts.

Here's a simple implementation that involves keeping track of timeout IDs in an array and providing a method to clear them all:

#### Implementation

```javascript
class TimeoutManager {
  constructor() {
    this.timeouts = [];
  }

  setTimeout(callback, delay) {
    const id = window.setTimeout(() => {
      callback();
      this.removeTimeout(id);
    }, delay);
    this.timeouts.push(id);
    return id;
  }

  clearAllTimeouts() {
    this.timeouts.forEach((id) => clearTimeout(id));
    this.timeouts = [];
  }

  removeTimeout(id) {
    this.timeouts = this.timeouts.filter((timeoutId) => timeoutId !== id);
  }
}

// Usage
const manager = new TimeoutManager();

manager.setTimeout(() => console.log("Timeout 1"), 1000);
manager.setTimeout(() => console.log("Timeout 2"), 2000);
manager.setTimeout(() => console.log("Timeout 3"), 3000);

// Clear all timeouts
manager.clearAllTimeouts();
```

##### Explanation

1. **Class Definition (`TimeoutManager`):**

   - The `TimeoutManager` class maintains an internal list (`timeouts`) of timeout IDs.

2. **`setTimeout` Method:**

   - Wraps the standard `setTimeout` function.
   - Stores the timeout ID in the `timeouts` array.
   - When the timeout completes, it removes the ID from the `timeouts` array.

3. **`clearAllTimeouts` Method:**

   - Iterates through all stored timeout IDs and clears them using `clearTimeout`.
   - Resets the `timeouts` array to an empty state.

4. **`removeTimeout` Method:**
   - Removes a specific timeout ID from the `timeouts` array.

##### Usage

- **Creating Timeouts:**

  - Use `manager.setTimeout()` to set a timeout and track it.

- **Clearing Timeouts:**
  - Call `manager.clearAllTimeouts()` to clear all active timeouts.

##### Notes

- **Scope of Timeouts:**

  - The `TimeoutManager` class tracks timeouts set through its own `setTimeout` method. If you use the global `setTimeout` function directly, those timeouts won’t be tracked.

- **Alternative Implementations:**
  - If you need to clear timeouts from different sources or use `setTimeout` globally, you would need a more complex approach, such as tracking timeouts in a global registry or using other state management techniques.

---

---

### <u>**Q59 LRU Cache Implementation**</u>

An LRU (Least Recently Used) cache is a data structure that evicts the least recently used item when the cache reaches its capacity. It helps optimize the use of limited space by keeping frequently accessed items readily available while discarding less frequently used ones.

#### LRU Cache Implementation

To implement an LRU Cache, you typically use a combination of a doubly linked list and a hash map (or dictionary). The hash map provides fast access to cache items, and the doubly linked list maintains the order of usage.

Here's a simple implementation of an LRU Cache in JavaScript:

```javascript
class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = new Map(); // Hash map for fast access
    this.order = new DoublyLinkedList(); // Doubly linked list for ordering
  }

  get(key) {
    if (this.cache.has(key)) {
      // Move the accessed node to the front (most recently used)
      const node = this.cache.get(key);
      this.order.moveToFront(node);
      return node.value;
    }
    return -1; // Key not found
  }

  put(key, value) {
    if (this.cache.has(key)) {
      // Update the value and move the node to the front
      const node = this.cache.get(key);
      node.value = value;
      this.order.moveToFront(node);
    } else {
      if (this.cache.size === this.capacity) {
        // Remove the least recently used node
        const nodeToRemove = this.order.removeLast();
        this.cache.delete(nodeToRemove.key);
      }
      // Add the new node to the cache and linked list
      const newNode = this.order.addFirst(key, value);
      this.cache.set(key, newNode);
    }
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = new Node(null, null); // Dummy head
    this.tail = new Node(null, null); // Dummy tail
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  addFirst(key, value) {
    const newNode = new Node(key, value);
    newNode.next = this.head.next;
    newNode.prev = this.head;
    this.head.next.prev = newNode;
    this.head.next = newNode;
    return newNode;
  }

  removeLast() {
    if (this.head.next === this.tail) {
      return null; // Empty list
    }
    const lastNode = this.tail.prev;
    this.tail.prev = lastNode.prev;
    lastNode.prev.next = this.tail;
    return lastNode;
  }

  moveToFront(node) {
    // Remove the node from its current position
    node.prev.next = node.next;
    node.next.prev = node.prev;
    // Add the node to the front
    this.addFirst(node.key, node.value);
  }
}

class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

// Example usage:
const lruCache = new LRUCache(2);
lruCache.put(1, 1);
lruCache.put(2, 2);
console.log(lruCache.get(1)); // returns 1
lruCache.put(3, 3); // evicts key 2
console.log(lruCache.get(2)); // returns -1 (not found)
lruCache.put(4, 4); // evicts key 1
console.log(lruCache.get(1)); // returns -1 (not found)
console.log(lruCache.get(3)); // returns 3
console.log(lruCache.get(4)); // returns 4
```

#### Explanation

1. **LRUCache Class:**

   - **Constructor:** Initializes cache capacity, hash map (`this.cache`), and doubly linked list (`this.order`).
   - **get(key):** Retrieves the value for the given key if it exists, and moves the node to the front of the list.
   - **put(key, value):** Updates the value if the key exists; otherwise, adds the new key-value pair. Evicts the least recently used item if the cache is full.

2. **DoublyLinkedList Class:**

   - Manages the order of nodes. It has methods to add nodes to the front, remove nodes from the end, and move nodes to the front.

3. **Node Class:**
   - Represents an individual node in the doubly linked list with key, value, and pointers to the previous and next nodes.

#### Usage

- **`put(key, value)`**: Adds a key-value pair to the cache. If the cache is full, it evicts the least recently used item.
- **`get(key)`**: Retrieves the value for the given key if it exists, and updates its usage position.

This implementation provides O(1) time complexity for both `get` and `put` operations, making it efficient for use in scenarios where frequent access and updates to a limited set of items are required.

---

---

### <u>**Q60 Intersection Observe**</u>

`IntersectionObserver` is a powerful API in JavaScript used to observe changes in the intersection of an element with its ancestor elements or the viewport. It's particularly useful for implementing features like lazy loading of images, infinite scrolling, and triggering animations when elements enter or leave the viewport.

#### Key Concepts

- **Intersection Observer:** Watches for changes in the intersection of a target element with a specified root element or viewport.
- **Callback Function:** Called when the target element’s visibility changes according to the specified thresholds.
- **Options:** Configuration settings for the observer, including root, rootMargin, and thresholds.

#### Basic Usage

Here's a simple example of how to use `IntersectionObserver`:

**1. Create an Intersection Observer Instance**

```javascript
// Callback function to execute when intersection changes
const handleIntersection = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      console.log("Element is in the viewport!");
      // Perform actions when the element is in the viewport
      entry.target.classList.add("in-viewport");
    } else {
      console.log("Element is out of the viewport!");
      // Perform actions when the element is out of the viewport
      entry.target.classList.remove("in-viewport");
    }
  });
};

// Options for the observer (optional)
const options = {
  root: null, // Use the viewport as the root
  rootMargin: "0px", // Margin around the root
  threshold: 0.5, // Percentage of the target element's visibility required to trigger the callback
};

// Create an IntersectionObserver instance
const observer = new IntersectionObserver(handleIntersection, options);
```

**2. Observe Target Elements**

```javascript
// Select target elements to observe
const targets = document.querySelectorAll(".observe-me");

// Start observing each target
targets.forEach((target) => observer.observe(target));
```

**3. Example HTML**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <style>
      .observe-me {
        height: 200px;
        background-color: lightgray;
        margin: 50px 0;
      }
      .in-viewport {
        background-color: lightgreen;
      }
    </style>
  </head>
  <body>
    <div class="observe-me">Observe Me 1</div>
    <div class="observe-me">Observe Me 2</div>
    <div class="observe-me">Observe Me 3</div>
    <script src="script.js"></script>
  </body>
</html>
```

**Explanation**

1. **Intersection Observer Instance:**

   - **`handleIntersection`**: The callback function executed whenever an observed element enters or exits the viewport. It receives two arguments: `entries` (an array of `IntersectionObserverEntry` objects) and `observer` (the observer instance itself).
   - **`options`**: Configuration for the observer:
     - `root`: The element to use as the viewport. Set to `null` to use the viewport.
     - `rootMargin`: Margin around the root element (like CSS margin) to expand or shrink the viewport.
     - `threshold`: Specifies the percentage of the target’s visibility required to trigger the callback. For example, `0.5` means the callback is triggered when 50% of the target is visible.

2. **Observing Targets:**

   - **`observer.observe(target)`**: Adds each target element to the observer's list, causing the callback to be called when the element's visibility changes according to the specified options.

3. **Styling and HTML:**
   - **CSS**: Adds visual distinction when elements enter or leave the viewport.
   - **HTML**: Example layout of elements to be observed.

#### Benefits

- **Efficiency:** `IntersectionObserver` is efficient because it avoids continuously polling the viewport or DOM. Instead, it uses a native, optimized mechanism for detecting visibility changes.
- **Flexibility:** You can observe multiple elements and customize the intersection thresholds and root settings.

#### Use Cases

- **Lazy Loading:** Load images or other resources only when they enter the viewport.
- **Infinite Scrolling:** Load more content when the user scrolls near the bottom of the page.
- **Animations:** Trigger animations when elements come into view.

Using `IntersectionObserver` helps in creating performant and responsive web applications by efficiently handling visibility changes.

---

---

### <u>**Q61 Interpretation**</u>

**Interpretation** in JavaScript generally refers to how JavaScript code is executed by the JavaScript engine. JavaScript is an interpreted language, which means that its code is executed line-by-line at runtime. This is in contrast to compiled languages, where code is translated into machine language before execution.

Here's a simple overview of how interpretation works in JavaScript, followed by a practical example:

#### How JavaScript Interpretation Works

1. **Parsing:**

   - The JavaScript engine first parses the code to understand its syntax. It converts the code into an Abstract Syntax Tree (AST), a tree-like structure that represents the syntactic structure of the code.

2. **Execution:**

   - The JavaScript engine then executes the code based on the AST. It performs operations like variable assignments, function calls, and control flow.

3. **Just-In-Time (JIT) Compilation:**
   - Modern JavaScript engines (like V8 in Chrome) use JIT compilation to optimize execution. They initially interpret the code, then compile hot spots (frequently executed code paths) into machine code for faster execution.

#### Example of JavaScript Interpretation

Here’s a simple example to illustrate interpretation in JavaScript:

```javascript
// Example script.js

// Variable declaration and assignment
let message = "Hello, world!";

// Function declaration
function greet(name) {
  return `Hello, ${name}!`;
}

// Function call
console.log(greet("Alice"));

// Conditional statement
if (message.includes("world")) {
  console.log('The message includes "world".');
}
```

**Explanation**

1. **Variable Declaration and Assignment:**

   - The interpreter processes the `let message = 'Hello, world!';` statement by allocating memory for the variable `message` and assigning it the string value `'Hello, world!'`.

2. **Function Declaration:**

   - The function `greet` is declared. The interpreter understands that `greet` takes one parameter `name` and returns a greeting string.

3. **Function Call:**

   - `console.log(greet('Alice'));` is executed. The interpreter calls the `greet` function with `'Alice'` as the argument, which returns `'Hello, Alice!'`, and logs it to the console.

4. **Conditional Statement:**
   - The `if` statement checks whether the `message` contains the substring `'world'`. If true, it logs a message to the console.

#### Step-by-Step Execution

1. **Initialization:**

   - The interpreter initializes the `message` variable.
   - The `greet` function is parsed and prepared for future calls.

2. **Function Call Execution:**

   - When `greet('Alice')` is executed, the function processes `'Alice'` and returns `'Hello, Alice!'`.

3. **Conditional Check:**
   - The interpreter evaluates `message.includes('world')` and logs a message if the condition is met.

#### Advantages of Interpretation

- **Immediate Execution:** JavaScript code is executed immediately, allowing for dynamic and interactive web pages.
- **Flexibility:** You can modify and execute code on the fly without needing a separate compilation step.

---

---

### **Q62 Differences Between Feature Detection, Feature Inference, and Utilizing the User Agent (UA) String**

When developing websites and web applications, it is crucial to ensure compatibility across various browsers and devices. Three common techniques used to handle cross-browser compatibility and functionality checks are **Feature Detection**, **Feature Inference**, and **Utilizing the User Agent (UA) String**. Each method has its own approach and use case.

###### 1. **Feature Detection**

- **Definition**: **Feature detection** is a technique that involves checking whether a particular feature or capability is supported by the browser before using it.
- **Purpose**:
  - To ensure that the code only uses features that are supported by the user's browser.
  - To provide fallbacks or alternatives when certain features are not available.
- **How It Works**:
  - You test if a feature (like a specific method or property) exists in the current environment by using `if` statements or similar logic.
  - If the feature is available, the code is executed; otherwise, a fallback or alternative code is provided.
- **Advantages**:
  - It is a reliable method because it checks directly for the existence of a feature, rather than making assumptions based on the browser.
  - It avoids issues related to misleading or incorrect User Agent (UA) strings.
  - It works well with progressive enhancement, allowing newer features to be used when available.
- **Example**:
  ```javascript
  // Example of feature detection for the Fetch API
  if ("fetch" in window) {
    // Fetch API is supported; use it
    fetch("https://api.example.com/data")
      .then((response) => response.json())
      .then((data) => console.log(data));
  } else {
    // Fetch API is not supported; use XMLHttpRequest as a fallback
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api.example.com/data", true);
    xhr.onload = function () {
      if (xhr.status === 200) {
        console.log(JSON.parse(xhr.responseText));
      }
    };
    xhr.send();
  }
  ```
  - **Explanation**: The code checks if the `fetch` function is available in the `window` object. If it is, it uses the Fetch API; otherwise, it falls back to using `XMLHttpRequest`.

###### 2. **Feature Inference**

- **Definition**: **Feature inference** is a technique that involves assuming the existence of one feature based on the presence of another.
- **Purpose**:
  - To make assumptions about browser capabilities based on the availability of specific features.
- **How It Works**:
  - The developer checks for the existence of a feature that is usually found alongside other features and assumes related features are also supported.
- **Advantages**:
  - Can be faster than individual checks for every feature.
- **Disadvantages**:
  - It can be unreliable because browsers might implement some features but not others, even within the same specification.
  - Assumptions can lead to errors if the inference is incorrect.
- **Example**:
  ```javascript
  // Example of feature inference
  if (document.getElementsByTagName) {
    // Assume that if the browser supports getElementsByTagName,
    // it also supports querySelector
    var elements = document.querySelectorAll(".example");
  }
  ```
  - **Explanation**: The code checks for `getElementsByTagName` and assumes that `querySelectorAll` is also supported. However, this assumption may not always hold true in older or partial-implementation browsers.

###### 3. **Utilizing the User Agent (UA) String**

- **Definition**: **Utilizing the User Agent (UA) string** is a technique where the browser's User Agent string is examined to determine the browser type, version, and the operating system it is running on.
- **Purpose**:
  - To determine the browser or device type and serve different content or scripts based on that information.
- **How It Works**:
  - The User Agent string is accessed via `navigator.userAgent` and parsed to identify the browser name, version, and platform.
- **Advantages**:
  - Allows specific tailoring of experiences or optimizations for particular browsers or devices.
  - Can be useful in analytics or collecting data about browser usage.
- **Disadvantages**:
  - User Agent strings can be easily spoofed or manipulated, making them unreliable for feature detection.
  - Browser vendors may change or update their UA strings, which can break the detection logic.
  - Using UA strings can lead to maintaining large lists of known browser patterns and versions, making it cumbersome and error-prone.
- **Example**:

  ```javascript
  // Example of using the User Agent string
  var ua = navigator.userAgent;

  if (ua.indexOf("Firefox") > -1) {
    console.log("User is using Firefox");
  } else if (ua.indexOf("Chrome") > -1) {
    console.log("User is using Chrome");
  } else {
    console.log("User is using another browser");
  }
  ```

  - **Explanation**: The code checks the User Agent string for specific substrings (like "Firefox" or "Chrome") to determine which browser the user is using.

###### Key Differences

| Aspect          | **Feature Detection**                               | **Feature Inference**                                 | **User Agent (UA) String**                                           |
| --------------- | --------------------------------------------------- | ----------------------------------------------------- | -------------------------------------------------------------------- |
| **Definition**  | Checks directly for the existence of a feature      | Assumes the existence of one feature based on another | Analyzes the User Agent string to determine browser type and version |
| **Reliability** | Highly reliable                                     | Less reliable due to assumptions                      | Least reliable due to spoofing or changes in the UA string           |
| **Flexibility** | Highly flexible; adapts to any browser              | Less flexible; depends on assumptions                 | Not flexible; relies on known patterns and strings                   |
| **Complexity**  | Can be straightforward                              | Less complex but prone to errors                      | Can be complex due to string parsing and pattern matching            |
| **Use Cases**   | When you want to check for feature support directly | When related features tend to be implemented together | When you need to tailor content for specific browsers or platforms   |
| **Examples**    | `if ('fetch' in window) { ... }`                    | `if (document.getElementsByTagName) { ... }`          | `if (navigator.userAgent.indexOf('Firefox') > -1) { ... }`           |
| **Drawbacks**   | None (very robust)                                  | Can fail if assumption is incorrect                   | Spoofable, brittle, and can lead to browser-specific code            |

###### Summary

- **Feature Detection**: The most reliable method for checking if a browser supports a certain feature. Directly checks for the existence of the feature, and is highly recommended for modern web development.
- **Feature Inference**: Makes assumptions based on the presence of related features. Less reliable and should be used carefully.
- **User Agent (UA) String**: Parses the browser's User Agent string to determine the browser type and version. This method is less reliable due to possible spoofing or changes in UA strings.

For most use cases, **Feature Detection** is the preferred approach, as it provides the most accurate and reliable results for ensuring cross-browser compatibility.

---

---

### **Q63 Discuss the same-origin policy's implications for JavaScript.**

The **Same-Origin Policy (SOP)** is a critical security feature implemented by web browsers to restrict how documents or scripts loaded from one origin can interact with resources from another origin. This policy is essential for protecting user data and maintaining the security and privacy of web applications.

##### Definition of Same-Origin Policy

The Same-Origin Policy dictates that web pages can only make requests to the same origin (protocol, domain, and port) that served the web page. This means that scripts on a web page can only interact with content from the same origin unless explicitly allowed otherwise.

**Origin** is defined by the combination of:

- **Protocol** (e.g., `http` vs. `https`)
- **Domain** (e.g., `example.com` vs. `api.example.com`)
- **Port** (e.g., `80`, `443`, `3000`)

##### Implications for JavaScript

1. **Cross-Origin Requests**:

   - **Restrictions**: JavaScript running on a web page is restricted from making requests to a different origin. This prevents a script from making an HTTP request to a domain other than the one that served the web page.
   - **Example**: A script from `https://example.com` cannot make an XMLHttpRequest to `https://api.otherdomain.com` without proper authorization.

   ```javascript
   // This will fail if 'api.otherdomain.com' is a different origin
   fetch("https://api.otherdomain.com/data")
     .then((response) => response.json())
     .then((data) => console.log(data))
     .catch((error) => console.error("Error:", error));
   ```

2. **Cross-Origin Resource Sharing (CORS)**:
   - **Solution**: To enable cross-origin requests, servers must implement CORS. CORS is a mechanism that allows servers to specify who can access their resources using specific HTTP headers.
   - **Configuration**: Server responses include headers like `Access-Control-Allow-Origin`, which indicate which origins are permitted to access the resources.

Code sharing between files is a fundamental aspect of modular programming that helps maintain a clean, organized, and reusable codebase. Here’s how you can accomplish code sharing between files in JavaScript, depending on the environment and tools you're using:

### 1. **Using ES6 Modules**

**ES6 (ECMAScript 2015) Modules** provide a standardized way to share code between files using `import` and `export` statements.

- **Exporting Code**: In the module file, you can export functions, objects, or variables that you want to share.

  ```javascript
  // math.js
  export function add(a, b) {
    return a + b;
  }

  export const PI = 3.14;
  ```

- **Importing Code**: In another file, you can import the exported code using the `import` statement.

  ```javascript
  // app.js
  import { add, PI } from "./math.js";

  console.log(add(2, 3)); // Output: 5
  console.log(PI); // Output: 3.14
  ```

**Advantages**:

- Clear and standard syntax for importing and exporting.
- Supports both named and default exports.
- Encourages modular and maintainable code.

**Disadvantages**:

- Requires a build tool or a browser that supports ES6 modules for full compatibility.
- Can be less flexible compared to other module systems in older environments.

### 2. **Using CommonJS Modules**

**CommonJS** is a module system primarily used in Node.js. It uses `require()` and `module.exports` to share code.

- **Exporting Code**: Use `module.exports` to export functions, objects, or variables.

  ```javascript
  // math.js
  function add(a, b) {
    return a + b;
  }

  const PI = 3.14;

  module.exports = { add, PI };
  ```

- **Importing Code**: Use `require()` to import the exported code.

  ```javascript
  // app.js
  const { add, PI } = require("./math.js");

  console.log(add(2, 3)); // Output: 5
  console.log(PI); // Output: 3.14
  ```

**Advantages**:

- Well-supported in Node.js and many JavaScript environments.
- Allows for dynamic `require()` calls.

**Disadvantages**:

- Not natively supported in browsers (though bundlers like Webpack can handle it).
- Lacks the static analysis benefits of ES6 modules.

### 3. **Using AMD (Asynchronous Module Definition)**

**AMD** is a module format designed for asynchronous loading, often used in older JavaScript environments and with libraries like RequireJS.

- **Define Modules**: Use `define()` to declare modules and their dependencies.

  ```javascript
  // math.js
  define(function () {
    return {
      add: function (a, b) {
        return a + b;
      },
      PI: 3.14,
    };
  });
  ```

- **Require Modules**: Use `require()` to load and use modules.

  ```javascript
  // app.js
  require(["math"], function (math) {
    console.log(math.add(2, 3)); // Output: 5
    console.log(math.PI); // Output: 3.14
  });
  ```

**Advantages**:

- Supports asynchronous loading of modules.
- Allows for dependency management and modular code.

**Disadvantages**:

- Less commonly used today compared to ES6 and CommonJS.
- Can be more complex to configure and use.

### 4. **Using UMD (Universal Module Definition)**

**UMD** is a module definition pattern that works across various environments, including AMD, CommonJS, and global scope.

- **Define Module**: UMD wraps your module to support different module systems.

  ```javascript
  (function (root, factory) {
    if (typeof define === "function" && define.amd) {
      define(["exports"], factory);
    } else if (typeof exports === "object") {
      factory(exports);
    } else {
      root.myModule = factory({});
    }
  })(this, function (exports) {
    function add(a, b) {
      return a + b;
    }

    const PI = 3.14;

    exports.add = add;
    exports.PI = PI;
  });
  ```

**Advantages**:

- Provides compatibility across multiple module systems.
- Useful for libraries that need to work in different environments.

**Disadvantages**:

- More complex than simpler module formats.
- Less commonly used with modern tooling and ES6 module support.

### 5. **Using Script Tags (For Browsers)**

In environments where modules are not supported, code can be shared using `<script>` tags and global variables.

- **Define Global Variables**: Include scripts in HTML to define global variables or functions.

  ```html
  <!-- index.html -->
  <script src="math.js"></script>
  <script src="app.js"></script>
  ```

  ```javascript
  // math.js
  var MathLib = {
    add: function (a, b) {
      return a + b;
    },
    PI: 3.14,
  };
  ```

  ```javascript
  // app.js
  console.log(MathLib.add(2, 3)); // Output: 5
  console.log(MathLib.PI); // Output: 3.14
  ```

**Advantages**:

- Simple and straightforward for quick prototypes and small projects.

**Disadvantages**:

- Global namespace pollution.
- No module encapsulation or dependency management.
- Harder to manage and scale for larger applications.

### Summary

- **ES6 Modules**: Standardized, well-supported in modern environments, encourages modularity and maintainability.
- **CommonJS**: Widely used in Node.js, allows dynamic module loading but not natively supported in browsers.
- **AMD**: Supports asynchronous loading and dependency management, but less common today.
- **UMD**: Provides compatibility across various module systems, but can be complex.
- **Script Tags**: Simple but lacks modularity and can lead to global namespace issues.

Choosing the right method depends on the project’s environment, requirements, and tooling. Modern projects typically use ES6 modules due to their standardized syntax and support in current browsers and build tools.

---

---

### **Q64 Events: DOMContentLoaded, load, beforeunload, unload**

Sure! In JavaScript, events related to the lifecycle of a webpage can help you manage actions when a page is loaded, unloaded, or before it's unloaded. Here’s a simple explanation of four key events: `DOMContentLoaded`, `load`, `beforeunload`, and `unload`.

#### 1. **DOMContentLoaded**

**When It Fires:**

- This event fires when the HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.

**Use Case:**

- It's useful when you want to run JavaScript code as soon as the document structure is ready but before other resources like images have finished loading.

**Example:**

```javascript
document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM fully loaded and parsed");
});
```

**What Happens:**

- The script runs as soon as the HTML is fully loaded and parsed, but before external resources like images are fully loaded.

#### 2. **load**

**When It Fires:**

- This event fires when the entire page (including all dependent resources like stylesheets, images, and iframes) has finished loading.

**Use Case:**

- Use this event if you need to execute code after everything on the page is fully loaded.

**Example:**

```javascript
window.addEventListener("load", function () {
  console.log("All resources finished loading!");
});
```

**What Happens:**

- The script runs only after the whole page, including all dependent resources, is fully loaded.

#### 3. **beforeunload**

**When It Fires:**

- This event fires when the user is about to leave the page, either by navigating to a different page, closing the tab, or refreshing the page.

**Use Case:**

- Useful for showing a confirmation dialog to warn users about unsaved changes or to confirm they really want to leave.

**Example:**

```javascript
window.addEventListener("beforeunload", function (event) {
  event.preventDefault(); // Standard for modern browsers
  event.returnValue = ""; // Required for some browsers to show a confirmation dialog
});
```

**What Happens:**

- Displays a confirmation dialog asking users if they are sure they want to leave the page. Note that modern browsers have limited customization for this dialog.

#### 4. **unload**

**When It Fires:**

- This event fires when the document or a window is being unloaded. This occurs after the `beforeunload` event.

**Use Case:**

- Typically used to perform cleanup tasks or save data before the user leaves the page. However, it's less commonly used today due to its limited capabilities and support.

**Example:**

```javascript
window.addEventListener("unload", function () {
  console.log("Page is being unloaded");
});
```

**What Happens:**

- The script runs when the page is being unloaded. Note that modern browsers may not always execute this event reliably.

#### **Summary**

- **DOMContentLoaded**: Fires when the HTML document is fully loaded and parsed. Use for early script execution before images or other resources are fully loaded.
- **load**: Fires when the entire page, including all resources, is fully loaded. Use for scripts that depend on images or other external resources.
- **beforeunload**: Fires when the user is about to leave the page. Use for showing a confirmation dialog to prevent accidental navigation.
- **unload**: Fires when the page is being unloaded. Use for cleanup tasks, but it's less reliable in modern browsers.

Understanding these events helps you manage when and how your JavaScript code interacts with the loading and unloading of web pages.

In JavaScript, the `EventTarget` interface is used to handle events in web applications. It provides methods for managing events, including adding, removing, and dispatching them. The three primary methods associated with `EventTarget` are `addEventListener`, `removeEventListener`, and `dispatchEvent`.

#### **1. `addEventListener`**

**Purpose:**

- Registers an event listener on an event target. The listener function will be called when the specified event occurs.

**Syntax:**

```javascript
element.addEventListener(eventType, callback, [options]);
```

**Parameters:**

- `eventType`: A string representing the type of event (e.g., `'click'`, `'keydown'`).
- `callback`: The function to be called when the event is triggered.
- `options` (optional): An object or boolean that specifies options for the event listener, such as `{ once: true }` to remove the listener after it is invoked.

**Example:**

```javascript
// HTML: <button id="myButton">Click Me</button>

const button = document.getElementById("myButton");

function handleClick(event) {
  console.log("Button clicked!");
}

button.addEventListener("click", handleClick);
```

In this example, the `handleClick` function will be called every time the button is clicked.

#### **2. `removeEventListener`**

**Purpose:**

- Removes an event listener that was previously added with `addEventListener`.

**Syntax:**

```javascript
element.removeEventListener(eventType, callback, [options]);
```

**Parameters:**

- `eventType`: The type of event to stop listening for.
- `callback`: The function that was previously used as the event listener.
- `options` (optional): Must be the same as the one used in `addEventListener`.

**Example:**

```javascript
// HTML: <button id="myButton">Click Me</button>

const button = document.getElementById("myButton");

function handleClick(event) {
  console.log("Button clicked!");
}

// Add event listener
button.addEventListener("click", handleClick);

// Remove event listener
button.removeEventListener("click", handleClick);
```

In this example, the `handleClick` function will not be called when the button is clicked, as the event listener is removed.

#### **3. `dispatchEvent`**

**Purpose:**

- Dispatches an event to the event target. This can be used to programmatically trigger an event.

**Syntax:**

```javascript
element.dispatchEvent(event);
```

**Parameters:**

- `event`: The event object to be dispatched, which can be created using the `Event` constructor or other event constructors like `CustomEvent`.

**Example:**

```javascript
// HTML: <button id="myButton">Click Me</button>

const button = document.getElementById("myButton");

function handleClick(event) {
  console.log("Button clicked!");
}

// Add event listener
button.addEventListener("click", handleClick);

// Create and dispatch a click event
const clickEvent = new Event("click");
button.dispatchEvent(clickEvent);
```

In this example, the `dispatchEvent` method manually triggers a click event on the button, which causes the `handleClick` function to run.

#### **Summary**

- **`addEventListener`**: Used to register a callback function to be executed when a specific event occurs on an element.
- **`removeEventListener`**: Used to remove a previously registered event listener from an element.
- **`dispatchEvent`**: Used to manually trigger an event on an element, which can be useful for testing or custom event handling.

These methods are fundamental for handling events in web development, allowing you to respond to user interactions and other events in a flexible and modular way.

---

---

### Q65. **What is Rxjs, Subscriber, Observable, folkJoins?**

#### 1. **RxJS (Reactive Extensions for JavaScript)**:

RxJS is a library for composing asynchronous and event-based programs using **observables**. It provides powerful operators to handle data streams, making it easy to work with events, async requests, and more complex operations. It is widely used with frameworks like Angular.

- **Core Idea**: RxJS is all about dealing with streams of data (such as clicks, input events, or HTTP responses) over time and reacting to them.

#### 2. **Observable**:

An **Observable** is a core concept in RxJS. It represents a stream of values (data, events, etc.) over time. Observables can emit multiple values, either synchronously or asynchronously.

- You can think of an Observable as a function that can **emit** (or push) values over time to its subscribers.
- Observables can emit:
  - **Next**: A value (e.g., a click event or data from an API).
  - **Error**: An error, stopping the observable.
  - **Complete**: Indicating that the observable has finished emitting values.

```javascript
import { Observable } from "rxjs";

const observable = new Observable((subscriber) => {
  subscriber.next("First value");
  subscriber.next("Second value");
  subscriber.complete();
});
```

#### 3. **Subscriber**:

A **Subscriber** is the object that listens to the values emitted by an observable. When you subscribe to an observable, you define what should happen when the observable emits a value (or when an error occurs or it completes).

- You can handle three types of events in a subscriber: **next**, **error**, and **complete**.

```javascript
observable.subscribe({
  next(value) {
    console.log(value);
  },
  error(err) {
    console.error("Error: " + err);
  },
  complete() {
    console.log("Completed!");
  },
});
```

#### 4. **forkJoin**:

`forkJoin` is a static RxJS operator used when you need to wait for several observables to complete and then combine their last emitted values. It is helpful for handling multiple requests or operations in parallel.

- **forkJoin** will only emit when all the provided observables have completed.
- It will give you an array of the last values emitted by each observable.

```javascript
import { forkJoin, of } from "rxjs";
import { delay } from "rxjs/operators";

forkJoin({
  first: of("First").pipe(delay(1000)),
  second: of("Second").pipe(delay(2000)),
}).subscribe((results) => {
  console.log(results); // { first: 'First', second: 'Second' }
});
```

- **RxJS** is a library for reactive programming.
- **Observable** is the core entity in RxJS representing data streams.
- **Subscriber** is what listens to the data from an Observable.
- **forkJoin** is an operator that waits for multiple observables to complete and then emits their results.

---

---

### **Q66 Explain me ecommerse flow end to end**

1. **Product Discovery**: User browses products via search, filters, or categories.
2. **Add to Cart**: Selected products are added to the cart for purchase.
3. **Checkout**: User provides shipping info, selects payment method, and confirms the order.
4. **Order Processing**: The backend manages inventory, processes payments, and sends the order to the warehouse.
5. **Fulfillment**: Warehouse picks, packs, and ships the product. A tracking number is generated.
6. **Delivery**: Product is delivered, and the user is notified.
7. **Post-Purchase**: User can review the product, request returns, or seek support.

---

---

### **Q67 What is the difference between 'Pass by Value' and 'Pass by Reference'?**

In JavaScript, the concepts of **"Pass by Value"** and **"Pass by Reference"** describe how function arguments are passed when invoking functions. Here's a breakdown of each:

#### 1. **Pass by Value**

- **Definition**: When a variable is passed to a function, its value is copied, meaning that changes made to the variable inside the function do not affect the original variable outside the function.
- **Applies to**: **Primitive types** (e.g., numbers, strings, booleans, `null`, `undefined`, `symbol`, and `bigint`).

  #### Example:

  ```javascript
  function modifyValue(x) {
    x = x + 1;
    console.log("Inside function:", x); // Inside function: 6
  }

  let num = 5;
  modifyValue(num);
  console.log("Outside function:", num); // Outside function: 5
  ```

  **Explanation**: The value of `num` is passed to `modifyValue`, but only a copy is modified inside the function. The original `num` remains unchanged outside.

#### 2. **Pass by Reference**

- **Definition**: When a variable is passed to a function, the function operates on the reference (or memory location) of the variable. Changes made to the variable inside the function **do** affect the original variable.
- **Applies to**: **Non-primitive types** (i.e., objects, arrays, functions).

  #### Example:

  ```javascript
  function modifyObject(obj) {
    obj.name = "Changed Name";
    console.log("Inside function:", obj); // Inside function: { name: "Changed Name" }
  }

  let person = { name: "Original Name" };
  modifyObject(person);
  console.log("Outside function:", person); // Outside function: { name: "Changed Name" }
  ```

  **Explanation**: The object `person` is passed by reference, so changes inside the function affect the original object.

#### Key Differences:

| **Pass by Value**                                                   | **Pass by Reference**                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------- |
| Operates on a **copy** of the value.                                | Operates on the **original** reference.                       |
| Only applies to **primitive** types.                                | Applies to **non-primitive** types (objects, arrays).         |
| Changes inside the function **don't affect** the original variable. | Changes inside the function **affect** the original variable. |

In summary, **primitive types** are passed by value, while **objects and arrays** (non-primitive types) are passed by reference in JavaScript.

---

---

### **Q68 Understanding the Impact of Pass by Value and Pass by Reference on Function Behavior?**

Understanding the impact of **Pass by Value** and **Pass by Reference** on function behavior in JavaScript is crucial for writing effective and predictable code. Let's break it down into two sections:

#### **1. Impact of Pass by Value on Function Behavior**

When a primitive value is passed to a function (i.e., when the argument is passed by value), the function gets its own copy of the value. This means any changes made to the parameter inside the function do not affect the original variable outside the function.

#### Key Impacts:

- **Immutability**: The original value outside the function remains unchanged regardless of any modifications inside the function.
- **No Side Effects**: Since changes are made to the copy, no unintended side effects occur to the original value.

#### Example:

```javascript
function changeValue(x) {
  x = 10;
  console.log("Inside function:", x); // Inside function: 10
}

let original = 5;
changeValue(original);
console.log("Outside function:", original); // Outside function: 5
```

**Impact**: In this example, the change to `x` inside the function doesn’t affect the original variable `original`, which stays `5` after the function is executed.

#### **2. Impact of Pass by Reference on Function Behavior**

When a non-primitive value like an object or array is passed to a function (i.e., passed by reference), the function gets a reference (or pointer) to the actual memory location of the original object. This means any changes made to the object or array within the function will affect the original object or array outside the function.

#### Key Impacts:

- **Mutability**: The original object or array can be modified inside the function, as both the parameter and the argument refer to the same memory location.
- **Potential Side Effects**: Since the original data is being modified, unexpected or unwanted changes can propagate to the rest of the code.

#### Example:

```javascript
function modifyArray(arr) {
  arr.push(4);
  console.log("Inside function:", arr); // Inside function: [1, 2, 3, 4]
}

let originalArray = [1, 2, 3];
modifyArray(originalArray);
console.log("Outside function:", originalArray); // Outside function: [1, 2, 3, 4]
```

**Impact**: Here, the `originalArray` is modified by adding `4` inside the function, which affects the original array outside the function as well. This shows how passing by reference can cause changes to the original data.

#### **Key Considerations**:

- **Mutating Objects vs. Reassigning References**:
  When dealing with objects or arrays, it’s important to understand that while you can mutate their properties or contents, reassigning the parameter inside a function doesn’t affect the original reference. For example:

  ```javascript
  function reassignObject(obj) {
    obj = { name: "New Object" }; // Reassignment doesn't change the original object
    console.log("Inside function:", obj); // Inside function: { name: "New Object" }
  }

  let person = { name: "Original" };
  reassignObject(person);
  console.log("Outside function:", person); // Outside function: { name: "Original" }
  ```

  **Impact**: Even though you reassign `obj` inside the function, it doesn’t change the original `person` object outside. The reference to the object is passed, but the reassignment doesn’t propagate back outside the function. However, if you were to mutate `obj` (e.g., `obj.name = "Changed"`), the original object would be affected.

#### **Best Practices**:

- **Avoid Mutating Data**: When working with objects and arrays in functions, avoid mutating them unless absolutely necessary. Instead, consider returning a new object or array from the function to maintain immutability and avoid unintended side effects.

  #### Example of Non-Mutating Function:

  ```javascript
  function addElement(arr) {
    return [...arr, 4]; // Returning a new array with 4 added
  }

  let originalArray = [1, 2, 3];
  let newArray = addElement(originalArray);
  console.log("Outside function - Original:", originalArray); // [1, 2, 3]
  console.log("Outside function - New:", newArray); // [1, 2, 3, 4]
  ```

  **Impact**: By returning a new array, we ensure that the original array remains unchanged, avoiding side effects and making the function behavior more predictable.

#### **Summary of Impact**:

- **Pass by Value**: Changes to the function parameter don’t affect the original variable, ensuring that the original data remains intact.
- **Pass by Reference**: Modifications inside the function affect the original object or array, which can lead to side effects if not handled carefully.

Understanding the difference and the potential impact allows developers to write more predictable, bug-free code and helps in managing side effects effectively.

---

---

### **Q69 What is a Observable?**

In JavaScript, an **Observable** is a core concept in **Reactive Programming**, used to handle asynchronous events or data streams. It is a blueprint that allows a function to "observe" or "watch" for data over time. Observables are primarily used to represent and manage asynchronous operations such as events, timers, or HTTP requests.

The idea behind an Observable is similar to a promise but more powerful, as it can handle multiple values over time, instead of just a single value like a promise.

#### Key Features of an Observable:

1. **Streams of Data Over Time**: Observables allow you to model streams of data that can emit multiple values over a period of time (e.g., user interactions, server responses).
2. **Push-based Model**: Observables use a **push** model, meaning the producer (observable) pushes data to the consumer (observer) whenever the data is ready.
3. **Lazy Execution**: Observables are lazy, meaning they don't do anything until someone subscribes to them. Once subscribed, they start producing data.
4. **Cancelable**: Observables allow you to cancel or unsubscribe from the stream, which is useful for avoiding memory leaks or performance issues in long-running applications.

#### Components of an Observable:

1. **Observable**: The source of data or events. It emits a stream of values (data, events, errors) over time.
2. **Observer**: The consumer that subscribes to the observable and reacts to the emitted values.
3. **Subscription**: When an observer subscribes to an observable, a subscription object is created. This can be used to unsubscribe or stop receiving values.
4. **Operators**: Functions that allow you to manipulate or transform the data stream (e.g., `map`, `filter`, `merge`).
5. **Subject**: An observable that can multicast data to multiple observers.

#### Example of an Observable:

Here's an example using the `rxjs` library, which is commonly used for working with Observables:

#### 1. Creating an Observable:

```javascript
import { Observable } from "rxjs";

// Create an Observable that emits a stream of numbers
const observable = new Observable((subscriber) => {
  subscriber.next(1);
  subscriber.next(2);
  subscriber.next(3);
  subscriber.complete(); // Signals that the observable is complete
});

// Subscribe to the observable to consume its values
observable.subscribe({
  next(x) {
    console.log("Got value: " + x);
  },
  error(err) {
    console.error("Error: " + err);
  },
  complete() {
    console.log("Completed!");
  },
});
```

**Output**:

```
Got value: 1
Got value: 2
Got value: 3
Completed!
```

In this example:

- The `observable` emits a sequence of numbers (`1`, `2`, `3`).
- When the `subscriber.next()` method is called, it sends data to the observer.
- The `complete()` method signals the end of the observable stream.
- The `observer` listens for values (`next`), handles errors (`error`), and reacts when the stream is complete (`complete`).

#### 2. Using Operators with an Observable:

You can use operators like `map`, `filter`, and `reduce` to manipulate data streams.

```javascript
import { from } from "rxjs";
import { map } from "rxjs/operators";

// Create an observable from an array and apply a map operator
const numbers = from([1, 2, 3, 4, 5]);

const squaredNumbers = numbers.pipe(map((x) => x * x));

squaredNumbers.subscribe((value) => console.log(value));
```

**Output**:

```
1
4
9
16
25
```

Here, the `map` operator transforms each number by squaring it before passing it to the observer.

#### Observables vs Promises:

| **Feature**         | **Observable**                                     | **Promise**                           |
| ------------------- | -------------------------------------------------- | ------------------------------------- |
| **Multiple values** | Can emit multiple values over time                 | Resolves to a single value (or error) |
| **Lazy**            | Doesn't start until subscribed                     | Starts immediately                    |
| **Cancelable**      | Can be unsubscribed from (canceled)                | Not cancelable                        |
| **Operators**       | Supports chaining and transforming using operators | No built-in operators                 |
| **Push-based**      | Data is pushed to the consumer                     | Consumer pulls the result             |

### Real-World Use Cases of Observables:

- **Handling Events**: You can use observables to handle UI events like clicks, mouse movements, key presses, etc.
- **HTTP Requests**: Observables are often used in frameworks like Angular for handling HTTP requests, since they can easily manage multiple ongoing requests and responses.
- **WebSockets**: Observables are well-suited for working with WebSockets, where data flows continuously between the client and server.
- **Streaming Data**: Useful for scenarios where data comes in chunks, like reading files or streams from APIs (e.g., Twitter API).

#### Summary:

An **Observable** in JavaScript is a powerful tool for handling asynchronous data streams. It allows developers to create flexible and responsive applications by working with multiple asynchronous values over time, making it ideal for tasks such as event handling, HTTP requests, and streaming data.

---

---

### **Q70 Explain the concept of "this" in JavaScript.**

The concept of **`this`** in JavaScript can be quite nuanced, as its value is determined by the context in which a function is called. It does not have a fixed value but instead depends on how a function is invoked. Here’s a breakdown of how `this` works in different contexts:

#### 1. **Global Context**

In the global scope (outside of any function), `this` refers to the global object. In browsers, this is the `window` object.

```javascript
console.log(this); // In browsers, it logs the Window object
```

#### 2. **Function Context**

When a function is called, `this` refers to the object that calls the function. However, in non-strict mode, if a function is called without an object (e.g., as a standalone function), `this` defaults to the global object.

#### Example:

```javascript
function showThis() {
  console.log(this);
}

showThis(); // Logs the global object (Window in browsers)

const obj = {
  method: showThis,
};

obj.method(); // Logs the obj object
```

#### 3. **Method Context**

When a function is called as a method of an object, `this` refers to that object.

#### Example:

```javascript
const person = {
  name: "Alice",
  greet: function () {
    console.log("Hello, " + this.name);
  },
};

person.greet(); // Logs: Hello, Alice
```

#### 4. **Constructor Function**

When a function is called with the `new` keyword, `this` refers to the new object being created.

#### Example:

```javascript
function Person(name) {
  this.name = name;
}

const alice = new Person("Alice");
console.log(alice.name); // Logs: Alice
```

#### 5. **Arrow Functions**

Arrow functions do not have their own `this`. Instead, they lexically bind `this` from the enclosing scope. This means that inside an arrow function, `this` refers to the value of `this` in the context where the arrow function was defined.

#### Example:

```javascript
const obj = {
  name: "Alice",
  greet: function () {
    const inner = () => {
      console.log("Hello, " + this.name); // `this` refers to `obj`
    };
    inner();
  },
};

obj.greet(); // Logs: Hello, Alice
```

#### 6. **Event Handlers**

In event handlers, `this` refers to the element that triggered the event.

#### Example:

```html
<button id="myButton">Click me</button>

<script>
  const button = document.getElementById("myButton");
  button.addEventListener("click", function () {
    console.log(this); // Logs the button element
  });
</script>
```

#### 7. **Explicit Binding**

You can explicitly set the value of `this` using `call`, `apply`, or `bind`.

- **`call`**: Calls a function with a specified `this` value and arguments.

  ```javascript
  function greet() {
    console.log("Hello, " + this.name);
  }

  const user = { name: "Alice" };
  greet.call(user); // Logs: Hello, Alice
  ```

- **`apply`**: Similar to `call`, but takes an array of arguments.

  ```javascript
  function greet(greeting) {
    console.log(greeting + ", " + this.name);
  }

  greet.apply(user, ["Hi"]); // Logs: Hi, Alice
  ```

- **`bind`**: Creates a new function that, when called, has its `this` set to the provided value.

  ```javascript
  const boundGreet = greet.bind(user);
  boundGreet(); // Logs: Hello, Alice
  ```

#### 8. **Strict Mode**

In strict mode (`'use strict';`), if a function is called without an object, `this` will be `undefined` instead of defaulting to the global object.

#### Example:

```javascript
"use strict";

function showThis() {
  console.log(this);
}

showThis(); // Logs: undefined
```

#### Summary

- **`this`** in JavaScript is a context-dependent keyword that refers to different objects based on how a function is called.
- It can refer to the global object, an object method, a newly created object in a constructor, or even `undefined` in strict mode.
- Arrow functions do not have their own `this` and instead inherit it from the surrounding scope.
- You can control the value of `this` explicitly with `call`, `apply`, and `bind`.

Understanding `this` is essential for mastering JavaScript, as it influences how functions behave in different contexts and can significantly affect the flow of your program.

---

---

### Q71 What is the difference between Pure and Impure functions?

In programming, especially in the context of functional programming, the distinction between **pure** and **impure functions** is important for understanding code behavior, predictability, and side effects. Here’s a breakdown of the differences between the two:

#### **Pure Functions**

**Definition**: A pure function is a function that satisfies two main properties:

1. **Deterministic**: Given the same inputs, it always produces the same output. The output depends only on the input values passed to the function, and not on any external state.

2. **No Side Effects**: A pure function does not cause any observable side effects. This means it does not modify any external state, such as global variables, input/output operations, or the values of passed arguments.

#### **Characteristics of Pure Functions**:

- Predictable and easier to test.
- Can be memoized or cached for performance optimizations since their output is always the same for the same inputs.
- Generally easier to reason about, leading to better maintainability.

#### **Example of a Pure Function**:

```javascript
function add(a, b) {
  return a + b; // Always returns the same output for the same inputs
}

console.log(add(2, 3)); // Outputs: 5
console.log(add(2, 3)); // Outputs: 5 (same inputs give same outputs)
```

#### **Impure Functions**

**Definition**: An impure function is a function that does not meet the criteria of pure functions. It may exhibit one or both of the following characteristics:

1. **Non-Deterministic**: It may produce different outputs given the same inputs. This can happen due to dependence on external state, such as global variables or data from APIs.

2. **Side Effects**: It may modify some external state or have observable effects outside the function's scope, such as changing a global variable, logging to the console, or modifying an object passed as an argument.

#### **Characteristics of Impure Functions**:

- Less predictable and can lead to bugs due to changes in external state.
- More difficult to test since the output can vary based on external factors.
- Can complicate reasoning about the code's behavior.

#### **Example of an Impure Function**:

```javascript
let count = 0; // Global variable

function increment() {
  count += 1; // Modifies external state
  return count; // The output depends on external state
}

console.log(increment()); // Outputs: 1
console.log(increment()); // Outputs: 2 (different outputs for the same function call)
```

#### **Key Differences**

| **Aspect**       | **Pure Functions**                                   | **Impure Functions**                                                  |
| ---------------- | ---------------------------------------------------- | --------------------------------------------------------------------- |
| **Determinism**  | Always produce the same output for the same inputs   | Can produce different outputs for the same inputs                     |
| **Side Effects** | No side effects (do not modify external state)       | May cause side effects (modify external state, etc.)                  |
| **Testing**      | Easier to test and reason about                      | Harder to test due to dependency on external state                    |
| **Memoization**  | Can be memoized for performance gains                | Cannot be effectively memoized due to varying output                  |
| **Use Cases**    | Ideal for mathematical calculations, transformations | Suitable for operations that require external interaction (e.g., I/O) |

#### **When to Use Each**

- **Pure Functions**: Prefer pure functions for operations where predictability, testability, and maintainability are crucial. They are commonly used in functional programming paradigms.
- **Impure Functions**: Use impure functions when dealing with external systems (e.g., interacting with databases, performing I/O operations) where side effects are necessary.

#### **Summary**

- **Pure functions** are deterministic and have no side effects, making them predictable and easy to test.
- **Impure functions** may have side effects and produce varying outputs, leading to potential unpredictability and difficulty in testing.

Understanding the difference between pure and impure functions helps developers write cleaner, more maintainable, and more predictable code, especially in large codebases or functional programming contexts.

---

---

### Q72 What are the limitations of arrow functions?

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

### Q73 What is the `new` keyword used for?

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

---

---

### Q74 What is the difference between `prototype` and `__proto__`?

In JavaScript, both `prototype` and `__proto__` are related to the concept of prototypal inheritance, but they serve different purposes and have different usages. Here's a breakdown of the differences between the two:

#### 1. **`prototype`**

- **Definition**: `prototype` is a property of constructor functions. It defines properties and methods that should be available to all instances created by that constructor.
- **Usage**: You typically use `prototype` when you want to add methods or properties that can be shared across all instances of a particular constructor function.
- **Context**: It exists only in the context of functions. If you define a method on a function's `prototype`, it will be accessible to all objects created with that function using the `new` keyword.

#### Example:

```javascript
function Person(name) {
  this.name = name;
}

// Adding a method to the Person prototype
Person.prototype.greet = function () {
  console.log(`Hello, my name is ${this.name}.`);
};

const alice = new Person("Alice");
alice.greet(); // Outputs: Hello, my name is Alice.
```

#### 2. **`__proto__`**

- **Definition**: `__proto__` is an internal property of all objects that points to the prototype of the object's constructor. It is used to access the prototype chain of an object.
- **Usage**: You typically use `__proto__` to access or modify the prototype of an object directly, though it's not recommended for regular usage due to potential performance issues and readability concerns.
- **Context**: `__proto__` is a property of all objects and can be used to inspect the prototype chain of an object.

#### Example:

```javascript
const animal = {
  speak: function () {
    console.log("Animal speaks");
  },
};

// Creating a new object that inherits from animal
const dog = Object.create(animal);

dog.speak(); // Outputs: Animal speaks
console.log(dog.__proto__ === animal); // Outputs: true
```

#### Key Differences

| **Aspect**          | **`prototype`**                                                           | **`__proto__`**                                                 |
| ------------------- | ------------------------------------------------------------------------- | --------------------------------------------------------------- |
| **Purpose**         | Used to define properties/methods for all instances of a constructor      | Used to access the prototype of an object                       |
| **Context**         | Exists on constructor functions                                           | Exists on all objects                                           |
| **Modification**    | Modifying `prototype` affects all instances created with that constructor | Modifying `__proto__` affects the prototype chain of the object |
| **Use Cases**       | To define shared methods/properties                                       | To inspect or manipulate the prototype chain                    |
| **Recommended Use** | Recommended for defining methods/properties                               | Generally discouraged for direct manipulation                   |

#### Summary

- **`prototype`** is a property of constructor functions that allows you to define shared methods and properties for instances.
- **`__proto__`** is a property of all objects that points to the prototype of its constructor, allowing you to access the prototype chain.

Understanding the distinction between `prototype` and `__proto__` is crucial for effectively leveraging JavaScript’s prototypal inheritance and object-oriented features.

---

---

### Q74 How do you create a class in JavaScript?

In JavaScript, you can create a class using the `class` syntax introduced in ECMAScript 2015 (ES6). This syntax provides a clearer and more concise way to create constructor functions and manage inheritance. Here’s how to create a class and use it effectively.

#### Basic Structure of a Class

1. **Class Declaration**: You can define a class using the `class` keyword followed by the class name.
2. **Constructor Method**: The `constructor()` method is a special method for creating and initializing an object created with the class.
3. **Methods**: You can define methods directly in the class body, which will be available on all instances of the class.

#### Example of Creating a Class

Here’s a step-by-step example of how to create a class in JavaScript:

#### 1. Basic Class Declaration

```javascript
class Person {
  // Constructor method
  constructor(name, age) {
    this.name = name; // Instance property
    this.age = age; // Instance property
  }

  // Method
  greet() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  }
}

// Creating an instance of the Person class
const alice = new Person("Alice", 30);

// Calling the greet method
alice.greet(); // Outputs: Hello, my name is Alice and I am 30 years old.
```

#### 2. Class Inheritance

You can create a class that extends another class using the `extends` keyword. This allows the subclass to inherit properties and methods from the superclass.

#### Example of Class Inheritance

```javascript
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

// Subclass
class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks.`);
  }
}

// Creating an instance of Dog
const dog = new Dog("Buddy");
dog.speak(); // Outputs: Buddy barks.
```

#### 3. Static Methods

Static methods are defined on the class itself, not on instances of the class. They are called on the class rather than on instances.

#### Example of Static Method

```javascript
class MathUtility {
  // Static method
  static add(a, b) {
    return a + b;
  }
}

// Calling the static method
console.log(MathUtility.add(5, 3)); // Outputs: 8
```

#### 4. Getters and Setters

You can define getters and setters in a class to create properties that can be read and written like normal properties but are actually methods.

#### Example of Getters and Setters

```javascript
class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  // Getter
  get area() {
    return Math.PI * this.radius * this.radius;
  }

  // Setter
  set radius(value) {
    this._radius = value;
  }

  get radius() {
    return this._radius;
  }
}

const circle = new Circle(5);
console.log(circle.area); // Outputs the area of the circle
circle.radius = 10; // Sets the radius
console.log(circle.area); // Outputs the new area of the circle
```

#### Summary

- **Defining a Class**: Use the `class` keyword followed by the class name.
- **Constructor Method**: The `constructor()` initializes the object.
- **Methods**: Define methods directly in the class for shared functionality.
- **Inheritance**: Use `extends` to create subclasses that inherit from a parent class.
- **Static Methods**: Use static methods for functionality that does not depend on instance properties.
- **Getters and Setters**: Use getters and setters to manage access to properties.

Using classes in JavaScript provides a structured way to create objects and manage inheritance, making it easier to develop complex applications.

---

---

### Q75 What is DOM Traversal?

**DOM Traversal** refers to the process of navigating and manipulating the Document Object Model (DOM) tree structure of an HTML or XML document. The DOM represents the document as a tree of objects, where each node in the tree corresponds to a part of the document (like elements, attributes, text nodes, etc.). Traversing the DOM allows developers to access, modify, and interact with these nodes programmatically.

#### Key Concepts of DOM Traversal

1. **DOM Tree Structure**:

   - The DOM is structured as a tree, with a root node (usually the `<html>` element) and various child nodes (such as `<head>`, `<body>`, and other elements). Each element can have its own child elements, creating a hierarchical structure.

2. **Node Types**:

   - The DOM consists of different types of nodes:
     - **Element Nodes**: Represent HTML elements (e.g., `<div>`, `<p>`, `<a>`).
     - **Text Nodes**: Contain text content within elements.
     - **Attribute Nodes**: Represent attributes of elements (e.g., `class`, `id`).

3. **Traversal Methods**:

   - The DOM provides various properties and methods to traverse and manipulate the tree structure. Common methods include:
     - **Parent Node**:
       - `parentNode`: Accesses the parent node of the current node.
     - **Child Nodes**:
       - `childNodes`: Returns a live NodeList of child nodes of the current node.
       - `firstChild`: Accesses the first child node.
       - `lastChild`: Accesses the last child node.
       - `children`: Returns a live HTMLCollection of child elements (excluding text nodes).
     - **Sibling Nodes**:
       - `nextSibling`: Accesses the next sibling node.
       - `previousSibling`: Accesses the previous sibling node.
       - `nextElementSibling`: Accesses the next sibling element.
       - `previousElementSibling`: Accesses the previous sibling element.

4. **Examples of DOM Traversal**:

#### Accessing Parent, Children, and Siblings

```javascript
// Assume we have the following HTML structure:
// <div id="parent">
//   <p class="child">Child 1</p>
//   <p class="child">Child 2</p>
// </div>

// Select the parent element
const parent = document.getElementById("parent");

// Accessing children
const firstChild = parent.firstChild; // May include text nodes
const firstElementChild = parent.firstElementChild; // Only element nodes

// Accessing parent node
const parentNode = firstElementChild.parentNode; // Returns the <div>

// Accessing sibling nodes
const secondChild = firstElementChild.nextElementSibling; // Returns the second <p>
```

#### Practical Uses of DOM Traversal

- **Dynamic Content Modification**: Modify or update the content and structure of a webpage based on user interaction.
- **Event Handling**: Attach event listeners to specific elements in the DOM.
- **Data Extraction**: Extract data from the DOM for use in scripts or applications.
- **Creating Dynamic Interfaces**: Build interactive user interfaces by manipulating the DOM in response to events.

#### Conclusion

DOM Traversal is a fundamental aspect of web development that enables developers to navigate and manipulate the structure of web pages programmatically. By using various methods and properties provided by the DOM API, developers can access and modify elements, allowing for dynamic and interactive web applications. Understanding how to traverse the DOM is essential for tasks such as form handling, creating dynamic content, and implementing responsive designs.

---

---

### Q76 What is CORS (Cross-Origin Resource Sharing)?

**CORS (Cross-Origin Resource Sharing)** is a security feature implemented by web browsers that allows or restricts web pages from making requests to a different domain (origin) than the one that served the web page. It is a crucial mechanism for preventing potentially malicious behavior while enabling legitimate cross-origin requests.

#### Key Concepts of CORS

1. **Same-Origin Policy**:

   - By default, browsers enforce a security measure called the **Same-Origin Policy**, which restricts web pages from making requests to a different origin (a combination of the protocol, domain, and port). For example, a script loaded from `https://example.com` cannot make requests to `https://another-domain.com` unless the server explicitly allows it through CORS.

2. **Cross-Origin Requests**:

   - Cross-origin requests occur when a web application running at one origin tries to access resources from another origin. These requests can happen in various scenarios, such as:
     - Fetching resources (e.g., images, scripts) from another domain.
     - Making API calls to a server hosted on a different domain.

3. **CORS Mechanism**:

   - When a cross-origin request is made, the browser sends an **HTTP request** to the server with an `Origin` header that indicates the origin of the request.
   - The server can then respond with specific CORS headers to determine whether the request should be allowed. Common CORS headers include:
     - `Access-Control-Allow-Origin`: Specifies which origins are permitted to access the resource. It can be set to a specific origin, a list of origins, or a wildcard (`*`) to allow all origins.
     - `Access-Control-Allow-Methods`: Specifies which HTTP methods (e.g., GET, POST, PUT) are allowed when accessing the resource.
     - `Access-Control-Allow-Headers`: Lists the headers that can be included in the request.

4. **Preflight Requests**:
   - For certain types of requests, especially those that modify data (like PUT or DELETE) or include custom headers, the browser first sends an **OPTIONS** request (called a preflight request) to the server to check if the actual request is safe to send. The server must respond with appropriate CORS headers for the preflight request.

#### Example Scenario

#### Frontend (JavaScript)

```javascript
fetch("https://api.example.com/data", {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
})
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => console.log(data))
  .catch((error) =>
    console.error("There was a problem with the fetch operation:", error)
  );
```

#### Backend (Express.js Example)

In the server-side code, the CORS headers can be set like this:

```javascript
const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors()); // Enable CORS for all routes

app.get("/data", (req, res) => {
  res.json({ message: "Hello, world!" });
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
```

#### Security Implications

While CORS is a powerful mechanism for enabling cross-origin requests, it is essential to configure it properly to prevent unauthorized access. Improper CORS settings can lead to security vulnerabilities, such as exposing sensitive data or allowing unwanted actions from untrusted domains.

#### Summary

- **CORS** is a security feature that allows or restricts web pages from making cross-origin requests.
- It helps to enforce the **Same-Origin Policy** while enabling secure resource sharing.
- CORS headers are used by servers to indicate which origins are allowed to access their resources.
- Understanding and properly configuring CORS is crucial for developing secure web applications that interact with multiple origins.

---

---

### Q77 What are cookies?

**Cookies** are small pieces of data stored by a web browser on a user's device while browsing a website. They serve various purposes, mainly related to maintaining state and personalizing user experiences. Cookies are an essential part of web development and play a critical role in how web applications function.

#### Key Features of Cookies

1. **Data Storage**:

   - Cookies can store small amounts of data (typically up to 4KB) in the form of key-value pairs. This data can include user preferences, login sessions, and tracking information.

2. **Expiration**:

   - Cookies can have an expiration date, which determines how long they remain stored in the user's browser. Cookies can be:
     - **Session Cookies**: These are temporary and expire when the browser is closed.
     - **Persistent Cookies**: These remain on the user's device for a specified period or until they are manually deleted.

3. **Domain and Path**:

   - Cookies are associated with specific domains and paths. This means a cookie set by one domain cannot be accessed by another, providing a level of security and privacy.

4. **HttpOnly and Secure Flags**:
   - Cookies can be marked as **HttpOnly**, making them inaccessible to JavaScript (which helps protect against XSS attacks).
   - The **Secure** flag ensures that the cookie is only sent over HTTPS connections, enhancing security.

#### Common Uses of Cookies

1. **Session Management**:

   - Cookies are commonly used to manage user sessions, allowing websites to remember logged-in users and maintain their sessions across different pages.

2. **Personalization**:

   - Cookies can store user preferences and settings (e.g., language, theme) to provide a personalized experience on subsequent visits.

3. **Tracking and Analytics**:
   - Cookies are often used for tracking user behavior on websites, enabling website owners to gather analytics data and serve targeted advertisements.

#### Example of Setting and Retrieving Cookies

#### Setting a Cookie

In JavaScript, you can set a cookie using the `document.cookie` property:

```javascript
// Setting a cookie
document.cookie =
  "username=JohnDoe; expires=Fri, 31 Dec 2024 23:59:59 GMT; path=/";
```

#### Retrieving a Cookie

To retrieve cookies, you can access the `document.cookie` property, which returns a string of all cookies associated with the current document:

```javascript
// Retrieving cookies
const cookies = document.cookie.split("; ");
const cookieValue = cookies.find((cookie) => cookie.startsWith("username="));

if (cookieValue) {
  const username = cookieValue.split("=")[1];
  console.log(`Username: ${username}`); // Outputs: Username: JohnDoe
}
```

#### Security Considerations

While cookies are a useful mechanism, they can also pose security risks if not managed properly:

- **Cross-Site Scripting (XSS)**: If an attacker can inject JavaScript into a page, they may be able to access cookies unless they are marked as HttpOnly.
- **Cross-Site Request Forgery (CSRF)**: Cookies are automatically sent with requests, making them susceptible to CSRF attacks unless additional protections are in place.

#### Conclusion

Cookies are a fundamental part of web development, enabling session management, personalization, and tracking. Understanding how cookies work and their implications for security and privacy is essential for building robust and secure web applications.

---

---

### Q78 What is tree shaking in JavaScript?

**Tree shaking** is a term used in JavaScript (and other programming languages) to describe a technique for eliminating dead code from the final bundle of an application. It helps reduce the size of JavaScript files by removing unused or unreferenced exports from modules. The term "tree shaking" comes from the idea of "shaking" a tree to remove the dead branches while keeping the live branches intact.

#### Key Concepts of Tree Shaking

1. **ES6 Modules**:

   - Tree shaking relies on the static structure of ES6 (ECMAScript 2015) module syntax, which allows for explicit imports and exports. Because these imports and exports are resolved at build time, bundlers can analyze the code and determine which parts are used and which are not.

2. **Static Analysis**:

   - During the build process, bundlers like Webpack, Rollup, or Parcel perform static analysis of the code. They create a dependency graph to identify which modules are actually used in the application and can safely remove those that are not referenced.

3. **Side Effects**:
   - Tree shaking is most effective when modules are written without side effects. A side effect is any operation that affects the outside world (e.g., modifying a global variable, performing I/O operations) when the module is imported. Modules should ideally export only functions and constants without causing unintended effects when imported.

#### Example of Tree Shaking

#### Without Tree Shaking

Suppose you have the following module (`math.js`):

```javascript
// math.js
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;
export const unusedFunction = () => console.log("This function is not used.");
```

If you only use the `add` function in another module:

```javascript
// app.js
import { add } from "./math";

console.log(add(2, 3)); // Outputs: 5
```

Without tree shaking, the final bundle may still include the `subtract` and `unusedFunction` exports, even if they are not used.

#### With Tree Shaking

When you use a bundler that supports tree shaking, it analyzes the code and determines that `subtract` and `unusedFunction` are not used anywhere in the application. Therefore, it removes them from the final bundle, resulting in a smaller file size.

#### Using Tree Shaking with Bundlers

To take advantage of tree shaking, you typically need to:

1. **Use ES6 Module Syntax**: Ensure you are using `import` and `export` statements instead of CommonJS (`require` and `module.exports`).

2. **Configure the Bundler**: Most modern JavaScript bundlers support tree shaking out of the box, but you may need to enable certain configurations. For example, in Webpack, you would set the `mode` to `'production'`.

3. **Avoid Side Effects**: Write modules that are side-effect-free whenever possible. You can use the `sideEffects` field in `package.json` to inform the bundler about which files may contain side effects.

#### Example Configuration in Webpack

Here’s an example of how you might configure Webpack for tree shaking:

```javascript
// webpack.config.js
module.exports = {
  mode: "production", // Enable optimizations like tree shaking
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: __dirname + "/dist",
  },
  // Other configuration options...
};
```

#### Benefits of Tree Shaking

- **Reduced Bundle Size**: Eliminates unused code, leading to smaller file sizes and faster load times.
- **Improved Performance**: Smaller bundles mean reduced parsing and execution time in the browser, improving the overall performance of the application.
- **Better Maintainability**: Encourages developers to write modular code with clear dependencies.

#### Conclusion

Tree shaking is an essential optimization technique in modern JavaScript development. By removing unused code from your bundles, you can improve application performance, reduce load times, and create a better user experience. Adopting ES6 modules and using a bundler that supports tree shaking are key steps in leveraging this powerful feature.

---

---

### Q79 What is the difference between map and filter?

`map` and `filter` are both array methods in JavaScript that are commonly used for transforming and processing arrays. However, they serve different purposes and operate in distinct ways. Here’s a breakdown of their differences:

#### 1. Purpose

- **`map`**:

  - The `map` method is used to transform each element of an array by applying a provided function to each element. It creates a new array containing the results of applying the function to each element in the original array.

- **`filter`**:
  - The `filter` method is used to create a new array that contains only the elements that pass a test defined by a provided function. It filters out the elements that do not meet the condition, resulting in a new array with only the elements that satisfy the criteria.

#### 2. Return Value

- **`map`**:

  - Returns a new array with the same length as the original array, where each element is the result of the callback function applied to each element of the original array.

- **`filter`**:
  - Returns a new array that may have a different length than the original array, containing only the elements that satisfy the condition specified in the callback function.

#### 3. Example Usage

#### Using `map`

Here’s an example of how `map` is used to transform an array:

```javascript
const numbers = [1, 2, 3, 4, 5];

// Using map to square each number
const squaredNumbers = numbers.map((num) => num * num);

console.log(squaredNumbers); // Outputs: [1, 4, 9, 16, 25]
```

#### Using `filter`

Here’s an example of how `filter` is used to select elements based on a condition:

```javascript
const numbers = [1, 2, 3, 4, 5];

// Using filter to get only even numbers
const evenNumbers = numbers.filter((num) => num % 2 === 0);

console.log(evenNumbers); // Outputs: [2, 4]
```

#### 4. Chaining

Both `map` and `filter` can be chained together for more complex operations:

```javascript
const numbers = [1, 2, 3, 4, 5];

// First filter out the odd numbers, then square the remaining even numbers
const result = numbers
  .filter((num) => num % 2 === 0) // Filter even numbers
  .map((num) => num * num); // Square the even numbers

console.log(result); // Outputs: [4, 16]
```

#### Summary of Differences

| Feature         | `map`                             | `filter`                              |
| --------------- | --------------------------------- | ------------------------------------- |
| Purpose         | Transforms each element           | Selects elements based on a condition |
| Return Value    | New array of transformed elements | New array of filtered elements        |
| Length of Array | Same length as original           | May differ from original              |
| Example         | `arr.map(x => x * 2)`             | `arr.filter(x => x > 10)`             |

#### Conclusion

In summary, use `map` when you want to transform each element of an array into a new array of the same length, and use `filter` when you want to select specific elements from an array based on a condition, resulting in a potentially smaller array. Understanding these differences can help you effectively manipulate arrays in JavaScript.

---

---

### Q80 What is the difference between `Object.keys`, `Object.values`, and `Object.entries`?

`Object.keys`, `Object.values`, and `Object.entries` are methods in JavaScript that allow you to extract information from objects in different ways. Here’s a detailed breakdown of each method and their differences:

#### 1. `Object.keys()`

- **Purpose**: Returns an array of a given object's own property names (keys).
- **Syntax**: `Object.keys(obj)`
- **Returns**: An array of strings representing the keys of the object.

#### Example:

```javascript
const person = {
  name: "Alice",
  age: 30,
  profession: "Engineer",
};

const keys = Object.keys(person);
console.log(keys); // Outputs: ['name', 'age', 'profession']
```

#### 2. `Object.values()`

- **Purpose**: Returns an array of a given object's own property values.
- **Syntax**: `Object.values(obj)`
- **Returns**: An array containing the values of the object's properties.

#### Example:

```javascript
const person = {
  name: "Alice",
  age: 30,
  profession: "Engineer",
};

const values = Object.values(person);
console.log(values); // Outputs: ['Alice', 30, 'Engineer']
```

#### 3. `Object.entries()`

- **Purpose**: Returns an array of a given object's own property `[key, value]` pairs.
- **Syntax**: `Object.entries(obj)`
- **Returns**: An array of arrays, where each inner array contains two elements: the key and the corresponding value.

#### Example:

```javascript
const person = {
  name: "Alice",
  age: 30,
  profession: "Engineer",
};

const entries = Object.entries(person);
console.log(entries);
// Outputs: [['name', 'Alice'], ['age', 30], ['profession', 'Engineer']]
```

#### Summary of Differences

| Feature        | `Object.keys()`                 | `Object.values()`           | `Object.entries()`                                             |
| -------------- | ------------------------------- | --------------------------- | -------------------------------------------------------------- |
| Purpose        | Get keys of an object           | Get values of an object     | Get key-value pairs of an object                               |
| Return Value   | Array of keys                   | Array of values             | Array of `[key, value]` pairs                                  |
| Example Output | `['name', 'age', 'profession']` | `['Alice', 30, 'Engineer']` | `[['name', 'Alice'], ['age', 30], ['profession', 'Engineer']]` |

#### Conclusion

- **Use `Object.keys()`** when you need to work with the keys of an object.
- **Use `Object.values()`** when you need to work with the values of an object.
- **Use `Object.entries()`** when you need both keys and values together for iteration or other operations.

These methods are particularly useful for object manipulation and iteration in JavaScript, making it easier to work with data stored in object literals.

---

---

### Q81 What is the main difference between IndexedDB and Session Storage?

**IndexedDB** and **Session Storage** are both web storage technologies used to store data in the browser, but they serve different purposes and have different capabilities. Here’s a breakdown of their main differences:

#### 1. Purpose

- **IndexedDB**:

  - A low-level API for storing large amounts of structured data, including files and blobs. It is designed for complex applications requiring more storage than what is offered by traditional storage mechanisms. IndexedDB allows for more advanced queries and transactions.

- **Session Storage**:
  - A simpler storage mechanism for storing data in key-value pairs for the duration of the page session. Data in session storage is only accessible during the page session (i.e., as long as the tab or browser window is open) and is cleared when the tab is closed.

#### 2. Data Structure

- **IndexedDB**:

  - Stores data as objects in a database. It supports complex data types, such as arrays and objects, and allows for indexing on object properties for fast retrieval. IndexedDB can handle a significant amount of data, making it suitable for applications like offline data storage.

- **Session Storage**:
  - Stores data as strings in a simple key-value format. You can only store string data, so if you need to store objects, you must serialize them (e.g., using `JSON.stringify()`), and to retrieve them, you need to deserialize (e.g., using `JSON.parse()`).

#### 3. Storage Duration

- **IndexedDB**:

  - Data stored in IndexedDB persists even when the browser is closed and reopened, unless explicitly deleted. It allows for permanent storage until the application removes it or the user clears their browser data.

- **Session Storage**:
  - Data lasts only for the duration of the page session. It is cleared when the tab or window is closed, making it suitable for temporary storage needs during a single session.

#### 4. Capacity

- **IndexedDB**:

  - Can store a significant amount of data (usually several megabytes or more, depending on the browser), making it suitable for larger applications that require extensive data storage.

- **Session Storage**:
  - Typically has a smaller storage limit (usually around 5 to 10 MB), sufficient for lightweight applications but not suitable for large datasets.

#### 5. API Complexity

- **IndexedDB**:

  - Has a more complex API that includes asynchronous operations, transactions, and the ability to create indices for efficient querying. This complexity allows for robust data handling but requires more coding effort.

- **Session Storage**:
  - Offers a simpler API that is easy to use. It allows for straightforward data storage and retrieval with methods like `setItem()`, `getItem()`, and `removeItem()`.

#### Example Usage

#### IndexedDB Example

```javascript
// Open (or create) a database
const request = indexedDB.open("myDatabase", 1);

request.onupgradeneeded = (event) => {
  const db = event.target.result;
  // Create an object store
  const objectStore = db.createObjectStore("myStore", { keyPath: "id" });
};

request.onsuccess = (event) => {
  const db = event.target.result;
  const transaction = db.transaction("myStore", "readwrite");
  const store = transaction.objectStore("myStore");

  // Add data to the store
  store.add({ id: 1, name: "Alice" });
};
```

#### Session Storage Example

```javascript
// Set an item in session storage
sessionStorage.setItem("username", "Alice");

// Get an item from session storage
const username = sessionStorage.getItem("username");
console.log(username); // Outputs: 'Alice'

// Remove an item from session storage
sessionStorage.removeItem("username");
```

#### Summary of Differences

| Feature          | IndexedDB                                 | Session Storage                |
| ---------------- | ----------------------------------------- | ------------------------------ |
| Purpose          | Complex data storage                      | Temporary data storage         |
| Data Structure   | Structured, supports objects and indexing | Simple key-value pairs         |
| Storage Duration | Persists across sessions                  | Cleared when the tab is closed |
| Capacity         | Large (several MBs or more)               | Limited (5-10 MB typically)    |
| API Complexity   | Complex and asynchronous                  | Simple and synchronous         |

#### Conclusion

Choose **IndexedDB** for applications requiring persistent and structured data storage with complex querying capabilities, while **Session Storage** is ideal for temporarily storing lightweight data for the duration of a session. Understanding these differences will help you select the appropriate storage solution based on your application’s needs.

---

---

### Q82 How do you optimize the performance of an application?

Optimizing the performance of an application involves a combination of best practices and techniques to enhance speed, responsiveness, and overall user experience. Here are some strategies to consider:

#### 1. **Optimize Frontend Performance**

- **Minimize HTTP Requests**:

  - Combine CSS and JavaScript files.
  - Use CSS sprites for images.
  - Lazy load images and assets only when they are in the viewport.

- **Use Content Delivery Networks (CDNs)**:

  - Serve static assets (like images, CSS, and JavaScript) from CDNs to reduce latency and load times.

- **Minify and Bundle Assets**:

  - Minify CSS and JavaScript files to reduce file size.
  - Use tools like Webpack or Rollup to bundle scripts and stylesheets.

- **Optimize Images**:

  - Use appropriate formats (e.g., WebP for web images).
  - Compress images without losing quality using tools like ImageOptim or TinyPNG.
  - Set the correct dimensions for images to avoid layout shifts.

- **Implement Caching**:
  - Use browser caching to store static assets locally.
  - Implement server-side caching (e.g., Redis) for dynamic content.

#### 2. **Improve Loading Speed**

- **Defer or Asynchronously Load Scripts**:

  - Use `defer` or `async` attributes in `<script>` tags to prevent blocking rendering.

- **Use Lazy Loading**:

  - Load content (images, components) only when needed to reduce the initial load time.

- **Reduce Initial Payload**:
  - Remove unused libraries and code.
  - Split code into smaller bundles and load them as needed (code splitting).

#### 3. **Enhance Backend Performance**

- **Optimize Database Queries**:

  - Use indexes to speed up query performance.
  - Avoid N+1 query problems by using techniques like eager loading.
  - Optimize SQL queries for better performance.

- **Use Appropriate Data Structures**:

  - Choose the right data structures for the task at hand to improve efficiency.

- **Implement API Rate Limiting**:

  - Prevent abuse and maintain server performance by limiting the number of requests.

- **Asynchronous Processing**:
  - Use message queues (e.g., RabbitMQ, Kafka) for tasks that can be processed asynchronously.

#### 4. **Monitor and Analyze Performance**

- **Use Performance Monitoring Tools**:

  - Tools like Google Lighthouse, GTmetrix, or New Relic can help identify bottlenecks.

- **Analyze Load Time and Metrics**:

  - Track key performance indicators (KPIs) such as Time to First Byte (TTFB), First Contentful Paint (FCP), and Time to Interactive (TTI).

- **Conduct Regular Performance Audits**:
  - Regularly audit your application for performance issues and make adjustments as necessary.

#### 5. **Optimize User Experience**

- **Improve First Impressions**:

  - Use skeleton screens or loading spinners to improve perceived performance while content loads.

- **Use Progressive Web App (PWA) Techniques**:

  - Implement service workers to cache assets and enable offline functionality.

- **Responsive Design**:
  - Ensure your application is responsive to different screen sizes to improve usability and performance on mobile devices.

#### 6. **Reduce Server Response Time**

- **Optimize Server Configuration**:

  - Use a fast web server (e.g., Nginx or Apache).
  - Enable Gzip compression for text-based files.

- **Use HTTP/2**:
  - HTTP/2 allows multiplexing and header compression, improving loading times and reducing latency.

#### 7. **Implement Security Practices**

- **Use HTTPS**:

  - Ensure that your application uses HTTPS to encrypt data and improve security.

- **Prevent Common Security Issues**:
  - Regularly update dependencies and libraries to patch vulnerabilities that can impact performance.

#### Conclusion

Optimizing application performance is an ongoing process that involves analyzing, testing, and refining various aspects of your application. By implementing these strategies, you can enhance the speed, efficiency, and user experience of your application, leading to higher satisfaction and retention rates. Regular monitoring and updates are crucial to maintaining performance over time.

---

---

### Q83 What is critical rendering path?

The **critical rendering path** refers to the sequence of steps the browser takes to render a webpage from the moment it receives the HTML content until the page is fully displayed to the user. Understanding the critical rendering path is essential for optimizing webpage loading performance and improving the user experience.

#### Key Components of the Critical Rendering Path

1. **HTML Parsing**:

   - When the browser receives HTML, it starts parsing it to construct the Document Object Model (DOM). The DOM represents the structure of the webpage.

2. **CSS Parsing**:

   - The browser also parses CSS files (external and inline) to construct the CSS Object Model (CSSOM). The CSSOM contains information about styles that will be applied to the elements in the DOM.

3. **Render Tree Construction**:

   - The browser combines the DOM and CSSOM to create the **render tree**. This tree consists of visual elements (nodes) that need to be painted on the screen, excluding non-visual elements (like `<head>`).

4. **Layout**:

   - The browser calculates the dimensions and positions of each element in the render tree. This process is often referred to as **reflow**. The layout determines where each element will appear in the viewport.

5. **Painting**:

   - The browser paints the pixels on the screen based on the information from the render tree. This includes filling in colors, drawing text, images, and other visual content.

6. **Compositing**:
   - In modern browsers, the painting can be done in layers (especially with complex layouts). The browser composites these layers together to create the final image seen on the screen.

#### Importance of the Critical Rendering Path

- **Performance Optimization**:

  - Understanding the critical rendering path helps developers optimize the loading time of a webpage. By minimizing the number of resources that block rendering, you can speed up the initial display of content.

- **User Experience**:
  - A shorter critical rendering path leads to faster page loads and a better user experience. Users are less likely to abandon pages that load quickly and display content promptly.

#### Techniques to Optimize the Critical Rendering Path

1. **Minimize Critical Resources**:

   - Reduce the number of CSS and JavaScript files to limit the number of requests that block rendering.

2. **Asynchronous Loading**:

   - Load non-critical JavaScript asynchronously (using `async` or `defer` attributes) to prevent blocking the rendering process.

3. **CSS Optimization**:

   - Inline critical CSS for above-the-fold content to ensure it loads quickly.
   - Minimize CSS and remove unused styles to reduce file size.

4. **Reduce Render-blocking Resources**:

   - Place scripts at the end of the HTML document to prevent them from blocking the initial rendering.

5. **Optimize Images and Assets**:

   - Use responsive images and appropriate formats (like WebP) to reduce load times.
   - Use lazy loading for images that are not immediately visible in the viewport.

6. **Use HTTP/2**:
   - HTTP/2 allows multiplexing of requests, reducing the impact of multiple resource requests on loading time.

#### Conclusion

The critical rendering path is a fundamental concept in web performance optimization. By understanding its components and processes, developers can implement strategies to streamline rendering, minimize loading times, and improve the overall user experience on their websites. By focusing on optimizing the critical rendering path, you can create faster, more responsive web applications that engage users effectively.

---

---

### Q84 What is debouncing and throttling?

**Debouncing** and **throttling** are two techniques used in programming to control the rate at which a function is executed, particularly in response to events like scrolling, resizing, or keypresses. They are commonly used to optimize performance and improve user experience in web applications. Here’s a detailed explanation of both concepts:

#### Debouncing

**Definition**:
Debouncing ensures that a function is only called after a certain amount of time has passed since the last time it was invoked. It prevents a function from being called multiple times in rapid succession.

**Use Cases**:

- Search input fields where you want to wait until the user stops typing before sending a request to fetch suggestions.
- Window resize events to limit the frequency of layout calculations.

**How It Works**:

1. A debounced function waits for a specified delay after the last call.
2. If another call is made before the delay is over, the previous call is canceled, and the timer restarts.
3. Only after the specified delay without any new calls will the function execute.

**Example**:

```javascript
function debounce(func, delay) {
  let timeoutId;

  return function (...args) {
    // Clear the previous timer
    clearTimeout(timeoutId);

    // Set a new timer
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

// Usage
const handleInput = debounce(() => {
  console.log("Input processed");
}, 300);

document.getElementById("search").addEventListener("input", handleInput);
```

#### Throttling

**Definition**:
Throttling ensures that a function is called at most once in a specified time interval. Unlike debouncing, throttling allows the function to be invoked at regular intervals, regardless of how many times the event is fired.

**Use Cases**:

- Scrolling events to update the position or visibility of elements at a controlled rate.
- API calls during continuous user interactions, like resizing or scrolling.

**How It Works**:

1. A throttled function will execute immediately on the first call.
2. After that, it will ignore calls until the specified interval has passed.
3. Once the interval is over, it can be called again.

**Example**:

```javascript
function throttle(func, limit) {
  let lastFunc;
  let lastRan;

  return function (...args) {
    const context = this;

    if (!lastRan) {
      func.apply(context, args);
      lastRan = Date.now();
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(() => {
        if (Date.now() - lastRan >= limit) {
          func.apply(context, args);
          lastRan = Date.now();
        }
      }, limit - (Date.now() - lastRan));
    }
  };
}

// Usage
const handleScroll = throttle(() => {
  console.log("Scroll event processed");
}, 1000);

window.addEventListener("scroll", handleScroll);
```

#### Summary of Differences

| Feature          | Debouncing                                                                                                                | Throttling                                                                                        |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| Execution Timing | Executes after a delay following the last call                                                                            | Executes at regular intervals, allowing for multiple executions over time                         |
| Use Case         | Ideal for events that occur frequently and should trigger only once after the user stops interacting (e.g., input fields) | Ideal for events that need to run continuously but not too frequently (e.g., scrolling, resizing) |
| Example          | Waiting until the user stops typing                                                                                       | Ensuring the scroll event handler runs once every second                                          |

#### Conclusion

Both debouncing and throttling are essential for optimizing performance in applications, especially when dealing with events that can trigger multiple function calls rapidly. Understanding when and how to use each technique can help you create more efficient and responsive web applications.

---

---

### Q85 How does JavaScript’s garbage collection work?

JavaScript's garbage collection is an automatic memory management process that identifies and reclaims memory that is no longer in use, ensuring that applications do not consume more memory than necessary and helping to prevent memory leaks. Here's a detailed look at how JavaScript's garbage collection works:

#### Key Concepts

1. **Memory Allocation**:

   - When variables are created in JavaScript (e.g., objects, arrays, functions), memory is allocated for them. This memory needs to be managed effectively to avoid running out of resources.

2. **Reachability**:

   - Garbage collection in JavaScript is primarily based on the concept of **reachability**. An object is considered reachable if it can be accessed in some way during the execution of the program. If an object is not reachable (i.e., there are no references to it), it can be safely collected by the garbage collector.

3. **Reference Counting**:

   - One of the simplest garbage collection algorithms is reference counting. Each object maintains a count of references to it. When a reference is created, the count is incremented; when a reference is deleted, the count is decremented. When the count reaches zero, the object can be collected.
   - **Limitations**: Reference counting can lead to issues with circular references, where two objects reference each other, preventing their counts from reaching zero.

4. **Mark-and-Sweep**:
   - The mark-and-sweep algorithm is more common in modern JavaScript engines (like V8, used in Chrome and Node.js). It works in two phases:
     - **Mark Phase**: The garbage collector starts from a set of "root" objects (e.g., global objects, currently executing functions) and marks all reachable objects.
     - **Sweep Phase**: It then scans through all objects in memory and collects those that are not marked (i.e., unreachable).
   - This method effectively handles circular references, as all reachable objects will be marked regardless of their relationships to each other.

#### How Garbage Collection Works

1. **Automatic Process**:

   - JavaScript’s garbage collection is automatic, meaning developers do not have to explicitly free memory. However, understanding how it works can help write more efficient code and minimize memory leaks.

2. **Generational Garbage Collection**:

   - Many JavaScript engines implement generational garbage collection, which categorizes objects by their lifespan:
     - **Young Generation**: Where new objects are allocated. This area is collected more frequently since many objects are short-lived.
     - **Old Generation**: Where objects that have survived multiple garbage collections are moved. This area is collected less frequently, as it tends to hold long-lived objects.

3. **Garbage Collection Triggers**:

   - The garbage collector runs at specific intervals, usually when the JavaScript engine determines that memory is running low or at certain points during code execution (e.g., before an operation that requires a lot of memory).

4. **Performance Impact**:
   - While garbage collection helps manage memory, it can impact performance. Long pauses during collection can lead to noticeable lags in user experience. Understanding the lifecycle of objects and minimizing unnecessary allocations can mitigate this impact.

#### Best Practices to Minimize Memory Leaks

- **Avoid Global Variables**: Global variables remain in memory for the lifetime of the application, so limit their use.
- **Clear References**: Set variables to `null` or `undefined` when they are no longer needed, particularly for large objects.
- **Use Closures Wisely**: Closures can lead to memory leaks if they maintain references to unnecessary objects. Be mindful of what is captured in closures.
- **Unsubscribe from Events**: Remove event listeners when they are no longer needed to prevent references from persisting.

#### Conclusion

JavaScript's garbage collection is a crucial feature that helps manage memory automatically, allowing developers to focus on writing code without worrying too much about memory management. Understanding the underlying principles of garbage collection can help you write more efficient JavaScript code and avoid common pitfalls, such as memory leaks.

---

---

### Q86 What is the difference between `slice` and `splice`?

In JavaScript, `slice` and `splice` are both methods used with arrays, but they serve different purposes and have different functionalities. Here’s a detailed comparison of the two:

#### 1. **Slice**

- **Purpose**: The `slice` method is used to create a shallow copy of a portion of an array into a new array object, without modifying the original array.

- **Syntax**:

  ```javascript
  array.slice(start, end);
  ```

- **Parameters**:

  - `start`: The zero-based index at which to begin extraction. If omitted, it defaults to `0`.
  - `end`: The zero-based index before which to end extraction (not included). If omitted, it extracts through to the end of the array.

- **Returns**: A new array containing the extracted elements.

- **Example**:
  ```javascript
  const fruits = ["apple", "banana", "cherry", "date"];
  const citrus = fruits.slice(1, 3); // ['banana', 'cherry']
  console.log(fruits); // ['apple', 'banana', 'cherry', 'date'] (original array remains unchanged)
  ```

#### 2. **Splice**

- **Purpose**: The `splice` method is used to change the contents of an array by removing or replacing existing elements and/or adding new elements in place.

- **Syntax**:

  ```javascript
  array.splice(start, deleteCount, item1, item2, ...)
  ```

- **Parameters**:

  - `start`: The zero-based index at which to start changing the array.
  - `deleteCount`: The number of elements to remove from the array starting at `start`. If `0`, no elements are removed.
  - `item1, item2, ...`: Items to add to the array, starting from the `start` index.

- **Returns**: An array containing the removed elements (if any).

- **Example**:
  ```javascript
  const fruits = ["apple", "banana", "cherry", "date"];
  const removed = fruits.splice(1, 2, "orange", "grape"); // removes 'banana' and 'cherry', adds 'orange' and 'grape'
  console.log(fruits); // ['apple', 'orange', 'grape', 'date']
  console.log(removed); // ['banana', 'cherry']
  ```

#### Key Differences

| Feature              | `slice`                                         | `splice`                                                   |
| -------------------- | ----------------------------------------------- | ---------------------------------------------------------- |
| **Purpose**          | Creates a shallow copy of a section of an array | Modifies the original array by removing or adding elements |
| **Modification**     | Does not modify the original array              | Modifies the original array                                |
| **Return Value**     | Returns a new array                             | Returns an array of removed elements                       |
| **Parameters**       | `start`, `end`                                  | `start`, `deleteCount`, `items`                            |
| **Common Use Cases** | Extracting a portion of an array                | Adding/removing elements in an array                       |

#### Conclusion

In summary, use `slice` when you want to create a new array from a portion of an existing array without modifying it, and use `splice` when you need to manipulate the original array by adding or removing elements. Understanding these differences helps in choosing the right method for your needs when working with arrays in JavaScript.

---

---

### Q87 What is a `Proxy` object?

A **Proxy** object in JavaScript is a powerful feature that allows you to create a wrapper around another object (referred to as the target) to intercept and redefine fundamental operations for that object, such as property access, assignment, enumeration, function invocation, and more. Proxies can be used for various purposes, including data validation, property logging, and creating observable objects.

#### Creating a Proxy

To create a Proxy, you use the `Proxy` constructor, which takes two arguments:

1. **target**: The object you want to wrap.
2. **handler**: An object that defines which operations will be intercepted and how to redefine them.

#### Basic Syntax

```javascript
const proxy = new Proxy(target, handler);
```

#### Common Handler Methods

The `handler` object can define various trap methods, which are methods that intercept operations on the target object. Some commonly used trap methods include:

- **`get(target, property, receiver)`**: Intercepts property access.
- **`set(target, property, value, receiver)`**: Intercepts property assignments.
- **`deleteProperty(target, property)`**: Intercepts property deletion.
- **`has(target, property)`**: Intercepts the `in` operator.
- **`ownKeys(target)`**: Intercepts operations to retrieve the property keys.
- **`apply(target, thisArg, argumentsList)`**: Intercepts function calls.
- **`construct(target, args)`**: Intercepts constructor calls.

#### Example of Using a Proxy

Here’s a simple example of how to use a Proxy to log property access and modifications:

```javascript
const target = {
  name: "Alice",
  age: 25,
};

const handler = {
  get(target, property) {
    console.log(`Getting ${property}: ${target[property]}`);
    return target[property];
  },
  set(target, property, value) {
    console.log(`Setting ${property} to ${value}`);
    target[property] = value;
    return true; // Indicate success
  },
};

const proxy = new Proxy(target, handler);

console.log(proxy.name); // Logs: Getting name: Alice
proxy.age = 30; // Logs: Setting age to 30
console.log(proxy.age); // Logs: Getting age: 30
```

#### Use Cases

1. **Data Validation**: Validate values before setting them on an object.

   ```javascript
   const handler = {
     set(target, property, value) {
       if (property === "age" && (value < 0 || value > 120)) {
         throw new Error("Invalid age");
       }
       target[property] = value;
       return true;
     },
   };
   ```

2. **Logging**: Automatically log access to object properties for debugging purposes.

   ```javascript
   const handler = {
     get(target, property) {
       console.log(`Property ${property} accessed`);
       return target[property];
     },
   };
   ```

3. **Observable Objects**: Create objects that notify changes to listeners.

   ```javascript
   const handler = {
     set(target, property, value) {
       target[property] = value;
       notifyListeners(property, value);
       return true;
     },
   };
   ```

4. **Default Values**: Provide default values for properties that don’t exist.
   ```javascript
   const handler = {
     get(target, property) {
       return property in target ? target[property] : "default value";
     },
   };
   ```

##3# Conclusion

The Proxy object is a powerful and flexible feature in JavaScript that allows developers to intercept and redefine fundamental operations on objects. This can lead to a wide variety of applications, including data validation, logging, observables, and more. Understanding how to use Proxies effectively can enhance your ability to work with objects and create more dynamic, responsive applications.

---

---

### Q88 What are interceptors?

In programming, particularly in the context of JavaScript and frameworks, **interceptors** are mechanisms that allow you to define custom behavior that gets executed before or after certain operations or method calls. They act as middlemen between the operation and its execution, enabling developers to add additional functionality, modify inputs or outputs, or handle cross-cutting concerns like logging, validation, or error handling.

#### Key Concepts of Interceptors

1. **Purpose**: Interceptors are typically used to intercept and manipulate the behavior of functions, methods, or requests. They can be applied to various contexts, such as HTTP requests, database queries, and method calls.

2. **Implementation**: Interceptors can be implemented in various ways, depending on the framework or library being used. Common patterns include:

   - **Aspect-Oriented Programming (AOP)**: A programming paradigm that separates cross-cutting concerns (like logging or authentication) from the business logic of an application.
   - **Middleware**: Functions that have access to the request and response objects in a web application, often used in frameworks like Express.js.

3. **Usage Scenarios**: Interceptors can be useful for:
   - **Logging**: Capturing input/output data for debugging and auditing purposes.
   - **Error Handling**: Catching and processing errors that occur during function execution.
   - **Authorization**: Checking user permissions before allowing access to certain functions or data.
   - **Transforming Data**: Modifying the input data before it reaches the target function or the output data before it’s returned to the caller.

#### Example of Interceptors in JavaScript

Here's an example of how interceptors might be implemented in JavaScript using a simple function decorator pattern:

#### Example: Method Interceptor

```javascript
function intercept(target, methodName, interceptor) {
  const originalMethod = target[methodName];

  target[methodName] = function (...args) {
    // Pre-processing: Before the method execution
    interceptor.before && interceptor.before.apply(this, args);

    const result = originalMethod.apply(this, args);

    // Post-processing: After the method execution
    interceptor.after && interceptor.after.call(this, result);

    return result;
  };
}

// Usage
const myObject = {
  greet(name) {
    console.log(`Hello, ${name}!`);
  },
};

const interceptor = {
  before(name) {
    console.log(`About to greet: ${name}`);
  },
  after(result) {
    console.log("Greeting finished.");
  },
};

// Apply interceptor
intercept(myObject, "greet", interceptor);

// Call the method
myObject.greet("Alice");
```

**Output**:

```
About to greet: Alice
Hello, Alice!
Greeting finished.
```

#### Interceptors in Frameworks

In popular JavaScript frameworks and libraries, interceptors are often built-in features:

- **Axios**: In Axios (a popular HTTP client), you can define interceptors for requests and responses:

  ```javascript
  axios.interceptors.request.use(
    (config) => {
      // Do something before request is sent
      return config;
    },
    (error) => {
      // Do something with request error
      return Promise.reject(error);
    }
  );

  axios.interceptors.response.use(
    (response) => {
      // Any status code that lies within the range of 2xx cause this function to trigger
      return response;
    },
    (error) => {
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      return Promise.reject(error);
    }
  );
  ```

- **Vue.js**: In Vue, you can use global mixins to apply interceptors to component lifecycle hooks.

#### Conclusion

Interceptors provide a powerful way to enhance the behavior of functions or methods without modifying their core implementation. They allow developers to add functionality, handle cross-cutting concerns, and manage complex workflows more effectively. By using interceptors, you can create cleaner, more maintainable, and more flexible code in your applications.

---

---
