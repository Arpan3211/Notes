# Mapped Types


### **Definition**

Mapped Types in TypeScript allow you to **create new types by transforming the properties of an existing type**.
They work by iterating over keys (`keyof`) of a type and applying transformations such as making properties `optional`, `readonly`, or changing their value types.

They are written using the syntax:

```ts
type NewType = {
  [Key in keyof ExistingType]: Transformation;
};
```

### **Example 1 – Basic Mapped Type**

```ts
type Person = {
  name: string;
  age: number;
  location: string;
};

// Mapped type: Make all properties optional
type PartialPerson = {
  [Key in keyof Person]?: Person[Key];
};

const person1: PartialPerson = {
  name: "Arpan", //  age and location are optional now
};
```

### **Example 2 – Readonly Mapped Type**

```ts
type ReadonlyPerson = {
  readonly [Key in keyof Person]: Person[Key];
};

const person2: ReadonlyPerson = {
  name: "Arpan",
  age: 22,
  location: "Bangalore",
};

person2.age = 23; //  Error: Cannot assign to 'age' because it is a read-only property
```

### **Example 3 – Changing Value Types**

You can also change property value types during mapping.

```ts
type BooleanPerson = {
  [Key in keyof Person]: boolean;
};

const person3: BooleanPerson = {
  name: true,
  age: false,
  location: true,
};
```

### **Example 4 – Using `keyof` with Generics**

```ts
type OptionsFlags<Type> = {
  [Property in keyof Type]: boolean;
};

type Features = {
  darkMode: () => void;
  notifications: () => void;
};

type FeatureFlags = OptionsFlags<Features>;

// Result type:
// {
//   darkMode: boolean;
//   notifications: boolean;
// }
```

### **Why Mapped Types are Powerful?**

- They allow **reusability** instead of manually rewriting types.
- Many **utility types** in TypeScript (like `Partial`, `Pick`, `Omit`, `Readonly`, `Record`) are built using **mapped types**.

 **In short (for interview):**
Mapped Types let you transform the properties of an existing type using `keyof` and `[Key in keyof Type]`. They’re the building blocks behind utility types like `Partial`, `Pick`, and `Readonly`.
