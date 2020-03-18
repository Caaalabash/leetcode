package problem1160

func countCharacters(words []string, chars string) int {
	var byteCount [26]int
	for _, b := range chars {
		byteCount[b-'a']++
	}
	var result int
OUTER:
	for _, word := range words {
		t := byteCount
		for _, b := range word {
			if t[b-'a'] == 0 {
				continue OUTER
			}
			t[b-'a']--
		}
		result += len(word)
	}
	return result
}
