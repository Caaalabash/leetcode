package problem0452

import "sort"

// 对于每个气球，提供的输入是水平方向上，气球直径的开始和结束坐标
// 贪心算法：用一支箭射爆尽可能多的气球
// 根据气球的结束坐标排序，子弹从结束坐标射出
func findMinArrowShots(points [][]int) int {
	if len(points) == 0 {
		return 0
	}
	sort.Slice(points, func(i, j int) bool {
		return points[i][1] < points[j][1]
	})
	shotIndex, result := points[0][1], 1
	for i := 1; i < len(points); i++ {
		if points[i][0] > shotIndex {
			result++
			shotIndex = points[i][1]
		}
	}
	return result
}
