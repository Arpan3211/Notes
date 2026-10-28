# Browser storage: cookies, localStorage, sessionStorage, IndexedDB

> Four ways to keep data in the browser. Pick by size, lifetime and whether the server needs it.

| | Cookies | localStorage | sessionStorage | IndexedDB |
|---|---|---|---|---|
| Capacity | ~4 KB | ~5 MB | ~5 MB | large (hundreds of MB or more) |
| Lifetime | until `expires` / `max-age` (else session) | until cleared | until the tab closes | until cleared |
| Sent to the server | **yes**, on every request | no | no | no |
| Data | strings | strings | strings | structured objects, files, blobs |
| API | `document.cookie` (awkward) | sync, simple | sync, simple | async, transactions, indexes |
| Shared between tabs | yes | yes (same origin) | no (per tab) | yes (same origin) |
| Readable by JS | yes (unless `HttpOnly`) | yes | yes | yes |

## localStorage and sessionStorage

```js
localStorage.setItem("theme", "dark");
localStorage.getItem("theme");          // "dark"
localStorage.removeItem("theme");
localStorage.setItem("user", JSON.stringify({ name: "A" }));   // objects must be serialised
JSON.parse(localStorage.getItem("user"));
sessionStorage.setItem("step", "2");    // same API, cleared when the tab closes
```

## Cookies

```js
document.cookie = "username=JohnDoe; max-age=3600; path=/; Secure; SameSite=Lax";
document.cookie;   // "username=JohnDoe; other=1"
```

| Attribute | Purpose |
|---|---|
| `expires` / `max-age` | lifetime (none = session cookie) |
| `path`, `domain` | where it is sent |
| `HttpOnly` | JavaScript cannot read it (protects against XSS) |
| `Secure` | only sent over HTTPS |
| `SameSite` (`Strict` / `Lax` / `None`) | limits cross-site sending (CSRF protection) |

Uses: login sessions, preferences, tracking.

## IndexedDB

```js
const req = indexedDB.open("myDatabase", 1);
req.onupgradeneeded = (e) => e.target.result.createObjectStore("myStore", { keyPath: "id" });
req.onsuccess = (e) => {
  const db = e.target.result;
  db.transaction("myStore", "readwrite").objectStore("myStore").add({ id: 1, name: "Alice" });
};
```

Use it for offline apps and large data. Wrappers: `idb`, Dexie.

## Which one?

- Auth session the server needs: cookie (`HttpOnly`, `Secure`).
- Small preferences: `localStorage`.
- Temporary per-tab data: `sessionStorage`.
- Large or structured offline data: IndexedDB.

## Remember

- Never store secrets or tokens in `localStorage` if XSS is a risk.
- `localStorage` blocks the main thread (synchronous), so keep values small.
- Storage is per origin (see [same-origin policy](same-origin-policy.md)).
