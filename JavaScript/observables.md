# Observables and RxJS

> An Observable is a **stream of values over time** that you subscribe to. RxJS is the library of Observables and operators for combining them.

## Parts

| Part | Role |
|---|---|
| **Observable** | the source: emits `next(value)`, then `error(err)` or `complete()` |
| **Observer / Subscriber** | the consumer: `{ next, error, complete }` handlers |
| **Subscription** | what `subscribe()` returns, call `unsubscribe()` to stop |
| **Operators** | functions like `map`, `filter`, `switchMap` used inside `pipe()` |
| **Subject** | an Observable that is also an observer, multicasts to many subscribers |

```js
import { Observable, from } from "rxjs";
import { map, filter } from "rxjs/operators";

const numbers$ = new Observable((subscriber) => {
  subscriber.next(1);
  subscriber.next(2);
  subscriber.next(3);
  subscriber.complete();
});

const sub = numbers$.subscribe({
  next: (x) => console.log("value", x),     // 1, 2, 3
  error: (e) => console.error(e),
  complete: () => console.log("done"),
});
sub.unsubscribe();    // always clean up long-lived streams

from([1, 2, 3, 4, 5]).pipe(
  filter((n) => n % 2),        // 1, 3, 5
  map((n) => n * n)            // 1, 9, 25
).subscribe(console.log);
```

## Observable vs Promise

| | Observable | Promise |
|---|---|---|
| Values | many, over time | one |
| Starts | when subscribed (lazy) | immediately |
| Cancel | yes (`unsubscribe`) | no |
| Operators | many (`pipe`) | `then` / `catch` only |
| Sync or async | either | always async |

## Combining streams: `forkJoin`

Waits for all observables to **complete**, then emits their last values together (like `Promise.all`).

```js
import { forkJoin, of } from "rxjs";
import { delay } from "rxjs/operators";

forkJoin({
  user: of("Ann").pipe(delay(1000)),
  posts: of([1, 2]).pipe(delay(2000)),
}).subscribe((r) => console.log(r));   // { user: "Ann", posts: [1, 2] } after 2 s
```

Others: `combineLatest` (latest of each), `merge` (any value), `zip` (pairs), `switchMap` (cancel the previous inner request, good for search-as-you-type).

## Uses

- UI events (typeahead), HTTP calls (Angular `HttpClient`), WebSockets, streaming data.

## Remember

- Nothing runs until you subscribe.
- Unsubscribe in cleanup (Angular `ngOnDestroy`, React `useEffect` return) to avoid memory leaks.
- Convention: end observable names with `$` (`user$`).
