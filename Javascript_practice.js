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


function Counter() {
    let count = 0;

    return {
        increment: function () {
            count = count + 10;
        },
        decrement: function () {
            count--;
        },
        getCount: function () {
            return count;
        }
    }
}

let counter = Counter();
counter.increment();
counter.decrement();
console.log(counter.getCount())