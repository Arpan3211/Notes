# Literal Types


### **Definition**

A **literal type** is a type that represents **a specific value**, rather than a broad category.

- In JavaScript, values like `"hello"`, `42`, or `true` are **literals**.
- In TypeScript, you can use those literal values **as types**.

This means instead of just `string`, you can say `"hello"` is the only allowed value.

### **Example 1 – String Literal Types**

```ts
type Direction = "up" | "down" | "left" | "right";

let move: Direction;

move = "up"; //  valid
move = "left"; //  valid
move = "forward"; //  Error - not assignable
```

 Here `"up" | "down" | "left" | "right"` is a **union of string literals**.

### **Example 2 – Number Literal Types**

```ts
type DiceRoll = 1 | 2 | 3 | 4 | 5 | 6;

let roll: DiceRoll;

roll = 3; //  valid
roll = 7; //  Error
```

### **Example 3 – Boolean Literal Types**

```ts
type Answer = true | false;

let yesNo: Answer;

yesNo = true; // 
yesNo = false; // 
yesNo = "yes"; // 
```

_(Though usually you just use `boolean`, literal types can restrict to only `true` or only `false`.)_

### **Example 4 – Narrowing with Literals**

```ts
function printStatus(status: "success" | "error") {
  console.log(status);
}

printStatus("success"); // 
printStatus("pending"); // 
```

 Very useful for APIs where only specific values are valid.

### **Example 5 – Const and Literal Inference**

When you use `const`, TypeScript **infers literal types** instead of broad ones.

```ts
let a = "hello"; // type: string
const b = "hello"; // type: "hello"
```

 `a` can be reassigned to any string,
 `b` is fixed to `"hello"`.

### **Example 6 – Literal Types + Union = Enums Alternative**

Instead of `enum`, you can make a literal union:

```ts
type Color = "red" | "green" | "blue";

function setColor(c: Color) {
  console.log(`Color set to ${c}`);
}

setColor("red"); // 
setColor("yellow"); // 
```

### **Key Interview Points**

1. **Literal types** represent exact values (`"yes"`, `42`, `true`) instead of general ones (`string`, `number`, `boolean`).
2. They’re often combined with **union types** to restrict values to a fixed set.
3. `const` variables infer literal types.
4. Useful in **function parameters**, **APIs**, and **state machines** where only certain values are allowed.
5. They are a lightweight alternative to enums.
