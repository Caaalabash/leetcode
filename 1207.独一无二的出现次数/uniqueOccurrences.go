package problem1207

func uniqueOccurrences(arr []int) bool {
	m1 := make(map[int]int)
	for _, v := range arr {
		m1[v] += 1
	}
	m2 := make(map[int]struct{})
	for _, v := range m1 {
		if _, ok := m2[v]; ok {
			return false
		}
		m2[v] = struct{}{}
	}
	return true
}
