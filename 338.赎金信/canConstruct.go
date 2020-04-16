package problem0383

// 判断第一个字符串能不能由第二个字符串里的字符构成
func canConstruct(ransomNote string, magazine string) bool {
	mSet := make([]int, 26)
	for _, s := range magazine {
		mSet[s-'a']++
	}
	for _, s := range ransomNote {
		mSet[s-'a']--
		if mSet[s-'a'] < 0 {
			return false
		}
	}
	return true
}
