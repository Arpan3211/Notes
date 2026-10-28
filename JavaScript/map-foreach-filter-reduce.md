# Explain differance between map and forEach , filter , reduce


**Explanation:**

##### MAP

- **map.**
- map function created a new array
- map function perform a given operation on “copy” of each element from original array.
- map skip the empty element while doing operation but return in result

```jsx
// Return new array
let arr = [1, 2, 3, 4, 5];
let newArr = arr.map((val) => {
  return val * val;
});
console.log(newArr);
//---------------------------------------------------------------------
//map skip the empty element while doing operation but return in result
let arr = [1, , 3, 4, 5];
let newArr = arr.map((val) => {
  return val * val;
});
console.log(newArr); //[ 1, <1 empty item>, 9, 16, 25 ]
```

##### FILTER

- The **`filter()`** method in JavaScript is used to create a new array containing all elements that pass a specific test (predicate) provided by a callback function. It doesn't modify the original array; instead, it returns a new array with the elements that satisfy the condition defined in the callback function.

```jsx
const numbers = [1, 2, 3, 4, 5, 6];

const evenNumbers = numbers.filter(function (number) {
  return number % 2 === 0;
});

console.log(evenNumbers); // Output: [2, 4, 6]
```

##### forEach:

- forEach does not create a new array based on given array . It’s return undefined.
- forEach function is performed a operation on each element of array.
- forEach skip the empty element and does not return in result also.
- forEach directly affect the original array.

```jsx
// didn't create a new array , return undefined
let arr = [1, 2, 3, 4, 5];
let newArr = arr.forEach((val) => {
  return val * val;
});
console.log(newArr);
//---------------------------------------------------------------------
// but it's operatable in array element
const numbers = [1, 2, 3, 4, 5];

numbers.forEach((number, index, array) => {
  array[index] = number * 2; // Mutates the original array
});

console.log(numbers); // [2, 4, 6, 8, 10]

//---------------------------------------------------------------------
//foreach skip the empty element and does not return in result also.
let arr = [1, , 3, 4, 5];

arr.forEach((val) => {
  console.log(val * val);
});
//---------------------------------------------------------------------
//forEach directly affect the original array.
const numbers = [1, 2, 3, 4];
numbers.forEach(function (number, index, array) {
  // You can modify the original array within the callback
  array[index] = number * 2;
});
// The original array has been modified
console.log(numbers); // [2, 4, 6, 8]
```

##### REDUCE:

- The **`reduce()`** method takes a callback function as its argument, which you can use to define how the accumulation is done.
- It iterates over each element of an array and accumulates a result.

```jsx
const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);

console.log(sum); // Output: 15
```

---

---


---

## Additional notes: What is the difference between map and filter
_(second copy of this topic, Q24/Q83 in My_Javascript.md)_


`map` and `filter` are both array methods in JavaScript that are commonly used for transforming and processing arrays. However, they serve different purposes and operate in distinct ways. Here’s a breakdown of their differences:

#### 1. Purpose

- **`map`**:

  - The `map` method is used to transform each element of an array by applying a provided function to each element. It creates a new array containing the results of applying the function to each element in the original array.

- **`filter`**:
  - The `filter` method is used to create a new array that contains only the elements that pass a test defined by a provided function. It filters out the elements that do not meet the condition, resulting in a new array with only the elements that satisfy the criteria.

#### 2. Return Value

- **`map`**:

  - Returns a new array with the same length as the original array, where each element is the result of the callback function applied to each element of the original array.

- **`filter`**:
  - Returns a new array that may have a different length than the original array, containing only the elements that satisfy the condition specified in the callback function.

#### 3. Example Usage

#### Using `map`

Here’s an example of how `map` is used to transform an array:

```javascript
const numbers = [1, 2, 3, 4, 5];

// Using map to square each number
const squaredNumbers = numbers.map((num) => num * num);

console.log(squaredNumbers); // Outputs: [1, 4, 9, 16, 25]
```

#### Using `filter`

Here’s an example of how `filter` is used to select elements based on a condition:

```javascript
const numbers = [1, 2, 3, 4, 5];

// Using filter to get only even numbers
const evenNumbers = numbers.filter((num) => num % 2 === 0);

console.log(evenNumbers); // Outputs: [2, 4]
```

#### 4. Chaining

Both `map` and `filter` can be chained together for more complex operations:

```javascript
const numbers = [1, 2, 3, 4, 5];

// First filter out the odd numbers, then square the remaining even numbers
const result = numbers
  .filter((num) => num % 2 === 0) // Filter even numbers
  .map((num) => num * num); // Square the even numbers

console.log(result); // Outputs: [4, 16]
```

#### Summary of Differences

| Feature         | `map`                             | `filter`                              |
| --------------- | --------------------------------- | ------------------------------------- |
| Purpose         | Transforms each element           | Selects elements based on a condition |
| Return Value    | New array of transformed elements | New array of filtered elements        |
| Length of Array | Same length as original           | May differ from original              |
| Example         | `arr.map(x => x * 2)`             | `arr.filter(x => x > 10)`             |

#### Conclusion

In summary, use `map` when you want to transform each element of an array into a new array of the same length, and use `filter` when you want to select specific elements from an array based on a condition, resulting in a potentially smaller array. Understanding these differences can help you effectively manipulate arrays in JavaScript.
