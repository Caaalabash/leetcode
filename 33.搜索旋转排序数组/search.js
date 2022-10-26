// 原数组升序排列 + 数组值互不相同
// 虽然数据规模可以直接O(n)解法通过，还是使用二分法解题
function search(nums, target) {
	if (nums === 1) {
		return nums[0] === target ? 0 : -1
	}
	// 通过二分法寻找翻转点下标left(前一段的结束下标）
	let left = 0
	let right = nums.length - 1
	// 发生了翻转
	if (nums[left] > nums[right]) {
		while (left < right) {
			const mid = left + Math.floor((right - left) / 2)
			if (nums[mid] > nums[right]) {
				left = mid + 1
			} else {
				right = mid
			}
		}
		if (nums[left] <= nums[nums.length - 1]) left--
		// 根据nums[k]与target的关系，确定二分搜索区间
		if (target >= nums[0]) {
			return binarySearch(nums, 0, left, target)
		}
		return binarySearch(nums, left + 1, nums.length - 1, target)
	} else {
		return binarySearch(nums, left, right, target)
	}
}

function binarySearch(arr, left, right, target) {
	while (left < right) {
		const mid = left + Math.floor((right - left) / 2)
		if (arr[mid] < target) {
			left = mid + 1
		} else {
			right = mid
		}
	}
	return arr[left] === target ? left : -1
}