# ClearAllTimeout


To implement a `clearAllTimeout()` function in JavaScript, you need to keep track of all active timeouts that you set using `setTimeout`. The function should then clear all of these timeouts.

Here's a simple implementation that involves keeping track of timeout IDs in an array and providing a method to clear them all:

#### Implementation

```javascript
class TimeoutManager {
  constructor() {
    this.timeouts = [];
  }

  setTimeout(callback, delay) {
    const id = window.setTimeout(() => {
      callback();
      this.removeTimeout(id);
    }, delay);
    this.timeouts.push(id);
    return id;
  }

  clearAllTimeouts() {
    this.timeouts.forEach((id) => clearTimeout(id));
    this.timeouts = [];
  }

  removeTimeout(id) {
    this.timeouts = this.timeouts.filter((timeoutId) => timeoutId !== id);
  }
}

// Usage
const manager = new TimeoutManager();

manager.setTimeout(() => console.log("Timeout 1"), 1000);
manager.setTimeout(() => console.log("Timeout 2"), 2000);
manager.setTimeout(() => console.log("Timeout 3"), 3000);

// Clear all timeouts
manager.clearAllTimeouts();
```

##### Explanation

1. **Class Definition (`TimeoutManager`):**

   - The `TimeoutManager` class maintains an internal list (`timeouts`) of timeout IDs.

2. **`setTimeout` Method:**

   - Wraps the standard `setTimeout` function.
   - Stores the timeout ID in the `timeouts` array.
   - When the timeout completes, it removes the ID from the `timeouts` array.

3. **`clearAllTimeouts` Method:**

   - Iterates through all stored timeout IDs and clears them using `clearTimeout`.
   - Resets the `timeouts` array to an empty state.

4. **`removeTimeout` Method:**
   - Removes a specific timeout ID from the `timeouts` array.

##### Usage

- **Creating Timeouts:**

  - Use `manager.setTimeout()` to set a timeout and track it.

- **Clearing Timeouts:**
  - Call `manager.clearAllTimeouts()` to clear all active timeouts.

##### Notes

- **Scope of Timeouts:**

  - The `TimeoutManager` class tracks timeouts set through its own `setTimeout` method. If you use the global `setTimeout` function directly, those timeouts won’t be tracked.

- **Alternative Implementations:**
  - If you need to clear timeouts from different sources or use `setTimeout` globally, you would need a more complex approach, such as tracking timeouts in a global registry or using other state management techniques.
