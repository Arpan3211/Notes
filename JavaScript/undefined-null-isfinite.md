# Explains undefined , null , isFinite function in JavaScript


**Explanation**:

- **Undefined**: In JavaScript, `undefined` is a primitive value that typically represents the absence of a value. It's the default value of declared variables that haven't been assigned a value, or the result of accessing non-existent object properties. You can check for it using `typeof variable === "undefined"`.
- **Null**: `null` is a value that represents the intentional absence of any object value or no value at all. It's often used to indicate that a variable should have no value. You can check for it using `variable === null`.
- **isFinite() Function**: `isFinite()` is a built-in JavaScript function used to check if a value is a finite number. It returns `true` if the value is a finite number and can be converted to a number; otherwise, it returns `false`. This is useful for checking if a value is a valid number before performing numerical operations.

For example:

```jsx
var undefinedVar;
console.log(typeof undefinedVar === "undefined"); // true

var nullVar = null;
console.log(nullVar === null); // true

var number = 42;
console.log(isFinite(number)); // true

var notANumber = "Hello";
console.log(isFinite(notANumber)); // false
```
