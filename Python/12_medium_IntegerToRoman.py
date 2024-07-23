class Solution:
    def intToRoman(self, num: int) -> str:
        romanDic = {
            1000: 'M',
            900: 'CM',
            500: 'D',
            400: 'CD',
            100: 'C',
            90: 'XC',
            50: 'L',
            40: 'XL',
            10: 'X',
            9: 'IX',
            5: 'V',
            4: 'IV',
            1: 'I'
        }

        res = ''
        for k in sorted(romanDic.keys(), reverse=True):
            res += (num // k) * romanDic[k]
            num %= k
        return res

s = Solution()
print(s.intToRoman(69))