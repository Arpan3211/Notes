# Regular expressions

> A pattern for searching, matching and replacing text in strings.

## Create

```js
const re1 = /\w+@\w+\.\w+/g;           // literal
const re2 = new RegExp("\\w+@\\w+", "g"); // from a string (escape backslashes)
```

## Common syntax

| Pattern | Matches |
|---|---|
| `.` | any character except newline |
| `\d` `\w` `\s` | digit, word character, whitespace |
| `\D` `\W` `\S` | the opposite of each |
| `^` `$` | start / end of the string |
| `[abc]` `[^abc]` `[a-z]` | one of / none of / a range |
| `*` `+` `?` | 0 or more / 1 or more / 0 or 1 |
| `{2,4}` | 2 to 4 times |
| `(...)` `\|` | group / or |

## Flags

`g` all matches, `i` ignore case, `m` multi-line, `s` dot matches newline, `u` unicode.

## Methods

```js
const text = "Mail john@example.com or mary@example.org.";
const re = /\w+@\w+\.\w+/g;

re.test(text);             // true
text.match(re);            // ["john@example.com", "mary@example.org"]  (with g)
text.replace(re, "***");   // replaces every match
[...text.matchAll(re)];    // matches with groups and index
```

## Remember

- Without `g`, `match` returns only the first match (with its groups).
- A regex with `g` keeps `lastIndex` between `test()` calls, which can give surprising results.
- Escape special characters with `\`: `\.` `\(`.
