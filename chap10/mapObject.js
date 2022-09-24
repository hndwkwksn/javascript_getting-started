"use strict";
let studentNumList = new Map();  //①
studentNumList.set("A", 30);
studentNumList.set("B", 31);
studentNumList.set("C", 29);  //②
studentNumList.set("D", 30);
studentNumList.set("E", 32);

let count = studentNumList.size;  //③
console.log("要素数：" + count);
let studentNumC = studentNumList.get("C");  //④
console.log("C組の人数：" + studentNumC);

for(let [key, value] of studentNumList) { //⑤
    console.log("キーは" + key + "で値は" + value);
}