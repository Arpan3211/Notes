# Same-origin policy and CORS

> The browser lets a page read data only from its **own origin**. CORS is how a server opts in to sharing with other origins.

## Origin = protocol + host + port

| URL compared with `https://example.com` | Same origin? |
|---|---|
| `https://example.com/page` | yes |
| `http://example.com` | no (protocol) |
| `https://api.example.com` | no (host) |
| `https://example.com:3000` | no (port) |

## What the policy blocks

- Reading responses from another origin with `fetch` / `XMLHttpRequest` (the request is sent, the browser blocks reading the response).
- Reading another origin's DOM in an `<iframe>`, and its cookies and `localStorage`.

Allowed without CORS: loading `<img>`, `<script>`, `<link>`, `<video>` from other origins, and form posts.

## CORS (Cross-Origin Resource Sharing)

The server sends headers that say who may read its response.

| Header | Meaning |
|---|---|
| `Access-Control-Allow-Origin` | allowed origin (`https://app.com` or `*`) |
| `Access-Control-Allow-Methods` | allowed methods (`GET, POST, PUT, DELETE`) |
| `Access-Control-Allow-Headers` | allowed request headers |
| `Access-Control-Allow-Credentials: true` | allow cookies (then `*` is not allowed as the origin) |
| `Access-Control-Max-Age` | how long the preflight result is cached |

### Preflight

For "non-simple" requests (methods like `PUT` / `DELETE`, JSON `Content-Type`, custom headers, credentials) the browser first sends an `OPTIONS` request. If the server approves, the real request follows.

```js
// frontend
fetch("https://api.example.com/data", { headers: { "Content-Type": "application/json" } });

// backend (Express)
const cors = require("cors");
app.use(cors({ origin: "https://myapp.com", credentials: true }));
```

## Fixing CORS errors

- Configure the **server** to send the headers (the real fix).
- In development, use a dev-server proxy (Vite / CRA `proxy`) so requests look same-origin.
- Do not "fix" it with `mode: "no-cors"`: you get an unreadable (opaque) response.

## Remember

- CORS is enforced by the **browser**, not by the server or tools like Postman and curl.
- It protects users' data from other sites, not your API from clients. Use authentication for that.
- Networking details: [Notes/Networking/cors.md](../Networking/cors.md).
