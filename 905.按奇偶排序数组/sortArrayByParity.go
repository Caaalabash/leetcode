package problem0905

import "sort"

func sortArrayByParity(A []int) []int {
	sort.SliceStable(A, func(i, j int) bool {
		return A[i]%2 < A[j]%2
	})
	return A
}
