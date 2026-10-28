# Abstraction in Java


### **Abstraction in Java**

Abstraction is one of the fundamental concepts in Object-Oriented Programming (OOP) that allows you to hide the complex implementation details and show only the essential features of an object. The idea behind abstraction is to represent only the relevant details to the user, leaving the unnecessary complexities hidden.

Abstraction can be achieved using **abstract classes** and **interfaces** in Java. It allows developers to create more modular and understandable code, making it easier to work with large applications.

### **Key Concepts of Abstraction:**

1. **Hiding Implementation Details**:
   Abstraction hides the internal workings (implementation details) and only exposes what is necessary. This helps to reduce complexity.

2. **Focus on What an Object Does, Not How It Does It**:
   Abstraction allows you to focus on _what_ an object represents and _what_ its behavior should be, without worrying about _how_ the behavior is implemented.

### **Types of Abstraction:**

1. **Abstraction through Abstract Classes**
2. **Abstraction through Interfaces**

### **Abstraction in Java:**

#### **1. Abstract Classes:**

An **abstract class** is a class that cannot be instantiated on its own and is meant to be subclassed by other classes. It can have both abstract methods (without implementation) and concrete methods (with implementation). Abstract classes are useful when you want to define a base class with some common functionality but leave the implementation of certain methods to the subclasses.

- **Abstract Method**: A method that is declared without an implementation. It must be implemented by any non-abstract subclass.

#### **Syntax**:

```java
abstract class Animal {
    abstract void sound(); // abstract method

    void sleep() {  // concrete method
        System.out.println("Animal is sleeping.");
    }
}

class Dog extends Animal {
    void sound() {
        System.out.println("Dog barks.");
    }
}

class Main {
    public static void main(String[] args) {
        Animal animal = new Dog(); // You cannot instantiate Animal directly.
        animal.sound();  // Dog barks.
        animal.sleep();  // Animal is sleeping.
    }
}
```

#### **Explanation**:

- The `Animal` class is abstract, which means it cannot be instantiated directly.
- The `sound()` method is abstract, meaning the subclasses must implement it.
- The `sleep()` method is concrete, so it can be used by any subclass directly.
- The `Dog` class extends `Animal` and implements the abstract `sound()` method.

### **2. Interfaces:**

An **interface** in Java is a reference type, similar to a class, that can contain only constants, method signatures, default methods, static methods, and nested types. Interfaces are used to define a contract that other classes must follow. A class that implements an interface must provide an implementation for all the methods declared in the interface.

#### **Syntax**:

```java
interface Animal {
    void sound();  // abstract method
}

class Dog implements Animal {
    public void sound() {
        System.out.println("Dog barks.");
    }
}

class Main {
    public static void main(String[] args) {
        Animal animal = new Dog();  // Interface reference pointing to Dog object
        animal.sound();  // Dog barks.
    }
}
```

#### **Explanation**:

- The `Animal` interface declares the `sound()` method.
- The `Dog` class implements the `Animal` interface, providing its own version of the `sound()` method.
- The `Main` class uses the interface `Animal` to refer to the `Dog` object, showing the abstraction of the object's actual type and behavior.

### **Advantages of Abstraction**:

1. **Hiding Complexity**:
   Abstraction hides unnecessary details, allowing you to focus on high-level concepts. For example, when you drive a car, you don’t need to understand how the engine works internally. You just need to know how to operate it.

2. **Modularity**:
   By breaking down a system into abstract components, you can work on different parts independently. For instance, defining abstract methods allows subclasses to implement their own versions.

3. **Flexibility**:
   You can change the implementation details without affecting the rest of the system, as long as the interface or abstract class remains the same. This makes it easier to maintain and update the code.

4. **Easier Maintenance**:
   When only essential details are exposed, the complexity is reduced. This also makes the system easier to modify without breaking existing code.

5. **Code Reusability**:
   With abstraction, you can define common methods in abstract classes or interfaces and reuse them across various concrete implementations, making your code more maintainable and reusable.

### **Real-World Example of Abstraction:**

#### **ATM System**

Consider an **ATM machine**. When you use an ATM, you don’t need to understand the internal working of the ATM such as how it communicates with the bank’s server or how it dispenses money. You interact with the ATM using a simple interface: inserting your card, entering your PIN, selecting a transaction, and receiving cash or a balance statement.

Here, the **ATM** system is abstracted, as the user only interacts with the system’s interface without knowing the complex underlying processes.

#### **Java Implementation of an ATM System:**

