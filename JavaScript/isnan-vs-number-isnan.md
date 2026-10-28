# Explain isNaN vs Number.isNaN


**Explanation**:

**`isNaN`** and **`Number.isNaN`** are two JavaScript functions used to check if a value is NaN (Not-a-Number). However, they have a key difference in their behavior that is important to understand.

1. **`isNaN`**:

   - **`isNaN`** is a global JavaScript function that checks if a value is NaN.
   - It attempts to convert the value to a number before performing the check, which can lead to unexpected results. It can also produce false positives for non-NaN values that can be coerced into NaN.
   - For example, **`isNaN("hello")`** will return **`true`**, which might not be the expected behavior.

   ```jsx
   javascriptCopy code
   isNaN("hello"); // true
   isNaN(42);       // false

   ```

2. **`Number.isNaN`**:

   - **`Number.isNaN`** is a method specifically designed to check if a value is precisely NaN.
   - It does not attempt to convert the value to a number. It returns **`true`** only if the value is exactly equal to NaN.
   - This method provides a more reliable and predictable way to test for NaN.

   ```jsx
   javascriptCopy code
   Number.isNaN("hello"); // false
   Number.isNaN(42);       // false
   Number.isNaN(NaN);      // true

   ```
