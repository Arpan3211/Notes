# Loops

> Ways to repeat code in JavaScript.

| Loop | Use it for |
|---|---|
| `for` | known number of iterations |
| `while` | repeat while a condition is true |
| `do...while` | run at least once, then check the condition |
| `for...of` | values of an iterable (array, string, Set, Map) |
| `for...in` | keys (property names) of an object |
| `for await...of` | values of async iterables |
| `forEach()` | array elements, no `break`, returns `undefined` |

```js
for (let i = 0; i < 5; i++) { /* runs 5 times */ }

let n = 0;
while (n < 5) n++;

do { n--; } while (n > 0);   // body runs once even if the condition is false

for (const fruit of ["apple", "banana"]) console.log(fruit);

for (const key in { name: "John", age: 30 }) console.log(key);

async function run() {
  for await (const result of asyncIterable) console.log(result);
}

[1, 2, 3].forEach((n) => console.log(n));
```

## Remember

- `for...of` gives **values**, `for...in` gives **keys** (avoid `for...in` on arrays).
- `break` and `continue` work in `for`, `while` and `for...of`, but not in `forEach`.
- `forEach` does not wait for `async` callbacks. Use `for...of` with `await` instead.
