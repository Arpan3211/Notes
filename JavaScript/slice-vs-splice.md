# slice vs splice

> `slice` copies part of an array. `splice` changes the original array (remove, replace or insert).

| | `slice(start, end)` | `splice(start, deleteCount, ...items)` |
|---|---|---|
| Changes the original array | **no** | **yes** |
| Returns | new array of the extracted items | array of the removed items |
| `end` / `deleteCount` | `end` index is **not** included | number of items to remove |
| Use for | copy or extract a portion | add, remove or replace items |

```js
const fruits = ["apple", "banana", "cherry", "date"];

fruits.slice(1, 3);     // ["banana", "cherry"]
fruits;                 // unchanged

const removed = fruits.splice(1, 2, "orange", "grape");
removed;                // ["banana", "cherry"]
fruits;                 // ["apple", "orange", "grape", "date"]

fruits.splice(1, 0, "kiwi");   // insert at index 1, delete nothing
fruits.splice(-1);             // remove the last item
```

## Handy forms

```js
arr.slice();        // shallow copy
arr.slice(-2);      // last two items
arr.slice(2);       // from index 2 to the end
```

## Remember

- Negative indexes count from the end.
- Do not confuse with `split` (string to array).
- To remove without mutating: `arr.filter((_, i) => i !== index)` or `arr.toSpliced(...)` (ES2023).
