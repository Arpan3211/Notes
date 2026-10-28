# What are Error boundaries


### Error Boundaries in React

**Error boundaries** are special React components that catch JavaScript errors in their child component tree, log those errors, and display a fallback UI instead of the component tree that crashed. This helps prevent the entire React app from crashing due to unhandled errors in a specific component.

Error boundaries **only catch errors** that occur during:

- Rendering
- Lifecycle methods
- Constructor of the child components

They **do not catch**:

- Event handler errors (which can be caught using `try/catch` inside the event handler itself)
- Errors in asynchronous code (like `setTimeout`, `setInterval`, or Promises)
- Server-side rendering errors

### Key Features:

- **Graceful degradation**: Error boundaries allow an app to degrade gracefully by showing a fallback UI when an error occurs, instead of crashing the entire app.
- **Component-level error handling**: Error boundaries operate at the component level, meaning they only catch errors within their child components.

### Key Points to Note:

1. **Error boundaries are class components**: Functional components cannot act as error boundaries directly.
2. **They catch render-time errors**: They only catch errors during the rendering phase, lifecycle methods, and constructors of their child components.
3. **Event handler errors are not caught**: You need to use `try/catch` inside event handlers to catch errors.
4. **Use multiple error boundaries**: You can wrap different parts of your app with different error boundaries to prevent an error in one part of the app from affecting the whole app.

### When to Use Error Boundaries:

- To wrap components that are more prone to errors (e.g., third-party libraries).
- Around specific sections of your app, like a part of the UI that displays dynamic content from APIs.
- For handling errors in large components or complex UI structures.

Error boundaries provide a robust way to handle errors and ensure that user experience isn’t broken when something goes wrong in a part of the component tree.

---

### 1. Create the Error Boundary Component

```jsx
import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  // This lifecycle method catches errors in child components
  static getDerivedStateFromError(error) {
    // Update state to indicate an error occurred
    return { hasError: true };
  }

  // You can also log the error to an error reporting service
  componentDidCatch(error, errorInfo) {
    console.error("Error caught by Error Boundary:", error, errorInfo);
    // You can send this error to an external service if needed
  }

  render() {
    if (this.state.hasError) {
      // You can customize this fallback UI
      return <h1>Something went wrong.</h1>;
    }

    // If no error, render children components normally
    return this.props.children;
  }
}

export default ErrorBoundary;
```

### 2. Use the Error Boundary in Your Application

You can now wrap any components that might throw an error with the `ErrorBoundary` component:

```jsx
import React from "react";
import ErrorBoundary from "./ErrorBoundary";
import MyComponent from "./MyComponent";

function App() {
  return (
    <div>
      <ErrorBoundary>
        <MyComponent />
      </ErrorBoundary>
    </div>
  );
}

export default App;
```

### Key Points:

- **`getDerivedStateFromError`**: This method is invoked after an error is thrown by a descendant component. It allows you to update the state so that the next render will show a fallback UI.
- **`componentDidCatch`**: This method is used to perform side effects, like logging the error or sending it to an external service.
