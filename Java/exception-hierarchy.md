# Java Exception Hierarchy


### **Java Exception Hierarchy**

In Java, exceptions are used to handle errors or other exceptional conditions that may arise during program execution. The exception handling mechanism in Java is built around the `Throwable` class, which is the root of the exception hierarchy.

Here’s a breakdown of the **Exception Hierarchy** in Java, along with examples of different types of exceptions.

### **1. `Throwable` Class**

- **`Throwable`** is the superclass of all errors and exceptions in Java.

  - `Throwable` has two main subclasses:
    - **`Error`**
    - **`Exception`**

- The `Throwable` class is the root of the entire exception hierarchy.

#### **Hierarchy Overview**:

```
Throwable
   |
   +-- Error
   |    (e.g., OutOfMemoryError, StackOverflowError)
   |
   +-- Exception
        |
        +-- RuntimeException
        |    (e.g., NullPointerException, ArrayIndexOutOfBoundsException)
        |
        +-- Checked Exceptions
             (e.g., IOException, SQLException, ClassNotFoundException)
```

### **2. `Error` Class**

- **Errors** represent serious problems that a reasonable application should not try to catch. These typically relate to the **Java Virtual Machine (JVM)** and indicate **irrecoverable conditions**.
- Errors are usually not handled by applications because they are out of the application’s control (e.g., running out of memory, JVM crashing).

#### **Common Subclasses of `Error`:**

- **`OutOfMemoryError`**: Raised when the JVM runs out of memory.
- **`StackOverflowError`**: Raised when the stack overflows due to deep recursion.
- **`VirtualMachineError`**: Represents other JVM-related issues.

Example of **`Error`**:

```java
public class ErrorExample {
    public static void main(String[] args) {
        // Example of StackOverflowError
        recursiveMethod();
    }

    public static void recursiveMethod() {
        recursiveMethod(); // This will cause StackOverflowError
    }
}
```

- **Explanation**: The `recursiveMethod()` keeps calling itself, leading to a **`StackOverflowError`** when the stack space is exhausted.

### **3. `Exception` Class**

- **Exceptions** are events that disrupt the normal flow of a program’s execution.
- Exceptions are of two types:
  1. **Checked Exceptions**: These exceptions are checked at compile-time, and you must either handle them using a try-catch block or declare them with the `throws` keyword.
  2. **Unchecked Exceptions**: These exceptions occur at runtime, and they are not checked at compile-time.

### **4. `Checked Exceptions`**

- **Checked exceptions** are exceptions that the compiler forces you to handle. These exceptions must be either caught or declared in the method signature with the `throws` keyword.
- Common checked exceptions include **`IOException`**, **`SQLException`**, and **`ClassNotFoundException`**.

#### **Example of Checked Exception (`IOException`)**:

```java
import java.io.*;

public class CheckedExceptionExample {
    public static void main(String[] args) {
        try {
            // File reading without exception handling will cause a compile-time error
            FileReader reader = new FileReader("non_existent_file.txt");
            BufferedReader bufferedReader = new BufferedReader(reader);
            System.out.println(bufferedReader.readLine());
        } catch (IOException e) {
            System.out.println("Caught IOException: " + e.getMessage());
        }
    }
}
```

**Output**:

```
Caught IOException: non_existent_file.txt (The system cannot find the file specified)
```

- **Explanation**: `IOException` is a checked exception, so you must either handle it with a try-catch block or declare it with the `throws` keyword. In this case, we handle it with a try-catch block.

### **5. `Unchecked Exceptions`**

- **Unchecked exceptions** are exceptions that are not checked at compile-time. These are typically caused by programming bugs, such as accessing a null object or going beyond the array bounds.
- They are subclasses of **`RuntimeException`**.
- Common unchecked exceptions include **`NullPointerException`**, **`ArrayIndexOutOfBoundsException`**, and **`ArithmeticException`**.

#### **Example of Unchecked Exception (`NullPointerException`)**:

```java
public class UncheckedExceptionExample {
    public static void main(String[] args) {
        String str = null;

        // This will throw NullPointerException
        System.out.println(str.length());
    }
}
```

**Output**:

```
Exception in thread "main" java.lang.NullPointerException: Cannot invoke "String.length()" because "str" is null
```

- **Explanation**: The code throws a `NullPointerException` because we try to call `length()` on a `null` object.

### **6. `RuntimeException` Class**

- `RuntimeException` is the parent class for all unchecked exceptions.
- These exceptions occur due to programming errors that could have been avoided (e.g., **`ArrayIndexOutOfBoundsException`**, **`ClassCastException`**, **`IllegalArgumentException`**, etc.).

#### **Common Subclasses of `RuntimeException`:**

- **`NullPointerException`**: Thrown when an application attempts to use `null` where an object is required.
- **`ArithmeticException`**: Thrown when an illegal arithmetic operation is performed (e.g., division by zero).
- **`IndexOutOfBoundsException`**: Thrown when an index is out of range for an array or list.

### **7. Example of Full Exception Hierarchy with Code**

```java
public class ExceptionHierarchyExample {
    public static void main(String[] args) {
        try {
            // Simulating a checked exception
            checkAge(-1);  // This will cause IllegalArgumentException (RuntimeException)
        } catch (IllegalArgumentException e) {
            System.out.println("Caught Exception: " + e.getMessage());
        }

        try {
            // Simulating an unchecked exception
            FileReader reader = new FileReader("non_existent_file.txt");
        } catch (IOException e) {
            System.out.println("Caught IOException: " + e.getMessage());
        }
    }

    // Example method that throws a checked exception
    public static void checkAge(int age) throws IllegalArgumentException {
        if (age < 0) {
            throw new IllegalArgumentException("Age cannot be negative");
        }
        System.out.println("Age: " + age);
    }
}
```

**Output**:

```
Caught Exception: Age cannot be negative
Caught IOException: non_existent_file.txt (The system cannot find the file specified)
```

- **Explanation**: The first `try-catch` block handles the **`IllegalArgumentException`** (which is a runtime exception). The second block handles the **`IOException`**, which is a checked exception.

### **Summary of Exception Types**

| **Type** | **Examples** | **Checked or Unchecked** |
| ------------------------ | --------------------------------------------- | ------------------------ |
| **`Error`** | `OutOfMemoryError`, `StackOverflowError`      | Unchecked                |
| **`Exception`** |                                               |                          |
| **Checked Exceptions** | `IOException`, `SQLException`                 | Checked                  |
| **Unchecked Exceptions** | `NullPointerException`, `ArithmeticException` | Unchecked                |

- **Checked exceptions** must be either caught or declared in the method signature.
- **Unchecked exceptions** do not need to be explicitly handled, but it’s a good practice to avoid them in the code through proper validation.

### **Conclusion**

In Java, the **exception hierarchy** starts with `Throwable`, which is divided into **Errors** and **Exceptions**. Errors typically indicate problems with the JVM or system, while exceptions are conditions that applications may handle. Exceptions are further categorized into **checked exceptions** (which must be handled) and **unchecked exceptions** (which are runtime errors that may be ignored or handled). Understanding this hierarchy helps in writing robust programs by properly handling errors and exceptions.
