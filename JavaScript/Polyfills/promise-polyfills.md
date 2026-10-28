# Promise polyfills

> A small `MyPromise` with `then`, `catch`, `finally` and the static helpers. The code below is tested.

## How a promise works (what the code does)

1. Starts `pending`. `resolve` or `reject` can change the state **once**.
2. `then` returns a **new** promise, so calls can be chained.
3. Handlers always run **asynchronously** as microtasks (`queueMicrotask`), even if the promise is already settled.
4. If a handler returns a promise (a "thenable"), the chain **waits** for it.
5. A throw inside a handler rejects the next promise.

```js
class MyPromise {
  #state = "pending";
  #value;
  #handlers = [];

  constructor(executor) {
    const settle = (state, value) => {
      if (this.#state !== "pending") return;       // only the first call counts
      this.#state = state;
      this.#value = value;
      this.#handlers.forEach((h) => this.#run(h));
      this.#handlers = [];
    };
    const resolve = (v) => {
      if (v && typeof v.then === "function") v.then(resolve, reject);   // adopt a thenable
      else settle("fulfilled", v);
    };
    const reject = (e) => settle("rejected", e);
    try { executor(resolve, reject); } catch (e) { reject(e); }
  }

  #run({ onFulfilled, onRejected, resolve, reject }) {
    queueMicrotask(() => {
      const cb = this.#state === "fulfilled" ? onFulfilled : onRejected;
      if (typeof cb !== "function") {              // pass the value or error down the chain
        return (this.#state === "fulfilled" ? resolve : reject)(this.#value);
      }
      try { resolve(cb(this.#value)); } catch (e) { reject(e); }
    });
  }

  then(onFulfilled, onRejected) {
    return new MyPromise((resolve, reject) => {
      const handler = { onFulfilled, onRejected, resolve, reject };
      this.#state === "pending" ? this.#handlers.push(handler) : this.#run(handler);
    });
  }

  catch(onRejected) { return this.then(undefined, onRejected); }

  finally(fn) {
    return this.then((v) => (fn(), v), (e) => { fn(); throw e; });
  }

  static resolve(v) { return v instanceof MyPromise ? v : new MyPromise((r) => r(v)); }
  static reject(e) { return new MyPromise((_, rej) => rej(e)); }
}
```

## Static methods

```js
MyPromise.all = function (items) {                  // all fulfilled, in input order; first rejection fails
  return new MyPromise((resolve, reject) => {
    const out = [];
    let left = items.length;
    if (!left) return resolve(out);
    items.forEach((p, i) =>
      MyPromise.resolve(p).then((v) => { out[i] = v; if (--left === 0) resolve(out); }, reject)
    );
  });
};

MyPromise.race = function (items) {                 // first to settle wins
  return new MyPromise((resolve, reject) =>
    items.forEach((p) => MyPromise.resolve(p).then(resolve, reject))
  );
};

MyPromise.allSettled = function (items) {           // never rejects
  return MyPromise.all(items.map((p) =>
    MyPromise.resolve(p).then(
      (value) => ({ status: "fulfilled", value }),
      (reason) => ({ status: "rejected", reason })
    )
  ));
};

MyPromise.any = function (items) {                  // first fulfilled; all rejected -> AggregateError
  return new MyPromise((resolve, reject) => {
    const errors = [];
    let left = items.length;
    if (!left) return reject(new AggregateError([], "All promises were rejected"));
    items.forEach((p, i) =>
      MyPromise.resolve(p).then(resolve, (e) => {
        errors[i] = e;
        if (--left === 0) reject(new AggregateError(errors, "All promises were rejected"));
      })
    );
  });
};
```

## Usage

```js
new MyPromise((r) => setTimeout(() => r(1), 100)).then((x) => x + 1).then(console.log);   // 2
MyPromise.all([1, MyPromise.resolve(2), new MyPromise((r) => r(3))]).then(console.log);   // [1, 2, 3]
MyPromise.any([MyPromise.reject("a"), MyPromise.resolve("b")]).then(console.log);         // "b"
```

## Remember

- Keep the **order** of results in `all` and `allSettled` (`out[i] = ...`, not `push`).
- Wrap non-promise values with `Promise.resolve` first.
- Real behaviour and differences between the combinators: [promises](../promises.md).
