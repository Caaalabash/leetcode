package problem1143

// 给定两个字符串text1和text2，返回这两个字符串的最长公共子序列的长度
// 对于【text1<x0,x2...,xn>】【text2<y0,y2...,ym>】两个母串，【sub<z0,...zk>】是其LCS
// 如果xn = ym, 则有：xn = ym = zk, 有zk-1是xn-1与ym-1的LCS
// 如果xn != ym, 则zk是xn与ym-1的LCS，或者是xn-1与ym的LCS
// 那么用二维数组dp[i][j]记录串text1<x0,...xi-1>和串text2<y0,...yj-i>的LCS长度
// 可以得到状态转移方程
//           |0                            => i = 0 or j = 0
// dp[i,j] = |dp[i-1, j-1] + 1             => text1<i> == text2<j>
//           |max(dp[i-1, j], dp[i, j-1])  => text2<i> != text2<j>
func longestCommonSubsequence(text1 string, text2 string) int {
	m, n := len(text1), len(text2)
	dp := make([][]int, m+1)
	for i := 0; i < m+1; i++ {
		dp[i] = make([]int, n+1)
	}
	for i := 1; i < m+1; i++ {
		for j := 1; j < n+1; j++ {
			if text1[i-1] == text2[j-1] {
				dp[i][j] = dp[i-1][j-1] + 1
			} else {
				dp[i][j] = max(dp[i-1][j], dp[i][j-1])
			}
		}
	}
	return dp[m][n]
}

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}
