package problem1351

// m*n的矩阵 横竖都是递减，统计grid中负数的数目
// 单纯遍历的话，复杂度是O(m*n)
// 对每一行进行二分法，复杂度为O(m*log n)
// 1 <= m, n <= 100
// m == grid.length
// n == grid[i].length
func countNegatives(grid [][]int) int {
	count := 0

	for i := 0; i < len(grid); i++ {
		// 二分法
		l, r := 0, len(grid[0])-1
		for l < r {
			mid := (l + r) >> 1
			if grid[i][mid] >= 0 {
				l = mid + 1
			} else {
				r = mid
			}
		}
		if grid[i][l] < 0 {
			count += len(grid[0]) - l
		}
	}
	return count
}
