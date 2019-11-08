package problem0645

// 哈希表+数学: 等差数列求和 + 多余的数字 - nums列表 = 缺失的数字
func findErrorNums(nums []int) []int {
	m := make(map[int]struct{})
	total := len(nums) * (len(nums) + 1) / 2
	result := []int{0, 0}

	for _, v := range nums {
		if _, ok := m[v]; ok {
			result[0] = v
		}
		m[v] = struct{}{}
		total -= v
	}
	result[1] = total + result[0]

	return result
}
