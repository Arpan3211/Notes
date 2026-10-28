# Clarify the distinctions among 'function User(){}', 'var user = User()', and 'var user = new User()'


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
| **Definition** | Function Declaration        | Function Call                                    | Constructor Call                                              |
| **Purpose** | Defines a reusable function | Executes the function and assigns the result     | Creates a new instance of an object                           |
| **Return Value** | N/A                         | Return value of `User` function or `undefined`   | A new object instance (unless the function returns an object) |
| **Use of `this`** | N/A                         | `this` is the global object (in non-strict mode) | `this` is the newly created object                            |
| **Creates a New Object?** | No                          | No                                               | Yes                                                           |
| **Prototype Setup** | No                          | No                                               | Yes, sets `User.prototype` as the prototype                   |
| **Hoisting Behavior** | Hoisted                     | Depends on the function                          | Depends on the function                                       |

#### Summary

- **`function User() {}`**: A function declaration that defines a reusable function.
- **`var user = User()`**: A function call that executes `User` and assigns its result to `user`.
- **`var user = new User()`**: A constructor call that creates a new object instance using `User` as the constructor, allowing you to create multiple objects with shared methods and properties.
