from collections import defaultdict
from typing import List


class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        dictionary = defaultdict(int)
        for i in nums:
                dictionary[i] += 1
        arrayToReturn = sorted(list(dictionary.items()), key= lambda i: i[1], reverse=True)
        print(arrayToReturn)
        
        return list(map(lambda i: i[0], arrayToReturn[0:k]))
    
solution = Solution()
print(solution.topKFrequent([1,1,1,2,2,3], 2))



