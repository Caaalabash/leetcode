package problem0870

import (
	"sort"
)

// 田忌赛马
// 对A排序，然后遍历B，在A中寻找最大值，没有就返回第一个值 => O(n2)时间 O(n)空间
// 0 <= A[i] <= 10^9
// 0 <= B[i] <= 10^9
const USED = -1

func advantageCount(A []int, B []int) []int {
	sort.Ints(A)
	result := make([]int, 0)

	for _, b := range B {
		index := -1
		for i := 0; i < len(A); i++ {
			if A[i] == USED {
				continue
			}
			if A[i] > b {
				index = i
				break
			} else if index < 0 {
				index = i
			}
		}
		result = append(result, A[index])
		A[index] = USED
	}
	return result
}
