# Function polyfills: call, apply, bind

> Re-implementing `Function.prototype.call`, `apply` and `bind`. The code below is tested.

## Idea

To run a function with a chosen `this`, **temporarily make it a method of that object**: `obj.fn(...args)` sets `this` to `obj`. Use a `Symbol` as the key so nothing is overwritten, then delete it.

```js
Function.prototype.myCall = function (ctx, ...args) {
  ctx = ctx == null ? globalThis : Object(ctx);   // null/undefined -> global, primitives -> wrapper object
  const key = Symbol();
  ctx[key] = this;                                // `this` is the function being called
  const result = ctx[key](...args);
  delete ctx[key];
  return result;
};

Function.prototype.myApply = function (ctx, args = []) {
  return this.myCall(ctx, ...args);               // same as call, but arguments come as an array
};

Function.prototype.myBind = function (ctx, ...bound) {
  const fn = this;
  return function (...args) {
    return new.target
      ? new fn(...bound, ...args)                 // used with `new`: ignore ctx
      : fn.myCall(ctx, ...bound, ...args);        // partial application: bound args first
  };
};
```

## Usage

```js
function invite(greeting, question) {
  return `${greeting} ${this.name} ${question}`;
}

invite.myCall({ name: "John" }, "Hello", "How are you?");     // "Hello John How are you?"
invite.myApply({ name: "Jimmy" }, ["Hello", "How are you?"]); // "Hello Jimmy How are you?"

const inviteAnn = invite.myBind({ name: "Ann" }, "Hi");
inviteAnn("All good?");                                        // "Hi Ann All good?"
```

## Remember

- `call` and `apply` run the function now. `bind` returns a new function.
- A bound function remembers some arguments (partial application) and a fixed `this`.
- Why a `Symbol`: a string key like `fn` could overwrite a real property on the object.
- How the real ones behave: [call, apply, bind](../call-apply-bind.md).
