package problem0350

func intersect(nums1 []int, nums2 []int) []int {
	result := make([]int, 0)
	m1 := make(map[int]int, 0)
	m2 := make(map[int]int, 0)
	for _, v := range nums1 {
		m1[v]++
	}
	for _, v := range nums2 {
		m2[v]++
	}
	for k1, v1 := range m1 {
		if v2, ok := m2[k1]; ok {
			for i := 0; i < min(v1, v2); i++ {
				result = append(result, k1)
			}
		}
	}
	return result
}

func min(a, b int) int {
	if a > b {
		return b
	}
	return a
}
