# Class


### **1. What is a Class in TypeScript?**

A **class** in TypeScript is a blueprint for creating objects that bundle:

- **Properties** (data/state)
- **Methods** (behavior)

It works like JavaScript’s ES6 classes, but **with type safety** and **extra features**.

### **2. Basic Example**

```ts
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet(): void {
    console.log(
      `Hello, my name is ${this.name} and I'm ${this.age} years old.`
    );
  }
}

const arpan = new Person("Arpan", 22);
arpan.greet();
```

Here:

- `constructor` runs when a new object is created.
- `this` refers to the current instance.
- TypeScript enforces that `name` is a `string` and `age` is a `number`.

### **3. Access Modifiers**

TypeScript has **3 main access modifiers** for encapsulation:

| Modifier           | Scope                                       |
| ------------------ | ------------------------------------------- |
| `public` (default) | Accessible everywhere.                      |
| `private`          | Accessible only inside the same class.      |
| `protected`        | Accessible inside the class and subclasses. |

Example:

```ts
class Employee {
  public name: string; // Default
  private salary: number;
  protected department: string;

  constructor(name: string, salary: number, department: string) {
    this.name = name;
    this.salary = salary;
    this.department = department;
  }
}
```

### **4. Parameter Properties** (Shortcut)

Instead of writing properties separately, you can declare and assign them in the constructor:

```ts
class Product {
  constructor(public name: string, private price: number) {}
}
```

### **5. Readonly Properties**

Values that can only be set once (at declaration or in constructor).

```ts
class Config {
  readonly apiKey: string;
  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }
}
```

### **6. Inheritance**

A class can **extend** another to reuse code.

```ts
class Animal {
  move() {
    console.log("Moving...");
  }
}

class Dog extends Animal {
  bark() {
    console.log("Woof!");
  }
}

const dog = new Dog();
dog.move(); // From Animal
dog.bark(); // From Dog
```

### **7. Method Overriding**

Subclasses can replace a parent’s method:

```ts
class Parent {
  greet() {
    console.log("Hello from Parent");
  }
}

class Child extends Parent {
  greet() {
    console.log("Hello from Child");
  }
}
```

### **8. `super` Keyword**

Used to call parent class constructor or methods.

```ts
class Vehicle {
  constructor(public brand: string) {}
}

class Car extends Vehicle {
  constructor(brand: string, public model: string) {
    super(brand); // Call Vehicle's constructor
  }
}
```

### **9. Getters and Setters**

Control property access.

```ts
class User {
  private _password: string = "";

  get password(): string {
    return "****"; // Masked
  }

  set password(newPassword: string) {
    if (newPassword.length >= 6) {
      this._password = newPassword;
    }
  }
}
```

### **10. Static Members**

Belong to the class itself, not instances.

```ts
class MathUtils {
  static PI = 3.14;
  static add(a: number, b: number) {
    return a + b;
  }
}

console.log(MathUtils.PI);
console.log(MathUtils.add(2, 3));
```

### **11. Abstract Classes**

Used as blueprints that cannot be instantiated directly.

```ts
abstract class Shape {
  abstract getArea(): number; // Must be implemented
}

class Circle extends Shape {
  constructor(public radius: number) {
    super();
  }
  getArea() {
    return Math.PI * this.radius * this.radius;
  }
}
```

### **Key Takeaways**

- Classes in TypeScript are **ES6 classes + type safety**.
- Support **access modifiers**, **readonly**, **get/set**, **static**, **abstract**.
- Great for **OOP** patterns and large-scale application architecture.
