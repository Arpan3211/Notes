# CSS selectors

https://www.javatpoint.com/css-interview-questions

https://www.interviewbit.com/css-interview-questions/

https://www.interviewbit.com/css-cheat-sheet/#learn-css

https://github.com/learning-zone/css-basics

https://gist.github.com/marko-jankovic/22ad55fae467e72d0312

https://github.com/vasanthk/css-refresher-notes


https://mdforhadsarker.medium.com/html-css-interview-questions-and-answers-2025-for-2-5-years-experiences-09680ac38e35




Here’s a comprehensive list of all CSS selectors:

---

## **1. Universal Selector**
- `*` → Selects all elements.
```css
* {
  margin: 0;
  padding: 0;
}
```

---

## **2. Type (Element) Selector**
- Selects elements by tag name.
```css
h1, p, div {
  color: blue;
}
```

---

## **3. Class Selector**
- Selects elements with a specific class.
```css
.card {
  border: 1px solid black;
}
```

---

## **4. ID Selector**
- Selects elements by their ID.
```css
#header {
  background-color: gray;
}
```

---

## **5. Attribute Selector**
- Selects elements based on their attributes.
```css
/* Exact match */
input[type="text"] {
  border: 1px solid green;
}

/* Attribute exists */
a[target] {
  color: red;
}

/* Attribute with value containing substring */
input[placeholder*="name"] {
  background-color: lightyellow;
}

/* Attribute value starts with */
a[href^="https"] {
  color: blue;
}

/* Attribute value ends with */
img[src$=".jpg"] {
  border-radius: 10px;
}
```

---

## **6. Group Selector**
- Selects multiple elements.
```css
h1, h2, h3 {
  font-family: Arial, sans-serif;
}
```

---

## **7. Combinator Selectors**

### **a. Descendant Selector (Space)**
- Selects elements that are descendants of a specified element.
```css
div p {
  color: purple;
}
```

### **b. Child Selector (`>`)** 
- Selects direct child elements.  
```css
ul > li {
  list-style-type: none;
}
```

### **c. Adjacent Sibling Selector (`+`)** 
- Selects the next immediate sibling element.  
```css
h1 + p {
  font-size: 14px;
}
```

### **d. General Sibling Selector (`~`)** 
- Selects all siblings that follow a specified element.  
```css
h1 ~ p {
  color: gray;
}
```

---

## **8. Pseudo-Class Selectors**

- Select elements based on their state or position.

```css
/* First and last child */
p:first-child {
  color: red;
}
p:last-child {
  color: blue;
}

/* nth child */
li:nth-child(2) {
  background-color: lightgray;
}

/* Odd or Even child */
tr:nth-child(odd) {
  background-color: #f2f2f2;
}
tr:nth-child(even) {
  background-color: #e2e2e2;
}

/* Hover state */
button:hover {
  background-color: yellow;
}

/* Focus state */
input:focus {
  border: 2px solid blue;
}

/* Checked state */
input[type="checkbox"]:checked {
  background-color: green;
}
```

---

## **9. Pseudo-Element Selectors**

- Select specific parts of elements.

```css
/* First letter */
p::first-letter {
  font-size: 2rem;
}

/* First line */
p::first-line {
  color: blue;
}

/* Before and After content */
h1::before {
  content: " ";
}
h1::after {
  content: " ";
}
```

---

## **10. Negation Selector**
- Selects elements that **do not** match a specified selector.
```css
p:not(.highlight) {
  color: gray;
}
```

---

## **11. CSS Variables**
- Define reusable variables with `--variable-name`.
```css
:root {
  --primary-color: #007bff;
}

button {
  background-color: var(--primary-color);
}
```

---

This covers all the essential CSS selectors! Let me know if you'd like further examples or explanations for any specific selector. 
