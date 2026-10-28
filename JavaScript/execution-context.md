# Execution Context in JavaScript


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
