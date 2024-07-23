type obj = {
    [key: number]: number;
}

function twoSum(nums: number[], target: number): number[] {
    const hMap: obj = {};
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (hMap.hasOwnProperty(complement)) {
            return [hMap[complement], i];
        }
        hMap[nums[i]] = i;
    }
    return [];
};

export function Two_Sum(){
    let nums = [2,7,11,15]
    // let nums = [3,2,4]
    // let nums = [2,5,5,11]
    console.log(twoSum(nums,9))
}