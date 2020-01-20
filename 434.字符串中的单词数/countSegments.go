package problem0434

// 本题的单词等于连续的不是空格的字符, 等于split(' ').filter(Boolean)
// 找两个空格即可, flag为true代表遇到空格了~
func countSegments(s string) int {
	var (
		flag  = true
		count = 0
	)
	for i := 0; i < len(s); i++ {
		if s[i] == ' ' {
			flag = true
		} else if flag {
			flag = false
			count++
		}
	}
	return count
}
