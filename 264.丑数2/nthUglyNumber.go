package problem0264

// n是丑数，则n*2 n*3 n*5也是丑数
// n不是丑数，则n*2 n*3 n*5也不是丑数
// 很容易想到用动态规划来做，那么如何计算下一个丑数？=> 三指针法, 寻找min(a*2, b*3, c*5)
func nthUglyNumber(n int) int {
	a, b, c := 0, 0, 0
	dp := make([]int, n, n)
	for i := 0; i < n; i++ {
		dp[i] = 1
	}
	for i := 1; i < n; i++ {
		dp[i] = min(min(dp[a]*2, dp[b]*3), dp[c]*5)
		if dp[i] == dp[a]*2 {
			a++
		}
		if dp[i] == dp[b]*3 {
			b++
		}
		if dp[i] == dp[c]*5 {
			c++
		}
	}
	return dp[n-1]
}

func min(a, b int) int {
	if a > b {
		return b
	}
	return a
}
