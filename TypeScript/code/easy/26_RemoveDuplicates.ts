function removeDuplicates(nums: number[]) : number {
    let numSet = [...new Set(nums)]
    nums.length = 0
    nums.push(...numSet)
    return nums.length
}

export function RemoveDuplicates(){
    // let nums = [0,0,1,1,1,2,2,3,3,4]
    let nums = [1,1,2]
    console.log(removeDuplicates(nums))
}