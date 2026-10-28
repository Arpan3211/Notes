# Super Keyword in Java


### **`super` Keyword in Java**

The `super` keyword in Java is used in the context of inheritance. It is a reference variable used to refer to the **parent class** (superclass) in the following cases:

1. **To access parent class methods**: It is used to call methods from the parent class, especially if they are overridden by the subclass.
2. **To access parent class constructor**: It is used to call the constructor of the parent class.
3. **To access parent class fields**: It can be used to refer to parent class variables if they are shadowed by subclass variables.

### **1. Accessing Parent Class Methods Using `super`**

If a method in the subclass overrides a method in the parent class, and you still want to call the parent class’s version of the method, you can use `super` to refer to the parent class method.

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

    public void callSuperMethod() {
        super.sound();  // Calls the sound() method of Animal (parent class)
    }
}

public class Main {
    public static void main(String[] args) {
        Dog dog = new Dog();
        dog.sound();  // Outputs: Dog barks
        dog.callSuperMethod();  // Outputs: Animal makes a sound
    }
}
```

**Explanation**:

- The `Dog` class overrides the `sound()` method.
- Inside the `callSuperMethod()` of the `Dog` class, we use `super.sound()` to call the `sound()` method from the `Animal` class, which is the superclass.

### **2. Accessing Parent Class Constructor Using `super`**

The `super()` keyword is used to call the constructor of the parent class. This is especially useful when the parent class has a constructor with arguments that needs to be called by the subclass constructor.

If you don't explicitly call a parent class constructor using `super()`, Java automatically inserts a default call to `super()` (no-argument constructor) in the subclass constructor.

**Example**:

```java
class Animal {
    String name;

    // Constructor of parent class
    public Animal(String name) {
        this.name = name;
    }

    public void showName() {
        System.out.println("Animal name: " + name);
    }
}

class Dog extends Animal {

    // Constructor of child class
    public Dog(String name) {
        super(name);  // Calls the constructor of Animal
    }
}

public class Main {
    public static void main(String[] args) {
        Dog dog = new Dog("Buddy");
        dog.showName();  // Outputs: Animal name: Buddy
    }
}
```

**Explanation**:

- The `Animal` class has a constructor that takes a `String name` argument.
- In the `Dog` class, the constructor `super(name)` is used to call the constructor of the `Animal` class and initialize the `name` property.
- This way, the subclass (`Dog`) can invoke the constructor of the superclass (`Animal`).

### **3. Accessing Parent Class Fields Using `super`**

If the subclass has a field with the same name as a field in the parent class (a concept known as **shadowing**), `super` can be used to refer to the parent class field.

**Example**:

```java
class Animal {
    String name = "Generic Animal";
}

class Dog extends Animal {
    String name = "Buddy";

    public void displayNames() {
        System.out.println("Child class name: " + name);      // Prints "Buddy"
        System.out.println("Parent class name: " + super.name); // Prints "Generic Animal"
    }
}

public class Main {
    public static void main(String[] args) {
        Dog dog = new Dog();
        dog.displayNames();
    }
}
```

**Explanation**:

- Both the `Animal` and `Dog` classes have a `name` field.
- The `super.name` is used to refer to the `name` field of the `Animal` class (the parent class), while just `name` refers to the `name` field in the `Dog` class (the child class).

### **4. Important Points About `super`**

- **Calling parent constructor**: If the superclass has a constructor with parameters, you can use `super(parameters)` to invoke it. If the superclass doesn't have a no-argument constructor, you **must** call a constructor of the superclass with arguments using `super()` in the subclass constructor.
- **Invoking overridden methods**: If a method is overridden in a subclass and you want to call the original method from the superclass, you can use `super.methodName()`.

- **Accessing parent fields**: If a field in the subclass shadows a field in the superclass, you can access the superclass’s field using `super.fieldName`.

- **Super in Constructor Chaining**: In the constructor of a subclass, the `super()` call can be used to pass arguments to the parent class’s constructor. It must be the first statement in the subclass constructor.

- **Accessing super-class variables**: You can also use `super` to access non-private variables of the superclass.

### **Example: Using `super` for Constructor Chaining and Method Access**

```java
class Person {
    String name;

    public Person(String name) {
        this.name = name;
    }

    public void greet() {
        System.out.println("Hello, my name is " + name);
    }
}

class Employee extends Person {
    String designation;

    // Constructor chaining
    public Employee(String name, String designation) {
        super(name);  // Call the constructor of Person
        this.designation = designation;
    }

    // Overriding greet method
    @Override
    public void greet() {
        super.greet();  // Call greet method of Person
        System.out.println("I work as " + designation);
    }
}

public class Main {
    public static void main(String[] args) {
        Employee employee = new Employee("John", "Software Engineer");
        employee.greet();
    }
}
```

**Output**:

```
Hello, my name is John
I work as Software Engineer
```

**Explanation**:

- The `Employee` class constructor calls the `super(name)` constructor of the `Person` class to initialize the `name` property.
- The `greet()` method is overridden in the `Employee` class, but it first calls the `greet()` method of the `Person` class using `super.greet()` to maintain the base functionality.

### **Summary of `super` Uses**:

- **Calling parent class methods**: `super.methodName()`
- **Calling parent class constructor**: `super(parameters)` (must be the first statement in the subclass constructor)
- **Accessing parent class fields**: `super.fieldName`
- **Constructor chaining**: `super()` to invoke the constructor of the parent class.

The `super` keyword is crucial for working with inheritance in Java, allowing subclasses to leverage the functionality and fields of the parent class while also allowing them to extend or modify that functionality.
