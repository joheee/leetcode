"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IntersectionOfTwoArrays = void 0;
// first approach using set
class CustomSet {
    constructor() {
        this.data = [];
    }
    // O(data.length)
    add(element) {
        if (!this.data.includes(element)) {
            this.data.push(element);
        }
    }
    // O(1)
    get() {
        return this.data;
    }
}
function intersectionSets(nums1, nums2) {
    let set = new CustomSet();
    // O(nums1.length)
    nums1.forEach((n1) => {
        // O(nums2.length)
        nums2.forEach((n2) => {
            //O(min(nums1.length, nums2.length))
            if (n1 === n2)
                set.add(n2);
        });
    });
    // O(nums1.length * nums2.length * min(nums1.length, nums2.length))
    return set.get();
}
function intersection(nums1, nums2) {
    return intersectionSets(nums1, nums2);
}
function IntersectionOfTwoArrays() {
    const num1 = [4, 9, 5];
    const num2 = [9, 4, 9, 8, 4];
    console.log(intersection(num1, num2));
}
exports.IntersectionOfTwoArrays = IntersectionOfTwoArrays;
