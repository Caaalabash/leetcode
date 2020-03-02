package problem0387

// 没有奇淫巧技时O(n)即可
func firstUniqChar(s string) int {
	m := make(map[byte]int, 0)

	for i := 0; i < len(s); i++ {
		if _, ok := m[s[i]]; !ok {
			m[s[i]] = 1
		} else {
			m[s[i]]++
		}
	}
	for i := 0; i < len(s); i++ {
		if v := m[s[i]]; v == 1 {
			return i
		}
	}
	return -1
}

// 不过这道题可以使用338题的做法, 更高效
func firstUniqChar1(s string) int {
	var container [26]int
	for _, c := range s {
		container[c-'a']++
	}
	for i, c := range s {
		if container[c-'a'] == 1 {
			return i
		}
	}
	return -1
}
