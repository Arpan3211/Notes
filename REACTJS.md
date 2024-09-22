https://github.com/Vasu7389/ReactJs-Interview-Question

https://github.com/learning-zone/react-basics

preparation video for react https://youtu.be/o22KRrxab18?si=ML6haP2M6JRJHCH3

Freecodecamp : https://www.youtube.com/watch?v=XBTJDpT2XaI

---

API stands for Application Programming Interface.

REST API, or Representational State Transfer Application Programming Interface

---

# Q1 **what is lifting state management**

Lifting state involves elevating the management of a component's state to a higher-level component in the hierarchy, usually a common ancestor of the components that need access to the shared state.

- life cycle when we call the API
- what is the difference between async and await

  ### **`async`:**

  - **Purpose:**
    - The **`async`** keyword is used to declare a function as asynchronous. An asynchronous function always returns a promise, and the **`async`** keyword ensures that the function returns a promise implicitly.
  - **Example:**

    ```jsx
    javascriptCopy code
    async function fetchData() {
      // Asynchronous code here
      return 'Data fetched';
    }

    ```

  ### **`await`:**

  - **Purpose:**
    - The **`await`** keyword is used inside an asynchronous function to wait for a promise to resolve. It can only be used within an **`async`** function.
  - **Example:**

    ```jsx
    javascriptCopy code
    async function fetchData() {
      // Asynchronous code here
      const response = await fetch('https://api.example.com/data');
      const data = await response.json();
      return data;
    }

    ```

  - **Use with Promises:**

    - **`await`** can be used with any expression that produces a promise. It pauses the execution of the

    - **`async`** function until the promise is resolved, and then it resumes with the resolved value.

---

# Q2 **What is the purpose of render() in React?**

Render() is required for every React component. It returns a single React element that is the native DOM component's representation. If more than one HTML element needs to be rendered, they must all be contained within one enclosing tag, such as `<form>, <group>, or <div>`. This function must be kept pure, which means it must always return the same result.

---

# Q3 **PUT vs PATCH**

PUT and PATCH are both HTTP methods used for updating resources on the server. The main difference between them
is that PUT is used to replace the entire resource with the new data, while PATCH is used to
update only the parts of the resource that are provided in the request body.

- PUT
  Modifies a resource by sending data that updates the entire resource. PUT can also create a new record if one is not available.
- PATCH
- Modifies a resource by sending partial data that is to be updated without modifying the entire data. PATCH updates a resource without sending the entire body in the request.

PUT is best used when updating or replacing existing data on the server. PATCH is used when updating part of a resource

---

# Q4 **Status code**

1. **2xx Success:**
   - 200 OK
   - 201 Created
   - 204 No Content
2. **3xx Redirection:**
   - 301 Moved Permanently
   - 302 Found (or Moved Temporarily)
   - 304 Not Modified
3. **4xx Client Errors:**
   - 400 Bad Request
   - 401 Unauthorized
   - 403 Forbidden
   - 404 Not Found
   - 405 Method Not Allowed
   - 409 Conflict
   - 410 Gone
4. **5xx Server Errors:**

   - 500 Internal Server Error
   - 502 Bad Gateway
   - 503 Service Unavailable

   ***

---

# Q5 **what is children props**

In React, the **`children`** prop is a special prop that is used to pass components or elements between the opening and closing tags of a component.

```jsx
// Card.js
import React from 'react';

const Card = ({ title, children }) => {
  return (
    <div className="card">
      <h2>{title}</h2>
      <div className="card-content">{children}</div>
    </div>
  );
};

export default Card;
-----------------------------------------------------
// App.js
import React from 'react';
import Card from './Card';

const App = () => {
  return (
    <div>
      <h1>My React App</h1>

      {/* Using the Card component with different content */}
      <Card title="Card 1">
        <p>This is the content of Card 1.</p>
        <button>Click me</button>
      </Card>

      <Card title="Card 2">
        <div>
          <p>Another type of content for Card 2.</p>
          <img src="example.jpg" alt="Example" />
        </div>
      </Card>
    </div>
  );
};

export default App;
```

---

# Q6 **what do you prefer to use functional or class base component**

when i started working with react the class based component was out dated so i started working with functional component directly and functional based component are easy to user compare to class based component becouse it’s a normal functions

and if we use class component in the background the code is converted into functional and then render but if we use functional component the code is directly render without converting the code

---

# Q7 **MVC**

the Model-View-Controller (MVC) pattern and its three main components: Model, View, and Controller.
Mention that in React, while the terminology may not be exactly the same, the principles of managing state, rendering views, and handling logic still apply.

1. **Model in React:**
   - Explain that in React, the "Model" is often represented by the state of components.
   - Components manage their own state using the **`useState`** hook or class state. Mention that for more complex applications, global state management solutions like Redux or React Context might be used for shared state.
2. **View in React:**
   - Discuss that React components serve as the "View" in the application.
   - Components are responsible for rendering the user interface and presenting data to the user.
   - Explain that React components are reusable and can be composed to build complex UIs.
