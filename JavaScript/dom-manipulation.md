# DOM: select, change, traverse and handle events

> The DOM (Document Object Model) is the page as a tree of objects. JavaScript reads and changes the page through it.

```html
<div id="parent">
  <p class="child">Child 1</p>
  <p class="child">Child 2</p>
</div>
```

## Select elements

| Method | Returns |
|---|---|
| `getElementById("id")` | one element or `null` |
| `querySelector(css)` | first match or `null` |
| `querySelectorAll(css)` | static `NodeList` (supports `forEach`) |
| `getElementsByClassName` / `getElementsByTagName` | live `HTMLCollection` |

## Change content, attributes, classes, styles

```js
el.textContent = "Safe text";         // plain text (fast, safe)
el.innerHTML = "<b>Bold</b>";         // parses HTML (XSS risk with user input)
el.setAttribute("href", "https://example.com");   el.getAttribute("href");   el.removeAttribute("href");
el.dataset.userId;                    // reads data-user-id

el.classList.add("a");  el.classList.remove("a");  el.classList.toggle("dark");  el.classList.contains("a");
el.style.color = "red";               // inline style (camelCase: fontSize)
getComputedStyle(el).fontSize;        // the final computed value
```

`innerText` is aware of CSS visibility and slower. `textContent` is the safe default.

## Create, insert, remove

```js
const li = document.createElement("li");
li.textContent = "Hello";
list.appendChild(li);            // or list.append(li, "text")
list.prepend(li);
parent.insertBefore(li, ref);
ref.after(li);   ref.before(li);
li.remove();                     // modern way
const copy = li.cloneNode(true); // true = deep copy
```

For many inserts use a `DocumentFragment` and append it once.

## Traverse

| Need | Property |
|---|---|
| parent | `parentElement` |
| children | `children`, `firstElementChild`, `lastElementChild` |
| siblings | `nextElementSibling`, `previousElementSibling` |
| nearest ancestor | `el.closest(selector)` |
| selector check | `el.matches(selector)` |

The `...Node` versions (`childNodes`, `firstChild`, `nextSibling`) also include text and whitespace nodes, so prefer the `...Element` ones.

## Events

```js
function onClick(event) { console.log(event.target); }
btn.addEventListener("click", onClick);
btn.addEventListener("click", onClick, { once: true });   // run one time
btn.removeEventListener("click", onClick);                // needs the same function reference
btn.dispatchEvent(new Event("click"));                    // trigger it from code
btn.dispatchEvent(new CustomEvent("saved", { detail: { id: 1 } }));

form.addEventListener("submit", (e) => {
  e.preventDefault();                  // stop the page reload
  console.log(new FormData(form).get("name"));
});
```

Common events: `click`, `dblclick`, `mouseover`, `keydown`, `input` (every change), `change` (on blur), `submit`, `focus`, `scroll`, `resize`.

Event flow and delegation: [event propagation](event-propagation.md), [event delegation](event-delegation.md).

## Performance

- Cache selectors in variables.
- Batch DOM writes (DocumentFragment, build a string once).
- Do not read layout (`offsetHeight`) between writes: it forces reflow.
- Animate with `requestAnimationFrame` and CSS transforms.

## Remember

- `NodeList` from `querySelectorAll` is static, `HTMLCollection` is live.
- Never put user input in `innerHTML`.
- Add listeners after the DOM is ready (see [page lifecycle events](page-lifecycle-events.md)).
