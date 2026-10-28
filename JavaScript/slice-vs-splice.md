# What is the difference between slice and splice


In JavaScript, `slice` and `splice` are both methods used with arrays, but they serve different purposes and have different functionalities. Here’s a detailed comparison of the two:

#### 1. **Slice**

- **Purpose**: The `slice` method is used to create a shallow copy of a portion of an array into a new array object, without modifying the original array.

- **Syntax**:

  ```javascript
  array.slice(start, end);
  ```

- **Parameters**:

  - `start`: The zero-based index at which to begin extraction. If omitted, it defaults to `0`.
  - `end`: The zero-based index before which to end extraction (not included). If omitted, it extracts through to the end of the array.

- **Returns**: A new array containing the extracted elements.

- **Example**:
  ```javascript
  const fruits = ["apple", "banana", "cherry", "date"];
  const citrus = fruits.slice(1, 3); // ['banana', 'cherry']
  console.log(fruits); // ['apple', 'banana', 'cherry', 'date'] (original array remains unchanged)
  ```

#### 2. **Splice**

- **Purpose**: The `splice` method is used to change the contents of an array by removing or replacing existing elements and/or adding new elements in place.

- **Syntax**:

  ```javascript
  array.splice(start, deleteCount, item1, item2, ...)
  ```

- **Parameters**:

  - `start`: The zero-based index at which to start changing the array.
  - `deleteCount`: The number of elements to remove from the array starting at `start`. If `0`, no elements are removed.
  - `item1, item2, ...`: Items to add to the array, starting from the `start` index.

- **Returns**: An array containing the removed elements (if any).

- **Example**:
  ```javascript
  const fruits = ["apple", "banana", "cherry", "date"];
  const removed = fruits.splice(1, 2, "orange", "grape"); // removes 'banana' and 'cherry', adds 'orange' and 'grape'
  console.log(fruits); // ['apple', 'orange', 'grape', 'date']
  console.log(removed); // ['banana', 'cherry']
  ```

#### Key Differences

| Feature              | `slice`                                         | `splice`                                                   |
| -------------------- | ----------------------------------------------- | ---------------------------------------------------------- |
| **Purpose** | Creates a shallow copy of a section of an array | Modifies the original array by removing or adding elements |
| **Modification** | Does not modify the original array              | Modifies the original array                                |
| **Return Value** | Returns a new array                             | Returns an array of removed elements                       |
| **Parameters** | `start`, `end`                                  | `start`, `deleteCount`, `items`                            |
| **Common Use Cases** | Extracting a portion of an array                | Adding/removing elements in an array                       |

#### Conclusion

In summary, use `slice` when you want to create a new array from a portion of an existing array without modifying it, and use `splice` when you need to manipulate the original array by adding or removing elements. Understanding these differences helps in choosing the right method for your needs when working with arrays in JavaScript.