3. **Controller/ViewModel in React:**

   - Highlight that React components also handle the responsibilities of the "Controller" or "ViewModel" to some extent.
   - Business logic, event handling, and user interactions are often implemented within the components.
   - The **`ItemList`** component manages the state (**`items`** and **`totalItems`**) as the "Model."
   - The rendering logic is handled within the same component, acting as the "View."
   - The **`addItem`** and **`removeItem`** functions represent the business logic and user interactions, acting as the "Controller."

   ```jsx
   // Model (Component state)
   import React, { useState } from "react";

   const ItemList = () => {
     const [items, setItems] = useState([]);
     const [totalItems, setTotalItems] = useState(0);

     const addItem = () => {
       setItems([...items, `Item ${items.length + 1}`]);
       setTotalItems(totalItems + 1);
     };

     const removeItem = (index) => {
       const updatedItems = items.filter((_, i) => i !== index);
       setItems(updatedItems);
       setTotalItems(totalItems - 1);
     };

     return (
       <div>
         <button onClick={addItem}>Add Item</button>
         <p>Total Items: {totalItems}</p>
         <ul>
           {items.map((item, index) => (
             <li key={index}>
               {item}
               <button onClick={() => removeItem(index)}>Remove</button>
             </li>
           ))}
         </ul>
       </div>
     );
   };

   export default ItemList;
   ```

---

# Q8 **MVC IN Redux**

### **Model in Redux:**

- In Redux, the global state of the application acts as the "Model."
- The state represents the data and the current state of the application.

### **View in React with Redux:**

- React components serve as the "View" in the application.
- Components render UI based on the state they receive as props and trigger actions in response to user interactions.

### **Controller/ViewModel in Redux:**

- Redux itself, along with middleware such as Thunk or Saga, handles the responsibilities of the "Controller" or "ViewModel."
- Actions, dispatched by components, are intercepted by reducers that specify how the state should change.

- **Example:**

  **Redux Configuration:**

  Create the Redux store, reducers, and actions.

  **actions.js:**

  ```jsx
  // actions.js
  export const ADD_TODO = "ADD_TODO";
  export const REMOVE_TODO = "REMOVE_TODO";

  export const addTodo = (text) => ({
    type: ADD_TODO,
    payload: text,
  });

  export const removeTodo = (id) => ({
    type: REMOVE_TODO,
    payload: id,
  });
  ```

  **reducers.js:**

  ```jsx
  // reducers.js
  import { ADD_TODO, REMOVE_TODO } from "./actions";

  const initialState = {
    todos: [],
  };

  const todoReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_TODO:
        return {
          ...state,
          todos: [...state.todos, { id: Date.now(), text: action.payload }],
        };
      case REMOVE_TODO:
        return {
          ...state,
          todos: state.todos.filter((todo) => todo.id !== action.payload),
        };
      default:
        return state;
    }
  };

  export default todoReducer;
  ```

  **store.js:**

  ```jsx
  // store.js
  import { createStore } from "redux";
  import todoReducer from "./reducers";

  const store = createStore(todoReducer);

  export default store;
  ```

  ### 3. **React Components:**

  Create React components that interact with Redux.

  **TodoList.js:**

  ```jsx
  // TodoList.js
  import React from "react";
  import { useSelector, useDispatch } from "react-redux";
  import { addTodo, removeTodo } from "./actions";

  const TodoList = () => {
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();

    const handleAddTodo = () => {
      const text = prompt("Enter a todo:");
      if (text) {
        dispatch(addTodo(text));
      }
    };

    const handleRemoveTodo = (id) => {
      dispatch(removeTodo(id));
    };

    return (
      <div>
        <button onClick={handleAddTodo}>Add Todo</button>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              {todo.text}
              <button onClick={() => handleRemoveTodo(todo.id)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  export default TodoList;
  ```

  **App.js:**

  ```jsx
  // App.js
  import React from "react";
  import { Provider } from "react-redux";
  import store from "./store";
  import TodoList from "./TodoList";

  const App = () => {
    return (
      <Provider store={store}>
        <div>
          <h1>Todo List App</h1>
          <TodoList />
        </div>
      </Provider>
    );
  };

  export default App;
  ```

  ### 4. **Run the Application:**

  In your main file (e.g., `index.js`), render the `App` component and start the application.

  ```jsx
  // index.js
  import React from "react";
  import ReactDOM from "react-dom";
  import App from "./App";

  ReactDOM.render(<App />, document.getElementById("root"));
  ```

  Now, you have a simple React application with Redux integration using the latest Redux hooks (`useSelector` and `useDispatch`). The `TodoList` component interacts with the Redux store to manage a list of todos.

  In this example:

  - `useSelector` is used to access the state from the Redux store.
  - `useDispatch` is used to dispatch actions to update the state.

  Remember to adapt the example based on your specific application needs and complexity. This example serves as a starting point for understanding how to integrate Redux with React using hooks.

# Q9 **FLUX**

Flux is an application architecture pattern introduced by Facebook to handle the flow of data in a React-based web application.
It's not a library or a framework but rather a set of principles for managing state and data flow in a predictable way.
The primary goal of Flux is to provide a **unidirectional data flow**, making it easier to reason about and debug complex applications.

### Core Concepts of Flux:

1.  **Unidirectional Data Flow:**

- In Flux, data flows in a single direction, ensuring a clear and predictable flow of information. Actions are dispatched from the user interface, processed by stores, and then update the views.

2.  **Actions:**

- Actions are plain JavaScript objects that describe an event or user interaction. They are the only source of data in the application and carry the information needed to perform a change.

3.  **Dispatcher:**

- The Dispatcher is a central hub that receives actions and dispatches them to the registered stores. It ensures that actions are processed in the order they are received and prevents race conditions.

4.  **Stores:**

- Stores contain the application state and logic for handling actions related to that state. Each store registers with the Dispatcher and updates its state in response to dispatched actions.

5.  **Views (React Components):**

