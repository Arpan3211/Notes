# What is the difference between client-side and server-side rendering


  

The difference between **client-side rendering (CSR)** and **server-side rendering (SSR)** lies in **where** the HTML content is generated — in the browser (client) or on the server.

* * *

### **Client-Side Rendering (CSR)**

*   **Definition:** The browser downloads a mostly empty HTML file with JavaScript, then the JavaScript runs and renders the content on the client.
*   **Tools/Libraries:** React (default), Angular, Vue
*   **How it works:**
    1. Browser receives basic HTML.
    2. Downloads JavaScript.
    3. JavaScript renders the page dynamically.
*   **Pros:**
    *   Faster transitions between pages (once loaded).
    *   Rich interactivity and better user experience.
*   **Cons:**
    *   Slower initial page load (especially on slow devices).
    *   Poor SEO unless special techniques like prerendering are used.
*   **Example:**

```xml
<!-- Initial HTML -->
<html>
  <body>
    <div id="app"></div>
    <script src="bundle.js"></script>
  </body>
</html>
```

*   Content inside `#app` is rendered **in the browser**.

* * *

### **Server-Side Rendering (SSR)**

*   **Definition:** The server generates and sends a **fully rendered HTML** page to the client.
*   **Tools/Libraries:** Next.js, Nuxt.js, Express with templating engines
*   **How it works:**
    1. Server processes the request.
    2. Generates the full HTML.
    3. Sends the rendered HTML to the browser.
*   **Pros:**
    *   Faster initial load (especially on slower devices).
    *   Better SEO (search engines see complete HTML).
*   **Cons:**
    *   Slower page transitions (every page load hits the server).
    *   Higher server load.
*   **Example:**

```gherkin
GET /home → Server responds with:
<html>
  <body>
    <h1>Welcome, Arpan!</h1>
  </body>
</html>
```

* * *

### Summary Table:

| Feature | Client-Side Rendering (CSR) | Server-Side Rendering (SSR) |
| ---| ---| --- |
| **Rendering Location** | In the browser | On the server |
| **Initial Load Speed** | Slower | Faster |
| **SEO Friendliness** | Poor (needs workarounds) | Good |
| **Page Transitions** | Fast | Slower (new HTML every time) |
| **Interactivity** | Excellent | Good (requires hydration) |

* * *
