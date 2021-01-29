package problem0930

// 前缀和
func numSubarraysWithSum(A []int, S int) int {
	// map: 前缀和 -> 该和出现的次数
	preMap := map[int]int{0: 1}

	result := 0
	sum := 0
	for _, a := range A {
		sum += a
		if val, ok := preMap[sum-S]; ok {
			result += val
		}
		preMap[sum]++
	}
	return result
}
