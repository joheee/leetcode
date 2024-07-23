function solveNQueens(n: number): string[][] {
  const ans: string[][] = [];
  const board: string[][] = new Array(n).fill(null).map(() => new Array(n).fill('.'));

  dfs(n, 0, new Array(n).fill(false), new Array(2 * n - 1).fill(false), new Array(2 * n - 1).fill(false), board, ans);

  return ans;
}

function dfs(n: number, i: number, cols: boolean[], diag1: boolean[], diag2: boolean[], board: string[][],
             ans: string[][]) {
  if (i === n) {
    ans.push(construct(board));
    return;
  }

  for (let j = 0; j < cols.length; ++j) {
    if (cols[j] || diag1[i + j] || diag2[j - i + n - 1])
      continue;
    board[i][j] = 'Q';
    cols[j] = diag1[i + j] = diag2[j - i + n - 1] = true;
    dfs(n, i + 1, cols, diag1, diag2, board, ans);
    cols[j] = diag1[i + j] = diag2[j - i + n - 1] = false;
    board[i][j] = '.';
  }
}

function construct(board: string[][]): string[] {
  return board.map(row => row.join(''));
}

export function NQueens(){
    console.log(solveNQueens(4))
}