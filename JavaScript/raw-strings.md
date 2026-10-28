# What is raw string


**Explanation**:

- A "raw string" refers to a string that is created using the template literal syntax (backticks) and is tagged with a special function called **`String.raw`**. This allows you to create strings that treat backslashes (**`\\`**) as literal characters, rather than as escape characters.

```jsx
const rawString = String.raw`This is a raw string\\nNot an escaped newline.`;

console.log(rawString);
```
