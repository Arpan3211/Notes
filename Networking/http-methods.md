# What are HTTP methods (GET, POST, PUT, DELETE, etc.)? When should each be used


  

HTTP methods define the type of action to be performed on a resource in a web server. Here are the most common ones and when to use each:

* * *

### **GET**

*   **Purpose:** Retrieve data from the server.
*   **Characteristics:**
    *   Safe (does not modify data)
    *   Idempotent (same result no matter how many times it's called)
    *   Can be cached and bookmarked
*   **Example Use:** Fetching user profile data.

* * *

### **POST**

*   **Purpose:** Submit data to the server to create a new resource.
*   **Characteristics:**
    *   Not idempotent
    *   Often used to send form data or upload files
*   **Example Use:** Registering a new user or submitting a comment.

* * *

### **PUT**

*   **Purpose:** Update or replace an existing resource entirely.
*   **Characteristics:**
    *   Idempotent
    *   Requires sending the full updated data
*   **Example Use:** Updating a user's profile information.

* * *

### **PATCH**

*   **Purpose:** Partially update an existing resource.
*   **Characteristics:**
    *   Not necessarily idempotent (but usually treated as such)
    *   Only sends the changes, not the full resource
*   **Example Use:** Updating only the email field in a user profile.

* * *

### **DELETE**

*   **Purpose:** Remove a resource from the server.
*   **Characteristics:**
    *   Idempotent (repeated deletes have the same effect)
    *   Often requires authentication
*   **Example Use:** Deleting a post or account.

* * *

### **OPTIONS**

*   **Purpose:** Describes communication options for the target resource.
*   **Used in:** CORS (Cross-Origin Resource Sharing) preflight requests.

* * *

### Summary Table:

| Method | Action | Idempotent | Typical Use Case |
| ---| ---| ---| --- |
| GET | Read data | Yes | Fetch blog post |
| POST | Create data | No | Submit a form |
| PUT | Replace data | Yes | Update full user profile |
| PATCH | Update part data | Yes/No | Change password |
| DELETE | Delete data | Yes | Remove comment |
| OPTIONS | Fetch options | Yes | Preflight request (CORS) |
