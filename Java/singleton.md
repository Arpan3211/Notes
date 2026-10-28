# Singleton class


A **Singleton class** is a design pattern in object-oriented programming that ensures a class has only **one instance** throughout the lifetime of an application and provides a global point of access to that instance. This is useful when you need to control the access to shared resources, like a database connection, configuration settings, or a logging service.

### **Key Characteristics of a Singleton Class:**

1. **Single Instance**: Only one instance of the class exists during the application's execution.
2. **Global Access**: The instance can be accessed globally by other parts of the program.
3. **Lazy Instantiation**: The instance is created only when it is first needed (in some implementations).
4. **Thread Safety**: In multi-threaded applications, a thread-safe implementation ensures that multiple threads do not create multiple instances simultaneously.

### **Steps to Create a Singleton Class in Java**

1. **Private Constructor**: The constructor of the Singleton class is made **private** so that it cannot be instantiated directly outside the class.
2. **Static Instance**: A static reference to the single instance of the class is created.
3. **Public Method for Access**: A public static method (often called `getInstance()`) is provided to return the single instance of the class.

### **Example of Singleton Class in Java**

#### **Eager Initialization Singleton:**

In this approach, the instance is created when the class is loaded.

```java
public class Singleton {
    // Step 1: Create a static instance of the class (eager initialization)
    private static final Singleton instance = new Singleton();

    // Step 2: Private constructor to prevent instantiation from outside the class
    private Singleton() {
        // Initialize any resources if necessary
    }

    // Step 3: Public method to provide access to the instance
    public static Singleton getInstance() {
        return instance;
    }

    public void showMessage() {
        System.out.println("Hello from Singleton!");
    }
}

public class Main {
    public static void main(String[] args) {
        // Access the Singleton instance
        Singleton singleton = Singleton.getInstance();
        singleton.showMessage(); // Outputs: Hello from Singleton!
    }
}
```

**Explanation**:

- The instance `instance` is created when the class is loaded (eager initialization), ensuring only one instance exists.
- The constructor is private, so no other class can create a new instance using `new`.
- The static `getInstance()` method provides the global access point for getting the single instance.

#### **Lazy Initialization Singleton:**

In this approach, the instance is created only when it is needed for the first time.

```java
public class Singleton {
    // Step 1: Declare a static instance (not initialized immediately)
    private static Singleton instance;

    // Step 2: Private constructor to prevent instantiation from outside the class
    private Singleton() {
        // Initialize any resources if necessary
    }

    // Step 3: Public method to provide access to the instance
    public static Singleton getInstance() {
        if (instance == null) {
            // Lazy initialization: create the instance only when needed
            instance = new Singleton();
        }
        return instance;
    }

    public void showMessage() {
        System.out.println("Hello from Singleton!");
    }
}

public class Main {
    public static void main(String[] args) {
        // Access the Singleton instance
        Singleton singleton = Singleton.getInstance();
        singleton.showMessage(); // Outputs: Hello from Singleton!
    }
}
```

**Explanation**:

- The instance is **created lazily** (only when it is accessed for the first time) to save memory if it is not needed immediately.
- The `getInstance()` method checks if the instance is `null`, and if it is, it creates the instance.

#### **Thread-Safe Singleton (Double-Checked Locking)**

In a multi-threaded environment, it’s important to ensure that the Singleton class remains thread-safe, i.e., multiple threads don't create separate instances of the class.

```java
public class Singleton {
    // Step 1: Declare a static instance (not initialized immediately)
    private static volatile Singleton instance;

    // Step 2: Private constructor to prevent instantiation from outside the class
    private Singleton() {
        // Initialize any resources if necessary
    }

    // Step 3: Public method to provide access to the instance with thread safety
    public static Singleton getInstance() {
        if (instance == null) {
            synchronized (Singleton.class) {
                if (instance == null) {
                    instance = new Singleton();
                }
            }
        }
        return instance;
    }

    public void showMessage() {
        System.out.println("Hello from Singleton!");
    }
}

public class Main {
    public static void main(String[] args) {
        // Access the Singleton instance
        Singleton singleton = Singleton.getInstance();
        singleton.showMessage(); // Outputs: Hello from Singleton!
    }
}
```

**Explanation**:

- The `volatile` keyword ensures that the instance is visible across all threads.
- The `synchronized` block ensures that only one thread can enter the critical section of code at a time and create the instance, ensuring that multiple threads don't create separate instances.

### **Why Use a Singleton?**

- **Global Access**: The Singleton pattern provides a global access point for accessing a shared resource or functionality (like logging, configuration settings, database connections).
- **Controlled Instantiation**: It restricts the creation of multiple instances, preventing the wastage of resources and ensuring a consistent state.
- **Efficiency**: The singleton object is created only once and is reused throughout the program, saving memory and resources.

### **When Not to Use Singleton?**

- **Testing Challenges**: Singletons can make unit testing difficult because they maintain a global state, making it harder to test classes in isolation.
- **Concurrency Issues**: In multi-threaded applications, if not implemented correctly, the Singleton pattern can lead to issues like race conditions.
- **Overuse**: Sometimes using a Singleton pattern unnecessarily can introduce complexity or unnecessary global state.

### **Summary**

- A **Singleton class** ensures that only one instance of a class exists and provides a global point of access.
- The instance is created using a **private constructor** and accessed via a **public static method**.
- The Singleton can be implemented using **eager initialization**, **lazy initialization**, or **thread-safe techniques** such as **double-checked locking**.
