package problem0060

import (
	"strconv"
)

// 给定n和k, 返回第k个排列
func getPermutation(n int, k int) string {
	var nums []int
	for i := 1; i <= n; i++ {
		nums = append(nums, i)
	}
	return getSolution(nums, "", n, k-1)
}

func getSolution(nums []int, str string, n int, k int) string {
	if n == 1 {
		return str + strconv.Itoa(nums[0])
	}
	part := factorial(n - 1)
	startNumberIndex := k / part
	rest := k % part
	startNumber := nums[startNumberIndex]
	nums = append(nums[:startNumberIndex], nums[startNumberIndex+1:]...)

	return getSolution(nums, str+strconv.Itoa(startNumber), n-1, rest)
}

func factorial(num int) int {
	if num <= 1 {
		return 1
	} else {
		return num * factorial(num-1)
	}
}
