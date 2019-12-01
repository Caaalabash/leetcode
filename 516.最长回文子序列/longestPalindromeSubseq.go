package problem0516

// dp[i][j] := solution of s[i..j]
// Base case:
//   a          -> dp[i][i] = 1
// Case 1: 假设括号范围内的解已经明确，且s[i] == s[j]
//   a(****)a     -> dp[i][j] = dp[i+1][j-1] + 2
// Case 2: 假设括号范围内的解已经明确, 且s[i] != s[j]
//   a(***a)b     -> dp[i][j] = dp[i][j-1]
//   a(b***)b     -> dp[i][j] = dp[i+1][j]
func longestPalindromeSubseq(s string) int {
	// 初始化dp
	lenS := len(s)
	dp := make([][]int, lenS)
	for i := 0; i < lenS; i++ {
		dp[i] = make([]int, lenS)
		dp[i][i] = 1
	}
	// 从小问题推导大问题: 从长度为1的子串长度遍历到长度为lenS的子串长度
	for l := 1; l <= lenS; l++ {
		// 扫描i，计算出对应的长度的j值
		for i := 0; i < lenS-l; i++ {
			j := i + l
			if s[i] == s[j] {
				dp[i][j] = dp[i+1][j-1] + 2
			} else {
				dp[i][j] = max(dp[i+1][j], dp[i][j-1])
			}
		}
	}
	return dp[0][lenS-1]
}

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}
