"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DivideTwoInteger = void 0;
function divide(dividend, divisor) {
    if (dividend === -2147483648 && divisor === -1)
        return 2147483647;
    let dividendNegative = false;
    let divisorNegative = false;
    let neutralDividend = dividend;
    let neutralDivisor = divisor;
    if (neutralDividend < 0) {
        dividendNegative = true;
        neutralDividend = -1 * dividend;
    }
    if (neutralDivisor < 0) {
        divisorNegative = true;
        neutralDivisor = -1 * divisor;
    }
    let res = Math.floor(neutralDividend / neutralDivisor);
    if (dividendNegative && divisorNegative)
        return res;
    else if (!dividendNegative && divisorNegative)
        return -1 * res;
    else if (dividendNegative && !divisorNegative)
        return -1 * res;
    else
        return res;
}
;
function DivideTwoInteger() {
    console.log(divide(7, -3));
}
exports.DivideTwoInteger = DivideTwoInteger;
