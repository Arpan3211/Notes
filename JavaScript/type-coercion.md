# Explains Implicit type coercion in Javascript


**Explanation**:

- Implicit type coercion in JavaScript refers to the automatic conversion of one data type to another by the JavaScript engine when performing operations or comparisons. This can sometimes lead to unexpected or counterintuitive results if you're not aware of how type coercion works.

```jsx
var x = 5; // x is a number
var y = "10"; // y is a string

var result = x + y; // JavaScript implicitly converts x to a string and then performs string concatenation
console.log(result); // Output: "510"
```

1. **String and Number Interactions**:
   - When you use the **`+`** operator to combine a string and a number, the number is converted to a string, and the two strings are concatenated.
2. **Comparison Operators**:
   - When you use comparison operators like **`==`** or **`!=`**, JavaScript tries to convert operands to a common type before making the comparison. This can lead to unexpected results.
   - For example, **`5 == "5"`** will evaluate to **`true`** because the string **`"5"`** is implicitly converted to the number **`5`** for the comparison.
3. **Truthy and Falsy Values**:
   - JavaScript has truthy and falsy values. When you use values in a boolean context (e.g., in an **`if`** statement), JavaScript will implicitly convert values to **`true`** or **`false`** based on whether they are truthy or falsy.
