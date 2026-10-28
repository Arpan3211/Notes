# Critical rendering path

> The steps the browser takes to turn HTML, CSS and JavaScript into pixels. Shortening it makes the first paint faster.

## Steps

1. **DOM**: parse HTML into the DOM tree.
2. **CSSOM**: parse CSS into the CSSOM tree.
3. **Render tree**: combine DOM and CSSOM (only visible nodes; `display: none` and `<head>` are left out).
4. **Layout (reflow)**: compute the size and position of every box.
5. **Paint**: draw pixels (colours, text, images, shadows).
6. **Composite**: combine layers (GPU) into the final screen.

```text
HTML -> DOM ─┐
              ├─> Render tree -> Layout -> Paint -> Composite
CSS -> CSSOM ┘
```

## What blocks it

| Resource | Effect |
|---|---|
| CSS | **render-blocking**: no paint until the CSSOM is built |
| Synchronous JS | **parser-blocking**: HTML parsing stops while it downloads and runs, and it waits for CSS that is above it |
| Large images and fonts | delay the paint of their area (not first paint of the rest) |

## Reflow vs repaint

- **Reflow (layout)**: geometry changes (width, height, position, adding or removing nodes). Expensive.
- **Repaint**: only looks change (colour, visibility). Cheaper.
- `transform` and `opacity` only need **compositing**: the cheapest, best for animation.

## How to optimise

- Inline small **critical CSS**, load the rest later. Remove unused CSS.
- Use `defer` or `async` for scripts, or put them at the end of `<body>`.
- Preload key resources (`<link rel="preload">`), `preconnect` to other origins.
- Reduce the number and size of critical resources and round trips (HTTP/2, CDN, compression).
- Avoid layout thrashing: group DOM reads, then writes.

## Remember

- Critical resources, critical bytes and critical path length are the three things to reduce.
- See [performance optimization](performance-optimization.md).
