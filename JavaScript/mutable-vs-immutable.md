# Mutable vs immutable

> Immutable: the value cannot be changed (a change makes a new value). Mutable: it can be changed in place.

| | Immutable | Mutable |
|---|---|---|
| Types | string, number, boolean, `undefined`, `null`, symbol, bigint | object, array, function, Map, Set |
| A change | creates a new value | modifies the original |
| Copied by | value | reference |

```js
let str = "hello";
str.toUpperCase();      // "HELLO" (a new string)
str;                    // "hello" (unchanged)

const person = { name: "Alice", age: 25 };
person.age = 26;        // mutates the same object (allowed with const)

const nums = [1, 2, 3];
nums.push(4);           // mutates the array
```

## Making things immutable

```js
const user = Object.freeze({ name: "A", address: { city: "X" } });
user.name = "B";              // ignored (TypeError in strict mode)
user.address.city = "Y";      // still works: freeze is shallow

const added = [...nums, 5];            // new array
const updated = { ...person, age: 27 }; // new object
```

Mutating array methods: `push`, `pop`, `shift`, `unshift`, `splice`, `sort`, `reverse`. Non-mutating: `map`, `filter`, `slice`, `concat`, `toSorted`, `toReversed`.

## Why it matters

- Immutable updates are predictable and easy to compare (React and Redux detect changes by reference).
- Mutation can cause hidden bugs when several places share one object.

## Remember

- `const` prevents reassignment, not mutation.
- See [shallow vs deep copy](shallow-vs-deep-copy.md) and [pass by value vs reference](pass-by-value-vs-reference.md).
