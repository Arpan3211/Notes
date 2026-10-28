# Can we override static methods


In Java, **static methods cannot be overridden**. However, static methods can be **hidden** in a subclass. This is an important distinction.

### **Why Static Methods Cannot Be Overridden**

1. **Static methods are resolved at compile-time**: Static methods are associated with the class itself, not with an instance of the class. When you call a static method, the method that is invoked is determined at **compile-time** based on the reference type, not the actual object type.
2. **No polymorphism with static methods**: Since static methods are not tied to object instances, they do not exhibit polymorphism. Overriding in Java is based on dynamic method dispatch, which works with instance methods, not static ones.

### **Static Method Hiding**

While static methods cannot be overridden, they can be **hidden** by a subclass. This means that if a subclass defines a static method with the same signature as a static method in its superclass, it will "hide" the superclass method. However, the method resolution will still depend on the reference type, not the object type, and it will be resolved at **compile-time**.

### **Example of Static Method Hiding**

```java
class Superclass {
    // Static method in superclass
    public static void display() {
        System.out.println("Display from Superclass");
    }
}

class Subclass extends Superclass {
    // Static method in subclass with the same signature (method hiding)
    public static void display() {
        System.out.println("Display from Subclass");
    }
}

public class Main {
    public static void main(String[] args) {
        Superclass obj1 = new Superclass();
        Superclass obj2 = new Subclass();
        Subclass obj3 = new Subclass();

        obj1.display(); // Output: Display from Superclass
        obj2.display(); // Output: Display from Superclass (resolved at compile-time)
        obj3.display(); // Output: Display from Subclass
    }
}
```

### **Explanation of the Example**:

- **`obj1.display();`** calls the `display()` method from `Superclass`, as the reference is of type `Superclass`.
- **`obj2.display();`** calls the `display()` method from `Superclass`, even though the actual object is of type `Subclass`. This happens because the reference type is `Superclass`, and static methods are resolved based on the reference type at compile-time.
- **`obj3.display();`** calls the `display()` method from `Subclass`, because the reference is of type `Subclass`.

### **Key Takeaways**:

1. **Static methods are not overridden**, but they can be **hidden** in the subclass by defining a static method with the same signature.
2. **Method hiding** with static methods is resolved at **compile-time** based on the reference type, not at runtime like instance methods.
3. Static methods do not exhibit the behavior of **polymorphism** and **dynamic dispatch**, which are central to method overriding.

In summary, static methods can be hidden, but not overridden, in Java. The choice between method hiding and overriding depends on whether the method is static or instance-based.
