package problem0119

// 这道题在不知道它是杨辉三角的前提下，直接使用118的做法即可，golang下效率还挺高
func getRow(rowIndex int) []int {
	result := make([][]int, rowIndex+1)
	result[0] = []int{1}
	for i := 1; i < rowIndex+1; i++ {
		result[i] = make([]int, i+1)
		result[i][0] = 1
		result[i][i] = 1
		for j := 1; j < i; j++ {
			result[i][j] = result[i-1][j-1] + result[i-1][j]
		}
	}
	return result[len(result)-1]
}

// j行的数据，应该由j-1行计算出来
// 假设j-1行为   	[1,3,3,1]
// 在其前面补0	[0,1,3,3,1]
// 那么j行为   	[1,4,6,4,1] => r[i] = r[i] + r[i+1]
func getRow1(rowIndex int) []int {
	result := []int{1}
	for i := 1; i < rowIndex+1; i++ {
		result = append([]int{0}, result...)
		for j := 0; j < i; j++ {
			result[j] = result[j] + result[j+1]
		}

	}
	return result
}
