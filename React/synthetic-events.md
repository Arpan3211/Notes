# What Are Synthetic Events in React


**Synthetic Events** in React are **wrappers around the browser’s native events**. They provide a consistent, cross-browser interface to handle events (like clicks, form submissions, key presses, etc.) in React applications.

---

### Why React Uses Synthetic Events

1. **Cross-browser compatibility**
   Different browsers have slightly different implementations of native events. React's SyntheticEvent standardizes these differences.

2. **Performance optimization**
   React uses **event delegation** — all events are attached to a single listener on the root element (`document`), not on each individual DOM node. This reduces memory usage and improves performance.

3. **Pooling** (in older React versions)
   Previously, synthetic events were pooled for performance, meaning the event object was reused. This is no longer the case in modern React (17+), but you may still see references to it in older code.

---

### Example:

```jsx
function MyButton() {
  function handleClick(event) {
    console.log(event); // SyntheticEvent
    console.log(event.nativeEvent); // Native DOM event
  }

  return <button onClick={handleClick}>Click Me</button>;
}
```

- `event` is a **SyntheticEvent**
- `event.nativeEvent` is the **raw native DOM event**

---

### Features of SyntheticEvent:

- Works the same across all browsers
- Has the same interface as the native DOM event, including:

  - `event.preventDefault()`
  - `event.stopPropagation()`
  - `event.target`, `event.type`, etc.

---

### Summary:

| Feature                   | Synthetic Event                         |
| ------------------------- | --------------------------------------- |
| Origin                    | React (wrapper around native DOM event) |
| Cross-browser consistency | Yes                                  |
| Performance optimization  | Yes Event delegation                     |
| Access to native event    | Yes Via `event.nativeEvent`              |

---

Let me know if you want to see how synthetic events behave differently in React vs vanilla JS!
