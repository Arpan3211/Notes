# Event propagation (event flow)

> When an event happens on an element, it travels through the DOM tree in three phases: **capturing, target, bubbling**.

## Phases

1. **Capturing**: from `window` / `document` down to the target's parent.
2. **Target**: the element that was actually clicked.
3. **Bubbling**: from the target back up to `document`.

```js
// addEventListener(type, handler, useCapture)   // third argument: true = capture, false (default) = bubble
parent.addEventListener("click", () => console.log("parent (capturing)"), true);
child.addEventListener("click", () => console.log("child (target)"));
parent.addEventListener("click", () => console.log("parent (bubbling)"));

// click the child:
// parent (capturing)
// child (target)
// parent (bubbling)
```

By default handlers run in the **bubbling** phase. Some events do not bubble (`focus`, `blur`, `mouseenter`, `load`).

## Controlling the flow

| Call | Effect |
|---|---|
| `event.stopPropagation()` | stops the event moving to other elements |
| `event.stopImmediatePropagation()` | also stops other handlers on the same element |
| `event.preventDefault()` | stops the browser's default action (link navigation, form submit). Does **not** stop propagation |

```js
child.addEventListener("click", (e) => {
  e.stopPropagation();   // the parent bubbling handler will not run
});
```

## `target` vs `currentTarget`

- `event.target`: the element that triggered the event (the deepest one).
- `event.currentTarget`: the element the handler is attached to.

## Remember

- Handler options: `{ capture: true, once: true, passive: true }`.
- Bubbling makes [event delegation](event-delegation.md) possible.
- Avoid `stopPropagation` unless needed: it can break other listeners (analytics, dropdowns that close on outside click).
