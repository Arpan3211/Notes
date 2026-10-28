# How dose event flow in Javascript


**Explanation**:

Event flow in JavaScript can be understood as the order in which events (like clicks or keyboard presses) are handled by different parts of a web page. There are two main phases: capturing and bubbling.

- Event flow, also known as the event propagation model.
- **`element`**:**addEventListener( eventType, eventHandler, useCapture )**`
- **`eventType`**: The type of the event (e.g., "click", "mouseover").
- **`eventHandler`**: The function to be executed when the event occurs.
- **`useCapture`**: A boolean value indicating whether to use the capturing phase (**`true`**) or the bubbling phase (**`false`**). The default is **`false`**.
- `element.addEventListener("click", eventHandler, true[capturing] or false[bubbling] );`

#### **Capturing Phase**:

- Think of it like a top-down approach. Events start from the highest level in the web page's structure (like the whole page itself) and go down to the specific element where the event happened.
- During the capturing phase, event handlers registered on ancestor elements are triggered before the event reaches the target element.

```jsx
<!DOCTYPE html>
<html>
<head>
    <title>Event Flow Example</title>
</head>
<body>
    <div id="parent">
        <button id="child">Click me!</button>
    </div>
    <script>
        document.getElementById("parent").addEventListener("click", function() {
            alert("Parent Div Clicked!");
        }, true);

        document.getElementById("child").addEventListener("click", function() {
            alert("Button Clicked!");
        }, true);
    </script>
</body>
</html>
```

#### **Bubbling Phase**:

- Think of it as the opposite, a bottom-up approach. Events start from the specific element where the event occurred and then go up through the hierarchy to the highest level (like the whole page).
- During the bubbling phase, event handlers registered on the target element or any of its ancestor elements are triggered in order, starting from the target element and moving up.

```jsx
<!DOCTYPE html>
<html>
<head>
    <title>Event Flow Example</title>
</head>
<body>
    <div id="parent">
        <button id="child">Click me!</button>
    </div>
    <script>
        document.getElementById("parent").addEventListener("click", function() {
            alert("Parent Div Clicked!");
        }, false);

        document.getElementById("child").addEventListener("click", function() {
            alert("Button Clicked!");
        }, false);
    </script>
</body>
</html>
```
