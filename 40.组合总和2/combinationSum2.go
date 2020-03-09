package problem0040

import "sort"

func combinationSum2(candidates []int, target int) [][]int {
	var (
		result    [][]int
		backTrack func(path []int, target int, index int) (shouldGoOn bool)
	)
	backTrack = func(path []int, target int, index int) (shouldGoOn bool) {
		if target == 0 {
			temp := make([]int, len(path))
			copy(temp, path)
			result = append(result, temp)
			return true
		}
		if target < 0 {
			return false
		}
		for i := index; i < len(candidates); i++ {
			if i > index && candidates[i] == candidates[i-1] {
				continue
			}
			path = append(path, candidates[i])
			if !backTrack(path, target-candidates[i], i+1) {
				break
			}
			path = path[:len(path)-1]
		}
		return true
	}
	sort.Ints(candidates)
	backTrack([]int{}, target, 0)
	return result
}
