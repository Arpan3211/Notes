# Recursive Types


### **What are Recursive Types?**

A **recursive type** is a type that **references itself** as part of its definition.
They are useful for representing **nested or hierarchical structures** like trees, JSON, linked lists, etc.


### **Basic Example**

```ts
type NestedArray<T> = T | NestedArray<T>[];

let numbers: NestedArray<number>;
numbers = 5;             // 
numbers = [1, 2, [3, 4]]; // 
numbers = [[1], [[2]]];  // 
```

Here, `NestedArray<T>` calls itself inside its own definition → **recursion**.


### **Common Use Cases**

### 1. **JSON Data Type**

```ts
type JSONValue =
  | string
  | number
  | boolean
  | null
  | JSONValue[]
  | { [key: string]: JSONValue };

const data: JSONValue = {
  name: "Arpan",
  age: 22,
  skills: ["React", "TypeScript"],
  address: {
    city: "Bangalore",
    zip: 560001,
  },
};
```

 This models **arbitrary JSON structures**.


### 2. **Tree Structure**

```ts
type TreeNode = {
  value: string;
  children?: TreeNode[]; // recursive reference
};

const tree: TreeNode = {
  value: "root",
  children: [
    {
      value: "child-1",
      children: [{ value: "grandchild-1" }],
    },
    { value: "child-2" },
  ],
};
```

 Represents hierarchical data like a DOM tree, org chart, or file system.


### 3. **Linked List**

```ts
type LinkedList<T> = {
  value: T;
  next?: LinkedList<T>; // recursive reference
};

const list: LinkedList<number> = {
  value: 1,
  next: { value: 2, next: { value: 3 } },
};
```

 Models **linked list nodes**.


### 4. **Union Recursive Type**

```ts
type Expression =
  | number
  | { add: [Expression, Expression] }
  | { mul: [Expression, Expression] };

const expr: Expression = {
  mul: [
    { add: [1, 2] },
    { add: [3, { mul: [4, 5] }] },
  ],
};
```

 Useful for defining **mathematical expressions**, compilers, or DSLs.


### **Key Notes**

* Recursive types allow **infinite depth** in data structures.
* Must always have a **base case** (like `string | number` in `JSONValue`).
* Without a base case → TypeScript will complain about **circular references**.
* Often combined with **generics** for flexibility.


 **In short (Interview-ready)**:
Recursive Types are types that reference themselves inside their definition. They’re useful for representing nested structures such as JSON, trees, linked lists, or expressions.
