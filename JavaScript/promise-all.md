# What is promise.all


**Explanation:**

Promise.all is a promise that takes an array of promises as an input (an iterable), and it gets resolved when all the promises get resolved or any one of them gets rejected. For example, the syntax of promise.all method is below,

```jsx
const promise1 = Promise.resolve(1);
const promise2 = Promise.resolve(2);

Promise.all([promise1, promise2]).then((results) => {
  console.log(results); // [1, 2]
});
```

**Note:** Remember that the order of the promises(output the result) is maintained as per input order.
