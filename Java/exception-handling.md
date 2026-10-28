# Exception Handling in Java


**Exception Handling** in Java is a mechanism to handle runtime errors, ensuring the program's normal flow is maintained. It is achieved using **try**, **catch**, **finally**, **throw**, and **throws** constructs.

### **What is an Exception?**

An **exception** is an event that disrupts the normal flow of a program during its execution. Exceptions can occur due to various reasons, such as:

- Invalid user input.
- Dividing a number by zero.
- Attempting to access an array element out of bounds.
- File not found or inaccessible.
- Network connection issues.

### **Types of Exceptions**

1. **Checked Exceptions**:

   - Known as compile-time exceptions.
   - The compiler requires the programmer to handle them explicitly using `try-catch` or by declaring them using `throws`.
   - Examples: `IOException`, `SQLException`.

2. **Unchecked Exceptions**:

   - Known as runtime exceptions.
   - Occur during program execution and are typically due to programming bugs.
   - Examples: `ArithmeticException`, `NullPointerException`, `ArrayIndexOutOfBoundsException`.

3. **Errors**:
   - Serious issues not meant to be caught or handled, often related to the JVM's environment.
   - Examples: `OutOfMemoryError`, `StackOverflowError`.

### **Key Exception Handling Constructs**

#### 1. **try-catch Block**

Used to handle exceptions by placing the risky code inside the `try` block and handling the exception in the `catch` block.

**Syntax**:

```java
try {
    // Risky code that may throw an exception
} catch (ExceptionType e) {
    // Code to handle the exception
}
```

**Example**:

```java
public class Example {
    public static void main(String[] args) {
        try {
            int result = 10 / 0; // This will throw ArithmeticException
        } catch (ArithmeticException e) {
            System.out.println("Cannot divide by zero!");
        }
    }
}
```

#### 2. **finally Block**

- Executed after the `try` and `catch` blocks, regardless of whether an exception occurred.
- Often used for cleanup activities (e.g., closing resources like files or database connections).

**Syntax**:

```java
try {
    // Risky code
} catch (ExceptionType e) {
    // Handle exception
} finally {
    // Code that will always execute
}
```

**Example**:

```java
try {
    int data = 50 / 0;
} catch (ArithmeticException e) {
    System.out.println("Exception caught!");
} finally {
    System.out.println("Finally block executed.");
}
```

#### 3. **throw**

Used to explicitly throw an exception.

**Syntax**:

```java
throw new ExceptionType("Error message");
```

**Example**:

```java
public void checkNumber(int num) {
    if (num < 0) {
        throw new IllegalArgumentException("Number cannot be negative");
    }
}
```

#### 4. **throws**

Used in the method signature to declare exceptions that a method might throw.

**Syntax**:

```java
public void methodName() throws ExceptionType {
    // Code that might throw the exception
}
```

**Example**:

```java
public void readFile(String fileName) throws IOException {
    FileReader reader = new FileReader(fileName);
}
```

### **Best Practices in Exception Handling**

1. **Use Specific Exceptions**:

   - Catch specific exceptions instead of generic ones like `Exception` or `Throwable`.

2. **Don't Swallow Exceptions**:

   - Avoid empty `catch` blocks; always provide meaningful handling or logging.

3. **Use `finally` for Cleanup**:

   - Ensure resources like files, streams, or connections are properly closed.

4. **Don't Overuse Exceptions**:

   - Exceptions should be used for exceptional scenarios, not for controlling normal program flow.

5. **Log Exceptions**:

   - Log exceptions for debugging and maintenance purposes.

6. **Custom Exceptions**:
   - Create custom exceptions for your application's domain-specific errors.

### **Complete Example**

```java
import java.io.*;

public class ExceptionHandlingExample {
    public static void main(String[] args) {
        try {
            FileReader reader = new FileReader("file.txt");
            BufferedReader br = new BufferedReader(reader);

            System.out.println(br.readLine());
            br.close();
        } catch (FileNotFoundException e) {
            System.out.println("File not found: " + e.getMessage());
        } catch (IOException e) {
            System.out.println("Error reading file: " + e.getMessage());
        } finally {
            System.out.println("Execution completed.");
        }
    }
}
```
