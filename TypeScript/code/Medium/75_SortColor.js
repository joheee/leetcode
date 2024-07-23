"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SortColor = void 0;
function sortColors(nums) {
    nums.sort((a, b) => a - b);
    console.log(nums);
}
;
function SortColor() {
    let nums = [2, 0, 2, 1, 1, 0];
    sortColors(nums);
}
exports.SortColor = SortColor;
