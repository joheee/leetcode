"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CombinatorialSum = void 0;
function combinationSum(candidates, target) {
    const memo = {};
    function dfs(index, total) {
        if (total === 0)
            return [[]];
        if (index >= candidates.length || total < 0)
            return [];
        const key = `${index}:${total}`;
        if (memo[key])
            return memo[key];
        const combinations = [];
        for (let i = index; i < candidates.length; i++) {
            const candidate = candidates[i];
            if (total - candidate >= 0) {
                const nextCombinations = dfs(i, total - candidate);
                for (const combination of nextCombinations) {
                    combinations.push([candidate, ...combination]);
                }
            }
        }
        memo[key] = combinations;
        return combinations;
    }
    return dfs(0, target);
}
function CombinatorialSum() {
    console.log(combinationSum([2, 3, 6, 7], 7));
}
exports.CombinatorialSum = CombinatorialSum;
