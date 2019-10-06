package problem0125

// 头尾指针 0ms 2.7mb
func isPalindrome(s string) bool {
	if len(s) == 0 {
		return true
	}
	left, right := 0, len(s)-1
	for left < right {
		if !isValid(s[left]) {
			left++
			continue
		}
		if !isValid(s[right]) {
			right--
			continue
		}
		if s[left] != s[right] && (s[left]^32) != s[right] {
			return false
		} else {
			left++
			right--
		}
	}
	return true
}

func isValid(s byte) bool {
	return (s >= '0' && s <= '9') || (s >= 'A' && s <= 'Z') || (s >= 'a' && s <= 'z')
}
