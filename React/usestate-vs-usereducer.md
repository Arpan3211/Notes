# Difference between useState and useReducer;


The difference between `useState` and `useReducer` in React comes down to **how you manage and update component state** — especially when **state becomes complex**.

---

## High-Level Difference:

| Feature        | `useState`                                                                | `useReducer`                                                             |
| -------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| Simplicity     | Simple to use for basic state (booleans, strings, numbers, small objects) | Better for complex state logic (nested updates, multiple conditions)     |
| State update   | Directly using a setter function (`setState(newValue)`)                   | Uses a `dispatch` function with an action object                         |
| Structure      | One-liner per state variable                                              | Centralized logic via a reducer function                                 |
| Readability    | Gets messy with multiple `useState` calls                                 | Cleaner and maintainable when state logic is centralized                 |
| Ideal Use Case | Simple UI interactions like toggles, inputs                               | Forms, multi-step flows, state with dependencies, reducers like in Redux |

---

## `useState` Example (Simple Counter)

```jsx
import React, { useReducer } from "react";

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      if (state.count >= 10) return state; // prevent increment beyond 10
      return { count: state.count + 1 };

    case "DECREMENT":
      if (state.count <= 0) return state; // prevent decrement below 0
      return { count: state.count - 1 };

    case "SPECIAL":
      // handle special logic when count is 4
      return { count: state.count * 2 }; // just an example

    default:
      return state;
  }
}

function ConditionalCounter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleIncrement = () => {
    if (state.count === 4) {
      dispatch({ type: "SPECIAL" }); // trigger custom logic
    } else {
      dispatch({ type: "INCREMENT" });
    }
  };

  const handleDecrement = () => {
    dispatch({ type: "DECREMENT" });
  };

  return (
    <div>
      <h2>Count: {state.count}</h2>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
}

export default ConditionalCounter;
```

### How it works:

- `useState(0)` initializes state to `0`
- `setCount` updates the state directly
- Simple and readable

---

## `useReducer` Example (Same Counter, but scalable)

```jsx
import React, { useReducer } from "react";

// Initial state for form fields and errors
const initialState = {
  values: {
    name: "",
    email: "",
    password: "",
  },
  errors: {},
  touched: {},
  isSubmitting: false,
};

// Validation logic
function validate(values) {
  const errors = {};
  if (!values.name) errors.name = "Name is required";
  if (!values.email) errors.email = "Email is required";
  else if (!/\S+@\S+\.\S+/.test(values.email))
    errors.email = "Email is invalid";
  if (!values.password) errors.password = "Password is required";
  else if (values.password.length < 6)
    errors.password = "Password must be at least 6 characters";
  return errors;
}

// Reducer to manage form state
function formReducer(state, action) {
  switch (action.type) {
    case "CHANGE":
      return {
        ...state,
        values: {
          ...state.values,
          [action.field]: action.value,
        },
      };

    case "BLUR":
      return {
        ...state,
        touched: {
          ...state.touched,
          [action.field]: true,
        },
      };

    case "SET_ERRORS":
      return {
        ...state,
        errors: action.errors,
      };

    case "SUBMIT_START":
      return {
        ...state,
        isSubmitting: true,
      };

    case "SUBMIT_END":
      return {
        ...state,
        isSubmitting: false,
      };

    case "RESET":
      return initialState;

    default:
      return state;
  }
}

export default function ProfessionalForm() {
  const [state, dispatch] = useReducer(formReducer, initialState);
  const { values, errors, touched, isSubmitting } = state;

  const handleChange = (e) => {
    dispatch({ type: "CHANGE", field: e.target.name, value: e.target.value });
  };

  const handleBlur = (e) => {
    dispatch({ type: "BLUR", field: e.target.name });
    const validationErrors = validate(state.values);
    dispatch({ type: "SET_ERRORS", errors: validationErrors });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate(state.values);
    dispatch({ type: "SET_ERRORS", errors: validationErrors });

    if (Object.keys(validationErrors).length === 0) {
      dispatch({ type: "SUBMIT_START" });

      // Simulate API request
      setTimeout(() => {
        alert("Form submitted successfully!");
        dispatch({ type: "SUBMIT_END" });
        dispatch({ type: "RESET" });
      }, 1000);
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div>
        <label>Name:</label>
        <input
          name="name"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {touched.name && errors.name && <span>{errors.name}</span>}
      </div>

      <div>
        <label>Email:</label>
        <input
          name="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {touched.email && errors.email && <span>{errors.email}</span>}
      </div>

      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {touched.password && errors.password && <span>{errors.password}</span>}
      </div>

      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
}
```

### How it works:

- `useReducer` takes a **reducer function** and **initial state**
- `dispatch` sends actions like in Redux (`{ type: 'INCREMENT' }`)
- Reducer decides how to update the state

---

## Complex Example: useState vs useReducer

Let’s say we have a form with **multiple inputs**.

### Using `useState`:

```jsx
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [age, setAge] = useState("");
```

Gets cluttered with many fields.

---

### Using `useReducer`:

```jsx
const initialState = { name: "", email: "", age: "" };

function reducer(state, action) {
  return {
    ...state,
    [action.field]: action.value,
  };
}

function Form() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (e) => {
    dispatch({ field: e.target.name, value: e.target.value });
  };

  return (
    <form>
      <input name="name" value={state.name} onChange={handleChange} />
      <input name="email" value={state.email} onChange={handleChange} />
      <input name="age" value={state.age} onChange={handleChange} />
    </form>
  );
}
```

 Cleaner and **easier to manage** if you scale to many fields.

---

## When to Use Which?

### Use `useState` when:

- You’re dealing with **primitive state** (booleans, strings, numbers)
- State transitions are **simple**
- You want **quick and readable** logic

### Use `useReducer` when:

- State is **complex or interdependent**
- State update logic depends on **previous state**
- You're **tired of passing multiple setters** around
- You want logic similar to **Redux pattern**

---

## Summary:

| Aspect        | `useState`                                         | `useReducer`                                                  |
| ------------- | -------------------------------------------------- | ------------------------------------------------------------- |
| API           | `const [state, setState] = useState(initialValue)` | `const [state, dispatch] = useReducer(reducer, initialState)` |
| State updates | Simple and direct                                  | Via dispatching actions                                       |
| State shape   | Often flat, separate states                        | Centralized, nested or structured                             |
| Best for      | Simpler components                                 | Forms, complex components, logic-heavy components             |

---

Let me know if you want a **custom example based on your own project logic** like form validation, multiple actions, or API loading states.
