function threeSum(nums: number[]): number[][] {
    let res : number[][] = []
    let n = nums.length
    nums.sort((a,b) => a-b)

    for(let i=0;i<n-2;i++){
        if(i>0 && nums[i] === nums[i-1]) continue

        let left = i+1
        let right = n-1
        
        while(left < right) {
            let sum = nums[i] + nums[left] + nums[right]
            if(sum === 0) {
                res.push([nums[i],nums[left],nums[right]])

                while (left < right && nums[left] === nums[left + 1]) left++
                while (left < right && nums[right] === nums[right - 1]) right--

                left++
                right--
            } else if(sum < 0) left++
            else right--
        }
    }
    return res
}

export function Three_Sum() {
    // let nums = [-1,0,1,2,-1,-4]
    // let nums = [0,0,0]
    // let nums = [1,-1,-1,0]
    let nums = [-2,0,0,2,2]
    console.log(threeSum(nums))
}