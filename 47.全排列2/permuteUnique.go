package problem0047

import (
	"sort"
)

func permuteUnique(nums []int) [][]int {
	sort.Ints(nums)
	return backTracking(nums)
}

func backTracking(nums []int) [][]int {
	if len(nums) == 0 {
		return nil
	}
	if len(nums) == 1 {
		return [][]int{nums}
	}
	if len(nums) == 2 {
		if nums[0] == nums[1] {
			return [][]int{nums}
		} else {
			return [][]int{{nums[0], nums[1]}, {nums[1], nums[0]}}
		}
	}
	var result [][]int
	for i, v := range nums {
		if i+1 < len(nums) && v == nums[i+1] {
			continue
		}

		temp := make([]int, len(nums))
		copy(temp, nums)
		rest := append(temp[:i], temp[i+1:]...)

		list := backTracking(rest)
		for _, l := range list {
			result = append(result, append([]int{v}, l...))
		}
	}
	return result
}
