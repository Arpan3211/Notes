# What are request headers and response headers? Name some commonly used headers


  

**Request headers** and **response headers** are key-value pairs in HTTP communication that provide additional information about the **request** or **response** between a client (like a browser) and a server.

* * *

### **Request Headers**

Sent **from client to server**, they describe the **request context**, such as content type, authentication, and browser info.

#### Common Request Headers:

| Header | Description |
| ---| --- |
| `Host` | The domain name of the server ([`example.com`](http://example.com)) |
| `User-Agent` | Info about the client (browser, OS, etc.) |
| `Accept` | Types of content the client can handle (e.g., `text/html`, `application/json`) |
| `Authorization` | Credentials for authentication (e.g., `Bearer <token>`) |
| `Content-Type` | Type of data being sent (e.g., `application/json`) |
| `Accept-Encoding` | Compression formats the client supports (`gzip`, `br`) |
| `Cookie` | Sends stored cookies to the server |

* * *

### **Response Headers**

Sent **from server to client**, they give metadata about the **response**, such as content type, caching policies, and cookies.

#### Common Response Headers:

| Header | Description |
| ---| --- |
| `Content-Type` | Format of the returned data (e.g., `application/json`) |
| `Content-Length` | Size of the response body (in bytes) |
| `Set-Cookie` | Used to set cookies in the client |
| `Cache-Control` | Instructions for caching (e.g., `no-cache`, `max-age`) |
| `Access-Control-Allow-Origin` | For CORS — allows cross-origin access |
| `Server` | Info about the web server software |
| `ETag` | Version identifier for caching |

* * *

### Example Interaction:

#### Request:

```http
GET /api/user HTTP/1.1
Host: example.com
Authorization: Bearer abc123
Accept: application/json
```

#### Response:

```http
HTTP/1.1 200 OK
Content-Type: application/json
Set-Cookie: sessionId=xyz456; HttpOnly
Cache-Control: no-store
```

* * *