- Views, typically represented by React components, observe the state in stores and update their presentation accordingly. When a store updates its state, views re-render to reflect the changes.

### The Flux Data Flow:

1.  **Action Creation:**

- User interactions or events trigger the creation of actions. Actions are simple objects with a type and payload.

2.  **Action Dispatch:**

- Actions are dispatched to the central Dispatcher. The Dispatcher ensures that actions are sent to all registered stores.

3.  **Store Update:**

- Stores listen for actions of interest and update their state based on the action's type and payload. Stores emit a change event after updating.

4.  **View Update:**

- Views (React components) register callbacks with the stores and re-render in response to changes in the store's state.

## Hooks

React Hooks were introduced in React version 16.8.

React Hooks provide a way to use state and other React features in functional components instead of class components.

They offer a more efficient way to handle component logic in React functional component.

- **useState**
  - The **`useState`** hook in React is used to add state to functional components
  ```jsx
  const [state, setState] = useState(initialState);
  ```
  - **`state`**: This is the current state value that we want to manage within our component.
  - **`setState`**: This is a function that we use to update the state.
  - **`initialState`**: This is the initial value of the state.
- **useEffect**

  - the **`useEffect`** hook is used to perform side effects in functional components
  - Side effects can include data fetching, subscriptions, manual DOM manipulations, or any operations that need to occur after the component has rendered.

  ```jsx
  useEffect(() => {
    // Side effect code here

    return () => {
      // Cleanup code (optional)
    };
  }, [dependencies]);
  ```

- **useContext**

  - the **`useContext`** hook is used to consume values from a React context.
  - Context provides a way to share values, such as themes, authentication status, or language preferences, across the component tree without explicitly passing props at each level.
    **Avoids Prop Drilling:**
  - **`useContext`** eliminates the need to pass props through multiple levels of components, making the code more maintainable.
    **Centralized State:**
  - Context provides a centralized way to manage and share state across components.

  ```jsx
  import React, { useContext, createContext, useState } from "react";

  // Step 1: Create a context
  const ThemeContext = createContext();

  // Step 2: Create a provider component
  const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
      setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };

    return (
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        {children}
      </ThemeContext.Provider>
    );
  };

  // Step 3: Use the ThemeProvider to wrap your app
  function App() {
    return (
      <ThemeProvider>
        <ThemedComponent />
      </ThemeProvider>
    );
  }

  // Step 4: Consume the context in any component
  function ThemedComponent() {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
      <div
        style={{
          background: theme === "light" ? "#fff" : "#333",
          color: theme === "light" ? "#333" : "#fff",
        }}
      >
        <p>Current Theme: {theme}</p>
        <button onClick={toggleTheme}>Toggle Theme</button>
      </div>
    );
  }
  ```

- **useReduser**

  - The **`useReducer`** hook in React is used to manage more complex state logic in functional components,

  ```jsx
  const [state, dispatch] = useReducer(reducer, initialState);
  ```

  - **`state`**: The current state value.
  - **`dispatch`**: A function to dispatch actions to update the state.
  - **`reducer`**: A function that specifies how the state should change in response to
  - **`initialState`**: The initial state value.

  ```jsx
  import React, { useReducer } from "react";

  // Step 1: Define the reducer function
  const counterReducer = (state, action) => {
    switch (action.type) {
      case "INCREMENT":
        return { count: state.count + 1 };
      case "DECREMENT":
        return { count: state.count - 1 };
      default:
        return state;
    }
  };

  // Step 2: Use useReducer in your component
  function Counter() {
    // Initializing state with an initial value and the reducer function
    const [state, dispatch] = useReducer(counterReducer, { count: 0 });

    // Event handlers using dispatch to update state
    const handleIncrement = () => dispatch({ type: "INCREMENT" });
    const handleDecrement = () => dispatch({ type: "DECREMENT" });

    return (
      <div>
        <p>Count: {state.count}</p>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
      </div>
    );
  }
  ```

- **useMemo**

  - The **`useMemo`** hook in React is used to memoize the result of expensive computations,
  - preventing unnecessary recalculations and improving performance.
    **Dependency Tracking:**
  - The dependency array ensures that the memoized value is only recalculated when the specified dependencies change

  ```jsx
  const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
  ```

  - **`computeExpensiveValue`**: The function that performs the expensive computation.
  - **`a`** and **`b`**: Dependencies. The memoized value will only be recalculated when these dependencies change.

  ```jsx
  import React, { useState, useMemo } from "react";

  function FactorialCalculator({ number }) {
    // Memoized factorial calculation
    const factorial = useMemo(() => calculateFactorial(number), [number]);

    return (
      <div>
        <p>
          Factorial of {number} is: {factorial}
        </p>
      </div>
    );
  }

  // Function to calculate factorial
  function calculateFactorial(num) {
    console.log(`Calculating factorial of ${num}`);
    if (num <= 1) return 1;
    return num * calculateFactorial(num - 1);
  }

  function App() {
    const [input, setInput] = useState(5);

    return (
      <div>
        <input
          type="number"
          value={input}
          onChange={(e) => setInput(parseInt(e.target.value))}
        />
        <FactorialCalculator number={input} />
      </div>
    );
  }
  ```

