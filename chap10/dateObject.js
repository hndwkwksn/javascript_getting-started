"use strict";
let jobs = new Date(2011, 9, 5); //1
console.log("ジョブズの命日：" + jobs.toDateString()); //2
console.log("ジョブズの命日：" + jobs.toLocaleDateString()); //3

let month = jobs.getMonth(); //4
jobs.setMonth(month + 1); //5
console.log("1ヵ月後：" + jobs.toLocaleDateString());

let date = jobs.getDate(); //6
jobs.setDate(date - 6); //7
console.log("6日前：" + jobs.toLocaleDateString());