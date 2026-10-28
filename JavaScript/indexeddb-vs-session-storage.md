# What is the main difference between IndexedDB and Session Storage


**IndexedDB** and **Session Storage** are both web storage technologies used to store data in the browser, but they serve different purposes and have different capabilities. Here’s a breakdown of their main differences:

#### 1. Purpose

- **IndexedDB**:

  - A low-level API for storing large amounts of structured data, including files and blobs. It is designed for complex applications requiring more storage than what is offered by traditional storage mechanisms. IndexedDB allows for more advanced queries and transactions.

- **Session Storage**:
  - A simpler storage mechanism for storing data in key-value pairs for the duration of the page session. Data in session storage is only accessible during the page session (i.e., as long as the tab or browser window is open) and is cleared when the tab is closed.

#### 2. Data Structure

- **IndexedDB**:

  - Stores data as objects in a database. It supports complex data types, such as arrays and objects, and allows for indexing on object properties for fast retrieval. IndexedDB can handle a significant amount of data, making it suitable for applications like offline data storage.

- **Session Storage**:
  - Stores data as strings in a simple key-value format. You can only store string data, so if you need to store objects, you must serialize them (e.g., using `JSON.stringify()`), and to retrieve them, you need to deserialize (e.g., using `JSON.parse()`).

#### 3. Storage Duration

- **IndexedDB**:

  - Data stored in IndexedDB persists even when the browser is closed and reopened, unless explicitly deleted. It allows for permanent storage until the application removes it or the user clears their browser data.

- **Session Storage**:
  - Data lasts only for the duration of the page session. It is cleared when the tab or window is closed, making it suitable for temporary storage needs during a single session.

#### 4. Capacity

- **IndexedDB**:

  - Can store a significant amount of data (usually several megabytes or more, depending on the browser), making it suitable for larger applications that require extensive data storage.

- **Session Storage**:
  - Typically has a smaller storage limit (usually around 5 to 10 MB), sufficient for lightweight applications but not suitable for large datasets.

#### 5. API Complexity

- **IndexedDB**:

  - Has a more complex API that includes asynchronous operations, transactions, and the ability to create indices for efficient querying. This complexity allows for robust data handling but requires more coding effort.

- **Session Storage**:
  - Offers a simpler API that is easy to use. It allows for straightforward data storage and retrieval with methods like `setItem()`, `getItem()`, and `removeItem()`.

#### Example Usage

#### IndexedDB Example

```javascript
// Open (or create) a database
const request = indexedDB.open("myDatabase", 1);

request.onupgradeneeded = (event) => {
  const db = event.target.result;
  // Create an object store
  const objectStore = db.createObjectStore("myStore", { keyPath: "id" });
};

request.onsuccess = (event) => {
  const db = event.target.result;
  const transaction = db.transaction("myStore", "readwrite");
  const store = transaction.objectStore("myStore");

  // Add data to the store
  store.add({ id: 1, name: "Alice" });
};
```

#### Session Storage Example

```javascript
// Set an item in session storage
sessionStorage.setItem("username", "Alice");

// Get an item from session storage
const username = sessionStorage.getItem("username");
console.log(username); // Outputs: 'Alice'

// Remove an item from session storage
sessionStorage.removeItem("username");
```

#### Summary of Differences

| Feature          | IndexedDB                                 | Session Storage                |
| ---------------- | ----------------------------------------- | ------------------------------ |
| Purpose          | Complex data storage                      | Temporary data storage         |
| Data Structure   | Structured, supports objects and indexing | Simple key-value pairs         |
| Storage Duration | Persists across sessions                  | Cleared when the tab is closed |
| Capacity         | Large (several MBs or more)               | Limited (5-10 MB typically)    |
| API Complexity   | Complex and asynchronous                  | Simple and synchronous         |

#### Conclusion

Choose **IndexedDB** for applications requiring persistent and structured data storage with complex querying capabilities, while **Session Storage** is ideal for temporarily storing lightweight data for the duration of a session. Understanding these differences will help you select the appropriate storage solution based on your application’s needs.
