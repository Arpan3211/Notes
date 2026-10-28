# Mutable/Immutable data types


In JavaScript, data types can be categorized into mutable and immutable. Understanding these concepts is crucial for effective programming and managing state.

#### Immutable Data Types

**Definition:** Immutable data types are those whose values cannot be changed once they are created. When you modify an immutable value, a new value is created instead of modifying the original one.

**JavaScript Examples:**

- **Primitive Types:** These are immutable. When you work with primitive types, you're always working with a copy of the value, not the value itself. If you assign a primitive value to a variable and then modify it, you create a new value.
  - **String:**
    ```javascript
    let str = "hello";
    let newStr = str.toUpperCase(); // 'HELLO'
    console.log(str); // 'hello' (original string remains unchanged)
    ```
  - **Number:**
    ```javascript
    let num = 5;
    let newNum = num + 1; // 6
    console.log(num); // 5 (original number remains unchanged)
    ```
  - **Boolean:**
    ```javascript
    let bool = true;
    let newBool = !bool; // false
    console.log(bool); // true (original boolean remains unchanged)
    ```

#### Mutable Data Types

**Definition:** Mutable data types are those whose values can be changed after they are created. Modifying a mutable value will affect the original value.

**JavaScript Examples:**

- **Objects:**
  ```javascript
  let person = { name: "Alice", age: 25 };
  person.age = 26; // Mutates the original object
  console.log(person.age); // 26
  ```
- **Arrays:**
  ```javascript
  let numbers = [1, 2, 3];
  numbers.push(4); // Mutates the original array
  console.log(numbers); // [1, 2, 3, 4]
  ```

#### Key Differences

1. **Modification:**

   - **Immutable:** Cannot be modified. Changes result in new values.
   - **Mutable:** Can be modified. Changes affect the original value.

2. **Performance:**

   - **Immutable:** Often leads to safer and more predictable code, especially in functional programming paradigms.
   - **Mutable:** Can be more performant in scenarios where frequent changes to data are required, but requires careful management to avoid unintended side effects.

3. **Use Cases:**
   - **Immutable:** Useful in functional programming, state management (e.g., Redux in React), and to ensure data integrity.
   - **Mutable:** Useful in scenarios where data changes frequently and the overhead of creating new instances is undesirable.

#### Summary

- **Immutable Data Types**: Primitive types in JavaScript (e.g., `string`, `number`, `boolean`). They cannot be changed once created.
- **Mutable Data Types**: Objects and arrays. Their values can be changed, which affects the original data structure.

Understanding and correctly using mutable and immutable types can help you write more predictable and maintainable code.
