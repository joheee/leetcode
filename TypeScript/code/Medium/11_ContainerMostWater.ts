function maxArea(height: number[]): number {
    let max = 0
    let left = 0
    let right = height.length - 1
    while(left < right) {
        
        let h = Math.min(height[left], height[right])
        let w = right - left

        max  = Math.max(max, w * h)

        if(height[left] < height[right]) left++
        else right--
    }    

    return max
}

export function ContainerMostWater(){
    let height = [1,8,6,2,5,4,8,3,7]
    // let height = [1,2,3,4]
    // let height = [1,1]

    console.log(maxArea(height))
}