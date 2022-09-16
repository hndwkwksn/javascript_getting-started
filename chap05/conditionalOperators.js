"use strict";
let num1 = Math.round(Math.random() * 100);
console.log("現在の値：" + num1);

if((num1 % 2 === 0) && (num1 % 3 === 0)) {
    console.log("2の倍数でしかも3の倍数です。");
} else {
    console.log("それ以外です。");
}