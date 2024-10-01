> **Explain what do you understand by "Full Stack Development" and explain about the role of a "Full Stack Developer".**

Full Stack technology refers to the entire depth of a computer system application, and full stack web developers are those who are capable of developing both the frontend and the backend of web applications.

---

---

> **What do you understand by "MERN stack" and why it is so popular ?**

MERN stack is a JavaScript stack that is used for easier and faster deployment of full-stack web applications. MERN stack comprises of 4 technologies namely: MongoDB, Express, React and Node.js.

It is so popular because it is designed to make the development process smoother and easier as we don't need to learn different languages for frontend and backend, all the language is in JavaScript environment only.

---

---

> **What is the main difference between a web developer and a software developer ?**

The primary difference between web developers and software developers has to do with the programs they work with and what they're trying to create. Web developers are mainly concerned with the websites and web applications that run on internet browsers, while software developers are more focused on computer programs for desktop and mobile devices.

---

---

> **Describe the Difference Between Var vs Let vs Const**

### **Var**

1. Function Scoped
2. Allows duplicate identifiers
3. Value can be updated
4. Hoisted and initialized with undefined.

### **Let**

1. Block Scoped
2. Does NOT allow duplicate identifiers
3. Value can be updated
4. Hoisted BUT error if we try to access before declaration

### **Const**

1. Block Scoped
2. Does NOT allow duplicate identifiers
3. Value cannot be updated
4. Hoisted BUT error if we try to access before declaration.

---

---

> **Given a string, reverse each word in the sentence**

```jsx
var string = "Welcome to this Javascript Guide!";

// Split the string into an array of words
var words = string.split(" ");

// Reverse each word in the array
var reversedWords = words.map(function (word) {
  return word.split("").reverse().join("");
});

// Join the reversed words back into a sentence
var reversedString = reversedWords.join(" ");

console.log(reversedString); // emocleW ot siht tpircsavaJ !ediuG
```

---

---

> **What’s the spread operator?**

The spread operator is also indicated by the `...` operator. It’ll spread an object’s property into another object and spread the array entries into another array.

For example, if we have:

```
const foo = [1, 2, 3];
const bar = [...foo];
console.log(bar);
```

Then we get `[1, 2, 3]` as the value of `bar` since we made a copy of `foo` and assigned it to `bar` with the spread operator.

It’s also useful for merging arrays. For instance, if we have:

```
const foo = [1, 2, 3];
const bar = [3, 4, 5];
const baz = [...foo, ...bar];
console.log(baz);
```

Then `baz` would be `[1, 2, 3, 3, 4, 5]` since we combined the entries of the `foo` and `bar` arrays into the `baz` array.

---

---

> **How can you double elements of an array using reduce? Please note that you cannot create additional variables.**

```jsx
var arr = [1, 2, 3, 4];

var doubledArr = arr.reduce(function (acc, curr) {
  acc.push(curr * 2);
  return acc;
}, []);

console.log(doubledArr); // [2, 4, 6, 8]
```

---

---

> **Can you describe the main difference between a .forEach loop and a .map() loop and why you would pick one versus the other?**

**forEach**

- Iterates through the elements in an array.
- Executes a callback for each element.
- Does not return a value.

```
const a = [1, 2, 3];
const doubled = a.forEach((num, index) => {
  // Do something with num and/or index.
});

// doubled = undefined
```

**`map`**

- Iterates through the elements in an array.
- "Maps" each element to a new element by calling the function on each element, creating a new array as a result.

```
const a = [1, 2, 3];
const doubled = a.map(num => {
  return num * 2;
});

// doubled = [2, 4, 6]
```

The main difference between `.forEach` and `.map()` is that `.map()` returns a new array. If you need the result, but do not wish to mutate the original array, `.map()` is the clear choice. If you simply need to iterate over an array, `forEach` is a fine choice.

---

---

---

> **How to access keys in an object?**

```jsx
let user = {
  name: "Piyush",
  age: 24,
};

for (let key in user) {
  alert(key); // name, age
  alert(user[key]); // Piyush, 24
}
```

---

---

> **What's the output of the following code snippet?**

```jsx
const settings = {
  username: "lydiahallie",
  level: 19,
  health: 90,
};

const data = JSON.stringify(settings, ["level", "health"]);
console.log(data); // "{"level":19, "health":90}"
```

The second argument of **`JSON.stringify`** is the **_replacer_**. The replacer can either be a function or an array, and lets you control what and how the values should be stringified.

If the replacer is an **_array_**, only the property names included in the array will be added to the JSON string. In this case, only the properties with the names **`"level"`** and **`"health"`** are included, **`"username"`** is excluded. **`data`**is now equal to **`"{"level":19, "health":90}"`**.

If the replacer is a **_function_**, this function gets called on every property in the object you're stringifying. The value returned from this function will be the value of the property when it's added to the JSON string. If the value is **`undefined`**, this property is excluded from the JSON string.

---

> **Convert Following code into ternary**

```

let age = 15;
let result;

if (age >= 18) {
      result = "You are eligible to vote.";
} else {
      result = "You are not eligible to vote yet.";
}

console.log(result);
```

```

let age = 15;
let result =
    (age >= 18) ? "You are eligible to vote." : "You are not eligible to vote yet";
console.log(result);
```

