# Lambda Expression in Java


### **Lambda Expression in Java**

A **lambda expression** in Java is a concise way to represent an anonymous function (or method) that can be passed around as a parameter to a method or stored in a variable. It enables a more functional programming style in Java and was introduced in **Java 8** to support functional interfaces and make code more readable and concise.

### **Syntax of a Lambda Expression**

The general syntax of a lambda expression is:

```java
(parameters) -> expression
```

- **parameters**: A comma-separated list of input parameters (optional). The types of parameters can be inferred by the compiler (type inference).
- **->**: The arrow token that separates the parameters from the body.
- **expression**: The body of the lambda expression, which can either be a single expression or a block of code.

#### **Types of Lambda Expressions**

1. **Simple Lambda Expression (Single Expression)**
2. **Lambda Expression with Block of Code**
3. **Lambda Expression with Multiple Parameters**
4. **Lambda Expression without Parameters**

### **Examples**

#### **1. Simple Lambda Expression**

```java
// Traditional way (using an anonymous class)
Runnable r1 = new Runnable() {
    @Override
    public void run() {
        System.out.println("Hello from Runnable");
    }
};

// Lambda expression
Runnable r2 = () -> System.out.println("Hello from Runnable using Lambda");

public class LambdaExample {
    public static void main(String[] args) {
        r2.run();  // Calling the lambda expression
    }
}
```

**Output**:

```
Hello from Runnable using Lambda
```

- **Explanation**: The lambda expression `() -> System.out.println("Hello from Runnable using Lambda")` is a more concise way of defining the `run` method of `Runnable`.

#### **2. Lambda Expression with Block of Code**

```java
// Lambda with multiple statements
Runnable r2 = () -> {
    System.out.println("Hello from Runnable");
    System.out.println("This is executed in the Lambda expression.");
};

public class LambdaExample {
    public static void main(String[] args) {
        r2.run();
    }
}
```

**Output**:

```
Hello from Runnable
This is executed in the Lambda expression.
```

- **Explanation**: Here, the body of the lambda expression is a block of code enclosed by `{}`. It can contain multiple statements.

#### **3. Lambda Expression with Multiple Parameters**

```java
// Lambda with two parameters
BiFunction<Integer, Integer, Integer> add = (a, b) -> a + b;

public class LambdaExample {
    public static void main(String[] args) {
        System.out.println(add.apply(5, 10));  // Output: 15
    }
}
```

**Output**:

```
15
```

- **Explanation**: The lambda expression `(a, b) -> a + b` takes two parameters `a` and `b` and returns their sum. `BiFunction` is a functional interface that takes two arguments and returns a result.

#### **4. Lambda Expression without Parameters**

```java
// Lambda with no parameters
Runnable r = () -> System.out.println("No parameters lambda");

public class LambdaExample {
    public static void main(String[] args) {
        r.run();  // Output: No parameters lambda
    }
}
```

**Output**:

```
No parameters lambda
```

- **Explanation**: This is a lambda expression with no parameters, similar to the traditional anonymous class.

### **Functional Interfaces and Lambda Expressions**

A **functional interface** is an interface that has only one abstract method. Lambda expressions can be used to implement functional interfaces. Common functional interfaces in Java include:

- **Runnable**: `void run()`
- **Callable**: `V call()`
- **Comparator**: `int compare(T o1, T o2)`
- **Consumer**: `void accept(T t)`
- **Supplier**: `T get()`
- **Function**: `R apply(T t)`
- **Predicate**: `boolean test(T t)`
- **BiFunction**: `R apply(T t, U u)`

For example:

```java
@FunctionalInterface
interface MyFunctionalInterface {
    void myMethod();
}

public class LambdaExample {
    public static void main(String[] args) {
        MyFunctionalInterface obj = () -> System.out.println("Lambda expression in action");
        obj.myMethod();  // Output: Lambda expression in action
    }
}
```

- **Explanation**: `MyFunctionalInterface` is a functional interface with one method `myMethod()`. The lambda expression implements this method in a concise way.

### **Advantages of Lambda Expressions**

1. **Concise and Readable**: Lambda expressions reduce boilerplate code, making it more concise and readable.
2. **Functional Programming**: They encourage the use of functional programming techniques like passing behavior as arguments to methods.
3. **Parallel Processing**: Lambda expressions make it easier to use parallel streams, improving performance with large data sets.
4. **Less Code**: Reduces the need for anonymous inner classes, making code easier to maintain.

### **Use Cases for Lambda Expressions**

- **Event Handling**: Commonly used in GUI applications (like Swing or JavaFX) to handle events.
- **Streams API**: Lambda expressions are heavily used with the Streams API for operations like filtering, mapping, and reducing collections of data.
- **Concurrency**: Used in concurrent programming for writing short, concise callbacks or runnable tasks.

### **Example with Java Streams API**

Lambda expressions are widely used with the Java Streams API to process collections in a functional style.

```java
import java.util.Arrays;
import java.util.List;

public class LambdaStreamExample {
    public static void main(String[] args) {
        List<String> names = Arrays.asList("Alice", "Bob", "Charlie", "David");

        // Using lambda expression to print names that start with 'A'
        names.stream()
             .filter(name -> name.startsWith("A"))
             .forEach(name -> System.out.println(name));
    }
}
```

**Output**:

```
Alice
```

- **Explanation**: The `filter` method is used with a lambda expression to filter names starting with "A", and the `forEach` method prints each name.

### **Conclusion**

Lambda expressions in Java allow you to write more concise, functional-style code that is easier to read and maintain. They are particularly useful when working with functional interfaces and collections, and they enable more efficient handling of data processing tasks, such as filtering and transforming collections using the Streams API.
