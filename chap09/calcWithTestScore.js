let takashi = new TestScore();
takashi.setData("たかし", 92, 87, 74);
takashi.printScore();

let emi = new TestScore();
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