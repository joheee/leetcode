"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemoveDuplicates = void 0;
function removeDuplicates(nums) {
    let numSet = [...new Set(nums)];
    nums.length = 0;
    nums.push(...numSet);
    return nums.length;
}
function RemoveDuplicates() {
    // let nums = [0,0,1,1,1,2,2,3,3,4]
    let nums = [1, 1, 2];
    console.log(removeDuplicates(nums));
}
exports.RemoveDuplicates = RemoveDuplicates;
