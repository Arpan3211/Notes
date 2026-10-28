# Collection Framework in Java


The **Collection Framework** in Java is a set of classes and interfaces that implement commonly used collection data structures, such as lists, sets, and maps. It provides a unified architecture for storing and manipulating groups of objects. The framework is part of the `java.util` package and includes several key interfaces, classes, and algorithms.

### Key Interfaces

1. **Collection**: The root interface in the collection hierarchy. It defines basic operations for all collections.

   - Methods: `add()`, `remove()`, `size()`, `clear()`, etc.

2. **List**: Extends `Collection` and represents an ordered collection that may contain duplicate elements.

   - Implementing classes: `ArrayList`, `LinkedList`, `Vector`, `Stack`.
   - Common methods: `get()`, `set()`, `add()`, `remove()`, `size()`, `contains()`.

3. **Set**: Extends `Collection` and represents an unordered collection that does not allow duplicate elements.

   - Implementing classes: `HashSet`, `LinkedHashSet`, `TreeSet`.
   - Common methods: `add()`, `remove()`, `size()`, `contains()`.

4. **Queue**: Extends `Collection` and represents a collection designed for holding elements before processing. It follows the FIFO (First In, First Out) principle.

   - Implementing classes: `LinkedList`, `PriorityQueue`, `ArrayDeque`.
   - Common methods: `offer()`, `poll()`, `peek()`.

5. **Deque**: Extends `Queue` and represents a double-ended queue. It allows adding and removing elements from both ends.

   - Implementing classes: `ArrayDeque`, `LinkedList`.
   - Common methods: `addFirst()`, `addLast()`, `removeFirst()`, `removeLast()`.

6. **Map**: Represents a collection of key-value pairs. It is not a true subclass of `Collection` but is part of the collection framework.
   - Implementing classes: `HashMap`, `LinkedHashMap`, `TreeMap`, `Hashtable`, `ConcurrentHashMap`.
   - Common methods: `put()`, `get()`, `remove()`, `containsKey()`, `keySet()`.

### Implementing Classes

- **ArrayList**: A resizable array implementation of the `List` interface. It allows fast random access but slow insertion/removal from the middle of the list.
- **LinkedList**: A doubly linked list implementation of the `List` and `Deque` interfaces. It allows fast insertions and deletions but slower access by index.
- **HashSet**: A collection that implements the `Set` interface and stores elements in a hash table. It does not allow duplicates and does not guarantee any specific order.
- **TreeSet**: A collection that implements the `Set` interface and stores elements in a sorted order, based on their natural ordering or a provided comparator.
- **HashMap**: A collection that implements the `Map` interface and stores key-value pairs. It uses a hash table for fast lookups.

### Algorithms

The **Collection Framework** also provides useful algorithms that can be applied to collections:

- **Sorting**: The `Collections` class provides static methods like `sort()`, `reverse()`, `shuffle()`.
- **Searching**: Methods such as `binarySearch()` are available in the `Collections` class.

### Advantages of the Collection Framework

- **Unified architecture**: All collections implement common interfaces like `Collection`, `Set`, `List`, etc.
- **Reusability**: You can use pre-built classes like `ArrayList`, `HashSet`, and `HashMap` for common tasks.
- **Flexibility**: You can choose the appropriate collection class depending on the performance needs (e.g., fast access, fast insertion, ordering, etc.).
- **Improved performance**: Collections like `HashMap` and `HashSet` use hashing for fast access.

### Example

```java
import java.util.*;

public class CollectionExample {
    public static void main(String[] args) {
        // List example
        List<String> list = new ArrayList<>();
        list.add("Apple");
        list.add("Banana");
        list.add("Cherry");
        System.out.println("List: " + list);

        // Set example
        Set<String> set = new HashSet<>();
        set.add("Apple");
        set.add("Banana");
        set.add("Apple"); // Duplicate will not be added
        System.out.println("Set: " + set);

        // Map example
        Map<Integer, String> map = new HashMap<>();
        map.put(1, "Apple");
        map.put(2, "Banana");
        map.put(3, "Cherry");
        System.out.println("Map: " + map);
    }
}
```

