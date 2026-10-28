# Interceptors

> A hook that runs **before** a request is sent or **after** a response arrives, so cross-cutting logic lives in one place.

## Axios

```js
import axios from "axios";
const api = axios.create({ baseURL: "https://api.example.com" });

api.interceptors.request.use(
  (config) => {
    config.headers.Authorization = `Bearer ${getToken()}`;   // add auth to every request
    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,                                     // 2xx
  async (error) => {
    if (error.response?.status === 401) await refreshToken(); // e.g. refresh and retry, or logout
    return Promise.reject(error);
  }
);
```

## Uses

| Use | Where |
|---|---|
| Attach auth tokens and common headers | request |
| Show and hide a loading spinner | request and response |
| Global error handling (401, 500, toasts) | response |
| Retry, refresh a token | response |
| Log or transform data | both |

This answers "I have 20 APIs, how do I add headers in one place?": one Axios instance with a request interceptor.

## Other places

- Angular `HttpInterceptor`, `fetch` wrappers, Express middleware (same idea on the server).
- Method wrapper (decorator) as a plain-JavaScript pattern:

```js
function intercept(obj, method, { before, after }) {
  const original = obj[method];
  obj[method] = function (...args) {
    before?.(...args);
    const result = original.apply(this, args);
    after?.(result);
    return result;
  };
}
```

## Remember

- `fetch` has no built-in interceptors: wrap it, or use Axios.
- Always return the `config` (request) or `response` (response), or `Promise.reject(error)`.
- In Axios, request interceptors run in reverse order of registration (last added first), response interceptors in the order added.
