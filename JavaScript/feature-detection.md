# Feature detection vs feature inference vs user-agent sniffing

> Three ways to handle browser differences. Prefer feature detection.

| | Feature detection | Feature inference | User-agent (UA) string |
|---|---|---|---|
| Idea | test that the feature exists | assume one feature means another exists | read `navigator.userAgent` to find the browser |
| Reliability | high | low (assumptions fail) | lowest (can be spoofed or change) |
| Maintenance | easy | risky | hard (long lists of patterns) |
| Use | **recommended** | avoid | last resort (analytics, known browser bugs) |

## Feature detection

```js
if ("fetch" in window) {
  fetch("/api/data").then((r) => r.json());
} else {
  const xhr = new XMLHttpRequest();   // fallback
  xhr.open("GET", "/api/data");
  xhr.send();
}

"IntersectionObserver" in window;      // API exists?
typeof Promise !== "undefined";
CSS.supports("display", "grid");       // CSS support
window.matchMedia("(prefers-color-scheme: dark)").matches;
```

Libraries: Modernizr. CSS: `@supports (display: grid) { ... }`.

## Feature inference

```js
if (document.getElementsByTagName) {
  document.querySelectorAll(".x");   // assumes this exists too (may not)
}
```

Unsafe: one feature does not guarantee another.

## UA sniffing

```js
const ua = navigator.userAgent;
if (ua.includes("Firefox")) { /* ... */ }   // brittle: Chrome UA contains "Safari", etc.
```

## Remember

- Detect the feature you use, not the browser.
- Combine with progressive enhancement and polyfills (see [polyfills](Polyfills/array-polyfills.md)).
- Use `caniuse.com` to check support.
