1. Bubble sort is comparing two adjacent element and swap it

2. complexities > worst case = 0(n^2) best case = 0(n)

3. sapce = 0(1)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/04971dc9-ce32-4f68-a9bf-40648bd22645/Untitled.png)

```jsx
----------------------Bubble sort------------------

(  Problem -- [ 1 ])

function bblsort(arr){
                  // declear veriable for swapping the element
    let swapped = false;
                  //looping on array
    for (let i=0; i < arr.length-1; i++){
                   // swapping condition
         swapped = false;
                   // looping on elements on first loop
        for(let j=0; j < arr.length-1-i; j++){
                   // condition for swapping the two element
           if (arr[j] > arr[j+1]){
                   // swapping program
            let temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;
            swapped = true;
           }
        }
                   // condition if noting is swapping in secong loop than break
      if(!swapped){
        break;
      }

    }
    return arr;
}

console.log(bblsort([1,4,5,6,74,5,5447,6,5346,3,478,986,43,45,6,789,4,67,8,56,4,6,789,9,445,53]));

//=================================================================================================
```

1. **Time Complexity:** O(N^2)

2. **Auxiliary Space:** O(1)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/7deae1e6-8180-4244-9f12-a447607ae049/Untitled.png)

```jsx
//----------------insertion using normal method(while loop)---------------------

(  Problem -- [ 2 ])

function insertionsort(arr){
    let curr;
                // loop for iterate on array
    for (let i = 1; i<arr.length;i++){
              // storing for temperory in curr array
        curr = arr[i];
             // for second loop start from 1(element) , 0th element assume as a sorted element [ 0,(1),2,3,4,5,6,]
        j = i-1;
               // condition jth value is greater than 0  &&(and)   arr[j] is greater than element stored in curr variable  than swapp it
       while (j >=0 && arr[j]>curr){
              //  declering  both element is equal [12,43,23] =>
        arr[j+1] = arr[j];
           //  declering   [12,23,43]
        j=j-1;
       }
           //(curr) to permenent array(arr)
     arr[j+1] = curr;
    }
    return arr;
}

let arr = [12,43,54,56,7,457,79,745,687,64,34]
console.log(insertionsort(arr));
========================================================================================
```

```jsx
//----------insertion using for loop------------

(  Problem -- [ 2(A) ])

function insertion(array){
    for (i = 1; i < array.length; i++){
        for (j = i; j > 0; j--){
            if ( array[j]<array[j-1]) {
        [array[j] , array[j-1]] = [array[j-1] , array[j]]
            }else {
                break;
            }
        }
    }
    return array;
}
let array  = [43, 6, 78, 28, 66];
console.log(insertion(array));
//====================================================================================*/
```

**Time Complexity** = O(N) * O(N) = O(N*N) = O(N2)

**Auxiliary Space:**  O(1)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/b2985674-5846-487e-82e5-7e1143d2ba14/Untitled.png)

```jsx
/----------------------------- selection sorting-------------------------------------

//[Problem( 3 )]

function selectionsort(arr) {
    let min_index;
    // one by one gating the min element as a min_index
    for (let i = 0; i < arr.length - 1; i++) {
        //gating  i(th) element as a min_index
        min_index = i;
        //iterating on a inner loop
        for (let j = i + 1; j < arr.length; j++) {
            // comparing with min_index
            if (arr[j] < arr[min_index]) {
                min_index = j;
                // swapping with the min_index
                temp = arr[min_index];
                arr[min_index] = arr[i];
                arr[i] = temp;
            }
        }
    }
    return arr;
}
let arr = [2, 4, 5, 7, 3, 4, 6, 26, 2, 362, 3];
console.log(selectionsort(arr));  */
//=======================================================
```

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/9d6cdc01-a088-4c78-a517-e47677439a15/Untitled.png)

**Time Complexity:** O(N log(N))

**Auxiliary Space: O(n)**

