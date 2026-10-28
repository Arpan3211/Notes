# Compiled vs interpreted

> JavaScript is neither purely: modern engines (V8) parse it, interpret it, and compile the hot parts to machine code with JIT.

| | Compiled (C, Go) | Interpreted (old JS, Python) | JavaScript engines (JIT) |
|---|---|---|---|
| Translation | whole program to machine code before running | line by line while running | interpret first, compile hot code while running |
| Speed | fast | slower | fast after warm-up |
| Start-up | needs a build step | immediate | immediate |

## How an engine runs JavaScript

1. **Parse**: source code becomes an AST (abstract syntax tree).
2. **Bytecode**: an interpreter (Ignition in V8) runs it right away.
3. **Optimise (JIT)**: frequently used code ("hot" code) is compiled to machine code (TurboFan in V8).
4. **Deoptimise**: if the assumptions break (for example a variable changes type), the engine goes back to bytecode.

## Remember

- The creation phase of an execution context (hoisting) happens because of this parse step.
- Stable types make code faster: keep the same shape and type for variables and objects.
- Engines: V8 (Chrome, Node.js), SpiderMonkey (Firefox), JavaScriptCore (Safari).
