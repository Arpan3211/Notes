# Template literals

> Strings in backticks: they allow `${}` interpolation, multi-line text, nesting and tagged templates.

## Interpolation

```js
const age = 7;
"Tommy is " + age + " years old.";   // concatenation
`Tommy is ${age} years old.`;        // interpolation
`2 + 2 = ${2 + 2}`;                  // any expression works
```

## Multi-line

```js
const html = `
  <p>line 1</p>
  <p>line 2</p>
`;   // line breaks are kept
```

## Nested templates

A template inside another template's `${}`, used to build HTML from smaller pieces.

```js
const article = (title, body) => `<article><h2>${title}</h2><p>${body}</p></article>`;
const page = (articles) => `<body>${articles}</body>`;

page(article("One", "Text 1") + article("Two", "Text 2"));
```

## Raw strings: `String.raw`

A tag that keeps backslashes as plain characters (no escape processing).

```js
`a\nb`;             // two lines
String.raw`a\nb`;   // 'a\nb' (the characters \ and n)
```

Use it for Windows paths and regex source.

## Remember

- Backticks (`` ` ``), not quotes.
- A tagged template is a function call: ``tag`text ${x}` ``. `String.raw` is a built-in tag.
