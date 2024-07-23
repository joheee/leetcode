"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LongestSubstringWithoutDuplicate = void 0;
function lengthOfLongestSubstring(str) {
    let test = '';
    // Result
    let maxLength = -1;
    // Return zero if string is empty
    if (str.length === 0) {
        return 0;
    }
    // Return one if string length is one
    else if (str.length === 1) {
        return 1;
    }
    for (const c of str) {
        const current = c.toString();
        // If string already contains the character
        // Then substring after repeating character
        if (test.includes(current)) {
            test = test.substring(test.indexOf(current) + 1);
        }
        test += c.toString();
        maxLength = Math.max(test.length, maxLength);
    }
    return maxLength;
}
function LongestSubstringWithoutDuplicate() {
    console.log(lengthOfLongestSubstring('pwwkew'));
}
exports.LongestSubstringWithoutDuplicate = LongestSubstringWithoutDuplicate;
