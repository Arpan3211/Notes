# Null


### Meaning

`null` is an **intentional absence** of any value.
It’s like saying:

> “This variable is empty on purpose.”

### Example

```ts
let user: string | null = null; // Explicitly no value
user = "Arpan"; //  Can assign later
```

### Use Cases

- Explicitly clearing a variable.
- Representing "no object" or "empty" in APIs/DB results.

```ts
function findUser(id: number): string | null {
  return id === 1 ? "Arpan" : null;
}
```
