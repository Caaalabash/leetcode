package problem1291

import (
	"sort"
)

// 顺次数：每一位上的数字都比前一位上的数字大1
// 用backTrack函数来获取以数字i开头的所有顺次数
func sequentialDigits(low int, high int) []int {
	var (
		result    []int
		backTrack func(path int, endInt int)
	)
	backTrack = func(path int, endInt int) {
		if path > high {
			return
		}
		if low <= path && path <= high {
			result = append(result, path)
		}
		if endInt+1 <= 9 {
			backTrack(path*10+endInt+1, endInt+1)
		}
	}
	for i := 1; i <= 9; i++ {
		backTrack(i, i)
	}
	sort.Ints(result)
	return result
}
