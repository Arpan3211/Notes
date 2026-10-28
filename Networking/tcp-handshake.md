# What is a TCP handshake, and why is it important for establishing a connection


  

The **TCP handshake**, also known as the **three-way handshake**, is a process used in the **Transmission Control Protocol (TCP)** to **establish a reliable connection** between a client and a server **before any actual data is transmitted**.

It ensures that:

*   Both parties are **ready** to communicate.
*   The **connection is reliable**, ordered, and error-checked.
*   Each side is aware of the **initial sequence numbers** for data transfer.

* * *

### **Steps of the TCP Three-Way Handshake**

Let’s say a **client** wants to connect to a **server**.

#### **1\. SYN (Synchronize)**

*   The client sends a **SYN** packet to the server.
*   It contains a **sequence number**, say `Seq = X`.
*   This means: _“I want to start a connection, and here’s my initial sequence number.”_

```arduino
Client → Server: SYN, Seq = X
```

#### **2\. SYN-ACK (Synchronize-Acknowledge)**

*   The server receives the SYN and responds with **SYN-ACK**.
*   It acknowledges the client’s sequence number by setting `Ack = X + 1`.
*   The server also sends its own sequence number, say `Seq = Y`.

```arduino
Server → Client: SYN, Seq = Y; ACK, Ack = X+1
```

#### **3\. ACK (Acknowledge)**

*   The client receives the server’s SYN-ACK and responds with an **ACK**.
*   It acknowledges the server’s sequence number by setting `Ack = Y + 1`.

```arduino
Client → Server: ACK, Ack = Y+1
```

* * *

### **Diagram**

```routeros
Client                             Server
  | -------- SYN, Seq=X -------->  |
  | <---- SYN-ACK, Seq=Y, Ack=X+1 |
  | -------- ACK, Ack=Y+1 -------> |
```

After this handshake, the connection is **established**, and both parties can now start sending data.

* * *

### **Why Is the TCP Handshake Important?**

#### 1. **Connection Reliability**

Ensures both client and server agree to start a connection using **agreed-upon sequence numbers**. This allows for **ordered and reliable** data delivery.

#### 2. **Prevents Half-Open Connections**

A connection is only established if both sides complete the handshake. If one side is unreachable, the handshake fails, avoiding confusion or hanging connections.

#### 3. **Sets the Stage for Data Transfer**

The handshake negotiates **sequence numbers** and **window sizes**, essential for **flow control** and **congestion control**.

#### 4. **Enables Attack Detection (e.g., SYN Floods)**

SYN flood attacks exploit the handshake. Firewalls and security systems often monitor incomplete handshakes to detect abuse.

* * *

### **Conclusion**

The **TCP handshake** is a foundational part of how reliable internet communication works. It makes sure that both the client and server are synchronized, ready, and in agreement before exchanging actual data—just like saying “Hello, are you ready to talk?” and getting a “Yes, I am” in return.
