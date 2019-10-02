package problem0016

import (
	"sort"
)

func threeSumClosest(nums []int, target int) int {
	sort.Ints(nums)
	ans := nums[0] + nums[1] + nums[2]
	lens := len(nums)
	for i := 0; i < lens; i++ {
		left, right := i+1, lens-1
		for left < right {
			total := nums[i] + nums[left] + nums[right]
			if abs(target-total) < abs(target-ans) {
				ans = total
			}
			if total > target {
				right--
			} else if total < target {
				left++
			} else {
				return ans
			}
		}
	}
	return ans
}
func abs(val int) int {
	if val < 0 {
		return -val
	}
	return val
}
