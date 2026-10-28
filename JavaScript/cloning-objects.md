# How do you clone an object in JavaScript


In JavaScript, there are several ways to clone an object. Here are some common methods:

#### 1. Using the Spread Operator

The spread operator (`...`) creates a shallow copy of an object.

```javascript
const original = { a: 1, b: 2 };
const copy = { ...original };
```

#### 2. Using `Object.assign()`

`Object.assign()` also creates a shallow copy of an object.

```javascript
const original = { a: 1, b: 2 };
const copy = Object.assign({}, original);
```

#### 3. Using `JSON.parse()` and `JSON.stringify()`

For deep cloning (copying nested objects), you can use `JSON.parse()` and `JSON.stringify()`. Note that this method has limitations, such as not supporting functions, `undefined`, or special objects like `Date`.

```javascript
const original = { a: 1, b: { c: 2 } };
const copy = JSON.parse(JSON.stringify(original));
```

#### 4. Using a Utility Library

Libraries like Lodash provide utility functions for deep cloning. For example, with Lodash:

```javascript
const _ = require("lodash");
const original = { a: 1, b: { c: 2 } };
const copy = _.cloneDeep(original);
```

Choose the method based on whether you need a shallow or deep copy and the specific requirements of your use case.
