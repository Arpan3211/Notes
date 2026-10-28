# Destructuring

> ES6 syntax to unpack values from objects or arrays into variables.

## Object

```js
const person = { firstName: "John", lastName: "Doe", age: 30 };

const { firstName, lastName } = person;      // by property name
const { firstName: first } = person;         // rename
const { country = "India" } = person;        // default value
const { address: { city } = {} } = person;   // nested, with a safe default
const { age, ...rest } = person;             // rest: the remaining properties
```

## Array

```js
const [a, b] = [1, 2, 3];       // by position: a=1, b=2
const [first, , third] = [1, 2, 3];   // skip an item
const [x, ...others] = [1, 2, 3]; // x=1, others=[2, 3]
[a, b] = [b, a];                // swap variables
```

## In function parameters

```js
function show({ name, age = 18 }) { return `${name} ${age}`; }
show({ name: "A" });   // "A 18"

const [state, setState] = useState(0);   // React hook
```

## Remember

- Object destructuring matches by **name**, array destructuring by **position**.
- Destructuring `null` or `undefined` throws a `TypeError`. Give a default: `const { a } = obj ?? {}`.
- It copies references for nested objects (it is shallow).
