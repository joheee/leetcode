function sortColors(nums: number[]): void {
    nums.sort((a,b) => a-b)
    console.log(nums)
};

export function SortColor(){
    let nums = [2,0,2,1,1,0]
    sortColors(nums)
}
