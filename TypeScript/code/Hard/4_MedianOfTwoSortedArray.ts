function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    let concat = nums1.concat(nums2).sort((a,b) => a - b)
    return concat.length % 2 === 0 ? (concat[concat.length / 2] + concat[concat.length / 2 - 1]) / 2 : concat[Math.floor(concat.length / 2)]
};

export function MedianOfTwoSortedArray(){
    let nums1 = [-2,-1]
    let nums2 = [3]
    console.log(findMedianSortedArrays(nums1, nums2))
}