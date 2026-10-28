# DOM, events and state practice tasks

> Small tasks by difficulty. Build each one without a library first.

### 1. DOM Manipulation

#### Easy:

1. **Create an Element**: Write a function to dynamically create a button element with specific text and attributes (e.g., class, ID, etc.).
2. **Change Text Content**: Write a function to change the text content of a specific `<div>` when a button is clicked.
3. **Toggle Class**: Implement a function that toggles a CSS class on an element when it's clicked.
4. **Show/Hide an Element**: Write a function to toggle the visibility of an element (e.g., show/hide a modal).
5. **Change Style of an Element**: Write a function to change the background color of a `<div>` when a button is clicked.
6. **Append Child to DOM**: Create a new `<li>` item and append it to an unordered list dynamically.
7. **Delete an Element**: Write a function to remove an element from the DOM when a delete button is clicked.

#### Medium:

1. **Create a Modal**: Build a modal component using vanilla JavaScript that opens when a button is clicked and closes when the user clicks outside the modal.
2. **Create a Tab System**: Build a tab component where clicking on different tabs changes the content displayed.
3. **Dynamic Form Fields**: Write a function to add and remove input fields dynamically to a form.
4. **Image Gallery**: Create a simple image gallery where clicking on a thumbnail changes the main displayed image.
5. **Dropdown Menu**: Create a dropdown menu that shows/hides its contents when clicked.
6. **Drag and Drop**: Implement basic drag-and-drop functionality for moving elements between two sections.
7. **Create an Accordion**: Build an accordion where multiple sections can be expanded or collapsed.

#### Hard:

1. **Virtual DOM Implementation**: Create a basic virtual DOM structure where you can render elements, update properties, and optimize DOM updates.
2. **Infinite Scrolling**: Implement an infinite scrolling feature where more content is loaded as the user scrolls down the page.
3. **DOM Diffing Algorithm**: Write a simple version of the DOM diffing algorithm (used by libraries like React to efficiently update the DOM).
4. **Dynamic Table**: Build a table component that allows sorting, filtering, and paginating the data dynamically.

### 2. Event Handling

#### Easy:

1. **Button Click Event**: Write a function to log a message to the console when a button is clicked.
2. **Mouseover and Mouseout Events**: Change the color of an element when the mouse hovers over it and return it to the original color when the mouse leaves.
3. **Keydown Event**: Implement a function that logs every keypress in a text input field to the console.
4. **Prevent Default Behavior**: Prevent the default form submission and instead log the form data to the console.
5. **Event Delegation**: Implement event delegation by attaching a single click event handler to a parent element that handles clicks on all child buttons.
6. **Double Click Event**: Write a function to change the color of a `<div>` when it is double-clicked.
7. **Submit Event**: Capture the `submit` event of a form and prevent page refresh while handling the form data.

#### Medium:

1. **Throttling Event Listener**: Implement event throttling for a button that can only be clicked once every 2 seconds.
2. **Debounce Search Input**: Implement a search input field with a debounced event listener that only makes an API call after the user stops typing for 500 milliseconds.
3. **Event Propagation**: Demonstrate event bubbling and event capturing by creating a nested structure of clickable elements.
4. **Custom Event Creation**: Create and dispatch a custom event that triggers an alert when the event is fired.
5. **Keyboard Navigation**: Implement keyboard navigation in a list where up/down arrow keys navigate through the list items.
6. **Preventing Multiple Submissions**: Disable a submit button for 5 seconds after the first click to prevent multiple submissions.
7. **Context Menu**: Create a custom context menu (right-click menu) that appears when the user right-clicks on a specific element.

#### Hard:

1. **Global Event Bus**: Implement a basic global event bus that can be used to publish and subscribe to events across different components (without any external libraries).
2. **Custom Drag and Drop Event**: Implement drag and drop functionality from scratch using `mousedown`, `mousemove`, and `mouseup` events.
3. **Event-Based Animation**: Create a custom animation that starts when the user clicks on an element and moves it across the screen.
4. **Real-time Collaborative Typing**: Simulate real-time collaborative typing where multiple users typing into the same text box trigger a UI update using events.

### 3. State Management (React or JavaScript)

#### Easy:

1. **Counter Component**: Implement a simple counter with increment, decrement, and reset buttons.
2. **Toggle Boolean State**: Write a toggle button component that switches between “on” and “off” states.
3. **Input Field State**: Create an input field that updates its value in the component’s state every time the user types.
4. **Form Validation**: Create a basic form with two fields and validate if both fields are filled in before enabling the submit button.
5. **Multiple State Fields**: Implement a component with multiple pieces of state (e.g., first name, last name, email) and display the values dynamically.
6. **Conditional Rendering**: Implement a component that conditionally renders content based on the current state (e.g., login/logout states).
7. **Checkbox List with State**: Build a list of checkboxes that, when checked or unchecked, update the component’s state.

#### Medium:

1. **Tabs with State**: Create a tab navigation component where each tab shows different content and maintains the active tab in state.
2. **Form State Management**: Build a multi-step form where each step has its own piece of state, and you can navigate between steps.
3. **Local Storage State Persistence**: Implement state persistence using `localStorage`, so that the state remains after a page reload.
4. **Search Filter with State**: Implement a search box that filters and displays results from a list based on the user’s input, all managed via state.
5. **To-Do List with State**: Build a simple to-do list application where you can add, mark as complete, and delete tasks, all managed via state.
6. **Modal with State**: Implement a modal component that opens and closes based on the component’s state.
7. **Shopping Cart State**: Create a shopping cart where adding/removing items updates the total quantity and price in the state.

#### Hard:

1. **Redux-like State Management**: Implement a simplified version of Redux using React’s `useReducer` hook for managing global state in a large application.
2. **State Synchronization Across Components**: Create two or more sibling components that share state between each other using a common parent component.
3. **Optimized State with Context API**: Implement a React app using the Context API to avoid prop drilling for deeply nested components.
4. **Optimistic UI Updates**: Implement optimistic UI updates, where changes are reflected immediately in the UI before an async API call confirms the change.
