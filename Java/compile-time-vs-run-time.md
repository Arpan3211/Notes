# Compile Time vs Run Time in Java


the distinction between compile time and run time is essential for understanding how a program is executed. Here's an explanation with examples:

### 1. **Compile Time**:

Compile time refers to the period when the source code is being compiled into bytecode by the Java compiler (i.e., `javac`). This is where syntax errors, type checking, and other compile-time issues are caught.

**Example:**

```java
public class CompileTimeExample {
    public static void main(String[] args) {
        int x = "Hello"; // Compile-time error: incompatible types
        System.out.println(x);
    }
}
```

**Explanation**:

- The error in the above code will be caught **during compilation** because you're trying to assign a `String` to an `int` variable, which is not allowed.
- This error is detected by the Java compiler when you run `javac CompileTimeExample.java`.

**Compile-time errors** are syntax errors, type mismatch, missing semicolons, etc.

### 2. **Run Time**:

Run time refers to the period when the program is actually running (after it has been compiled). Any errors that occur during execution (such as trying to access an element in an array that doesn't exist, dividing by zero, or causing memory issues) are **run-time errors**.

**Example:**

```java
public class RunTimeExample {
    public static void main(String[] args) {
        int[] numbers = new int[2];
        numbers[3] = 10; // Run-time error: ArrayIndexOutOfBoundsException
    }
}
```

**Explanation**:

- This code will compile without errors, but during execution (when the program runs), trying to access `numbers[3]` will cause a `ArrayIndexOutOfBoundsException` because the array only has 2 elements (indices 0 and 1).
- **Run-time errors** are exceptions like `NullPointerException`, `ArrayIndexOutOfBoundsException`, etc.

### Key Differences:

| Aspect             | Compile Time                                      | Run Time                                                                   |
| ------------------ | ------------------------------------------------- | -------------------------------------------------------------------------- |
| **When It Occurs** | During the compilation of source code             | During the execution of the program                                        |
| **Errors** | Syntax errors, type errors, missing imports, etc. | Logical errors, exceptions (e.g., null pointer, array index out of bounds) |
| **Fixing Errors** | Fixed by correcting code before compiling         | Fixed by fixing the logic or handling exceptions in code                   |
| **Example** | `int x = "Hello";` (incompatible types)           | `numbers[3] = 10;` (Array index out of bounds)                             |

### Summary:

- **Compile-time errors** prevent the program from compiling and are found before execution.
- **Run-time errors** occur during the program's execution and are typically handled with exception handling mechanisms (e.g., `try-catch` blocks).
