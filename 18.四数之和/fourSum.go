package problem0018

import "sort"

func fourSum(nums []int, target int) [][]int {
	var result [][]int

	if lens := len(nums); lens < 4 {
		return result
	} else {
		sort.Ints(nums)

		for i := 0; i < lens-3; i++ {
			if i > 0 && nums[i] == nums[i-1] {
				continue
			}
			for j := i + 1; j < lens-2; j++ {
				if j > i+1 && nums[j] == nums[j-1] {
					continue
				}
				left, right := j+1, lens-1
				for left < right {
					total := nums[i] + nums[j] + nums[left] + nums[right]
					if total == target {
						result = append(result, []int{nums[i], nums[j], nums[left], nums[right]})
						for ; left < right && nums[left] == nums[left+1]; left++ {
						}
						for ; left < right && nums[right] == nums[right-1]; right-- {
						}
						left++
						right--
					} else if total > target {
						right--
					} else {
						left++
					}
				}
			}
		}
		return result
	}
}
