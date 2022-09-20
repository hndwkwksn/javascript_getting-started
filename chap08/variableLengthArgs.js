"use strict";
function concatenate1(...name) {
    let concatenatedName = "";
    for(let i = 0; i < name.length; i++) {
        concatenatedName += name[i];
        if(i != name.length - 1) {
            concatenatedName += "・";
        }
    }
    return concatenatedName;
}

let lName2 = "中田";
let fName2 = "翔";
let name10 = concatenate1(fName2, lName2);
console.log("結合結果：" + name10);

let picasso = concatenate1("パブロ", "ディエゴ", "ホセ", "フランシスコ", "デ", "パウラ", "ファン", "ネポムセーノ", "マリア", "デ", "ロス", "レメディオス", "シプリアノ", "デ", "ラ", "サンティシマ", "トリニダード", "ルイス", "ピカソ");
console.log("ピカソの本名：" + picasso)