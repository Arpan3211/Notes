# Generics in Java


### **Generics in Java**

Generics were introduced in **Java 5** to provide **type safety** and **reusability**. They allow you to write code that can handle **different data types** without compromising type safety.

### **Why Use Generics?**

1. **Type Safety**: Ensures that the compiler checks the data types, reducing runtime errors.
2. **Code Reusability**: Write a single class or method that works with different types.
3. **Avoid Casting**: Generics eliminate the need for explicit type casting, making the code cleaner.

### **Syntax of Generics**

Generics are denoted using angle brackets `<>` with a type parameter.

- **Type Parameter**: A placeholder for a specific type, such as `T`, `E`, `K`, `V`.
  - `T` - Type
  - `E` - Element
  - `K` - Key
  - `V` - Value

Example:

```java
class GenericClass<T> {
    private T data;

    public void setData(T data) {
        this.data = data;
    }

    public T getData() {
        return data;
    }
}
```

### **Basic Example Without Generics**

Before Generics, a class might look like this:

```java
import java.util.ArrayList;

public class WithoutGenerics {
    public static void main(String[] args) {
        ArrayList list = new ArrayList(); // No type specified
        list.add("Hello");
        list.add(123); // Mixed types allowed

        String value = (String) list.get(0); // Casting required
        System.out.println(value);

        // Causes a runtime error: ClassCastException
        String value2 = (String) list.get(1); // Runtime error!
    }
}
```

### **Basic Example With Generics**

```java
import java.util.ArrayList;

public class WithGenerics {
    public static void main(String[] args) {
        ArrayList<String> list = new ArrayList<>(); // Type specified
        list.add("Hello");
        // list.add(123); // Compile-time error

        String value = list.get(0); // No casting required
        System.out.println(value);
    }
}
```

### **Creating a Generic Class**

```java
class Box<T> {
    private T value;

    public void setValue(T value) {
        this.value = value;
    }

    public T getValue() {
        return value;
    }
}

public class GenericClassExample {
    public static void main(String[] args) {
        Box<Integer> intBox = new Box<>();
        intBox.setValue(10);
        System.out.println("Integer Value: " + intBox.getValue());

        Box<String> strBox = new Box<>();
        strBox.setValue("Hello Generics");
        System.out.println("String Value: " + strBox.getValue());
    }
}
```

### **Creating a Generic Method**

A generic method can accept type parameters independent of the class:

```java
class GenericMethodExample {
    public static <T> void printArray(T[] array) {
        for (T element : array) {
            System.out.print(element + " ");
        }
        System.out.println();
    }

    public static void main(String[] args) {
        Integer[] intArray = {1, 2, 3, 4, 5};
        String[] strArray = {"A", "B", "C"};

        printArray(intArray); // Output: 1 2 3 4 5
        printArray(strArray); // Output: A B C
    }
}
```

### **Generic Interfaces**

A generic interface allows creating reusable contracts:

```java
interface GenericInterface<T> {
    void display(T data);
}

class GenericInterfaceImpl<T> implements GenericInterface<T> {
    @Override
    public void display(T data) {
        System.out.println("Data: " + data);
    }
}

public class GenericInterfaceExample {
    public static void main(String[] args) {
        GenericInterface<String> strImpl = new GenericInterfaceImpl<>();
        strImpl.display("Hello, Interface");

        GenericInterface<Integer> intImpl = new GenericInterfaceImpl<>();
        intImpl.display(100);
    }
}
```

### **Bounded Type Parameters**

Generics can restrict the type of objects it accepts using **bounds**.

#### **Upper Bound**

Restrict to a specific class or subclass:

```java
class BoundedClass<T extends Number> { // Only Number or its subclasses
    private T value;

    public void setValue(T value) {
        this.value = value;
    }

    public T getValue() {
        return value;
    }
}

public class BoundedTypeExample {
    public static void main(String[] args) {
        BoundedClass<Integer> intBox = new BoundedClass<>();
        intBox.setValue(10);

        BoundedClass<Double> doubleBox = new BoundedClass<>();
        doubleBox.setValue(15.5);

        // BoundedClass<String> strBox = new BoundedClass<>(); // Compile-time error
    }
}
```

#### **Lower Bound**

Use `super` keyword to restrict a type to a superclass.

### **Wildcards in Generics**

Wildcards (`?`) allow for flexibility in working with generics.

#### **Unbounded Wildcard**

Accepts any type:

```java
public void printList(List<?> list) {
    for (Object obj : list) {
        System.out.println(obj);
    }
}
```

#### **Upper-Bounded Wildcard**

Restrict to a specific class or subclass:

```java
public void printNumbers(List<? extends Number> list) {
    for (Number num : list) {
        System.out.println(num);
    }
}
```

