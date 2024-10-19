### MAP

```js
Array.prototype.myMap = function (callback) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    let value = callback(this[i], i, this);
    result.push(value);
  }
  return result;
};

let arr = [2, 4, 6, 2, 3, 4, 1, 4, 5, 3];

let newArr = arr.myMap((arr) => {
  return arr * arr;
});

console.log(newArr);
```

---

---

### FILTER

```JS

Array.prototype.myFilter = function (callback, thisArg) {

    if (this === undefined || this === null) {
        throw error("Cannot read the property of numm or undefined");
    }

    let array = Object(this);
    let len = array.length >>> 0;
    let result = [];

    for (let i = 0; i < len; i++) {
        if (i in array) {
            if (callback.call(thisArg, this[i], i, array)) {
                result.push(this[i]);
            }
        }
    }
    return result;
}

let arr = [2, 4, 6, 2, 3, 4, 1, 4, 5, 3]

let newArr = arr.myFilter((arr) => {
    return arr > 2;
})

console.log(newArr)
```

### REDUCE

```js
Array.prototype.myReduce = function (callback, initialvalue) {
  if (this === undefined || this === null) {
    throw error("Cannot read the property of numm or undefined");
  }

  if (typeof callback !== "function") {
    throw new TypeError(callback + " is not a function");
  }

  let accumulator = initialvalue !== undefined ? initialvalue : this[0];

  for (let i = 1; i < this.length; i++) {
    accumulator = callback(accumulator, this[i], i, this);
  }
  return accumulator;
};

let arr = [2, 4, 6, 2, 3, 4, 1, 4, 5, 3];

let newArr = arr.myReduce((acc, crr) => {
  return acc + crr;
});

console.log(newArr);
```
