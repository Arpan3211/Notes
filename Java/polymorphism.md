# Polymorphism in Java


Polymorphism is one of the fundamental concepts in **Object-Oriented Programming (OOP)**. It allows one interface to be used for different data types, meaning the same method or function can behave differently based on the object calling it. Polymorphism enhances the flexibility and reusability of code.

The term "polymorphism" is derived from Greek, meaning "many shapes" (poly = many, morph = form/shape). In Java, polymorphism allows you to perform the same operation on different objects, but each object can respond differently to the operation.

### **Types of Polymorphism in Java**

There are **two main types of polymorphism** in Java:

1. **Compile-Time Polymorphism** (also called **Static Polymorphism**)
2. **Run-Time Polymorphism** (also called **Dynamic Polymorphism**)

### **1. Compile-Time Polymorphism (Static Polymorphism)**

**Definition**:  
Compile-time polymorphism occurs when the method to be called is determined at compile time. This type of polymorphism is achieved using **method overloading** and **operator overloading**. However, Java doesn't support operator overloading, so we focus on **method overloading**.

**Method Overloading**:  
Method overloading is when two or more methods in the same class have the same name but different parameters (either in the number of parameters or their types).

**Key Characteristics**:

- Occurs at compile-time.
- Achieved through method overloading (same method name, different parameters).
- The decision about which method to invoke is made at the time of compilation.

**Example**:

```java
class Printer {
    // Overloaded method for printing a string
    public void print(String s) {
        System.out.println(s);
    }

    // Overloaded method for printing an integer
    public void print(int num) {
        System.out.println(num);
    }

    // Overloaded method for printing a double
    public void print(double d) {
        System.out.println(d);
    }
}

public class Main {
    public static void main(String[] args) {
        Printer printer = new Printer();
        printer.print("Hello, World!");  // Calls the print(String) method
        printer.print(100);              // Calls the print(int) method
        printer.print(99.99);            // Calls the print(double) method
    }
}
```

**Explanation**:

- The `Printer` class has three overloaded methods named `print()`, each accepting different parameter types (String, int, and double).
- When you call `printer.print()`, Java will determine which version of the `print()` method to invoke based on the type of argument passed at compile-time.

**Output**:

```
Hello, World!
100
99.99
```

**Key Point**:

- The method that gets invoked is determined at compile-time based on the arguments passed.

### **2. Run-Time Polymorphism (Dynamic Polymorphism)**

**Definition**:  
Run-time polymorphism is when the method to be called is determined at **runtime**. It occurs when a subclass overrides a method from the parent class, and the method invocation is resolved at runtime depending on the object type (not the reference type).

**Method Overriding**:  
Method overriding occurs when a subclass provides its own implementation of a method that is already defined in its superclass. The version of the overridden method that gets invoked is determined at runtime based on the object type, not the reference type.

**Key Characteristics**:

- Occurs at runtime.
- Achieved through method overriding (same method signature in both parent and child classes).
- The method that gets invoked is determined dynamically based on the object type at runtime.

**Example**:

```java
class Animal {
    public void sound() {
        System.out.println("Animal makes a sound");
    }
}

class Dog extends Animal {
    @Override
    public void sound() {
        System.out.println("Dog barks");
    }
}

class Cat extends Animal {
    @Override
    public void sound() {
        System.out.println("Cat meows");
    }
}

public class Main {
    public static void main(String[] args) {
        Animal animal1 = new Dog();  // Reference of Animal, object of Dog
        Animal animal2 = new Cat();  // Reference of Animal, object of Cat

        animal1.sound();  // Outputs: Dog barks (Method resolved at runtime)
        animal2.sound();  // Outputs: Cat meows (Method resolved at runtime)
    }
}
```

**Explanation**:

- The `sound()` method is overridden in both the `Dog` and `Cat` classes.
- Even though the reference type is `Animal` for both `animal1` and `animal2`, the actual method that gets called depends on the object type (`Dog` or `Cat`) at runtime.

**Output**:

```
Dog barks
Cat meows
```

**Key Point**:

- The method that gets invoked is determined at runtime, depending on the actual object type (not the reference type).

### **Key Differences Between Compile-Time and Run-Time Polymorphism**

| **Feature** | **Compile-Time Polymorphism** | **Run-Time Polymorphism** |
| ------------------------ | ------------------------------------------------------------ | -------------------------------------------------------------------- |
| **Method** | Achieved by **method overloading**.                          | Achieved by **method overriding**.                                   |
| **Time of Binding** | The method to be called is bound during **compile-time**.    | The method to be called is bound during **runtime**.                 |
| **Polymorphic Behavior** | Method resolution is based on the **method signature**.      | Method resolution is based on the **object type** at runtime.        |
| **Example** | Method overloading (same method name, different parameters). | Method overriding (same method signature, different implementation). |
| **Type of Binding** | **Static binding** (early binding).                          | **Dynamic binding** (late binding).                                  |

### **Advantages of Polymorphism**

1. **Flexibility**: Polymorphism allows a single method to perform different tasks based on the object type, making it easier to extend and maintain the code.
2. **Code Reusability**: With polymorphism, the same code can work with different objects, which reduces redundancy.
3. **Ease of Maintenance**: If you need to change the behavior of a method, you only need to update the method in the subclass instead of all places the method is used.
4. **Simplified Code**: Polymorphism helps in reducing the complexity of code by enabling a more generic and reusable interface.

### **Real-World Example of Polymorphism**

Consider a scenario where you have multiple shapes (circle, rectangle, etc.), and each shape needs to calculate its area. You can create a common interface (or abstract class) `Shape` and use polymorphism to handle different shapes without changing the code structure.

```java
abstract class Shape {
    abstract void area();  // Abstract method to be overridden by subclasses
}

class Circle extends Shape {
    double radius;

    public Circle(double radius) {
        this.radius = radius;
    }

    @Override
    void area() {
        System.out.println("Area of Circle: " + (Math.PI * radius * radius));
    }
}

class Rectangle extends Shape {
    double length, width;

    public Rectangle(double length, double width) {
        this.length = length;
        this.width = width;
    }

    @Override
    void area() {
        System.out.println("Area of Rectangle: " + (length * width));
    }
}

public class Main {
    public static void main(String[] args) {
        Shape shape1 = new Circle(5);  // Create a Circle object
        Shape shape2 = new Rectangle(4, 6);  // Create a Rectangle object

        shape1.area();  // Outputs: Area of Circle: 78.53981633974483
        shape2.area();  // Outputs: Area of Rectangle: 24.0
    }
}
```

**Explanation**:

- The `Shape` class is abstract and contains an abstract method `area()`.
- The `Circle` and `Rectangle` classes implement the `area()` method in their own way.
- The method `area()` is called polymorphically on different types of `Shape` objects (`Circle` and `Rectangle`).

**Output**:

```
Area of Circle: 78.53981633974483
Area of Rectangle: 24.0
```

### **Conclusion**

Polymorphism is a powerful concept in Java that allows the same method to behave differently based on the object it is invoked on. It provides flexibility, maintainability, and extensibility to object-oriented systems by enabling dynamic method resolution. Polymorphism can be achieved through **method overloading** (compile-time) and **method overriding** (run-time).
