# What is static in Java


The `static` keyword in Java is used to define members (variables, methods, blocks, and nested classes) that belong to the class rather than any specific object. These members are shared across all instances of the class.

- **Static Variable**: A variable that is shared by all instances of the class.
- **Static Method**: A method that belongs to the class and can be called without creating an object of the class.
- **Static Block**: A block of code executed once when the class is loaded.
- **Static Class**: A nested class that is declared static.

### **2. Why Use `static`?**

1. **Memory Efficiency**: Shared members save memory by storing only one copy for all instances.
2. **Global Access**: Static members can be accessed without creating objects, making them convenient for utility or constant values.
3. **Class-Level Behavior**: They define behaviors or properties common to all objects of the class.
4. **Initialization Logic**: Static blocks can initialize static members or perform tasks when the class is loaded.

### **3. How to Use `static`?**

#### **Static Variables**

- Shared across all instances.
- Example:

  ```java
  class Counter {
      static int count = 0;  // Static variable

      Counter() {
          count++;
      }

      void displayCount() {
          System.out.println("Count: " + count);
      }
  }

  public class Main {
      public static void main(String[] args) {
          Counter c1 = new Counter();
          Counter c2 = new Counter();

          c1.displayCount();  // Output: Count: 2
          c2.displayCount();  // Output: Count: 2
      }
  }
  ```

#### **Static Methods**

- Called without creating an object of the class.
- Cannot access non-static members directly.
- Example:

  ```java
  class Utility {
      static int square(int num) {  // Static method
          return num * num;
      }
  }

  public class Main {
      public static void main(String[] args) {
          System.out.println("Square of 5: " + Utility.square(5));  // Output: Square of 5: 25
      }
  }
  ```

#### **Static Blocks**

- Executes once when the class is loaded.
- Used for initialization.
- Example:

  ```java
  class Demo {
      static int num;

      static {  // Static block
          num = 10;
          System.out.println("Static block executed!");
      }
  }

  public class Main {
      public static void main(String[] args) {
          System.out.println("Number: " + Demo.num);
      }
  }
  ```

#### **Static Classes**

- Only nested classes can be static.
- A static nested class can access only static members of the outer class.
- Example:

  ```java
  class OuterClass {
      static class NestedClass {  // Static nested class
          static void display() {
              System.out.println("Static nested class!");
          }
      }
  }

  public class Main {
      public static void main(String[] args) {
          OuterClass.NestedClass.display();  // Calling static nested class method
      }
  }
  ```

### **4. When to Use `static`?**

- **Static Variables**:
  - When a property should be shared across all instances (e.g., a counter, configuration values).
- **Static Methods**:
  - For utility or helper methods (e.g., `Math.max()`, `Math.sqrt()`).
  - For methods that don’t depend on object-specific data.
- **Static Blocks**:
  - When initialization logic for static members is needed (e.g., initializing a database connection).
- **Static Classes**:
  - When a nested class doesn’t require access to instance data of the outer class.

### **Key Points**

1. Static methods cannot access non-static variables or methods directly.
2. Static blocks are executed in the order they appear, only once when the class is loaded.
3. The `this` keyword cannot be used in static methods because they are class-level and don’t reference any specific object.

### Example to Combine `static` Members

```java
class Config {
    static String appName = "MyApp";  // Static variable
    static String version;

    static {  // Static block
        version = "1.0";
        System.out.println("Static block initialized!");
    }

    static void displayConfig() {  // Static method
        System.out.println("App Name: " + appName);
        System.out.println("Version: " + version);
    }
}

public class Main {
    public static void main(String[] args) {
        Config.displayConfig();  // Accessing static members
    }
}
```

Output:

```
Static block initialized!
App Name: MyApp
Version: 1.0
```

By using `static`, you ensure better memory usage and provide a clear separation of class-level and instance-level behavior in your programs.

---

---


---

## Additional notes: Static.md
_(older separate note on this topic)_

# Understanding static

When a member is declared static, it can be accessed before any objects of its class are created, and without reference to any object. You can declare both methods and variables to be static. The most common example of a static member is `main()`.
`main()` is declared as static because it must be called before any objects exist. Static method in Java is a method which belongs to the class and not to the object.

- A static method can access only static data. It cannot access non-static data (instance variables).
- A non-static member belongs to an instance. It's meaningless without somehow resolving which instance of a class you are talking about. In a static context, you don't have an instance, that's why you can't access a non-static member without explicitly mentioning an object reference.

In fact, you can access a non-static member in a static context by specifying the object reference explicitly:

```java
public class Human {
    String message = "Hello World";

    public static void display(Human human){
        System.out.println(human.message);
    }

    public static void main(String[] args) {
        Human kunal = new Human();
        kunal.message = "Kunal's message";
        Human.display(kunal);
    }
}
```

- A static method can call only other static methods and cannot call a non-static method from it.
- A static method can be accessed directly by the class name and doesn’t need any object.
- A static method cannot refer to `this` or `super` keywords in any way.

If you need to do computation in order to initialize your static variables, you can declare a static block that gets executed exactly once, when the class is first loaded.

```java
// Demonstrate static variables, methods, and blocks.
class UseStatic {
    static int a = 3;
    static int b;
    static void meth(int x) {
        System.out.println("x = " + x);
        System.out.println("a = " + a);
        System.out.println("b = " + b);
    }
    static {
        System.out.println("Static block initialized.");
        b = a * 4;
    }
    public static void main(String args[]) {
        meth(42);
    }
}
```

As soon as the `UseStatic` class is loaded, all of the static statements are run. First, `a` is set to 3, then the static block executes, which prints a message and then initializes `b` to `a*4` or 12. Then `main()` is called, which calls `meth()`, passing 42 to `x`. The three `println()` statements refer to the two static variables `a` and `b`, as well as to the local variable `x`.

Here is the output of the program:

```
Static block initialized.
x = 42
a = 3
b = 12
```

**Note:** `main` method is static, since it must be accessible for an application to run, before any instantiation takes place.

- **Only nested classes can be static.**
- **Static inner classes can have static variables.**

You can't override the inherited static methods, as in Java overriding takes place by resolving the type of object at run-time and not compile-time, and then calling the respective method. Static methods are class-level methods, so it is always resolved during compile time. Static **interface methods** are not inherited by either an implementing class or a sub-interface.

**Example:**

```java
public class Static {

    // class Test  // ERROR
    static class Test{
        String name;

        public Test(String name) {
            this.name = name;
        }
    }

    public static void main(String[] args) {
        Test a = new Test("Kunal");

        Test b = new Test("Rahul");

        System.out.println(a.name); // Kunal
        System.out.println(b.name); // Rahul
    }
}
```

Because:

The static keyword may modify the declaration of a member type `C` within the body of a non-inner class or interface `T`. Its effect is to declare that `C` is not an inner class. Just as a static method of `T` has no current instance of `T` in its body, `C` also has no current instance of `T`, nor does it have any lexically enclosing instances.

Here, `Test` does not have any instance of its outer class `Static`. Neither does `main`. But `main` & `Test` can have instances of each other.
