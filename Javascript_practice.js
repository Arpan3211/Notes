// let str = "Arpan"
// let num = 2
// let bol = true;
// let und = undefined;
// let Null = null;
// let bigNumber = 1234567890123456789012345678901234567890n;
// let arr = [34983, 4, 34];
// let obj = { "Arpan": "Arpan Waddewar" }

// console.log(str, typeof (str))
// console.log(num, typeof (num))
// console.log(bol, typeof (bol))
// console.log(und, typeof (und))
// console.log(Null, typeof (Null))
// console.log(bigNumber, typeof (bigNumber))
// console.log(arr, typeof (arr))
// console.log(obj, typeof (obj))

// function Counter() {
//     let count = 0;

//     return {
//         increment: function () {
//             count = count + 10;
//         },
//         decrement: function () {
//             count--;
//         },
//         getCount: function () {
//             return count;
//         }
//     }
// }

// let counter = Counter();
// counter.increment();
// counter.decrement();
// console.log(counter.getCount())

// const vovelsCounter = (str, vovels) => {
//     let count = 0;
//     let obj = {};
//     let arr = [];

//     for (let i = 0; i < str.length; i++) {
//         let value = str[i].toLowerCase()
//         if (vovels.includes(value)) {
//             count++;
//             arr.push(str[i])
//             if (obj[str[i]]) {
//                 let objValue = obj[str[i]];
//                 if (!Array.isArray(objValue)) {
//                     obj[str[i]] = [objValue, i];
//                 } else {
//                     obj[str[i]].push(i)
//                 };
//             } else {
//                 obj[str[i]] = i;
//             }
//         }
//     }
//     return `${count}, ${arr}, ${JSON.stringify(obj)}`;
// }

// let str = "Arpan Ramesh Waddewar";
// let vovels = ["a", "e", "i", "o", "u"];
// console.log(vovelsCounter(str, vovels));

// Here are ** 30 JavaScript coding interview questions ** focused on machine coding rounds for entry - level to 1 + years of experience:

// ### Array and String Manipulation
// 1. ** Reverse a string ** without using the reverse function.
// 2. ** Check if a string is a palindrome.**
//     3. ** Find the first non - repeating character ** in a string.
// 4. ** Remove duplicates from an array **.
// 5. ** Find the largest sum of contiguous subarray ** (Kadane's Algorithm).
// 6. ** Merge two sorted arrays ** into one sorted array.
// 7. ** Rotate an array by `k` positions **.
// 8. ** Find the most frequent element ** in an array.
// 9. ** Return the missing number ** from an unsorted array of integers.
// 10. ** Find the intersection of two arrays.**

// ### Object and Function Manipulation
// 11. ** Clone a JavaScript object ** without using `Object.assign` or spread operator.
// 12. ** Deep clone a nested object.**
//     13. ** Implement a custom `Array.prototype.map` function.**
//         14. ** Write a function that debounces another function.**
//             15. ** Write a function that throttles another function.**
//                 16. ** Flatten a nested array ** (e.g., `[1, [2, [3, 4], 5]]` to `[1, 2, 3, 4, 5]`).
// 17. ** Group an array of objects by a key.**
//     18. ** Implement a `memoize` function** for caching results of function calls.

// ### Number and Mathematical Problems
// 19. ** Find the factorial of a number recursively.**
//     20. ** Generate Fibonacci numbers up to `n` using recursion.**
//         21. ** Check if a number is prime.**
//             22. ** Find the greatest common divisor(GCD) ** of two numbers.
// 23. ** Check if two numbers are anagrams of each other **.
// 24. ** Find the missing number ** in an array of size `n` where numbers are between 1 and`n+1`.

// ### Sorting and Searching Algorithms
// 25. ** Implement bubble sort **.
// 26. ** Implement quicksort.**
//     27. ** Find the index of an element using binary search** in a sorted array.
// 28. ** Sort an array of objects by a specific property ** (e.g., age or salary).

// ### Miscellaneous
// 29. ** Implement a function to check if two rectangles overlap **.
// 30. ** Write a function that checks if parentheses in a string are balanced ** (valid parentheses problem).

// These questions test your understanding of JavaScript fundamentals and problem - solving abilities.Practicing these coding problems will prepare you for machine coding rounds.

// Program to find longest word in a given sentence ?

// const findLongestWord = (sentance) => {
//     let wordsArr = sentance.split(" ").reduce((longest, currentWord) => {
//         return longest.length > currentWord.length ? longest : currentWord;
//     });

//     return wordsArr;
// }

// console.log(findLongestWord("My name is Arpan Waddewar"))

// How to check whether a string is palindrome or not ?

// const FindPalindrome = (str) => {
//     let currentLowerCaseStr = str.toLowerCase();
//     let reverserdLowerCaseStr = currentLowerCaseStr.split("").reverse().join("");
//     if (currentLowerCaseStr === reverserdLowerCaseStr) {
//         return true;
//     } else {

//         return false
//     }
//     return [currentLowerCaseStr, reverserdLowerCaseStr]
// }

// let str = "madam"
// let str1 = "racecar"
// let str2 = "arpan"
// console.log(FindPalindrome(str))
// console.log(FindPalindrome(str1))
// console.log(FindPalindrome(str2))

// Write a program to remove duplicates from an array ?

// const removeDuplicates = (arr) => {

//     // label: 1;
//     // let obj = {};

//     // for (let i = 0; i < arr.length; i++) {
//     //     if (obj[arr[i]]) {
//     //         obj[arr[i]] = obj[arr[i]] + 1;
//     //     }
//     //     obj[arr[i]] = 1;
//     // }
//     // return Object.keys(obj);

//     label: 2;
//     let result = [];

