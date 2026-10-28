# What is main in Java


The `main` method in Java is always declared as `static` because it serves as the entry point of the application. Let’s break this down systematically:

### **1. What is the `main` Method?**

The `main` method is the method where the Java Virtual Machine (JVM) starts executing a Java program. Its signature is:

```java
public static void main(String[] args)
```

- **`public`**: The method is accessible from anywhere.
- **`static`**: Indicates that the method belongs to the class, not an instance of the class.
- **`void`**: Specifies that the method does not return a value.
- **`String[] args`**: An array of `String` arguments passed from the command line.

### **2. Why is the `main` Method `static`?**

#### a) **JVM Can Invoke It Without Creating an Object**

- The `main` method is executed by the JVM without creating an instance of the class. Declaring it as `static` allows the JVM to call it directly using the class name.
- Example:
  ```java
  ClassName.main(args);  // JVM invokes this without an object
  ```

#### b) **No Need for Object Creation**

- If `main` were non-static, the JVM would need to create an instance of the class before calling the `main` method. However:
  - To create an instance, the JVM would need to call a constructor.
  - If the constructor has dependencies or requires initialization, it could complicate the startup process.

#### c) **Memory Efficiency**

- Declaring `main` as `static` ensures no unnecessary memory is allocated for an object that serves no purpose in the application's startup.

#### d) **Universality**

- The static `main` method provides a standard, predictable way for the JVM to start the program, ensuring consistency across all Java applications.

### **3. What Happens If `main` Is Not Static?**

If you attempt to declare the `main` method without the `static` keyword, the program will compile but throw a runtime error when executed.

**Example:**

```java
public class Test {
    public void main(String[] args) {  // Non-static main
        System.out.println("This won't work!");
    }
}
```

**Output:**

```
Error: Main method is not static in class Test, please define the main method as:
   public static void main(String[] args)
```

### **4. Why Not Make It Non-Static?**

1. **Circular Dependency Problem**:
   If `main` were non-static, the JVM would need to create an object of the class. However, there’s no predefined way for the JVM to know how to instantiate the class.
2. **Unnecessary Complexity**:
   Requiring object creation just to execute the program would complicate the startup process unnecessarily.
3. **Standardization**:
   Keeping `main` static ensures consistency across all Java programs.

### **5. Practical Example**

```java
public class MainExample {
    public static void main(String[] args) {
        System.out.println("Program started without creating an object!");
    }
}
```

This works because the `main` method is static and can be executed directly by the JVM without creating an instance of `MainExample`.

### **6. When Does It Make Sense to Use Non-Static Methods?**

- Non-static methods are used when the behavior depends on the state of an object (i.e., instance variables).
- In contrast, `main` is simply a starting point and does not depend on object-specific data.

### **Key Takeaways**

- The `main` method is static to allow the JVM to execute it without instantiating the class.
- This ensures a clean, efficient, and standardized entry point for Java applications.
- Making it non-static would complicate the program's execution process and result in runtime errors.
