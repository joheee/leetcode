class Solution:
    def majorityElement(self, nums: list[int]) -> int:
        dic = {}
        for n in nums:
            if n not in dic:
                dic[n] = 0
            dic[n] += 1
        
        max = 0
        elem = 0
        for k, v in dic.items():
            if v >= max:
                max = v
                elem = k
        
        return elem

s = Solution()
print(s.majorityElement([4,2,2,1,1,3,5,4,4,4,5,3]))