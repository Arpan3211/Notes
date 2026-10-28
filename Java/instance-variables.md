# Instance Variables in Java


### **Instance Variables (Non-Static Fields) in Java**

Instance variables are **non-static fields** that are defined within a class but outside of any method, constructor, or block. These variables are called **instance variables** because their values are unique to each instance (or object) of the class.

### **Key Characteristics of Instance Variables**

1. **Declared at the Class Level**:

   - Instance variables are declared directly within a class but outside any methods, constructors, or blocks.

2. **Belong to an Instance**:

   - Each object (instance) of the class has its own copy of the instance variables. Changes to these variables in one object do not affect others.

3. **Default Values**:

   - If not explicitly initialized, instance variables are assigned default values:
     - `int` → `0`
     - `double` → `0.0`
     - `boolean` → `false`
     - `char` → `\u0000` (null character)
     - Object references → `null`

4. **Access Modifiers**:

   - Instance variables can be declared with access modifiers (`private`, `protected`, `public`, or default) to control their visibility.

5. **Accessed via Objects**:
   - You need an object of the class to access or modify instance variables.

### **Example of Instance Variables**

```java
class Person {
    // Instance variables
    String name; // Default value is null
    int age;     // Default value is 0

    // Constructor
    Person(String name, int age) {
        this.name = name; // Assign value to instance variable
        this.age = age;
    }

    // Method to display person details
    void displayInfo() {
        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
    }
}

public class Main {
    public static void main(String[] args) {
        // Creating objects of the Person class
        Person person1 = new Person("Alice", 25);
        Person person2 = new Person("Bob", 30);

        // Accessing instance variables via objects
        person1.displayInfo();
        person2.displayInfo();

        // Modifying instance variable for one object
        person1.age = 26;
        System.out.println(person1.name + "'s updated age: " + person1.age);
    }
}
```

### **Output**

```
Name: Alice
Age: 25
Name: Bob
Age: 30
Alice's updated age: 26
```

### **How Instance Variables Work**

1. **Separate Copies for Each Object**:

   - Each object gets its own copy of the instance variables (`name` and `age` in this case). Changing these values for one object does not affect the others.

2. **`this` Keyword**:
   - The `this` keyword is used to differentiate between instance variables and parameters with the same name in constructors or methods.

### **Memory Management**

- **Instance variables** are stored in the **heap memory** because each object resides in the heap. The lifecycle of instance variables is tied to the lifecycle of the object they belong to.

### **Common Use Case**

Instance variables are used when you want data to be associated with an object. For example, in a class `Car`, instance variables like `color`, `brand`, and `speed` can store details specific to each car object.
