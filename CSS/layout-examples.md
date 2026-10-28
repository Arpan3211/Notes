# Layout techniques: examples

## **1. Float Layout - Text Wrap Example**

**Float** is typically used to wrap text around images.

```html
<img src="https://via.placeholder.com/150" alt="Placeholder" class="float-img">
<p>This text will wrap around the image using the float property. Floats are useful for simple layouts like magazine-style layouts where text wraps around an image.</p>
```

```css
.float-img {
  float: left;
  margin-right: 20px;
}
```

### **Diagram Representation**
```
--------------------------------------------------
|             This text wraps around the image. |
|             Floats are useful for simple      |
|             layouts like magazines.           |
--------------------------------------------------
```
- `` → Represents the image  
- The text wraps around the floated image.

---

## **2. Position Layout - Absolute and Relative**

**Positioning** controls the placement of elements using `static`, `relative`, `absolute`, `fixed`, or `sticky`.

```html
<div class="relative-parent">
  <div class="absolute-child">Absolute Box</div>
</div>
```

```css
.relative-parent {
  position: relative;
  width: 300px;
  height: 300px;
  background-color: lightblue;
}
.absolute-child {
  position: absolute;
  top: 50px;
  left: 50px;
  width: 150px;
  height: 150px;
  background-color: coral;
}
```

### **Diagram Representation**
```
--------------------------------
|         Relative Parent      |
|                               |
|       -------------------    |
|       | Absolute Box     |    |
|       -------------------    |
|                               |
--------------------------------
```
- The **absolute box** moves **50px** from the top and left, using the nearest positioned ancestor.

---

## **3. Display Property**

**Display** controls how elements are shown on the screen.

```html
<p>I am a block element</p>
<span>I am inline</span>
<span>Me too!</span>
```

```css
span {
  display: inline-block;
  width: 120px;
  height: 50px;
  background-color: lightgreen;
  margin-right: 10px;
}
```

### **Diagram Representation**
```
--------------------------------------------
| I am a block element                     |
--------------------------------------------
| I am inline  | Me too!                    |
--------------------------------------------
```
- **Block** → Takes the full width.
- **Inline** → Stays inline without breaking the line.
- **Inline-Block** → Acts like inline but allows height and width adjustments.

---

## **4. Flexbox Layout**

**Flexbox** is ideal for aligning items horizontally or vertically.

```html
<div class="flex-container">
  <div class="flex-item">1</div>
  <div class="flex-item">2</div>
  <div class="flex-item">3</div>
</div>
```

```css
.flex-container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 150px;
  background-color: lightblue;
}
.flex-item {
  width: 80px;
  height: 80px;
  background-color: coral;
}
```

### **Diagram Representation**
```
--------------------------------
|                        |
--------------------------------
```
- `` → Represents flex items
- Items are spaced evenly using `justify-content: space-around`.

---

## **5. CSS Grid Layout**

**CSS Grid** provides a two-dimensional layout.

```html
<div class="grid-container">
  <div class="grid-item">1</div>
  <div class="grid-item">2</div>
  <div class="grid-item">3</div>
  <div class="grid-item">4</div>
</div>
```

```css
.grid-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
}
.grid-item {
  background-color: lightcoral;
  height: 100px;
}
```

### **Diagram Representation**
```
-----------------------
|        |        |
-----------------------
|        |        |
-----------------------
```
- `` → Represents grid items
- The grid is in **2 columns** using `grid-template-columns: repeat(2, 1fr)`.

---

## **Summary Table with Visual Representation**

| Layout      | Use Case                 | Visual Representation                            |
|--------------|--------------------------|--------------------------------------------------|
| **Float** | Wrapping text around images | ![Float Layout](https://via.placeholder.com/150?text=Float) + Text |
| **Position** | Layering, tooltips, or modals | Box over box using `absolute` and `relative`  |
| **Display** | Adjusting element flow | Block, inline, inline-block for flexible UI    |
| **Flexbox** | One-dimensional layout | Row or Column with items aligned efficiently   |
| **Grid** | Two-dimensional layout | Rows and Columns with complex designs           |

---

## **Final Tips**
-  **Use Flexbox** for simpler, single-axis layouts (like navbars or cards).
-  **Use Grid** for complex layouts requiring rows and columns (like dashboards).
-  **Use Position** for elements that need layering or overlays (like modals).
-  **Use Float** only for text wrapping or legacy layouts.
-  **Use Display** to control how elements appear on the screen.

Let me know if you'd like further examples or hands-on practice! 
