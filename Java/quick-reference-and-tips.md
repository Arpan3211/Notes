# Short Tips Vault


```
Local variables are destroyed after the method ends.
Instance variables exist as long as the object exists.
Static variables exist throughout the program's lifecycle and are shared among all instances.
```

```
Widening (Implicit) Casting: Happens automatically when there’s no risk of data loss.
Narrowing (Explicit) Casting: Requires manual casting, might lead to data loss.
```

```
final: Indicates that the variable's value cannot be changed once initialized. It behaves like a constant.

static: Indicates the variable belongs to the class, not to any specific object.
It can be accessed directly using the class name.
```

---

---

### **Core Java** Table:

| **Aspect** | **Core Java** |
| ------------------------------- | ---------------------------------------------------------------------------------------------- |
| **Basic Syntax** | Basic structure of Java programs, including keywords, identifiers, and statements.             |
| **Data Types** | Primitive data types (int, float, char, boolean) and non-primitive types (String, Arrays).     |
| **Control Flow** | Conditional statements (`if`, `else`, `switch`), loops (`for`, `while`, `do-while`).           |
| **Object-Oriented Programming** | Classes, objects, inheritance, polymorphism, encapsulation, abstraction.                       |
| **Constructors** | Default and parameterized constructors.                                                        |
| **Exception Handling** | `try-catch`, `throw`, `throws`, `finally`.                                                     |
| **Multithreading** | Thread creation and synchronization using `Thread` and `Runnable`.                             |
| **Java Collections Framework** | `List`, `Set`, `Map`, `Queue`, with implementations like `ArrayList`, `HashMap`, `LinkedList`. |
| **Input/Output (I/O)** | File I/O using `FileReader`, `BufferedReader`, `PrintWriter`; streams (Byte and Character).    |
| **Java API** | Core libraries like `java.lang`, `java.util`, `java.io`, `java.math`, etc.                     |
| **Memory Management** | Stack vs Heap memory management, garbage collection basics.                                    |
| **String Handling** | String manipulation using `String`, `StringBuilder`, `StringBuffer`.                           |
| **Utility Classes** | `Date`, `Math`, `Calendar`, `UUID`, etc.                                                       |

### **Advanced Java** Table:

| **Aspect** | **Advanced Java** |
| ---------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| **Database Connectivity (JDBC)** | Connecting to databases, CRUD operations using JDBC.                                                      |
| **Servlets** | Handling HTTP requests and responses, creating dynamic web pages.                                         |
| **JavaServer Pages (JSP)** | Embedding Java in HTML for creating dynamic content in web applications.                                  |
| **J2EE (Java 2 Enterprise Edition)** | Enterprise-level Java applications using Servlets, JSP, EJB, JMS, and more.                               |
| **Web Services (SOAP/REST)** | Creating and consuming web services using SOAP and REST APIs.                                             |
| **JavaMail API** | Sending, receiving, and processing emails in Java applications.                                           |
| **JNDI (Java Naming and Directory Interface)** | Resource management, service lookups, and accessing distributed resources like databases and EJBs.        |
| **Java Security** | Cryptography, SSL/TLS, authentication, authorization, and secure coding practices.                        |
| **EJB (Enterprise JavaBeans)** | Building distributed enterprise applications using session beans, entity beans, and message-driven beans. |
| **JavaFX** | GUI development for building rich desktop applications.                                                   |
| **Spring Framework** | Dependency Injection (DI), Aspect-Oriented Programming (AOP), Spring Boot, Spring MVC, and Spring Data.   |
| **Hibernate (ORM)** | Object-relational mapping, database interaction via Java objects, and managing persistence.               |
| **Microservices** | Building microservices with Spring Boot and deploying them in cloud environments.                         |
| **Message-Oriented Middleware (MOM)** | Asynchronous communication with JMS (Java Message Service).                                               |
| **Transactions (JTA)** | Managing transactions in distributed environments using Java Transaction API (JTA).                       |
| **Cloud and Web Applications** | Developing cloud-based solutions, integrating Java with cloud platforms.                                  |

---

---

### **Core Java Quick Reference Guide**

### 1. **Basic Syntax**

- **Java Program Structure**:
  - A Java program has a `main()` method as the entry point.
  ```java
  public class MyClass {
      public static void main(String[] args) {
          System.out.println("Hello, World!");
      }
  }
  ```
- **Keywords**: Reserved words like `class`, `public`, `static`, `void`, `if`, `else`, `new`, `int`, etc.
- **Identifiers**: Names for variables, methods, classes. Cannot start with numbers or contain special characters (except `_` and `$`).
- **Statements**: Lines of code that perform actions (e.g., assignments, method calls).

---

### 2. **Data Types**

- **Primitive Types**:
  - **int**: Whole numbers, 4 bytes
  - **float**: Floating-point numbers, 4 bytes
  - **char**: Single characters, 2 bytes
  - **boolean**: True or false, 1 byte
- **Non-Primitive Types**:
  - **String**: Sequence of characters (immutable).
  - **Arrays**: A collection of elements of the same type.
  ```java
  int[] numbers = {1, 2, 3, 4};
  ```
- **Exceptional Tip**: Always choose the appropriate primitive type based on memory and performance requirements.

---

### 3. **Control Flow**

