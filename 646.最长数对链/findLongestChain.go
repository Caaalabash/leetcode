package problem0646

import (
	"math"
	"sort"
)

func findLongestChain(pairs [][]int) int {
	// 排序
	sort.SliceStable(pairs, func(i, j int) bool {
		if pairs[i][0] == pairs[j][0] {
			return pairs[i][1] < pairs[j][1]
		} else {
			return pairs[i][0] < pairs[j][0]
		}
	})
	result := 0
	max := math.MinInt32

	for i := len(pairs) - 1; i >= 0; i-- {
		if pairs[i][1] < max {
			max = pairs[i][0]
			result++
		}
	}

	return result
}
