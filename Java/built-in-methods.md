# Commonly used built-in methods in Java


comprehensive list of commonly used built-in methods in Java, organized by data types or categories

### **String Methods**

| **Method** | **Description** | **Example** |
| ----------------------- | ---------------------------------------------- | ---------------------------------------- |
| `length()`              | Returns the length of the string.              | `"Java".length()` → `4`                  |
| `charAt(index)`         | Returns the character at the specified index.  | `"Java".charAt(1)` → `'a'`               |
| `substring(start, end)` | Extracts a substring.                          | `"Java".substring(1, 3)` → `"av"`        |
| `contains(sequence)`    | Checks if the string contains the sequence.    | `"Java".contains("av")` → `true`         |
| `equals(object)`        | Compares two strings for equality.             | `"Java".equals("java")` → `false`        |
| `toUpperCase()`         | Converts all characters to uppercase.          | `"Java".toUpperCase()` → `"JAVA"`        |
| `toLowerCase()`         | Converts all characters to lowercase.          | `"Java".toLowerCase()` → `"java"`        |
| `replace(old, new)`     | Replaces occurrences of a substring.           | `"Java".replace('a', 'o')` → `"Jovo"`    |
| `split(delimiter)`      | Splits the string into an array of substrings. | `"A,B,C".split(",")` → `["A", "B", "C"]` |
| `trim()`                | Removes leading and trailing spaces.           | `" Java ".trim()` → `"Java"`             |

### **Math Methods**

| **Method** | **Description** | **Example** |
| --------------------- | ---------------------------------------------- | ----------------------------------- |
| `abs(number)`         | Returns the absolute value.                    | `Math.abs(-10)` → `10`              |
| `sqrt(number)`        | Returns the square root.                       | `Math.sqrt(16)` → `4.0`             |
| `pow(base, exponent)` | Returns the value of base raised to the power. | `Math.pow(2, 3)` → `8.0`            |
| `max(a, b)`           | Returns the larger of two numbers.             | `Math.max(5, 10)` → `10`            |
| `min(a, b)`           | Returns the smaller of two numbers.            | `Math.min(5, 10)` → `5`             |
| `random()`            | Returns a random number between 0.0 and 1.0.   | `Math.random()` → `0.123` (example) |
| `ceil(number)`        | Rounds up to the nearest whole number.         | `Math.ceil(4.2)` → `5.0`            |
| `floor(number)`       | Rounds down to the nearest whole number.       | `Math.floor(4.8)` → `4.0`           |
| `round(number)`       | Rounds to the nearest whole number.            | `Math.round(4.5)` → `5`             |

### **Array Methods**

| **Method** | **Description** | **Example** |
| --------------------------------- | ------------------------------------------- | --------------------------------------------- |
| `Arrays.toString(array)`          | Converts the array to a string.             | `Arrays.toString(new int[]{1, 2})` → `[1, 2]` |
| `Arrays.sort(array)`              | Sorts the array in ascending order.         | `Arrays.sort(arr)`                            |
| `Arrays.equals(arr1, arr2)`       | Checks if two arrays are equal.             | `Arrays.equals(arr1, arr2)` → `true/false`    |
| `Arrays.copyOf(array, len)`       | Copies elements into a new array.           | `Arrays.copyOf(arr, 3)`                       |
| `Arrays.binarySearch(array, key)` | Searches for a value and returns the index. | `Arrays.binarySearch(arr, 10)` → `2`          |

### **List Methods**

| **Method** | **Description** | **Example** |
| ------------------- | -------------------------------------------------- | -------------------------------- |
| `add(element)`      | Adds an element to the list.                       | `list.add("Java")`               |
| `remove(index)`     | Removes the element at the specified index.        | `list.remove(2)`                 |
| `get(index)`        | Retrieves the element at the specified index.      | `list.get(0)` → `"Java"`         |
| `size()`            | Returns the number of elements in the list.        | `list.size()` → `5`              |
| `clear()`           | Removes all elements from the list.                | `list.clear()`                   |
| `contains(element)` | Checks if the list contains the specified element. | `list.contains("Java")` → `true` |