---

---

> **What will be the output of following code?**

```
let a = 3;
let result = (a >= 0) ? (a == 0 ? "zero" : "positive") : "negative";
console.log(`The number is ${result}.`);
```

```
The number is positive.
```

---

---

> **How does the continue directive (statement) work in a loop? Does it stop the whole loop?**

The continue directive does not stop the whole loop; instead, it stops the current iteration and forces the loop to start a new one if a specific condition exists.

```
for (let i = 0; i < 10; i++) {
  // if true, skip the remaining part of the body
  if (i % 2 == 0) continue;

  alert(i); // 1, then 3, 5, 7, 9
}

```

---

---

> **Is it possible to skip or omit parts of the for-loop settings?**

Yes, it is possible to omit parts or all the for-loop settings. If you remove all the parts, it results in an endless loop. Please note that the two semicolons (;) must be present, and otherwise, there would be a syntax error.

```
let i = 0; // we have i already declared and assigned

for (; i < 3; i++) {
  // no need for "start"
  alert(i); // 0, 1, 2
}

```

---

---

> **Name and explain with example types of functions is JS**

The types of function are:

- Named - These type of functions contains name at the time of definition. For Example:

  ```
  function display()
  {
  	document.writeln("Named Function");
  }
  display();

  ```

- Anonymous - These type of functions doesn't contain any name. They are declared dynamically at runtime.

```
var display=function()
{
	document.writeln("Anonymous Function");
}
display();

```

---

---

> **Explain Hoisting in javaScript**

Hoisting is the default behavior of JavaScript where all the variable and function declarations are moved on top.

!https://almablog-media.s3.ap-south-1.amazonaws.com/Untitled_2022_09_24_T130436_707_de1e2201f1.png

This means that irrespective of where the variables and functions are declared, they are moved on top of the scope. The scope can be both local and global.

**Example 1:**

```
hoistedVariable = 3;
console.log(hoistedVariable); // outputs 3 even when the variable is declared after it is initialized
var hoistedVariable;

```

---

---

> **What do you mean by Self Invoking Functions?**

Without being requested, a self-invoking expression is automatically invoked (initiated). If a function expression is followed by (), it will execute automatically. A function declaration cannot be invoked by itself.

Normally, we declare a function and call it, however, anonymous functions may be used to run a function automatically when it is described and will not be called again. And there is no name for these kinds of functions.

---

---

> **What is currying in JavaScript?**

**Currying is an advanced technique to transform a function of arguments n, to n functions of one or fewer arguments.**

Example of a curried function:

```
function add (a) {
  return function(b){
    return a + b;
  }
}

add(3)(4)

```

---

---

> **Explain Closures in JavaScript**Closures are an ability of a function to remember the variables and functions that are declared in its outer scope.

Closures are an important concept in JavaScript that allow functions to retain access to variables and parameters from their outer (enclosing) scope, even after that scope has closed. A closure is created when a function is defined inside another function, and the inner function retains access to the outer function's variables and parameters.

Here is an example that demonstrates how closures work in JavaScript:

```jsx
js;
function outerFunction(x) {
  return function innerFunction(y) {
    return x + y;
  };
}

var add5 = outerFunction(5); // add5 is now a closure
console.log(add5(3)); // output: 8
console.log(add5(7)); // output: 12
```

---

---

> **What is your understanding of the Event Loop concept in JavaScript?**

The Event Loop is a mechanism used by JavaScript to handle asynchronous events. It is a continuous loop that checks for events and then processes them accordingly. This allows JavaScript to handle multiple events at the same time and makes it possible for things like animations and user input to be processed without blocking the main thread of execution.

---

---

> **What will the following code output?**

```
for (var i = 0; i < 3; i++) {
  setTimeout(function() { alert(i); }, 1000 + i);
}

```

**Answer**

The goal of the code above is to alert the numbers 0, 1, and 2 each after 1, 1.1, and 1.2 seconds, respectively. The problem though, is that if you run the above code in your console, you actually get the number **3** alerted 3 times after 1, 1.1, and 1.2 seconds. This is because of an issue with JavaScript closures

A JavaScript **closure** is when an inner function has access to its outer enclosing function's variables and properties. In the code above, the following line of code:

```
setTimeout(function() { alert(i); }, 1000 + i);

```

uses a variable i which is declared outside of itself. The variable i is actually declared within the for loop and the inner function accesses it. So when the for loop is done running, each of the inner functions refers to the same variable i, which at the end of the loop is equal to 3. Our goal is for each inner function to maintain its reference to the variable i without the value of it being altered. We'll solve this using an [IIFE](https://en.wikipedia.org/wiki/Immediately-invoked_function_expression) , or an immediately-invoked function expression.

```
for (var i = 0; i < 3; i++) {
  setTimeout(function(i_local) {
    return function() { alert(i_local); }
  }(i), 1000 + i);
}

```

We pass the variable i into the outer function as a local variable named i_local, where we then return a function that will alert the i_local for us. This should now correctly alert the numbers 0, 1, and 2 in the correct order.

---

---

> **Explain call(), apply() and, bind() methods.**

**1. call():**

