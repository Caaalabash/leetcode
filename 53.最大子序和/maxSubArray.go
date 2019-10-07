package problem0053

// 动态规划
// dp[i] = MAX{dp[i-1]+v[i], v[i]}, 含义为: ans = 保留前面累加和(sum)与以当前元素为开始，哪种更优
// 如果 sum > 0, 说明sum对结果有正向作用, 带上它一起玩
// 如果 sum <= 0, 说明sum对结果无正向作用, 需要舍弃它
func maxSubArray(nums []int) int {
	sum, ans := 0, nums[0]
	for _, v := range nums {
		if sum > 0 {
			sum += v
		} else {
			sum = v
		}
		ans = max(ans, sum)
	}
	return ans
}

func max(a int, b int) int {
	if a > b {
		return a
	}
	return b
}