- **memo**

  - In React, **`React.memo`** is a higher-order component (HOC) that memoizes the rendering of a functional component
  - It prevents unnecessary re-renders by memoizing the result based on the component's props
  - **Performance Optimization:**
    - **`React.memo`** optimizes the rendering of functional components by memoizing the result and avoiding unnecessary re-renders.
  - **Simplified Rendering Logic:**
    - Developers can focus on the rendering logic of the component without having to worry about unnecessary updates when props don't change.
  - **Easy Integration:**
    - Integrating **`React.memo`** is straightforward and provides an immediate performance boost for certain types of components

  ```jsx
  import React from 'react';

  const UserInfo = ({ name, age }) => {
    console.log(`Rendering UserInfo for ${name}`);
    return (
      <div>
        <p>Name: {name}</p>
        <p>Age: {age}</p>
      </div>
    );
  };
  ---------------------------------------------------
  import React from 'react';

  const UserInfo = React.memo(({ name, age }) => {
    console.log(`Rendering UserInfo for ${name}`);
    return (
      <div>
        <p>Name: {name}</p>
        <p>Age: {age}</p>
      </div>
    );
  });
  ```

- **useCallback**
  - The **`useCallback`** hook in React is used to memoize a callback function, preventing it from being recreated on each render
  - **Optimized Callbacks:**
    - **`useCallback`** optimizes performance by memoizing callback functions, reducing unnecessary re-renders in child components.
  - **Reference Equality:**
    - It's particularly useful when child components rely on reference equality to determine whether a prop has changed.
  - **Dependency Management:**
    - The dependency array allows fine-grained control over when the callback should be recreated, ensuring optimal performance.
  - **Avoiding Unwanted Side Effects:**
    - By preventing unnecessary re-creation of callbacks, **`useCallback`** helps avoid unintended side effects in child components.
- **useRef**

  - The **`useRef`** hook in React is used to create a mutable object that persists across renders. Unlike state, changes to the **`useRef`** value do not trigger re-renders. It is commonly used for accessing and interacting with the DOM, managing mutable values without triggering renders, and persisting values between renders.
  - **Accessing and Modifying DOM Elements:**
    - **`useRef`** is commonly used for accessing and interacting with DOM elements imperatively.
  - **Storing Mutable Values:**
    - It's useful for managing mutable values that don't need to trigger re-renders.
  - **Persisting Values Between Renders:**
    - Values stored in **`useRef`** persist between renders, providing a mechanism for persisting data across renders without triggering component updates.
  - **Avoiding Unnecessary Renders:**
    - Since changes to the **`useRef`** value don't trigger renders, it's suitable for scenarios where you want to avoid unnecessary re-renders.

  ```jsx
  import React, { useRef, useEffect } from "react";

  function InputComponent() {
    // Create a ref to store the input element
    const inputRef = useRef(null);

    useEffect(() => {
      // Focus on the input element when the component mounts
      inputRef.current.focus();
    }, []);

    return (
      <div>
        <label>
          Type something:
          <input type="text" ref={inputRef} />
        </label>
      </div>
    );
  }
  ```

## Higher order component

- what ?
- why ?
- when ?
- how ?

## Life cycle method of components

- **Mounting Lifecycle with 3 phases**
  ### **Mounting Lifecycle**
  1. **constructor()**
     - The constructor is called when a component is being initialized.
     - It is used for setting up the initial state and binding methods.
  2. **static getDerivedStateFromProps(nextProps, nextState)**
     - A static method that is invoked right before calling the render method.
     - It is rarely used but can be useful for setting the state based on props.
  3. **render()**
     - The render method is responsible for rendering the component's UI.
     - It is a pure function that should not modify component state.
  4. **componentDidMount()**
     - Invoked once the component is mounted to the DOM.
     - Ideal for performing side effects like data fetching, subscriptions, or manually modifying the DOM.
  ### **Updating Lifecycle**
  1. **shouldComponentUpdate(nextProps, nextState)**
     - Allows the component to decide whether a re-render is necessary.
     - Returns **`true`** if the component should update, and **`false`** otherwise.
     - Used for performance optimization.
  2. **static getDerivedStateFromProps(nextProps, nextState)**
     - Similar to the mounting phase, it's called right before rendering when an update occurs.
     - Rarely used but can be used for setting the state based on props.
  3. **render()**
     - Re-renders the component's UI.
  4. **componentDidUpdate(prevProps, prevState)**
     - Invoked after the component is updated in the DOM.
     - Useful for performing side effects after a re-render.
  ### **Unmounting Lifecycle**
  1. **componentWillUnmount()**
     - Invoked immediately before a component is unmounted and destroyed.
     - Used for cleanup tasks like canceling network requests or clearing subscriptions.

## State management

- **Stateful vs stateless**
  **Differentiate between stateful and stateless components.**
  | **Stateful components** | **Stateless Component** |
  | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
  | In memory, information about a component's state change is stored. | Calculates the components' internal state. |
  | Have the power to change the state | I don't have the power to change the state. |
  | It contains information about past, current, and potential state changes. | There is no knowledge of previous, current, or potential future state changes. |
  | Stateless components notify them of the state change requirement, and then they send the props down to them. | They treat the props received from Stateful components as callback functions. |
- **controlled and uncontrolled components**
  **What do you know about controlled and uncontrolled components?**
  | **Controlled Components** | **Uncontrolled Components** |
  | ------------------------------------------------------------------------------------------ | ------------------------------------------- |
  | They do not maintain their own state. | They maintain their own state. |
  | The parent component is in control of data. | The DOM is in control of data. |
  | They use props to get the current values and then use callbacks to notify them of changes. | To get their current values, refs are used. |
  **30. What are Higher Order Components(HOC)?**
