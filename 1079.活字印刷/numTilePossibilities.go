package problem1079

// 输入："AAB"
// 输出："8"
// 序列："A", "B", "AA", "AB", "BA", "AAB", "ABA", "BAA"
// 思路：将字符串转换为频次数组
func numTilePossibilities(tiles string) int {
	var (
		result        int
		frequencyList [26]int
		backTrack     func()
	)
	for _, letter := range tiles {
		frequencyList[letter-'A']++
	}
	backTrack = func() {
		for i := 0; i < 26; i++ {
			if frequencyList[i] == 0 {
				continue
			}
			result++
			frequencyList[i]--
			backTrack()
			frequencyList[i]++
		}
	}
	backTrack()
	return result
}
