# Closures


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