```jsx
//------------------------Merge Sort------------------------

//(problem[ 4 ]);

function mergeSort(arr){
    let half = arr.length/2;
    if(arr.length<=1){
        return arr;
    }
    const left = arr.splice(0,half);
    const right = arr;

    let leftSorted = mergeSort(left);
    let rightsorted = mergeSort(right);

    return merge(leftSorted,rightsorted);
}

function merge(L,R){
    let sortedarr = [];

    while ( L.length && R.length){
        if(L[0]<R[0]){
            sortedarr.push(L.shift());

        }else{
            sortedarr.push(R.shift());
        }

    }
    return [...sortedarr,...L,...R];
}

let arr = [3,4,5,2,3,52,34,63,2];

console.log(mergeSort(arr)); */

//=====================================================================
```

```jsx
function quickSort(arr) {
  if (arr.length <= 1) return arr;
  let pivot = arr[0];
  let left = [];
  let right = [];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}
const arr = [23, 43, 57, 23, 1, 64, 12, 9];

console.log(quickSort(arr));
```

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/49206b29-30f1-4f23-9ea6-9dff62269de1/Untitled.png)

[Neeraj sir Code ](https://www.notion.so/Neeraj-sir-Code-f756b9cffa0b4a079354bb829b0eacf8?pvs=21)

[Quick Sort using simple function ](https://www.notion.so/Quick-Sort-using-simple-function-6bd4f4aab62d4fcdb18315bf6db9ac24?pvs=21)

[freecodecamp](https://www.notion.so/freecodecamp-fc7599e7bf174e8387fd9c8383006981?pvs=21)

[Easy code ](https://www.notion.so/Easy-code-4dd9922685c94e2d970d4237b2114a0a?pvs=21)

[My practice code](https://www.notion.so/My-practice-code-e80b3f71f7f641f696c24f25b2d50ea2?pvs=21)

1. counting sort is a non comparision based sorting algorithm

2. in this sorting you have given a range of the array like = range is 5 so array will be

[ 2,3,1,3,1,2,4,3]

3. and input size is also given in this array [ 2,3,1,3,1,2,4,3] size is 8

4. range

| 1) ~~1~~ 2       |
| ---------------- |
| 2) ~~1~~ 2       |
| 3) ~~1~~ ~~2~~ 3 |
| 4) 1             |
| 5) 0             |

5. output is 2 times 1 , 2 times 2 , 3 times 3 , 4 times 1 , o times 5 =⇒[ 1,1,2,2,3,3,3,4]

6. time compalixicity is 0(n+k) 0(n);

```jsx
function countingsort(arr) {
  let count = [];
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  for (let i = min; i <= max; i++) {
    count[i] = 0;
  }
  for (i = 0; i < arr.length; i++) {
    count[arr[i]]++;
  }
  const sortedarr = [];
  for (i = min; i <= max; i++) {
    while (count[i] > 0) {
      sortedarr.push(i);
      count[i]--;
    }
  }
  return sortedarr;
}

let array = [2, 3, 1, 3, 1, 2, 4, 3];
console.log(countingsort(array));

/* output is [
  1, 1, 2, 2,
  3, 3, 3, 4
]*/
```

1.  Each element is a separate object that contains a `pointer` or a `link` to the next object in that list

2.  Each element (commonly called `nodes`)

3.  The entry point to a linked list is called the **head.** The head is a reference to the first node in the linked list

4.  The last node on the list points to **null**

5.  properties:

- `value`: The value of the element
- `next`: A pointer to the next element in the linked list (`null` if there is none)

