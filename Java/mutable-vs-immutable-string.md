# Mutable vs Immutable String in Java


### **Mutable vs Immutable String in Java**

In Java, strings can be classified as **immutable** and **mutable**. The key difference lies in how the string objects behave after creation.

#### **1. Immutable String**

- **Definition**: An **immutable string** is an object whose value cannot be changed once it is created. In Java, the `String` class is **immutable**.
- **Characteristics**:

  - When you modify a string, a new string object is created, and the old string remains unchanged.
  - Any operation on a string like concatenation, replacement, or substring creates a new `String` object.
  - This ensures **thread-safety** and **security** as the string’s state cannot be modified once created.

- **Example**:

  ```java
  public class ImmutableStringExample {
      public static void main(String[] args) {
          String str = "Hello";
          System.out.println("Original String: " + str);

          // Modifying the string (This creates a new string object)
          str = str.concat(" World");
          System.out.println("Modified String: " + str);
      }
  }
  ```

  **Output**:

  ```
  Original String: Hello
  Modified String: Hello World
  ```

  - **Explanation**: In the example, `str.concat(" World")` does not modify the original string. Instead, it creates a new string `"Hello World"`. The original string `"Hello"` remains unchanged.

- **Why is String Immutable?**
  - **Security**: Strings are widely used in applications like URL, file paths, database connections, etc. If they were mutable, their values could change unexpectedly, leading to security issues.
  - **Hashing**: Since strings are used as keys in hash-based collections (like `HashMap`), immutability guarantees that the hash code of the string does not change over time.

#### **2. Mutable String**

- **Definition**: A **mutable string** is an object whose value can be modified after it is created. In Java, `StringBuilder` and `StringBuffer` classes are **mutable**.
- **Characteristics**:

  - These classes allow you to modify the string's content (such as appending or deleting characters) without creating new objects every time.
  - **StringBuilder** is not thread-safe but faster for single-threaded use, while **StringBuffer** is thread-safe but slower due to synchronization.
  - Mutable strings are more efficient when performing many string manipulations in loops, as they do not require creating new objects for each modification.

- **Example using `StringBuilder`**:

  ```java
  public class MutableStringExample {
      public static void main(String[] args) {
          StringBuilder sb = new StringBuilder("Hello");
          System.out.println("Original StringBuilder: " + sb);

          // Modifying the string
          sb.append(" World");
          System.out.println("Modified StringBuilder: " + sb);
      }
  }
  ```

  **Output**:

  ```
  Original StringBuilder: Hello
  Modified StringBuilder: Hello World
  ```

  - **Explanation**: In the example, `sb.append(" World")` modifies the existing `StringBuilder` object without creating a new one. The string is mutable, and its value changes in-place.

- **Advantages of Mutable Strings (`StringBuilder`/`StringBuffer`)**:
  - **Efficiency**: Since `StringBuilder` and `StringBuffer` don’t create new objects, they are more memory-efficient and faster when performing frequent modifications.
  - **Performance**: Useful in loops or when concatenating strings in many operations.

### **Key Differences Between Mutable and Immutable Strings**

| Feature           | **Immutable String** (`String`)                 | **Mutable String** (`StringBuilder`/`StringBuffer`)                   |
| ----------------- | ----------------------------------------------- | --------------------------------------------------------------------- |
| **Mutability** | Cannot be changed after creation                | Can be modified after creation                                        |
| **Classes** | `String`                                        | `StringBuilder`, `StringBuffer`                                       |
| **Memory** | New object created for each modification        | Same object is modified in place                                      |
| **Thread Safety** | Thread-safe (since it's immutable)              | `StringBuffer` is thread-safe, `StringBuilder` is not                 |
| **Performance** | Slower for frequent modifications               | Faster for frequent modifications                                     |
| **Use Case** | When the string is not modified often           | When the string is modified frequently (e.g., in loops)               |
| **Example** | `"Hello".concat(" World")` creates a new string | `StringBuilder sb = new StringBuilder("Hello"); sb.append(" World");` |

### **When to Use Immutable vs Mutable Strings**

1. **Use Immutable Strings** (`String`):

   - When string content does not need to be changed frequently.
   - When working with **hash-based collections** (`HashMap`, `HashSet`), since the immutability guarantees that the hash code does not change.
   - In multi-threaded applications where thread safety is critical.

2. **Use Mutable Strings** (`StringBuilder` or `StringBuffer`):
   - When performing many modifications or concatenations on strings (e.g., inside loops or when building large strings).
   - In performance-critical sections where the overhead of creating new string objects every time is inefficient.

### **Conclusion**

- **Immutable strings** (`String`) are safe, thread-friendly, and commonly used in scenarios where string values don’t change often.
- **Mutable strings** (`StringBuilder`/`StringBuffer`) are more performance-efficient when strings undergo frequent modifications.
- Understanding when to use **String** and when to use **StringBuilder** or **StringBuffer** can significantly improve performance in Java applications.
