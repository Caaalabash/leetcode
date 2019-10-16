package problem0500

import (
	"strings"
)

func findWords(words []string) []string {
	m := map[byte]int8{
		'q': 0, 'w': 0, 'e': 0, 'r': 0, 't': 0, 'y': 0, 'u': 0, 'i': 0, 'o': 0, 'p': 0,
		'a': 1, 's': 1, 'd': 1, 'f': 1, 'g': 1, 'h': 1, 'j': 1, 'k': 1, 'l': 1,
		'z': 2, 'x': 2, 'c': 2, 'v': 2, 'b': 2, 'n': 2, 'm': 2,
	}
	var result []string
	for _, word := range words {
		t := strings.ToLower(word)

		isValid := true
		for i := 0; i < len(t)-1; i++ {
			if m[t[i]] != m[t[i+1]] {
				isValid = false
				break
			}
		}
		if isValid {
			result = append(result, word)
		}
	}
	return result
}
