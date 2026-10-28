# Explain regular expression with example


**Explanation**:

- A regular expression, often referred to as a "regex," is a powerful tool in JavaScript used for pattern matching within strings. It allows you to search for and manipulate text based on patterns. Regular expressions are created using a special syntax.

```jsx
// Example: Matching email addresses with a simple regex
const emailPattern = /\\w+@\\w+\\.\\w+/;

const text = "You can reach me at john@example.com or mary@example.org.";

const matches = text.match(emailPattern);

console.log(matches); // Outputs: ["john@example.com", "mary@example.org"]
```
