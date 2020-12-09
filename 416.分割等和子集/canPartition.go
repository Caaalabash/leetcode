package problem0416

// 经典01背包问题
// 1. 明确状态和选择：
// 状态：「可选择的物品」、「背包的容量」
// 选择：「装进背包」、「不装进背包」
// 2. 明确dp数组的定义：
// 结合状态和题目需求，得到dp[i][j]含义: 对于前i个可选择的物品、背包容量为j时能装下的最大价值
// 3. 思考状态转移的逻辑：
// 将选择体现出来：dp[i][j] = 择优(没有把第i个物品装进背包，把第i个物品装进背包) = 择优(dp[i-1][j], dp[i-1][j-weight(i)] + value(i))
// 择优操作也需要结合题目选择：此处为max
// 4. 边界条件：
// 没有可选择的物品时，最大价值总是0 dp[0][...] = 0
// 没有背包容量时，最大价值总是0 dp[...][0] = 0

// 对于本题
// 状态：「可选择的物品 = 数组元素」、「背包容量 = 数组和的一半」
// 选择：「放进子集」、「不放进子集」
// dp[i][j]的定义：对于前i个元素，和为j时能否分割成两个相等的子集
// 状态转移方程：dp[i][j] = 择优(没有把第i个数装进子集，把第i个数装进子集) = 择优(dp[i-1][j], dp[i-1][j-nums[i]])
// 择优操作：||
// 边界条件：
//  不选取任何元素时，和为0总是成立：dp[i][0] = true
//  只有一个正整数可以选择时，dp[0][nums[0]] = true
func canPartition(nums []int) bool {
	length := len(nums)
	if length < 2 {
		return false
	}
	max, sum := 0, 0
	for _, v := range nums {
		sum += v
		if v > max {
			max = v
		}
	}
	if sum%2 == 1 {
		return false
	}
	targetSum := sum / 2
	if max > targetSum {
		return false
	}
	//二维dp数组解法，降维度等于投影
	//dp := make([][]bool, length)
	//for i := range dp {
	//	dp[i] = make([]bool, targetSum+1)
	//	dp[i][0] = true
	//}
	//dp[0][nums[0]] = true
	//for i := 1; i < length; i++ {
	//	for j := 1; j < targetSum+1; j++ {
	//		if j >= nums[i] {
	//			dp[i][j] = dp[i-1][j] || dp[i-1][j-nums[i]]
	//		} else {
	//			dp[i][j] = dp[i-1][j]
	//		}
	//	}
	//}
	//return dp[length-1][targetSum]

	// 一维dp数组解法
	dp := make([]bool, targetSum+1)
	dp[0] = true
	for i := 1; i < length; i++ {
		for j := targetSum; j >= nums[i]; j-- {
			dp[j] = dp[j] || dp[j-nums[i]]
		}
	}
	return dp[targetSum]
}
