# Generator functions

> A function declared with `function*` that can pause at `yield` and resume later. It returns an iterator.

```js
function* numbers() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = numbers();      // nothing runs yet
gen.next();   // { value: 1, done: false }
gen.next();   // { value: 2, done: false }
gen.next();   // { value: 3, done: false }
gen.next();   // { value: undefined, done: true }

[...numbers()];            // [1, 2, 3]  (generators are iterable)
for (const n of numbers()) console.log(n);
```

## Key points

- Calling the function returns a **generator object**, the body runs step by step on each `next()`.
- `yield value` pauses and sends `value` out. `next(x)` can send a value **in** (it becomes the result of `yield`).
- `return` ends it (`done: true`). `gen.return()` and `gen.throw()` stop it early or inject an error.
- They are **lazy**: values are produced only when asked, so infinite sequences are fine.
- `yield*` delegates to another iterable or generator.

## Examples

```js
function* idMaker(start = 0) {        // infinite sequence
  while (true) yield start++;
}
const ids = idMaker(5);
ids.next().value;   // 5
ids.next().value;   // 6

function* talk() {                    // two-way
  const name = yield "What is your name?";
  yield `Hello ${name}`;
}
const t = talk();
t.next();          // { value: "What is your name?" }
t.next("Ann");     // { value: "Hello Ann" }
```

## Uses

- Custom iterators and lazy lists.
- Generating IDs and ranges, paginating data.
- State machines.
- `async/await` is built on the same idea (older libraries like `co` and redux-saga run generators with promises).

## Remember

- A generator can be used once. Create a new one to restart.
- Arrow functions cannot be generators.
