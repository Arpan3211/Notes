# Real-World Examples of Polymorphism


Here are **multiple scenarios** demonstrating **Polymorphism** in Java, showcasing different use cases:

### **1. Scenario: Polymorphism with Method Overloading (Compile-Time Polymorphism)**

**Scenario**: A calculator that can perform addition on different data types (int, double, and String).

**Example**:

```java
class Calculator {
    // Method for adding two integers
    public int add(int a, int b) {
        return a + b;
    }

    // Overloaded method for adding two doubles
    public double add(double a, double b) {
        return a + b;
    }

    // Overloaded method for concatenating two strings
    public String add(String a, String b) {
        return a + b;
    }
}

public class Main {
    public static void main(String[] args) {
        Calculator calculator = new Calculator();

        // Using method with integer arguments
        System.out.println("Addition of integers: " + calculator.add(5, 10));

        // Using method with double arguments
        System.out.println("Addition of doubles: " + calculator.add(5.5, 10.5));

        // Using method with string arguments
        System.out.println("Concatenation of strings: " + calculator.add("Hello, ", "World!"));
    }
}
```

**Explanation**:

- This example shows **method overloading**, where the `add()` method is defined multiple times with different argument types (int, double, String).
- The correct method is selected at **compile-time** based on the argument types passed.

**Output**:

```
Addition of integers: 15
Addition of doubles: 16.0
Concatenation of strings: Hello, World!
```

### **2. Scenario: Polymorphism with Method Overriding (Run-Time Polymorphism)**

**Scenario**: A zoo where animals (such as a Dog and a Cat) make different sounds, but we use a common reference to call the sound method.

**Example**:

```java
class Animal {
    public void sound() {
        System.out.println("Animals make sounds");
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

- **Method overriding** is used in this example, where the `sound()` method is overridden in both the `Dog` and `Cat` classes.
- At runtime, the **actual object type** (`Dog` or `Cat`) determines which `sound()` method gets called, even though the reference type is `Animal`.

**Output**:

```
Dog barks
Cat meows
```

### **3. Scenario: Polymorphism with Abstract Classes (Run-Time Polymorphism)**

**Scenario**: An abstract class `Shape` with different shapes (Circle, Rectangle) that calculate their area.

**Example**:

```java
abstract class Shape {
    // Abstract method to calculate area
    abstract void area();
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
        Shape shape1 = new Circle(5);     // Reference of Shape, object of Circle
        Shape shape2 = new Rectangle(4, 6); // Reference of Shape, object of Rectangle

        shape1.area();  // Outputs: Area of Circle: 78.53981633974483
        shape2.area();  // Outputs: Area of Rectangle: 24.0
    }
}
```

**Explanation**:

- An abstract class `Shape` defines an abstract method `area()`, which is implemented in the subclasses (`Circle`, `Rectangle`).
- The actual method `area()` is determined at **runtime** based on the object type (`Circle` or `Rectangle`).

**Output**:

```
Area of Circle: 78.53981633974483
Area of Rectangle: 24.0
```

### **4. Scenario: Polymorphism in Interface Implementation (Run-Time Polymorphism)**

**Scenario**: A `Payment` interface that defines a method `pay()`, and different payment methods like `CreditCard` and `PayPal` that implement the `pay()` method.

**Example**:

```java
interface Payment {
    void pay();
}

class CreditCard implements Payment {
    @Override
    public void pay() {
        System.out.println("Payment made using Credit Card");
    }
}

class PayPal implements Payment {
    @Override
    public void pay() {
        System.out.println("Payment made using PayPal");
    }
}

public class Main {
    public static void main(String[] args) {
        Payment payment1 = new CreditCard();  // Reference of Payment, object of CreditCard
        Payment payment2 = new PayPal();      // Reference of Payment, object of PayPal

        payment1.pay();  // Outputs: Payment made using Credit Card
        payment2.pay();  // Outputs: Payment made using PayPal
    }
}
```

**Explanation**:

- The `Payment` interface defines the `pay()` method.
- Both `CreditCard` and `PayPal` classes implement the `pay()` method in their own way.
- The method `pay()` is determined at **runtime** based on the actual object (`CreditCard` or `PayPal`).

**Output**:

```
Payment made using Credit Card
Payment made using PayPal
```

### **5. Scenario: Polymorphism in Constructor Overloading (Compile-Time Polymorphism)**

**Scenario**: A `Person` class with different constructors that accept various parameters.

**Example**:

```java
class Person {
    String name;
    int age;

    // Constructor with name parameter
    public Person(String name) {
        this.name = name;
    }

    // Constructor with name and age parameters
    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public void display() {
        System.out.println("Name: " + name + ", Age: " + age);
    }
}

public class Main {
    public static void main(String[] args) {
        Person person1 = new Person("Alice");           // Using constructor with name only
        Person person2 = new Person("Bob", 30);         // Using constructor with name and age

        person1.display();  // Outputs: Name: Alice, Age: 0
        person2.display();  // Outputs: Name: Bob, Age: 30
    }
}
```

**Explanation**:

- The `Person` class has two constructors: one accepts only the name, and the other accepts both the name and age.
- The appropriate constructor is chosen based on the number of arguments at **compile-time**.

**Output**:

```
Name: Alice, Age: 0
Name: Bob, Age: 30
```

### **6. Scenario: Polymorphism in Collections (Run-Time Polymorphism)**

**Scenario**: Storing different types of animals in a list and invoking their `sound()` method.

**Example**:

```java
import java.util.ArrayList;

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
        ArrayList<Animal> animals = new ArrayList<>();
        animals.add(new Dog());
        animals.add(new Cat());

        for (Animal animal : animals) {
            animal.sound();  // The correct method is called based on the actual object type
        }
    }
}
```

**Explanation**:

- In this scenario, different animal types (`Dog` and `Cat`) are stored in a **single collection** (`ArrayList<Animal>`).
- The method `sound()` is invoked polymorphically, and the correct method (based on the actual object) is called at **runtime**.

**Output**:

```
Dog barks
Cat meows
```

### **Summary**

- **Compile-Time Polymorphism (Method Overloading)**: Allows the same method to behave differently based on the number or type of parameters.
- **Run-Time Polymorphism (Method Overriding)**: Allows a method to be dynamically dispatched based on the actual object type, even when accessed via a superclass reference.

These different scenarios show how polymorphism allows you to write more flexible and reusable code, whether by choosing methods at compile time or resolving method calls at runtime.
