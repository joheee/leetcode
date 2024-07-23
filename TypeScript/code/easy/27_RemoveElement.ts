function removeElement(nums: number[], val: number): number {
    let numFilter = nums.filter(n => n !== val)
    nums.length = 0
    nums.push(...numFilter)
    return nums.length
}

export function RemoveElement(){
    let nums = [3,2,2,3]
    console.log(removeElement(nums,3))
}