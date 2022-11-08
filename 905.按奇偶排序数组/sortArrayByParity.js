// O(1)空间
function sortArrayByParity(nums) {
	const n = nums.length
	if (n <= 1) {
		return nums
	}
	let left = 0
	let right = n - 1
	while (left < right) {
		if (nums[left] % 2 === 0) {
			left++
		} else {
			while (left < right && nums[left] % 2 === 1) {
				[nums[left], nums[right]] = [nums[right], nums[left]]
				right--
			}
			left++
		}
	}
	return nums
}