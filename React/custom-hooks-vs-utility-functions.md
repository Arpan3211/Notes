# Custom Hooks vs. Utility Functions


**Theoretical Explanation:**

- **Custom Hooks**: These are functions in React that allow you to reuse stateful logic across components. They utilize React’s hooks (e.g., `useState`, `useEffect`) and maintain React's component lifecycle and state management. Custom hooks encapsulate logic related to React’s component model.
- **Utility Functions**: Pure JavaScript functions that can be used to handle logic outside of React's lifecycle. They do not rely on hooks or React's state management and can be reused in any JavaScript application.

**When to Use**:

- Use **custom hooks** when you want to share reusable logic that interacts with React's component lifecycle.
- Use **utility functions** when your logic is independent of React components.

**Example**:

- **Custom Hook** (fetching data):

  ```js
  import { useState, useEffect } from "react";

  function useFetch(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      async function fetchData() {
        const response = await fetch(url);
        const result = await response.json();
        setData(result);
        setLoading(false);
      }

      fetchData();
    }, [url]);

    return { data, loading };
  }
  ```

- **Utility Function** (pure calculation):

  ```js
  function calculateSum(a, b) {
    return a + b;
  }

  console.log(calculateSum(3, 5)); // 8
  ```
