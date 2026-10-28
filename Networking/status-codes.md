# What are HTTP status codes? Give examples of common ones


  

**HTTP status codes** are **3-digit numbers** returned by a web server to indicate the **result of a client’s request**. They are grouped into categories based on their first digit:

* * *

### **HTTP Status Code Categories:**

| Code Range | Category | Meaning |
| ---| ---| --- |
| 1xx | Informational | Request received, processing |
| 2xx | Success | Request was successful |
| 3xx | Redirection | Further action needed |
| 4xx | Client Error | Problem with the client’s request |
| 5xx | Server Error | Problem on the server side |

* * *

### **Common HTTP Status Codes**

#### **200 OK**

*   **Meaning:** The request succeeded.
*   **Example:** Successful GET request to `/api/users`.

#### **201 Created**

*   **Meaning:** A new resource was successfully created.
*   **Example:** POST request to `/api/users` created a new user.

#### **204 No Content**

*   **Meaning:** Request succeeded but no content is returned.
*   **Example:** DELETE request completed, no response body.

* * *

### **Client Errors (4xx)**

#### **400 Bad Request**

*   **Meaning:** The request is malformed or missing parameters.
*   **Example:** Sending invalid JSON in a POST body.

#### **401 Unauthorized**

*   **Meaning:** Authentication is required and has failed or is missing.
*   **Example:** Request without valid token.

#### **403 Forbidden**

*   **Meaning:** The client is authenticated but not authorized.
*   **Example:** User tries to delete another user's post.

#### **404 Not Found**

*   **Meaning:** The requested resource doesn't exist.
*   **Example:** GET `/api/users/9999` but user doesn’t exist.

* * *

### **Server Errors (5xx)**

#### **500 Internal Server Error**

*   **Meaning:** A generic server error occurred.
*   **Example:** Unhandled exception in backend logic.

#### **502 Bad Gateway**

*   **Meaning:** Server received an invalid response from upstream.
*   **Example:** Reverse proxy couldn’t connect to backend.

#### **503 Service Unavailable**

*   **Meaning:** Server is down or overloaded.
*   **Example:** Maintenance mode or server crash.

* * *

### Summary Table:

| Code | Meaning | When It Occurs |
| ---| ---| --- |
| 200 | OK | Successful GET or POST |
| 201 | Created | Resource successfully created |
| 400 | Bad Request | Malformed input from client |
| 401 | Unauthorized | Missing or invalid authentication |
| 403 | Forbidden | Access denied |
| 404 | Not Found | Resource does not exist |
| 500 | Internal Server Error | Server crashed or has a bug |

* * *
