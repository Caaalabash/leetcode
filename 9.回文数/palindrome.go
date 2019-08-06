package problem0009

import "strconv"

// 和整数反转十分相似
func isPalindrome(x int) bool {
	if x < 0 {
		return false
	}
	num, cur := x, 0
	for num != 0 {
		cur = cur * 10 + num % 10
		num /= 10
	}
	return x == cur
}

// 将整数转为字符串, 将字符串分割为数组, 只需要循环数组一半的长度判断即可
func isPalindromeA(x int) bool {
	if x < 0 {
		return false
	}
	s := strconv.Itoa(x)
	for i, j := 0, len(s) - 1; i < j; i, j = i + 1, j - 1 {
		if s[i] != s[j] {
			return false
		}
	}
	return true
}