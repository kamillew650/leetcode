function lengthOfLongestSubstring(s: string): number {
    let maxLength = Number.MIN_SAFE_INTEGER;
    let substring: string[] = [];

    if(s.length === 0) {
        return 0;
    }
    
    if(s.length < 2) {
        return 1;
    }

   for(const letter of s) {
        const duplicateIndex = substring.findIndex(v => v === letter)

        if(duplicateIndex > -1) {
            substring = substring.slice(duplicateIndex + 1);
            substring.push(letter);
        } else {
            substring.push(letter);
            maxLength = Math.max(substring.length, maxLength)
        }
   }
   
   return maxLength;
};

console.log(lengthOfLongestSubstring("abcabcbb"))