# Difference between shallow copy and deep copy in JavaScript


 Shallow Copy:  
A shallow copy creates a new object, but only copies the references of nested objects. If the original object contains other objects, only their references are copied, not the actual nested objects.

 Example:

```js

Using Object.assign or the spread operator (...) creates a shallow copy.

const original = { name: "Rajat", address: { city: "Pune" } };
const shallowCopy = { ...original };
shallowCopy.address.city = "Mumbai";
console.log(original.address.city);
Output: "Mumbai"
```

 Deep Copy:  
A deep copy creates a new object and recursively copies all nested objects, ensuring complete duplication of the original object. Changes to the deep copy do not affect the original object.

 Example:

```js

Using libraries like lodash or JSON.parse(JSON.stringify()) and recursive functions can achieve deep copying.

const _ = require('lodash');
const original = { name: "Rajat", address: { city: "Pune" } };
const deepCopy = _.cloneDeep(original);
deepCopy.address.city = "Mumbai";
console.log(original.address.city);
Output: "Pune"
```

 Use Cases:

- Shallow Copy: Suitable for simple objects or when only the top-level properties need duplication.
- Deep Copy: Necessary for complex objects with nested structures to ensure complete independence from the original object.

 Performance:

- Shallow Copy: Faster and less resource-intensive.
- Deep Copy: Slower and more resource-intensive due to recursive copying.

That’s the difference between shallow copy and deep copy in JavaScript

---

---


---

## Additional notes: What is the difference between a deep copy and a shallow copy
_(second copy of this topic, Q11/Q58 in My_Javascript.md)_


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