- state
- props

  - the data flow is unidirectional

  ```jsx
  import React, { useState } from 'react';
  import ChildComponent from './ChildComponent';

  function ParentComponent() {
    const [data, setData] = useState('Initial Data');

    // Callback function to update data in the parent
    const updateData = newData => {
      setData(newData);
    };

    return (
      <div>
        <p>Data in Parent: {data}</p>
        {/* Pass the callback function as a prop to the child */}
        <ChildComponent onUpdateData={updateData} />
      </div>
    );
  }

  export default ParentComponent;
  -----------------------------------------------------------
  import React from 'react';

  function ChildComponent({ onUpdateData }) {
    const handleClick = () => {
      // Trigger the callback function to update data in the parent
      onUpdateData('Updated Data from Child');
    };

    return (
      <div>
        <button onClick={handleClick}>Update Parent Data</button>
      </div>
    );
  }

  export default ChildComponent;
  ```

- pass data from child to parent

  ```jsx
  import React, { useState } from 'react';
  import ChildComponent from './ChildComponent';

  function ParentComponent() {
    const [dataFromChild, setDataFromChild] = useState('');

    // Callback function to receive data from the child
    const receiveDataFromChild = data => {
      setDataFromChild(data);
    };

    return (
      <div>
        <p>Data from Child: {dataFromChild}</p>
        {/* Pass the callback function as a prop to the child */}
        <ChildComponent sendDataToParent={receiveDataFromChild} />
      </div>
    );
  }

  export default ParentComponent;
  ---------------------------------------------------------
  import React from 'react';

  function ChildComponent({ sendDataToParent }) {
    const sendData = () => {
      const data = 'Data from Child';

      // Call the callback function to send data to the parent
      sendDataToParent(data);
    };

    return (
      <div>
        <button onClick={sendData}>Send Data to Parent</button>
      </div>
    );
  }

  export default ChildComponent;
  ```

- Prop drilling
  Prop drilling occurs when you need to pass data through multiple layers of components in order to reach a deeply nested component. It can lead to complex and less maintainable code. Here's an example to illustrate prop drilling:

  ```jsx
  // App.js
  import React, { useState } from "react";
  import ParentComponent from "./ParentComponent";

  const App = () => {
    const [data, setData] = useState("Hello from App Component");

    return (
      <div>
        <h1>App Component</h1>
        <ParentComponent data={data} />
      </div>
    );
  };

  export default App;
  ```

  ```jsx
  // ParentComponent.js
  import React from "react";
  import ChildComponent from "./ChildComponent";

  const ParentComponent = ({ data }) => {
    return (
      <div>
        <h2>Parent Component</h2>
        <ChildComponent data={data} />
      </div>
    );
  };

  export default ParentComponent;
  ```

  ```jsx
  // ChildComponent.js
  import React from "react";
  import GrandChildComponent from "./GrandChildComponent";

  const ChildComponent = ({ data }) => {
    return (
      <div>
        <h3>Child Component</h3>
        <GrandChildComponent data={data} />
      </div>
    );
  };

  export default ChildComponent;
  ```

  ```jsx
  // GrandChildComponent.js
  import React from "react";

  const GrandChildComponent = ({ data }) => {
    return (
      <div>
        <h4>GrandChild Component</h4>
        <p>Data received: {data}</p>
      </div>
    );
  };

  export default GrandChildComponent;
  ```

  In this example:

  - The **`App`** component has a state variable **`data`**, and it renders the **`ParentComponent`**, passing the **`data`** as a prop.
  - The **`ParentComponent`** receives the **`data`** prop and renders the **`ChildComponent`**, passing the **`data`** again.
  - The **`ChildComponent`** receives the **`data`** prop and renders the **`GrandChildComponent`**, passing the **`data`** once more.
  - The **`GrandChildComponent`** finally displays the received **`data`**.

### Redux / zustand / redux toolkit

