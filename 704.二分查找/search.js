function search(nums, target) {
	let left = 0
	let right = nums.length - 1

	while (left < right) {
		const mid = (left + right) >>> 1
		if (nums[mid] === target) {
			return mid
		}
		if (nums[mid] > target) {
			right = mid
		} else {
			left = mid + 1
		}
	}

	return nums[left] === target ? left : -1
}