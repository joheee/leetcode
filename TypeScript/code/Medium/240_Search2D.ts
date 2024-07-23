function searchMatrix(matrix: number[][], target: number): boolean {
    let row = 0
    let col = matrix[0].length - 1
    while(row < matrix.length && col >= 0) {
        if(matrix[row][col] === target) return true
        else if(matrix[row][col] < target) row ++
        else col--
    }
    return false
};

export function Search2DCol(){
    let matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]]
    let target = 16
    
    // let matrix = [[1,1]]    
    // let target = 1
    console.log(searchMatrix(matrix, target))
}