# Explain Map vs WeakMap in JavaScript


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
| **Key Type** | Any value (objects, primitives)         | Only objects                                               |
| **Garbage Collection** | No automatic garbage collection of keys | Keys are weakly held, allowing collection                  |
| **Iteration** | Iterable (`forEach`, `for...of`, etc.)  | Not iterable                                               |
| **Size Property** | Has `size` property                     | No `size` property                                         |
| **Use Case** | General-purpose key-value storage       | Use when key objects should not prevent garbage collection |

##### When to Use `Map` vs `WeakMap`

- **Use `Map`** when:
  - You need a collection of key-value pairs with various types of keys.
  - You require operations like iteration, checking the size, or retrieving all keys/values.
- **Use `WeakMap`** when:
  - You want to associate data with objects without affecting their garbage collection.
  - You do not need to enumerate the collection or access the size of the collection.