```jsx
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class Linkedlist {
  constructor(head = null) {
    this.head = head;
    this.tail = head;
    if (this.head == null) {
      this.length = 0;
    } else {
      this.length = 1;
    }
  }
  appand(value) {
    const newnode = new Node(value);
    if (this.head == null) {
      this.head = newnode;
      this.tail = newnode;
    } else {
      this.tail.next = newnode;
      this.tail = newnode;
    }
    this.length++;
  }
  insertatbegning(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }
  getAt(index) {
    let counter = 0;
    let current = this.head;
    while (current != index) {
      if (counter === index) {
        return current;
      }
      counter++;
      current = current.next;
    }
  }
  insertAt(value, index) {
    if (this.head == null) {
      this.head = new Node(value);
      return;
    }

    if (index == 0) {
      this.insertAtBegining(value);
      return;
    }

    const previous = this.getAt(index - 1);
    let newNode = new Node(value);
    newNode.next = previous.next;
    previous.next = newNode;
  }

  deleteForBegining() {
    if (this.head == null) {
      return;
    }

    this.head = this.head.next;
    return;
  }

  print() {
    let current = this.head;
    if (current == null) {
      console.log("List is Empty");
      return;
    }
    while (current != null) {
      console.log(current.value);
      current = current.next;
    }
  }

  getlast() {
    let current = this.head;
    if (current) {
      while (current.next) {
        current = current.next;
      }
    }
    return current;
  }
  getfirst() {
    return this.head;
  }
  clear() {
    this.head = null;
  }
  size() {
    let count = 0;
    let node = this.head;
    while (node) {
      count++;
      node = node.next;
    }
    return count;
  }
}
let node = new Node(100);
let list = new Linkedlist(node);
list.appand(200);
list.insertatbegning(300);
console.log(list.getAt(0));
list.print();

// let node_1 = new Node(100);
// let node_2 = new Node(200);
// let node_3 = new Node(300);
// node_1.next = node_2;
// node_1.next.next = node_3;
// let list = new Linkedlist(node_1);
// console.log(list.head);
// const mylist = new Linkedlist();
// console.log(list.getlast())
// console.log(list.size())
// console.log(list.getfirst())
// console.log(list.clear())
```

point 1) = stack is a linear (DS)

point 2) = stack follow LIFO order (last in first out)

stack implementation using functional programming

```jsx
// create a result in JavaScript

function CreateStack(maxSize = 10) {
  const _stack = [];
  let _top = -1;

  // Add on top
  function push(val) {
    if (_top >= maxSize - 1) {
      return "result overflow";
    } else {
      _stack.push(val);
      _top++;
    }
  }

  // remove from top
  function pop() {
    if (_top > -1) {
      _top--;
      return _stack.pop();
    } else {
      return null;
    }
  }

  // get lenght
  function size() {
    return _top + 1;
  }

  // get the top value
  function peek() {
    if (_top > -1) {
      return _stack[_top];
    } else {
      return null;
    }
  }

  // print as string
  function print() {
    console.log(_stack.toString());
  }

  // find value
  function search(val) {
    const temp = [];
    let found = null;

    while (_top > -1) {
      if (_stack[_top] === val) {
        found = _top;
        break;
      }
      temp.push(_stack.pop());
      _top--;
    }

    const templen = temp.length;

    for (let i = 0; i < templen; i++) {
      _stack.push(temp.pop());
    }

    return found;
  }

  // empty the result
  function empty() {
    while (_top > -1) {
      _stack.pop();
      _top--;
    }
  }

  return { push, print, pop, size, peek, search, empty };
}

const myStack = CreateStack(1000);

myStack.push("hi");
myStack.push("hello");
myStack.pop();
myStack.print();
```

1. FIFO(First in First Out)

2. Queue is a [**linear data structure**](https://www.geeksforgeeks.org/overview-of-data-structures-set-1-linear-data-structures/)

.

```
class queue{
    constructor(capacity){
        this.capacity=capacity;
        this.size=0;
        this.front=0;
        this.arr=[];

    };
    isfull(){
        return this.size===this.capacity;
    };
    size(){
        return this.arr.length;
    }
    equeue(element){
        if(this.isfull()){
            console.log("Capacity full");
            return;
    }
    let rear = (this.front + this.size-1)%this.capacity;

    rear = (rear+1)%this.capacity;
    this.arr[rear]=element;

    }
    dequeue(element){

    }
    peek(element){

    }
}
```
