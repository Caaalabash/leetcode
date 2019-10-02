package problem0033

// 递增数组在某个点进行旋转, 其结构必定为[递增高序列，递增低序列], 例如[5, 6, 7, 1, 2, 3, 4]
// 1. 找到旋转的下标 rotationIndex ，也就是数组中最小的元素。二分查找在这里可以派上用场
// 2. 在选中的数组区域中再次使用二分查找
func search(nums []int, target int) int {
	if len(nums) == 0 {
		return -1
	}
	if len(nums) == 1 {
		if target == nums[0] {
			return 0
		} else {
			return -1
		}
	}
	rotateIndex := findRotateIndex(nums)
	if rotateIndex == 0 {
		return searchSortList(nums, target)
	} else if target >= nums[0] {
		return searchSortList(nums[:rotateIndex], target)
	} else {
		offsetIndex := searchSortList(nums[rotateIndex:], target)
		if offsetIndex == -1 {
			return -1
		}
		return rotateIndex+offsetIndex
	}
}

// 二分法查找有序数组
func searchSortList(nums []int, target int) int {
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
		return -1
	}
	return left
}

// 二分法获得旋转索引
func findRotateIndex(nums []int) int {
	left, right := 0, len(nums)-1

	if nums[left] < nums[right] {
		return 0
	}
	for left < right {
		mid := (left + right) >> 1
		if nums[mid] > nums[right] {
			left = mid + 1
		} else {
			right = mid
		}
	}
	return left
}