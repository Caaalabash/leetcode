package problem1221

// 局部平衡了就切割
func balancedStringSplit(s string) int {
	lCount, rCount, result := 0, 0, 0
	for i := 0; i < len(s); i++ {
		if s[i] == 'R' {
			rCount++
		} else {
			lCount++
		}
		if lCount != 0 && lCount == rCount {
			lCount, rCount, result = 0, 0, result+1
		}
	}
	return result
}
