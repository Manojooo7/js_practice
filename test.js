const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

/* Write your code below. Good luck! 🙂 */

let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tip = [];
let total = [];

for (let i = 0; i < bills.length; i++) {
    const tips = calcTip(bills[i]);
    tip.push(tips);
    const totals = tips + bills[i];
    total.push(totals)
}

console.log(tip);
// console.log(total);

// calcArage

let sum = [2, 3, 4];

// how to get sum of the bills array

const calcAverage = function (arr) {
    arr = sum;
    return arr.reduce((acc, item) => acc + item, 0) / arr.length;
}

// console.log(calcAverage(total));



