# Packages in Java


In Java, **packages** are used to organize classes and interfaces into namespaces, making it easier to manage and access them. They are a way to group related types (classes, interfaces, enums, and annotations) to avoid naming conflicts and improve code maintainability.

### Key Features of Packages

1. **Namespace Management**: Packages help prevent naming conflicts. For instance, two classes with the same name can exist in different packages.
2. **Access Protection**: They control access levels of classes and members. The `protected` and default (package-private) access modifiers are package-specific.
3. **Reusability**: Code in one package can be reused in another without redundancy.
4. **Categorization**: Logical grouping of classes and interfaces improves project organization and readability.
5. **Versioning**: Packages can be used to manage different versions of classes and interfaces, making
   it easier to maintain and update codebases.
6. **Dependency Management**: Packages help manage dependencies between classes and interfaces, making it easier to understand.
7. **Security**: Packages can be used to control access to classes and interfaces, improving security.
8. **Scalability**: Packages make it easier to scale large projects by organizing code into logical
   groups.
9. **Portability**: Packages make it easier to move code between projects and platforms.
10. **Readability**: Packages improve code readability by grouping related classes and interfaces together.

### Types of Packages

1. **Built-in Packages**:
   These are provided by Java, and you can use them directly.

   - Examples:
     - `java.lang` (automatically imported; contains core classes like `String`, `Math`, etc.)
     - `java.util` (utility classes like `ArrayList`, `HashMap`, etc.)
     - `java.io` (classes for input-output operations like `FileReader`, `BufferedWriter`, etc.)

2. **User-defined Packages**:
   These are created by developers to organize their project structure.

### Creating a Package

To create a package:

1. Declare it at the top of your Java file using the `package` keyword.
2. Save the file in a directory matching the package name.

#### Example:

```java
package com.example.myapp; // Declares the package

public class MyClass {
    public void displayMessage() {
        System.out.println("Hello from MyClass in com.example.myapp package!");
    }
}
```

### Using a Package

To use a class or interface from a package, you can:

1. **Fully Qualified Name**:
   ```java
   com.example.myapp.MyClass obj = new com.example.myapp.MyClass();
   ```
2. **Import Statement**:
   - Import specific classes:
     ```java
     import com.example.myapp.MyClass;
     MyClass obj = new MyClass();
     ```
   - Import all classes in a package:
     ```java
     import com.example.myapp.*;
     ```

### Package Access Modifiers

- **Public**: Accessible from any package.
- **Protected**: Accessible within the same package and by subclasses in other packages.
- **Default (no modifier)**: Accessible only within the same package.
- **Private**: Not accessible outside the class.

### Directory Structure

The directory structure should match the package name:

```
com/
  example/
    myapp/
      MyClass.java
```

When compiled, the `.class` files are placed in the same structure.

### Common Java Package Commands

1. **Compile with packages**:
   Use `-d` option to set the base directory for the package:

   ```bash
   javac -d . MyClass.java
   ```

   This places the compiled `.class` files in the appropriate directories.

2. **Run with packages**:
   Use the fully qualified class name:
   ```bash
   java com.example.myapp.MyClass
   ```

#### Packages are crucial for structuring large Java applications and managing dependencies effectively.

#### Commonly Used Built-in Packages

1. **`java.util`**: Classes like `ArrayList`, `HashMap`, `Date`, etc.
2. **`java.io`**: Classes like `File`, `BufferedReader`, `FileWriter`, etc.
3. **`java.net`**: Classes like `Socket`, `URL`, etc.
4. **`java.sql`**: Classes like `Connection`, `ResultSet`, etc.

---

---


---

## Additional notes: Packages.md
_(older separate note on this topic)_


# Understanding Packages in Java

Packages are containers for classes. They are used to keep the class namespace compartmentalized.
For example, a package allows you to create a class named `List`, which you can store in your own package without concern that it will collide with some other class named `List` stored elsewhere. Packages are stored in a hierarchical manner and are explicitly imported into new class definitions.

The package is both a naming and a visibility control mechanism.

The following statement creates a package called `MyPackage`:

```java
package MyPackage;
```

Java uses file system directories to store packages. For example, the `.class` files for any classes you declare to be part of `MyPackage` must be stored in a directory called `MyPackage`. Remember that case is significant, and the directory name must match the package name exactly.

A package hierarchy must be reflected in the file system of your Java development system. For example, a package declared as:

```java
package java.awt.image;
```

needs to be stored in `java\awt\image` in a Windows environment. Be sure to choose your package names carefully. You cannot rename a package without renaming the directory in which the classes are stored.

## How Does the Java Run-Time System Locate Packages?

The answer has three parts:

1. **Default Directory:** By default, the Java run-time system uses the current working directory as its starting point. Thus, if your package is in a subdirectory of the current directory, it will be found.
2. **CLASSPATH Variable:** You can specify a directory path or paths by setting the `CLASSPATH` environmental variable.
3. **Classpath Option:** You can use the `-classpath` option with `java` and `javac` to specify the path to your classes.

When a package is imported, only those items within the package declared as `public` will be available to non-subclasses in the importing code.
