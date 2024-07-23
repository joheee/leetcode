function combinationSum(candidates: number[], target: number): number[][] {
    const memo: { [key: string]: number[][] } = {};

    function dfs(index: number, total: number): number[][] {
        if (total === 0) return [[]];
        if (index >= candidates.length || total < 0) return [];

        const key = `${index}:${total}`;
        if (memo[key]) return memo[key];

        const combinations: number[][] = [];
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


export function CombinatorialSum(){
    console.log(combinationSum([2,3,6,7], 7))
}