- It’s a predefined method in javascript.
- This method invokes a method (function) by specifying the owner object.
- Example 1:

  ```
  function sayHello(){
    return "Hello " + this.name;
  }

  var obj = {name: "Sandy"};

  sayHello.call(obj);

  // Returns "Hello Sandy"

  ```

- call() method allows an object to use the method (function) of another object.

  2.**apply()**

- The apply method is similar to the call() method. The only difference is that,
- **call() method takes arguments separately whereas, apply() method takes arguments as an array.**

      ```
      function saySomething(message){
        return this.name + " is " + message;
      }
      var person4 = {name:  "John"};
      saySomething.apply(person4, ["awesome"]);

      ```

  3.**bind():**

- This method returns a new function, where the value of **“this”** keyword will be bound to the owner object, which is provided as a parameter.
- Example with arguments:

  ```jsx
  var bikeDetails = {
    displayDetails: function (registrationNumber, brandName) {
      return (
        this.name +
        " , " +
        "bike details: " +
        registrationNumber +
        " , " +
        brandName
      );
    },
  };

  var person1 = { name: "Vivek" };

  var detailsOfPerson1 = bikeDetails.displayDetails.bind(
    person1,
    "TS0122",
    "Bullet"
  );

  // Binds the displayDetails function to the person1 object

  detailsOfPerson1();
  // Returns Vivek, bike details: TS0452, Thunderbird
  ```

---

---

> **What are object prototypes?**

All JavaScript objects inherit properties from a prototype. For example,

- Date objects inherit properties from the Date prototype
- Math objects inherit properties from the Math prototype
- Array objects inherit properties from the Array prototype.
- On top of the chain is **Object.prototype.** Every prototype inherits properties and methods from the Object.prototype.
- **A prototype is a blueprint of an object. The prototype** allows us to use properties and methods on an object even if the properties and methods do not exist on the current object.

> **Difference between prototypal and classical inheritance**

Programmers build objects, which are representations of real-time entities, in traditional OO programming. Classes and objects are the two sorts of abstractions. A class is a generalization of an object, whereas an object is an abstraction of an actual thing. A Vehicle, for example, is a specialization of a Car. As a result, automobiles (class) are descended from vehicles (object).

Classical inheritance differs from prototypal inheritance in that classical inheritance is confined to classes that inherit from those remaining classes, but prototypal inheritance allows any object to be cloned via an object linking method. Despite going into too many specifics, a prototype essentially serves as a template for those other objects, whether they extend the parent object or not.

---

---

> **Explain Higher Order Functions in JavaScript.**

**Functions that operate on other functions, either by taking them as arguments or by returning them, are called higher-order functions.** Higher-order functions are a result of functions being **first-class citizens** in JavaScript.

Examples of higher-order functions:

```
function higherOrder(fn) {
  fn();
}

higherOrder(function() { console.log("Hello world") });

```

```
function higherOrder2() {
  return function() {
    return "Do something";
  }
}
var x = higherOrder2();
x()   // Returns "Do something"

```

---

---

> **What is functional programming?**

Functional programming is a paradigm in which programs are built in a declarative manner using pure functions that avoid shared state and mutable data. Functions that always return the same value for the same input and don't produce side effects are the pillar of functional programming. Many programmers consider this to be the best approach to software development as it reduces bugs and cognitive load.

- Cleaner, more concise development experience
- Simple function composition
- Features of JavaScript that enable functional programming (`.map`, `.reduce` etc.)
- JavaScript is multi-paradigm programming language (Object-Oriented Programming and Functional Programming live in harmony)

---

---

> **What is a pure function?**

A **pure function** is a function which:

- Given the same inputs, always returns the same output, and
- Has no side-effects

---

---

> **What do you mean by strict mode in JavaScript and characteristics of JavaScript strict-mode?**

In ECMAScript 5, a new feature called JavaScript Strict Mode allows you to write a code or a function in a "strict" operational environment. In most cases, this language is 'not particularly severe' when it comes to throwing errors. In 'Strict mode,' however, all forms of errors, including silent errors, will be thrown. As a result, debugging becomes a lot simpler.  Thus programmer's chances of making an error are lowered.

Characteristics of strict mode in JavaScript

1. Duplicate arguments are not allowed by developers.
2. In strict mode, you won't be able to use the JavaScript keyword as a parameter or function name.
3. The 'use strict' keyword is used to define strict mode at the start of the script. Strict mode is supported by all browsers.
4. Engineers will not be allowed to create global variables in 'Strict Mode.

---

---

> **What are Imports and Exports in JavaScript?**

Imports and exports help in writing modular code for our JavaScript applications. With the help of imports and exports, we can split a JavaScript code into multiple files in a project. This greatly simplifies the application source code and encourages code readability.

```
export const sqrt = Math.sqrt;

export function square(x) {

  return x * x;

}

export function diag(x, y) {

  return sqrt(square(x) + square(y));

}

```

This file exports two functions that calculate the squares and diagonal of the input respectively.

```
import { square, diag } from "calc";

console.log(square(4)); // 16

console.log(diag(4, 3)); // 5

```

Therefore, here we import those functions and pass input to those functions to calculate square and diagonal.

---

---

> **What are the tools or techniques used for debugging JavaScript code**

ou can use below tools or techniques for debugging JavaScript

