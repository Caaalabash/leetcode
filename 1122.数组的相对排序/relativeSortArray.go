package problem1122

import "sort"

func relativeSortArray(arr1 []int, arr2 []int) []int {
	changeIndex := 0
	for _, value := range arr2 {
		for i := changeIndex; i < len(arr1); i++ {
			if arr1[i] == value {
				arr1[i], arr1[changeIndex] = arr1[changeIndex], arr1[i]
				changeIndex++
			}
		}
	}
	sort.Ints(arr1[changeIndex:])
	return arr1
}
