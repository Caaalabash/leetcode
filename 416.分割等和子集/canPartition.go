package problem0416

// 0-1背包问题
// 传统的01背包问题要求所选取的物品重量之和不能超背包的总重量，这道题则要求所选取的数字和恰好等于整个数组元素和的一半
func canPartition(nums []int) bool {
	n := len(nums)
	// 排除条件1：数组长度小于2
	if n < 2 {
		return false
	}
	sum, max := 0, 0
	for _, v := range nums {
		sum += v
		if v > max {
			max = v
		}
	}
	// 排除条件2：数组和为奇数
	if sum%2 != 0 {
		return false
	}
	// 排除条件3：存在一个数大于数组和的一半
	target := sum / 2
	if max > target {
		return false
	}
	// dp[i][j]表示：能否在nums[0, i]中选取若干个数其和恰好为j
	dp := make([][]bool, n)
	for i := range dp {
		dp[i] = make([]bool, target+1)
	}
	// 边界情况1：不选取任何正整数，其和为0
	for i := 0; i < n; i++ {
		dp[i][0] = true
	}
	// 边界条件2：i为0时，只能选择nums[0]
	dp[0][nums[0]] = true
	// 状态转移方程：
	// dp[i][j] = {
	//   dp[i-1][j] || dp[i-1][j-nums[i]], j >= nums[i]
	//   dp[i-1][j]						 , j < nums[i]
	// }
	for i := 1; i < n; i++ {
		for j := 1; j <= target; j++ {
			if j >= nums[i] {
				dp[i][j] = dp[i-1][j] || dp[i-1][j-nums[i]]
			} else {
				dp[i][j] = dp[i-1][j]
			}
		}
	}
	return dp[n-1][target]
}

// 观察状态转移方程，每一行的dp值都只与上一行的dp值有关，因此只需要一个一维的数组将空间复杂度降低到O(target)
// 因此状态转移方程为：dp[j] = dp[j] || dp[j - nums[i]]
func canPartition1(nums []int) bool {
	n := len(nums)
	// 排除条件1：数组长度小于2
	if n < 2 {
		return false
	}
	sum, max := 0, 0
	for _, v := range nums {
		sum += v
		if v > max {
			max = v
		}
	}
	// 排除条件2：数组和为奇数
	if sum%2 != 0 {
		return false
	}
	// 排除条件3：存在一个数大于数组和的一半
	target := sum / 2
	if max > target {
		return false
	}
	dp := make([]bool, target+1)
	dp[0] = true
	for i := 1; i < n; i++ {
		for j := target; j >= nums[i]; j-- {
			dp[j] = dp[j] || dp[j-nums[i]]
		}
	}
	return dp[target]
}
