# What is the differance between the useMemo and useCallback hook


The key difference between `useMemo` and `useCallback` lies in what they are designed to memoize:

### 1. **useMemo:**

- **Purpose**: Memoizes the **result** of a function or computation.
- **Use case**: It’s used when you have an expensive calculation or computation that you only want to perform when certain dependencies change. The result of the computation will be stored (memoized) and reused unless the dependencies change.
- **Returns**: A **value** that you computed.

```js
import React, { useState, useMemo } from "react";

// Expensive calculation function
const calculateTotal = (items) => {
  console.log("Calculating total...");
  return items.reduce((total, item) => total + item.price, 0);
};

const ShoppingCart = () => {
  const [items, setItems] = useState([{ id: 1, name: "Apple", price: 10 }]);

  // Use useMemo to memoize the result of the expensive calculation
  const totalPrice = useMemo(() => calculateTotal(items), [items]);

  const addItem = () => {
    setItems((prevItems) => [
      ...prevItems,
      { id: prevItems.length + 1, name: "Banana", price: 15 },
    ]);
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>
      <h3>Total Price: ${totalPrice}</h3>
      <button onClick={addItem}>Add Item</button>
    </div>
  );
};

export default ShoppingCart;
```

How it works:

- The calculateTotal function is expensive (it could involve heavy computations).

- Without useMemo, this function would run every time the component renders.

- With useMemo, calculateTotal(items) will only be recalculated when the items array changes, improving performance. Otherwise, React uses the memoized total value from the last render.

### 2. **useCallback:**

- **Purpose**: Memoizes a **function** definition.
- **Use case**: It’s useful when you want to pass a stable function reference (the same function reference across renders) to child components or when a function is a dependency of other hooks like `useEffect`, to avoid unnecessary re-executions.
- **Returns**: A **memoized function**.

```js
const memoizedCallback = useCallback(() => {
  doSomething();
}, [dependency]);
```

- In this case, the function `doSomething` will only be recreated if `dependency` changes. Otherwise, it returns the same function reference, preventing unnecessary re-renders or re-calculations in child components.

### Summary:

- **useMemo**: Caches the **result** of a computation.
- **useCallback**: Caches the **function** itself, so it doesn’t change unless its dependencies change.

They are both useful in optimizing performance by avoiding unnecessary recalculations or re-creations in React components.
