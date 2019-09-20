package problem0093

import (
	"strconv"
)

func restoreIpAddresses(s string) []string {
	var result []string
	backTracking(s, 0, &result, "", 4)
	return result
}

// ip一共4段, 每段1~3个字符, 介于1～255之间, 0需要特殊处理！
func backTracking(s string, index int, result *[]string, temp string, part int) {
	// 超长: 剩余长度 > 剩余段数 * 最大段长
	if len(s)-index > part*3 {
		return
	}
	// 存储: 长度吻合 & 剩余段数为0
	if len(s) == index && part == 0 {
		*result = append(*result, temp[:len(temp)-1])
		return
	}
	// 每段向后探索三位
	for i := index; i < index+3; i++ {
		// 避免越界
		if i >= len(s) {
			break
		}
		// 如果该段首位是0, 不再继续探索后两位
		if i == index && string(s[i]) == "0" {
			backTracking(s, i+1, result, temp+"0.", part-1)
			break
		}
		num, _ := strconv.Atoi(string(s[index : i+1]))
		if num > 0 && num < 256 {
			backTracking(s, i+1, result, temp+string(s[index:i+1])+".", part-1)
		}
	}
}
