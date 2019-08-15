package problem0015

import "sort"

// 给定一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，
// 使得 a + b + c = 0 ？找出所有满足条件且不重复的三元组。

// 例如, 给定数组 nums = [-4, -1, -1, 0, 1, 2]，
//
// 满足要求的三元组集合为：
// [
//   [-1, 0, 1],
//   [-1, -1, 2]
// ]
// 使用双指针法
func threeSum(nums []int) [][]int {
	var result [][]int

	if lens := len(nums); lens < 3 {
		return result
	} else {
		sort.Ints(nums)

		for i := 0; i < lens; i++ {
			if nums[i] > 0 {
				break
			}
			if i > 0 && nums[i] == nums[i - 1] {
				continue
			}
			left, right := i + 1, lens - 1
			for left < right {
				if total := nums[i] + nums[left] + nums[right]; total == 0 {
					result = append(result, []int{nums[i], nums[left], nums[right]})
					for ; left < right && nums[left] == nums[left + 1]; left++ {}
					for ; left < right && nums[right] == nums[right - 1]; right-- {}
					left++
					right--
				} else if total > 0 {
					right--
				} else {
					left++
				}
			}
		}
		return result
	}
}
