package problem0409

// 两两配对, 有孤儿取一个孤儿
func longestPalindrome(s string) int {
	m := make(map[byte]int)
	for _, v := range s {
		m[byte(v)]++
	}
	count := 0
	hasOrphan := false
	for _, v := range m {
		if v&1 == 0 {
			count += v
		} else {
			count += v - 1
			hasOrphan = true
		}
	}
	if hasOrphan {
		count++
	}
	return count
}
