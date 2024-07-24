def partition(arr, l, r):
    pivot = arr[r]
    i = l-1
    for j in range(l, r):
        if arr[j] <= pivot:
            i += 1
            arr[i], arr[j] = arr[j], arr[i]
    arr[i+1], arr[r] = arr[r], arr[i+1]
    return i + 1

def quick_sort(arr, l, r):
    if l < r:
        pi = partition(arr, l, r)
        quick_sort(arr, l, pi-1)
        quick_sort(arr,pi+1,r)

class Solution:
    def sortColors(self, nums: list[int]) -> None:
        quick_sort(nums, 0,len(nums)-1)
        print(nums)
        
s = Solution()
s.sortColors([2,0,2,1,1,0])