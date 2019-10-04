package problem0058

import (
	"strings"
)

func lengthOfLastWord(s string) int {
	trimS := strings.Trim(s, " ")

	var result int
	for i := len(trimS) - 1; i >= 0; i-- {
		if trimS[i] == ' ' {
			break
		}
		result += 1
	}
	return result
}
