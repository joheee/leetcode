"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LargestNumber = void 0;
function largestNumber(nums) {
    if (nums.reduce((acc, i) => acc + i, 0) === 0)
        return '0';
    nums.sort((a, b) => parseInt((`${b}${a}`)) - parseInt((`${a}${b}`)));
    return nums.join('');
}
;
function LargestNumber() {
    let num = [10, 2];
    console.log(largestNumber(num));
}
exports.LargestNumber = LargestNumber;
