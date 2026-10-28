# Explains IIFE ( Immediately-Invoked Function Expression ) in Javascript


**Explanation**:

An Immediately-Invoked Function Expression, or IFE, is a JavaScript function that is defined and executed right away. It's typically wrapped in parentheses to indicate it's a function expression, and then immediately followed by another set of parentheses to invoke it. IFEs are commonly used to create private scopes, manage variables, and encapsulate code.

```jsx
(function () {
  var privateVariable = 42;
  console.log("This is an IFE. Private variable:", privateVariable);
})();
```
