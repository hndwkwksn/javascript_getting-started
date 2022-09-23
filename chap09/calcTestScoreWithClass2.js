"use strict";
class TestScore2 {
    constructor() {
        this.name = "";
        this.english = 0;
        this.math = 0;
        this.japanese = 0;
    }
}

function printScore(student) {
    let sum = student.english + student.math + student.japanese;
    let ave = sum / 3;
    console.log(student.name + "さんの合計：" + sum + "平均：" + ave);
}

let taichi = new TestScore2();
taichi.name = "たいち";
taichi.english = 92;
taichi.math = 87;
taichi.japanese = 74;
printScore(taichi);

let keiko = new TestScore2();
keiko.name = "けいこ";
keiko.english = 79;
keiko.math = 95;
keiko.japanese = 83;
printScore(keiko);