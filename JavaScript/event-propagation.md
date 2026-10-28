# Event Propagation


Event propagation in JavaScript refers to the way events move through the DOM (Document Object Model) hierarchy. It helps you control how events are handled and how they affect different elements in a web page.

##### Phases of Event Propagation

1. **Capturing Phase (Capture Phase):**

   - The event starts from the top of the DOM tree (document) and travels down to the target element.
   - This phase is also known as the capturing phase.

2. **Target Phase:**

   - The event reaches the target element where it was originally triggered.

3. **Bubbling Phase:**
   - The event then bubbles up from the target element back up to the top of the DOM tree.
   - This is known as the bubbling phase.

##### Example to Illustrate Event Propagation

Let's consider a simple HTML structure:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Event Propagation Example</title>
  </head>
  <body>
    <div id="parent">
      <button id="child">Click Me</button>
    </div>
    <script>
      // Event listener for capturing phase
      document.getElementById("parent").addEventListener(
        "click",
        function () {
          console.log("Parent DIV (Capturing)");
        },
        true
      ); // Third argument 'true' indicates capturing phase

      // Event listener for target phase
      document.getElementById("child").addEventListener("click", function () {
        console.log("Child BUTTON (Target)");
      });

      // Event listener for bubbling phase
      document.getElementById("parent").addEventListener("click", function () {
        console.log("Parent DIV (Bubbling)");
      });
    </script>
  </body>
</html>
```

##### Explanation

1. **Capturing Phase:**

   - The `click` event starts at the `document` and travels down to the target (`button`). The first event listener (`Parent DIV (Capturing)`) is set with the `true` argument, so it logs its message during the capturing phase.

2. **Target Phase:**

   - The event reaches the `button` element, and the second event listener (`Child BUTTON (Target)`) logs its message.

3. **Bubbling Phase:**
   - The event bubbles up from the `button` element to the `div`, and the third event listener (`Parent DIV (Bubbling)`) logs its message.

##### Output in Console:

```
Parent DIV (Capturing)
Child BUTTON (Target)
Parent DIV (Bubbling)
```

##### Key Points

- **Capturing Phase**: Use the third argument in `addEventListener` as `true` to handle events during the capturing phase.
- **Bubbling Phase**: By default, event listeners handle events during the bubbling phase if the third argument is omitted or set to `false`.

#### Event Propagation Control

You can control the propagation of events using `event.stopPropagation()` to prevent further propagation in both capturing and bubbling phases.

**Example:**

```javascript
document.getElementById("child").addEventListener("click", function (event) {
  console.log("Child BUTTON (Target)");
  event.stopPropagation(); // Stops the event from bubbling up
});
```

In this case, the bubbling phase will not occur after clicking the button, and the console will only show:

```
Child BUTTON (Target)
```

Understanding event propagation helps you manage event handling efficiently and control how events interact with different elements in your web application.
