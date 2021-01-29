package problem1200

import (
	"math"
	"sort"
)

func minimumAbsDifference(arr []int) [][]int {
	// 先O(nlogn)排序，最小绝对差的元素对就是两两之间的差值
	sort.Ints(arr)
	minDiff := math.MaxInt32

	pair := make([][]int, 0)
	for i := 1; i < len(arr); i++ {
		diff := arr[i] - arr[i-1]
		if diff > minDiff {
			continue
		}
		if diff < minDiff {
			minDiff = diff
			pair = [][]int{}
		}
		pair = append(pair, []int{arr[i-1], arr[i]})
	}
	return pair
}
