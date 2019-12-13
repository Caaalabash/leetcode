package problem0415

import (
	"strings"
)

// 数字的ascii码范围[0-9]对应[48-57]
func addStrings(num1 string, num2 string) string {
	var builder, result strings.Builder
	tempSum, carry := 0, 0

	for i, j := len(num1)-1, len(num2)-1; i >= 0 || j >= 0; {
		tempSum, carry = carry, 0
		if i >= 0 {
			tempSum += int(num1[i] - '0')
			i--
		}
		if j >= 0 {
			tempSum += int(num2[j] - '0')
			j--
		}
		if tempSum >= 10 {
			carry = 1
			tempSum = tempSum - 10
		}
		builder.WriteByte(byte(tempSum + '0'))
	}
	if carry == 1 {
		builder.WriteByte('1')
	}
	data := builder.String()
	for i := len(data)-1; i >= 0; i-- {
		result.WriteByte(data[i])
	}
	return result.String()
}