package problem0073

// 给定一个 m x n 的矩阵，如果一个元素为 0，则将其所在行和列的所有元素都设为 0
// 需要使用常数空间解决

// 方法1：
// 1. 扫描一次矩阵，找到所有为0的元素，记录下行/列序号
// 2. 再一次扫描矩阵，置0
// 时间复杂度 O(M*N)
// 空间复杂度 O(M+N)

// 不严谨的方法2：
// 1. 扫描一次矩阵，如果发现某个元素为0，则将第i行和第j列的所有非0元素设置成"一个很大的值"（不严谨之处）
// 2. 最后将所有虚拟置设为0
// 时间复杂度 O((M*N)*(M+N))
// 空间复杂度 O(1)
// 不高效之处在于会重复对同一行/列进行置0

// 方法2优化：
// 1. 用每行/列的第一个元素作为标记，标示这一行/列是否需要赋零，这意味着时间复杂度变成O(M*N)
// 2. 需要额外判断第一行/列是否本身就含有0
func setZeroes(matrix [][]int) {
	r, l := len(matrix), len(matrix[0])
	firstRowFlag, firstColFlag := false, false
	// 遍历第一行/列，判断是否本身含有0
	for i := 0; i < r; i++ {
		if matrix[i][0] == 0 {
			firstColFlag = true
		}
	}
	for i := 0; i < l; i++ {
		if matrix[0][i] == 0 {
			firstRowFlag = true
		}
	}
	// 遍历剩余的行/列，寻找0，并修改标识位
	for i := 1; i < r; i++ {
		for j := 1; j < l; j++ {
			if matrix[i][j] == 0 {
				matrix[0][j] = 0
				matrix[i][0] = 0
			}
		}
	}
	// 置0
	for i := 1; i < r; i++ {
		for j := 1; j < l; j++ {
			if matrix[i][0] == 0 || matrix[0][j] == 0 {
				matrix[i][j] = 0
			}
		}
	}
	if firstColFlag {
		for i := 0; i < r; i++ {
			matrix[i][0] = 0
		}
	}
	if firstRowFlag {
		for i := 0; i < l; i++ {
			matrix[0][i] = 0
		}
	}
}
