# Object Cloning in Java


### **Object Cloning in Java**

**Object Cloning** is a process of creating an exact copy of an existing object in Java. Java provides a mechanism for cloning objects through the **`Cloneable` interface** and the **`clone()`** method.

### **Why Use Object Cloning?**

- To duplicate an object without creating it from scratch.
- It’s faster than creating a new object and copying properties manually.
- Useful in scenarios like prototyping or creating backups of objects.

### **How to Perform Cloning in Java?**

#### **1. Implementing `Cloneable` Interface**

To enable cloning, a class must:

1. **Implement `Cloneable` interface**: This is a marker interface (no methods to implement) that signals the JVM that cloning is allowed.
2. **Override the `clone()` method**: This method in the `Object` class performs the cloning.

#### **Example of Cloning**

```java
class Person implements Cloneable {
    String name;
    int age;

    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    @Override
    protected Object clone() throws CloneNotSupportedException {
        return super.clone(); // Creates a shallow copy
    }
}

public class Main {
    public static void main(String[] args) {
        try {
            Person person1 = new Person("John", 30);
            Person person2 = (Person) person1.clone(); // Cloning person1

            System.out.println("Original: " + person1.name + ", " + person1.age);
            System.out.println("Clone: " + person2.name + ", " + person2.age);
        } catch (CloneNotSupportedException e) {
            e.printStackTrace();
        }
    }
}
```

### **Shallow Copy vs. Deep Copy**

The type of cloning determines how object references within the object are handled.

#### **1. Shallow Copy**

- Copies **only the top-level object** and not the objects it references.
- References to other objects are shared between the original and cloned objects.
- Achieved by directly calling `super.clone()`.

**Example**:

```java
class Address {
    String city;

    public Address(String city) {
        this.city = city;
    }
}

class Person implements Cloneable {
    String name;
    Address address;

    public Person(String name, Address address) {
        this.name = name;
        this.address = address;
    }

    @Override
    protected Object clone() throws CloneNotSupportedException {
        return super.clone(); // Shallow copy
    }
}

public class Main {
    public static void main(String[] args) throws CloneNotSupportedException {
        Address address = new Address("New York");
        Person person1 = new Person("John", address);
        Person person2 = (Person) person1.clone();

        // Modifying the address of person2
        person2.address.city = "Los Angeles";

        System.out.println("Person1 Address: " + person1.address.city); // "Los Angeles"
        System.out.println("Person2 Address: " + person2.address.city); // "Los Angeles"
    }
}
```

In a **shallow copy**, changes to the referenced objects affect both the original and the clone.

#### **2. Deep Copy**

- Copies the top-level object and also **creates new copies of all referenced objects**.
- Requires manually cloning each referenced object.
- Ensures that changes in the cloned object do not affect the original object.

**Example**:

```java
class Address implements Cloneable {
    String city;

    public Address(String city) {
        this.city = city;
    }

    @Override
    protected Object clone() throws CloneNotSupportedException {
        return super.clone(); // Clone the Address object
    }
}

class Person implements Cloneable {
    String name;
    Address address;

    public Person(String name, Address address) {
        this.name = name;
        this.address = address;
    }

    @Override
    protected Object clone() throws CloneNotSupportedException {
        Person cloned = (Person) super.clone();
        cloned.address = (Address) address.clone(); // Clone the Address separately
        return cloned;
    }
}

public class Main {
    public static void main(String[] args) throws CloneNotSupportedException {
        Address address = new Address("New York");
        Person person1 = new Person("John", address);
        Person person2 = (Person) person1.clone();

        // Modifying the address of person2
        person2.address.city = "Los Angeles";

        System.out.println("Person1 Address: " + person1.address.city); // "New York"
        System.out.println("Person2 Address: " + person2.address.city); // "Los Angeles"
    }
}
```

In a **deep copy**, changes to the referenced objects in the clone do not affect the original object.

### **Key Differences Between Shallow Copy and Deep Copy**

| **Aspect** | **Shallow Copy** | **Deep Copy** |
| ---------------------- | --------------------------------------------------------- | --------------------------------------------------- |
| **Definition** | Copies only the top-level object.                         | Copies the top-level object and referenced objects. |
| **Reference Handling** | References are shared between the original and the clone. | Creates new copies of referenced objects.           |
| **Changes in Clone** | Affect the original object.                               | Do not affect the original object.                  |
| **Performance** | Faster (less memory usage).                               | Slower (more memory usage).                         |
| **Use Case** | Suitable when referenced objects are immutable.           | Necessary when referenced objects are mutable.      |

### **Best Practices for Cloning**

1. **Prefer Deep Copy** when you need independent copies.
2. Use libraries like **Apache Commons Lang** or **serialization** for complex cloning needs.
3. Always handle the `CloneNotSupportedException`.
4. Avoid excessive use of cloning if it complicates your design—consider alternative approaches like constructors or factory methods.
