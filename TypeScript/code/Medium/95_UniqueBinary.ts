class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}

const treeRecursive = (start=1, end: number, memo: Map<string, Array<TreeNode | null>>): Array<TreeNode | null> => {
    if (end < start) return [null];
    if (end === start) return [new TreeNode(end)];
    
    const memoKey = `${start}-${end}`;
    if (memo.has(memoKey)) {
      return memo.get(memoKey)!;
    }
  
    const trees: TreeNode[] = [];
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

function generateTrees(n: number): Array<TreeNode | null> {
    return treeRecursive(1, n, new Map())
};

export function UniqueBinary(){
    let n = 8
    console.log(generateTrees(n))
}