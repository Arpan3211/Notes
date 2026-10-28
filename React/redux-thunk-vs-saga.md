# Handling Asynchronous Actions in Redux (Redux Thunk or Redux Saga)


**Theoretical Explanation**:

- **Redux Thunk**: A middleware that allows you to write action creators that return a function instead of an action. The function can perform async operations (like API calls) and dispatch other actions based on the result.
- **Redux Saga**: A middleware that listens for actions and performs side effects (like API calls) using `generators`. It’s more powerful and scalable for handling complex async flows.

**Example (Redux Thunk)**:

```js
// action
export const fetchData = () => {
  return async (dispatch) => {
    dispatch({ type: "FETCH_REQUEST" });
    try {
      const response = await fetch("https://api.example.com/data");
      const data = await response.json();
      dispatch({ type: "FETCH_SUCCESS", payload: data });
    } catch (error) {
      dispatch({ type: "FETCH_ERROR", error });
    }
  };
};
```
