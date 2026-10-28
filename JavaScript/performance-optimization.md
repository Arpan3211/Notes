# Performance optimization (web apps)

> Make pages load faster, respond faster and use fewer resources. Measure first (Lighthouse, DevTools), then fix the biggest problem.

## Load less

| Technique | How |
|---|---|
| Minify + compress | minify JS and CSS, enable gzip or Brotli |
| Remove unused code | [tree shaking](tree-shaking.md), drop unused libraries |
| Code splitting | load routes and big components on demand (`import()`, `React.lazy`) |
| Optimise images | WebP / AVIF, correct size, `srcset`, `loading="lazy"` |
| Fonts | `font-display: swap`, subset, preload the key font |

## Load smarter

| Technique | How |
|---|---|
| Fewer requests | bundle files, inline critical CSS, HTTP/2 multiplexing |
| Caching | `Cache-Control` and `ETag`, hashed file names, service worker |
| CDN | serve static files near the user |
| Script loading | `defer` / `async` (see [page lifecycle](page-lifecycle-events.md)) |
| Resource hints | `preload`, `prefetch`, `preconnect`, `dns-prefetch` |
| Lazy load | images, iframes, below-the-fold content ([Intersection Observer](intersection-observer.md)) |

## Run faster

- Avoid long tasks (>50 ms) on the main thread: split work, use Web Workers or `requestIdleCallback`.
- [Debounce / throttle](debouncing-and-throttling.md) frequent events.
- Avoid layout thrashing: batch DOM reads and writes, use CSS `transform` and `opacity` for animation.
- [Memoize](memoization.md) expensive calculations. Virtualise long lists.
- React: `React.memo`, `useMemo`, `useCallback`, stable keys, avoid needless state.
- Fix memory leaks (see [garbage collection](garbage-collection.md)).

## Backend and network

- Index database queries, avoid N+1 queries, cache with Redis, paginate.
- Use HTTP/2 or HTTP/3, keep payloads small (GraphQL or field selection).

## Core Web Vitals (what to measure)

| Metric | Meaning | Good |
|---|---|---|
| LCP (Largest Contentful Paint) | when the main content shows | under 2.5 s |
| INP (Interaction to Next Paint) | responsiveness to input | under 200 ms |
| CLS (Cumulative Layout Shift) | visual stability | under 0.1 |

Others: TTFB, FCP, TTI. Tools: Lighthouse, WebPageTest, Chrome Performance panel.

## Perceived performance

Skeleton screens, optimistic UI, instant feedback on clicks.

## Remember

- See [critical rendering path](critical-rendering-path.md) for what blocks the first paint.
