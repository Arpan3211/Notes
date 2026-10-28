# Explain event loop in js with code examples in simple words


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
