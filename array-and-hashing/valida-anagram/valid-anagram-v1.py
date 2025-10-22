class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False
        sMap = {}
        tMap = {}
        for i in range(len(s)):
            if sMap.get(s[i]) == None:
                sMap[s[i]] = 1
            else:
                sMap[s[i]] = sMap[s[i]] + 1
            if tMap.get(t[i]) == None:
                tMap[t[i]] = 1
            else:
                tMap[t[i]] = tMap[t[i]] + 1
        for key, value in sMap.items():
            if tMap.get(key) == None:
                return False
            else:
                if tMap.get(key) != value:
                    return False
        return True



solution = Solution()
print(solution.isAnagram("anagram", "nagaram"))
