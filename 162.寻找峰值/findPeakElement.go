package problem0162

// 只要数组中存在一个元素比相邻元素大，那么沿着它一定可以找到一个峰值
func findPeakElement(nums []int) int {
	left, right := 0, len(nums)-1
	for left < right {
		mid := (left + right) >> 1
		// 如果nums[mid] > nums[mid+1], 则左侧存在峰值
		if nums[mid] > nums[mid+1] {
			right = mid
		} else {
			left = mid + 1
		}
	}
	return left
}
