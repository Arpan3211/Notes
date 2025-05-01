Here’s an **end-to-end DOM Manipulation notes document** that covers everything from the basics to advanced operations using JavaScript.

---

# 📘 DOM Manipulation in JavaScript (End-to-End Notes)

---

## 📌 1. What is the DOM?

**DOM (Document Object Model)** is a programming interface for web documents. It represents the structure of an HTML page as a tree of objects.

```html
<!-- HTML -->
<html>
  <body>
    <p id="demo">Hello World</p>
  </body>
</html>
```

```js
// JS
document.getElementById("demo").innerText; // Accessing text
```

---

## 📌 2. Accessing DOM Elements

### ✅ By ID
```js
document.getElementById("id");
```

### ✅ By Class
```js
document.getElementsByClassName("className");
```

### ✅ By Tag
```js
document.getElementsByTagName("tagName");
```

### ✅ Query Selectors
```js
document.querySelector("selector");         // Returns first match
document.querySelectorAll("selector");      // Returns NodeList
```

---

## 📌 3. Changing Content

### 🔁 Inner Text & HTML
```js
element.innerText = "New Text";
element.innerHTML = "<b>Bold Text</b>";
```

### 🧠 Text Content
```js
element.textContent; // More consistent across browsers
```

---

## 📌 4. Changing Attributes

```js
element.setAttribute("href", "https://google.com");
element.getAttribute("href");
element.removeAttribute("href");
```

---

## 📌 5. Working with Classes

```js
element.classList.add("new-class");
element.classList.remove("old-class");
element.classList.toggle("dark-theme");
element.classList.contains("active"); // true or false
```

---

## 📌 6. Styling Elements

```js
element.style.color = "red";
element.style.fontSize = "20px";
element.style.backgroundColor = "#f0f0f0";
```

---

## 📌 7. Creating & Appending Elements

```js
let div = document.createElement("div");
div.innerText = "Hello";
document.body.appendChild(div);
```

### ⛏ Insert Before
```js
parent.insertBefore(newNode, referenceNode);
```

---

## 📌 8. Removing Elements

```js
element.remove(); // Modern way
```

Or the old way:

```js
element.parentNode.removeChild(element);
```

---

## 📌 9. Event Handling

### ✅ Basic Events
```js
element.onclick = function() {
  alert("Clicked!");
};
```

### ✅ Using addEventListener
```js
element.addEventListener("click", function() {
  alert("Clicked!");
});
```

### ✅ Removing Event Listeners
```js
function handler() {}
element.addEventListener("click", handler);
element.removeEventListener("click", handler);
```

---

## 📌 10. Common Events

| Event | Description |
|-------|-------------|
| `click` | Mouse click |
| `mouseover` / `mouseout` | Hovering |
| `keydown` / `keyup` | Keyboard events |
| `submit` | Form submission |
| `input` | Real-time input |
| `change` | Change in input field |

---

## 📌 11. Event Object

```js
element.addEventListener("click", function(event) {
  console.log(event.target); // The element clicked
});
```

---

## 📌 12. Form Handling

```js
form.addEventListener("submit", function(e) {
  e.preventDefault(); // Prevent page reload
  const name = document.querySelector("#name").value;
  console.log(name);
});
```

---

## 📌 13. Traversing the DOM

```js
element.parentElement;
element.children;
element.firstElementChild;
element.lastElementChild;
element.nextElementSibling;
element.previousElementSibling;
```

---

## 📌 14. Performance Tips

- Cache DOM selectors
- Use `documentFragment` for bulk updates
- Minimize direct DOM manipulation
- Use `requestAnimationFrame()` for animations

---

## 📌 15. Useful Shortcuts

```js
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);
```

---

## 📌 16. Modern DOM APIs

- `element.closest(selector)` → Finds closest ancestor
- `element.matches(selector)` → Checks if it matches
- `element.dataset` → Access `data-*` attributes

---

## 📌 17. Sample Mini Project Snippet

```html
<input id="input" type="text" />
<button id="btn">Add</button>
<ul id="list"></ul>
```

```js
document.getElementById("btn").addEventListener("click", () => {
  const val = document.getElementById("input").value;
  const li = document.createElement("li");
  li.innerText = val;
  document.getElementById("list").appendChild(li);
});
```

---

Would you like me to export this as a **PDF or Markdown file** for easier offline reading?