```java
// Abstract class
abstract class ATM {
    abstract void insertCard();
    abstract void enterPin();
    abstract void selectTransaction();
    abstract void dispenseCash();
}

// Concrete class implementing the abstract class
class RealATM extends ATM {
    void insertCard() {
        System.out.println("Card inserted.");
    }
    void enterPin() {
        System.out.println("PIN entered.");
    }
    void selectTransaction() {
        System.out.println("Transaction selected.");
    }
    void dispenseCash() {
        System.out.println("Cash dispensed.");
    }
}

class Main {
    public static void main(String[] args) {
        ATM atm = new RealATM();
        atm.insertCard();
        atm.enterPin();
        atm.selectTransaction();
        atm.dispenseCash();
    }
}
```

#### **Explanation**:

- The **ATM** class is abstract, hiding the specific details of ATM functionality.
- The `RealATM` class provides the actual implementation of each operation (e.g., inserting the card, entering the pin).
- The `Main` class uses the **ATM** interface to interact with the **RealATM** object, showing how abstraction hides the implementation details.

### **Summary of Abstraction in Java:**

- **Abstraction** allows you to focus on the essential features while hiding unnecessary implementation details.
- It can be achieved using **abstract classes** (providing partial implementation) or **interfaces** (defining a contract).
- **Abstract classes** are used when you want to provide common functionality to multiple classes, while **interfaces** are used to define behavior that can be implemented by any class, regardless of where it fits in the class hierarchy.
- The main goal of abstraction is to reduce complexity, improve code maintenance, and enhance reusability.

---

### **Who Is the "User" in Abstraction?**

In software, the "user" can mean two things:

1. **End-User**: The person interacting with the application (like using a mobile app or website).
2. **Developer/User of Your Code**: Other programmers who use the class or API you've created.

When we talk about abstraction in Java, **the "user" typically refers to the second type**—a programmer who uses your code.

### **What Does "Hiding Unnecessary Details" Mean?**

- It doesn’t mean literally hiding the code from visibility.
- It means providing a clean and simple interface (methods or functionalities) to interact with, while keeping the **implementation details and complexity** hidden inside the class.

In simpler terms:

- You only **expose what the user needs to know**.
- You **hide the internal working** so the user doesn't need to worry about it.

### **Why Do This?**

1. **Ease of Use**: The user (developer) doesn't need to understand the internal complexities.
2. **Flexibility**: You can change the internal implementation without breaking the code that uses it.
3. **Maintainability**: Simplifying what is exposed makes the system easier to maintain.

### **Normal Class vs. Abstract Class**

In a **normal class**, everything can be concrete and fully implemented.

- If the user sees all the details (every method and how they work), they might need to understand all of it to use the class effectively.
- This can make the class harder to use if it's complex.

In an **abstract class**, you can:

- Define only the **relevant methods** the user needs to know (abstract methods).
- Let subclasses handle the internal complexities by providing concrete implementations.

### **Example: Bank System**

Imagine you’re creating a **Banking System API** where developers use your classes to interact with bank accounts.

Without abstraction:

```java
class BankAccount {
    void transferMoney(String accountFrom, String accountTo, double amount) {
        // Steps to transfer money
        connectToBankServer();
        authenticateAccount(accountFrom);
        deductAmount(accountFrom, amount);
        creditAmount(accountTo, amount);
    }

    void connectToBankServer() {
        // Complex implementation
    }

    void authenticateAccount(String account) {
        // Complex implementation
    }

    void deductAmount(String account, double amount) {
        // Complex implementation
    }

    void creditAmount(String account, double amount) {
        // Complex implementation
    }
}
```

Here, the developer using your class needs to know **all these methods** and the sequence to use them correctly.

With abstraction:

```java
abstract class BankAccount {
    abstract void transferMoney(String accountFrom, String accountTo, double amount);

    // Internal methods are not exposed to the user
    protected void connectToBankServer() {
        // Complex implementation
    }

    protected void authenticateAccount(String account) {
        // Complex implementation
    }

    protected void deductAmount(String account, double amount) {
        // Complex implementation
    }

    protected void creditAmount(String account, double amount) {
        // Complex implementation
    }
}

class MyBankAccount extends BankAccount {
    @Override
    void transferMoney(String accountFrom, String accountTo, double amount) {
        connectToBankServer();
        authenticateAccount(accountFrom);
        deductAmount(accountFrom, amount);
        creditAmount(accountTo, amount);
        System.out.println("Transfer successful");
    }
}
```

Now, the user only needs to call **`transferMoney()`**. They don’t need to worry about how the server is connected, how authentication works, or how money is debited or credited. This complexity is hidden inside the class.

