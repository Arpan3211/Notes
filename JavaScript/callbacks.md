# What is Callback in JavaScript


**Explanation:**

1. **Definition**: A callback function is a function passed as an argument to another function. It is typically used to be executed later, after an asynchronous operation or upon an event.
2. **Usage**: Callbacks are often used for handling asynchronous operations like data fetching, timers, or event handling.

**Example**:

```jsx
function fetchData(url, callback) {
  // Simulated data fetching
  setTimeout(() => {
    const data = "Some data from the server";
    callback(data);
  }, 1000);
}

function handleData(data) {
  console.log(data);
}

fetchData("<https://example.com/api>", handleData);
```

```jsx
function isEven(num) {
  if (num % 2 === 0) {
    return num;
  }
}

function printMag(callback, mag) {
  console.log(`${mag}: ${callback}`);
}
printMag(isEven(3), "Massage");
```
