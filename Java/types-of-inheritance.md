# Types of Inheritance (Single, Multilevel, Hierarchical)


### **1. Single Inheritance**

**Definition**:  
Single inheritance is the simplest form of inheritance where a class (child class or subclass) inherits properties and methods from a single class (parent class or superclass). In this type of inheritance, the child class inherits all the public and protected members of the parent class and can add or override behavior as needed.

**Example**:  
In single inheritance, one class directly extends another class. The subclass can access the inherited properties and methods of the superclass, and it can also have its own additional functionality.

```java
// Parent class (Superclass)
class Animal {
    public void sound() {
        System.out.println("Animal makes a sound");
    }
}

// Child class (Subclass) inherits from Animal
class Dog extends Animal {
    public void sound() {
        System.out.println("Dog barks");
    }
}

public class Main {
    public static void main(String[] args) {
        Dog dog = new Dog();
        dog.sound(); // Outputs: Dog barks
    }
}
```

**Explanation**:

- The `Dog` class **inherits** the `sound()` method from the `Animal` class.
- The `Dog` class can override the inherited `sound()` method to provide its own behavior, as shown in the example.
- **Single inheritance** allows the `Dog` class to directly extend `Animal` and reuse its functionality.

**Key Points**:

- **Single inheritance** ensures a simpler, direct inheritance path.
- A subclass can inherit all public and protected properties and methods from a single superclass.

### **2. Multilevel Inheritance**

**Definition**:  
Multilevel inheritance occurs when a class (child class or subclass) inherits from another class, which is also a subclass of a third class. In other words, a class extends another class, which in turn extends a third class. This creates a **multi-level chain of inheritance**.

In Java, multilevel inheritance is supported, but Java does not support multiple inheritance (where a class inherits from more than one class).

**Example**:

```java
// Parent class (Superclass)
class Animal {
    public void sound() {
        System.out.println("Animal makes a sound");
    }
}

// Child class (Subclass) inherits from Animal
class Dog extends Animal {
    public void sound() {
        System.out.println("Dog barks");
    }
}

// Grandchild class (Sub-subclass) inherits from Dog
class Puppy extends Dog {
    public void sound() {
        System.out.println("Puppy whines");
    }
}

public class Main {
    public static void main(String[] args) {
        Puppy puppy = new Puppy();
        puppy.sound(); // Outputs: Puppy whines
    }
}
```

**Explanation**:

- The `Puppy` class inherits from `Dog`, which itself inherits from `Animal`.
- The `sound()` method is inherited from `Animal` and `Dog`, but it is overridden in `Puppy` to provide a specific implementation.
- **Multilevel inheritance** allows the `Puppy` class to access methods from both the `Dog` and `Animal` classes through the inheritance chain.

**Key Points**:

- **Multilevel inheritance** creates a hierarchy of classes, where a subclass can inherit from another subclass, and so on.
- The child class inherits not only from the direct superclass but also from the "ancestor" classes in the chain.
- This allows more specialized behavior to be added progressively in the chain.

### **3. Hierarchical Inheritance**

**Definition**:  
In hierarchical inheritance, multiple classes inherit from a **single parent class**. The parent class provides common functionality, and all the child classes (subclasses) inherit this functionality and can extend it with their own unique behaviors.

**Example**:

```java
// Parent class (Superclass)
class Animal {
    public void sound() {
        System.out.println("Animal makes a sound");
    }
}

// Child class 1 (Subclass) inherits from Animal
class Dog extends Animal {
    public void sound() {
        System.out.println("Dog barks");
    }
}

// Child class 2 (Subclass) inherits from Animal
class Cat extends Animal {
    public void sound() {
        System.out.println("Cat meows");
    }
}

public class Main {
    public static void main(String[] args) {
        Dog dog = new Dog();
        dog.sound(); // Outputs: Dog barks

        Cat cat = new Cat();
        cat.sound(); // Outputs: Cat meows
    }
}
```

**Explanation**:

- The `Dog` and `Cat` classes **inherit** the `sound()` method from the `Animal` class.
- Each subclass provides its own implementation of the `sound()` method, thus exhibiting **polymorphism** (same method name but different behaviors).
- **Hierarchical inheritance** allows multiple classes to share the functionality of a common superclass.

**Key Points**:

- **Hierarchical inheritance** involves one parent class having multiple child classes that inherit from it.
- All child classes inherit the properties and methods from the parent class, but each subclass can have its own unique behavior.
- This pattern is useful when you have several different types of objects that share common behavior.

### **Comparison of Single, Multilevel, and Hierarchical Inheritance**

| **Feature** | **Single Inheritance** | **Multilevel Inheritance** | **Hierarchical Inheritance** |
| ------------------------- | ---------------------------------------------- | ----------------------------------------------------------------------- | ------------------------------------------------------------------- |
| **Definition** | A class inherits from a single parent class.   | A class inherits from another subclass, forming a chain of inheritance. | Multiple classes inherit from a single parent class.                |
| **Example** | `class Dog extends Animal;`                    | `class Puppy extends Dog;`                                              | `class Dog extends Animal; class Cat extends Animal;`               |
| **Inheritance Hierarchy** | Direct parent-child relationship.              | Multiple levels of inheritance forming a chain.                         | A common parent class shared by multiple child classes.             |
| **Use Case** | Simple inheritance for basic use cases.        | Specializing behavior progressively in a hierarchy.                     | Shared functionality among multiple subclasses.                     |
| **Polymorphism** | Yes (methods can be overridden).               | Yes (methods can be overridden in any level).                           | Yes (methods can be overridden in each subclass).                   |
| **Code Reusability** | Allows reuse of code from a single superclass. | Reuses code from all the ancestors in the chain.                        | Reuses common code from a single superclass in multiple subclasses. |

### **When to Use Each Type of Inheritance?**

1. **Single Inheritance**:

   - Use when there is a direct "is-a" relationship between the classes.
   - Example: A `Dog` is an `Animal`. It makes sense for `Dog` to inherit from `Animal`.

2. **Multilevel Inheritance**:

   - Use when you need to build upon a class incrementally, adding more specific behaviors at each level.
   - Example: A `Puppy` is a `Dog`, and a `Dog` is an `Animal`.

3. **Hierarchical Inheritance**:
   - Use when several classes share common behavior and can be generalized under a single superclass.
   - Example: Both `Dog` and `Cat` are `Animals`, so they share common properties and behaviors from the `Animal` class.

### **Conclusion**

- **Single Inheritance** is the simplest form of inheritance where one class extends another.
- **Multilevel Inheritance** forms a chain of inheritance where a subclass inherits from another subclass.
- **Hierarchical Inheritance** allows multiple subclasses to inherit from a single parent class, promoting code reuse across various classes.

Each type of inheritance has its use cases and helps to create a more organized, modular, and extensible codebase by leveraging the hierarchical nature of classes.
