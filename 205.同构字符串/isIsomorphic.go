package problem0205

// 判断s和t之间的每个字符有没有一对一的映射关系
func isIsomorphic(s string, t string) bool {
	sMap := make(map[byte]byte, 0)
	tMap := make(map[byte]byte, 0)

	for i := 0; i < len(s); i++ {
		if v, ok := tMap[t[i]]; !ok {
			tMap[t[i]] = s[i]
		} else if v != s[i] {
			return false
		}
		if v, ok := sMap[s[i]]; !ok {
			sMap[s[i]] = t[i]
		} else if v != t[i] {
			return false
		}
	}
	return true
}
