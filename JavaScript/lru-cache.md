# LRU cache

> A cache with a fixed size that removes the **Least Recently Used** item when it is full. `get` and `put` should both be O(1).

## Simple implementation with `Map`

A `Map` remembers insertion order, so the first key is always the oldest. Re-inserting a key on every use moves it to the "newest" end.

```js
class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = new Map();
  }

  get(key) {
    if (!this.cache.has(key)) return -1;
    const value = this.cache.get(key);
    this.cache.delete(key);        // refresh: remove and re-insert
    this.cache.set(key, value);
    return value;
  }

  put(key, value) {
    if (this.cache.has(key)) this.cache.delete(key);
    else if (this.cache.size === this.capacity) {
      const oldest = this.cache.keys().next().value;   // first key = least recently used
      this.cache.delete(oldest);
    }
    this.cache.set(key, value);
  }
}

const lru = new LRUCache(2);
lru.put(1, 1);
lru.put(2, 2);
lru.get(1);      // 1
lru.put(3, 3);   // evicts key 2
lru.get(2);      // -1
lru.put(4, 4);   // evicts key 1
lru.get(1);      // -1
lru.get(3);      // 3
lru.get(4);      // 4
```

## Classic approach (interviews)

- **Hash map**: key -> node, for O(1) lookup.
- **Doubly linked list**: nodes ordered from most to least recently used. Moving or removing a node is O(1) because you hold the node and its neighbours.
- On `get`/`put`: move the node to the head. When full: drop the node at the tail and delete its key from the map.
- Use dummy head and tail nodes to avoid edge cases, and **move the existing node** instead of creating a new one.

## Remember

- Both operations are O(1).
- Used for browser caches, memoization with a limit (see [memoization](memoization.md)), and database buffers.
- Related policies: LFU (least frequently used), FIFO.
