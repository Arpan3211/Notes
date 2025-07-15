
https://github.com/alok722/namaste-javascript-notes?tab=readme-ov-file
https://github.com/PugazharasanC/JS-Notes?tab=readme-ov-file

[Mohamed-Hashem - Repositories](https://github.com/Mohamed-Hashem?tab=repositories)
[Sudheerj-Javascript - Repositories](https://github.com/sudheerj/javascript-interview-questions)
[Sudheerj-All - Repositories](https://github.com/sudheerj?tab=repositories)



[https://quickref.me/javascript.html](https://quickref.me/javascript.html) Cheetsheet

[https://quickref.me/es6.html](https://quickref.me/es6.html) ES6 Cheetsheet




In **JavaScript**, you can stop or prevent a redirection using several methods depending on the scenario. Here are the most common ways:

---

## ✅ **1. Prevent Redirection on Form Submission**
- If a form is submitting and redirecting, you can prevent it using `event.preventDefault()`.

### 🧑‍💻 **Example**
```html
<form id="myForm">
  <input type="text" placeholder="Enter something" />
  <button type="submit">Submit</button>
</form>

<script>
  document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();
    console.log("Form submission prevented.");
  });
</script>
```
🔎 **Explanation:**  
- `event.preventDefault()` stops the form from redirecting to another page.

---

## ✅ **2. Prevent Redirection using Anchor Tags (`<a>`)**
- If you have an anchor (`<a>`) that redirects to a URL, you can stop it using `preventDefault()`.

### 🧑‍💻 **Example**
```html
<a href="https://www.google.com" id="myLink">Click me</a>

<script>
  document.getElementById("myLink").addEventListener("click", function(event) {
    event.preventDefault();
    console.log("Redirection prevented.");
  });
</script>
```
🔎 **Explanation:**  
- Prevents the browser from navigating to the specified URL.

---

## ✅ **3. Using `window.stop()`**
- If a redirection has started and you want to halt it, `window.stop()` can be used (similar to stopping page loading).

### 🧑‍💻 **Example**
```javascript
window.stop();
console.log("Redirection or page load stopped.");
```
🔎 **Note:**  
- This works on desktop browsers like Chrome, Firefox, and Edge.

---

## ✅ **4. Using `beforeunload` Event**
- Prevent users from leaving the page or navigating away using the `beforeunload` event.

### 🧑‍💻 **Example**
```javascript
window.addEventListener("beforeunload", function(event) {
  event.preventDefault();
  event.returnValue = "Are you sure you want to leave?";
});
```
🔎 **Explanation:**  
- It triggers a browser dialog asking for confirmation before redirecting.

---

## ✅ **5. Disable `window.location` Redirection**
- If redirection is happening using `window.location.href`, you can stop it.

### 🧑‍💻 **Example**
```javascript
Object.defineProperty(window, 'location', {
  configurable: false,
  writable: false
});
console.log("Redirection blocked by disabling window.location.");
```
🔎 **Explanation:**  
- This prevents any changes to `window.location`.

---

## ✅ **6. Prevent Redirection Using Event Listeners**
- If redirection is initiated by JavaScript (`window.location.href` or `window.open()`), you can stop it using `EventListener`.

### 🧑‍💻 **Example**
```javascript
window.addEventListener('click', function(event) {
  if (event.target.tagName === 'A') {
    event.preventDefault();
    console.log('Redirection blocked for link:', event.target.href);
  }
});
```
🔎 **Explanation:**  
- Blocks all anchor tag redirections by checking the `tagName`.

---

## ✅ **7. Using `history.pushState` to Prevent Unwanted Redirection**
- You can manipulate browser history without redirecting using `history.pushState()`.

### 🧑‍💻 **Example**
```javascript
history.pushState({}, '', '/new-url');
console.log("URL changed without redirection.");
```
🔎 **Explanation:**  
- This changes the URL without refreshing or navigating to a new page.

---

## ✅ **8. Detect and Prevent Redirection Using Mutation Observer**
- If malicious scripts attempt to change `window.location`, you can detect it using `MutationObserver`.

### 🧑‍💻 **Example**
```javascript
const observer = new MutationObserver(() => {
  if (window.location.href !== 'https://example.com') {
    console.log('Redirection detected! Blocking...');
    window.location.href = 'https://example.com';
  }
});

observer.observe(document, { childList: true, subtree: true });
```
🔎 **Explanation:**  
- This observes any attempt to modify the URL and prevents it.

---

## 🚀 **Conclusion**
- ✅ **Prevent Form Redirection** → Use `event.preventDefault()`.
- ✅ **Prevent Link Redirection** → Use `preventDefault()` on `<a>` tags.
- ✅ **Stop Ongoing Redirection** → Use `window.stop()`.
- ✅ **Prevent User Navigation** → Use `beforeunload` event.
- ✅ **Block URL Changes** → Disable `window.location`.
- ✅ **Prevent URL Changes Without Reloading** → Use `history.pushState()`.
- ✅ **Detect and Block Malicious Redirects** → Use `MutationObserver`.

Would you like a deeper explanation of any particular method or further examples? 😊


---
---


Great question! Let's clear this up:

### 🔹 JavaScript vs. ECMAScript (ES6)

| Feature | JavaScript | ECMAScript (ES6) |
|--------|------------|------------------|
| **Definition** | JavaScript is a **scripting language** used for web development. | ECMAScript (often abbreviated as **ES**) is the **standard/specification** that JavaScript follows. |
| **Purpose** | JavaScript is the actual language that browsers run. | ECMAScript defines how JavaScript should behave. |
| **Role** | It is the **implementation** of the ECMAScript specification. | It is the **blueprint or standard** that guides how JavaScript should be implemented. |
| **Examples** | `console.log("Hello World")`, `var`, `function`, etc. | New features introduced in **ES6** like `let`, `const`, arrow functions (`=>`), classes, promises, etc. |
| **Versioning** | JavaScript does not have "versions" in the same way. | ECMAScript has versions: ES5 (2009), ES6 (2015), ES7 (2016), etc. |
| **Popular Version** | JavaScript today typically means using **ES6+** (modern ECMAScript versions). | **ES6** (ECMAScript 2015) introduced major updates to the language. |

### 📌 In Short:
- **JavaScript** is the programming language.
- **ECMAScript** (like ES6) is the standard that defines how the language should work.

So when people say "modern JavaScript", they often mean JavaScript that uses **ES6 or later** features.

Let me know if you want a list of ES6 features or differences between ES5 and ES6!


---
----

Absolutely! These two are **commonly used in event handling in JavaScript**, especially when dealing with forms, buttons, or nested elements. Let's break it down simply:

---

## ✅ 1. `preventDefault()`

### 🔹 **Definition:**
Stops the **default action** that the browser would normally take on an event.

### 🔹 **Functionality:**
- Prevents things like:
  - Submitting a form.
  - Following a link.
  - Opening a context menu on right-click.
  
### 🔸 **Example:**
```javascript
document.querySelector("form").addEventListener("submit", function(e) {
  e.preventDefault(); // Prevents page from reloading
  console.log("Form submission blocked.");
});
```

---

## ✅ 2. `stopPropagation()`

### 🔹 **Definition:**
Stops the **event from bubbling up** to parent elements.

### 🔹 **Functionality:**
- Prevents the event from propagating (bubbling) up the DOM tree.
- Useful when you don’t want parent handlers to be notified of the event.

### 🔸 **Example:**
```javascript
document.querySelector(".child").addEventListener("click", function(e) {
  e.stopPropagation(); // Stops the event from reaching .parent
  console.log("Child clicked.");
});

document.querySelector(".parent").addEventListener("click", function() {
  console.log("Parent clicked.");
});
```

If you click on `.child`, only `"Child clicked."` logs, not `"Parent clicked."`.

---

## 🔄 Difference Between `preventDefault()` and `stopPropagation()`

| Feature | `preventDefault()` | `stopPropagation()` |
|--------|--------------------|---------------------|
| **Purpose** | Stops the browser’s **default behavior** | Stops the event from **bubbling to parent elements** |
| **Use Case** | Prevent link navigation, form submission, etc. | Stop parent event listeners from firing |
| **Does it affect bubbling?** | ❌ No | ✅ Yes |
| **Does it affect default action?** | ✅ Yes | ❌ No |

---

### ✅ Bonus: Can You Use Both?

Yes! Sometimes you need **both**:

```javascript
element.addEventListener("click", function(e) {
  e.preventDefault();    // Stop browser default behavior
  e.stopPropagation();   // Stop event from bubbling
});
```

---

Let me know if you want visual examples or DOM structure to better understand bubbling and default behaviors!

----

Let's break it down clearly:

In **JavaScript Execution Context**, there are mainly two types of contexts created:

### 1. **Global Execution Context (GEC)**

- It is **created by default** when the JavaScript code starts running.
- It **represents the global environment** (like the `window` object in browsers or the `global` object in Node.js).
- All top-level (not inside any function or block) variables and functions are **part of the global context**.
- **Only one** Global Execution Context is ever created.
  
**Example:**
```javascript
var name = "Arpan";

function greet() {
  console.log("Hello " + name);
}
```
- When this code runs, first, a **Global Execution Context** is created:
  - `name` is stored in global memory.
  - `greet` is stored as a function in global memory.

---

### 2. **Script Execution Context**

In modern JavaScript, especially following the **ECMAScript** specification, there is a term called **"Script Execution Context"** (sometimes called a **Script Record**).

- When **a `<script>` file** (or a module) is loaded, **a new Script Execution Context** is created.
- It **wraps the running of that specific script** (not the whole app).
- Still, this **script context runs inside the Global Context**.
- In simple cases (non-module scripts), **global context and script context behave the same**.
- If you are using **modules** (`<script type="module">`), things are a little different — modules have their **own separate scope** (Module Context).

**Example (Basic script):**
```html
<script>
  var age = 22;
  console.log(age);
</script>
```
- When this script runs, the **Script Execution Context** is created.
- It **accesses the Global Execution Context** to store `age`.

**Example (Module script):**
```html
<script type="module">
  let age = 22;
  console.log(age);
</script>
```
- In this case, the code is running inside a **Module Context** — **not inside the global scope** directly. (`let age` won't become a property of `window`.)

---

### **Summary Table**

| Context Type           | When It Is Created                             | Scope | Variables become global? |
|-------------------------|------------------------------------------------|-------|---------------------------|
| Global Execution Context| When page/script first loads                  | Global| Yes (var)                 |
| Script Execution Context| When a script file runs (normal or module)    | Local inside global | Yes (normal script), No (modules) |

---

### 🔥 Short and Practical:
- **Global Context** = whole JavaScript environment.
- **Script Context** = the code running from a particular `<script>` tag or file.

---
Would you also like a quick **visual diagram** of how "global" and "script" contexts fit together when a page loads? 🚀  
(It's very helpful!)

----
Sure! Let’s understand **Global Execution Context** and **Script Execution Context** with a **real-world example** using **HTML** and **JavaScript**.

---

### 🛠 Real-world Example

#### **HTML File (index.html)**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Execution Context Example</title>
</head>
<body>
  
  <h1>Check the Console!</h1>

  <script>
    // This is an inline normal script
    var globalVar = "I'm Global!";

    function greet() {
      console.log(globalVar);
    }

    greet();
  </script>

  <script src="external.js"></script> <!-- This will load an external script -->

</body>
</html>
```

---

#### **external.js (External JavaScript file)**

```javascript
// This is a separate script file
console.log("External script running...");

var externalVar = "I'm from external script";

function sayHello() {
  console.log(externalVar);
}

sayHello();
```

---

### 📋 What Happens Behind the Scenes?

1. **Page loads** → Browser **creates Global Execution Context** (GEC).
   
   - `window` object is created.
   - Special keyword `this` points to `window` (in browsers).
   - Memory is allocated for all global variables and functions (`globalVar`, `greet`, etc).

2. **First Inline `<script>` Tag Executes**:
   
   - A **Script Execution Context** is created for the **inline script**.
   - It:
     - Allocates memory for `globalVar` and `greet` inside the GEC.
     - Runs the code:
       - Sets `globalVar = "I'm Global!"`.
       - Defines function `greet()`.
       - Calls `greet()`, which logs `"I'm Global!"` in the console.

3. **External `external.js` File Loads**:

   - Another **Script Execution Context** is created for the **external.js** script.
   - It:
     - Runs the code inside `external.js`.
     - Logs `"External script running..."` in the console.
     - Allocates memory for `externalVar` and `sayHello()` inside GEC.
     - Calls `sayHello()`, which logs `"I'm from external script"`.

---

### 🧠 Important Real-World Points:

| Aspect | Inline Script | External Script |
|:------|:--------------|:----------------|
| Execution Context | Creates a Script Execution Context | Creates a Script Execution Context |
| Memory Storage | Both store variables/functions in the Global Context (`window`) | Both store in Global Context (`window`) |
| Access | Variables like `globalVar` or `externalVar` are accessible globally via `window.globalVar`, `window.externalVar` | Same |

---
### 🔥 Final Understanding:
- **Global Execution Context (GEC)**: Created **once** when the page starts loading.
- **Script Execution Context**: Created **every time** a new `<script>` block (inline or external) runs.
- But **both inline and external scripts** still interact with the **Global Context** (unless using `<script type="module">`).

---

### ✅ Bonus Tip:
If you write:
```html
<script type="module">
  let moduleVar = "I'm private to module";
  console.log(window.moduleVar); // undefined
</script>
```
Then `moduleVar` **won't be attached to `window`**, because **modules have their own private scope**.

---