package problem0474

// 现在，假设你分别支配着 m 个 0 和 n 个 1。另外，还有一个仅包含 0 和 1 字符串的数组。
// 你的任务是使用给定的 m 个 0 和 n 个 1 ，找到能拼出存在于数组中的字符串的最大数量。每个 0 和 1 至多被使用一次。

// 状态：m个0和n个1
// 选择：「要这个单词」、「不要这个单词」
// dp方程：dp[i][j]代表i个0和j个1能拼出的最大数量
// 状态转移方程：dp[i][j] = 择优(dp[i-count(0)][j-count(1)] + 1, dp[i][j])
// 择优操作：max
func findMaxForm(strs []string, m int, n int) int {
	dp := make([][]int, m+1)
	for i := 0; i <= m; i++ {
		dp[i] = make([]int, n+1)
	}

	for _, s := range strs {
		zeroCount, oneCount := getCount(s)
		for i := m; i >= zeroCount; i-- {
			for j := n; j >= oneCount; j-- {
				dp[i][j] = max(dp[i][j], dp[i-zeroCount][j-oneCount]+1)
			}
		}
	}
	return dp[m][n]
}

func getCount(s string) (zeroCount int, oneCount int) {
	for i := 0; i < len(s); i++ {
		if s[i] == '0' {
			zeroCount++
		} else {
			oneCount++
		}
	}
	return
}

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}
