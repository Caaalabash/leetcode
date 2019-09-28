package problem0067

import (
	"strconv"
)

func addBinary(a string, b string) string {
	var extra int
	var result string
	// 保证字符串a的长度最长
	if len(a) < len(b) {
		a, b = b, a
	}
	diff := len(a) - len(b)

	for i := len(b) - 1; i >= 0; i-- {
		subA, _ := strconv.Atoi(string(a[i+diff]))
		subB, _ := strconv.Atoi(string(b[i]))

		if subA+subB+extra >= 2 {
			result = strconv.Itoa(subA+subB+extra-2) + result
			extra = 1
		} else {
			result = strconv.Itoa(subA+subB+extra) + result
			extra = 0
		}
	}
	for i := diff - 1; i >= 0; i-- {
		t, _ := strconv.Atoi(string(a[i]))

		if t+extra >= 2 {
			result = strconv.Itoa(t+extra-2) + result
			extra = 1
		} else {
			result = strconv.Itoa(t+extra) + result
			extra = 0
		}
	}
	if extra == 1 {
		result = "1" + result
	}
	return result
}
