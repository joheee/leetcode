"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemoveElement = void 0;
function removeElement(nums, val) {
    let numFilter = nums.filter(n => n !== val);
    nums.length = 0;
    nums.push(...numFilter);
    return nums.length;
}
function RemoveElement() {
    let nums = [3, 2, 2, 3];
    console.log(removeElement(nums, 3));
}
exports.RemoveElement = RemoveElement;
