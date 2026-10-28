# Classes and objects in Java


### **Class in Java**

A class is a blueprint or template for creating objects (instances). It defines the properties (fields) and behaviors (methods) that the objects of that class will have. In other words, a class is a collection of attributes and methods that represent the common characteristics and behaviors of objects.

A class can contain:

- **Fields (Variables)**: These are the properties or attributes that define the state of the objects.
- **Methods**: These define the actions or behaviors that can be performed on the objects.
- **Constructors**: These are special methods used to initialize objects.
- **Access Modifiers**: These specify the visibility of fields, methods, and classes (e.g., `public`, `private`, `protected`).

#### Syntax for a Class:

```java
public class Car {
    // Fields (attributes)
    String color;
    String model;
    int year;

    // Constructor
    public Car(String color, String model, int year) {
        this.color = color;
        this.model = model;
        this.year = year;
    }

    // Method (behavior)
    public void displayDetails() {
        System.out.println("Car Model: " + model);
        System.out.println("Car Color: " + color);
        System.out.println("Car Year: " + year);
    }
}
```

### **Object in Java**

An object is an instance of a class. When you create an object from a class, the class serves as a blueprint, and the object contains the actual data for the properties defined in the class.

Each object has:

- **State**: The values of the attributes (fields).
- **Behavior**: The methods that can be called on the object.
- **Identity**: A unique reference to the object in memory.

#### Creating an Object:

You create an object by using the `new` keyword followed by the class constructor.

```java
public class Main {
    public static void main(String[] args) {
        // Creating an object of the Car class
        Car myCar = new Car("Red", "Tesla", 2024);

        // Accessing the object's methods
        myCar.displayDetails();
    }
}
```

### **Difference Between Class and Object**

| Feature         | **Class** | **Object** |
| --------------- | ------------------------------------------------------------ | -------------------------------------------------------------- |
| **Definition** | A blueprint or template for objects.                         | An instance of a class.                                        |
| **Existence** | Logical entity (does not consume memory directly).           | Physical entity (occupies memory).                             |
| **Purpose** | Defines structure and behavior.                              | Represents a specific instance of that structure and behavior. |
| **Declaration** | Declared using the `class` keyword.                          | Created using the `new` keyword.                               |
| **Examples** | `class Car { }`                                              | `Car myCar = new Car();`                                       |
| **Usage** | Used to define properties and methods.                       | Used to call properties and methods defined in the class.      |
| **Number** | One class can have many objects.                             | Each object is tied to a specific class.                       |
| **Access** | Cannot access instance-level properties or methods directly. | Can access instance-level properties and methods.              |

### **Key Concepts:**

1. **Encapsulation**: This refers to the bundling of data (attributes) and methods (behaviors) that operate on the data into a single unit (the class). It also involves restricting access to some of the object's components using access modifiers like `private` or `protected` to hide implementation details.

   - Example: The `color`, `model`, and `year` attributes in the `Car` class can be encapsulated using private access modifiers, making them accessible only through getter and setter methods.

2. **Constructor**: A constructor is a special type of method used to initialize an object when it is created. It has the same name as the class and does not have a return type.

   - Example: `public Car(String color, String model, int year) { ... }` is a constructor in the `Car` class that initializes the object's state.

3. **Methods**: Methods define the behaviors of the objects. They can modify the object's state or perform actions.

   - Example: The `displayDetails()` method in the `Car` class displays the car's details.

4. **Inheritance**: A class can inherit fields and methods from another class, allowing for code reuse and extension of functionality. This is achieved using the `extends` keyword.

   - Example: If we create a `SportsCar` class that inherits from `Car`, it will automatically have the `color`, `model`, and `year` attributes, and the `displayDetails()` method.

5. **Polymorphism**: Polymorphism allows objects to be treated as instances of their parent class. The actual method that is called is determined at runtime (dynamic polymorphism) or compile time (static polymorphism).

   - Example: A `SportsCar` object can be treated as a `Car` object, and the appropriate methods for the actual object type will be called.

