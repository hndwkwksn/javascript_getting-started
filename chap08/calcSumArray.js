"use strict";
function calcArraySum(list) {
    let sums = 0;
    for(let num of list) {
        sums += num;
    }
    return sums;
}

let list7 = [5, 6, 10, 55, 4, 9];
let list8 = [2, 7, 66, 4, 9];
let list9 = [8, 6, 13, 6, 9, 11, 5];

let sums1 = calcArraySum(list7);
let sums2 = calcArraySum(list8);
let sums3 = calcArraySum(list9);

console.log("list7の合計：" + sums1);
console.log("list8の合計：" + sums2);
console.log("list9の合計：" + sums3);