- **Conditionals**:
  - `if`: Executes a block if the condition is true.
  ```java
  if (age > 18) {
      System.out.println("Adult");
  }
  ```
  - `else`: Executes if the `if` condition is false.
  - `switch`: Used when checking multiple possible values for a variable.
  ```java
  switch(day) {
      case 1: System.out.println("Monday"); break;
      case 2: System.out.println("Tuesday"); break;
  }
  ```
- **Loops**:
  - `for`: Repeats a block for a fixed number of iterations.
  ```java
  for (int i = 0; i < 5; i++) {
      System.out.println(i);
  }
  ```
  - `while`: Repeats while a condition is true.
  ```java
  while (count < 5) {
      System.out.println(count);
      count++;
  }
  ```
  - `do-while`: Similar to `while`, but always runs at least once.
  ```java
  do {
      System.out.println("Run this once");
  } while (false);
  ```
- **Exceptional Tip**: Use `switch` over `if-else` when checking multiple possible values for better clarity and performance.

---

### 4. **Constructors**

- **Default Constructor**: Automatically created by Java if no constructor is explicitly defined.
  ```java
  class MyClass {
      MyClass() {
          System.out.println("Default constructor");
      }
  }
  ```
- **Parameterized Constructor**: Allows passing values when creating an object.
  ```java
  class Person {
      String name;
      Person(String name) {
          this.name = name;
      }
  }
  Person p = new Person("John");
  ```
- **Exceptional Tip**: Constructors cannot have a return type and are used for object initialization.

---

### 5. **Exception Handling**

- **Try-Catch**: Used to handle exceptions and prevent crashes.
  ```java
  try {
      int result = 10 / 0;
  } catch (ArithmeticException e) {
      System.out.println("Cannot divide by zero.");
  }
  ```
- **Throw**: Used to throw an exception explicitly.
  ```java
  throw new Exception("Custom Exception");
  ```
- **Throws**: Declares exceptions that may be thrown by a method.
  ```java
  public void method() throws IOException {
      // Code that may throw IOException
  }
  ```
- **Finally**: Block that is always executed after `try-catch`.
  ```java
  finally {
      System.out.println("This will always execute.");
  }
  ```
- **Exceptional Tip**: Always handle specific exceptions first and leave `Exception` as the last catch block.

---

### 6. **Multithreading**

- **Thread Creation**:
  - By extending the `Thread` class.
  ```java
  class MyThread extends Thread {
      public void run() {
          System.out.println("Thread is running");
      }
  }
  ```
  - By implementing the `Runnable` interface.
  ```java
  class MyRunnable implements Runnable {
      public void run() {
          System.out.println("Runnable is running");
      }
  }
  Thread t = new Thread(new MyRunnable());
  t.start();
  ```
- **Synchronization**: Ensures that only one thread accesses a critical section at a time.
  ```java
  synchronized void method() {
      // Thread-safe code
  }
  ```
- **Exceptional Tip**: Use synchronization when multiple threads access shared resources.

---

### 7. **Input/Output (I/O)**

- **File I/O**: Reading from and writing to files.
  ```java
  FileReader fr = new FileReader("file.txt");
  BufferedReader br = new BufferedReader(fr);
  String line;
  while ((line = br.readLine()) != null) {
      System.out.println(line);
  }
  br.close();
  ```
- **Byte Streams**: Handle raw binary data (`InputStream`, `OutputStream`).
- **Character Streams**: Handle text data (`Reader`, `Writer`).
- **Exceptional Tip**: Always close file streams using `finally` or try-with-resources.

---

### 8. **Java API**

- **java.lang**: Provides fundamental classes like `String`, `Object`, `System`.
- **java.util**: Provides utility classes like `List`, `Set`, `Map`, `Date`, `Calendar`.
- **java.io**: Classes for input/output, like `FileReader`, `BufferedReader`, `PrintWriter`.
- **java.math**: Classes for mathematical operations like `BigDecimal`, `BigInteger`.
- **Exceptional Tip**: Familiarize yourself with frequently used classes from `java.util` and `java.io`.

---

### 9. **Memory Management**

- **Stack Memory**: Stores local variables and method calls.
- **Heap Memory**: Stores objects created with `new`.
- **Garbage Collection**: Automatic memory management to clean up unused objects.
  - Triggered by JVM to free up memory space.
- **Exceptional Tip**: Avoid memory leaks by nullifying object references when they are no longer needed.

---

### 10. **String Handling**

- **String**: Immutable sequence of characters.
  ```java
  String s = "Hello";
  ```
- **StringBuilder**: Mutable sequence of characters, better for performance when modifying strings.
  ```java
  StringBuilder sb = new StringBuilder("Hello");
  sb.append(" World");
  ```
- **StringBuffer**: Similar to `StringBuilder`, but synchronized (thread-safe).
- **Exceptional Tip**: Use `StringBuilder` for concatenating strings in loops for better performance.

---

### 11. **Utility Classes**

- **Date**: Represents date and time.
  ```java
  Date date = new Date();
  ```
- **Math**: Provides mathematical operations like `abs()`, `sqrt()`, `pow()`.
  ```java
  double result = Math.sqrt(25);
  ```
- **Calendar**: Provides methods to work with dates and times in a more flexible way than `Date`.
  ```java
  Calendar calendar = Calendar.getInstance();
  calendar.set(Calendar.YEAR, 2025);
  ```
- **UUID**: Generates universally unique identifiers.
  ```java
  UUID uuid = UUID.randomUUID();
  ```
- **Exceptional Tip**: Use `LocalDate` and `LocalTime` (from Java 8) for better date-time handling.
