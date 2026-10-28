# Integrating React with RESTful APIs


**Theoretical Explanation**:

- You can use the `fetch` API or libraries like `axios` to make HTTP requests to RESTful APIs in React. This typically involves using `useEffect` for side effects and managing the data in `useState`.

**Example**:

```js
import React, { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://api.example.com/data");
      const result = await response.json();
      setData(result);
    }
    fetchData();
  }, []);

  return <div>{data ? JSON.stringify(data) : "Loading..."}</div>;
}
```
