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