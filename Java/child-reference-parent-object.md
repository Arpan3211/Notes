# Explain this concept Child person1 = new Parent("Drawing", 12); type Child person1 is different subclass and object Parent("Drawing", 12) is different parent class


In Java, if you try to do the reverse, i.e.,:

```java
Child person1 = new Parent("Drawing", 12);
```

It **will not compile** and will result in a **compile-time error**. Here's why:

### 1. **Why It Doesn't Work**

The **Parent** class is a **superclass** of the **Child** class. Not every `Parent` is necessarily a `Child`. While the reverse (upcasting) is true because a `Child` **is-a** `Parent`, the same logic does not apply when trying to downcast a `Parent` to a `Child`.

#### **Explanation**

When you declare `Child person1`, Java expects an object that is actually of type `Child` or a subclass of `Child`. However, `new Parent("Drawing", 12)` creates an object of type `Parent`, which does not have the additional features (fields or methods) of the `Child` class.

### 2. **Why Upcasting Works But Not This**

- **Upcasting** (`Parent person1 = new Child(...)`) works because every `Child` has all the features of a `Parent` (inheritance ensures this).
- **Downcasting** (`Child person1 = new Parent(...)`) requires the object to be an actual `Child`. Java does not allow this assignment unless you explicitly cast, and even then, it will fail at runtime if the object is not a `Child`.

### 3. **Explicit Casting**

If you try to **force** it using an explicit cast, like this:

```java
Child person1 = (Child) new Parent("Drawing", 12);
```

It will compile, but you will encounter a **`ClassCastException`** at runtime. This is because the actual object in memory is of type `Parent`, and you cannot treat it as a `Child`.

### 4. **Example**

Here’s what happens in code:

```java
// Parent class
class Parent {
    String hobby;

    public Parent(String hobby) {
        this.hobby = hobby;
    }

    public void showDetails() {
        System.out.println("Hobby: " + hobby);
    }
}

// Child class
class Child extends Parent {
    String favoriteToy;

    public Child(String hobby) {
        super(hobby);
        this.favoriteToy = "Lego";
    }

    @Override
    public void showDetails() {
        super.showDetails();
        System.out.println("Favorite Toy: " + favoriteToy);
    }
}

// Main class
public class Main {
    public static void main(String[] args) {
        // This line will not compile
        // Child person1 = new Parent("Drawing");

        // Forceful casting
        try {
            Parent parent = new Parent("Drawing");
            Child person1 = (Child) parent; // Explicit cast
            person1.showDetails(); // Runtime error: ClassCastException
        } catch (ClassCastException e) {
            System.out.println("Error: " + e.getMessage());
        }
    }
}
```

### 5. **Key Points**

1. **You cannot assign a Parent object to a Child reference directly.**

   - Compile-time error: "Incompatible types: Parent cannot be converted to Child."

2. **Explicit casting will compile but fail at runtime unless the object is actually of the Child type.**

3. **Why?**
   - A `Parent` object lacks the additional properties or methods of a `Child`. Treating it as a `Child` violates the type system.

### 6. **When Does Downcasting Work?**

Downcasting is valid only when the object was originally created as a `Child`. For example:

```java
Parent parent = new Child("Drawing");
Child child = (Child) parent; // Works because the object is actually a Child
child.showDetails();
```

This works because the actual object in memory is of type `Child`, even though it was referenced as a `Parent`.
