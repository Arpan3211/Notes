# Handling Authentication with JWT


**Theoretical Explanation**:

- JWT is a token-based authentication mechanism where the client receives a token from the server after logging in. The token is sent in the Authorization header of subsequent requests to verify the user's identity.

**Example**:

```js
async function loginUser(credentials) {
  const response = await fetch("/api/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(credentials),
  });
  const { token } = await response.json();
  localStorage.setItem("token", token); // Store token
}

// To authenticate further requests:
async function getUserData() {
  const token = localStorage.getItem("token");
  const response = await fetch("/api/user", {
    headers: { Authorization: `Bearer ${token}` },
  });
  const data = await response.json();
  return data;
}
```
