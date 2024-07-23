"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MedianOfTwoSortedArray = void 0;
function findMedianSortedArrays(nums1, nums2) {
    let concat = nums1.concat(nums2).sort((a, b) => a - b);
    return concat.length % 2 === 0 ? (concat[concat.length / 2] + concat[concat.length / 2 - 1]) / 2 : concat[Math.floor(concat.length / 2)];
}
;
function MedianOfTwoSortedArray() {
    let nums1 = [-2, -1];
    let nums2 = [3];
    console.log(findMedianSortedArrays(nums1, nums2));
}
exports.MedianOfTwoSortedArray = MedianOfTwoSortedArray;
