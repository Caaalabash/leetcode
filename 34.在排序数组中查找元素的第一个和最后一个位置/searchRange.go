package problem0034

// 首先二分查找搜索第一个索引, 完了向后for循环:)
func searchRange(nums []int, target int) []int {
	left, right := 0, len(nums)-1

	for left < right {
		mid := (left + right) >> 1
		if nums[mid] >= target {
			right = mid
		} else {
			left = mid + 1
		}
	}
	if len(nums) < 1 || nums[left] != target {
		return []int{-1, -1}
	}
	for i := left; i < len(nums); i++ {
		if nums[i] != target {
			break
		}
		right = i
	}
	return []int{left, right}
}