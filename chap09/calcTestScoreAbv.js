"use strict";
class TestScore3 {
    constructor() {
        this.name = "";
        this.english = 0;
        this.math = 0;
        this.japanese = 0;
    }
    setData(name = "", english = 0, math = 0, japanese = 0) {
        this.name = name;
        this.english = english;
        this.math = math;
        this.japanese = japanese;
    }
    calcSum() {
        let sum = this.english + this.math + this.japanese;
        return sum;
    }
    calcAve() {
        let sum = this.calcSum();
        let ave = sum / 3;
        return ave;
    }
    printScore() {
        let sum = this.calcSum();
        let ave = this.calcAve();
        console.log(this.name + "さんの合計：" + sum + "平均：" + ave);
    }
}

let takashi = new TestScore3();
takashi.setData("たかし", 92, 87, 74);
takashi.printScore();

let emi = new TestScore3();
emi.setData("えみ", 79, 95, 83);
emi.printScore();

let takashiSum = takashi.calcSum();
let emiSum = emi.calcSum();
let ave2 = (takashiSum + emiSum) / 2;
console.log("二人の合計の平均：" + ave2);

let takashiAve = takashi.calcAve();
let emiAve = emi.calcAve();
let aveAve = (takashiAve + emiAve) / 2;
console.log("二人の平均の平均：" + aveAve);