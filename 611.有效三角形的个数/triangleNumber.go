package problem0611

import "sort"

// 方法一：枚举，时间复杂度O(N3)，空间复杂度O(1)，略了

// 方法二：排序 + 二分查找，时间复杂度O(N2logN)，空间复杂度O(logN)
// 寻找第一个大于等于target的值
func binarySearch(nums []int, left int, right int, target int) int {
	for left < right {
		mid := (left + right) >> 1
		if nums[mid] < target {
			left = mid + 1
		} else {
			right = mid
		}
	}
	if nums[left] < target {
		return -1
	}
	return left
}

func triangleNumber(nums []int) int {
	count := 0
	length := len(nums)
	sort.Ints(nums)

	for i := 0; i < length-2; i++ {
		if nums[i] == 0 {
			continue
		}
		k := i + 2
		for j := i + 1; j < length-1; j++ {
			// 二分法
			k = binarySearch(nums, k, length-1, nums[i]+nums[j])
			if k == -1 {
				// 子区间[j+1, length-1]全部能构成三角形
				count += length - j - 1
			} else {
				// 子区间[j+1, k-1]全部能构成三角形
				count += k - j - 1
			}
		}
	}
	return count
}