### **Wrapper Class Methods**

| **Method** | **Description** | **Example** |
| --------------------- | -------------------------------------- | --------------------------------------- |
| `parseInt(string)`    | Converts a string to an integer.       | `Integer.parseInt("10")` → `10`         |
| `parseDouble(string)` | Converts a string to a double.         | `Double.parseDouble("3.14")` → `3.14`   |
| `valueOf(string)`     | Converts a string to a wrapper object. | `Integer.valueOf("10")` → `Integer(10)` |
| `toString(value)`     | Converts a number to a string.         | `Integer.toString(10)` → `"10"`         |

### **Date and Time Methods (`java.time`)**

| **Method** | **Description** | **Example** |
| --------------------- | ------------------------------- | -------------------------------------------------------- |
| `LocalDate.now()`     | Gets the current date.          | `LocalDate.now()` → `2024-12-31`                         |
| `LocalTime.now()`     | Gets the current time.          | `LocalTime.now()` → `10:15:30`                           |
| `LocalDateTime.now()` | Gets the current date and time. | `LocalDateTime.now()`                                    |
| `plusDays(days)`      | Adds days to a date.            | `date.plusDays(5)`                                       |
| `format(formatter)`   | Formats the date/time.          | `date.format(DateTimeFormatter.ofPattern("dd-MM-yyyy"))` |

### **System Methods**

| **Method** | **Description** | **Example** |
| ---------------------------- | ----------------------------------------- | ----------------------------- |
| `System.out.println()`       | Prints to the console.                    | `System.out.println("Hello")` |
| `System.currentTimeMillis()` | Returns the current time in milliseconds. | `System.currentTimeMillis()`  |
| `System.gc()`                | Requests garbage collection.              | `System.gc()`                 |

### **Other Useful Methods**

| **Category** | **Method** | **Description** | **Example** |
| ------------ | --------------------- | ---------------------------------------- | ---------------------- |
| **File** | `exists()`            | Checks if a file exists.                 | `file.exists()`        |
|              | `createNewFile()`     | Creates a new file.                      | `file.createNewFile()` |
| **Thread** | `start()`             | Starts a thread.                         | `thread.start()`       |
|              | `sleep(milliseconds)` | Pauses execution for the specified time. | `Thread.sleep(1000)`   |
| **Scanner** | `nextLine()`          | Reads the next line of input.            | `scanner.nextLine()`   |

---

### Object Methods

| **Method Name** | **Description** | **Example** |
| ------------------------------- | -------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `equals(Object obj)`            | Compares objects for equality.                                             | `System.out.println("abc".equals("abc")); // true`                      |
| `hashCode()`                    | Returns hash code for the object.                                          | `System.out.println("abc".hashCode()); // 96354`                        |
| `toString()`                    | Returns string representation of the object.                               | `System.out.println(new Object().toString()); // java.lang.Object@hash` |
| `getClass()`                    | Returns the runtime class of the object.                                   | `System.out.println("abc".getClass()); // class java.lang.String`       |
| `clone()`                       | Creates a copy of the object (requires `Cloneable`).                       | `MyClass obj = (MyClass) obj.clone();`                                  |
| `notify()`                      | Wakes up one waiting thread.                                               | `synchronized(obj) { obj.notify(); }`                                   |
| `notifyAll()`                   | Wakes up all waiting threads.                                              | `synchronized(obj) { obj.notifyAll(); }`                                |
| `wait()`                        | Makes the thread wait until notified.                                      | `synchronized(obj) { obj.wait(); }`                                     |
| `wait(long timeout)`            | Waits for a specified time or until notified.                              | `synchronized(obj) { obj.wait(1000); }`                                 |
| `wait(long timeout, int nanos)` | Waits for a specified time (milliseconds + nanoseconds) or until notified. | `synchronized(obj) { obj.wait(1000, 500); }`                            |
