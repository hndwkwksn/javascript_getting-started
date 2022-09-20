function concatenate2(lastName = "", firstName = "", space = "") {
    return lastName + space + firstName;
}

let nameParam1 = ["中田", "雄二", "・"];
let name11 = concatenate2(...nameParam1);
console.log("・で結合:" + name11);

let nameParam2 = ["中田", "雄二"];
let name12 = concatenate2(...nameParam2);
console.log("空文字で結合:" + name12);