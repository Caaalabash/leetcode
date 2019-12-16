package problem0054

// 按照顺时针螺旋顺序，返回矩阵中的所有元素
// 直觉做法：最外层元素按照顺时针顺序输出，然后向里前进一层
func spiralOrder(matrix [][]int) []int {
	if len(matrix) < 1 {
		return nil
	}
	var result []int
	verticalStart, verticalEnd, horizontalStart, horizontalEnd := 0, len(matrix)-1, 0, len(matrix[0])-1
	for {
		// 向右移动到最右侧, 然后调整上边界
		for i := horizontalStart; i <= horizontalEnd; i++ {
			result = append(result, matrix[verticalStart][i])
		}
		verticalStart++
		if verticalStart > verticalEnd {
			break
		}
		// 向下移动到最底侧，然后调整右边界
		for i := verticalStart; i <= verticalEnd; i++ {
			result = append(result, matrix[i][horizontalEnd])
		}
		horizontalEnd--
		if horizontalStart > horizontalEnd {
			break
		}
		// 向左移动到最左侧，然后调整下边界
		for i := horizontalEnd; i >= horizontalStart; i-- {
			result = append(result, matrix[verticalEnd][i])
		}
		verticalEnd--
		if verticalStart > verticalEnd {
			break
		}
		// 向上移动到最顶侧，然后调整左边界
		for i := verticalEnd; i >= verticalStart; i-- {
			result = append(result, matrix[i][horizontalStart])
		}
		horizontalStart++
		if horizontalStart > horizontalEnd {
			break
		}
	}
	return result
}
