# Proxy

> A `Proxy` wraps an object (the target) and intercepts operations on it (read, write, delete, call...) through a handler.

```js
const target = { name: "Alice", age: 25 };

const proxy = new Proxy(target, {
  get(t, prop, receiver) {
    console.log(`get ${prop}`);
    return Reflect.get(t, prop, receiver);
  },
  set(t, prop, value, receiver) {
    console.log(`set ${prop} = ${value}`);
    return Reflect.set(t, prop, value, receiver);   // must return true on success
  },
});

proxy.name;       // get name
proxy.age = 30;   // set age = 30
```

## Common traps (handler methods)

| Trap | Intercepts |
|---|---|
| `get(target, prop, receiver)` | reading a property |
| `set(target, prop, value, receiver)` | writing a property |
| `has(target, prop)` | the `in` operator |
| `deleteProperty(target, prop)` | `delete obj.x` |
| `ownKeys(target)` | `Object.keys`, `for...in` |
| `apply(target, thisArg, args)` | calling a function |
| `construct(target, args)` | `new` |

## Uses

```js
// validation
const user = new Proxy({}, {
  set(t, prop, value) {
    if (prop === "age" && (value < 0 || value > 120)) throw new Error("Invalid age");
    t[prop] = value;
    return true;
  },
});

// default values
const withDefault = new Proxy({}, { get: (t, p) => (p in t ? t[p] : "default") });
withDefault.anything;   // "default"
```

- Validation, logging, default values, read-only views.
- Reactive state: Vue 3 reactivity is built on Proxy.
- Negative array indexes, API wrappers.

## Remember

- Use `Reflect` inside traps to keep the default behaviour.
- A `set` trap that returns `false` throws a `TypeError` in strict mode.
- Proxies add overhead, so avoid them in hot code paths. They cannot be polyfilled for old browsers.
