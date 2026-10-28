# What Is promise.race method in JavaScript


**Explanation:**

- promise.race mathod takes a iteratable promises as a input but return a single promise.
- It returns a single promise that settles (either resolves or rejects) with the result of the first promise to settle among the input promises.
- **`Promise.race()`** is often used in scenarios where you want to implement a timeout for an operation or fetch data from multiple sources, and you're interested in the result from the fastest source or the quickest response.
- In the below example a gives the result as second promise becouse it settles first ( fastest )

```jsx
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 1 resolved");
  }, 1000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 2 resolved");
  }, 500);
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Promise 3 rejected");
  }, 1500);
});

Promise.race([promise1, promise2, promise3])
  .then((result) => {
    console.log("First promise to settle:", result);
  })
  .catch((error) => {
    console.error("First promise to reject:", error);
  });
```
