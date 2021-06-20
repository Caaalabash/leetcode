// dp方程为 dp[i] = Max(dp[i-2] + num, dp[i-1])
function rob(nums) {
	if (nums.length === 1) {
		return nums[0]
	}
	const dp = [nums[0], Math.max(nums[0], nums[1])]
	for (let i = 2; i < nums.length; i++) {
		dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1])
	}
	return dp[nums.length - 1]
}

// 滚动数组优化
function rob(nums) {
	if (nums.length === 1) {
		return nums[0]
	}
	let a = nums[0]
	let b = Math.max(nums[0], nums[1])
	for (let i = 2; i < nums.length; i++) {
		[a, b] = [b, Math.max(a + nums[i], b)]
	}
	return b
}