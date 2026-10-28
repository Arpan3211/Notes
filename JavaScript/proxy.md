# What is a Proxy object


A **Proxy** object in JavaScript is a powerful feature that allows you to create a wrapper around another object (referred to as the target) to intercept and redefine fundamental operations for that object, such as property access, assignment, enumeration, function invocation, and more. Proxies can be used for various purposes, including data validation, property logging, and creating observable objects.

#### Creating a Proxy

To create a Proxy, you use the `Proxy` constructor, which takes two arguments:

1. **target**: The object you want to wrap.
2. **handler**: An object that defines which operations will be intercepted and how to redefine them.

#### Basic Syntax

```javascript
const proxy = new Proxy(target, handler);
```

#### Common Handler Methods

The `handler` object can define various trap methods, which are methods that intercept operations on the target object. Some commonly used trap methods include:

- **`get(target, property, receiver)`**: Intercepts property access.
- **`set(target, property, value, receiver)`**: Intercepts property assignments.
- **`deleteProperty(target, property)`**: Intercepts property deletion.
- **`has(target, property)`**: Intercepts the `in` operator.
- **`ownKeys(target)`**: Intercepts operations to retrieve the property keys.
- **`apply(target, thisArg, argumentsList)`**: Intercepts function calls.
- **`construct(target, args)`**: Intercepts constructor calls.

#### Example of Using a Proxy

Here’s a simple example of how to use a Proxy to log property access and modifications:

```javascript
const target = {
  name: "Alice",
  age: 25,
};

const handler = {
  get(target, property) {
    console.log(`Getting ${property}: ${target[property]}`);
    return target[property];
  },
  set(target, property, value) {
    console.log(`Setting ${property} to ${value}`);
    target[property] = value;
    return true; // Indicate success
  },
};

const proxy = new Proxy(target, handler);

console.log(proxy.name); // Logs: Getting name: Alice
proxy.age = 30; // Logs: Setting age to 30
console.log(proxy.age); // Logs: Getting age: 30
```

#### Use Cases

1. **Data Validation**: Validate values before setting them on an object.

   ```javascript
   const handler = {
     set(target, property, value) {
       if (property === "age" && (value < 0 || value > 120)) {
         throw new Error("Invalid age");
       }
       target[property] = value;
       return true;
     },
   };
   ```

2. **Logging**: Automatically log access to object properties for debugging purposes.

   ```javascript
   const handler = {
     get(target, property) {
       console.log(`Property ${property} accessed`);
       return target[property];
     },
   };
   ```

3. **Observable Objects**: Create objects that notify changes to listeners.

   ```javascript
   const handler = {
     set(target, property, value) {
       target[property] = value;
       notifyListeners(property, value);
       return true;
     },
   };
   ```

4. **Default Values**: Provide default values for properties that don’t exist.
   ```javascript
   const handler = {
     get(target, property) {
       return property in target ? target[property] : "default value";
     },
   };
   ```

##3# Conclusion

The Proxy object is a powerful and flexible feature in JavaScript that allows developers to intercept and redefine fundamental operations on objects. This can lead to a wide variety of applications, including data validation, logging, observables, and more. Understanding how to use Proxies effectively can enhance your ability to work with objects and create more dynamic, responsive applications.
