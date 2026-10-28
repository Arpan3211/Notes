# What are the different lifecycle methods


React's component lifecycle methods are categorized into **three main phases**:

1. **Mounting** (when a component is added to the DOM)
2. **Updating** (when a component is updated due to state/props changes)
3. **Unmounting** (when a component is removed from the DOM)

With the introduction of React Hooks, many lifecycle functionalities can now be handled using `useEffect` and other hooks, but lifecycle methods are still relevant for class components.

---

### **1. Mounting**
These methods are called in order when a component is being added to the DOM.

- **`constructor()`**
  - Initializes the state and binds event handlers.
  - Rarely used; modern React encourages the use of `state` as a class property.
  - Do not call `setState()` directly here.

- **`static getDerivedStateFromProps(props, state)`**
  - Invoked before rendering, both during the initial mount and subsequent updates.
  - Updates the state based on changes in props.
  - Should return an object to update the state or `null` to make no changes.

- **`render()`**
  - Required method that defines the structure of the component’s UI.
  - Should be a pure function of props and state.

- **`componentDidMount()`**
  - Invoked after the component is inserted into the DOM.
  - Commonly used for:
    - Fetching data from APIs.
    - Subscribing to events.
    - Starting timers.

---

### **2. Updating**
These methods are called when a component’s props or state changes.

- **`static getDerivedStateFromProps(props, state)`**
  - Same as in the mounting phase.
  - Updates the state based on props changes before re-rendering.

- **`shouldComponentUpdate(nextProps, nextState)`**
  - Controls whether the component should re-render.
  - Returns `true` (default) or `false`.
  - Useful for optimizing performance and preventing unnecessary renders.

- **`render()`**
  - Same as in the mounting phase, but re-invoked during updates.

- **`getSnapshotBeforeUpdate(prevProps, prevState)`**
  - Called before the changes from the virtual DOM are applied to the real DOM.
  - Returns a snapshot object or `null` that can be used in `componentDidUpdate`.

- **`componentDidUpdate(prevProps, prevState, snapshot)`**
  - Invoked after the component has been updated.
  - Commonly used for:
    - Fetching updated data.
    - Reacting to DOM changes based on the previous state or props.
    - Using the snapshot returned from `getSnapshotBeforeUpdate`.

---

### **3. Unmounting**
This method is called when the component is removed from the DOM.

- **`componentWillUnmount()`**
  - Perform cleanup tasks like:
    - Clearing timers.
    - Unsubscribing from events.
    - Cancelling network requests.

---

### **Legacy Lifecycle Methods (Avoid Using)**
These are deprecated and should be avoided in modern React:
- `componentWillMount` (use `constructor` or `componentDidMount` instead)
- `componentWillReceiveProps` (use `static getDerivedStateFromProps` instead)
- `componentWillUpdate` (use `getSnapshotBeforeUpdate` instead)

---

### Example of Lifecycle Methods
```jsx
import React, { Component } from 'react';

class LifecycleExample extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    console.log('Constructor');
  }

  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps');
    return null; // No state update
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate');
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate');
    return null; // No snapshot data
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  render() {
    console.log('Render');
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increment
        </button>
      </div>
    );
  }
}

export default LifecycleExample;
```

---

### React Hooks Equivalent
With hooks, lifecycle functionalities are replaced by the `useEffect` hook:

```jsx
import React, { useState, useEffect } from 'react';

function HooksExample() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Component Mounted');
    return () => {
      console.log('Component Unmounted');
    };
  }, []); // Run only on mount and unmount

  useEffect(() => {
    console.log('Count updated:', count);
  }, [count]); // Run on count change

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default HooksExample;
``` 

### Note on Functional Components

With the introduction of hooks, functional components have largely replaced class components for many use cases, making lifecycle methods less relevant in that context. Instead, you can use `useEffect` to handle side effects in functional components.