- how
  Redux is a predictable state container for JavaScript applications, primarily used with React but can be used with any JavaScript framework or library. It helps manage the state of an application in a predictable and centralized manner, making it easier to understand and debug complex applications. Here are some key concepts of Redux:

  1. **Store:**
     - The single source of truth for the state of the entire application.
     - It holds the application state in a plain JavaScript object.
     - State in the Redux store is read-only; the only way to change the state is by emitting an action.
  2. **Actions:**
     - Plain JavaScript objects that represent events in the application.
     - Actions have a **`type`** property that describes the type of action being performed.
     - They may have additional payload data to carry information.
  3. **Reducers:**
     - Functions that specify how the state changes in response to actions.
     - Reducers take the current state and an action as arguments and return a new state.
     - They should be pure functions, meaning they don't modify the state directly and produce the same output for the same input.
  4. **Dispatch:**
     - The only way to trigger a state change in the Redux store.
     - It is a method provided by the store that takes an action and sends it to the reducer.
  5. **Middleware:**
     - Functions that have access to the actions before they reach the reducer.
     - Middleware can intercept, modify, or dispatch additional actions.
     - Examples include logging middleware, async middleware, etc.
  6. **Selectors:**
     - Functions that extract specific pieces of data from the Redux store.
     - They help in decoupling the shape of the state from the components that use it.

  ### **Basic Flow of Redux:**

  1. **Component Dispatches an Action:**
     - A component in your application dispatches an action. For example, a button click might trigger an action.
  2. **Action is Sent to the Reducer:**
     - The action is sent to a reducer. Reducers are responsible for handling different types of actions and updating the state accordingly.
  3. **Reducer Updates the State:**
     - The reducer takes the current state and the action, performs the necessary updates, and returns a new state.
  4. **Store Listens for Changes:**
     - The store is notified of the state change.
  5. **Updated State is Sent to Subscribed Components:**
     - Any components that are subscribed to the store receive the updated state.

  ### **Actions**

  ```jsx
  // actions.js
  export const addTodo = (text) => ({
    type: "ADD_TODO",
    payload: { text },
  });

  export const removeTodo = (id) => ({
    type: "REMOVE_TODO",
    payload: { id },
  });

  export const toggleTodo = (id) => ({
    type: "TOGGLE_TODO",
    payload: { id },
  });

  export const fetchTodos = () => {
    // Simulating an asynchronous API call
    return async (dispatch) => {
      try {
        dispatch({ type: "FETCH_TODOS_REQUEST" });
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos"
        );
        const todos = await response.json();
        dispatch({ type: "FETCH_TODOS_SUCCESS", payload: { todos } });
      } catch (error) {
        dispatch({ type: "FETCH_TODOS_FAILURE", payload: { error } });
      }
    };
  };
  ```

  ### **Reducers**

  ```jsx
  // reducers.js
  const todosReducer = (state = [], action) => {
    switch (action.type) {
      case "ADD_TODO":
        return [
          ...state,
          { id: Date.now(), text: action.payload.text, completed: false },
        ];

      case "REMOVE_TODO":
        return state.filter((todo) => todo.id !== action.payload.id);

      case "TOGGLE_TODO":
        return state.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, completed: !todo.completed }
            : todo
        );

      case "FETCH_TODOS_SUCCESS":
        return action.payload.todos;

      default:
        return state;
    }
  };

  export default todosReducer;
  ```

  ### **Store Configuration**

  ```jsx
  javascriptCopy code
  // store.js
  import { createStore, applyMiddleware } from 'redux';
  import thunkMiddleware from 'redux-thunk'; // Thunk middleware for handling async actions
  import todosReducer from './reducers';

  const store = createStore(todosReducer, applyMiddleware(thunkMiddleware));

  export default store;

  Save to grepper

  ```

  ### **React Components**

  ```jsx
  javascriptCopy code
  // TodoList.js
  import React, { useEffect } from 'react';
  import { useDispatch, useSelector } from 'react-redux';
  import { addTodo, removeTodo, toggleTodo, fetchTodos } from './actions';

  const TodoList = () => {
    const dispatch = useDispatch();
    const todos = useSelector((state) => state);

    useEffect(() => {
      dispatch(fetchTodos());
    }, [dispatch]);

    const handleAddTodo = () => {
      const text = prompt('Enter todo:');
      if (text) {
        dispatch(addTodo(text));
      }
    };

    const handleRemoveTodo = (id) => {
      dispatch(removeTodo(id));
    };

    const handleToggleTodo = (id) => {
      dispatch(toggleTodo(id));
    };

    return (
      <div>
        <h1>Todo List</h1>
        <button onClick={handleAddTodo}>Add Todo</button>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              <span
                style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
                onClick={() => handleToggleTodo(todo.id)}
              >
                {todo.text}
              </span>
              <button onClick={() => handleRemoveTodo(todo.id)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  export default TodoList;

  Save to grepper

  ```

  ### **App Component**

  ```jsx
  javascriptCopy code
  // App.js
  import React from 'react';
  import { Provider } from 'react-redux';
  import store from './store';
  import TodoList from './TodoList';

  const App = () => {
    return (
      <Provider store={store}>
        <div>
          <TodoList />
        </div>
      </Provider>
    );
  };

  export default App;

  Save to grepper

  ```

  This example demonstra

- why
- redux toolkit

  ### **Create Redux Slices**

  ```jsx
  jsxCopy code
  // src/features/todoSlice.js
  import { createSlice } from '@reduxjs/toolkit';

  const todoSlice = createSlice({
    name: 'todos',
    initialState: [],
    reducers: {
      addTodo: (state, action) => {
        state.push({ id: Date.now(), text: action.payload, completed: false });
      },
      removeTodo: (state, action) => {
        return state.filter((todo) => todo.id !== action.payload);
      },
      toggleTodo: (state, action) => {
        const todo = state.find((todo) => todo.id === action.payload);
        if (todo) {
          todo.completed = !todo.completed;
        }
      },
    },
  });

  export const { addTodo, removeTodo, toggleTodo } = todoSlice.actions;
  export default todoSlice.reducer;

  Save to grepper

  ```

  ### **3. Create Redux Store**

  ```jsx
  jsxCopy code
  // src/app/store.js
  import { configureStore } from '@reduxjs/toolkit';
  import todoReducer from '../features/todoSlice';

  export const store = configureStore({
    reducer: {
      todos: todoReducer,
    },
  });

  Save to grepper

  ```

  ### **4. Create Components**

  ```jsx
  jsxCopy code
  // src/components/TodoList.js
  import React from 'react';
  import { useSelector, useDispatch } from 'react-redux';
  import { removeTodo, toggleTodo } from '../features/todoSlice';

  const TodoList = () => {
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();

    return (
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
              onClick={() => dispatch(toggleTodo(todo.id))}
            >
              {todo.text}
            </span>
            <button onClick={() => dispatch(removeTodo(todo.id))}>Remove</button>
          </li>
        ))}
      </ul>
    );
  };

  export default TodoList;

  Save to grepper

  ```

  ```jsx
  jsxCopy code
  // src/components/AddTodo.js
  import React, { useState } from 'react';
  import { useDispatch } from 'react-redux';
  import { addTodo } from '../features/todoSlice';

  const AddTodo = () => {
    const [text, setText] = useState('');
    const dispatch = useDispatch();

    const handleAddTodo = () => {
      if (text.trim() !== '') {
        dispatch(addTodo(text));
        setText('');
      }
    };

    return (
      <div>
        <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
        <button onClick={handleAddTodo}>Add Todo</button>
      </div>
    );
  };

  export default AddTodo;

  Save to grepper

  ```

  ### **5. Integrate Components in App**

  ```jsx
  jsxCopy code
  // src/App.js
  import React from 'react';
  import { Provider } from 'react-redux';
  import { store } from './app/store';
  import TodoList from './components/TodoList';
  import AddTodo from './components/AddTodo';

  const App = () => {
    return (
      <Provider store={store}>
        <div>
          <h1>Redux Toolkit Todo App</h1>
          <AddTodo />
          <TodoList />
        </div>
      </Provider>
    );
  };

  export default App;

  Save to grepper

  ```

  ### **Explanation:**

  - **todoSlice.js:** Defines a Redux slice with actions (**`addTodo`**, **`removeTodo`**, **`toggleTodo`**) and a reducer to manage the state of todos.
  - **store.js:** Configures the Redux store using **`configureStore`** from Redux Toolkit and includes the todo reducer.
  - **TodoList.js:** Uses **`useSelector`** and **`useDispatch`** from React Redux to connect to the Redux store. It displays a list of todos and dispatches actions to remove or toggle todos.
  - **AddTodo.js:** Manages local state for input text and dispatches the **`addTodo`** action when the user clicks the "Add Todo" button.
  - **App.js:** Integrates the **`Provider`** from React Redux to make the Redux store available to all components. It renders **`AddTodo`** and **`TodoList`** components.

