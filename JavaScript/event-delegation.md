# Event delegation

> Put **one** event listener on a parent element and handle events from its children, using event bubbling.

```html
<ul id="categories">
  <li id="laptops">Laptops</li>
  <li id="mobiles">Mobiles</li>
  <li id="shoes">Shoes</li>
</ul>
<div id="output">Selected: none</div>
```

```js
document.getElementById("categories").addEventListener("click", (event) => {
  const li = event.target.closest("li");     // works even if you click a child inside the li
  if (!li) return;
  document.getElementById("output").textContent = "Selected: " + li.textContent;
});
```

## Why use it

| Benefit | Reason |
|---|---|
| Fewer listeners, less memory | one handler instead of one per child |
| Works for elements added later | dynamic lists need no re-binding |
| Simpler cleanup | remove one listener |

## How it works

The click on a child **bubbles** up to the parent. In the parent's handler, `event.target` tells you which child was clicked (see [event propagation](event-propagation.md)).

## Remember

- Use `event.target.closest(selector)` or `matches` to filter the target.
- It does not work for events that do not bubble (`focus`, `blur`, `mouseenter`). Use `focusin` / `focusout` instead.
- If a child calls `stopPropagation()`, the parent never hears the event.
- React uses delegation for its synthetic events.
