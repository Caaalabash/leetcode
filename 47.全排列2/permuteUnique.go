package problem0047

import (
	"sort"
)

// 在46题目的基础上，有如下变化：nums数字可以重复，最终结果不能重复
// 因此需要"在一定会产生重复结果集的地方剪枝"
// 先对nums进行排序，再引入used数组，记忆上次的内容, 而是否需要减枝
func permuteUnique(nums []int) [][]int {
	var (
		result    [][]int
		used      = make([]bool, len(nums))
		backTrack func(path []int)
	)
	backTrack = func(path []int) {
		if len(path) == len(nums) {
			temp := make([]int, len(path))
			copy(temp, path)
			result = append(result, temp)
			return
		}
		for i := 0; i < len(nums); i++ {
			if used[i] {
				continue
			}
			if i > 0 && nums[i] == nums[i-1] && !used[i-1] {
				continue
			}
			path = append(path, nums[i])
			used[i] = true
			backTrack(path)
			used[i] = false
			path = path[:len(path)-1]
		}
	}
	sort.Ints(nums)
	backTrack([]int{})
	return result
}
