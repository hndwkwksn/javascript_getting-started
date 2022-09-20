"use strict";
function concatenate(lastName = "", firstName = "", space = "") {
    return lastName + space + firstName;
}

let lName1 = "中田";
let fName1 = "雄二";
let name5 = concatenate(lName1, fName1, " ");
console.log("半角スペースで結合:" + name5);

let name6 = concatenate(lName1, fName1);
console.log("第３引数の渡し忘れ:" + name6);

let name7 = concatenate(lName1);
console.log("第２第３引数の渡し忘れ:" + name7);

let name8 = concatenate();
console.log("全ての引数の渡し忘れ:" + name8);

let name9 = concatenate(undefined, "美奈子");
console.log("引数にundefined:" + name9);