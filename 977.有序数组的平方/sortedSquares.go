package problem0977

import "sort"

func sortedSquares(A []int) []int {
	for i := 0; i < len(A); i++ {
		A[i] *= A[i]
	}
	sort.Ints(A)
	return A
}

func sortedSquares1(A []int) []int {
	result := make([]int, len(A))
	start, end, index := 0, len(A)-1, len(A)-1
	for start <= end {
		if A[start]*A[start] > A[end]*A[end] {
			result[index] = A[start] * A[start]
			start++
		} else {
			result[index] = A[end] * A[end]
			end--
		}
		index--
	}
	return result
}
