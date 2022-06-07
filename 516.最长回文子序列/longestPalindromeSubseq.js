// LPS
// dp[i][j] 定义为 s[i:j] 的 LPS 长度
// 状态转移方程：
//   dp[i][j] = dp[i+1][j-1] + 2 (s[i] === s[j])
//   dp[i][j] = Max(dp[i+1][j], dp[i][j-1]) (s[i] !== s[j])
// 时间复杂度 O(n^2)
// 空间复杂度 O(n^2)
function longestPalindromeSubseq(s) {
	const n = s.length
	const dp = new Array(n).fill(0).map(() => new Array(n).fill(0))

	// 为什么外层循环需要逆序：根据状态转移方程，需要先访问dp[i+1]
	for (let i = n - 1; i >= 0; i--) {
		dp[i][i] = 1
		for (let j = i + 1; j < n; j++) {
			if (s[i] === s[j]) {
				dp[i][j] = dp[i + 1][j - 1] + 2
			} else {
				dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1])
			}
		}
	}

	return dp[0][n - 1]
}