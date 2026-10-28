# Explain this concept Parent person1 = new Child("Drawing", 12); type Parent person1 is different and object Child("Drawing", 12) is different


This concept in Java is known as **polymorphism** and specifically **upcasting**.

### 1. **The Setup**

You have:

- **Parent class**: It has some variables and overloaded constructors.
- **Child class**: It extends the Parent class and has its own variables and a constructor.
- In the main file:
  ```java
  Parent person1 = new Child("Drawing", 12);
  ```

Here, you are:

- Declaring `person1` as a **Parent type reference**.
- Creating an object of the **Child class**.

### 2. **What's Happening?**

#### **Polymorphism**

When you write:

```java
Parent person1 = new Child("Drawing", 12);
```

The **type of the reference** (`Parent`) decides what you can access at compile-time.  
The **actual object** (`Child`) determines what happens at runtime.

- **Compile-Time**:  
  The compiler only knows about the `Parent` class, so you can only call methods and access variables that are declared in `Parent`.
- **Run-Time**:  
  When a method is called, the overridden version of the method (in the `Child` class) will execute if it exists.

#### **Upcasting**

You are "upcasting" the `Child` object to the `Parent` type. This is allowed because a `Child` **is-a** `Parent`. It's like saying "a square is a rectangle."

#### **Constructors**

The constructor of the `Child` class will invoke the `Parent` constructor (via `super(...)`) as part of the instantiation process. This ensures the `Parent` part of the object is initialized before the `Child` part.

### 3. **What Happens in Memory?**

When you create `new Child("Drawing", 12)`:

- **Parent's part of the object** is initialized first using the appropriate constructor.
- **Child's part of the object** is initialized next using the Child class constructor.
- The `person1` reference points to the memory of this Child object but treats it as a Parent.

### 4. **Code Example**

Here’s a complete example:

```java
// Parent class
class Parent {
    String hobby;
    int age;

    // Overloaded constructor
    public Parent(String hobby, int age) {
        this.hobby = hobby;
        this.age = age;
    }

    // Method in Parent
    public void showDetails() {
        System.out.println("Hobby: " + hobby + ", Age: " + age);
    }
}

// Child class
class Child extends Parent {
    String favoriteToy;

    // Constructor in Child
    public Child(String hobby, int age) {
        super(hobby, age); // Call Parent's constructor
        this.favoriteToy = "Lego"; // Child-specific property
    }

    // Overriding method
    @Override
    public void showDetails() {
        super.showDetails();
        System.out.println("Favorite Toy: " + favoriteToy);
    }
}

// Main class
public class Main {
    public static void main(String[] args) {
        Parent person1 = new Child("Drawing", 12);
        person1.showDetails(); // Calls Child's overridden method
        // person1.favoriteToy; // Compile error: Parent reference can't access Child-specific properties
    }
}
```

### 5. **Key Points**

- **Parent person1 = new Child(...)**:  
  You can only access methods and fields defined in `Parent` through `person1`. Child-specific properties or methods are hidden unless cast back to `Child`.
- **Overriding**:  
  If the `Child` overrides a method from the `Parent`, the `Child`'s version will be executed, thanks to runtime polymorphism.

- **Cannot Access Child's Properties Directly**:  
  To access `Child`-specific methods or variables, you need to cast the reference:
  ```java
  ((Child) person1).favoriteToy;
  ```
