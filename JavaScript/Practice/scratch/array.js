// Reverse an Array
// Description:
// Write a function to reverse a given 
// array in-place without using any extra space.

// Test Cases:

// Input: arr = [1, 2, 3, 4, 5] → Output: [5, 4, 3, 2, 1]
// Input: arr = [7, 9, 11] → Output: [11, 9, 7]
// Input: arr = [10] → Output: [10]

function reverseArray(arr) {
    let result = arr.reverse()
    return result;
}

console.log(reverseArray([1, 2, 3, 4, 5]))
console.log(reverseArray([7, 9, 11]))
console.log(reverseArray([10]))