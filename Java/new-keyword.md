# The new keyword


In Java, the **`new`** keyword is used to create new objects or instances of classes. It is essential to understand that the `new` keyword allocates memory for an object on the heap, initializes the object using the class constructor, and returns a reference to that object. This makes the `new` keyword a fundamental part of object creation and memory management in Java.

### **1. Creating Objects with the `new` Keyword**

When you want to create an instance of a class, you use the `new` keyword followed by the class constructor. The syntax for creating an object using `new` is:

```java
ClassName objectName = new ClassName();
```

Here, `ClassName` is the name of the class you want to instantiate, and `objectName` is the reference variable that will hold the object.

**Example:**

```java
public class Car {
    String color;
    String model;

    // Constructor
    public Car(String color, String model) {
        this.color = color;
        this.model = model;
    }

    public void displayInfo() {
        System.out.println("Car Model: " + model + ", Color: " + color);
    }
}

public class Main {
    public static void main(String[] args) {
        // Creating an object of the Car class using the 'new' keyword
        Car myCar = new Car("Red", "Tesla");
        myCar.displayInfo(); // Outputs: Car Model: Tesla, Color: Red
    }
}
```

### **Detailed Explanation of the `new` Keyword**

1. **Memory Allocation**:  
   When you create an object using the `new` keyword, memory is allocated on the **heap** for the object. The heap is an area of memory reserved for objects during program execution.

   - For example, in the `Car myCar = new Car("Red", "Tesla");` statement, memory for the `Car` object is allocated on the heap.
   - The constructor of the `Car` class is called to initialize the object with the specified values (e.g., `"Red"` for color and `"Tesla"` for model).

2. **Calling the Constructor**:  
   After allocating memory, the `new` keyword invokes the class constructor. This constructor is responsible for initializing the newly created object with default or provided values.

   - In the example above, the constructor `Car(String color, String model)` is invoked, and it initializes the `color` and `model` fields of the object.

3. **Reference Assignment**:  
   The reference variable (`myCar` in the example) is assigned the memory address (reference) of the newly created object. This reference is used to access the object’s properties and methods.

4. **Object Initialization**:  
   The `new` keyword calls the class constructor to initialize the newly created object. If no constructor is explicitly defined in the class, Java provides a default constructor that initializes the object with default values (e.g., `null` for objects, `0` for numeric types).

### **2. Using `new` with Arrays**

In addition to creating instances of classes, the `new` keyword is also used to create arrays. An array is essentially an object in Java, and memory for it is allocated on the heap.

**Syntax for creating an array:**

```java
type[] arrayName = new type[size];
```

**Example:**

```java
public class Main {
    public static void main(String[] args) {
        // Creating an array of integers using the 'new' keyword
        int[] numbers = new int[5]; // Array of size 5
        numbers[0] = 10; // Assigning values to the array elements
        numbers[1] = 20;

        System.out.println(numbers[0]); // Outputs: 10
        System.out.println(numbers[1]); // Outputs: 20
    }
}
```

### **3. Default Initialization with `new`**

When you use `new` to create an object or array, Java automatically initializes its fields or elements to default values if no explicit initialization is provided. For example:

- **Primitive Data Types** (for arrays):
  - `int` → `0`
  - `boolean` → `false`
  - `char` → `'\u0000'`
  - `double` → `0.0`
- **Object References**:
  - All object references are initialized to `null` by default.

**Example:**

```java
public class Main {
    public static void main(String[] args) {
        int[] numbers = new int[3]; // Array of 3 integers
        System.out.println(numbers[0]); // Outputs: 0 (default value for int)
        System.out.println(numbers[1]); // Outputs: 0
        System.out.println(numbers[2]); // Outputs: 0
    }
}
```

### **4. No `new` Keyword for Primitive Types**

Primitive data types (like `int`, `char`, `boolean`, etc.) do not require the `new` keyword because they are not objects. They are allocated on the **stack** and directly hold values.

**Example of primitive type initialization (without `new` keyword):**

```java
public class Main {
    public static void main(String[] args) {
        int x = 10; // No need for 'new' as 'int' is a primitive type
        System.out.println(x); // Outputs: 10
    }
}
```

### **5. Constructor Overloading**

In Java, you can have multiple constructors for a class, each having a different parameter list. When you use `new`, the appropriate constructor is invoked based on the arguments provided.

**Example:**

```java
public class Car {
    String color;
    String model;

    // Constructor with two parameters
    public Car(String color, String model) {
        this.color = color;
        this.model = model;
    }

    // Constructor with one parameter
    public Car(String color) {
        this.color = color;
        this.model = "Unknown";
    }
}

public class Main {
    public static void main(String[] args) {
        // Using the constructor with two parameters
        Car myCar = new Car("Red", "Tesla");
        System.out.println(myCar.color + " " + myCar.model); // Outputs: Red Tesla

        // Using the constructor with one parameter
        Car anotherCar = new Car("Blue");
        System.out.println(anotherCar.color + " " + anotherCar.model); // Outputs: Blue Unknown
    }
}
```

### **6. The `new` Keyword and Garbage Collection**

In Java, when an object is no longer referenced, it becomes eligible for garbage collection. Java's garbage collector automatically reclaims memory used by objects that are no longer in use.

**Example of garbage collection:**

```java
public class Main {
    public static void main(String[] args) {
        Car myCar = new Car("Red", "Tesla");
        myCar = null; // Now myCar doesn't refer to the object anymore

        // The object is eligible for garbage collection here
    }
}
```

When the reference variable `myCar` is set to `null`, the object becomes eligible for garbage collection, and memory used by that object can be reclaimed later.

### **Summary of `new` Keyword Usage**

- **Object Creation**: `new` is used to instantiate objects from a class.
- **Array Creation**: `new` is used to create arrays in Java.
- **Memory Allocation**: `new` allocates memory for the object on the heap.
- **Constructor Invocation**: `new` invokes the constructor to initialize the object.
- **Default Initialization**: Objects are initialized to default values when created with `new`.

The `new` keyword is critical for object creation and memory management in Java. It allows you to instantiate and initialize objects and arrays dynamically during program execution.
