# Difference Between Encapsulation and Abstraction


Both **Encapsulation** and **Abstraction** are fundamental concepts in Object-Oriented Programming (OOP), but they serve different purposes and address different aspects of a program's design. Here's a detailed comparison:

### **1. Definition:**

- **Encapsulation**:

  - Encapsulation is the concept of **bundling** the data (variables) and the methods (functions) that operate on the data into a single unit, or class.
  - It is also about **restricting direct access** to some of the object's components, which can prevent the accidental modification of data. This is done using **access modifiers** such as `private`, `protected`, and `public`.

- **Abstraction**:
  - Abstraction is the concept of **hiding the complex implementation details** of a system and exposing only the necessary and relevant parts of it.
  - It focuses on **what** an object does, not **how** it does it.
  - Abstraction is achieved through **abstract classes** or **interfaces** in Java, allowing the implementation to be hidden from the user.

### **2. Focus:**

- **Encapsulation**:

  - Focuses on **data protection** and **modularizing** the code.
  - It’s about controlling access to the internal state of the object and ensuring that the object's data cannot be altered in unintended ways.

- **Abstraction**:
  - Focuses on **hiding unnecessary details** from the user.
  - It’s about showing only the essential features and providing a simple interface for interaction.

### **3. Access Control:**

- **Encapsulation**:

  - It uses **access modifiers** to protect the data and restrict the way the data is accessed or modified.
  - Commonly involves **getter** and **setter** methods to control access to private variables.

- **Abstraction**:
  - It hides the **implementation details** of methods or classes, exposing only what is necessary.
  - This can be achieved by using **abstract classes** or **interfaces**.

### **4. Implementation:**

- **Encapsulation**:

  - Implemented using **classes**, **access modifiers** (`private`, `protected`, `public`), and **getter/setter** methods.
  - Example: Hiding sensitive data (e.g., bank account balance) and providing methods to retrieve or modify it.

- **Abstraction**:
  - Implemented using **abstract classes**, **interfaces**, and **abstract methods**.
  - Example: A **Shape** class with abstract methods like `draw()` but no details of how the drawing is done. Concrete classes like **Circle** or **Rectangle** will implement how the drawing is done.

### **5. Purpose:**

- **Encapsulation**:

  - Protects the internal state of an object from unauthorized access and modification.
  - Ensures that an object’s data is consistent and valid through controlled access.

- **Abstraction**:
  - Hides the complex logic from the user and provides a simple interface for using an object.
  - Focuses on **reducing complexity** by only showing relevant features.

### **6. Example in Code:**

#### **Encapsulation Example**:

```java
class Account {
    private double balance;  // Private field

    public void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
        }
    }

    public double getBalance() {
        return balance;
    }
}
```

- The **balance** is hidden using the `private` access modifier.
- Access to **balance** is controlled through **public methods** (`deposit()` and `getBalance()`), ensuring that the balance can only be changed in a controlled way.

#### **Abstraction Example**:

```java
abstract class Shape {
    public abstract void draw();  // Abstract method
}

class Circle extends Shape {
    @Override
    public void draw() {
        System.out.println("Drawing Circle");
    }
}

class Square extends Shape {
    @Override
    public void draw() {
        System.out.println("Drawing Square");
    }
}
```

- The **Shape** class is abstract and provides an abstract method `draw()` without specifying how it is done.
- **Circle** and **Square** provide the specific implementations of the `draw()` method.

### **7. Real-World Analogy:**

- **Encapsulation**:

  - Think of a **pill bottle**. The **pills (data)** are inside the bottle, and you have to use a **lid (method)** to access or modify the pills. You can only interact with the pills through the lid, which ensures they are not misused.

- **Abstraction**:
  - Think of a **TV remote**. You interact with the **buttons (interface)** to control the TV, but you don’t need to know how the TV internally works (e.g., signal processing, power control). You just know what the remote does when you press buttons.

### **8. Example in Real Life:**

- **Encapsulation**:

  - A **bank account** has private data such as the balance and account number. Only the methods provided by the bank (like `deposit()`, `withdraw()`, etc.) can manipulate these details. Direct access to the account's balance is restricted.

- **Abstraction**:
  - A **car** has complex systems under the hood (engine, transmission, electronics). As a driver, you don’t need to know how these systems work. You simply interact with the **steering wheel, pedals, and gearshift**, which provide a simple interface for driving the car.

### **9. Key Differences:**

| Aspect             | Encapsulation                                                        | Abstraction                                                         |
| ------------------ | -------------------------------------------------------------------- | ------------------------------------------------------------------- |
| **Purpose** | Protects the data by restricting access.                             | Hides the implementation details.                                   |
| **Visibility** | Controls access to the internal data of an object.                   | Hides unnecessary implementation details.                           |
| **Implementation** | Achieved through **classes**, **methods**, and **access modifiers**. | Achieved through **abstract classes** or **interfaces**.            |
| **Focus** | **Data security** and **access control**.                            | **Simplified interaction** and **reduced complexity**.              |
| **Example** | A class with **private** fields and **getter/setter** methods.       | A class with abstract methods, hiding the logic of implementations. |

### **Conclusion:**

- **Encapsulation** is about **data protection** and restricting access to the internal state, ensuring that data is manipulated safely.
- **Abstraction** is about **hiding complexity** by providing a simplified interface, focusing on **what** an object does rather than **how** it does it.
