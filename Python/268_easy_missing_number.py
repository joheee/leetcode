class Solution:
    def partition(self, arr: List[int], l: int, r: int) -> int:
        pivot = arr[r]
        i = l - 1
        for j in range(l, r):
            if arr[j] <= pivot:
                i += 1
                arr[i], arr[j] = arr[j], arr[i]
        arr[i + 1], arr[r] = arr[r], arr[i + 1]
        return i + 1

    def quick_sort(self, arr: List[int], l: int, r: int):
        if l < r:
            pi = self.partition(arr, l, r)
            self.quick_sort(arr, l, pi - 1)
            self.quick_sort(arr, pi + 1, r)

    def missingNumber(self, nums: List[int]) -> int:
        self.quick_sort(nums, 0, len(nums) - 1)
        for i in range(len(nums)):
            if nums[i] != i:
                return i
        return len(nums)
