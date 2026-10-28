# Class Variables in Java


### **Class Variables (Static Fields) in Java**

Class variables, also known as **static fields**, are variables declared using the `static` keyword inside a class, but outside any method, constructor, or block. These variables belong to the **class itself**, not to any specific object of the class.

### **Key Characteristics of Class Variables**

1. **Shared Across All Instances**:

   - Class variables are shared by all objects of the class. If one object modifies a class variable, the change is reflected for all other objects.

2. **Declared with `static`**:

   - The `static` keyword is used to define class variables.

3. **Stored in Class Memory**:

   - Class variables are stored in the **method area** of memory, rather than the heap where instance variables are stored.

4. **Default Values**:

   - If not explicitly initialized, class variables are assigned default values, just like instance variables:
     - `int` → `0`
     - `double` → `0.0`
     - `boolean` → `false`
     - `char` → `\u0000` (null character)
     - Object references → `null`

5. **Access Without Objects**:

   - Class variables can be accessed directly using the class name (`ClassName.variableName`) or via an object reference, though using the class name is recommended.

6. **Scope**:
   - Class variables are accessible to all methods, constructors, and blocks of the class, but their visibility can be controlled using access modifiers (`public`, `private`, `protected`).

### **Example of Class Variables**

```java
class Counter {
    // Class variable (static field)
    static int count = 0; // Shared by all objects

    // Instance variable
    String name;

    // Constructor
    Counter(String name) {
        this.name = name;
        count++; // Increment the static count variable
    }

    // Method to display information
    void displayInfo() {
        System.out.println("Name: " + name);
        System.out.println("Total Objects: " + count); // Accessing static field
    }
}

public class Main {
    public static void main(String[] args) {
        // Creating objects of Counter class
        Counter obj1 = new Counter("Object 1");
        Counter obj2 = new Counter("Object 2");
        Counter obj3 = new Counter("Object 3");

        // Displaying information for each object
        obj1.displayInfo();
        obj2.displayInfo();
        obj3.displayInfo();

        // Accessing the static variable using the class name
        System.out.println("Final Count: " + Counter.count);
    }
}
```

### **Output**

```
Name: Object 1
Total Objects: 1
Name: Object 2
Total Objects: 2
Name: Object 3
Total Objects: 3
Final Count: 3
```

### **How Class Variables Work**

1. **Single Copy in Memory**:

   - Only one copy of a class variable exists, regardless of how many objects of the class are created.

2. **Shared State**:

   - Modifications to a class variable affect its value across all objects of the class.

3. **Access Using Class Name**:
   - It is a good practice to access class variables using the class name (`ClassName.variableName`), making it clear that the variable is shared.

### **Usage of Class Variables**

Class variables are typically used for:

- **Constants**:

  ```java
  public class MathConstants {
      public static final double PI = 3.14159; // Shared constant
  }
  ```

  Access: `MathConstants.PI`

- **Counters or Trackers**:
  To keep track of the number of objects created, as shown in the example above.

- **Global Information**:
  To store information that needs to be accessible to all objects (e.g., configuration data).

### **Difference Between Instance and Class Variables**

| **Feature** | **Instance Variables** | **Class Variables** |
| ----------------- | ------------------------- | ------------------------- |
| **Keyword** | No `static`               | Declared with `static`    |
| **Scope** | Belongs to an object      | Belongs to the class      |
| **Memory** | Stored in the heap memory | Stored in the method area |
| **Default Value** | Default initialized       | Default initialized       |
| **Access** | Via object references     | Via class name or object  |
| **Shared** | Unique to each object     | Shared by all objects     |
