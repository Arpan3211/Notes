# Stack and Heap Memory management in Java


### **Stack and Heap in Java**

In Java, memory is managed in two primary areas:

1. **Stack**: Used for storing local variables, method calls, and references to objects.
2. **Heap**: Used for storing objects and arrays created dynamically at runtime.

### **1. Stack Memory**

- **Purpose**: The stack is used to store method calls and local variables. Each thread in a Java application has its own stack.
- **Memory Structure**:

  - It is organized as a Last In, First Out (LIFO) structure.
  - Every time a method is invoked, a new stack frame is created. This frame stores the local variables, parameters, and the reference to the method's return address.
  - Once the method finishes executing, the stack frame is popped off the stack.

- **Characteristics**:

  - **Fast Access**: Since stack memory operates in a LIFO manner, it allows for fast access and memory allocation.
  - **Limited Size**: Stack memory is limited in size, and excessive recursion or deep method calls can result in a **stack overflow**.
  - **Automatic Memory Management**: Local variables are automatically removed when the method scope ends.
  - **Primitive Data Types**: Local primitive variables like `int`, `char`, and `boolean` are stored in the stack.
  - **References to Objects**: References to objects (but not the objects themselves) are stored in the stack.

- **Example**:

  ```java
  public class StackExample {
      public static void main(String[] args) {
          int a = 10;  // Stored in stack
          String str = "Hello";  // Reference to the string object in the heap
          printSum(a);
      }

      static void printSum(int number) {  // Local variable 'number' stored in stack
          System.out.println(number + 10);
      }
  }
  ```

  In the above code, `a` and `str` are stored in the stack, while the actual string `"Hello"` is stored in the heap.

### **2. Heap Memory**

- **Purpose**: The heap is used to store objects and arrays dynamically created during the execution of a program.
- **Memory Structure**:

  - The heap is where objects created using the `new` keyword (e.g., objects, arrays) are allocated memory.
  - The **Garbage Collector** (GC) automatically frees up memory in the heap by removing objects that are no longer in use (i.e., unreachable objects).

- **Characteristics**:

  - **Dynamic Memory Allocation**: Objects and arrays are created dynamically, and memory is allocated at runtime.
  - **Larger Memory Size**: Heap memory is much larger than stack memory and can grow as needed (depending on JVM settings).
  - **Slower Access**: Since objects in the heap are accessed through references, accessing them is slower compared to accessing stack variables.
  - **Garbage Collection**: Objects in the heap are cleaned up automatically by Java’s garbage collector when they are no longer referenced.

- **Example**:

  ```java
  public class HeapExample {
      public static void main(String[] args) {
          // Object creation in heap
          Person person = new Person("John", 25);
          System.out.println(person.name);
      }
  }

  class Person {
      String name;
      int age;

      // Constructor
      public Person(String name, int age) {
          this.name = name;
          this.age = age;
      }
  }
  ```

  Here, the `Person` object is stored in the heap, while the reference `person` is stored in the stack.

### **Comparison of Stack and Heap**

| Feature               | **Stack** | **Heap** |
| --------------------- | ---------------------------------------------------------- | ------------------------------------- |
| **Purpose** | Stores method calls and local variables                    | Stores objects and arrays             |
| **Memory Allocation** | Static and automatic                                       | Dynamic and managed by GC             |
| **Size** | Small and limited                                          | Larger and can grow                   |
| **Access Speed** | Fast (LIFO)                                                | Slower (indirect reference access)    |
| **Lifetime** | Until the method call is finished                          | Until the object is garbage collected |
| **Memory Management** | Managed by the compiler (automatic)                        | Managed by the garbage collector      |
| **Objects** | No objects, only primitive types and references to objects | Objects and arrays are stored here    |
| **Example** | Local variables, method arguments                          | Objects created with `new` keyword    |

### **Key Differences Between Stack and Heap**

1. **Storage**:
   - **Stack** stores **primitive data types** and **method calls**, while **Heap** stores **objects** and **arrays**.
2. **Size**:
   - **Stack** memory is smaller and has a fixed size, while **Heap** memory is larger and grows dynamically.
3. **Access Speed**:

   - **Stack** memory is faster to access because it operates in a **LIFO** manner, whereas **Heap** memory is slower due to indirect referencing.

4. **Garbage Collection**:

   - **Stack** memory does not need garbage collection because the data is automatically removed when a method finishes executing.
   - **Heap** memory requires **Garbage Collection** (GC) to clean up objects that are no longer referenced.

5. **Lifetime**:
   - **Stack** data exists only during the method call's lifetime.
   - **Heap** data exists until it is no longer referenced and is garbage collected.

### **Example of Stack and Heap in Action**

```java
public class MemoryExample {
    public static void main(String[] args) {
        int x = 10;  // Stack
        int y = 20;  // Stack

        // Object creation in heap
        Person p1 = new Person("Alice", 30);  // Heap
        p1 = new Person("Bob", 25);  // New object created in Heap

        // Array creation in heap
        int[] numbers = new int[5];  // Heap
        numbers[0] = 1;  // Stack stores reference to the array in Heap
    }
}

class Person {
    String name;  // Stored in heap
    int age;      // Stored in heap

    public Person(String name, int age) {
        this.name = name;  // Reference to string object stored in heap
        this.age = age;
    }
}
```

In this example:

- **`x` and `y`** are stored in the **stack**.
- **`p1`** is a reference variable stored in the **stack**, but the actual `Person` object is in the **heap**.
- The **array `numbers`** is created in the **heap**, but the reference to the array is stored in the **stack**.

### **Conclusion**

- **Stack** is used for storing temporary data (local variables, method calls) and is limited in size.
- **Heap** is used for dynamically created objects and arrays and has a larger and more flexible memory space.
- Understanding how stack and heap memory work is essential for optimizing memory usage and preventing issues like **stack overflow** or **memory leaks**.
