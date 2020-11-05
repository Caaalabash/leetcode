package problem0029

import (
	"math"
)

func divide(dividend int, divisor int) int {
	// 处理溢出: 只有一种情况
	if dividend == math.MinInt32 && divisor == -1 {
		return math.MaxInt32
	}
	// 处理符号
	flag := 1
	if dividend < 0 {
		flag = -flag
		dividend = -dividend
	}
	if divisor < 0 {
		flag = -flag
		divisor = -divisor
	}
	return div(dividend, divisor) * flag
}

// 核心
func div(a, b int) int {
	if a < b {
		return 0
	}
	// a > b, 除出来至少是1
	count := 1
	// 拷贝一个b
	temp := b
	// 如果temp翻倍还是小于a, count、temp都翻倍
	for temp+temp <= a {
		count += count
		temp += temp
	}
	// 如果temp翻倍大于a了，问题转移到div(a-temp, b)
	return count + div(a-temp, b)
}
