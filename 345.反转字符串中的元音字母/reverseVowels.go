package problem0345

func isVowels(ch byte) bool {
	switch ch {
	case 'a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U':
		return true
	default:
		return false
	}
}

func reverseVowels(s string) string {
	str := []byte(s)
	i, j := 0, len(s)-1
	for i < j {
		if !isVowels(str[i]) {
			i++
			continue
		}
		if !isVowels(str[j]) {
			j--
			continue
		}
		str[i], str[j] = str[j], str[i]
		i++
		j--
	}
	return string(str)
}
