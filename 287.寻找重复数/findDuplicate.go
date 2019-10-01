package problem0287

import "sort"

// 方法1: 排序后, 相邻元素相等即找到 12ms 3.8mb, 能解决, 但是没有价值
func findDuplicate(nums []int) int {
	var result int
	sort.Ints(nums)
	for i, lens := 0, len(nums); i < lens; i++ {
		if nums[i] == nums[i-1] {
			result = nums[i]
		}
	}
	return result
}

// 方法2: 二分法 8ms, 3.8mb
// 以 [1, 2, 2, 3, 4, 5, 6, 7] 为例，一共有 8 个数，每个数都在 1 和 7 之间。1 和 7 的中位数是 4，遍历整个数组，
// 统计小于等于 4 的整数的个数，至多应该为 4 个，如果超过 4 个就说明重复的数存在于区间 [1,4)
func findDuplicate1(nums []int) int {
	left, right := 1, len(nums) - 1
	for left < right {
		mid := (left + right) >> 1
		count := 0
		for i := 0; i < len(nums); i++ {
			if nums[i] <= mid {
				count++
			}
		}
		if count > mid {
			right = mid
		} else {
			left = mid + 1
		}
	}
	return left
}
