class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        sortedS = sorted(s)
        sortedT = sorted(t)
        if sortedS != sortedT:
            return False
        return True



solution = Solution()
print(solution.isAnagram("anagram", "nagaram"))
