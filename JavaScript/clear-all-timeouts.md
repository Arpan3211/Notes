# Clear all timeouts

> `setTimeout` has no built-in "clear all", so track every timer id yourself.

## Wrap `setTimeout` and keep the ids

```js
class TimeoutManager {
  #ids = new Set();

  set(callback, delay) {
    const id = setTimeout(() => {
      this.#ids.delete(id);   // forget it once it has run
      callback();
    }, delay);
    this.#ids.add(id);
    return id;
  }

  clearAll() {
    this.#ids.forEach(clearTimeout);
    this.#ids.clear();
  }
}

const timers = new TimeoutManager();
timers.set(() => console.log("1"), 1000);
timers.set(() => console.log("2"), 2000);
timers.clearAll();   // nothing is printed
```

## Quick hack (clears every timer)

```js
let id = setTimeout(() => {}, 0);
while (id--) clearTimeout(id);   // ids are increasing numbers in browsers
```

## Remember

- Only timers created through the wrapper are tracked.
- Clear timers when a component unmounts or a page changes (React: return a cleanup from `useEffect`).
- The same idea works for `setInterval` and `clearInterval`.
