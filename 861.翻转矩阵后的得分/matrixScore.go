package problem0861

// 将一行或者一列翻转两次及以上是没有任何意义的，所以只需要考虑一次的情况
// 贪心：需要结果最大
// 首先：每一行开头是1就不翻转，否则翻转 => 第一列必定全是1
// 其次：每一列0比1多就翻转，否则不翻转
// 并且，不用真的将[]int组合成二进制数，而是直接移位加
func matrixScore(A [][]int) int {
	rowCount, colCount := len(A), len(A[0])
	result := (1 << (colCount - 1)) * rowCount

	for i := 0; i < rowCount; i++ {
		if A[i][0] == 0 {
			for j := 0; j < colCount; j++ {
				A[i][j] ^= 1
			}
		}
	}

	for i := 1; i < colCount; i++ {
		count := 0
		for j := 0; j < rowCount; j++ {
			if A[j][i] == 0 {
				count++
			}
		}
		count = max(count, rowCount-count)
		result += (1 << (colCount - 1 - i)) * count
	}
	return result
}

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}