1. Chrome Devtools
2. debugger statement
3. Good old console.log statement

---

---

> **What is a debugger statement**

The debugger statement invokes any available debugging functionality, such as setting a breakpoint. If no debugging functionality is available, this statement has no effect. For example, in the below function a debugger statement has been inserted. So execution is paused at the debugger statement just like a breakpoint in the script source.

```
function getProfile() {
  // code goes here
  debugger;
  // code goes here
}

```

---

---

> **What is the purpose of breakpoints in debugging**

You can set breakpoints in the JavaScript code once the debugger statement is executed and the debugger window pops up. At each breakpoint, JavaScript will stop executing, and let you examine the JavaScript values. After examining values, you can resume the execution of code using the play button.

---

---

> **How do you search a string for a pattern**

You can use the test() method of regular expression in order to search a string for a pattern, and return true or false depending on the result.

```
var pattern = /you/;
console.log(pattern.test("How are you?")); //true

```

---

---

> **What is a RegExp object**

RegExp object is a regular expression object with predefined properties and methods. Let's see the simple usage of RegExp object,

```
var regexp = new RegExp("\\w+");
console.log(regexp);
// expected output: /\w+/

```

---

---

> **What are regular expression patterns**

Regular Expressions provide a group of patterns in order to match characters. Basically they are categorized into 3 types,

1. **Brackets:** These are used to find a range of characters. For example, below are some use cases,
   1. [abc]: Used to find any of the characters between the brackets(a,b,c)
   2. [0-9]: Used to find any of the digits between the brackets
   3. (a|b): Used to find any of the alternatives separated with |
2. **Metacharacters:** These are characters with a special meaning For example, below are some use cases,
   1. \d: Used to find a digit
   2. \s: Used to find a whitespace character
   3. \b: Used to find a match at the beginning or ending of a word
3. **Quantifiers:** These are useful to define quantities For example, below are some use cases,

   1. n+: Used to find matches for any string that contains at least one n
   2. n\*: Used to find matches for any string that contains zero or more occurrences of n
   3. n?: Used to find matches for any string that contains zero or one occurrences of n

   ***

   ***

---

---

- **What is Recursion?**

Recursion is a method of program design where you break apart a problem into smaller repeatable subtasks. The program will complete each subtask later combined to achieve a solution.

---

---

- **What is the difference between Recursion and Iteration?**

Recursive solutions use self-calling methods and run until their base case is reached. Iterative solutions do not call themselves and instead are repeated until a certain number of loops are reached or until a condition is met (`i==10`, for example).

Iterative solutions have the upper hand in memory usage and speed (usually).

These two benefits are actually derived from the same quality; while recursive methods add a new call to the call stack with each recurrence, iterative methods add only one call for the whole loop! This means less methods are stored and called, meaning the program uses less memory and usually creates a faster run-time.

- **What is Base Case?**

The base case (or base condition) is the state where the program’s solution has been reached. An achievable base case is essential to avoid an infinite loop. Recursive methods are built with two paths: the method first checks if the base state has been reached, if yes, the method ends and returns the current data, if not the method instead goes the other path and executes the recursive case, altering the input and calling the method again.

---

---

Frontend Module

---

---

> **What is HTML?**

HTML or Hypertext Markup Language was created by Berners-Lee in 1991. It is a markup language used to create and structure website templates or web pages to present the content on the World Wide Web. It consists of a series of elements and the HTML elements tell the browser how to display the content. HTML helps in making the text more interactive and dynamic. You can save an HTML page by adding .html or .html in web page name.

---

---

> **What is the difference between HTML elements and tags?**

| HTML Elements                                                                                                                                                   | Tags                                                                                                   |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| 1. The element is an individual component of the HTML web page or document that consists of a start tag, its attributes, an end tag, and everything in between. | 1. HTML tag (either opening or closing) is used to mark the start or end of an element.                |
| 2. They usually consist of a start tag, content, and an end tag.                                                                                                | 2. They begin with < symbol and end with > symbol. Whatever is written inside < and > are called tags. |
| 3. HTML Elements hold the content.                                                                                                                              | 3. HTML Tags hold the HTML element.                                                                    |
| 4. They specify the general content.                                                                                                                            | 4. HTML tags are like keywords. Each tag has a unique meaning.                                         |
| 5. For example, <p>This is an example of a paragraph.</p>                                                                                                       | 5. For example, <a> is an opening anchor tag and </a> is a closing anchor tag.                         |

---

---

> **What are HTML Attributes?**

HTML attributes provide additional information about HTML elements. They are defined directly after the tag name. They only appear in opening tags and not in closing tags.

HTML attributes usually consist of name/value pairs like name=”value”. The Attribute values should always be enclosed in quotation marks. The name parameter takes the name of the property that is to be assigned to the element. The value takes the property value or extent of the property names that can be aligned over the element.

Some commonly used HTML attributes include src Attribute, alt Attribute, id Attribute, and href Attribute.

> **How can CSS be integrated into an HTML page?**

There are three ways of integrating CSS into HTML: using style tags in the head section, using inline-styling, writing CSS in a separate file, and linking into the HTML page by the link tag.

---

---

> **What is meant by RGB stream?**

RGB represents colors in CSS. The three streams are namely Red, Green, and Blue. The intensity of colors is represented using numbers 0 to 256. This allows CSS to have a spectrum of visible colors.

