package problem0575

import "sort"

// 妹妹能获得的糖果种类 = Min(一半的数量, 所有种类数)
// 字典解法: 时间复杂度O(n), 空间复杂度O(n)
func distributeCandies(candies []int) int {
	m := make(map[int]struct{})
	for _, v := range candies {
		if _, ok := m[v]; ok {
			continue
		}
		m[v] = struct{}{}
	}

	if len(m) > len(candies)/2 {
		return len(candies) / 2
	}
	return len(m)
}

// 先排序, 相邻数字做比较, 不同则代表新的种类
// 时间复杂度O(nlogn) 空间复杂度O(1)
func distributeCandies1(candies []int) int {
	sort.Ints(candies)

	var result = 1
	for i := 1; i < len(candies) && result < len(candies)/2; i++ {
		if candies[i] > candies[i-1] {
			result++
		}
	}
	return result
}
