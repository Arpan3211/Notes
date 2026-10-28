# Pass by value vs pass by reference

> JavaScript always passes arguments **by value**. For objects, the value that is copied is the **reference**, so the function can change the object but cannot re-point the caller's variable.

## Primitives: a copy of the value

```js
function change(x) { x = x + 1; }
let num = 5;
change(num);
num;   // 5  (only the copy changed)
```

## Objects and arrays: a copy of the reference

```js
function rename(obj) { obj.name = "Changed"; }   // mutation is visible outside
const person = { name: "Original" };
rename(person);
person.name;   // "Changed"

function reassign(obj) { obj = { name: "New" }; } // reassigning is NOT visible outside
reassign(person);
person.name;   // still "Changed"
```

## Summary

| | Primitive | Object / array / function |
|---|---|---|
| What is copied | the value | the reference (address) |
| Mutating the parameter changes the original | n/a (immutable) | yes |
| Reassigning the parameter changes the original | no | no |

## Side effects and the safe way

```js
function addBad(arr) { arr.push(4); return arr; }     // mutates the caller's array

function addGood(arr) { return [...arr, 4]; }          // returns a new array
const a = [1, 2, 3];
addGood(a);   // [1, 2, 3, 4]
a;            // [1, 2, 3]
```

## Remember

- Interview answer: "JavaScript is pass by value. For objects the value is a reference (sometimes called call by sharing)."
- Avoid mutating arguments. Return new values or copy first (see [shallow vs deep copy](shallow-vs-deep-copy.md)).
- Related: [mutable vs immutable](mutable-vs-immutable.md), [pure functions](pure-vs-impure.md).
