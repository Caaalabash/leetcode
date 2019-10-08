package problem0187

// 哈希表做法 16ms 9mb
func findRepeatedDnaSequences(s string) []string {
	if len(s) <= 10 {
		return []string{}
	}
	m := make(map[string]struct{})
	result := make(map[string]struct{})

	for i := 0; i <= len(s)-10; i++ {
		str := s[i:i+10]
		if _, ok := m[str]; ok {
			if _, ok = result[str]; !ok {
				result[str] = struct{}{}
			}
		} else {
			m[str] = struct{}{}
		}
	}
	var list []string
	for key := range result {
		list = append(list, key)
	}
	return list
}