//     for (let i = 0; i < arr.length; i++) {
//         let add = true;
//         for (let j = 0; j < result.length; j++) {
//             if (arr[i] === result[j]) {
//                 add = false;
//                 break;
//             }
//         }

//         if (add) {
//             result.push(arr[i])
//         }
//     }
//     return result;
// }

// let arr = [4, 2, 5, 2, 4, 2, 4, 5, 5, 4, 3, 5, 2, 9, 0, 6, 7, 5, 3, 6, 1]
// console.log(removeDuplicates(arr))

// Find the missing number in an array of size n where elements are from 1 to n.
// const FindMissingNum = (arr) => {
//     const numsSet = new Set(arr);
//     const maxNum = arr[arr.length - 1]; // Assuming the last element is the largest number
//     const missings = [];

//     console.log(" >> ", numsSet, typeof numsSet)

//     for (let i = 1; i <= maxNum; i++) {
//         if (!numsSet.has(i)) {
//             missings.push(i);
//         }
//     }
//     return missings;
// };

// console.log(FindMissingNum([1, 2, 4, 6, 7, 9, 10, 12, 15])); // [3, 5, 8, 11, 13, 14]
// console.log(FindMissingNum([1, 2, 3, 6, 8, 9, 10, 12, 14])); // [4, 5, 7, 11, 13]

// const FlatiningTheArr = (arr, result = []) => {
//     for (let i = 0; i < arr.length; i++) {
//         if (Array.isArray(arr[i])) {
//             FlatiningTheArr(arr[i], result)
//         } else {
//             result.push(arr[i])
//         }
//     }
//     return result;
// }
// let nestedArray = [
//     1,
//     [2, 3],
//     [
//         4,
//         [5, 6],
//         [
//             7,
//             [8, 9],
//             [
//                 10,
//                 [11, 12, [13, 14, [15, 16]]]
//             ]
//         ]
//     ]
// ];

// console.log(FlatiningTheArr(nestedArray))

// generator

// function* NumGenerator() {
//     yield 1;
//     yield 2;
//     yield 3;
//     yield 4;
// }

// let Gen = NumGenerator()
// console.log(Gen.next())
// console.log(Gen.next())
// console.log(Gen.next())
// console.log(Gen.next())
// console.log(Gen.next())

// function curring1(a) {
//     return function (b) {
//         if (!b) return a
//         return curring1(a + b)
//     }
// }

// console.log(curring1(1)(2)(4)(5)(6)())
// console.log(curring1(3)(4)())

// const NumberSum = (arr) => {
//     return arr.reduce((acc, crr) => {
//         return acc + crr;
//     })
// }

// console.log(NumberSum([1, 4, 5, 4, 2, 5, 2, 4, 5, 2, 4, 5]))

// const FruitBasket = (arr) => {
//     return arr.reduce((acc, crr) => {
//         for (let fruit in crr) {
//             if (acc[fruit]) {
//                 acc[fruit] = acc[fruit] + crr[fruit]
//             } else {
//                 acc[fruit] = crr[fruit];
//             }
//         }

//         return acc;
//     })
// }

// console.log(FruitBasket([
//     { apple: 2, orange: 3, banana: 4, grapes: 3 },
//     { apple: 1, orange: 9, banana: 3 },
//     { apple: 5, orange: 4, banana: 2, grapes: 7 },
//     { apple: 5, banana: 8, grapes: 6 },
// ]))

// const BaseBollScore = (arr) => {
//     return arr.reduce((acc, { sr, score }) => {
//         if (!acc[sr]) {
//             acc[sr] = { sr, score };
//         } else {
//             acc[sr].score += score;
//         }

//         return acc;
//     }, {});
// };

// console.log(
//     BaseBollScore([
//         { sr: 1, score: 20 },
//         { sr: 1, score: 10 },
//         { sr: 2, score: 60 },
//         { sr: 2, score: 70 },
//         { sr: 3, score: 40 },
//         { sr: 3, score: 60 },
//     ])
// );

// output : [ { sr: 1, score: 30 },
// { sr: 2, score: 130 },
// { sr: 3, score: 100 },

// function deepClone(obj, hash = new WeakMap()) {
//     // Handle null, undefined, non-objects (primitive types)
//     if (obj === null || typeof obj !== "object") {
//         return obj;
//     }

//     // Handle circular references
//     if (hash.has(obj)) {
//         return hash.get(obj);
//     }

//     // Handle special cases like Date and RegExp
//     if (obj instanceof Date) {
//         return new Date(obj);
//     }

//     if (obj instanceof RegExp) {
//         return new RegExp(obj);
//     }

//     // Handle arrays
//     if (Array.isArray(obj)) {
//         const arrClone = [];
//         hash.set(obj, arrClone); // Track for circular references
//         obj.forEach((item, i) => {
//             arrClone[i] = deepClone(item, hash);
//         });
//         return arrClone;
//     }

//     // Handle normal objects
//     const clonedObj = {};
//     hash.set(obj, clonedObj); // Track for circular references

//     Object.keys(obj).forEach(key => {
//         clonedObj[key] = deepClone(obj[key], hash);
//     });

//     return clonedObj;
// }

// let obj = {
//     name: "Bob",  // 'Alice' overwritten by 'Bob'
//     address: { city: 'Los Angeles', zip: 90001 },
//     hobbies: ['reading', 'swimming'],
//     id: 2,  // '1' overwritten by '2'
//     startDate: new Date(),  // 'startDate' is just a reference, not a new date instance
//     pattern: /test/i,  // This is also a shallow copy
//     fn: function () { return "Hello"; },  // Same function reference
//     value: undefined
// }
// let deep = deepClone(obj)

// console.log(deep)
// console.log(obj.address === deep.address)
