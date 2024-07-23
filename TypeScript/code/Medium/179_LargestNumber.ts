function largestNumber(nums: number[]): string {
    if(nums.reduce((acc,i) => acc+i,0) === 0) return '0'
    nums.sort((a,b) => parseInt((`${b}${a}`)) - parseInt((`${a}${b}`)))
    return nums.join('')
};

export function LargestNumber() {
    let num = [10,2]
    console.log(largestNumber(num))
}