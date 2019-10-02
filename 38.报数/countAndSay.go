package problem0038

import (
	"strconv"
	"strings"
)

// 这个题目非常的抽象, 总结就是"看见1就说1个1, 看见n个1就说n个1, 看见其他数字也一样"
// 1.     1
// 2.     11
// 3.     21
// 4.     1211  ---> 一个1, 一个2, 两个1  --> 11 12 21
// 5.     111221
func countAndSay(n int) string {
	// 递归出口
	if n == 1 {
		return "1"
	}
	// 获得上一项的值, 连续计数器, 用于拼接的字符串
	prev := countAndSay(n - 1)
	count, lastIndex := 1, len(prev)-1
	var result strings.Builder

	for i := range prev[:lastIndex] {
		// 当前值和下一个值不相等, 追加字符: count个prev[i], 重置计数器
		if prev[i] != prev[i+1] {
			result.WriteString(strconv.Itoa(count))
			result.WriteByte(prev[i])
			count = 1
		} else {
			count++
		}
	}
	// 补充上最后的值
	result.WriteString(strconv.Itoa(count))
	result.WriteByte(prev[lastIndex])
	return result.String()
}
