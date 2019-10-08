package problem0219

// 纯混数量，以后不能做这么无聊的题了
func containsNearbyDuplicate(nums []int, k int) bool {
	m := make(map[int]int, len(nums))
	for i, v := range nums {
		if val, ok := m[v]; ok && i-val <= k {
			return true
		}
		m[v] = i
	}
	return false
}
