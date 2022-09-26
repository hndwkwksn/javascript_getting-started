"use strict";
let jobs = new Date(2011, 9, 5); //1
let jobsMills = jobs.getTime(); //2

let now = new Date(); //3
console.log("現在の日時：" + now.toLocaleDateString());
let nowMills = now.getTime(); //4
let diffMills = nowMills - jobsMills; //5
let diffDate = diffMills / (1000 * 60 * 60 * 24); //6
console.log("ジョブズの命日からの経過日：" + Math.floor(diffDate) + "日"); //7
