package problem1029

import "sort"

// 公司计划面试 2N 人。第 i 人飞往 A 市的费用为 costs[i][0]，飞往 B 市的费用为 costs[i][1]
// 返回将每个人都飞到某座城市的最低费用，要求每个城市都有 N 人抵达。

// 对于个人来说，不是去A就是去B，A-B的值就尤为重要，将costs按照A-B升序排列，前N个去A，后N个去B
func twoCitySchedCost(costs [][]int) int {
	sort.SliceStable(costs, func(i, j int) bool {
		if costs[i][1]-costs[i][0] > costs[j][1]-costs[j][0] {
			return true
		}
		return false
	})

	result := 0
	for _, cost := range costs[:len(costs)/2] {
		result += cost[0]
	}
	for _, cost := range costs[len(costs)/2:] {
		result += cost[1]
	}
	return result
}
