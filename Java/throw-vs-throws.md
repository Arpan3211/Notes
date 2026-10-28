# Throw and throws


In Java, `throw` and `throws` are used in exception handling but serve different purposes. Here's an explanation and their differences:

### **1. `throw`**

- **Purpose**: Used to explicitly throw an exception from a method or block of code.
- **Usage**: Follows the keyword with an exception object (either predefined or custom).
- **Example**:
  ```java
  public void checkAge(int age) {
      if (age < 18) {
          throw new IllegalArgumentException("Age must be 18 or above.");
      }
  }
  ```
- **Notes**:
  - The exception object must be created using the `new` keyword.
  - Can be used for both checked and unchecked exceptions.

### **2. `throws`**

- **Purpose**: Declares exceptions that a method might throw, alerting the calling method to handle them.
- **Usage**: Specified in the method signature, followed by the exception type(s).
- **Example**:
  ```java
  public void readFile(String filePath) throws IOException {
      // Code that might throw IOException
      FileReader reader = new FileReader(filePath);
  }
  ```
- **Notes**:
  - Used only for checked exceptions (those that must be handled or declared).
  - You can declare multiple exceptions, separated by commas.

### **Key Differences**

| Aspect         | `throw`                                     | `throws`                                       |
| -------------- | ------------------------------------------- | ---------------------------------------------- |
| **Definition** | Used to throw an exception.                 | Used to declare exceptions a method can throw. |
| **Location** | Inside the method body.                     | In the method signature.                       |
| **Purpose** | Actual action of throwing an exception.     | Alerts the caller about possible exceptions.   |
| **Used For** | Both checked and unchecked exceptions.      | Mainly for checked exceptions.                 |
| **Syntax** | `throw new Exception();`                    | `throws Exception`                             |
| **Number** | Only one exception can be thrown at a time. | Multiple exceptions can be declared.           |

### **Example Combining Both**

```java
public class Example {
    // Declaring that this method throws an IOException
    public void readFile(String fileName) throws IOException {
        if (fileName == null) {
            // Throwing an exception
            throw new IOException("File name cannot be null.");
        }
        // Simulating file reading logic
        System.out.println("Reading file: " + fileName);
    }

    public static void main(String[] args) {
        Example example = new Example();
        try {
            example.readFile(null); // This will throw an exception
        } catch (IOException e) {
            System.out.println("Caught exception: " + e.getMessage());
        }
    }
}
```
