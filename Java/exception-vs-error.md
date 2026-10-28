# Exception and Error


In Java, both **Exception** and **Error** are types of **throwable objects** used to indicate abnormal conditions in a program. However, they serve different purposes and represent different kinds of problems. Here's a detailed comparison:

### **1. Exception**

- **Definition**:
  Exceptions represent conditions that a program **might want to catch and handle**. They are recoverable issues, such as invalid input, file not found, or network errors.

- **Subcategories**:

  - **Checked Exceptions**:
    - Must be declared in the `throws` clause or handled using `try-catch`.
    - Examples: `IOException`, `SQLException`.
  - **Unchecked Exceptions (Runtime Exceptions)**:
    - Do not need to be declared or explicitly handled.
    - Examples: `NullPointerException`, `ArithmeticException`.

- **When to Use**:

  - For problems that can be predicted and potentially recovered from, such as user input validation or file access errors.

- **Example**:
  ```java
  public void readFile(String fileName) throws IOException {
      FileReader reader = new FileReader(fileName);
      // Risky code
  }
  ```

### **2. Error**

- **Definition**:
  Errors represent serious conditions that are **beyond the control of the application** and cannot be reasonably handled. They are typically caused by the environment or system issues.

- **Examples**:

  - `OutOfMemoryError`: When the JVM runs out of memory.
  - `StackOverflowError`: When the call stack overflows due to deep recursion.
  - `LinkageError`: When a class cannot be linked during runtime.

- **When to Use**:

  - Errors are generally not meant to be caught or handled. They indicate critical issues that require fixing at the system or code level.

- **Example**:
  ```java
  public void causeStackOverflow() {
      causeStackOverflow(); // Recursive call leading to StackOverflowError
  }
  ```

### **Key Differences**

| **Aspect** | **Exception** | **Error** |
| ----------------- | ------------------------------------------------------ | ------------------------------------------------- |
| **Nature** | Represents recoverable problems.                       | Represents irrecoverable, serious issues.         |
| **Handling** | Can be handled using `try-catch` or `throws`.          | Usually not handled; requires system-level fixes. |
| **Hierarchy** | Subclass of `java.lang.Throwable`.                     | Subclass of `java.lang.Throwable`.                |
| **Recoverable** | Yes, the program can continue after handling.          | No, usually the program terminates.               |
| **Examples** | `IOException`, `NullPointerException`, `SQLException`. | `OutOfMemoryError`, `StackOverflowError`.         |
| **Usage in Code** | Used to handle predictable issues in the program.      | Represents critical system-level failures.        |
| **Focus Area** | Application-level problems.                            | JVM or system-level problems.                     |

### **Class Hierarchy**

```plaintext
java.lang.Throwable
├── java.lang.Exception
│   ├── Checked Exceptions (e.g., IOException, SQLException)
│   └── Runtime Exceptions (e.g., NullPointerException, ArithmeticException)
└── java.lang.Error
    ├── VirtualMachineError (e.g., OutOfMemoryError, StackOverflowError)
    └── LinkageError (e.g., NoClassDefFoundError)
```

### **When to Catch or Handle**

- **Catch Exceptions**: Use `try-catch` for conditions you can anticipate and recover from, such as invalid user input or file not found.
- **Don't Catch Errors**: Errors like `OutOfMemoryError` or `StackOverflowError` typically indicate problems that require fixing in the code or environment.

### **Example Combining Both**

```java
public class ExceptionErrorDemo {
    public static void main(String[] args) {
        // Example of Exception
        try {
            int result = 10 / 0; // ArithmeticException
        } catch (ArithmeticException e) {
            System.out.println("Handled Exception: " + e.getMessage());
        }

        // Example of Error
        try {
            causeStackOverflow();
        } catch (StackOverflowError e) {
            System.out.println("Caught Error: " + e.getMessage());
        }
    }

    public static void causeStackOverflow() {
        causeStackOverflow(); // Recursive call causing StackOverflowError
    }
}
```
