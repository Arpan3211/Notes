# What is a promise


**Explanation:**

A promise is an object that may gives us a value after some time in the future with either a resolved value or a reason that it’s not resolved(for example, network error). It will be in one of the 3 possible states: fulfilled, rejected, or pending.

The syntax of Promise creation looks like below,

```jsx
function fetchData() {
  return new Promise((resolve, reject) => {
    // Simulate an asynchronous operation (e.g., fetching data from a server)
    setTimeout(() => {
      const data = "This is the fetched data.";
      const error = false; // Change to true to simulate an error

      if (!error) {
        resolve(data); // Resolve the Promise with the data
      } else {
        reject("An error occurred"); // Reject the Promise with an error message
      }
    }, 2000); // Simulating a 2-second delay
  });
}

// Using the Promise
fetchData()
  .then((data) => {
    console.log("Data received:", data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
```
