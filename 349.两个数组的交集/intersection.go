package problem0349

import (
	"sort"
)

// 题目给了二分查找的标签, 就先用二分查找了, 一开始就感觉没必要, 但是还是写完了
// 4ms 4.4mb
func intersection(nums1 []int, nums2 []int) []int {
	// 使nums1的长度小于nums2, 且nums2需要排序
	if len(nums1) > len(nums2) {
		nums1, nums2 = nums2, nums1
	}
	sort.Ints(nums2)
	var result []int
	m := make(map[int]struct{})
	for i := 0; i < len(nums1); i++ {
		if _, ok := m[nums1[i]]; ok {
			continue
		}
		m[nums1[i]] = struct{}{}
		r := searchIndex(nums2, nums1[i])
		if r != -1 {
			result = append(result, nums1[i])
		}
	}
	return result
}

func searchIndex(nums []int, target int) int {
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

// 哈希表 4ms 4.4mb
// 发现0ms还是4ms也就图一乐
func intersection1(nums1 []int, nums2 []int) []int {
	set := make(map[int]struct{})
	res := make([]int, 0)
	for _, v1 := range nums1 {
		set[v1] = struct{}{}
	}
	for _, v2 := range nums2 {
		if _, ok := set[v2]; ok {
			res = append(res, v2)
			delete(set, v2)
		}
	}
	return res
}
