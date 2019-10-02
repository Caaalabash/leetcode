package problem0006

import "strings"

// 将一个给定的字符串根据给定的行数按照Z字形排列
// 找到如下的规律
// 0                   2n-2
// 1              2n-3 2n-1
// 2          n-4      2n
// .       .           .
// .     .             .
// n-2 n               3n-4
// n-1                 3n-3
// 即:
// 1. 步长step = 2n-2
// 2. 首行/末行下标间距为step
// 3. 中间行下标间距为 step-2i | 2i | step-2i | 2i循环
// 4ms 4.1mb
func convert(s string, numRows int) string {
	if numRows == 1 {
		return s
	}
	var result strings.Builder
	step := 2*numRows - 2
	// 遍历每一行
	for i := 0; i < numRows; i++ {
		// 计算出当前行元素的下标并存储
		for j, temp, add := i, 0, 0; j < len(s); temp++ {
			result.WriteByte(s[j])
			if i == 0 || i == numRows-1 {
				add = step
			} else if temp%2 == 0 {
				add = step - 2*i
			} else {
				add = 2 * i
			}
			j += add
		}
	}
	return result.String()
}
