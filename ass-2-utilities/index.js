const { sum, concat } = require("./utilities/util1");
const { lgNum, cut3 } = require("./utilities/util2");
const arr = [1, 2, 3, 4, 5, 6];
const arr2 = [7, 8, 9, 10];

console.log(sum(arr));
console.log(concat(arr, arr2));
console.log(lgNum(arr));
console.log(cut3(arr));
