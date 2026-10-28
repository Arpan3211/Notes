# Explain async/await in JavaScript


**Explanation:**

- _Async and await are special syntax to work with Promises._
- The **`async`** keyword is placed before a function to denote that the function is asynchronous and can be used as a Promise.
- The **`await`** keyword, on the other hand, tells JavaScript to wait for the async operation to complete before proceeding to the next task in the function.
- The `await` keyword can only be used in an `async` function

```jsx
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = "This is the fetched data.";
      const error = false; // Change to true to simulate an error

      if (!error) {
        resolve(data);
      } else {
        reject("An error occurred");
      }
    }, 2000);
  });
}

async function getData() {
  try {
    const data = await fetchData();
    console.log("Data received:", data);
  } catch (error) {
    console.error("Error:", error);
  }
}

getData();
```
