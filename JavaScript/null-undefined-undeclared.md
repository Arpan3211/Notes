# Differentiate between a variable that is null, undefined, or undeclared


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

| Aspect              | `undefined`                                        | `null`                                     | **Undeclared** |
| ------------------- | -------------------------------------------------- | ------------------------------------------ | --------------------------------------------- |
| **Definition** | A variable declared but not assigned a value       | A variable explicitly set to "no value"    | A variable that hasn't been declared          |
| **Type** | `"undefined"`                                      | `"object"` (due to historical reasons)     | No type (throws `ReferenceError` if accessed) |
| **Usage Scenario** | Default state of declared variables without values | Represents an intentional absence of value | A variable that does not exist in any scope   |
| **Error on Access** | No                                                 | No                                         | Yes (`ReferenceError`)                        |
| **Example** | `let a;`                                           | `let a = null;`                            | `console.log(b); // ReferenceError`           |
