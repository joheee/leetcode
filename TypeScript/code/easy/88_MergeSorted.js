"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MergeSorted = void 0;
function merge(nums1, m, nums2, n) {
    nums1.length = m;
    nums2.length = n;
    nums1.push(...nums2);
    nums1.sort((a, b) => a - b);
    console.log(nums1);
}
;
function MergeSorted() {
    let nums1 = [1, 2, 3, 0, 0, 0];
    let m = 3;
    let nums2 = [2, 5, 6];
    let n = 3;
    merge(nums1, m, nums2, n);
}
exports.MergeSorted = MergeSorted;
