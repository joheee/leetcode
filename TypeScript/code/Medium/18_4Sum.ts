function fourSum(nums: number[], target: number): number[][] {
    let res : number[][] = []
    let n = nums.length
    nums.sort((a,b) => a-b)

    for (let i = 0; i < n - 3; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        for (let j = i + 1; j < n - 2; j++) {
            if (j > i + 1 && nums[j] === nums[j - 1]) continue;

            let left = j + 1;
            let right = n - 1;

            while (left < right) {
                const sum = nums[i] + nums[j] + nums[left] + nums[right];

                if (sum === target) {
                    res.push([nums[i], nums[j], nums[left], nums[right]]);

                    while (left < right && nums[left] === nums[left + 1]) left++;
                    while (left < right && nums[right] === nums[right - 1]) right--;

                    left++;
                    right--;
                } else if (sum < target) {
                    left++;
                } else {
                    right--;
                }
            }
        }
    }
    return res
};

export function Four_Sum(){
    // let nums = [-1,0,1,2,-1,-4]
    // let nums = [0,0,0]
    // let nums = [1,-1,-1,0]
    let nums = [-2,0,0,2,1]
    console.log(fourSum(nums,1))
}