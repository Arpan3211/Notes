
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