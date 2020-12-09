package problem0494

// 题目等价于将数组分成两个子集，使得 sum(A) = target + sum(B)
// 两边同时加上sum(A)，得到 sum(A) = (target + sum(nums)) / 2
// 回退到416题
// 状态：「可选择的元素」、「元素和」
// 选择：「选这个元素」、「不选这个元素」
// dp[i][j] = x的含义：若只在前 i 个物品中选择，若当前背包的容量为 j，则最多有 x 种方法可以恰好装满背包。
// 状态转移方程：dp[i][j] = 择优(dp[i-1][j], dp[i-1][j-nums[i]])
// 择优操作：+
// 边界条件：
//   dp[...][0] = 1 ==> 什么都不装就是一种装法
//   dp[0][...] = 0 ==> 没有物品就没有装法
func findTargetSumWays(nums []int, S int) int {
	sum := 0
	for _, v := range nums {
		sum += v
	}
	if S > sum || (S+sum)%2 == 1 {
		return 0
	}
	target := (S + sum) / 2
	dp := [2001]int{1}
	for i := 0; i < len(nums); i++ {
		for j := target; j >= nums[i]; j-- {
			dp[j] += dp[j-nums[i]]
		}
	}
	return dp[target]
}
