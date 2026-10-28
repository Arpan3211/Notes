# ?? (nullish coalescing) and || (logical OR) are used for fallback/default values, but they behave differently when dealing with falsy values


---

## Summary of Differences

| Operator | Description        | Fallback when value is...  | Example                                                       |                                                        |           |     |                             |     |                         |
| -------- | ------------------ | -------------------------- | ------------------------------------------------------------- | ------------------------------------------------------ | --------- | --- | --------------------------- | --- | ----------------------- |
| \`       |                    | \`                         | Logical OR                                                    | Falsy (`false`, `0`, `''`, `null`, `undefined`, `NaN`) | \`'hello' |     | 'default'`→`'hello'`<br>`'' |     | 'default'`→`'default'\` |
| `??`     | Nullish coalescing | Only `null` or `undefined` | `'' ?? 'default'` → `''`<br>`null ?? 'default'` → `'default'` |                                                        |           |     |                             |     |                         |

---

## Key Concept

- `||` treats **all falsy values** as needing a fallback.
- `??` only treats **`null` and `undefined`** as needing a fallback.

---

## Example to Demonstrate the Difference

```js
let title1 = "" || "Untitled";
console.log(title1); // 'Untitled'  because '' is falsy

let title2 = "" ?? "Untitled";
console.log(title2); // ''  because '' is NOT null/undefined
```

---

## Another Comparison

```js
console.log(false || "fallback"); // 'fallback' 
console.log(false ?? "fallback"); // false 

console.log(0 || 10); // 10 
console.log(0 ?? 10); // 0 
```

---

## When to Use What?

| Situation                                                                                      | Use  |     |     |
| ---------------------------------------------------------------------------------------------- | ---- | --- | --- |
| You want to use a fallback for `null` or `undefined` only (and allow `false`, `0`, `''`, etc.) | `??` |     |     |
| You want to fallback for **any falsy value** (like `0`, `''`, `false`, etc.)                   | \`   |     | \`  |

---

## Real-world Example

```js
const user = {
  name: "",
  age: 0,
  isActive: false,
  nickname: null,
};

console.log(user.name || "Anonymous"); // 'Anonymous'  (bad default)
console.log(user.name ?? "Anonymous"); // ''  (respects empty string)

console.log(user.age || 18); // 18  (bad default)
console.log(user.age ?? 18); // 0 

console.log(user.nickname ?? "Guest"); // 'Guest' 
```

---

## Quick Rule to Remember:

> Use `??` if you want to **preserve falsy but meaningful values** (`false`, `0`, `''`).
> Use `||` if you want to replace **any falsy value**.

Let me know if you want an interactive playground-like example or want to go deeper into short-circuit evaluation.
