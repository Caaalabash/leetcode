package problem0299

import "strconv"

func getHint(secret string, guess string) string {
	a, b := 0, 0
	mapS, mapG := make([]int, 10), make([]int, 10)
	for i := range secret {
		if secret[i] == guess[i] {
			a++
		} else {
			mapS[secret[i]-'0']++
			mapG[guess[i]-'0']++
		}
	}
	for i := 0; i < 10; i++ {
		b += min(mapS[i], mapG[i])
	}
	return strconv.Itoa(a) + "A" + strconv.Itoa(b) + "B"
}

func min(a, b int) int {
	if a > b {
		return b
	}
	return a
}
