# List of commonly used Exceptions and Errors in Java


list of commonly used **Exceptions** and **Errors** in Java:

### **1. Exceptions**

| **Type** | **Class Name** | **Description** | **Example** |
| --------------------------------------------- | ------------------------------------------- | -------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| **Checked Exceptions** |                                             |                                                                                  |                                                              |
| IOException                                   | `java.io.IOException`                       | Thrown when an I/O operation fails or is interrupted.                            | Reading a non-existent file.                                 |
| FileNotFoundException                         | `java.io.FileNotFoundException`             | Thrown when a file specified by a pathname cannot be found.                      | Trying to read a file that doesn't exist.                    |
| SQLException                                  | `java.sql.SQLException`                     | Thrown when there is a database access or query error.                           | Running an invalid SQL query.                                |
| ClassNotFoundException                        | `java.lang.ClassNotFoundException`          | Thrown when the JVM cannot find a specified class during runtime.                | Using `Class.forName("SomeClass")` for a non-existent class. |
| InterruptedException                          | `java.lang.InterruptedException`            | Thrown when a thread is interrupted while waiting, sleeping, or paused.          | Interrupting a thread during `Thread.sleep()`.               |
| MalformedURLException                         | `java.net.MalformedURLException`            | Thrown when an invalid URL format is used.                                       | Using a malformed URL.                                       |
| **Unchecked Exceptions (Runtime Exceptions)** |                                             |                                                                                  |                                                              |
| NullPointerException                          | `java.lang.NullPointerException`            | Thrown when an application tries to access a method or field on a `null` object. | Accessing methods on a `null` reference.                     |
| ArithmeticException                           | `java.lang.ArithmeticException`             | Thrown when an illegal arithmetic operation occurs.                              | Dividing by zero.                                            |
| ArrayIndexOutOfBoundsException                | `java.lang.ArrayIndexOutOfBoundsException`  | Thrown when accessing an array with an illegal index.                            | Accessing `arr[5]` when the array has 4 elements.            |
| StringIndexOutOfBoundsException               | `java.lang.StringIndexOutOfBoundsException` | Thrown when accessing a string with an invalid index.                            | Accessing the 5th character in a 3-character string.         |
| IllegalArgumentException                      | `java.lang.IllegalArgumentException`        | Thrown when a method receives an invalid argument.                               | Passing a negative value where a positive one is expected.   |
| IllegalStateException                         | `java.lang.IllegalStateException`           | Thrown when a method is invoked in an inappropriate state.                       | Calling `Iterator.next()` when no elements remain.           |
| ClassCastException                            | `java.lang.ClassCastException`              | Thrown when an object is cast to a class it is not an instance of.               | Casting a `String` to `Integer`.                             |
| NumberFormatException                         | `java.lang.NumberFormatException`           | Thrown when attempting to convert a string to a number fails.                    | Parsing `"abc"` as an integer.                               |

### **2. Errors**

| **Type** | **Class Name** | **Description** | **Example** |
| -------------------------- | -------------------------------- | -------------------------------------------------------------------- | ------------------------------------------ |
| **Virtual Machine Errors** |                                  |                                                                      |                                            |
| OutOfMemoryError           | `java.lang.OutOfMemoryError`     | Thrown when the JVM runs out of memory.                              | Creating too many objects without cleanup. |
| StackOverflowError         | `java.lang.StackOverflowError`   | Thrown when the stack exceeds its size limit (e.g., deep recursion). | Recursive method calls with no base case.  |
| InternalError              | `java.lang.InternalError`        | Thrown when an internal JVM issue occurs.                            | Rare low-level JVM errors.                 |
| UnknownError               | `java.lang.UnknownError`         | Thrown when an unknown but serious JVM issue occurs.                 | Unknown JVM crash.                         |
| **Linkage Errors** |                                  |                                                                      |                                            |
| NoClassDefFoundError       | `java.lang.NoClassDefFoundError` | Thrown when a required class cannot be found by the JVM.             | Missing a required class at runtime.       |
| ClassFormatError           | `java.lang.ClassFormatError`     | Thrown when a `.class` file does not conform to the expected format. | Using a corrupt `.class` file.             |
| UnsatisfiedLinkError       | `java.lang.UnsatisfiedLinkError` | Thrown when the JVM cannot load a required native library.           | Missing native dependencies for JNI.       |
| **Assertion Errors** |                                  |                                                                      |                                            |
| AssertionError             | `java.lang.AssertionError`       | Thrown when an assertion fails during debugging/testing.             | `assert x > 0;` fails if `x` is negative.  |
