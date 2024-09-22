https://www.javatpoint.com/css-interview-questions

https://www.interviewbit.com/css-interview-questions/

https://www.interviewbit.com/css-cheat-sheet/#learn-css

https://github.com/learning-zone/css-basics

https://gist.github.com/marko-jankovic/22ad55fae467e72d0312

1. **What is CSS, and how is CSS different from CSS3?**

   > CSS (Cascading Style Sheets) is a style sheet language used for describing the presentation of a document written in HTML. It controls the layout, colors, fonts, and other aspects of how a web page is displayed. CSS3 is an updated version of CSS that introduced new features, such as rounded corners, gradients, and animations. CSS3 is a part of CSS; it's not a separate language. CSS3 builds upon the previous versions of CSS and adds new capabilities.

2. **In how many ways can we add CSS in our HTML file?**

   > There are three ways to add CSS to an HTML file:

   - Inline CSS: Adding CSS directly to HTML elements using the `style` attribute.
     ```html
     <p style="color: red;">This is a red text.</p>
     ```
   - Internal CSS: Placing CSS within a `<style>` element in the HTML `<head>` section.
     ```html
     <head>
       <style>
         p {
           color: blue;
         }
       </style>
     </head>
     ```
   - External CSS: Linking to an external CSS file using the `<link>` element.
     ```html
     <head>
       <link rel="stylesheet" type="text/css" href="styles.css" />
     </head>
     ```

3. **Which type of CSS holds the highest priority?**

   > Inline CSS has the highest priority, followed by internal CSS, and then external CSS. Inline styles will override any conflicting styles defined in internal or external stylesheets.

4. **What is a CSS selector?**

   > A CSS selector is a pattern used to select and style HTML elements. Selectors target specific elements based on their element type, class, ID, attributes, and more. For example:

   ```css
   p {
     color: blue;
   }
   ```

5. **Difference between the class selector and ID selector.**

   - Class Selector: Classes can be used multiple times in a document, and multiple elements can share the same class. Select with a period (.) prefix.
   - ID Selector: IDs should be unique within a document and are used to select a single element. Select with a hash (#) prefix.

   Example:

   ```css
   .myClass {
     color: red;
   }

   #myID {
     color: blue;
   }
   ```

6. **If we have ID, class, and element, which one is more priority?**

   > The order of priority is Inline > ID > Class > Element. Inline styles have the highest priority.

7. **What is the CSS box model?**

   > The CSS box model is a fundamental concept that defines how elements on a web page are structured. It consists of content, padding, border, and margin. The total width of an element is the sum of these components.

8. **Difference between margin and padding.**
   - Margin is the space outside an element, creating distance between it and other elements.
   - Padding is the space inside an element, creating space between the element's content and its border.
9. **Explain the universal selector.**

   > The universal selector (\*) selects all elements on a page. It can be used to apply a style to all elements.

   Example:

   ```css
   * {
     margin: 0;
     padding: 0;
   }
   ```

10. **What is the box model in CSS?**

    > The box model is a model used to represent the layout of elements in CSS, including content, padding, border, and margin, as explained in question 7.

11. **What is VH/VW in CSS?**

    > VH (Viewport Height) and VW (Viewport Width) are CSS units that represent a percentage of the height and width of the viewport (the visible area of the browser window). For example, `50vh` is 50% of the viewport's height.

12. **What is "!important" in CSS?**

> `!important` is a CSS declaration that gives a style the highest priority. It's typically used to override other conflicting styles. Be cautious when using it, as it can make your styles harder to manage.

Example:

```css
p {
  color: blue !important;
}
```

1. **Difference between `display: none` and `visibility: hidden`.**
   - `display: none` completely removes an element from the document flow; it's not rendered or visible.
   - `visibility: hidden` hides the element, but it still takes up space in the document flow.
2. **How many properties are in CSS?**

   > CSS has hundreds of properties, and the number may vary with CSS versions and specifications. There are numerous properties for controlling layout, typography, colors, and more.

3. **Difference between absolute and relative position.**
   - Absolute positioning positions an element relative to its nearest positioned ancestor (or the initial containing block if none).
   - Relative positioning positions an element relative to its normal position in the document flow.
4. **Difference between block, inline, and inline-block display.**
   - `display: block` elements take up the full width of their parent container and stack vertically.
   - `display: inline` elements flow within the text, side by side.
   - `display: inline-block` elements are like inline elements but can have block-level properties.
5. **Define Z-index and how Z-index is related to positioning.**

   > `Z-index` is a CSS property used for controlling the stacking order of elements with position values other than `static`. A higher `z-index` value places an element on top of elements with lower values.

6. **What are pseudo-classes and pseudo-elements in CSS, and what are they used for?**

   > Pseudo-classes and pseudo-elements are used to select and style elements based on their state or position in the document. For example, `:hover` selects an element when the mouse hovers over it, while `::before` creates a pseudo-element before the content of an element.

7. **What does the CSS `box-sizing` property do?**

   > `box-sizing` controls how an element's total width and height are calculated. It can be set to `content-box` (default) or `border-box`. `border-box` includes padding and border in the width and height calculations.

Example:

```css
.box {
  box-sizing: border-box;
}
```

1. **What is the float property, and what does float do?**

   > The `float` property is used to make an element float to the left or right within its parent container. It's often used for creating multi-column layouts or text wrapping around images.

Example:

```css
img {
  float: left;
}
```

1. **What is CSS Flexbox?**

   > CSS Flexbox (Flexible Box Layout) is a layout model used for creating complex layouts with a more efficient and predictable way to distribute space and align items in a container, even when the size of items is unknown or

dynamic.

1. **What is a CSS grid?**

   > CSS Grid is a layout system that allows you to create grid-based layouts with rows and columns, making it easier to create complex, responsive layouts.

2. **What is the specificity rule in CSS?**

   > Specificity is a set of rules that determine which CSS styles are applied when multiple rules target the same element. It is calculated based on the number and type of selectors used in the CSS rule.

3. **Difference between EM and Rem.**
   - EM (Ems) are relative to the font size of the parent element.
   - REM (Root Em) are relative to the font size of the root element (usually the `<html>` element).
4. **Which one would you prefer among px, em, %, pt, and why?**

   > The choice of units depends on the specific use case:

   - `px` is fixed and suitable for elements with a consistent size.
   - `em` and `rem` are flexible and better for responsive design.
   - `%` is useful for relative sizing in responsive layouts.
   - `pt` is typically used for print styles.

5. **What is a media query, and why is it used?**

   > A media query is a CSS technique used to apply different styles based on the characteristics of the device or viewport, such as screen width, height, or orientation. It's crucial for creating responsive web designs that adapt to various devices.

Example:

```css
@media (max-width: 600px) {
  /* Styles for screens with a width of 600px or less */
}
```

1. **What are breakpoints for viewport-responsive devices?**

   > Breakpoints are specific screen widths at which the layout or design of a web page should change to adapt to different device sizes. They are defined using media queries and help create responsive designs for various devices like smartphones, tablets, and desktops.
