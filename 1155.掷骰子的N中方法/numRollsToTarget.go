package problem1155

// 此题属于动态规划中的"到达目标的不同方式总数"
// 区间：d,f [1,30] target [1,1000]
// 状态：dp[i][j]代表扔i个骰子和为j的组合数
// 边界条件：dp[1][k] = 1 (k = min(f, target))
//     => 扔1个只有10面的骰子要求和为10，那么是1
//     => 扔1个只有10面的骰子要求和为11，那么是0
// 方程：dp[i][j] = dp[i-1][j-1] + dp[i-1][j-2] + .... dp[i-1][j-f]
//     => 第i次投出k(1<=k<=f)，那么前i-1次，我需要投出j-k
//     => 所以上面方程可以翻译为
//     => 扔i次和为j的组合数 = 扔i-1次和为j-1的组合数 + 扔i-1次和为j-2的组合数 + ... + 扔i-1次和为j-f的组合数
//     =>                      (假设第i次投出1)       (假设第i次投出2)              (假设第i次投出f)
func numRollsToTarget(d int, f int, target int) int {
	var dp [31][10001]int
	var mod int = 1000000007
	// 边界条件
	border := min(f, target)
	for i := 1; i <= border; i++ {
		dp[1][i] = 1
	}
	// 骰子数量至少为1，dp[1][x]值已经确定，从2开始
	for i := 2; i <= d; i++ {
		// j的实际取取值区间为 i*(1, f)
		for j := i; j <= i*f; j++ {
			// k的取值范围为[1, f]，需要判断j-k>=0
			for k := 1; k <= f && j-k >= 0; k++ {
				dp[i][j] = (dp[i][j] + dp[i-1][j-k]) % mod
			}
		}
	}
	return dp[d][target]
}

func min(a, b int) int {
	if a > b {
		return b
	}
	return a
}
