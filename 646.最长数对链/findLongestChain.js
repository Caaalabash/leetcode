// 动态规划
// 时间O(n^2) 空间O(n)
// 先排序：dp[i] 表示以 paris[i] 结尾的最长数对链长度，显然初始值都为1
function findLongestChain(pairs) {
	const n = pairs.length
	const dp = new Array(n).fill(1)
	pairs.sort((a, b) => a[0] - b[0])

	for (let i = 0; i < n; i++) {
		for (let j = 0; j < i; j++) {
			if (pairs[i][0] > pairs[j][1]) {
				dp[i] = Math.max(dp[i], dp[j] + 1)
			}
		}
	}

	return dp[n - 1]
}