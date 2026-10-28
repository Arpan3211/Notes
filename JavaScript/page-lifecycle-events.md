# Page lifecycle events

> Events that fire as a page loads and unloads: `DOMContentLoaded`, `load`, `beforeunload`, `unload`.

| Event | Fires when | Target | Use it for |
|---|---|---|---|
| `DOMContentLoaded` | HTML is parsed and the DOM is ready (images, CSS and iframes may still load) | `document` | run setup code that needs the DOM |
| `load` | everything has finished loading (images, styles, iframes) | `window` | code that needs image sizes or all resources |
| `beforeunload` | the user is about to leave (close tab, navigate, refresh) | `window` | warn about unsaved changes |
| `unload` | the page is being unloaded (after `beforeunload`) | `window` | last cleanup (unreliable) |

Order: `DOMContentLoaded` -> `load` -> `beforeunload` -> `unload`.

```js
document.addEventListener("DOMContentLoaded", () => console.log("DOM ready"));
window.addEventListener("load", () => console.log("all resources loaded"));

window.addEventListener("beforeunload", (e) => {
  if (hasUnsavedChanges) {
    e.preventDefault();
    e.returnValue = "";     // some browsers need this to show the confirm dialog
  }
});
```

Browsers show their own generic message in the `beforeunload` dialog.

## Scripts and loading

| Script tag | Behaviour |
|---|---|
| `<script src>` | blocks HTML parsing while it downloads and runs |
| `<script async>` | downloads in parallel, runs as soon as ready (order not guaranteed) |
| `<script defer>` | downloads in parallel, runs after the HTML is parsed, **before** `DOMContentLoaded`, in order |
| `<script type="module">` | deferred by default |

With `defer` or a script at the end of `<body>`, you do not need `DOMContentLoaded`.

## Better than `unload`

`unload` and `beforeunload` are unreliable (mobile, back/forward cache). To send data when the user leaves, use:

```js
document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "hidden") navigator.sendBeacon("/log", data);
});
```

## Remember

- `DOMContentLoaded` is earlier than `load` and is usually what you want.
- `document.readyState`: `loading`, `interactive` (DOM ready), `complete` (load done).
- Event API basics (`addEventListener`, `removeEventListener`, `dispatchEvent`): see [DOM manipulation](dom-manipulation.md).