6. **Abstraction**: Abstract classes and interfaces are used to hide implementation details and expose only the essential features of the object. An abstract class cannot be instantiated directly.
   - Example: An abstract `Vehicle` class can define a general `move()` method, and subclasses like `Car` and `Bike` can implement it in their own way.

### **Example of Class and Object:**

```java
// Class Definition
public class Car {
    // Fields
    String color;
    String model;
    int year;

    // Constructor
    public Car(String color, String model, int year) {
        this.color = color;
        this.model = model;
        this.year = year;
    }

    // Method to display car details
    public void displayDetails() {
        System.out.println("Car Model: " + model);
        System.out.println("Car Color: " + color);
        System.out.println("Car Year: " + year);
    }
}

// Main class to create an object and use it
public class Main {
    public static void main(String[] args) {
        // Creating an object of Car class
        Car myCar = new Car("Blue", "Honda Civic", 2020);

        // Calling the method on the object
        myCar.displayDetails(); // Outputs car details
    }
}
```

### **Summary:**

- **Class**: A blueprint that defines properties and behaviors.
- **Object**: An instance of a class with specific values for properties.
- **Constructors**: Special methods used for object initialization.
- **Encapsulation, Inheritance, Polymorphism, and Abstraction**: Core OOP principles that help in building modular, reusable, and maintainable code.

---

---


---

## Additional notes: Classes.md
_(older separate note on this topic)_

# Java Concepts: Classes and Objects

## Classes and Objects

- **A class** is a template for an object, and an object is an instance of a class.
- A class creates a new data type that can be used to create objects.
- When you declare an object of a class, you are creating an instance of that class.
  - A class is a logical construct.
  - An object has physical reality (i.e., it occupies space in memory).

### Object Characteristics

Objects are characterized by three essential properties:

1. **State**: The value from its data type.
2. **Identity**: Distinguishes one object from another. The identity can be thought of as the location where the object’s value is stored in memory.
3. **Behavior**: The effect of data-type operations.

## The Dot Operator (`.`)

- Links the name of the object with the name of an instance variable.
- Formally categorized in Java as a separator.

## The `new` Keyword

- Dynamically allocates memory for an object at runtime and returns a reference to it.
- The reference (essentially the address in memory) is stored in a variable.
- All class objects in Java must be dynamically allocated.

Example:

```java
Box mybox; // declare reference to object
mybox = new Box(); // allocate a Box object
```

- The first line declares `mybox` as a reference to an object of type `Box`.
- The second line allocates an object and assigns its reference to `mybox`.

### Important Notes on Object References

- In Java, you cannot manipulate references like pointers.
- References cannot point to arbitrary memory locations or be manipulated like integers.

## A Closer Look at `new`

General Syntax:

```java
classname class-var = new classname();
```

- `class-var`: A variable of the class type being created.
- `classname()`: Specifies the constructor for the class, which defines what occurs when an object is created.

### Why `new` is Not Used for Primitives

- Java’s primitive types (e.g., integers, characters) are implemented as “normal” variables, not objects, for efficiency.

### Example of Shared Object References

```java
Box b1 = new Box();
Box b2 = b1;
```

- Both `b1` and `b2` refer to the same object.
- Assigning `b1` to `b2` does not allocate memory or copy the object.
- Changes made through `b2` will reflect in `b1` since they reference the same object.

### Method Parameters and Arguments

- A **parameter** is a variable defined by a method that receives a value when the method is called.
  - Example: In `square(int i)`, `i` is a parameter.
- An **argument** is the value passed to a method when invoked.
  - Example: `square(100)` passes `100` as an argument.

Example:

```java
int square(int i) {
    return i * i;
}
```

## Important Notes

- **Compilation and Execution**:
  - The **left-hand side (lhs)** (reference, e.g., `bus`) is checked by the compiler.
  - The **right-hand side (rhs)** (object, e.g., `new Bus()`) is processed by the JVM.

Example:

```java
Bus bus = new Bus();
```
