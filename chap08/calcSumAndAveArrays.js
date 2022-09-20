"use strict";
function calcArraySum(list) {
    let sumse = 0;
    for(let num of list) {
        sumse += num;
    }
    return sumse;
}
function calcAve(list) {
    let sumse = calcArraySum(list);
    let length = list.length;
    return sumse / length;
}

let list10 = [5, 6, 10, 55, 4, 9];
let list11 = [2, 7, 66, 4, 9];
let list12 = [8, 6, 13, 6, 9, 11, 5];

let sumse4 = calcArraySum(list10);
let sumse5 = calcArraySum(list11);
let sumse6 = calcArraySum(list12);

let ave1 = calcAve(list10);
let ave2 = calcAve(list11);
let ave3 = calcAve(list12);

console.log("list10の合計：" + sumse4 + "；平均：" + ave1);
console.log("list11の合計：" + sumse5 + "；平均：" + ave2);
console.log("list12の合計：" + sumse6 + "；平均：" + ave3);