# How the Internet Works


Every time you visit a website, a series of network operations occur in milliseconds. Understanding these steps can help you debug slow page loads and optimize your application.

Step-by-Step Breakdown of a Web Request

**1\. DNS Resolution (Finding the Server’s Address)**

When you enter [www.example.com](http://www.example.com/), your browser first checks its cache to see if it already knows the IP address.

If not, it queries a DNS (Domain Name System) server, which translates [www.example.com](http://www.example.com/) to an IP address like 192.168.1.1.

**2\. Establishing a Connection (TCP Handshake)**

The browser initiates a TCP (Transmission Control Protocol) handshake with the server:

SYN: The client sends a request to start communication.

SYN-ACK: The server acknowledges the request.

ACK: The client confirms, and the connection is established.

**3\. Sending an HTTP Request**

The browser requests the webpage using HTTP or HTTPS.

**4\. Server Processing and Response**

The server processes the request and sends back HTML, CSS, JavaScript, and other assets.

**5\. Rendering the Page**

The browser processes the response and displays the page.
