**5 practice questions** on **Traversal, Insertion, and Deletion** for Arrays:  

---

### 🟢 **1. Find the Largest Element in an Array**  
**Description:**  
Given an array of integers, write a function to find and return the largest element.  

```javascript
function FindLargest(arr) {
    if(arr.length === 0) return "NIL";

    let largestNumber = arr[0];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > largestNumber){
            largestNumber = arr[i];
        }
    }
    return largestNumber;
}

console.log(FindLargest([10, 25, 5, 90, 34]))
console.log(FindLargest([-1, -10, -3, -99]))
console.log(FindLargest([5, 5, 5]))
console.log(FindLargest([0]))
console.log(FindLargest([]))

```
**Test Cases:**  
1. **Input:** `[10, 25, 5, 90, 34]` → **Output:** `90`  
2. **Input:** `[-1, -10, -3, -99]` → **Output:** `-1`  
3. **Input:** `[5, 5, 5]` → **Output:** `5`  

---

### 🟢 **2. Insert an Element at a Specific Position**  
**Description:**  
Given an array and a number `k`, insert the number at the given index `i`. Ensure the size of the array increases by one.  

**Test Cases:**  
1. **Input:** `arr = [1, 2, 3, 4], k = 99, i = 2` → **Output:** `[1, 2, 99, 3, 4]`  
2. **Input:** `arr = [5, 10], k = 7, i = 0` → **Output:** `[7, 5, 10]`  
3. **Input:** `arr = [3, 8, 12], k = 15, i = 3` → **Output:** `[3, 8, 12, 15]`  

---

### 🟢 **3. Delete an Element from an Array**  
**Description:**  
Given an array and an index `i`, delete the element at index `i` and shift the remaining elements to the left.  

**Test Cases:**  
1. **Input:** `arr = [4, 8, 15, 16, 23, 42], i = 2` → **Output:** `[4, 8, 16, 23, 42]`  
2. **Input:** `arr = [1], i = 0` → **Output:** `[]`  
3. **Input:** `arr = [99, 5, 7, 12], i = 3` → **Output:** `[99, 5, 7]`  

---

### 🟢 **4. Search for an Element in an Array**  
**Description:**  
Given an array and a target number, find the index of the number. Return `-1` if not found.  

**Test Cases:**  
1. **Input:** `arr = [10, 20, 30, 40], target = 30` → **Output:** `2`  
2. **Input:** `arr = [5, 1, 9, 7], target = 15` → **Output:** `-1`  
3. **Input:** `arr = [99, 100, 101], target = 99` → **Output:** `0`  

---

### 🟢 **5. Reverse an Array**  
**Description:**  
Write a function to reverse a given array in-place without using any extra space.  

**Test Cases:**  
1. **Input:** `arr = [1, 2, 3, 4, 5]` → **Output:** `[5, 4, 3, 2, 1]`  
2. **Input:** `arr = [7, 9, 11]` → **Output:** `[11, 9, 7]`  
3. **Input:** `arr = [10]` → **Output:** `[10]`  

---
