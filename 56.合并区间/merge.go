package problem0056

import "sort"

type IntSlice [][]int

func (s IntSlice) Less(i, j int) bool { return s[i][0] < s[j][0] }
func (s IntSlice) Swap(i, j int)      { s[i], s[j] = s[j], s[i] }
func (s IntSlice) Len() int           { return len(s) }

// 给出一个区间的集合，请合并所有重叠的区间
func merge(intervals [][]int) [][]int {
	if len(intervals) < 2 {
		return intervals
	}
	sort.Sort(IntSlice(intervals))
	result := make([][]int, 0)
	result = append(result, intervals[0])

	for i := 1; i < len(intervals); i++ {
		temp := intervals[i]
		peak := result[len(result)-1]

		if temp[0] > peak[1] {
			result = append(result, temp)
		} else {
			peak[1] = max(peak[1], temp[1])
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