---

---

> **What is the difference between a class and an ID?**

Class is a way of using HTML elements for styling. They are not unique and have multiple elements. Whereas ID is unique and it can be assigned to a single element.

---

---

> **What is the Box model in CSS? Which CSS properties are a part of it?**

A rectangle box is wrapped around every HTML element. The box model is used to determine the height and width of the rectangular box. The CSS Box consists of Width and height (or in the absence of that, default values and the content inside), padding, borders, margin.

- **Content:** Actual Content of the box where the text or image is placed.
- **Padding:** Area surrounding the content (Space between the border and content).
- **Border:** Area surrounding the padding.
- **Margin:** Area surrounding the border.

> **What is the difference between inline, inline-block, and block?**

**Block Element:** The block elements always start on a new line. They will also take space for an entire row or width. List of block elements are <div>, <p>.

**Inline Elements:** Inline elements don't start on a new line, they appear on the same line as the content and tags beside them. Some examples of inline elements are <a>, <span> , <strong>, and <img> tags.

**Inline Block Elements:** Inline-block elements are similar to inline elements, except they can have padding and margins and set height and width values.

> **What property is used for changing the font face?**

We can use the font-family property for achieving this. The font-family  property is used for specifying what font needs to be applied on the targetted DOM element. It can hold several font names as part of “fallback” mechanism in case the browser does not support the fonts.

---

---

> **How is border-box different from content-box?**

`content-box` is the default value box-sizing property. The height and the width properties consist only of the content by excluding the border and padding.

The `border-box` property includes the content, padding and border in the height and width properties.

> **Difference between CSS grid vs flexbox?**

1.  CSS Grid Layout is a two-dimensional system along with rows and columns. It is used for large-sized layouts.
2.  Flexbox is a Grid layout with a one-dimensional system either within a row or a column. It is used for the components of an application.

> **How does absolute positioning work?**

Absolute positioning is used to place the element which is then removed from the HTML document from the normal workflow without creating any space for the element in the HTML page layout. The element can be positioned respectively to the closest positioned ancestor; otherwise, if the ancestor is not found, the element is placed with respect to the initial container box. The values provided to the top, right, left and bottom determine the final position of the element.

---

---

> **What are the properties of flexbox?**

The properties of flexbox are flex-direction, wrap, flow, content, and align-items, and content.

---

---

> **What are the advantages of Bootstrap?**

The following are some advantages of Bootstrap:

- Bootstrap is simple to use and anyone with a basic understanding of HTML and CSS can get started.
- Features that adapt to phones, tablets, and desktops: Bootstrap's responsive CSS adapts to phones, tablets, and desktops.
- A mobile-first strategy: Mobile-first styles are built into the Bootstrap framework.
- Bootstrap 4 is compatible with all modern browsers, including Chrome, Firefox, Internet Explorer 10+, Edge, Safari, and Opera

---

---

> **What is a Bootstrap Container, and how does it work?**

A bootstrap container is a handy class that generates a central region on the page where we can put our site content. The bootstrap .container has the advantage of being responsive and containing all of our other HTML code. Containers are used to pad the content within them, and there are two types of containers:

- The .container class creates a fixed-width container that is responsive.
- The .container-fluid class creates a full-width container that spans the entire viewport width.

---

---

> **What do you know about the Bootstrap Grid System?**

The Bootstrap Grid System is a mobile-first, responsive grid system that scales up to 12 columns as the device or viewport size grows. Predefined classes for quick layout options and powerful mix-ins for creating successful semantic layouts are included in the system.

There are five classes in the Bootstrap 4 grid system:

- .col- for extra small devices, whose screen width is less than 576px.
- .col-sm- small devices, whose screen width is equal to or greater than 576px.
- .col-md- medium devices, whose screen width is equal to or greater than 768px.
- .col-lg- large devices, whose screen width is equal to or greater than 992px.
- .col-xl- extra large devices, whose screen width is equal to or greater than 1200px.

The classes listed above can be combined to build layouts that are more dynamic and adaptable.

---

---

> **In Bootstrap 4, what is flexbox?**

Flexbox is a layout module for flexible boxes. Without using float or positioning, you can quickly create a flexible layout design with flexbox

---

---

> **Explain the concept of creating a basic form in Bootstrap.**

First, add a <form> element. Then, inside the form element, wrap labels and controls in a <div> element with the .form-group class. Next, the .form-control class to text input elements like <input>, <textarea> and <select> elements.

---

---

> **What are the HTML DOM methods involved?**

The following are HTML DOM methods that are mostly used.

- **getElementById(idName) – this method allows you to access or find an element associated with id name defined in parenthesis().**
  Example –
  document.getElementById(“demo”)
- **getElementsByClassName(className) – this method allows you to access or find elements associated with className defined in parenthesis().**
  Example –
  document.getElementsByClassName(“main”)
- **getElementsByTagName(tagName) – this method allows you to access or find elements associated with tagName defined in parenthesis().**
  Example –
  document.getElementsByTagName(“p”)
- **appendChild(element) – this method allows you to add a new element(node) in DOM(Document Object Model) tree structure as the last child of a node.**
  Example –
  document.appendChild(**_element_**)
