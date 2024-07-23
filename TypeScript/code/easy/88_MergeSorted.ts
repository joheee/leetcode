function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    nums1.length = m
    nums2.length = n

    nums1.push(...nums2)
    nums1.sort((a,b) => a-b)

    console.log(nums1)
};

export function MergeSorted(){
    let nums1 = [1,2,3,0,0,0]
    let m = 3
    let nums2 = [2,5,6]
    let n = 3
    merge(nums1,m,nums2,n)
}