"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Search2D = void 0;
// ARRAY DECOMPOSITION
function binarySearch(arr, low, high, target) {
    let mid = Math.floor((high - low) / 2 + low);
    console.log(low, high, mid);
    if (arr[mid] === target)
        return true;
    if (high <= low)
        return false;
    // go left
    else if (arr[mid] < target)
        return binarySearch(arr, mid + 1, high, target);
    else if (arr[mid] > target)
        return binarySearch(arr, low, mid - 1, target);
    return false;
}
function binarySearchOneDimension(matrix, target) {
    for (let i = 0; i < matrix.length; i++) {
        let start = 0;
        let end = matrix[i].length - 1;
        if (target >= matrix[i][start] && target <= matrix[i][end]) {
            console.log(matrix[i]);
            let low = 0;
            let high = matrix[i].length - 1;
            return binarySearch(matrix[i], low, high, target);
        }
        else
            continue;
    }
    return false;
}
// 2D to 1D converter array
function binarySearchTwoDimension(matrix, target) {
    let left = 0;
    let right = matrix.length * matrix[0].length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        let row = Math.floor(mid / matrix[0].length);
        let col = mid % matrix[0].length;
        if (matrix[row][col] === target)
            return true;
        else if (matrix[row][col] < target)
            left = mid + 1;
        else
            right = mid - 1;
    }
    return false;
}
function searchMatrixOptimize(matrix, target) {
    let col = 0;
    let row = matrix.length - 1;
    while (col < matrix[0].length && row >= 0) {
        if (matrix[row][col] === target)
            return true;
        else if (matrix[row][col] < target)
            col++;
        else
            row--;
    }
    return false;
}
function searchMatrix(matrix, target) {
    return searchMatrixOptimize(matrix, target);
}
;
function Search2D() {
    // let matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]]
    let matrix = [[1, 3]];
    let target = 3;
    console.log(searchMatrix(matrix, target));
}
exports.Search2D = Search2D;
