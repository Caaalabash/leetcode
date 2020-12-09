package problem0494

// 01背包
// 将nums划分成2个子集A，B，分别代表分配 + 的数和分配 - 的数，存在如下关系：
// sum(A) - sum(B) = S
// ===> sum(A) = S + sum(B)
// ===> sum(A) * 2 = S + sum(B) + sum(A)
// ===> sum(A) = (S + sum(nums)) / 2
// 原问题转换为：nums中存在几个子集A，使得A中元素和为(S + sum(nums)) / 2
// 按照416解题
// dp[0][...] = 0 ==> 没有物品的话，根本没办法装背包
// dp[...][0] = 1 ==> 没有容量的话，什么都不装就是一种装法
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
	for i := 1; i <= len(nums); i++ {
		for j := target; j >= nums[i-1]; j-- {
			dp[j] += dp[j-nums[i-1]]
		}
	}
	return dp[target]
}
