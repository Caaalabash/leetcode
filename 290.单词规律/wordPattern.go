package problem0290

import (
	"strings"
)

func wordPattern(pattern string, s string) bool {
	kvMap := make(map[string]string, 0)
	vkMap := make(map[string]string, 0)
	patternList := strings.Split(pattern, "")
	wordList := strings.Split(s, " ")

	if len(patternList) != len(wordList) {
		return false
	}
	for index, p := range patternList {
		if v1, ok1 := kvMap[p]; !ok1 {
			kvMap[p] = wordList[index]
		} else if v1 != wordList[index] {
			return false
		}
		if v2, ok2 := vkMap[wordList[index]]; !ok2 {
			vkMap[wordList[index]] = p
		} else if v2 != p {
			return false
		}
	}
	return true
}
