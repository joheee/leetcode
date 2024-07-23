"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PermutationSequence = void 0;
function getPermutation(n, k) {
    const sb = [];
    const nums = [];
    const fact = []; // fact[i] := i!
    for (let i = 1; i <= n; ++i)
        nums.push(i);
    fact[0] = 1;
    for (let i = 1; i <= n; ++i)
        fact[i] = fact[i - 1] * i;
    --k; // 0-indexed
    for (let i = n - 1; i >= 0; --i) {
        const j = Math.floor(k / fact[i]);
        k %= fact[i];
        sb.push(nums[j].toString());
        nums.splice(j, 1);
    }
    return sb.join('');
}
function PermutationSequence() {
    console.log(getPermutation(3, 3));
}
exports.PermutationSequence = PermutationSequence;
