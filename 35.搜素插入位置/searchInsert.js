function searchInsert(nums, target) {
	// 特殊情况处理
	const n = nums.length
	if (target > nums[n - 1]) {
		return n
	}
	// 在[0, n - 1]中一定有解
	let left = 0
	let right = n - 1
	while (left < right) {
		const mid = left + Math.floor((right - left) / 2)
		// 需要寻找 >= target 的第一个索引
		if (nums[mid] < target) {
			left = mid + 1
		} else {
			right = mid
		}
	}
	return left
}