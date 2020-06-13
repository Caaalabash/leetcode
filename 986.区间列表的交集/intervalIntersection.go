package problem0986

// 最佳题解：https://leetcode-cn.com/problems/interval-list-intersections/solution/jiu-pa-ni-bu-dong-shuang-zhi-zhen-by-hyj8/
// 双指针移动的时机：求完重叠区间后，较短的子区间已经不可能和其他区间重叠了，较长的子区间还有重叠的可能
func intervalIntersection(A [][]int, B [][]int) [][]int {
	result := make([][]int, 0)
	i, j := 0, 0

	for i < len(A) && j < len(B) {
		start := max(A[i][0], B[j][0])
		end := min(A[i][1], B[j][1])
		if end >= start {
			result = append(result, []int{start, end})
		}
		// 关键步骤
		if A[i][1] > B[j][1] {
			j++
		} else {
			i++
		}
	}
	return result
}

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}

func min(a, b int) int {
	if a < b {
		return a
	}
	return b
}
