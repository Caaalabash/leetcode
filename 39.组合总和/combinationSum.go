package problem0039

import "sort"

func combinationSum(candidates []int, target int) [][]int {
	var result [][]int
	sort.Ints(candidates)

	backTracking(candidates, target, &result, []int{}, 0)
	return result
}

// 除candidates和target两个参数意外，还需要额外的三个参数
// 1. result指针, 用于记录所有组合结果
// 2. temp切片, 用于记录当前组合中包含的数字
// 3. index, 索引
// 返回一个布尔值, 代表是否继续
func backTracking(candidates []int, target int, result *[][]int, temp []int, index int) (goon bool) {
	// target等于0 == 为退出条件, 代表恰好匹配
	// target小于0 == 代表当前分支的值偏大，后续的数字不再判断
	if target == 0 {
		// 拷贝temp, 避免temp变动影响结果
		t := make([]int, len(temp))
		copy(t, temp)
		*result = append(*result, t)
		return true
	} else if target < 0 {
		return false
	}
	for i := index; i < len(candidates); i++ {
		temp = append(temp, candidates[i])
		if !backTracking(candidates, target-candidates[i], result, temp, i) {
			break
		}
		temp = temp[:len(temp)-1]
	}
	return true
}
