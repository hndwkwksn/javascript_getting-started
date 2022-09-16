"use strict";
let score1 = Math.round(Math.random() * 100);
console.log("得点：" + score1);

if(score1 >= 80) {
    console.log("優");
} if(score1 >= 70) {
    console.log("良");
} if(score1 >= 60) {
    console.log("可");
} else {
    console.log("不可");
}