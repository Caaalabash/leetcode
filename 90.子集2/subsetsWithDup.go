package problem0090

import "sort"

// 不重复体现在，backTrack中的for循环不存在重复的数字，那么先对nums进行排序，然后for循环时比较前一个即可
func subsetsWithDup(nums []int) [][]int {
	var (
		result    [][]int
		backTrack func(index int, path []int)
	)
	backTrack = func(index int, path []int) {
		temp := make([]int, len(path))
		copy(temp, path)
		result = append(result, temp)

		for i := index; i < len(nums); i++ {
			if i > index && nums[i] == nums[i-1] {
				continue
			}
			path = append(path, nums[i])
			backTrack(i+1, path)
			path = path[:len(path)-1]
		}
	}
	sort.Ints(nums)
	backTrack(0, []int{})
	return result
}