## custom hooks

- when ?
- code
  To create a custom hook, you typically follow these conventions:

  1. **Use the `use` prefix:**
     - By convention, custom hooks should start with the word **`use`** to make it clear that they are hooks.
  2. **Encapsulate logic:**
     - The custom hook encapsulates a specific piece of logic or behavior, such as handling state, side effects, or subscriptions.
  3. **Can use existing hooks:**
     - Custom hooks can utilize other React hooks (e.g., **`useState`**, **`useEffect`**, **`useContext`**) to achieve their functionality.
       Here's a simple example of a custom hook that manages a counter:

  ```jsx
  javascriptCopy code
  import { useState } from 'react';

  const useCounter = (initialValue = 0, step = 1) => {
    const [count, setCount] = useState(initialValue);

    const increment = () => {
      setCount(count + step);
    };

    const decrement = () => {
      setCount(count - step);
    };

    return {
      count,
      increment,
      decrement,
    };
  };

  export default useCounter;

  Save to grepper

  ```

  You can then use this custom hook in your functional components:

  ```jsx
  javascriptCopy code
  import React from 'react';
  import useCounter from './useCounter';

  const CounterComponent = () => {
    const { count, increment, decrement } = useCounter();

    return (
      <div>
        <p>Count: {count}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
    );
  };

  export default CounterComponent;

  Save to grepper

  ```

  In this example:

- cleanliness, maintainability, reusability, and readability

  ```jsx
  import { useState, useEffect } from 'react';

  // Define a custom hook for fetching and storing data
  function useDataFetching(url) {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
      async function fetchData() {
        setIsLoading(true);
        setError(null);

        try {
          const response = await fetch(url);
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const result = await response.json();
          setData(result);
        } catch (error) {
          setError(error);
        }

        setIsLoading(false);
      }

      fetchData();
    }, [url]);

    return { data, isLoading, error };
  }

  export default useDataFetching;

  -----------------------------------------
  import React from 'react';
  import useDataFetching from './useDataFetching';

  const DataComponent = () => {
    const { data, loading, error } = useDataFetching('https://api.example.com/data');

    if (loading) {
      return <p>Loading...</p>;
    }

    if (error) {
      return <p>Error: {error}</p>;
    }

    return (
      <div>
        <h2>Data Component</h2>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    );
  };

  export default DataComponent;
  ```

## lazy loading

- code splitting
- chunking
- suspense

## Virtual DOM

- Reconciliation
- React Fiber
  In React v16, Fiber is a new reconciliation engine or reimplementation of the core algorithm. React Fiber's goal is to improve its suitability in areas such as animation, layout, gestures, the ability to pause, abort, or reuse work, and assign priority to different types of updates; and new concurrency primitives.
  React Fiber’s main goal are:
  - The ability to divide interruptible work into manageable chunks.
  - Work in progress can be prioritised, rebased, and reused.
  - To support layout in React, the ability to yield back and forth between parents and children is required.
  - Returning multiple elements from a render().
  - Error boundaries are better supported
- diffing algorithm
- render work

## SSR vs CSR

- Differance
- SEO

## Routing ( RBAC )

- roll base access controller
- react router
- proteacted routes
- query params
- dynamic routing

## Testing

- react testing - unit testing , component testing

## Async Tasks

