# Inner Class in Java


### **Inner Class in Java**

An **inner class** in Java is a class that is defined within another class. Inner classes are useful when you want to logically group classes that are used only in one place or need to interact closely with the outer class. Java provides several types of inner classes, each with different characteristics and use cases.

### **Types of Inner Classes in Java**

1. **Member Inner Class** (Non-static Inner Class)
2. **Static Nested Class**
3. **Local Inner Class**
4. **Anonymous Inner Class**

### **1. Member Inner Class (Non-static Inner Class)**

- A **non-static inner class** is associated with an instance of the outer class. It can access all the members (including private members) of the outer class.
- To create an instance of a non-static inner class, you need an instance of the outer class.

#### **Example**:

```java
class OuterClass {
    private String outerField = "Outer Field";

    // Non-static inner class
    class InnerClass {
        void display() {
            System.out.println("Accessing outer class field: " + outerField);
        }
    }

    void createInnerObject() {
        InnerClass inner = new InnerClass();  // Creating an inner class object
        inner.display();
    }
}

public class InnerClassExample {
    public static void main(String[] args) {
        OuterClass outer = new OuterClass();
        outer.createInnerObject();  // Calling the outer class method that uses inner class
    }
}
```

**Output**:

```
Accessing outer class field: Outer Field
```

- **Explanation**: The `InnerClass` is an instance of a non-static inner class. The `display` method inside the inner class has access to the `outerField` variable of the outer class.

### **2. Static Nested Class**

- A **static nested class** is a nested class that is declared with the `static` modifier. A static inner class can only access the static members of the outer class.
- You can create an instance of a static nested class without creating an instance of the outer class.

#### **Example**:

```java
class OuterClass {
    static String outerField = "Outer Static Field";

    // Static nested class
    static class StaticNestedClass {
        void display() {
            System.out.println("Accessing outer static field: " + outerField);
        }
    }
}

public class StaticNestedClassExample {
    public static void main(String[] args) {
        // Creating instance of static nested class without outer class instance
        OuterClass.StaticNestedClass nested = new OuterClass.StaticNestedClass();
        nested.display();
    }
}
```

**Output**:

```
Accessing outer static field: Outer Static Field
```

- **Explanation**: The `StaticNestedClass` is a static nested class that accesses the static member `outerField` of the outer class. It does not require an instance of `OuterClass` to be created.

### **3. Local Inner Class**

- A **local inner class** is a class defined inside a method or a block of code. It can only be used within that method or block.
- Local inner classes have access to the final or effectively final variables of the enclosing method.

#### **Example**:

```java
class OuterClass {
    void display() {
        // Local inner class inside a method
        class LocalInnerClass {
            void show() {
                System.out.println("Inside local inner class method");
            }
        }

        LocalInnerClass localInner = new LocalInnerClass();  // Creating object of local inner class
        localInner.show();
    }
}

public class LocalInnerClassExample {
    public static void main(String[] args) {
        OuterClass outer = new OuterClass();
        outer.display();
    }
}
```

**Output**:

```
Inside local inner class method
```

- **Explanation**: The `LocalInnerClass` is defined inside the `display` method and can only be used within that method. It does not have access to the outer class’s instance variables unless those variables are final.

### **4. Anonymous Inner Class**

- An **anonymous inner class** is a class that doesn’t have a name and is used to instantiate a class that implements an interface or extends a class. Anonymous classes are typically used for implementing interfaces or abstract classes in a concise manner.
- They are usually used when you need a one-time use class for handling a specific event or task.

#### **Example**:

```java
interface Greeting {
    void sayHello();
}

public class AnonymousInnerClassExample {
    public static void main(String[] args) {
        // Anonymous inner class implementing the Greeting interface
        Greeting greeting = new Greeting() {
            public void sayHello() {
                System.out.println("Hello from anonymous inner class!");
            }
        };

        greeting.sayHello();
    }
}
```

**Output**:

```
Hello from anonymous inner class!
```

- **Explanation**: The anonymous inner class implements the `Greeting` interface and overrides the `sayHello` method. This is a one-time use class that doesn’t need a name.

### **Key Differences Between Inner Classes and Outer Classes**

| Feature                  | **Inner Class** | **Outer Class** |
| ------------------------ | -------------------------------------------------------------------- | ------------------------------------------ |
| **Declaration Location** | Inside another class                                                 | Outside any class                          |
| **Access** | Can access outer class members (instance or static)                  | Cannot directly access inner class members |
| **Instantiation** | Requires an instance of the outer class (for non-static inner class) | Can be instantiated directly               |
| **Visibility** | Can be private, protected, or public                                 | Can be public, default, or private         |

### **Advantages of Using Inner Classes**

1. **Logical Grouping**: Inner classes can logically group classes that are only used in one place, making the code easier to understand.
2. **Encapsulation**: Inner classes can access private members of the outer class, which helps in maintaining tight encapsulation.
3. **Code Organization**: Inner classes are useful when the class should not be visible outside the enclosing class or package.

### **Conclusion**

- Java provides **four types** of inner classes: **Member Inner Class**, **Static Nested Class**, **Local Inner Class**, and **Anonymous Inner Class**.
- **Inner classes** are useful for logically grouping related classes and providing functionality closely tied to the outer class.
- Depending on your requirements, you can choose the appropriate type of inner class to organize and structure your code more effectively.
