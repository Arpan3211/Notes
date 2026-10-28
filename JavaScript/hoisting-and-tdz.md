# Explain Hoisting in javascript


**Explanation:**

In Javascript we declare the variable using ( var , let and const ) , and we accessing the varibles or function after the decletation but in case of var and normal functions we can access the variables before decleration

```jsx
//------**Variable Hoisting: -----

console.log(myVar); // undefined
var myVar = 10;
console.log(myVar) //10

// ----function Hoisting: ------

sayHello(); // Output: Hello!
function sayHello() {
console.log('Hello!');
}

sayHi(); // Error: sayHi is not a function
var sayHi = function() {
  console.log('Hi!');
};**
```

---

---

---

## Temporal Dead Zone


The Temporal Dead Zone (TDZ) is a concept in JavaScript related to how variables are handled when using `let` and `const` declarations. It refers to the time between the entering of a block scope (like inside a function or a block) and the actual declaration of a variable within that block. During this period, the variable is in a "dead zone" and cannot be accessed.

Here's a simplified explanation:

#### What is TDZ?

- **Before Declaration**: If you try to access a variable declared with `let` or `const` before its declaration in its block scope, you'll get a `ReferenceError`. This is because the variable is in the TDZ.
- **After Declaration**: Once the declaration has been encountered in the code, the variable can be used as normal.

#### Why Does TDZ Exist?

The TDZ exists to prevent the use of variables before they are properly initialized. It helps avoid bugs that could arise from accessing variables before they are set.

#### Example of TDZ

Here’s an example to illustrate TDZ:

```javascript
function example() {
  console.log(a); // ReferenceError: Cannot access 'a' before initialization
  let a = 3;
}

example();
```

In this example:

- The variable `a` is declared with `let` but is accessed before its declaration.
- This results in a `ReferenceError` because `a` is in the TDZ.

#### TDZ with `const`

The same rules apply to variables declared with `const`, but since `const` also requires initialization at the time of declaration, the TDZ ensures that the variable cannot be accessed until it's initialized.

```javascript
function example() {
  console.log(b); // ReferenceError: Cannot access 'b' before initialization
  const b = 5;
}

example();
```

#### How to Avoid TDZ Errors

- **Declare Variables Early**: Declare variables at the beginning of your block scope to avoid accessing them before they are initialized.
- **Initialize Variables**: Make sure variables declared with `let` and `const` are initialized before use.

#### Summary

The Temporal Dead Zone is a period during which variables declared with `let` and `const` are inaccessible. It starts at the beginning of the block and ends when the variable is declared and initialized. This concept helps prevent errors related to the use of variables before they are ready.
