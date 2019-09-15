package problem0040

import "sort"

func combinationSum2(candidates []int, target int) [][]int {
	var result [][]int
	sort.Ints(candidates)

	backTracking(&result, candidates, target, []int{}, 0)
	return result
}

// 排序 [1, 1, 2, 5, 6, 7, 10] target = 8
// 如果arr[i]与arr[i - 1]相同, continue
func backTracking(result *[][]int, candidates []int, diff int, temp []int, index int) (goon bool) {
	if diff == 0 {
		t := make([]int, len(temp))
		copy(t, temp)
		*result = append(*result, t)
		return true
	} else if diff < 0 {
		return false
	}
	for i, lens := index, len(candidates); i < lens; i++ {
		if i > index && candidates[i] == candidates[i-1] {
			continue
		}
		temp = append(temp, candidates[i])
		if !backTracking(result, candidates, diff-candidates[i], temp, i+1) {
			break
		}
		temp = temp[:len(temp)-1]
	}
	return true
}
