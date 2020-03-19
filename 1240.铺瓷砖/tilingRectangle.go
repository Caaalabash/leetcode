package problem1240

// 回溯法（未压缩）
// 惯性想法：m*n的地板转换为二维矩阵，那么backTrack函数至少需要三个参数，当前用量use，两个坐标row, col
// 注意事项：
//   1. 结果result的最大值为m*n
//   2. 填充正方形时从最大的开始会好点
//   3. 对应关系有: n - 高 - row  m - 宽 - col
var FLOOR [][]int

func tilingRectangle(n int, m int) int {
	var (
		result    = m * n
		backTrack func(use int, row int, col int)
	)
	// 初始化二维数组
	FLOOR = make([][]int, n)
	for i := 0; i < n; i++ {
		FLOOR[i] = make([]int, m)
	}
	// 定义backTrack
	backTrack = func(use int, row int, col int) {
		// 剪枝
		if use >= result {
			return
		}
		for i := row; i < n; i++ {
			for j := col; j < m; j++ {
				if FLOOR[i][j] == 0 {
					// 计算理论最大值
					maximum := min(n-i, m-j)
					// 从理论最大值遍历到1
					for radius := maximum; radius > 0; radius-- {
						// 经典结构：能填充 -> 填充 -> 下一层 -> 回溯
						if canInsert(i, j, radius) {
							updateVisited(i, j, radius, true)
							backTrack(use+1, i, j+1)
							updateVisited(i, j, radius, false)
						}
					}
					// 只要进入了这个分支，就说明没有填充完毕，return即可
					return
				}
			}
			// 随着j+1, 会出现j == m, 需要重新回到col = 0
			col = 0
		}
		result = min(result, use)
	}
	backTrack(0, 0, 0)
	return result
}

func min(a, b int) int {
	if a > b {
		return b
	}
	return a
}

// 判断是否能够填充radius大小的正方形，不处理越界
func canInsert(x int, y int, radius int) bool {
	for i := x + radius - 1; i >= x; i-- {
		for j := y + radius - 1; j >= y; j-- {
			if FLOOR[i][j] == 1 {
				return false
			}
		}
	}
	return true
}

// 更新访问记录
func updateVisited(x int, y int, radius int, visited bool) {
	for i := x + radius - 1; i >= x; i-- {
		for j := y + radius - 1; j >= y; j-- {
			if visited {
				FLOOR[i][j] = 1
			} else {
				FLOOR[i][j] = 0
			}
		}
	}
}
