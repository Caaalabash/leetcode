package problem1030

// 返回矩阵中所有单元格坐标，并按照距离(r0, c0)的曼哈顿距离从小到大排序
// BFS
func allCellsDistOrder(R int, C int, r0 int, c0 int) [][]int {
	result := make([][]int, 0)
	visited := make([][]bool, R)
	for i := 0; i < R; i++ {
		visited[i] = make([]bool, C)
	}
	queue := [][]int{{r0, c0}}
	visited[r0][c0] = true

	for len(queue) != 0 {
		cur := queue[0]
		queue = queue[1:]
		x, y := cur[0], cur[1]
		result = append(result, cur)
		if x+1 < R && !visited[x+1][y] {
			queue = append(queue, []int{x + 1, y})
			visited[x+1][y] = true
		}
		if x-1 >= 0 && !visited[x-1][y] {
			queue = append(queue, []int{x - 1, y})
			visited[x-1][y] = true
		}
		if y+1 < C && !visited[x][y+1] {
			queue = append(queue, []int{x, y + 1})
			visited[x][y+1] = true
		}
		if y-1 >= 0 && !visited[x][y-1] {
			queue = append(queue, []int{x, y - 1})
			visited[x][y-1] = true
		}
	}
	return result
}
