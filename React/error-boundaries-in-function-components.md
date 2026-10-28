# Error Boundaries are not natively supported in functional components


because React's `componentDidCatch` and `getDerivedStateFromError` lifecycle methods — which power error boundaries — are only available in **class components**.

---

### Why is that?

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

### But wait… can you simulate Error Boundaries in functional components?

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

### Summary:

| Feature                    | Class Component | Functional Component |
| -------------------------- | --------------- | -------------------- |
| `componentDidCatch`        | Yes Supported    | No Not available     |
| `getDerivedStateFromError` | Yes Supported    | No Not available     |
| Can be an error boundary?  | Yes          | No Not directly      |

To use error boundaries in a **fully functional-component-based app**, wrap your components inside a **class-based boundary** or use third-party utilities.

Want me to show you how to create a reusable `ErrorBoundary` wrapper and use it in your functional app?

---


---

## Additional notes: Functional components cannot act as Error Boundaries in React
_(second copy of this topic, React.md Q11 / REACTJS.md Q8)_


Functional components cannot act as **Error Boundaries** in React because of how error boundaries are implemented. Error Boundaries rely on two specific lifecycle methods that are only available in **class components**:

1. **`componentDidCatch(error, info)`**: This method is used to catch errors from its child components during rendering, lifecycle methods, and constructors.

2. **`getDerivedStateFromError(error)`**: This method updates the component’s state when an error is thrown, so it can render a fallback UI.

At present, functional components do not have access to these lifecycle methods, which is why they cannot directly serve as Error Boundaries. Although functional components can handle many other tasks using **React Hooks**, there is no hook yet that mimics the behavior of these specific lifecycle methods required for error boundaries.

### Workaround:

You can wrap a functional component with a class-based Error Boundary to achieve a similar result. Here's a typical Error Boundary class:

```jsx
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can log the error or send it to a logging service
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
```

In future React versions, there might be hooks or features that allow functional components to act as error boundaries. But as of now, **class components** are required for this feature.

---

--