- **removeChild(element) – this method allows you to remove a child element(node) in DOM(Document Object Model) tree structure.**
  Example –
  document.appendChild(**_element_**)
- **createChild(element) – this method allows you to create an element(node) in DOM(Document Object Model) tree structure.**
  Example –
  document.createElement(**_element_**)
- **replaceChild(new, old) – this method allows you to replace an old element with a new element in DOM(Document Object Model) tree structure.**
  Example –
  document.replaceChild(**_new, old_**)

> **How can I find the number of elements (length) in the HTML collection?**

To find the number of elements in HTML collection, we have to use length properties.

```

<body>

<p>This is paragraph one. </p>

<p>  This is paragraph two. </p>

<p>  This is paragraph three. </p>

<p id=”demo”></p>

<script>

var x = document.getElementsByTagName(“p”);

document.getElementById(“demo”).innerHTML = x.length;

</script>

</body>

```

The output will be –

4

---

---

> **Can you explain how to create custom HTML attributes, then get their values?**

You can create custom HTML attributes by using the setAttribute() method. Once you have created a custom attribute, you can then get its value by using the getAttribute() method.

---

---

> **How can we toggle between hiding and showing content using JavaScript?**

There are a few different ways to toggle between hiding and showing content using JavaScript. One way would be to use the CSS style property “display” and set it to “none” to hide the content, and then set it back to “block” to show it again. Another way would be to use the “visibility” style property and set it to “hidden” to hide the content, and then set it back to “visible” to show it again.

---

---

> **How can you change styles of a particular element using JavaScript?**

You can change styles of a particular element using JavaScript by accessing the element’s style property. This property is an object that contains all of the element’s style information. To change a specific style, you would simply set the appropriate property of the style object to the new value. For example, if you wanted to change the color of an element, you would do the following:

element.style.color = “new color”;

---

---

> **What are the effects methods used in jQuery?**

These are some effects methods used in jQuery:

- show() - It displays or shows the selected elements.
- hide() - It hides the matched or selected elements.
- toggle() - It shows or hides the matched elements. In other words, it toggles between the hide() and shows() methods.
- fadeIn() - It shows the matched elements by fading it to opaque. In other words, it fades in the selected elements.
- fadeOut() - It shows the matched elements by fading it to transparent. In other words, it fades out the selected elements.

---

---

> **What is the use of css() method in JQuery?**

The jQuery CSS() method is used to get (return)or set style properties or values for selected elements. It facilitates you to get one or more style properties. The jQuery CSS() provides two ways:

**Return a CSS property**

It is used to get the value of a specified CSS property.

```
$(document).ready(function(){
    $("button").click(function(){
        alert("Background color = " + $("p").css("background-color"));
    });
});

```

**Set a CSS property**

This property is used to set a specific value for all matched element.

```
$(document).ready(function(){
    $("button").click(function(){
        $("p").css("background-color", "violet");
    });
});

```

---

---

> **What is the use of delay() method in JQuery?**

The jQuery delay() method is used to delay the execution of functions in the queue. It is the best method to make a delay between the queued jQuery effects. The jQUery delay () method sets a timer to delay the execution of the next item in the queue.

```
$(selector).delay (speed, queueName)

```

**speed:** It is an optional parameter. It specifies the speed of the delay. Its possible values are slow, fast and milliseconds.

**queueName:** It is also an optional parameter. It specifies the name of the queue. Its default value is "fx" the standard queue effect.

> **What is your understanding of the Event Loop concept in JavaScript?**

The Event Loop is a mechanism used by JavaScript to handle asynchronous events. It is a continuous loop that checks for events and then processes them accordingly. This allows JavaScript to handle multiple events at the same time and makes it possible for things like animations and user input to be processed without blocking the main thread of execution.

---

---

---

---

---

# Backend module

### **What is DBMS?**

> DBMS is a collection of programs that facilitates users to create and maintain a database. In other words, DBMS provides us an interface or tool for performing different operations such as the creation of a database, inserting data into it, deleting data from it, updating the data, etc. DBMS is a software in which data is stored in a more secure way as compared to the file-based system.

---

---

### **What is RDBMS?**

> RDBMS stands for Relational Database Management Systems. It is used to maintain the data records and indices in tables. RDBMS is the form of DBMS which uses the structure to identify and access data concerning the other piece of data in the database. RDBMS is the system that enables you to perform different operations such as- update, insert, delete, manipulate and administer a relational database with minimal difficulties. Most of the time RDBMS use SQL language because it is easily understandable and is used for often.

---

---

### **What are NoSQL Databases?**

> Non-Relational Databases are also called No-SQL databases, that doesn't require any table, fields, or records. This type of database has existed since the 1960s, but the term No-SQL was coined in the late 90's and early 21'st century.

> NoSQL databases are completely different from SQL databases and work differently. It has to deal with semi-structured or unstructured data. Rather than containing tables, it consists of files within various folders. They can possess any kind of data, whether JSON, XML, etc. So, creating and managing data in NoSQL is easy and faster.

> Facebook(Meta) is a very popular example of using NoSQL databases.

> There are various types of Non-relational databases like:

- Documents Databases.
- Graph Databases.
- Wide Column Databases.
- Key-value Databases.

---

---

