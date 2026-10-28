# Link Layer Protocols (Data Link & Physical)


_Deals with data transmission between adjacent network nodes._

| Protocol | Full Form | Description |
| ---| ---| --- |
| **Ethernet** | \-- | Most common LAN protocol for wired communication. |
| **Wi-Fi** | \-- | Wireless LAN protocol (IEEE 802.11). |
| **PPP** | Point-to-Point Protocol | Used for direct connections between two nodes (e.g., modem). |
| **Frame Relay** | \-- | Legacy protocol for WANs. |
| **ATM** | Asynchronous Transfer Mode | High-speed networking protocol for voice and video. |

* * *


## **Bonus – Other Specialized Protocols**

| Protocol | Description |
| ---| --- |
| **BGP** | Border Gateway Protocol – Routes data between large networks (used by ISPs). |
| **OSPF** | Open Shortest Path First – Interior routing protocol for finding the best path. |
| **IS-IS** | Intermediate System to Intermediate System – Alternative to OSPF in large networks. |

* * *

  
  

**HTTP (HyperText Transfer Protocol)** is the foundational protocol used for transmitting data on the web. It defines how messages are formatted and transmitted, and how web servers and browsers should respond to various requests.

* * *

### **How HTTP Works (Step-by-Step):**

1. **Client Sends a Request**:
    *   The user opens a web browser and enters a URL like "[example.com](http://example.com)"
    *   The browser acts as an HTTP client and sends an **HTTP request** to the server that hosts the website.
2. **Server Receives the Request**:
    *   The web server at [`example.com`](http://example.com) receives the request.
    *   It processes the request (e.g., fetching a webpage, image, or data).
3. **Server Sends a Response**:
    *   The server sends back an **HTTP response**, which includes:
        *   A **status code** (e.g., 200 OK, 404 Not Found)
        *   Headers (metadata like content type, caching info)
        *   The actual **content** (HTML, JSON, image, etc.)
4. **Client Renders the Content**:
    *   The browser takes the response and renders the page or handles the data.

* * *

### **Basic HTTP Request Format**:

```http
GET /index.html HTTP/1.1
Host: example.com
```

### **Basic HTTP Response Format**:

```http
HTTP/1.1 200 OK
Content-Type: text/html

<html>...</html>
```

* * *

### **Types of HTTP Methods**:

*   `GET`: Retrieve data
*   `POST`: Submit data
*   `PUT`: Update data
*   `DELETE`: Delete data
*   `PATCH`: Partial update

* * *

### **HTTP vs HTTPS**:

*   `HTTP`: Data is sent in plain text.
*   `HTTPS`: Encrypted using SSL/TLS to secure communication.
