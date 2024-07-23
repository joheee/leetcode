"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LongestCommonSubsequence = void 0;
function lcs(text1, text2, m, n, memo) {
    if (m === 0 || n === 0)
        return 0;
    if (memo[m][n] !== undefined)
        return memo[m][n];
    if (text1[m - 1] === text2[n - 1])
        memo[m][n] = 1 + lcs(text1, text2, m - 1, n - 1, memo);
    else
        memo[m][n] = Math.max(lcs(text1, text2, m, n - 1, memo), lcs(text1, text2, m - 1, n, memo));
    return memo[m][n];
}
function longestCommonSubsequence(text1, text2) {
    const text1Array = text1.split('');
    const text2Array = text2.split('');
    const m = text1Array.length;
    const n = text2Array.length;
    const memo = Array.from({ length: m + 1 }, () => Array(n + 1).fill(undefined));
    const res = lcs(text1Array, text2Array, m, n, memo);
    return res;
}
;
function LongestCommonSubsequence() {
    let t1 = 'mhunuzqrkzsnidwbun';
    let t2 = 'szulspmhwpazoxijwbq';
    console.log(longestCommonSubsequence(t1, t2));
}
exports.LongestCommonSubsequence = LongestCommonSubsequence;
