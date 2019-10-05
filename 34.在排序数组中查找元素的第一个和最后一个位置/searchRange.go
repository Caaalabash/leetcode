package problem0034

// 两次二分搜索
func searchRange(nums []int, target int) []int {
	// 第一次二分: 取开始下标
	startLeft, right := 0, len(nums)-1
	for startLeft < right {
		mid := (startLeft + right) >> 1
		if nums[mid] < target {
			startLeft = mid + 1
		} else {
			right = mid
		}
	}
	// 不存在直接返回
	if len(nums) < 1 || nums[startLeft] != target {
		return []int{-1, -1}
	}
	// 第二次二分: 取结束下标
	endLeft, right := 0, len(nums)-1
	for endLeft < right {
		mid := (endLeft + right + 1) >> 1
		if nums[mid] > target {
			right = mid - 1
		} else {
			endLeft = mid
		}
	}
	return []int{startLeft, endLeft}
}
