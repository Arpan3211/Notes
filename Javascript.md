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

**var**  
**Scope**: Function-scoped.  
**Hoisting**: Variables declared with var are hoisted to the top of their scope, but not initialized.  
**Usage**: Generally considered outdated due to its tendency to cause bugs. Use with caution!  
**let**  
**Scope**: Block-scoped.  
**Hoisting**: Variables declared with let are hoisted to the top of their block scope, but are not initialized.  
**Usage**: Ideal for variables that will be reassigned or have limited block scope.  
**const**  
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

- In Javascript we declare the variable using ( var , let and const ) , and we accessing the varibles or function after the decletation but in case of var and normal functions we can access the variables before decleration

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

1. Functions can be assigned to variables:

```jsx
var add = function (a, b) {
  return a + b;
};

console.log(add(2, 3)); // Output: 5
```

1. Functions can be returned from other functions:

```jsx
function multiplier(factor) {
  return function (number) {
    return number * factor;
  };
}

var multiplyByTwo = multiplier(2);
console.log(multiplyByTwo(5)); // Output: 10
```

1. Functions can be passed as arguments to other functions:

```jsx
function greet(name) {
  console.log("Hello, " + name + "!");
}

function sayHello(callback) {
  callback("John");
}

sayHello(greet); // Output: Hello, John!
```

1. Functions can be stored in data structures:

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

#### _Microtask Queue_

Microtasks are tasks that need to be executed immediately after the currently executing script (the current JavaScript call stack) has completed and before any other macrotasks. They are prioritized over macrotasks and are typically used for small and urgent tasks that must be executed as soon as possible.
**Common examples of microtasks:**

- Promises (e.g., `Promise.resolve()`)
- `process.nextTick()` (Node.js specific)
- `MutationObserver` callbacks

**How Microtask Queue Works:**

- Microtasks are executed after the current call stack is empty but before the event loop moves to the next macrotask.
- All microtasks in the microtask queue are executed continuously until the queue is empty, **before** any macrotasks are executed.

#### _Macrotask Queue_

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

- **forEach**:
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
- **`element**.**addEventListener( eventType, eventHandler, useCapture )**`
- **`eventType`**: The type of the event (e.g., "click", "mouseover").
- **`eventHandler`**: The function to be executed when the event occurs.
- **`useCapture`**: A boolean value indicating whether to use the capturing phase (**`true`**) or the bubbling phase (**`false`**). The default is **`false`**.
- `element.addEventListener("click", eventHandler, true[capturing] or false[bubbling] );`
- **Capturing Phase**:
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

- **Bubbling Phase**:
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

---

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

### <u>** Q37 Explains undefined , null , isFinite function in JavaScript.**</u>

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

### <u>** Q39 what is raw string**</u>

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

- JavaScript is single-threaded because it has a single call stack and one thread of execution. This means it can execute one operation at a time, and it waits for one task to complete before moving on to the next. Here are some key advantages of JavaScript being single-threaded:

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

##### Why "Prototypal"?

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

#### Common Scenarios for Employing Anonymous Functions

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

#### Clarify the distinctions among 'function User(){}', 'var user = User()', and 'var user = new User()'

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

##### 1. Using the Spread Operator

The spread operator (`...`) creates a shallow copy of an object.

```javascript
const original = { a: 1, b: 2 };
const copy = { ...original };
```

##### 2. Using `Object.assign()`

`Object.assign()` also creates a shallow copy of an object.

```javascript
const original = { a: 1, b: 2 };
const copy = Object.assign({}, original);
```

##### 3. Using `JSON.parse()` and `JSON.stringify()`

For deep cloning (copying nested objects), you can use `JSON.parse()` and `JSON.stringify()`. Note that this method has limitations, such as not supporting functions, `undefined`, or special objects like `Date`.

```javascript
const original = { a: 1, b: { c: 2 } };
const copy = JSON.parse(JSON.stringify(original));
```

##### 4. Using a Utility Library

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

### <u>**Q52 Temporal Dead Zone **</u>

The Temporal Dead Zone (TDZ) is a concept in JavaScript related to how variables are handled when using `let` and `const` declarations. It refers to the time between the entering of a block scope (like inside a function or a block) and the actual declaration of a variable within that block. During this period, the variable is in a "dead zone" and cannot be accessed.

Here's a simplified explanation:

##### What is TDZ?

- **Before Declaration**: If you try to access a variable declared with `let` or `const` before its declaration in its block scope, you'll get a `ReferenceError`. This is because the variable is in the TDZ.
- **After Declaration**: Once the declaration has been encountered in the code, the variable can be used as normal.

##### Why Does TDZ Exist?

The TDZ exists to prevent the use of variables before they are properly initialized. It helps avoid bugs that could arise from accessing variables before they are set.

##### Example of TDZ

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

##### TDZ with `const`

The same rules apply to variables declared with `const`, but since `const` also requires initialization at the time of declaration, the TDZ ensures that the variable cannot be accessed until it's initialized.

```javascript
function example() {
  console.log(b); // ReferenceError: Cannot access 'b' before initialization
  const b = 5;
}

example();
```

##### How to Avoid TDZ Errors

- **Declare Variables Early**: Declare variables at the beginning of your block scope to avoid accessing them before they are initialized.
- **Initialize Variables**: Make sure variables declared with `let` and `const` are initialized before use.

##### Summary

The Temporal Dead Zone is a period during which variables declared with `let` and `const` are inaccessible. It starts at the beginning of the block and ends when the variable is declared and initialized. This concept helps prevent errors related to the use of variables before they are ready.

---

---

### <u>**Q53 Mutable/Immutable data types**</u>

In JavaScript, data types can be categorized into mutable and immutable. Understanding these concepts is crucial for effective programming and managing state.

##### Immutable Data Types

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

##### Mutable Data Types

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

##### Key Differences

1. **Modification:**

   - **Immutable:** Cannot be modified. Changes result in new values.
   - **Mutable:** Can be modified. Changes affect the original value.

2. **Performance:**

   - **Immutable:** Often leads to safer and more predictable code, especially in functional programming paradigms.
   - **Mutable:** Can be more performant in scenarios where frequent changes to data are required, but requires careful management to avoid unintended side effects.

3. **Use Cases:**
   - **Immutable:** Useful in functional programming, state management (e.g., Redux in React), and to ensure data integrity.
   - **Mutable:** Useful in scenarios where data changes frequently and the overhead of creating new instances is undesirable.

##### Summary

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
