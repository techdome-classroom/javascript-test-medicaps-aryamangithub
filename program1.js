function longestSubstring(s) {
    // Implementation of longestSubstring function
    const charIndexMap = {}
    let maxLength = 0
    let windowStart = 0

    for(let windowEnd = 0; windowEnd < s.length; windowEnd++) {
        const rightChar = s[windowEnd]
        if(charIndexMap[rightChar]!==undefined) {
            windowStart = Math.max(windowStart, charIndexMap[rightChar]+1)
    }
}

module.exports = { longestSubstring };


