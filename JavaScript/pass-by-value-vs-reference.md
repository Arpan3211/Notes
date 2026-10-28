# What is the difference between 'Pass by Value' and 'Pass by Reference'


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

| **Pass by Value** | **Pass by Reference** |
| ------------------------------------------------------------------- | ------------------------------------------------------------- |
| Operates on a **copy** of the value.                                | Operates on the **original** reference.                       |
| Only applies to **primitive** types.                                | Applies to **non-primitive** types (objects, arrays).         |
| Changes inside the function **don't affect** the original variable. | Changes inside the function **affect** the original variable. |

In summary, **primitive types** are passed by value, while **objects and arrays** (non-primitive types) are passed by reference in JavaScript.
