# call, apply and bind

> All three set the value of `this` for a function. `call` and `apply` run it now, `bind` returns a new function to run later.

| Method | Runs the function? | Arguments |
|---|---|---|
| `fn.call(thisArg, a, b)` | immediately | one by one (comma) |
| `fn.apply(thisArg, [a, b])` | immediately | as an array |
| `fn.bind(thisArg, a)` | no, returns a new function | one by one (can be pre-filled) |

Memory trick: **C**all = **C**omma, **A**pply = **A**rray.

```js
const emp1 = { firstName: "John", lastName: "Rodson" };
const emp2 = { firstName: "Jimmy", lastName: "Baily" };

function invite(greeting, question) {
  console.log(`${greeting} ${this.firstName} ${this.lastName}, ${question}`);
}

invite.call(emp1, "Hello", "How are you?");     // Hello John Rodson, How are you?
invite.apply(emp2, ["Hello", "How are you?"]);  // Hello Jimmy Baily, How are you?

const inviteJohn = invite.bind(emp1);
inviteJohn("Hi", "All good?");                  // Hi John Rodson, All good?
```

## Common uses

```js
Math.max.apply(null, [1, 5, 3]);        // 5   (today: Math.max(...arr))
const log = console.log.bind(console);  // keep `this`
const add5 = ((a, b) => a + b).bind(null, 5);   // partial application: add5(3) is 8
Array.prototype.slice.call(arguments);  // array-like to array
```

## Remember

- `bind` never changes the original function. A bound function cannot be re-bound.
- Arrow functions ignore `call`, `apply` and `bind` for `this` (see [arrow functions](arrow-functions.md)).
- Losing `this` in callbacks (`setTimeout(obj.method)`) is fixed with `bind` or an arrow function (see [this keyword](this-keyword.md)).
- Polyfills: [call, apply, bind polyfills](Polyfills/function-polyfills.md).
