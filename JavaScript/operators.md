# Operators


**Logical OR**

```jsx
true || false; // true
10 > 5 || 10 > 20; // true
false || false; // false
10 > 100 || 10 > 20; // false
```

**Logical AND**

```jsx
true && true; // true
1 > 2 && 2 > 1; // false
true && false; // false
4 === 4 && 3 > 1; // true
```

**Comparison Operators**

```jsx
1 > 3; // false
3 > 1; // true
250 >= 250; // true
1 === 1; // true
1 === 2; // false
1 === "1"; // false
```

**Logical Operator !**

```jsx
let lateToWork = true;
let oppositeValue = !lateToWork;

// => false
console.log(oppositeValue);
```

**Nullish coalescing operator ??**

```jsx
null ?? "I win"; //  'I win'
undefined ?? "Me too"; //  'Me too'

false ?? "I lose"; //  false
0 ?? "I lose again"; //  0
"" ?? "Damn it"; //  ''
```

**BigInt addition**

**`BigInt`** is a built-in data type in JavaScript that allows you to represent and work with integers larger than the maximum safe integer limit for the `Number` data type.

In JavaScript, the `Number` type can only safely represent integers between `-(2^53 - 1)` and `2^53 - 1` (i.e., from `-9,007,199,254,740,991` to `9,007,199,254,740,991`). This range is defined by the `Number.MAX_SAFE_INTEGER` and `Number.MIN_SAFE_INTEGER` constants.

```jsx
const big1 = 12345678901234567890n;
const big2 = 98765432109876543210n;
const sum = big1 + big2; // Addition
const difference = big1 - big2; // Subtraction
const product = big1 * big2; // Multiplication
const quotient = big2 / big1; // Division (result will be a BigInt)

const num = 5;
const bigIntNum = 10n;
const result = num + bigIntNum; // TypeError: Cannot mix BigInt and other type

const result = bigIntNum + BigInt(num); // Convert Number to BigInt
```
