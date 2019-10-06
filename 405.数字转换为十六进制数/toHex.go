package problem405

import (
	"math"
)

func toHex(num int) string {
	if num == 0 {
		return "0"
	}
	// 负数转为补码
	if num < 0 {
		num = num + math.MaxUint32 + 1
	}
	hexList := []string{"0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"}
	result := ""
	for num > 0 {
		// 使用0xf (00...01111)取得后四位, 原数字右移动四位
		result = hexList[num&0xf] + result
		num >>= 4
	}
	return result
}
