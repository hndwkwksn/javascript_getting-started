"use strict";
let list1 = [2, 7, 66, 4, 9];
list1.forEach(
    function(currentValue, index, array) {
        console.log((index + 1) + "個目の値：" + currentValue);
    }
)