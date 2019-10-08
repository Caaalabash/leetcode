package problem0217

// 纯混数量，以后不能做这么无聊的题了
func containsDuplicate(nums []int) bool {
	m := make(map[int]struct{}, len(nums))
	for _, v := range nums {
		if _, ok := m[v]; ok {
			return true
		}
		m[v] = struct{}{}
	}
	return false
}
