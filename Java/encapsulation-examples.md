# Real-World Examples of Encapsulation


### **Real-World Examples of Encapsulation**

Here are a few real-world scenarios that demonstrate the concept of **Encapsulation** in an easy-to-understand manner:

### **1. Bank Account**

In the real world, when you open a bank account, you can't directly change your balance by yourself. Instead, you interact with the bank through methods like **deposit** and **withdraw**, which control how your balance is updated.

#### **Encapsulation Concept in Bank Account:**

- **Private Fields**: The bank account balance should be private and not directly accessible from outside the class.
- **Public Methods (Getter/Setter)**: Methods like `deposit()` and `withdraw()` control how the balance is modified.

```java
class BankAccount {
    private double balance;

    // Getter method to access balance
    public double getBalance() {
        return balance;
    }

    // Method to deposit money
    public void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
        } else {
            System.out.println("Amount to deposit must be positive.");
        }
    }

    // Method to withdraw money
    public void withdraw(double amount) {
        if (amount > 0 && balance >= amount) {
            balance -= amount;
        } else {
            System.out.println("Invalid withdrawal or insufficient balance.");
        }
    }
}

public class Main {
    public static void main(String[] args) {
        BankAccount account = new BankAccount();
        account.deposit(500);
        account.withdraw(200);
        System.out.println("Balance: " + account.getBalance());
    }
}
```

### **Explanation**:

- The `balance` is hidden and can't be directly accessed.
- The `deposit()` and `withdraw()` methods ensure that balance is updated correctly, following business rules (e.g., not allowing negative deposits or withdrawals exceeding available funds).

### **2. Car Engine**

In a real car, the engine, fuel system, and electrical components are all hidden from the driver. The driver doesn't need to know the exact details of how the engine works. Instead, the driver interacts with the car through public methods like `start()`, `accelerate()`, or `brake()`.

#### **Encapsulation Concept in Car:**

- **Private Fields**: Internal variables like `engineStatus`, `fuelLevel`, etc., should be private.
- **Public Methods**: Methods like `start()`, `accelerate()`, and `brake()` are used to interact with the car.

```java
class Car {
    private boolean engineStatus;
    private double fuelLevel;

    // Getter for engine status
    public boolean isEngineRunning() {
        return engineStatus;
    }

    // Getter for fuel level
    public double getFuelLevel() {
        return fuelLevel;
    }

    // Method to start the car
    public void startEngine() {
        if (fuelLevel > 0) {
            engineStatus = true;
            System.out.println("Engine started.");
        } else {
            System.out.println("Insufficient fuel to start the engine.");
        }
    }

    // Method to accelerate
    public void accelerate() {
        if (engineStatus && fuelLevel > 0) {
            fuelLevel -= 0.5;  // Decreases fuel as the car accelerates
            System.out.println("Car is accelerating. Fuel level: " + fuelLevel);
        } else {
            System.out.println("Can't accelerate. Engine is off or fuel is empty.");
        }
    }

    // Method to stop the car
    public void stopEngine() {
        engineStatus = false;
        System.out.println("Engine stopped.");
    }
}

public class Main {
    public static void main(String[] args) {
        Car myCar = new Car();
        myCar.startEngine();
        myCar.accelerate();
        myCar.stopEngine();
    }
}
```

### **Explanation**:

- The internal working of the car (like how the engine starts or fuel consumption) is hidden.
- The driver interacts with the car using public methods like `startEngine()`, `accelerate()`, and `stopEngine()`, which ensures that the car operates correctly and prevents the driver from interacting with the internals directly.

### **3. ATM Machine**

An ATM (Automated Teller Machine) allows you to withdraw money, check your balance, or transfer funds. You don’t have direct access to the ATM’s internal systems or bank account details. You interact with the ATM via a **user interface** (PIN entry, transaction options), and the machine handles the rest internally.

#### **Encapsulation Concept in ATM:**

- **Private Fields**: The bank account balance and PIN are private.
- **Public Methods**: You interact with the ATM through public methods like `checkBalance()`, `withdraw()`, or `deposit()`.

```java
class ATM {
    private double balance;
    private String pin;

    public ATM(String pin) {
        this.pin = pin;
        this.balance = 1000;  // Initial balance
    }

    // Method to check balance
    public double checkBalance(String enteredPin) {
        if (enteredPin.equals(pin)) {
            return balance;
        } else {
            System.out.println("Incorrect PIN");
            return -1;
        }
    }

    // Method to withdraw money
    public void withdraw(String enteredPin, double amount) {
        if (enteredPin.equals(pin) && balance >= amount) {
            balance -= amount;
            System.out.println("Withdrawal successful. New balance: " + balance);
        } else {
            System.out.println("Invalid PIN or insufficient balance.");
        }
    }

    // Method to deposit money
    public void deposit(String enteredPin, double amount) {
        if (enteredPin.equals(pin) && amount > 0) {
            balance += amount;
            System.out.println("Deposit successful. New balance: " + balance);
        } else {
            System.out.println("Invalid PIN or invalid deposit amount.");
        }
    }
}

public class Main {
    public static void main(String[] args) {
        ATM myATM = new ATM("1234");

        // User enters PIN
        System.out.println("Balance: " + myATM.checkBalance("1234"));
        myATM.withdraw("1234", 500);
        myATM.deposit("1234", 200);
    }
}
```

### **Explanation**:

- The **ATM balance** and **PIN** are private and not directly accessible.
- Public methods like `checkBalance()`, `withdraw()`, and `deposit()` allow interaction with the ATM but control the flow and validation internally.

### **4. Online Shopping System**

In an online shopping system, a `Cart` object might have an internal list of items. The `Cart` class should not expose the items directly but should allow customers to add items, view the total, or checkout through public methods. The internal details of managing the list of items are hidden.

#### **Encapsulation Concept in Shopping Cart:**

- **Private Fields**: The list of items in the cart and the total amount are private.
- **Public Methods**: Methods like `addItem()`, `removeItem()`, and `getTotalAmount()` expose functionality to the outside.

```java
import java.util.ArrayList;
import java.util.List;

class ShoppingCart {
    private List<String> items;
    private double totalAmount;

    public ShoppingCart() {
        items = new ArrayList<>();
        totalAmount = 0.0;
    }

    // Method to add item to cart
    public void addItem(String item, double price) {
        items.add(item);
        totalAmount += price;
        System.out.println(item + " added to the cart. Total: " + totalAmount);
    }

    // Method to get the total amount
    public double getTotalAmount() {
        return totalAmount;
    }

    // Method to display all items
    public void displayItems() {
        System.out.println("Items in cart: " + items);
    }
}

public class Main {
    public static void main(String[] args) {
        ShoppingCart cart = new ShoppingCart();
        cart.addItem("Laptop", 1000.0);
        cart.addItem("Mouse", 20.0);
        cart.displayItems();
        System.out.println("Total amount: " + cart.getTotalAmount());
    }
}
```

### **Explanation**:

- The **items list** and **total amount** are private and cannot be directly accessed.
- Customers interact with the `ShoppingCart` class via public methods like `addItem()`, `getTotalAmount()`, and `displayItems()`. The implementation details of how items are stored and how the total is calculated are hidden.

### **Conclusion**

Encapsulation helps manage complexity by hiding the internal workings of a system and providing a clean interface for the user to interact with. Real-world systems, such as bank accounts, cars, ATM machines, and shopping carts, all implement encapsulation to keep sensitive data private and ensure controlled interaction through public methods. This allows developers to maintain and update the system’s internals without impacting the outside world.
