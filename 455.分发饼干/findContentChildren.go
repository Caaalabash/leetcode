package problem0455

import "sort"

// 排序g,s => 倒着遍历s, 找到能满足的g
func findContentChildren(g []int, s []int) int {
	sort.Ints(s)
	sort.Ints(g)
	result, i, j := 0, len(s)-1, len(g)-1
	for i >= 0 && j >= 0 {
		if s[i] >= g[j] {
			result++
			i--
		}
		j--
	}
	return result
}