### **How do you create a database in MySQL?**

> Use the following command to create a new database called ‘books’:

```
`CREATE DATABASE books;`

```

---

---

### **How do you create a table using MySQL?**

````
>Use the following to create a table using MySQL:

```sql
CREATE TABLE history (
author VARCHAR(128),
title VARCHAR(128),
type VARCHAR(16),
year CHAR(4)) ENGINE InnoDB;
````

```



###How do you Insert Data Into MySQL?

```

> The INSERT INTO statement is used to add new records to a MySQL table:

```sql
INSERT INTO table_name (column1, column2, column3,...)
VALUES (value1, value2, value3,...)
```

If we want to add values for all the columns of the table, we do not need to specify the column names in the SQL query. However, the order of the values should be in the same order as the columns in the table. The INSERT INTO syntax would be as follows:

```



```

INSERT INTO table_name
VALUES (value1, value2, value3, ...);

````



- **What are the types of `JOIN` operators supported by MySQL?**
    - Inner Join
    - Left Join
    - Right Join
    - Cross Join
- **How many Triggers are possible in MySQL?**

    There are six Triggers allowed to use in the MySQL database:

    - Before Insert
    - After Insert
    - Before Update
    - After Update
    - Before Delete
    - After Delete

- **List the different types of relationships in SQL.**
    - **One-to-One** - This can be defined as the relationship between two tables where each record in one table is associated with the maximum of one record in the other table.
    - **One-to-Many & Many-to-One** - This is the most commonly used relationship where a record in a table is associated with multiple records in the other table.
    - **Many-to-Many** - This is used in cases when multiple instances on both sides are needed for defining a relationship.
- **What is Normalization?**

    Normalization represents the way of organizing structured data in the database efficiently. It includes the creation of tables, establishing relationships between them, and defining rules for those relationships. Inconsistency and redundancy can be kept in check based on these rules, hence, adding flexibility to the database.

    **What are the disadvantages of not performing database Normalization?**

    The major disadvantages are:

    The occurrence of redundant terms in the database causes the waste of space in the disk.

    Due to redundant terms, inconsistency may also occur. If any change is made in the data of one table but not made in the same data of another table, then inconsistency will occur. This inconsistency will lead to the maintenance problem and effects the ACID properties as well.

    > **Is MongoDB better than SQL databases ? If yes then how ?**
    >

    ```
    MongoDB is better than other SQL databases because it allows a highly flexible and scalable document structure.

    **For example:**

    - One data document in MongoDB can have five columns and the other one in the same collection can have ten columns.
    - MongoDB database are faster than SQL databases due to efficient indexing and storage techniques.

    ```



    > **List out the important features of MongoDB.**
    >

    ```
    Some of the important features of MongoDB are:

    - Uses a schema-less database
    - No complex joins
    - Faster access to data because of the presence of the working set (internal memory)
    - Features like aggregation, sharding, and replication make it easy to use
    - Cross-platform and document-based
    - Automatic fail-over and high-availability

    ```



    > **Explain the term “Indexing” in MongoDB.**
    >

    ```
    In MongoDB, Indexes help in efficiently resolving queries. What an Index does is that it stores a small part of the data set in a form that is easy to traverse. The index stores the value of the specific field or set of fields, ordered by the value of the field as specified in the index. MongoDB’s indexes work almost identically to typical relational database indexes.

    Indexes look at an ordered list with references to the content. These in turn allow MongoDB to query orders of magnitude faster. To create an index, use the `createIndex` collection method.

    For example:

    `> db.users.find({"username": "user101"}).explain("executionStats")`

    Here, `executionStats` mode helps us understand the effect of using an index to satisfy queries.

    ```



    > **What is the Aggregation Framework in MongoDB? -**
    >

    The aggregation framework is a set of analytics tools within MongoDB that allow you to do analytics on documents in one or more collections. - The aggregation framework is based on the concept of a pipeline. With an aggregation pipeline, we take input from a MongoDB collection and pass the documents from that collection through one or more stages, each of which performs a different operation on its inputs (See figure below). Each stage takes as input whatever the stage before it produced as output. The inputs and outputs for all stages are documents—a stream of documents.

    > **What is Node.Js and Where you can use it ?**
    >

    Node.Js is an open source, cross-platform Javascript runtime environment and library to run web applications outside the client’s browser**.** It is used to create server-side web applications.

    Node.js is perfect for data-intensive applications as it uses an asynchronous, event-driven model. You can use  I/O intensive web applications like video streaming sites. You can also use it for developing: Real-time web applications, Network applications, General-purpose applications, and Distributed systems.

    > **What is NPM ?**
    >

    NPM stands for Node Package Manager, responsible for managing all the packages and modules for Node.js.

    Node Package Manager provides two main functionalities:

    - Provides online repositories for node.js packages/modules, which are searchable on search.nodejs.org
    - Provides command-line utility to install Node.js packages and also manages Node.js versions and dependencies

    > **What are modules in Node.JS ? Name any three main modules in Node.Js.**
    >

    Modules are like Javascript libraries that can be used in a Node.js application to include a set of functions. To include a module in a Node.js application, use the **require()**  function with the parentheses containing the module's name.

    Node.js has many modules to provide the basic functionality needed for a web application. Some of them include:

    | Core Modules | Description |
    | --- | --- |
    | HTTP | Includes classes, methods, and events to create a Node.js HTTP server |
    | fs | Includes events, classes, and methods to deal with file I/O operations |
    | url | Includes methods for URL parsing |

    > **How can you manage the packages in your Node.js project?**
    >

    We can manage the packages in our Node.js project by using several package installers and their configuration file accordingly. Most of them use npm or yarn. The npm and yarn both provide almost all libraries of JavaScript with extended features of controlling environment-specific configurations. We can use package.json and package-lock.json to maintain versions of libs being installed in a project. So, there is no issue in porting that app to a different environment.

    > **What are the modules in Node.js?**
    >

    In Node.js applications, modules are like JavaScript libraries and include a set of functions. To include a module in a Node.js application, we must use the require() function with the parentheses containing the module's name.

    > **What are buffers in Node.js?**
    >

    In general, a buffer is a temporary memory mainly used by the stream to hold on to some data until it is consumed. Buffers are used to represent a fixed-size chunk of memory allocated outside of the V8 JavaScript engine. It can't be resized. It is like an array of integers, which each represents a byte of data. It is implemented by the Node. js Buffer class. Buffers also support legacy encodings like ASCII, utf-8, etc.

    > **What is the package.json file?**
    >

    The package.json file is the heart of a Node.js system. This file holds the metadata for a particular project. The package.json file is found in the root directory of any Node application or module.

    > **What is routing and how routing works in Express.js?**
    >

    Routing refers to determining how an application responds to a request.

    Syntax:

    ```
    app.METHOD(PATH, HANDLER);

    ```



    **Where:**

    - **app** is an instance of **express**.
    - **METHOD** is an HTTP request method (get, post, put, etc.).
    - **PATH** is a path/endpoint on the server.
    - **HANDLER** is a function executed when the route is matched.

    **#Example: A route with path / and get method.**

    ```
    app.get('/', function (req, res) {
      res.send('Express.js Interview Questions')
    })

    ```



    > **How you can serve static files in Express.js?**
    >

    Two possible ways:

    ```
    app.use(express.static('public'))
    app.use('/static', express.static(path.join(__dirname, 'public')));

    ```



    > **What are some Express.js key features**
    >

    Following are the key features of express framework:

    1. **Middlewares:** Express middleare are functions that access of - request (req), response (res) and next().
    2. **Routing:** It is used to define routes in order to perform and handle HTTP requests/operations.
    3. **Templates Engine:** It has SSR renders html template used to render the HTML on the browser.
    4. **High Performance:** Express prepare a thin layer, therefore, the performance is adequate.
    5. **Database Support:** Express supports RDBMS as well as NoSQL databases - MySQL, MongoDB, etc.
    6. **MVC Support:** It is a web application which supports MVC architecture.
    7. **ORM Support:** It support various ORM/ODM - Mongoose, Sequelize, etc.

    > **What is Middleware in express.js?**
    >

    Middleware is a function that is invoked by the express routing layer before the final request processed.

    **Middleware functions can perform the following tasks:**

    1. Execute any code - validation, setting headers, etc.
    2. You can make changes to the request (req) and response (res) objects.
    3. You can also end the request-response cycle, if rquired.
    4. You can call the next middleware function in the stack to proceed and process the final request.

    ***If the current middleware function does not end the request-response cycle, it must call next() to pass control to the next middleware function. Otherwise, the request will be left hanging.***

    **Types of Middleware:**

    1. Application-level middleware
    2. Router-level middleware
    3. Error-handling middleware
    4. Built-in middleware
    5. Third-party middleware

    > **What is global Error handling middleware in Express.js?**
    >

    ```

    var express = require('express'),
    app = express();

    app.use(function (err, req, res, next) {
      console.error(err.stack) // error first callback
      res.status(500).send('Something went wrong!')
    })

    ```



    > **Name some of the Template Engines supported by Express.**
    >

    Pug, Mustache, EJS and Handlebars are some of the most popular template engines used with Express.

    > **What is the default template engine used by Express?**
    >

    Express uses Jade as its default template engine.

    > **Explain what a template engine is**
    >

    A template engine allows you to use static template files in your application. At runtime, the template engine replaces variables in a template file with actual values, and transforms the template into an HTML file to be sent to the client. This approach makes it easier to design HTML pages and working with data.

    ---

    ---

    > **What is Amazon EC2?**
    >

    EC2 is short for Elastic Compute Cloud, and it provides scalable computing capacity. Using Amazon EC2 eliminates the need to invest in hardware, leading to faster development and deployment of applications. You can use Amazon EC2 to launch as many or as few virtual servers as needed, configure security and networking, and manage storage. It can scale up or down to handle changes in requirements, reducing the need to forecast traffic. EC2 provides virtual computing environments called “instances.”

    > **What is Amazon S3?**
    >

    S3 is short for Simple Storage Service, and Amazon S3 is the most supported storage platform available. S3 is object storage that can store and retrieve any amount of data from anywhere. Despite that versatility, it is practically unlimited as well as cost-effective because it is storage available on demand. In addition to these benefits, it offers unprecedented levels of durability and availability. Amazon S3 helps to manage data for cost optimization, access control, and compliance.
````
