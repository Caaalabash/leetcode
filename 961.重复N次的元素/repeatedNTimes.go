package problem0961

import "sort"

// 哈希表做法: 一旦找到一个重复元素, 那就是答案 O(n) O(n)
func repeatedNTimes(A []int) int {
	m := make(map[int]struct{})
	result := 0
	for _, v := range A {
		if _, ok := m[v]; ok {
			result = v
		}
		m[v] = struct{}{}
	}
	return result
}

// 先排序, [1,2,3,3], 比较A[0]与A[1]的关系
func repeatedNTimes1(A []int) int {
	sort.Ints(A)
	if A[0] == A[1] {
		return A[0]
	}
	return A[len(A)/2]
}