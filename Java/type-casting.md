# Implicit and Explicit Type Casting


**implicit** and **explicit** type casting.

### Implicit Type Casting (Widening Conversion)

- Java automatically converts a smaller data type to a larger one.
- No data loss occurs.

#### Example:

```java
public class TypeCastingDemo {
    public static void main(String[] args) {
        // Implicit Casting: int to double
        int num = 100;
        double doubleNum = num; // Automatically converts int to double

        System.out.println("Original int value: " + num);
        System.out.println("Implicitly casted to double: " + doubleNum);
    }
}
```

### Explicit Type Casting (Narrowing Conversion)

- You manually convert a larger data type to a smaller one.
- May lead to data loss or truncation.

#### Example:

```java
public class TypeCastingDemo {
    public static void main(String[] args) {
        // Explicit Casting: double to int
        double doubleValue = 99.99;
        int intValue = (int) doubleValue; // Manually cast double to int

        System.out.println("Original double value: " + doubleValue);
        System.out.println("Explicitly casted to int: " + intValue); // Fractional part is truncated
    }
}
```

### Practice Tasks

1. **Implicit Casting**:

   - Declare variables of types `byte`, `short`, `int`, `long`, `float`, and `double`.
   - Assign values and observe how smaller types automatically cast to larger types.

   ```java
   byte byteVal = 10;
   int intVal = byteVal; // Implicit cast
   float floatVal = intVal; // Implicit cast

   System.out.println("Byte to Int: " + intVal);
   System.out.println("Int to Float: " + floatVal);
   ```

2. **Explicit Casting**:

   - Declare a variable of type `double` and cast it to `int` and `float`.
   - Observe the truncation of fractional parts.

   ```java
   double price = 123.45;
   int roundedPrice = (int) price;
   System.out.println("Double to Int: " + roundedPrice);
   ```

3. **Mixed Type Operations**:

   - Perform arithmetic operations involving different types and observe automatic type promotion.

   ```java
   int intNum = 10;
   double doubleNum = 3.5;
   double result = intNum + doubleNum; // int is promoted to double
   System.out.println("Result of int + double: " + result);
   ```

4. **Overflow in Explicit Casting**:

   - Assign a large `int` or `long` value to a smaller type like `byte` and observe the behavior.

   ```java
   int largeNum = 130; // Larger than byte range (-128 to 127)
   byte smallNum = (byte) largeNum; // Overflow occurs
   System.out.println("Overflowed byte value: " + smallNum);
   ```

### Key Concepts to Understand

- **Widening (Implicit) Casting**: Happens automatically when there’s no risk of data loss.
- **Narrowing (Explicit) Casting**: Requires manual casting, might lead to data loss.
- **Type Promotion in Expressions**: Smaller types are promoted to `int` or larger during operations.

### Challenges to Try

1. Write a program that accepts user input as a `String`, converts it to `int`, and then performs calculations by implicitly and explicitly casting it to other types.
2. Simulate a data truncation scenario where a large floating-point number is explicitly cast to an integer.
3. Implement a program that demonstrates type promotion in a multi-type arithmetic operation.

Experiment with these examples and try modifying them to observe the different behaviors of type casting in Java!
