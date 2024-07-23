"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IntersectionOfTwoArrays2 = void 0;
function convertHashMap(nums) {
    let map = {};
    nums.forEach((n) => {
        if (map[n] === undefined)
            map[n] = 0;
        map[n]++;
    });
    return map;
}
function min(a, b) {
    return a <= b ? a : b;
}
function intersect(nums1, nums2) {
    // O(nums1.length)
    let map1 = convertHashMap(nums1);
    // O(nums2.length)
    let map2 = convertHashMap(nums2);
    let arr = [];
    // O(1001)
    for (let i in map1) {
        if (map1[i] !== undefined && map2[i] !== undefined) {
            let minVal = min(map1[i], map2[i]);
            // O(minVal)
            while (minVal > 0) {
                arr.push(parseInt(i));
                minVal--;
            }
        }
    }
    // O((nums1.length + nums2.length) * 1001 * minVal)
    // O(min(nums1.length, nums2.length) * 1001)
    // O(nums1.length + nums2.length)
    return arr;
}
function IntersectionOfTwoArrays2() {
    const num2 = [2, 2, 2, 2, 3, 4];
    const num1 = [1, 2, 2, 2, 1];
    // const num2: number[] = [9, 4, 9, 8, 4];
    // const num1: number[] = [4, 9, 5];
    console.log(intersect(num1, num2));
}
exports.IntersectionOfTwoArrays2 = IntersectionOfTwoArrays2;
