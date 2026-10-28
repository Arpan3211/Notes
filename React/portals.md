# Portal in React.js


In React, a **portal** is a way to **render a component outside of its parent DOM hierarchy**, while still keeping it part of the React component tree.

---

## Why Portals Exist?

Normally, React renders components inside their parent element. But sometimes, you need to render something **outside the parent’s DOM**, for example:

### Use cases:

- Modals / Dialogs
- Tooltips
- Dropdowns
- Toasts / Notifications

Why? Because these elements:

- Should appear **above everything else**
- Might get hidden due to **`overflow: hidden`**, **z-index**, or **CSS stacking context**
- Need to **break out of nested containers**

---

## What is a Portal?

A **React portal** lets you render children into a **different part of the DOM**, outside the current component hierarchy.

### Syntax:

```jsx
ReactDOM.createPortal(child, container);
```

---

## How to Use It

### Step-by-Step Example: A Modal with a Portal

### 1. Create a DOM node in `public/index.html`

```html
<!-- inside index.html -->
<body>
  <div id="root"></div>
  <div id="modal-root"></div>
  <!-- Portal will render here -->
</body>
```

---

### 2. Create the Portal Component

```jsx
// Modal.js
import React from "react";
import ReactDOM from "react-dom";

export default function Modal({ children }) {
  return ReactDOM.createPortal(
    <div className="modal">{children}</div>,
    document.getElementById("modal-root") //  outside #root!
  );
}
```

---

### 3. Use it in Your App

```jsx
// App.js
import React, { useState } from "react";
import Modal from "./Modal";

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)}>Open Modal</button>

      {showModal && (
        <Modal>
          <div className="modal-content">
            <p>This is rendered through a Portal!</p>
            <button onClick={() => setShowModal(false)}>Close</button>
          </div>
        </Modal>
      )}
    </>
  );
}
```

---

## What Happens Under the Hood?

- Even though the `Modal` is declared inside `App`, it renders **outside `#root`**
- It still **has access to props, context, and state**, just like any normal React component

---

## Real Benefits:

| Benefit            | Description                                                      |
| ------------------ | ---------------------------------------------------------------- |
| Layout Freedom     | You can position the portal **anywhere in the DOM** |
| Escapes Boundaries | Useful for content that must **overlay or escape** parent styles |
| Still React        | Fully part of the React tree — not like `document.createElement` |

---

## Summary

| Term            | Meaning                                                                                           |
| --------------- | ------------------------------------------------------------------------------------------------- |
| **Portal** | A way to render a React component **outside the normal DOM tree** using `ReactDOM.createPortal()` |
| **Use Cases** | Modals, tooltips, popovers, dropdowns, toast notifications                                        |
| **Key Benefit** | Renders outside the parent but stays inside React's virtual DOM and context system                |

---

Let me know if you want a working CodeSandbox/CodePen example or a React 18+ version with `createRoot`.


---

## Additional notes: What are Portals in react
_(second copy of this topic, React.md Q17 / REACTJS.md Q12)_


**"Portals in React provide a way to render a child component into a different part of the DOM tree, outside of its parent hierarchy. This is useful for cases where you need to render elements like modals, tooltips, or dropdowns that should visually appear above other components, but you want to maintain the component hierarchy in the React tree."**

### Example

Here's a simple example to illustrate the concept of portals:

```jsx
import React from "react";
import ReactDOM from "react-dom";

// Modal component that uses a portal
const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null; // Don't render if not open

  return ReactDOM.createPortal(
    <div style={modalStyles}>
      <h2>Portal Modal</h2>
      <p>This is a modal rendered using a portal!</p>
      <button onClick={onClose}>Close</button>
    </div>,
    document.getElementById("modal-root") // Render into this DOM node
  );
};

// Styles for the modal (for demonstration)
const modalStyles = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "white",
  padding: "20px",
  zIndex: 1000,
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
};

// Parent component
const App = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  return (
    <div>
      <h1>My Application</h1>
      <button onClick={() => setIsModalOpen(true)}>Open Modal</button>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      {/* Main content here */}
      <div>Some other content...</div>
      {/* Ensure there's a div with id="modal-root" in the HTML file */}
    </div>
  );
};

export default App;
```

### Key Points:

1. **Creating the Modal**: The `Modal` component checks if it's open and then uses `ReactDOM.createPortal()` to render its content in a different part of the DOM (i.e., `modal-root`).
2. **Rendering into the Portal**: The `createPortal` function takes two arguments: the JSX to render and the DOM node to render it into. This allows the modal to be placed outside the parent hierarchy.
3. **Using the Modal**: The `App` component maintains the state of whether the modal is open and can toggle its visibility.

### Conclusion

**"Portals are particularly useful for rendering UI elements that need to visually break out of their parent component’s styling and structure, such as modals, pop-ups, or tooltips, while still maintaining the React component hierarchy."**
