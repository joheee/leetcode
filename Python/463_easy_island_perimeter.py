class Solution:
    def checkNeighbor(self, grid, i, j) -> int:
        row = len(grid)
        col = len(grid[0])

        res = 0
        dir = [(-1,0),(1,0),(0,-1),(0,1)]
        for d in dir:
            n_i, n_j = i + d[0], j + d[1]
            if 0 <= n_i < row and 0 <= n_j < col and (grid[n_i][n_j] == 1 or grid[n_i][n_j] == 2):  
               res += 1 
        return res

    def calculateEdge(self, neighbor) -> int:
        if neighbor == 0:
            return 4
        elif neighbor == 1:
            return 3
        elif neighbor == 2:
            return 2
        elif neighbor == 3:
            return 1
        return 0

    def islandPerimeter(self, grid: List[List[int]]) -> int:
        res = 0
        for i in range(0, len(grid)):
            for j in range(0, len(grid[0])):
                if grid[i][j] is 1:
                    neighbor = self.checkNeighbor(grid, i, j)
                    edge = self.calculateEdge(neighbor)
                    print(grid[i][j], (i, j), neighbor, edge)
                    grid[i][j] = 2
                    res += edge

        return res