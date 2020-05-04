package problem0931

// 给定一个方形整数数组 A，我们想要得到通过 A 的下降路径的最小和。
// 下降路径可以从第一行中的任何元素开始，并从每一行中选择一个元素。在下一行选择的元素和当前行所选元素最多相隔一列。

// 容易想到dp[i][j]代表降落点为(i,j)的最小路径，联系"最多相隔一列"，可得
// dp[i][j] = min(dp[i-1][j-1], dp[i-1][j], dp[i-1][j+1]) + A[i][j]
// 最后寻找最后一列的最小值即可
func minFallingPathSum(A [][]int) int {
	length := len(A)

	for i := 1; i < length; i++ {
		for j := 0; j < length; j++ {
			minN := A[i-1][j]
			if j > 0 {
				minN = min(minN, A[i-1][j-1])
			}
			if j < length-1 {
				minN = min(minN, A[i-1][j+1])
			}
			A[i][j] += minN
		}
	}
	res := A[length-1][0]
	for j := 1; j < length; j++ {
		res = min(res, A[length-1][j])
	}
	return res
}

func min(a, b int) int {
	if a < b {
		return a
	}
	return b
}
