# Debouncing and throttling

> Two ways to limit how often a function runs when an event fires very often (typing, scrolling, resizing).

| | Debounce | Throttle |
|---|---|---|
| Idea | wait until the events **stop**, then run once | run at most **once per interval** while events continue |
| Timing | after the last call + delay | regularly, every `limit` ms |
| Use | search box, auto-save, validate on typing, resize end | scroll, mouse move, resize, drag, button spam |
| Analogy | lift door closes only after nobody enters for 3 s | one bus every 10 minutes |

## Debounce

```js
function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);                              // cancel the previous call
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}

const search = debounce((q) => console.log("search", q), 300);
search("h"); search("he"); search("hel");   // only "hel" runs, 300 ms after the last call
input.addEventListener("input", (e) => search(e.target.value));
```

## Throttle

```js
function throttle(fn, limit) {
  let last = 0;
  return function (...args) {
    const now = Date.now();
    if (now - last >= limit) {
      last = now;
      fn.apply(this, args);
    }
  };
}

window.addEventListener("scroll", throttle(() => console.log("scroll"), 1000));
```

This version runs on the first call and drops calls inside the interval. A trailing-call version also runs the last event after the interval.

## Remember

- Both rely on [closures](closures.md) to keep the timer or last-call time, and on `setTimeout` (see [event loop](event-loop.md)).
- Create the debounced function **once** (not inside a render or handler), or the timer resets each time. In React: `useMemo` / `useCallback` or `useRef`, and clear the timer on unmount (see the React notes).
- Variations: `leading` (run on the first call) and `trailing` (run at the end), `cancel()` and `flush()`. Lodash has `_.debounce` and `_.throttle`.
- `requestAnimationFrame` is a good throttle for visual updates.