#### **Lower-Bounded Wildcard**

Restrict to a specific class or superclass:

```java
public void addNumbers(List<? super Integer> list) {
    list.add(10); // Adding an Integer
}
```

---

### **1. Why Use Generics?**

Generics address several issues in Java programming, making code more robust and reusable. Here's why they are essential:

1. **Type Safety** 
   Without generics, you can store any object in a collection, which can lead to runtime errors. Generics ensure type consistency at compile time.

   Example (Without Generics):

   ```java
   List list = new ArrayList();
   list.add("Hello");
   list.add(123); // Allowed
   String str = (String) list.get(1); // Runtime error
   ```

   Example (With Generics):

   ```java
   List<String> list = new ArrayList<>();
   list.add("Hello");
   // list.add(123); // Compile-time error
   ```

2. **Code Reusability** 
   Generics allow you to create a single class or method that works with multiple data types.

3. **Avoid Casting** 
   Without generics, you must cast objects retrieved from collections to their original type. Generics eliminate the need for explicit casting.

### **2. What Are Generics?**

Generics allow classes, interfaces, and methods to operate on **types** specified as parameters. They enable **type abstraction**, making the code more flexible and robust.

- **Definition**: Generics are a way to write type-safe and reusable code. They are defined with **angle brackets `<T>`**, where `T` is a placeholder for a type.

Key Concepts:

- **T**: Type (can be any type like Integer, String, etc.)
- **E**: Element (used in collections)
- **K, V**: Key, Value (used in maps)

### **3. How to Use Generics?**

Generics can be applied to classes, methods, and interfaces.

#### **a. Generic Class**

A class that can handle any type:

```java
class Box<T> {
    private T value;

    public void setValue(T value) {
        this.value = value;
    }

    public T getValue() {
        return value;
    }
}

public class Main {
    public static void main(String[] args) {
        Box<Integer> intBox = new Box<>();
        intBox.setValue(10);
        System.out.println("Integer Value: " + intBox.getValue());

        Box<String> strBox = new Box<>();
        strBox.setValue("Hello Generics");
        System.out.println("String Value: " + strBox.getValue());
    }
}
```

#### **b. Generic Method**

A method that accepts type parameters:

```java
class GenericMethodExample {
    public static <T> void printArray(T[] array) {
        for (T element : array) {
            System.out.print(element + " ");
        }
        System.out.println();
    }

    public static void main(String[] args) {
        Integer[] intArray = {1, 2, 3};
        String[] strArray = {"A", "B", "C"};

        printArray(intArray); // Prints: 1 2 3
        printArray(strArray); // Prints: A B C
    }
}
```

#### **c. Generic Interface**

Interfaces can also use generics:

```java
interface GenericInterface<T> {
    void display(T data);
}

class GenericClass<T> implements GenericInterface<T> {
    @Override
    public void display(T data) {
        System.out.println("Data: " + data);
    }
}

public class Main {
    public static void main(String[] args) {
        GenericInterface<String> obj = new GenericClass<>();
        obj.display("Hello Generics");
    }
}
```

#### **d. Wildcards in Generics**

Wildcards allow flexibility:

- `<?>`: Unbounded wildcard.
- `<? extends T>`: Upper-bounded wildcard (subtypes of T).
- `<? super T>`: Lower-bounded wildcard (supertypes of T).

Example:

```java
public void printList(List<?> list) {
    for (Object obj : list) {
        System.out.println(obj);
    }
}
```

### **4. When to Use Generics?**

Generics should be used when:

1. **You want type safety**: To prevent runtime type errors.
   - Use in collections like `List<T>`, `Set<T>`, or `Map<K, V>`.
2. **You want reusability**: When creating classes or methods that operate on various types.
   - Example: A class like `Box<T>` or a method like `<T> void swap(T a, T b)`.
3. **You want flexibility**: To make code adaptable to future changes.
   - Example: Writing methods or classes that support unknown or multiple types using wildcards.
4. **You want to avoid casting**: To make code cleaner and more maintainable.
   - Example: Avoid explicit casting while retrieving elements from collections.

### **Advantages of Generics**

1. **Compile-Time Checking**: Detects errors early.
2. **Code Reusability**: Avoids rewriting similar code for different types.
3. **Readability and Maintainability**: Cleaner and more expressive code.
4. **Performance**: Avoids the overhead of type casting.

### **Key Notes**

- Generics work only with reference types (e.g., `Integer`, `String`) and not with primitive types (`int`, `double`). Use wrapper classes instead (`Integer` for `int`).
- Generics are implemented using **type erasure** in Java, which means type parameters are replaced with their bounds or `Object` during compilation.
