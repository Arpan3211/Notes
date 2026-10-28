# What is the difference between Object.keys, Object.values, and Object.entries


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
