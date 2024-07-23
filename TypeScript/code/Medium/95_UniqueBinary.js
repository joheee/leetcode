"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UniqueBinary = void 0;
class TreeNode {
    constructor(val, left, right) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
}
const treeRecursive = (start = 1, end, memo) => {
    if (end < start)
        return [null];
    if (end === start)
        return [new TreeNode(end)];
    const memoKey = `${start}-${end}`;
    if (memo.has(memoKey)) {
        return memo.get(memoKey);
    }
    const trees = [];
    for (let i = start; i <= end; i++) {
        const leftTrees = treeRecursive(start, i - 1, memo);
        const rightTrees = treeRecursive(i + 1, end, memo);
        for (const left of leftTrees) {
            for (const right of rightTrees) {
                trees.push(new TreeNode(i, left, right));
            }
        }
    }
    memo.set(memoKey, trees);
    return trees;
};
function generateTrees(n) {
    return treeRecursive(1, n, new Map());
}
;
function UniqueBinary() {
    let n = 8;
    console.log(generateTrees(n));
}
exports.UniqueBinary = UniqueBinary;
