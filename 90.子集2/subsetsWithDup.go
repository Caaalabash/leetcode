package problem0090

import "sort"

func subsetsWithDup(nums []int) [][]int {
	var result [][]int
	sort.Ints(nums)
	backTracking(nums, 0, &result, []int{})
	return result
}

func backTracking(nums []int, index int, result *[][]int, temp []int) {
	*result = append(*result, temp)

	for i := index; i < len(nums); i++ {
		if i > index && nums[i] == nums[i-1] {
			continue
		}
		temp = append(temp, nums[i])
		t := make([]int, len(temp))
		copy(t, temp)
		backTracking(nums, i+1, result, t)
		temp = temp[:len(temp)-1]
	}
}