### **What Abstraction Really Does**

- **Normal Class**: Everything is visible, which can overwhelm the user of your code.
- **Abstract Class**: Exposes only what’s necessary and hides unnecessary details, simplifying usage and focusing on the "what" instead of the "how."

### **Key Takeaway**

Abstraction is not about hiding code from **physical visibility** but about separating **what the user needs to know** (interface) from **how it works internally** (implementation). This makes your code cleaner, easier to use, and more maintainable.

---

An **abstract class** in Java is a class that **cannot be instantiated** because it is meant to serve as a blueprint for other classes. It is not complete by itself; instead, it is designed to be extended by subclasses that provide the implementation of its abstract methods.

### 1. **Incomplete Implementation**

- An abstract class can have one or more **abstract methods** (methods without a body). These methods **must be implemented by subclasses**.
- Since the abstract class does not provide complete functionality, creating an object of it would result in an incomplete object, which makes no sense.

**Example:**

```java
abstract class Shape {
    abstract void draw(); // No implementation here
}

class Circle extends Shape {
    void draw() {
        System.out.println("Drawing a circle");
    }
}

// Shape s = new Shape(); // Error: Cannot instantiate the abstract class
Shape s = new Circle(); // Works because Circle provides the implementation
```

**Why can’t `Shape` be instantiated?**

- Because it doesn’t define how to `draw()`, and attempting to use `Shape` directly would lead to missing behavior.

### 2. **Encouraging Reusability**

- Abstract classes are intended to define **common behavior** and allow specific subclasses to provide their own versions of the missing functionality.
- This enforces the design principle of **code reuse** while maintaining flexibility.

**Example:**

```java
abstract class Animal {
    abstract void sound();

    void sleep() {
        System.out.println("Sleeping...");
    }
}

class Dog extends Animal {
    void sound() {
        System.out.println("Bark");
    }
}

class Cat extends Animal {
    void sound() {
        System.out.println("Meow");
    }
}

public class Main {
    public static void main(String[] args) {
        // Animal a = new Animal(); // Error: Cannot instantiate
        Animal dog = new Dog();
        dog.sound(); // Output: Bark
        dog.sleep(); // Output: Sleeping...
    }
}
```

Here, `Animal` defines the **common behavior** (`sleep()`), while `Dog` and `Cat` define the **specific behavior** (`sound()`).

### 3. **Enforcing Polymorphism**

- Abstract classes are often used to implement **polymorphism**, allowing a common reference type (the abstract class) to point to objects of different subclasses.
- If abstract classes were instantiable, this polymorphism would lose its purpose because the abstract class wouldn’t represent a meaningful entity on its own.

**Example:**

```java
abstract class Vehicle {
    abstract void start();
}

class Car extends Vehicle {
    void start() {
        System.out.println("Car is starting");
    }
}

class Bike extends Vehicle {
    void start() {
        System.out.println("Bike is starting");
    }
}

public class Main {
    public static void main(String[] args) {
        Vehicle v1 = new Car();
        Vehicle v2 = new Bike();
        v1.start(); // Output: Car is starting
        v2.start(); // Output: Bike is starting
    }
}
```

### 4. **Logical Design**

- Abstract classes represent **concepts** rather than concrete objects.
- For example:
  - A `Shape` class represents the idea of a shape (circle, rectangle, etc.), but it is meaningless to create a generic "shape" object without specifying what type of shape it is.

**Example:**

```java
abstract class Shape {
    abstract void draw();
}

class Circle extends Shape {
    void draw() {
        System.out.println("Drawing a Circle");
    }
}

class Rectangle extends Shape {
    void draw() {
        System.out.println("Drawing a Rectangle");
    }
}

// Shape s = new Shape(); // Doesn't make sense because Shape is not specific
Shape s = new Circle(); // Makes sense
```

### 5. **Prevent Misuse**

- By marking a class as abstract, Java enforces that it can only be **used through inheritance**. This ensures that the intended design of the class is followed.

### **Why Abstract Classes Cannot Be Instantiated:**

1. **They are incomplete**: They may have abstract methods with no implementation.
2. **They represent concepts**, not actual objects.
3. **They enforce inheritance**, allowing subclasses to provide specific implementations.
4. **Polymorphism**: Abstract classes allow dynamic behavior based on the subclass type, not the abstract class itself.

### Key Takeaway:

An abstract class cannot be instantiated because it serves as a **template** for subclasses, not as a fully functional class. Its purpose is to define a structure or a contract that subclasses must follow, while delegating the responsibility of implementing certain details to the subclasses.
