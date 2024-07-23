function search(nums: number[], target: number): number {
    return nums.indexOf(target)
};

export function SearchInRotated(){
    let nums = [4,5,6,7,0,1,2]
    console.log(search(nums,0))
}