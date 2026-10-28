# Wrapper classes in Java


In Java, **wrapper classes** are a set of classes in the `java.lang` package that provide a way to use primitive data types (like `int`, `double`, `char`, etc.) as objects. Each primitive type in Java has a corresponding wrapper class. For example:

| Primitive Type | Wrapper Class |
| -------------- | ------------- |
| `byte`         | `Byte`        |
| `short`        | `Short`       |
| `int`          | `Integer`     |
| `long`         | `Long`        |
| `float`        | `Float`       |
| `double`       | `Double`      |
| `char`         | `Character`   |
| `boolean`      | `Boolean`     |

### Why Use Wrapper Classes?

1. **Object-Oriented Context**: Some Java APIs require objects instead of primitive types. Wrapper classes help bridge this gap.
2. **Collections Framework**: Classes like `ArrayList`, `HashMap`, etc., can only store objects, not primitives.
3. **Utility Methods**: Wrapper classes provide utility methods for converting data, parsing strings, etc.

### Key Features of Wrapper Classes

1. **Autoboxing and Unboxing**:

   - **Autoboxing**: Automatic conversion of a primitive to its corresponding wrapper class object.
     ```java
     int num = 5;
     Integer obj = num;  // Autoboxing
     ```
   - **Unboxing**: Automatic conversion of a wrapper class object back to its corresponding primitive.
     ```java
     Integer obj = 10;
     int num = obj;  // Unboxing
     ```

2. **Immutability**: Wrapper class objects are immutable, meaning their values cannot be changed after they are created.

3. **Static Utility Methods**: They provide methods like `parseXxx()` to convert strings to corresponding primitives.

   ```java
   String str = "123";
   int num = Integer.parseInt(str);  // Convert string to int
   ```

4. **Constants**: Some wrapper classes have constants like `Integer.MAX_VALUE` and `Integer.MIN_VALUE`.

### Example of Using Wrapper Classes

```java
import java.util.ArrayList;

public class WrapperClassExample {
    public static void main(String[] args) {
        // Autoboxing
        ArrayList<Integer> numbers = new ArrayList<>();
        numbers.add(10);  // Autoboxing converts int to Integer

        // Unboxing
        int num = numbers.get(0);  // Unboxing converts Integer to int

        // Utility methods
        String str = "50";
        int parsedNumber = Integer.parseInt(str);  // Parsing string to int

        System.out.println("ArrayList element: " + num);
        System.out.println("Parsed number: " + parsedNumber);
    }
}
```

### When to Use Wrapper Classes?

- When working with generic classes in Java Collections.
- When primitive data needs to interact with classes or methods that require objects.
- When using features like `null` values for primitives (which is not possible without wrapper classes).

#### Wrapper classes play a crucial role in bridging the gap between Java's object-oriented features and its primitive types.