- API calls - fetch

  ## fetch

  - The **`fetch()`** function is a modern JavaScript API for making network requests,
  - powerful and flexible alternative to the older XMLHttpRequest (XHR) object.
  - **`fetch()`** returns a Promise that resolves to the **`Response`** to that request, whether it is successful or not.
  - **`fetch()`** doesn't reject the Promise for HTTP error status like 404 or 500. Instead, it considers network errors or cross-origin issues as reasons for rejection.

  ```jsx
  // Define the API endpoint for creating a new user
  const apiUrl = "https://api.example.com/users";

  // Define the user data to be sent in the request body
  const userData = {
    username: "john_doe",
    email: "john.doe@example.com",
    password: "securepassword",
  };

  // Define options for the fetch request
  const fetchOptions = {
    method: "POST", // HTTP method
    headers: {
      "Content-Type": "application/json", // Specify content type
      Authorization: "Bearer YOUR_ACCESS_TOKEN", // Include an authentication token
      // Other headers can be added here
    },
    credentials: "include", // Include cookies in the request (if applicable)
    mode: "cors", // Enable cross-origin resource sharing
    body: JSON.stringify(userData), // Convert user data to JSON string and include in the request body
    // Additional options can be included here
  };

  // Use fetch to make the API request
  fetch(apiUrl, fetchOptions)
    .then((response) => {
      // Check if the response status is ok (status code between 200 and 299)
      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }
      // Parse the JSON data from the response
      return response.json();
    })
    .then((data) => {
      // Handle the data
      console.log("User created:", data);
    })
    .catch((error) => {
      // Handle errors
      console.error("Fetch error:", error);
    });
  ```

  ```jsx
  // Define the API endpoint
  const apiUrl = "https://jsonplaceholder.typicode.com/users";

  // Define options for the fetch request
  const fetchOptions = {
    method: "GET", // HTTP method
    headers: {
      "Content-Type": "application/json", // Specify content type if needed
      // Other headers can be added here
    },
    // Additional options like mode, credentials, etc. can be included here
  };

  // Use fetch to make the API request
  fetch(apiUrl, fetchOptions)
    .then((response) => {
      // Check if the response status is ok (status code between 200 and 299)
      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }
      // Parse the JSON data from the response
      return response.json();
    })
    .then((data) => {
      // Handle the data
      console.log("Fetched data:", data);
    })
    .catch((error) => {
      // Handle errors
      console.error("Fetch error:", error);
    });
  ```

- Axios

  - Axios is a popular JavaScript library that simplifies the process of making HTTP requests
  - Axios is built on top of the XMLHttpRequest API (in the browser) and the HTTP module (in Node.js) to provide an easy-to-use interface for handling HTTP requests.
  - Axios uses Promises, making it easy to handle asynchronous operations using **`.then()`** and **`.catch()`**.
  - Axios allows you to make multiple requests concurrently and handle them as a single promise.

  ```jsx
  // Import Axios in your file
  import axios from "axios";

  // Define the API endpoint
  const apiUrl = "https://jsonplaceholder.typicode.com/users";

  // Making a GET request using Axios
  axios
    .get(apiUrl)
    .then((response) => {
      // Handle the successful response
      console.log("Data:", response.data);
    })
    .catch((error) => {
      // Handle any errors that occurred during the request
      console.error("Request failed:", error);
    });
  ```

  ```jsx
  import axios from "axios";

  // Define the API endpoints
  const apiUrl1 = "https://jsonplaceholder.typicode.com/users";
  const apiUrl2 = "https://jsonplaceholder.typicode.com/posts";

  // Making multiple requests concurrently using axios.all()
  axios
    .all([axios.get(apiUrl1), axios.get(apiUrl2)])
    .then(
      axios.spread((response1, response2) => {
        // Handle the responses
        console.log("Data from API 1:", response1.data);
        console.log("Data from API 2:", response2.data);
      })
    )
    .catch((error) => {
      // Handle any errors that occurred during the requests
      console.error("Requests failed:", error);
    });
  ```

- events
- promises
- how useEffect works in depth
- setTimeout , intervels

## Resuability / modularity / Testability / Readable

## Performance

- shimer ui
- lazy loading
- assests/images management optimize
- js , css file optimize
- bundlers
- cdn

## styling

tailwind

styleX

## Accssability

- what is arrow function and how it differ from other function with example
- what are the data types in Js
- what is prop and props destruction
- What are the Major Feature of React.JS?
- Why key parameter is important while using map operation ?
- How to perform synchronous work flow in setState ?
- What are Error boundaries?
- What is difference between Error boundaries and try catch method?
- How do you convert class component into function component and implement all lifecycle method.
- What if don't pass the dependency array in useEffect What will happen?
- How do you make API call from redux?
- How do you define page not found route in react?
- How do you prevent browser back action in react?
- How you navigate programmatically in react?
- Why can’t browsers read JSX?

---

### Possible Assignments

[10 ReactJS Coding Challenge (💥Coding Interview Prep💥)](https://dev.to/frontendengineer/10-reactjs-coding-exercises-with-codepen-exercise-and-solution--22k7)

[30 ReactJS Coding Interview Questions](https://codeinterview.io/blog/reactjs-coding-interview-questions/)

There is a list of possible tasks which the interviewer might ask to code:

- create a counter and increase it by clicking on button
- fetch data from given API and store it in variable
- fetch data from API on the first render of the component
- fetch data from given API when you click a button
- render fetched data to the page as a string
- if the data are Books for example, render only name and author of the book to the page
- transform the properties of a book you have just rendered into separate Book component
- render Book component to the page
- create another component which is a collection of books which contains Book component
- render collection of books component to the page
- give it some styling so it looks nice (usually here the margins/paddings/color or grid/flex would be enough)

Display this data object and create a checkbox and checkbox should select according to isProgramme and when i click on the check box it should be checked or unchecked

```jsx
data = [
{ name : “arpan”,
isprogramme : true
},
{ name : “ayush”,
isprogramme : false
}]
```
