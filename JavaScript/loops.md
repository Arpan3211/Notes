# Types of loop in Javascript


**Explanation:**

1. **for Loop:** The **`for`** loop is used for iterating over a range of values a specified number of times.

   ```jsx
   for (let i = 0; i < 5; i++) {
     // Code to be executed 5 times
   }
   ```

2. **do...while Loop:** Similar to the **`while`** loop, but it guarantees that the code block is executed at least once, as the condition is checked after the loop body.

   ```jsx
   let i = 0;
   do {
     // Code to be executed at least once
     i++;
   } while (i < 5);
   ```

3. **for...of Loop:** The **`for...of`** loop is used to iterate over the values of iterable objects like arrays, strings, and more.

   ```jsx
   const fruits = ["apple", "banana", "cherry"];
   for (const fruit of fruits) {
     console.log(fruit);
   }
   ```

4. **for...await...of Loop (Asynchronous Iteration):** Used for asynchronous iteration over the values of asynchronous iterable objects, like Promises.

   ```jsx
   async function asyncFunction() {
     for await (const result of asyncIterable) {
       console.log(result);
     }
   }
   ```

5. **while Loop:** The **`while`** loop repeatedly executes a block of code as long as a specified condition is true.

   ```jsx
   let i = 0;
   while (i < 5) {
     // Code to be executed as long as i is less than 5
     i++;
   }
   ```

6. **for...in Loop:** The **`for...in`** loop is used to iterate over the properties of an object.

   ```jsx
   const person = { name: "John", age: 30 };
   for (let key in person) {
     console.log(key, person[key]);
   }
   ```

7. **forEach() Method:** Arrays have a **`forEach()`** method that allows you to iterate over their elements.

   ```jsx
   const numbers = [1, 2, 3, 4, 5];
   numbers.forEach(function (number) {
     console.log(number);
   });
   ```
