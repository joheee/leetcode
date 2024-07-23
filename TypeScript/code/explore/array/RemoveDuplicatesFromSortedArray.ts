function removeDuplicates(nums: number[]): number {
  let ans = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i - 1] === nums[i]) ans++;
    else nums[i - ans] = nums[i];
  }
  return nums.length - ans;
}

export function RemoveDuplicatesFromSortedArray() {
  const nums = [1, 1, 1, 2, 3, 4, 5, 5, 6];
  console.log(removeDuplicates(nums));
}
