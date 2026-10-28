# map, forEach, filter and reduce

> The four most-used array iteration methods. `map`, `filter` and `reduce` return a value, `forEach` returns `undefined`.

| Method | Purpose | Returns | Length of result | Chainable |
|---|---|---|---|---|
| `map` | transform each element | new array | same as input | yes |
| `filter` | keep elements that pass a test | new array | same or shorter | yes |
| `reduce` | combine all elements into one value | any single value | n/a | depends |
| `forEach` | run a side effect for each element | `undefined` | n/a | no |

None of them changes the original array (unless your callback does).

```js
const nums = [1, 2, 3, 4, 5];

nums.map((n) => n * n);                        // [1, 4, 9, 16, 25]
nums.filter((n) => n % 2 === 0);               // [2, 4]
nums.reduce((acc, n) => acc + n, 0);           // 15  (0 is the start value)
nums.forEach((n) => console.log(n));           // prints, returns undefined

nums.filter((n) => n % 2 === 0).map((n) => n * n);   // [4, 16]  (chaining)
```

## Callback arguments

All receive `(element, index, array)`. `reduce` receives `(accumulator, element, index, array)`.

## More reduce

```js
const count = ["a", "b", "a"].reduce((acc, ch) => {
  acc[ch] = (acc[ch] || 0) + 1;
  return acc;
}, {});                              // { a: 2, b: 1 }
```

Always give `reduce` an initial value. Without it, an empty array throws a `TypeError`.

## Differences to remember

- `map` vs `forEach`: use `map` when you need the new array, `forEach` when you only want side effects.
- All of them skip empty slots in sparse arrays (`[1, , 3]`). `map` keeps the hole in the result.
- `forEach` cannot be stopped with `break` and does not wait for `async` callbacks. Use `for...of`, `some` or `every` to exit early.
- Mutating the array inside `forEach` or `map` works but is bad practice.

## Remember

- Interview: write your own versions (see [array polyfills](Polyfills/array-polyfills.md)).
- Other useful methods: `find`, `some`, `every`, `flat`, `flatMap`, `includes`.
