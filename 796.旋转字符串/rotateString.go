package problem0796

import "strings"

// 在A+A里面找B
func rotateString(A string, B string) bool {
	if len(A) != len(B) {
		return false
	}
	return strings.Contains(A+A, B)
}
