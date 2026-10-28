# What is Object Destructuring? (with examples)


**Explanation:**

- object destructuring is a simple way to extracting values from object and assign them to a variables so it would easy to read
- It’s introduced in ES6 ( 2015 )

  ```jsx
  const person = { firstName: "John", lastName: "Doe" };
  const { firstName, lastName } = person;

  console.log(firstName); // 'John'
  console.log(lastName); // 'Doe'
  ```
