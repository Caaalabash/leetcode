package problem0035

// 排序数组 无重复, 有目标值则返回索引, 无目标值返回插入索引
// 普通做法, O(n)时间复杂度
func searchInsert(nums []int, target int) int {
	for i, v := range nums {
		if target <= v {
			return i
		}
	}
	return len(nums)
}


// 二分查找的话, 可以降低到O(logn)的时间复杂度
func searchInsertA(nums []int, target int) int {
	left, right := 0, len(nums) - 1

	for left <= right {
		mid := (left + right) >> 1
		v := nums[mid]

		if target > v {
			left = mid + 1
		} else if target < v {
			right = mid - 1
		} else {
			return mid
		}
	}
	return left
}
