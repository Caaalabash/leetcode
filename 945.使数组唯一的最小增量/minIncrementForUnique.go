package problem0945

import "sort"

// 经过多少次增1操作才能让一个无序的数组的所有值都唯一
// 首先将数组排序后遍历，每次都把当前值cur和前一个值prev比较
// [1, 2, 2, 3, 5, 10]
// cur >= prev+1 说明不用做处理
// 否则 result += prev+1 - cur
func minIncrementForUnique(A []int) int {
	if len(A) == 0 {
		return 0
	}
	sort.Ints(A)
	result, prev := 0, A[0]
	for i := 1; i < len(A); i++ {
		if A[i] >= prev+1 {
			prev = A[i]
		} else {
			result += prev + 1 - A[i]
			prev = prev + 1
		}
	}
	return result
}
