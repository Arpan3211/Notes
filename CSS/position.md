# Difference between position: static, relative, absolute, and fixed


Understanding the difference between `position: static`, `relative`, `absolute`, and `fixed` in CSS is crucial for **mastering layout control** in frontend development. Here's a clear breakdown with visuals in mind:

---

## 1. `position: static` (Default)

### Meaning:

- This is the **default** position of every element.
- The element follows the **normal document flow**.
- `top`, `right`, `bottom`, `left` have **no effect**.

### Example:

```css
div {
  position: static;
  top: 10px; /*  Ignored */
}
```

---

## 2. `position: relative`

### Meaning:

- The element **remains in the document flow** (i.e., it takes up space).
- But you can **offset** it using `top`, `left`, `right`, `bottom` **relative to its original position**.
- It becomes the **positioning context** for absolutely positioned child elements.

### Example:

```css
div {
  position: relative;
  top: 20px;
  left: 30px;
}
```

This will **shift the element visually**, but the original space it occupied is **not removed**.

---

## 3. `position: absolute`

### Meaning:

- The element is **removed from the normal flow**.
- It is positioned **relative to the nearest positioned ancestor** (i.e., ancestor with `relative`, `absolute`, or `fixed`).
- If no such ancestor exists, it will be positioned **relative to `<html>` (the document)**.

### Example:

```css
.parent {
  position: relative;
}
.child {
  position: absolute;
  top: 10px;
  left: 20px;
}
```

The `.child` will be placed **10px from the top and 20px from the left of `.parent`**, not the page.

---

## 4. `position: fixed`

### Meaning:

- Like `absolute`, it is **removed from normal flow**.
- But it is always positioned **relative to the browser viewport**.
- It **stays fixed** in place, even when scrolling.

### Example:

```css
div {
  position: fixed;
  bottom: 10px;
  right: 10px;
}
```

This div will **stick to the bottom-right corner of the screen**, no matter how much the user scrolls.

---

## Comparison Table

| Property   | In Document Flow? | Positioned Relative To      | Scrolls with Page?     | Common Use Case                           |
| ---------- | ----------------- | --------------------------- | ---------------------- | ----------------------------------------- |
| `static`   | Yes            | N/A                         | Yes                 | Default layout                            |
| `relative` | Yes            | Itself (original pos)       | Yes                 | Slight offset / anchor for absolute child |
| `absolute` | No             | Nearest positioned ancestor | Yes                 | Dropdowns, tooltips                       |
| `fixed`    | No             | Viewport                    | No (fixed in place) | Sticky header, floating action buttons    |

---

## Visual Analogy

Imagine:

- `static` = person standing in line — can't move freely.
- `relative` = person steps slightly to the side but still in line.
- `absolute` = person jumps out of line and stands exactly 2 feet from another person.
- `fixed` = person glued to the window — never moves even if others do.

---

## Want to try it out?

You can test all these with this minimal HTML/CSS setup in CodePen or local HTML:

```html
<div class="box static">Static</div>
<div class="box relative">Relative</div>
<div class="box absolute">Absolute</div>
<div class="box fixed">Fixed</div>
```

```css
.box {
  width: 100px;
  height: 100px;
  color: white;
  margin: 10px;
}
.static {
  background: gray;
}
.relative {
  position: relative;
  top: 20px;
  background: blue;
}
.absolute {
  position: absolute;
  top: 50px;
  left: 150px;
  background: red;
}
.fixed {
  position: fixed;
  bottom: 10px;
  right: 10px;
  background: green;
}
```

---

Let me know if you want an animated visual explanation or playground setup — I can also show you how `sticky` works (`position: sticky`) if you're curious!
