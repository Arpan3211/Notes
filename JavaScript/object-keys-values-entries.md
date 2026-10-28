# Object.keys, Object.values and Object.entries

> Three methods that turn an object's **own enumerable** properties into arrays.

```js
const person = { name: "Alice", age: 30, job: "Engineer" };

Object.keys(person);     // ["name", "age", "job"]
Object.values(person);   // ["Alice", 30, "Engineer"]
Object.entries(person);  // [["name", "Alice"], ["age", 30], ["job", "Engineer"]]
```

| Method | Returns |
|---|---|
| `Object.keys(obj)` | array of keys |
| `Object.values(obj)` | array of values |
| `Object.entries(obj)` | array of `[key, value]` pairs |

## Useful patterns

```js
for (const [key, value] of Object.entries(person)) console.log(key, value);

Object.fromEntries(Object.entries(person).map(([k, v]) => [k, String(v)]));  // map over an object
Object.fromEntries(new Map([["a", 1]]));   // { a: 1 }
Object.keys(person).length;                // number of properties
```

## Remember

- They skip inherited properties and symbol keys, and keep integer-like keys first in ascending order.
- `for...in` also loops over inherited properties, so prefer these methods.
- They work on arrays too (`Object.keys(["a", "b"])` is `["0", "1"]`).
