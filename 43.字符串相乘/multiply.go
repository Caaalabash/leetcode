package problem0043

import "strings"

// 就当作竖式乘法来做，从后向前遍历
// 数字的ascii值[0,9]对应[48,57]
// 1 2 3 4 （被乘数)
// x   6 7  (乘数)
// -------
// . . . 8
func multiply(num1 string, num2 string) string {
	// 传统的竖式乘法, 位数较长的放在上方, 也就是让num2位数更长
	if len(num1) > len(num2) {
		num1, num2 = num2, num1
	}
	// 从后向前遍历，外层循环为乘数，内层循环为被乘数
	var resultList []string

	tempSum, carry := "", 0
	for i := len(num1) - 1; i >= 0; i-- {
		// 如果当前数为0, 则跳过
		if num1[i] == '0' {
			continue
		}
		tempSum, carry = "", 0
		// 开始一轮计算，需要处理多的进位，并补零
		for j := len(num2) - 1; j >= 0; j-- {
			product := int(num1[i]-'0')*int(num2[j]-'0') + carry
			carry = product / 10
			tempSum = string(product%10+'0') + tempSum
		}
		if carry != 0 {
			tempSum = string(carry+'0') + tempSum
		}
		for j := len(num1) - i - 1; j > 0; j-- {
			tempSum += "0"
		}
		resultList = append(resultList, tempSum)
	}

	result := "0"
	for _, v := range resultList {
		result = addStrings(result, v)
	}
	return result
}

// 415题的题解
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
	for i := len(data) - 1; i >= 0; i-- {
		result.WriteByte(data[i])
	}
	return result.String()
}
