// Insert an Element at a Specific Position
// Description:
// Given an array and a number k, insert the number at the given index i. Ensure the size of the array increases by one.

// Test Cases:

// Input: arr = [1, 2, 3, 4], k = 99, i = 2 → Output: [1, 2, 99, 3, 4]

// Input: arr = [5, 10], k = 7, i = 0 → Output: [7, 5, 10]

// Input: arr = [3, 8, 12], k = 15, i = 3 → Output: [3, 8, 12, 15]


function InsertElement(arr, K, I) {
    arr.splice(I, 0, K)
   return arr
}

console.log(InsertElement([1, 2, 3, 4], 99, 2))
console.log(InsertElement([5, 10], 7, 0))
console.log(InsertElement([3, 8, 12], 15, 3))