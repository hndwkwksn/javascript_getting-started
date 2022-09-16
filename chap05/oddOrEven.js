"user strict";
let num1 = Math.round(Math.random() * 100);
console.log("現在の値：" + num1);

let rem = num1 % 2;

if(rem == 0) {
    console.log("数値は偶数です。");
} else {
    console.log("数値は奇数です。");
}
console.log("処理完了！");