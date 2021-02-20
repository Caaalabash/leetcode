package problem1288

import "sort"

// 贪心算法：每一步都选取最优的方案，从而得到全局最优解
// 对interval排序，很容易想到：起点相同时，终点降序排列；起点不同时，起点升序排列
// 1 <= intervals.length <= 1000
func removeCoveredIntervals(intervals [][]int) int {
	sort.SliceStable(intervals, func(i, j int) bool {
		if intervals[i][0] == intervals[j][0] {
			return intervals[i][1] > intervals[j][1]
		}
		return intervals[i][0] < intervals[j][0]
	})
	deleteCount := 0
	prevEnd := intervals[0][1]
	for i := 1; i < len(intervals); i++ {
		if intervals[i][1] <= prevEnd {
			deleteCount++
		} else {
			prevEnd = intervals[i][1]
		}
	}
	return len(intervals) - deleteCount
}