### Output:

```
List: [Apple, Banana, Cherry]
Set: [Apple, Banana]
Map: {1=Apple, 2=Banana, 3=Cherry}
```

---

Here's a more detailed textual representation of the Java Collection Framework:

```
                            Collection
                               |
       +-----------------------+------------------------+
       |                                              |
     Set (unordered)                                  List (ordered)
       |                                              |
  +------------+                              +-----------------+
  |            |                              |                 |
HashSet   LinkedHashSet                  ArrayList        LinkedList
  |            |                              |                 |
  |      +------------+                +-------------+        +-----------+
  |      |            |                |             |        |           |
TreeSet  EnumSet   CopyOnWriteArraySet Vector        Stack   ConcurrentLinkedQueue
                                                       |
                                                   PriorityQueue

                     Queue (FIFO)                         Map (key-value pairs)
                         |                                 |
               +------------------+               +---------------------------+
               |                  |               |                           |
        LinkedList             PriorityQueue  HashMap                 TreeMap
               |                  |               |                           |
           ArrayDeque      LinkedBlockingQueue  LinkedHashMap           ConcurrentHashMap
               |                                         |
    Deque (Double-ended Queue)                         WeakHashMap
```

### Detailed Breakdown:

1. **Collection Interface**:
   - The root interface in the collection hierarchy.
2. **Set Interface** (Ordered: No):

   - A collection that doesn't allow duplicate elements.
   - **HashSet**: Does not maintain the order of elements.
   - **LinkedHashSet**: Maintains the order of elements as they were inserted.
   - **TreeSet**: A set that maintains elements in a sorted order (based on natural ordering or a custom comparator).
   - **EnumSet**: A specialized set for use with enum types.
   - **CopyOnWriteArraySet**: A thread-safe implementation of a set.

3. **List Interface** (Ordered: Yes):

   - A collection that allows duplicate elements and preserves order.
   - **ArrayList**: A resizable array-based implementation of the List interface.
   - **LinkedList**: A doubly-linked list implementation of the List interface.
   - **Vector**: A thread-safe, growable array that is synchronized.
   - **Stack**: A subclass of Vector that implements a last-in, first-out (LIFO) stack.
   - **Vector** and **Stack** are legacy classes but are still in use.

4. **Queue Interface** (FIFO: First-In, First-Out):

   - A collection designed for holding elements prior to processing.
   - **LinkedList**: A doubly-linked list implementation that also implements Queue.
   - **PriorityQueue**: A queue where the elements are ordered based on their natural ordering or by a comparator.
   - **ArrayDeque**: A resizable array implementation of a deque (double-ended queue).
   - **LinkedBlockingQueue**: A thread-safe blocking queue implementation.
   - **ConcurrentLinkedQueue**: A non-blocking, thread-safe queue.

5. **Deque Interface** (Double-ended Queue):
   - A collection that supports insertion, removal, and access at both ends.
   - **ArrayDeque**: Provides fast, random access to the elements at both ends.
6. **Map Interface** (Key-Value Pairs):
   - A collection of key-value pairs, where each key is associated with exactly one value.
   - **HashMap**: A map that does not maintain any order.
   - **TreeMap**: A map that maintains the order of keys based on their natural ordering or a comparator.
   - **LinkedHashMap**: A map that maintains insertion order.
   - **WeakHashMap**: A map where the keys are weakly referenced (garbage collection can remove them).
   - **ConcurrentHashMap**: A thread-safe map designed for concurrent access.

### Additional Notes:

- **Thread-Safety**: Some of the classes like `CopyOnWriteArraySet`, `ConcurrentLinkedQueue`, `LinkedBlockingQueue`, and `ConcurrentHashMap` are designed for thread-safe operations.
- **Legacy Collections**: `Vector` and `Stack` are part of the original Java collections framework, but newer alternatives such as `ArrayList` and `Deque` are preferred in most cases.
