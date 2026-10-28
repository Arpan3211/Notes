# How to Optimize a React Component for Performance


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
