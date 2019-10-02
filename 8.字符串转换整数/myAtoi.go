package problem0008

import (
	"math"
	"strconv"
	"strings"
)

// 这道题没什么价值
// 实现一个atoi函数, 使其能将字符串转换成整数
// 1. 丢弃无用的开头空格字符,
func myAtoi(str string) int {
	isNotNumber := func(s string) bool {
		return s < "0" || s > "9"
	}
	// 取出空格
	str = strings.TrimSpace(str)
	if str == "" || (len(str) == 1 && isNotNumber(str)) {
		return 0
	}
	// 记录符号
	flag := ""
	if first := string(str[0]); first == "-" {
		flag = "-"
		str = str[1:]
	} else if first == "+" {
		str = str[1:]
	}
	// 遍历记录连续数字
	resStr := "0"
	for i := 0; i < len(str); i++ {
		if isNotNumber(string(str[i])) {
			break
		}
		resStr += string(str[i])
	}
	resStr = flag + resStr
	res, err := strconv.ParseInt(resStr, 10, 32)

	if err != nil {
		if flag == "-" {
			return math.MinInt32
		} else {
			return math.MaxInt32
		}
	}
	return int(res)
}
