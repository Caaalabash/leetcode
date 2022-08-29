function shuffle(nums, n) {
	const ans = new Array(n * 2)
	for (let i = 0; i < n; i++) {
		ans[i * 2] = nums[i]
		ans[i * 2 + 1] = nums[i + n]
	}
	return ans
}