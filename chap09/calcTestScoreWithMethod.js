"use strict";
class TestScore {
    constructor() {
        this.name = "";
        this.english = 0;
        this.math = 0;
        this.japanese = 0;
    }
    printScore() {
        let sum = this.english + this.math + this.japanese;
        let ave = sum / 3;
        console.log(this.name + "さんの合計：" + sum + "平均：" + ave);
    }
}

let taichi = new TestScore();
taichi.name = "たいち";
taichi.english = 92;
taichi.math = 87;
taichi.japanese = 74;
taichi.printScore();

let keiko = new TestScore();
keiko.name = "けいこ";
keiko.english = 79;
keiko.math = 95;
keiko.japanese = 83;
keiko.printScore();