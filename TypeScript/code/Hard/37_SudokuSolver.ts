function solveSudoku(board: string[][]): void {
    dfs(board, 0);
  }
  
function dfs(board: string[][], s: number): boolean {
    if (s === 81) {
        return true;
    }

    const i = Math.floor(s / 9);
    const j = s % 9;

    if (board[i][j] !== '.') {
        return dfs(board, s + 1);
    }

    for (let c = '1'; c <= '9'; c = String.fromCharCode(c.charCodeAt(0) + 1)) {
        if (isValid(board, i, j, c)) {
        board[i][j] = c;
        if (dfs(board, s + 1)) {
            return true;
        }
        board[i][j] = '.';
        }
    }

    return false;
}
  
function isValid(board: string[][], row: number, col: number, c: string): boolean {
    for (let i = 0; i < 9; ++i) {
        if (
            board[i][col] === c ||
            board[row][i] === c ||
            board[3 * Math.floor(row / 3) + Math.floor(i / 3)][3 * Math.floor(col / 3) + (i % 3)] === c
        ) {
        return false;
        }
    }
    return true;
}
  

export function SudokuSolver() {
    let board = [["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]
    solveSudoku(board)
}