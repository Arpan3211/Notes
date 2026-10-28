# What is CORS (Cross-Origin Resource Sharing)


  

**CORS (Cross-Origin Resource Sharing)** is a security feature implemented by browsers to **restrict** how resources (such as APIs or web fonts) on a web page can be requested from another domain (origin) different from the one that served the web page. CORS defines a way to allow or deny requests from cross-origin domains based on server configuration.

**Origin** is defined as the combination of:

*   **Scheme** (protocol, e.g., `http` or `https`)
*   **Host** (domain, e.g., [`example.com`](http://example.com))
*   **Port** (e.g., `:3000`)

An **origin** is considered different if any of these three components differ.

For example:

*   [`http://example.com`](http://example.com) is a different origin from

[

https://example.com

](https://example.com)

*   *   [`http://example.com`](http://example.com) is different from [`http://api.example.com`](http://api.example.com)
*   [`http://example.com`](http://example.com) is different from [`http://example.com:3000`](http://example.com:3000)

#### Why is CORS Needed?

To prevent malicious websites from making unauthorized requests to another domain, **browsers enforce a Same-Origin Policy (SOP)**. This means that a web page can only make requests to the same origin that served it. CORS is a way to relax this policy safely.

* * *

### **How Does CORS Work?**

1. **Preflight Request**: When making a cross-origin request that might change data (such as a `POST`, `PUT`, or `DELETE` request), the browser sends a **preflight request** using the `OPTIONS` method. This checks if the server allows the actual request.
2. **Preflight Request Example:**

```http
OPTIONS /api/resource HTTP/1.1
Host: api.example.com
Origin: http://example.com
Access-Control-Request-Method: POST
Access-Control-Request-Headers: Content-Type
```

1. **Server Responds to Preflight Request**: The server must respond with appropriate **CORS headers** that specify which origins, methods, and headers are allowed.
2. **Preflight Response Example:**

```http
HTTP/1.1 200 OK
Access-Control-Allow-Origin: http://example.com
Access-Control-Allow-Methods: POST, GET, PUT
Access-Control-Allow-Headers: Content-Type
```

1. This response means:
    *   The request from [`http://example.com`](http://example.com) is allowed.
    *   The methods `POST`, `GET`, and `PUT` are allowed.
    *   The header `Content-Type` is allowed.
2. **Actual Request**: If the preflight is successful, the browser proceeds with the actual request.
3. **Actual Request Example:**

```http
POST /api/resource HTTP/1.1
Host: api.example.com
Origin: http://example.com
Content-Type: application/json
```

1. **Server Responds to Actual Request**: The server responds with the actual data and must include the `Access-Control-Allow-Origin` header to allow the browser to process the response.
2. **Actual Response Example:**

```http
HTTP/1.1 200 OK
Access-Control-Allow-Origin: http://example.com
Content-Type: application/json
```

1. This ensures the browser allows the response to be read by the client-side JavaScript from [`http://example.com`](http://example.com).

* * *

### **CORS Headers Explained**

#### 1\. **Access-Control-Allow-Origin**

*   **Purpose:** Specifies which origin is allowed to access the resource.
*   **Example:**

```awk
Access-Control-Allow-Origin: https://example.com
```

*   This allows requests from
*   You can use `*` to allow any origin:

```yaml
Access-Control-Allow-Origin: *
```

#### 2\. **Access-Control-Allow-Methods**

*   **Purpose:** Lists the allowed HTTP methods (e.g., `GET`, `POST`, `PUT`).
*   **Example:**

```pgsql
Access-Control-Allow-Methods: GET, POST, PUT
```

#### 3\. **Access-Control-Allow-Headers**

*   **Purpose:** Specifies which headers the client is allowed to send.
*   **Example:**

```pgsql
Access-Control-Allow-Headers: Content-Type, Authorization
```

#### 4\. **Access-Control-Allow-Credentials**

*   **Purpose:** Indicates whether the browser should include credentials (like cookies or HTTP authentication) with requests.
*   **Example:**

```yaml
Access-Control-Allow-Credentials: true
```

*   This allows the browser to send cookies with requests if the server explicitly allows it.

#### 5\. **Access-Control-Max-Age**

*   **Purpose:** Specifies how long the preflight request can be cached (in seconds).
*   **Example:**

```yaml
Access-Control-Max-Age: 3600
```

* * *

### **Simple vs. Complex Requests**

#### **Simple Requests:**

A request is considered simple if it meets the following criteria:

*   Uses one of the following methods: `GET`, `POST`, or `HEAD`.
*   Only includes certain headers: `Accept`, `Accept-Language`, `Content-Language`, `Content-Type` (with specific values like `application/x-www-form-urlencoded`, `multipart/form-data`, or `text/plain`).

In the case of **simple requests**, the browser doesn't send a preflight request, but it still checks the CORS headers.

#### **Example of Simple Request:**

```http
GET /api/data HTTP/1.1
Host: api.example.com
Origin: http://example.com
```

#### **Complex Requests:**

A request is complex if it includes:

*   Methods like `PUT`, `DELETE`, or custom methods.
*   Headers not allowed in simple requests (e.g., `Authorization`).

For complex requests, the browser sends a preflight request to check whether the server allows the actual request.

* * *

### **CORS Example Scenario:**

*   **Client (Browser)**: Wants to fetch data from [`http://api.example.com/data`](http://api.example.com/data).
*   **Server (API)**: Hosted on [`http://api.example.com`](http://api.example.com).

**Client Request:**

```http
GET /data HTTP/1.1
Host: api.example.com
Origin: http://mywebsite.com
```

**Server Response (if CORS is allowed):**

```http
HTTP/1.1 200 OK
Access-Control-Allow-Origin: http://mywebsite.com
Content-Type: application/json
```

If the server does not include the appropriate `Access-Control-Allow-Origin` header or restricts the origin, the browser will **block the request** and show a CORS error in the console.

* * *

### **Common CORS Errors:**

1. **No 'Access-Control-Allow-Origin' header**: The server is not sending the `Access-Control-Allow-Origin` header, causing the browser to block the request.
2. **The 'Access-Control-Allow-Origin' header has a value that is not allowed**: The origin in the request is not allowed by the server.
3. **Preflight response is missing**: For complex requests, the server didn’t respond with the required CORS headers.

* * *

### **How to Enable CORS on the Server?**

#### **Node.js Example (using Express):**

```moonscript
const express = require('express');
const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // Allows all origins
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.get('/data', (req, res) => {
  res.json({ message: "Hello, World!" });
});

app.listen(3000, () => console.log('Server running on port 3000'));
```

* * *

### **Conclusion:**

CORS is a crucial security feature that prevents unauthorized cross-origin requests. It ensures that a web application hosted on one domain doesn't access or manipulate data from another domain without permission. Servers must explicitly specify which origins, methods, and headers are allowed to interact with their resources.
