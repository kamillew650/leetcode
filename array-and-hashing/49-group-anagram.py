from typing import List


class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        dictionary = {}
        for i in strs:
            sortedString = "".join(sorted(i))
            if dictionary.get(sortedString) == None:
                dictionary[sortedString] = [i]
            else:
                dictionary[sortedString].append(i)
        return list(dictionary.values())
    
solution = Solution()
print(solution.groupAnagrams(["eat","tea","tan","ate","nat","bat"]))