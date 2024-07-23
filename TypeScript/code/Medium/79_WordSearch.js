"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WordSearch = void 0;
function dfs(board, word, i, j, s) {
    if (i < 0 || i == board.length || j < 0 || j == board[0].length)
        return false;
    if (board[i][j] != word[s] || board[i][j] == '*')
        return false;
    if (s == word.length - 1)
        return true;
    let cache = board[i][j];
    board[i][j] = '*';
    let isExist = dfs(board, word, i + 1, j, s + 1) ||
        dfs(board, word, i - 1, j, s + 1) ||
        dfs(board, word, i, j + 1, s + 1) ||
        dfs(board, word, i, j - 1, s + 1);
    board[i][j] = cache;
    return isExist;
}
function exist(board, word) {
    for (let i = 0; i < board.length; ++i)
        for (let j = 0; j < board[0].length; ++j)
            if (dfs(board, word.split(''), i, j, 0))
                return true;
    return false;
}
;
function WordSearch() {
    let board = [
        ["A", "B", "C", "E"],
        ["S", "F", "C", "S"],
        ["A", "D", "E", "E"]
    ];
    let word = "ABCB";
    console.log(exist(board, word));
}
exports.WordSearch = WordSearch;
