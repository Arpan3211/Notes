# Explain nested templates in js


**Explanation**:

- when we are using one string templates in another string templates. so this exprasion in known as a nested templates.

```jsx
// Article Template
const articleTemplate = (title, content) => `
  <article>
    <h2>${title}</h2>
    <p>${content}</p>
  </article>
`;

// Page Template
const pageTemplate = (articles) => `
  <html>
  <head>
    <title>My Blog</title>
  </head>
  <body>
    ${articles}
  </body>
  </html>
`;

// Creating Articles
const article1 = articleTemplate(
  "Article 1",
  "This is the content of Article 1."
);
const article2 = articleTemplate(
  "Article 2",
  "This is the content of Article 2."
);

// Assembling the Page
const articles = article1 + article2;
const page = pageTemplate(articles);

console.log(page);
```
