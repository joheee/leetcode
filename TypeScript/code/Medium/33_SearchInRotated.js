"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchInRotated = void 0;
function search(nums, target) {
    return nums.indexOf(target);
}
;
function SearchInRotated() {
    let nums = [4, 5, 6, 7, 0, 1, 2];
    console.log(search(nums, 0));
}
exports.SearchInRotated = SearchInRotated;
