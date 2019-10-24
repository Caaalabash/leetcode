package problem1189

import (
	"math"
)

func maxNumberOfBalloons(text string) int {
	m := map[byte]int{'b': 0, 'a': 0, 'l': 0, 'o': 0, 'n': 0}
	for i := range text {
		if _, ok := m[text[i]]; ok {
			if text[i] == 'l' || text[i] == 'n' {
				m[text[i]] += 1
			} else {
				m[text[i]] += 2
			}
		}
	}
	min := math.MaxInt32
	for _, v := range m {
		if v < min {
			min = v
		}
	}
	return min / 2
}
