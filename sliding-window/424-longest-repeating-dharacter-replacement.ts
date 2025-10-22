function characterReplacement(s: string, k: number): number {
    if (s.length < 1) return 0;

    if(s.length < 2) return 1;

    let maxFreq = 1;
    let longest = 1;
    const hashMap = {};
    let left = 0;
    let right = 0;


    while(right < s.length) {
        if(hashMap[s[right]]) {
            hashMap[s[right]]++;
        } else {
            hashMap[s[right]] = 1;
        }

        maxFreq = Math.max(maxFreq, hashMap[s[right]]);

        if(maxFreq + k < right - left + 1) {
            hashMap[s[left]]--;
            left++;
        }

        longest = Math.max(longest, right - left + 1);

        right++;
    }

    return longest;
};

console.log(characterReplacement("ABAB", 2));