# Array polyfills: map, filter, reduce, forEach, flat

> A polyfill re-implements a built-in method. Interviews ask for these to test loops, `this` and edge cases. The code below is tested.

Named `myMap` etc. so it does not replace the real methods. To make a real polyfill, guard it: `if (!Array.prototype.map) { ... }` and use the original name.

## Rules every version follows

- `this` is the array. Loop with `for` and skip holes with `i in this`.
- Call the callback as `cb.call(thisArg, item, index, array)`.
- Do not mutate the array. Throw a `TypeError` if the callback is not a function (for `reduce`).

```js
Array.prototype.myMap = function (cb, thisArg) {
  const out = [];
  for (let i = 0; i < this.length; i++) {
    if (i in this) out[i] = cb.call(thisArg, this[i], i, this);
  }
  return out;
};

Array.prototype.myFilter = function (cb, thisArg) {
  const out = [];
  for (let i = 0; i < this.length; i++) {
    if (i in this && cb.call(thisArg, this[i], i, this)) out.push(this[i]);
  }
  return out;
};

Array.prototype.myForEach = function (cb, thisArg) {
  for (let i = 0; i < this.length; i++) {
    if (i in this) cb.call(thisArg, this[i], i, this);
  }
};

Array.prototype.myReduce = function (cb, init) {
  if (typeof cb !== "function") throw new TypeError(cb + " is not a function");
  let i = 0, acc = init;
  if (arguments.length < 2) {                       // no initial value: use the first item
    while (i < this.length && !(i in this)) i++;
    if (i >= this.length) throw new TypeError("Reduce of empty array with no initial value");
    acc = this[i++];
  }
  for (; i < this.length; i++) {
    if (i in this) acc = cb(acc, this[i], i, this);
  }
  return acc;
};

Array.prototype.myFlat = function (depth = 1) {
  const out = [];
  for (const v of this) {
    if (Array.isArray(v) && depth > 0) out.push(...v.myFlat(depth - 1));
    else out.push(v);
  }
  return out;
};
```

## Usage

```js
[1, 2, 3].myMap((x) => x * 2);                 // [2, 4, 6]
[1, 2, 3, 4].myFilter((x) => x % 2 === 0);     // [2, 4]
[1, 2, 3, 4].myReduce((a, b) => a + b);        // 10
[1, 2, 3, 4].myReduce((a, b) => a + b, 10);    // 20
[1, [2, [3, [4]]]].myFlat();                   // [1, 2, [3, [4]]]
[1, [2, [3, [4]]]].myFlat(Infinity);           // [1, 2, 3, 4]
```

## Remember

- Use `function`, not an arrow function, so `this` is the array.
- `reduce` without an initial value on an empty array must throw.
- `concat` flattens one level, so do not use it to build `flat` with a depth limit (push the items instead).
- Behaviour of the real methods: [map, forEach, filter, reduce](../map-foreach-filter-reduce.md).
