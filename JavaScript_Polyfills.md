[polyfill for map,filter,reducer](https://www.notion.so/polyfill-for-map-filter-reducer-a927ba83e93e401eb00a8fc617e9e252?pvs=21)

min,
max,
largest,
filterData,
sum,
anagrams
map,
forEach,
findIndex,
charAt

### 1. **Promise**

```javascript
if (typeof Promise === "undefined") {
  // Basic implementation of Promise
  (function (global) {
    function Promise(executor) {
      this._state = "pending";
      this._value = undefined;
      this._callbacks = [];

      const resolve = (value) => {
        if (this._state === "pending") {
          this._state = "fulfilled";
          this._value = value;
          this._callbacks.forEach((callback) => callback(value));
        }
      };

      const reject = (reason) => {
        if (this._state === "pending") {
          this._state = "rejected";
          this._value = reason;
          this._callbacks.forEach((callback) => callback(reason));
        }
      };

      executor(resolve, reject);
    }

    Promise.prototype.then = function (onFulfilled, onRejected) {
      return new Promise((resolve, reject) => {
        const handleCallback = () => {
          if (this._state === "fulfilled") {
            if (onFulfilled) {
              resolve(onFulfilled(this._value));
            } else {
              resolve(this._value);
            }
          } else if (this._state === "rejected") {
            if (onRejected) {
              reject(onRejected(this._value));
            } else {
              reject(this._value);
            }
          }
        };

        if (this._state === "pending") {
          this._callbacks.push(handleCallback);
        } else {
          handleCallback();
        }
      });
    };

    Promise.prototype.catch = function (onRejected) {
      return this.then(null, onRejected);
    };

    global.Promise = Promise;
  })(this);
}
```

### 2. **Promise.all**

```javascript
if (typeof Promise.all === "undefined") {
  Promise.all = function (promises) {
    return new Promise((resolve, reject) => {
      let results = [];
      let remaining = promises.length;

      promises.forEach((promise, index) => {
        Promise.resolve(promise).then((value) => {
          results[index] = value;
          remaining--;
          if (remaining === 0) {
            resolve(results);
          }
        }, reject);
      });
    });
  };
}
```

### 3. **Promise.any**

```javascript
if (typeof Promise.any === "undefined") {
  Promise.any = function (promises) {
    return new Promise((resolve, reject) => {
      let errors = [];
      let remaining = promises.length;

      if (remaining === 0) {
        return reject(new AggregateError([], "All promises were rejected"));
      }

      promises.forEach((promise) => {
        Promise.resolve(promise).then(resolve, (error) => {
          errors.push(error);
          remaining--;
          if (remaining === 0) {
            reject(new AggregateError(errors, "All promises were rejected"));
          }
        });
      });
    });
  };
}
```

### 4. **Promise.race**

```javascript
if (typeof Promise.race === "undefined") {
  Promise.race = function (promises) {
    return new Promise((resolve, reject) => {
      promises.forEach((promise) => {
        Promise.resolve(promise).then(resolve, reject);
      });
    });
  };
}
```

### 5. **Promise.allSettled**

```javascript
if (typeof Promise.allSettled === "undefined") {
  Promise.allSettled = function (promises) {
    return new Promise((resolve) => {
      let results = [];
      let remaining = promises.length;

      if (remaining === 0) {
        return resolve(results);
      }

      promises.forEach((promise, index) => {
        Promise.resolve(promise).then(
          (value) => {
            results[index] = { status: "fulfilled", value };
            remaining--;
            if (remaining === 0) {
              resolve(results);
            }
          },
          (reason) => {
            results[index] = { status: "rejected", reason };
            remaining--;
            if (remaining === 0) {
              resolve(results);
            }
          }
        );
      });
    });
  };
}
```

### 6. **Function.prototype.call**

```javascript
if (!Function.prototype.call) {
  Function.prototype.call = function (context) {
    context = context || globalThis;
    const args = Array.prototype.slice.call(arguments, 1);
    context.fn = this;
    const result = context.fn(...args);
    delete context.fn;
    return result;
  };
}
```

### 7. **Function.prototype.apply**

```javascript
if (!Function.prototype.apply) {
  Function.prototype.apply = function (context, args) {
    context = context || globalThis;
    context.fn = this;
    const result = context.fn(...(args || []));
    delete context.fn;
    return result;
  };
}
```

### 8. **Function.prototype.bind**

```javascript
if (!Function.prototype.bind) {
  Function.prototype.bind = function (context) {
    const self = this;
    const args = Array.prototype.slice.call(arguments, 1);
    return function () {
      return self.apply(
        context,
        args.concat(Array.prototype.slice.call(arguments))
      );
    };
  };
}
```

### 9. **Array.prototype.map**

```javascript
if (!Array.prototype.map) {
  Array.prototype.map = function (callback, thisArg) {
    const array = this;
    const result = [];
    for (let i = 0; i < array.length; i++) {
      if (i in array) {
        result[i] = callback.call(thisArg, array[i], i, array);
      }
    }
    return result;
  };
}
```

### 10. **Array.prototype.reduce**

```javascript
if (!Array.prototype.reduce) {
  Array.prototype.reduce = function (callback, initialValue) {
    if (this == null) {
      throw new TypeError("Array.prototype.reduce called on null or undefined");
    }
    if (typeof callback !== "function") {
      throw new TypeError(callback + " is not a function");
    }

    const array = this;
    let index = 0;
    let value = initialValue;

    if (arguments.length < 2) {
      value = array[0];
      index = 1;
    }

    for (; index < array.length; index++) {
      if (index in array) {
        value = callback(value, array[index], index, array);
      }
    }

    return value;
  };
}
```

### 11. **Array.prototype.filter**

```javascript
if (!Array.prototype.filter) {
  Array.prototype.filter = function (callback, thisArg) {
    if (this == null) {
      throw new TypeError("Array.prototype.filter called on null or undefined");
    }
    if (typeof callback !== "function") {
      throw new TypeError(callback + " is not a function");
    }

    const array = this;
    const result = [];
    for (let i = 0; i < array.length; i++) {
      if (i in array) {
        const value = array[i];
        if (callback.call(thisArg, value, i, array)) {
          result.push(value);
        }
      }
    }

    return result;
  };
}
```

### 12. **Array.prototype.forEach**

```javascript
if (!Array.prototype.forEach) {
  Array.prototype.forEach = function (callback, thisArg) {
    if (this == null) {
      throw new TypeError(
        "Array.prototype.forEach called on null or undefined"
      );
    }
    if (typeof callback !== "function") {
      throw new TypeError(callback + " is not a function");
    }

    const array = this;
    for (let i = 0; i < array.length; i++) {
      if (i in array) {
        callback.call(thisArg, array[i], i, array);
      }
    }
  };
}
```

### 13. **Array.prototype.flat**

```javascript
if (!Array.prototype.flat) {
  Array.prototype.flat = function (depth = 1) {
    const flatten = (arr, d) => {
      if (d < 1) return arr.slice();
      return arr.reduce(
        (acc, val) =>
          Array.isArray(val)
            ? acc.concat(flatten(val, d - 1))
            : acc.concat(val),
        []
      );
    };

    return flatten(this, depth);
  };
}
```

### 14. **fetch API**

```javascript
if (!window.fetch) {
  // Polyfill for fetch
  (function (global) {
    function fetch(url, options) {
      return new Promise((resolve, reject) => {
        var xhr = new XMLHttpRequest();
        xhr.open(options.method || "GET", url);

        xhr.onload = function () {
          resolve({
            ok: xhr.status >= 200 && xhr.status < 300,
            status: xhr.status,
            statusText: xhr.statusText,
            json: () => Promise.resolve(JSON.parse(xhr.responseText)),
            text: () => Promise.resolve(xhr.responseText),
          });
        };

        xhr.onerror = function () {
          reject(new TypeError("Network request failed"));
        };

        xhr.send(options.body || null);
      });
    }

    global.fetch = fetch;
  })(this);
}
```

### 15. **deepCopy with object as a value**

```javascript
function deepCopy(obj) {
  // Check if the object is null or not an object (base case)
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  // Create a new array or object depending on the input
  const copy = Array.isArray(obj) ? [] : {};

  // Recursively copy each property
  for (const key in obj) {
    copy[key] = deepCopy(obj[key]);
  }

  return copy;
}

const obj1 = { value: 10 };
const obj2 = { nested: obj1 };
const obj3 = { nested: obj1 };

const obj2Copy = deepCopy(obj2);
const obj3Copy = deepCopy(obj3);

obj2Copy.nested.value = 20; // Doesn't affect obj3Copy.nested.value
console.log(obj3Copy.nested.value); // Still 10
```

String.prototype.repeat
