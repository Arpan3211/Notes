# Method Overriding in Java


### **Method Overriding in Java**

**Method Overriding** is a feature in Java that allows a subclass to provide a specific implementation of a method that is already defined in its superclass. The **overridden method** in the subclass should have the same method signature (name, return type, and parameters) as the method in the superclass.

### **Key Points of Method Overriding:**

1. **Same Method Signature**: The method in the subclass must have the same name, return type, and parameters as the method in the superclass.
2. **Runtime Polymorphism**: Overriding is related to **runtime polymorphism**, where the actual method to be called is determined at runtime based on the object’s type (the instance on which the method is called).
3. **Inheritance**: Overriding works in the context of inheritance. The subclass inherits the method from the superclass but can choose to override it to provide a different behavior.
4. **@Override Annotation**: In Java, you can use the `@Override` annotation to explicitly indicate that a method is overriding a method from the superclass. This helps to avoid errors like mismatching method signatures.

### **How Overriding Works**

When you call a method on an object, Java first checks the actual class of the object, not the reference type, to determine which version of the method to invoke. If the method is overridden in the subclass, the version in the subclass is invoked. If it is not overridden, the method in the superclass is called.

### **Syntax of Method Overriding**

```java
class Superclass {
    public void display() {
        System.out.println("Display method from Superclass");
    }
}

class Subclass extends Superclass {
    @Override
    public void display() {
        System.out.println("Display method from Subclass");
    }
}

public class Main {
    public static void main(String[] args) {
        Superclass obj = new Subclass();
        obj.display();  // Output: Display method from Subclass
    }
}
```

### **Explanation:**

1. **Superclass** has a method `display()`.
2. **Subclass** overrides this method using the same signature and provides its own implementation.
3. In the `main` method, we create an object of type `Superclass`, but it actually refers to an object of type `Subclass` (`Superclass obj = new Subclass();`).
4. When the `display()` method is called on this object (`obj.display();`), Java uses the **actual object type** (`Subclass`) to determine the method to invoke.
5. The output will be **"Display method from Subclass"**, as the `display()` method is overridden in `Subclass`.

### **When is Method Overriding Used?**

1. **Behavior Modification**: When you want to modify or extend the behavior of a superclass method in a subclass.
2. **Runtime Polymorphism**: To allow different behaviors for the same method call, depending on the object’s actual class.
3. **Method Signature Consistency**: In situations where you need to ensure that a method's signature in the subclass remains the same as the superclass.

### **Important Rules of Method Overriding**

1. **Access Modifiers**: The access level of the overriding method in the subclass cannot be more restrictive than the overridden method in the superclass. For example, if the superclass method is `public`, the subclass method must also be `public` (or more permissive). It cannot be `private` or `protected`.

   - Valid:

     ```java
     class Superclass {
         public void display() { ... }
     }

     class Subclass extends Superclass {
         public void display() { ... }  // Valid: same access level
     }
     ```

   - Invalid:

     ```java
     class Superclass {
         public void display() { ... }
     }

     class Subclass extends Superclass {
         private void display() { ... }  // Invalid: cannot be more restrictive
     }
     ```

2. **Return Type**: The return type of the overridden method must be the same as or a subtype of the return type of the original method (covariant return type).

   - Valid:

     ```java
     class Superclass {
         public Number getNumber() {
             return 5;
         }
     }

     class Subclass extends Superclass {
         @Override
         public Integer getNumber() {  // Valid: Integer is a subtype of Number
             return 10;
         }
     }
     ```

   - Invalid:

     ```java
     class Superclass {
         public Number getNumber() {
             return 5;
         }
     }

     class Subclass extends Superclass {
         @Override
         public String getNumber() {  // Invalid: String is not a subtype of Number
             return "Hello";
         }
     }
     ```

3. **Static Methods**: Static methods cannot be overridden. They can be **shadowed** in the subclass, but they are not polymorphic and are resolved at compile time based on the reference type.

   - Example of **method hiding** (not overriding):

     ```java
     class Superclass {
         public static void display() {
             System.out.println("Display from Superclass");
         }
     }

     class Subclass extends Superclass {
         public static void display() {
             System.out.println("Display from Subclass");
         }
     }

     public class Main {
         public static void main(String[] args) {
             Superclass obj = new Subclass();
             obj.display();  // Output: Display from Superclass (resolved at compile-time)
         }
     }
     ```

4. **Final Methods**: A method that is marked `final` cannot be overridden in the subclass.

   - Example:

     ```java
     class Superclass {
         public final void display() {
             System.out.println("Display from Superclass");
         }
     }

     class Subclass extends Superclass {
         // Error: Cannot override the final method from Superclass
         public void display() {
             System.out.println("Display from Subclass");
         }
     }
     ```

### **Advantages of Method Overriding**

1. **Flexibility**: Method overriding enables the creation of flexible and reusable code by allowing subclass-specific behaviors while maintaining the common interface from the superclass.
2. **Runtime Polymorphism**: Allows the use of the same method name for different objects, enabling dynamic behavior depending on the object’s actual class at runtime.
3. **Extensibility**: Overriding allows the behavior of an existing method to be changed without modifying the superclass code, making it easier to extend functionality.

### **Conclusion**

Method overriding is a fundamental concept in object-oriented programming, promoting **runtime polymorphism** and **code reusability**. It allows subclasses to define specific implementations of methods that are already defined in the superclass, providing a way to alter or extend the behavior of inherited methods.

---

---


---

## Additional notes: Overriding.md
_(older separate note on this topic)_

# Method Overriding and Dynamic Method Dispatch in Java

In a class hierarchy, when a method in a subclass has the same name and type signature as a method in its superclass, then the method in the subclass is said to **override** the method in the superclass. When an overridden method is called from within its subclass, it will always refer to the version of that method defined by the subclass. The version of the method defined by the superclass will be hidden.

- **Method overriding** occurs only when the names and the type signatures of the two methods are identical.
- If they are not, then the two methods are simply **overloaded**.

_(Check display functions in box classes)_

## Dynamic Method Dispatch

**Dynamic method dispatch** is the mechanism by which a call to an overridden method is resolved at run time, rather than compile time. Dynamic method dispatch is important because this is how Java implements run-time polymorphism.

### Key Principle

A superclass reference variable can refer to a subclass object. When an overridden method is called through a superclass reference, Java determines which version of that method to execute based upon the type of the object being referred to at the time the call occurs. Thus, this determination is made at **run time**.

In other words, it is the **type of the object being referred to** (not the type of the reference variable) that determines which version of an overridden method will be executed.

### Example

If `B` extends `A`, then you can override a method in `A` through `B` while changing the return type of the method to `B`.
