# Enums in Java


### **Enums in Java - Deep Dive**

In Java, **enums** (short for enumerations) are a special data type used to define collections of constants. They were introduced in **Java 5** and provide a type-safe way to represent a fixed set of constants (like days of the week, months of the year, or states in a process). Enums are more powerful than simple constants (like `static final` variables) because they can have fields, methods, and constructors.

Let’s explore enums in depth:

### 1. **Basic Enum Declaration**

An enum is declared using the `enum` keyword. The constants of the enum are defined in a comma-separated list inside curly braces.

```java
public enum Day {
    SUNDAY, MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY;
}
```

- `Day` is the enum type.
- `SUNDAY`, `MONDAY`, etc., are the enum constants.

#### **Usage:**

```java
public class TestEnum {
    public static void main(String[] args) {
        Day today = Day.MONDAY;
        System.out.println(today);  // Output: MONDAY
    }
}
```

### 2. **Enum with Fields, Constructors, and Methods**

Enums in Java can have fields, constructors, and methods. This makes enums more powerful, as they allow us to associate additional data and behavior with the constants.

#### **Example: Enum with Fields and Methods**

```java
public enum Day {
    SUNDAY("Relax", 1),
    MONDAY("Work", 2),
    TUESDAY("Work", 3),
    WEDNESDAY("Work", 4),
    THURSDAY("Work", 5),
    FRIDAY("Work", 6),
    SATURDAY("Relax", 7);

    private final String activity; // field
    private final int dayNumber;   // field

    // Constructor
    private Day(String activity, int dayNumber) {
        this.activity = activity;
        this.dayNumber = dayNumber;
    }

    // Method to get the activity
    public String getActivity() {
        return activity;
    }

    // Method to get the day number
    public int getDayNumber() {
        return dayNumber;
    }
}
```

#### **Usage:**

```java
public class EnumExample {
    public static void main(String[] args) {
        for (Day day : Day.values()) {
            System.out.println(day + " -> " + day.getActivity() + " (" + day.getDayNumber() + ")");
        }
    }
}
```

**Output:**

```
SUNDAY -> Relax (1)
MONDAY -> Work (2)
TUESDAY -> Work (3)
WEDNESDAY -> Work (4)
THURSDAY -> Work (5)
FRIDAY -> Work (6)
SATURDAY -> Relax (7)
```

### 3. **Enum Methods**

Java automatically provides several methods for enums. Some of the most commonly used methods are:

- **`values()`**: Returns an array of all the enum constants in the order they are declared.
- **`valueOf(String name)`**: Returns the enum constant with the specified name.
- **`ordinal()`**: Returns the ordinal value (index) of the enum constant (its position in the enum declaration).
- **`name()`**: Returns the name of the enum constant.

#### Example Usage:

```java
public class EnumMethods {
    public static void main(String[] args) {
        // Using valueOf() to get an enum constant
        Day day = Day.valueOf("MONDAY");
        System.out.println(day);  // Output: MONDAY

        // Using ordinal() to get the position of an enum constant
        System.out.println(Day.MONDAY.ordinal());  // Output: 1

        // Using name() to get the name of the enum constant
        System.out.println(Day.MONDAY.name());  // Output: MONDAY
    }
}
```

### 4. **Enum with Abstract Methods**

Enums can also have abstract methods. Every enum constant can provide its own implementation of the abstract method. This is useful when different constants need different behavior.

#### Example:

```java
public enum Day {
    SUNDAY {
        public String getActivity() {
            return "Relax";
        }
    },
    MONDAY {
        public String getActivity() {
            return "Work";
        }
    },
    SATURDAY {
        public String getActivity() {
            return "Play";
        }
    };

    // Abstract method
    public abstract String getActivity();
}
```

### 5. **Enum with `switch` Statement**

Enums are often used with the `switch` statement. Since enums are constants, they provide a clean, readable way to handle different cases.

```java
public class SwitchEnum {
    public static void main(String[] args) {
        Day day = Day.MONDAY;

        switch (day) {
            case MONDAY:
                System.out.println("Start of the week");
                break;
            case SUNDAY:
                System.out.println("Relaxing day");
                break;
            default:
                System.out.println("Midweek");
        }
    }
}
```

### 6. **Enum Singleton Pattern**

An enum is often used to implement the Singleton design pattern because of its thread-safe and serialization properties.

#### Example:

```java
public enum Singleton {
    INSTANCE;

    public void showMessage() {
        System.out.println("Hello from Singleton!");
    }
}
```

You can access the singleton instance using `Singleton.INSTANCE`.

```java
public class SingletonExample {
    public static void main(String[] args) {
        Singleton.INSTANCE.showMessage();
    }
}
```

### 7. **Enum and Interfaces**

Enums can also implement interfaces. Each enum constant must provide its own implementation of the methods defined in the interface.

#### Example:

```java
interface Action {
    void performAction();
}

public enum Day implements Action {
    SUNDAY {
        public void performAction() {
            System.out.println("Relax");
        }
    },
    MONDAY {
        public void performAction() {
            System.out.println("Start work");
        }
    };

    // Optional: Enum methods can also have additional logic
    public abstract void performAction();
}
```

### 8. **Comparing Enums**

You can compare enums using `==` or `equals()` method.

```java
public class EnumComparison {
    public static void main(String[] args) {
        Day day1 = Day.MONDAY;
        Day day2 = Day.MONDAY;
        Day day3 = Day.SUNDAY;

        System.out.println(day1 == day2); // true
        System.out.println(day1.equals(day3)); // false
    }
}
```

### 9. **Enum in Collections**

Since enums are objects, they can be stored in collections like lists, sets, or maps.

```java
import java.util.EnumSet;

public class EnumSetExample {
    public static void main(String[] args) {
        EnumSet<Day> weekend = EnumSet.of(Day.SUNDAY, Day.SATURDAY);
        System.out.println(weekend);
    }
}
```

### Key Points About Enums in Java:

1. **Type Safety**: Enums provide type safety by ensuring that you can only use predefined constants.
2. **Singleton Nature**: Each enum constant is a singleton, meaning there’s only one instance of each constant.
3. **Serialization**: Enums are inherently serializable, so they can be safely used in serialized contexts (like saving and loading objects).
4. **Inheritance**: Enums cannot extend other classes, but they can implement interfaces.
5. **Built-in Methods**: Enums come with a set of built-in methods like `valueOf()`, `ordinal()`, `values()`, `name()`, and more.

### Conclusion

Enums in Java offer a powerful way to define a fixed set of constants. They are much more flexible and powerful than traditional constants, as they can have fields, methods, and constructors. Enums are also useful in implementing design patterns like Singleton and when you need to represent a finite set of values, such as days of the week, states, or commands.
