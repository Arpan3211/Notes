# Intersection Observer

> A browser API that tells you when an element enters or leaves the viewport (or another element), without scroll listeners.

```js
const observer = new IntersectionObserver(
  (entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-viewport");
        obs.unobserve(entry.target);          // stop watching once done (lazy load)
      }
    });
  },
  { root: null, rootMargin: "0px", threshold: 0.5 }
);

document.querySelectorAll(".observe-me").forEach((el) => observer.observe(el));
```

## Options

| Option | Meaning |
|---|---|
| `root` | the scrolling ancestor to watch against (`null` = browser viewport) |
| `rootMargin` | margin around the root, like CSS (`"100px"` triggers 100 px early) |
| `threshold` | how much of the target must be visible: `0` any pixel, `0.5` half, `1` all, or an array `[0, 0.5, 1]` |

## Entry properties

`isIntersecting`, `intersectionRatio`, `target`, `boundingClientRect`, `time`.

## Methods

`observe(el)`, `unobserve(el)`, `disconnect()` (stop everything).

## Uses

- **Lazy loading** images and components.
- **Infinite scroll**: observe a sentinel element at the bottom of the list.
- **Animations** or analytics when something becomes visible.
- Sticky header and active nav-link highlighting.

## Why not a scroll event?

`scroll` fires constantly on the main thread and needs `getBoundingClientRect` (forces layout). `IntersectionObserver` is asynchronous and optimised by the browser.

## Remember

- The callback runs asynchronously, not exactly at the pixel boundary.
- Call `unobserve` or `disconnect` to avoid leaks (React: in the `useEffect` cleanup).
- For images, `loading="lazy"` is the simplest lazy load.
