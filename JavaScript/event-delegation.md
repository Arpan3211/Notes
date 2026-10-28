# How dose event delegation in Javascript


**Explanation**:

- **Event delegation** is a concept in JavaScript where you attach a single event listener to a common ancestor element of multiple child elements rather than attaching individual event listeners to each child element. This allows you to manage events more efficiently, reduce memory usage, and simplify your code.

```jsx
<ul id="categories">
  <li id="laptops">Laptops</li>
  <li id="mobiles">Mobiles</li>
  <li id="shoes">Shoes</li>
  <li id="clothes">Clothes</li>
</ul>

<div id="output">Selected Category: None</div>

<script>
  const categoriesList = document.getElementById("categories");
  const output = document.getElementById("output");

  categoriesList.addEventListener("click", function(event) {
    if (event.target.tagName === "LI") {
      const selectedCategory = event.target.textContent;
      output.textContent = "Selected Category: " + selectedCategory;

      // You can use the unique IDs here if needed
      const categoryId = event.target.id;
      // Example: Alert the category's ID
      console.log("Category ID: " + categoryId);
    }
  });
</script>
```
