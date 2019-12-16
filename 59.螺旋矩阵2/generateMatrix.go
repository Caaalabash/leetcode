package problem0059

// 给定一个正整数n，生成一个包含1到n^2的元素，且元素按照顺时针顺序螺旋排列
func generateMatrix(n int) [][]int {
	// 初始化二维数组
	result := make([][]int, n)
	for i := 0; i < n; i++ {
		result[i] = make([]int, n)
	}
	initVal := 1
	verticalStart, verticalEnd, horizontalStart, horizontalEnd := 0, n-1, 0, n-1
	for {
		for i := horizontalStart; i <= horizontalEnd; i++ {
			result[verticalStart][i] = initVal
			initVal++
		}
		verticalStart++
		if verticalStart > verticalEnd {
			break
		}
		for i := verticalStart; i <= verticalEnd; i++ {
			result[i][horizontalEnd] = initVal
			initVal++
		}
		horizontalEnd--
		if horizontalStart > horizontalEnd {
			break
		}
		for i := horizontalEnd; i >= horizontalStart; i-- {
			result[verticalEnd][i] = initVal
			initVal++
		}
		verticalEnd--
		if verticalStart > verticalEnd {
			break
		}
		for i := verticalEnd; i >= verticalStart; i-- {
			result[i][horizontalStart] = initVal
			initVal++
		}
		horizontalStart++
		if horizontalStart > horizontalEnd {
			break
		}
	}
	return result
}
