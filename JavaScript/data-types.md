# Data types in JS


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
| **Types** | Number, String, Boolean, Symbol, Null, Undefined, BigInt | Object (includes Array, Function, Date, etc.) |
| **Mutability** | Immutable                                                | Mutable                                       |
| **Stored by** | Value                                                    | Reference                                     |
| **Comparison** | Compared by value                                        | Compared by reference                         |
| **Memory Allocation** | Stored in the stack                                      | Stored in the heap                            |

#### **Summary:**

- **Primitive data types** are basic types that represent single values and are immutable.
- **Non-primitive data types** (Objects) can hold collections of values or more complex entities, are mutable, and are compared by reference.
