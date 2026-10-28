# What is meant by forward ref


**"Forward refs in React allow components to pass a ref through to one of their children. This is particularly useful when you need to access a DOM element or a child component’s methods from a parent component. By default, function components do not accept refs, so `React.forwardRef` is used to create a wrapper around the function component that can handle refs."**

### Example

Here’s a simple example to illustrate the concept:

```jsx
import React, { useRef, forwardRef } from "react";

// A functional component that accepts a ref
const CustomInput = forwardRef((props, ref) => {
  return <input ref={ref} type="text" placeholder="Type here..." />;
});

// Parent component
const ParentComponent = () => {
  const inputRef = useRef(null);

  const focusInput = () => {
    // Accessing the input element through the ref
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div>
      <CustomInput ref={inputRef} />
      <button onClick={focusInput}>Focus the input</button>
    </div>
  );
};

export default ParentComponent;
```

### Key Points:

1. **Creating the Ref**: In the `ParentComponent`, we create a ref using `useRef` that will point to the input element.
2. **Using `forwardRef`**: The `CustomInput` component uses `React.forwardRef` to accept the ref from its parent and pass it to the actual `<input>` element.
3. **Accessing the Input**: When the button is clicked, it triggers `focusInput`, which uses the ref to focus the input field.

### Conclusion

## **"Forward refs are particularly useful in scenarios like building reusable components or integrating with third-party libraries, where direct access to a child component’s DOM node or methods is necessary."**
