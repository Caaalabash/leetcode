package problem012

import "strings"

// 16ms 3.4mb
func intToRoman(num int) string {
	var result strings.Builder

	numList := []int{1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000}
	charList := []string{"I", "IV", "V", "IX", "X", "XL", "L", "XC", "C", "CD", "D", "CM", "M"}

	for i := 12; i >= 0; {
		if num >= numList[i] {
			num -= numList[i]
			result.WriteString(charList[i])
		} else {
			i--
		}
	}
	return result.String()
}
