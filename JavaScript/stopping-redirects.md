# Stopping or preventing a redirect

> Which tool to use depends on what is causing the navigation.

| Cause of navigation | How to stop it |
|---|---|
| Form submit | `event.preventDefault()` in the `submit` handler |
| Link click (`<a>`) | `event.preventDefault()` in the `click` handler |
| Page still loading or navigating | `window.stop()` |
| User leaving (close, refresh, back) | `beforeunload` handler (shows a confirm dialog) |
| You want a new URL without a reload | `history.pushState()` (no navigation happens) |
| Many links at once | one delegated `click` handler on `document` |

```js
// form
form.addEventListener("submit", (e) => {
  e.preventDefault();
  // send the data with fetch instead
});

// link
link.addEventListener("click", (e) => e.preventDefault());

// block all links with one listener
document.addEventListener("click", (e) => {
  const a = e.target.closest("a");
  if (a) e.preventDefault();
});

// warn before leaving
window.addEventListener("beforeunload", (e) => {
  e.preventDefault();
  e.returnValue = "";
});

// change the URL, no reload (single-page apps)
history.pushState({ page: 2 }, "", "/page-2");
window.addEventListener("popstate", (e) => console.log(e.state));

// stop loading
window.stop();
```

## `preventDefault` vs `stopPropagation`

| | `preventDefault()` | `stopPropagation()` |
|---|---|---|
| Stops | the browser's default action (submit, navigation, context menu) | the event travelling to parent or child elements |
| Effect on bubbling | none | stops it |
| Effect on default action | stops it | none |

You may need both. See [event propagation](event-propagation.md).

## What does not work

- You cannot reliably block `window.location = "..."` from JavaScript. `window.location` is not configurable, so `Object.defineProperty(window, "location", ...)` throws or is ignored. Instead, guard the code that sets it.
- A `MutationObserver` watches DOM changes, not URL changes. Use `popstate` / `hashchange` events or the Navigation API for URL changes.

## Remember

- `preventDefault` only works if the event is cancelable (`event.cancelable`).
- `beforeunload` dialogs cannot show a custom message in modern browsers.
