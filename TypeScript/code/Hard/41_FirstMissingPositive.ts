function firstMissingPositive(nums: number[]): number {
    const n = nums.length;
  
    // Step 1: Move all positive numbers to their correct positions
    for (let i = 0; i < n; i++) {
        while (nums[i] > 0 && nums[i] <= n && nums[nums[i] - 1] !== nums[i]) {
            // Swap nums[i] to its correct position
            [nums[nums[i] - 1], nums[i]] = [nums[i], nums[nums[i] - 1]];
        }
    }
  
    // Step 2: Find the first missing positive number
    for (let i = 0; i < n; i++) {
        if (nums[i] !== i + 1) {
            return i + 1;
        }
    }
  
    // All positive numbers from 1 to n are present, return the next positive number
    return n + 1;
}
  

export function FirstMissingPositive(){
    // let num = [1,2,0]
    // let num = [7,8,9,11,12]
    // let num = [3,4,-1,1]
    let num = [1,2,3,10,2147483,9]
    console.log(firstMissingPositive(num))
}