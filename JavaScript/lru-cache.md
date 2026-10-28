# LRU Cache Implementation


An LRU (Least Recently Used) cache is a data structure that evicts the least recently used item when the cache reaches its capacity. It helps optimize the use of limited space by keeping frequently accessed items readily available while discarding less frequently used ones.

#### LRU Cache Implementation

To implement an LRU Cache, you typically use a combination of a doubly linked list and a hash map (or dictionary). The hash map provides fast access to cache items, and the doubly linked list maintains the order of usage.

Here's a simple implementation of an LRU Cache in JavaScript:

```javascript
class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = new Map(); // Hash map for fast access
    this.order = new DoublyLinkedList(); // Doubly linked list for ordering
  }

  get(key) {
    if (this.cache.has(key)) {
      // Move the accessed node to the front (most recently used)
      const node = this.cache.get(key);
      this.order.moveToFront(node);
      return node.value;
    }
    return -1; // Key not found
  }

  put(key, value) {
    if (this.cache.has(key)) {
      // Update the value and move the node to the front
      const node = this.cache.get(key);
      node.value = value;
      this.order.moveToFront(node);
    } else {
      if (this.cache.size === this.capacity) {
        // Remove the least recently used node
        const nodeToRemove = this.order.removeLast();
        this.cache.delete(nodeToRemove.key);
      }
      // Add the new node to the cache and linked list
      const newNode = this.order.addFirst(key, value);
      this.cache.set(key, newNode);
    }
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = new Node(null, null); // Dummy head
    this.tail = new Node(null, null); // Dummy tail
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  addFirst(key, value) {
    const newNode = new Node(key, value);
    newNode.next = this.head.next;
    newNode.prev = this.head;
    this.head.next.prev = newNode;
    this.head.next = newNode;
    return newNode;
  }

  removeLast() {
    if (this.head.next === this.tail) {
      return null; // Empty list
    }
    const lastNode = this.tail.prev;
    this.tail.prev = lastNode.prev;
    lastNode.prev.next = this.tail;
    return lastNode;
  }

  moveToFront(node) {
    // Remove the node from its current position
    node.prev.next = node.next;
    node.next.prev = node.prev;
    // Add the node to the front
    this.addFirst(node.key, node.value);
  }
}

class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

// Example usage:
const lruCache = new LRUCache(2);
lruCache.put(1, 1);
lruCache.put(2, 2);
console.log(lruCache.get(1)); // returns 1
lruCache.put(3, 3); // evicts key 2
console.log(lruCache.get(2)); // returns -1 (not found)
lruCache.put(4, 4); // evicts key 1
console.log(lruCache.get(1)); // returns -1 (not found)
console.log(lruCache.get(3)); // returns 3
console.log(lruCache.get(4)); // returns 4
```

#### Explanation

1. **LRUCache Class:**

   - **Constructor:** Initializes cache capacity, hash map (`this.cache`), and doubly linked list (`this.order`).
   - **get(key):** Retrieves the value for the given key if it exists, and moves the node to the front of the list.
   - **put(key, value):** Updates the value if the key exists; otherwise, adds the new key-value pair. Evicts the least recently used item if the cache is full.

2. **DoublyLinkedList Class:**

   - Manages the order of nodes. It has methods to add nodes to the front, remove nodes from the end, and move nodes to the front.

3. **Node Class:**
   - Represents an individual node in the doubly linked list with key, value, and pointers to the previous and next nodes.

#### Usage

- **`put(key, value)`**: Adds a key-value pair to the cache. If the cache is full, it evicts the least recently used item.
- **`get(key)`**: Retrieves the value for the given key if it exists, and updates its usage position.

This implementation provides O(1) time complexity for both `get` and `put` operations, making it efficient for use in scenarios where frequent access and updates to a limited set of items are required.
