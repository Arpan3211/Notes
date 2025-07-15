### 1. **Custom Hooks vs. Utility Functions**

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

---

### 2. **Core Principles of React vs. Traditional JavaScript Frameworks**

**Theoretical Explanation:**

- **Declarative UI**: React uses a declarative approach where you describe **what** the UI should look like, not how to manipulate the DOM to achieve that state.
- **Component-Based Architecture**: React apps are built from reusable components that encapsulate logic, styling, and structure, whereas traditional frameworks like jQuery manipulate the DOM directly.
- **Virtual DOM**: React optimizes rendering using the Virtual DOM, making updates efficient by only changing the parts of the real DOM that have actually changed.
- **Unidirectional Data Flow**: React enforces a one-way data flow, which makes state management predictable and easier to debug.

---

### 3. **How to Optimize a React Component for Performance**

**Theoretical Explanation:**
To optimize a React component for performance, you can:

- **Memoization**: Use `React.memo` or `useMemo` to avoid unnecessary re-rendering of components.
- **Lazy Loading**: Use `React.lazy` and `Suspense` to load components only when needed.
- **Code Splitting**: Break your codebase into chunks to load only what is required.
- **Use Proper Keys in Lists**: Ensures efficient DOM updates.
- **Avoid Anonymous Functions**: Avoid creating new instances of functions during re-renders by defining them outside the render.

**Example**:

```js
import React, { useMemo } from "react";

const ExpensiveCalculation = ({ num }) => {
  const expensiveResult = useMemo(() => {
    return calculateExpensiveValue(num); // Assume this is a heavy function
  }, [num]);

  return <div>{expensiveResult}</div>;
};

export default React.memo(ExpensiveCalculation);
```

---

### 4. **React Context API vs. Redux**

**Theoretical Explanation**:

- **Context API**: Best for simpler state management when you need to pass data to deeply nested components. It’s lightweight and doesn’t require external libraries.
- **Redux**: Used for larger applications where state is global and complex. It manages state in a more structured way using actions, reducers, and the store, which provides more control over state mutations and predictable state transitions.

**Example**:

- **Context API**:

  ```js
  const ThemeContext = React.createContext();

  function App() {
    const [theme, setTheme] = useState("dark");

    return (
      <ThemeContext.Provider value={theme}>
        <ChildComponent />
      </ThemeContext.Provider>
    );
  }

  function ChildComponent() {
    const theme = useContext(ThemeContext);
    return <div>Theme is {theme}</div>;
  }
  ```

- **Redux**:
  Redux involves setting up a store, reducers, and actions, which add more structure to global state management but might be overkill for simpler scenarios.

---

### 5. **Handling Asynchronous Actions in Redux (Redux Thunk or Redux Saga)**

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

---

### 6. **Integrating React with RESTful APIs**

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

---

### 7. **Handling Authentication with JWT**

**Theoretical Explanation**:

- JWT is a token-based authentication mechanism where the client receives a token from the server after logging in. The token is sent in the Authorization header of subsequent requests to verify the user's identity.

**Example**:

```js
async function loginUser(credentials) {
  const response = await fetch("/api/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(credentials),
  });
  const { token } = await response.json();
  localStorage.setItem("token", token); // Store token
}

// To authenticate further requests:
async function getUserData() {
  const token = localStorage.getItem("token");
  const response = await fetch("/api/user", {
    headers: { Authorization: `Bearer ${token}` },
  });
  const data = await response.json();
  return data;
}
```

---

### 8. **Common Challenges with REST APIs**

- **Handling errors**: API errors need to be handled properly to avoid crashes.
- **Loading and performance**: Managing loading states and optimizing API calls with caching.
- **Cross-origin requests (CORS)**: You may run into issues with browsers blocking requests to different domains, which requires proper server setup.

---

### 9. **Build Tools (Babel, Webpack, NPM)**

**Theoretical Explanation**:

- **Babel**: Transpiles modern JavaScript into a backward-compatible version for older browsers.
- **Webpack**: Bundles JavaScript modules into a single file and optimizes it for production (e.g., minification, code splitting).
- **NPM**: A package manager to install and manage dependencies.

---

### 10. **Setting Up and Configuring Webpack**

**Theoretical Explanation**:
Webpack is a module bundler that transforms your code and assets into a bundle for the browser.

**Basic Webpack Configuration Example**:

```js
const path = require("path");

module.exports = {
  entry: "./src/index.js", // Entry point
  output: {
    filename: "bundle.js", // Output file
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Transpile JS files
        exclude: /node_modules/,
        use: "babel-loader",
      },
    ],
  },
  mode: "development", // or 'production'
};
```
---



### 11. **Error Boundaries are not natively supported in functional components**

 because React's `componentDidCatch` and `getDerivedStateFromError` lifecycle methods — which power error boundaries — are only available in **class components**.

---

### 🧠 Why is that?

React error boundaries **rely on lifecycle methods** like:

```js
class MyErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    return { hasError: true }; // update state to show fallback UI
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught:", error, errorInfo); // log the error
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>; // fallback UI
    }
    return this.props.children;
  }
}
```

These lifecycle methods **don't exist in functional components**. That's why **you cannot create error boundaries directly with functional components**.

---

### ⚙️ But wait… can you simulate Error Boundaries in functional components?

Yes! But **only by wrapping them** with a class-based error boundary. You can create a **reusable class component** and use it in your functional tree like this:

```jsx
function App() {
  return (
    <ErrorBoundary>
      <YourFunctionalComponent />
    </ErrorBoundary>
  );
}
```

You can also use packages like [`react-error-boundary`](https://github.com/bvaughn/react-error-boundary) by Brian Vaughn, which **provides a hook-based wrapper** to integrate cleanly with functional components.

---

### 📌 Summary:

| Feature                    | Class Component | Functional Component |
| -------------------------- | --------------- | -------------------- |
| `componentDidCatch`        | ✅ Supported     | ❌ Not available      |
| `getDerivedStateFromError` | ✅ Supported     | ❌ Not available      |
| Can be an error boundary?  | ✅ Yes           | ❌ Not directly       |

To use error boundaries in a **fully functional-component-based app**, wrap your components inside a **class-based boundary** or use third-party utilities.

Want me to show you how to create a reusable `ErrorBoundary` wrapper and use it in your functional app?
