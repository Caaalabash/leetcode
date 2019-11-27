package problem0344

func reverseString(s []byte) {
	if len(s) < 1 {
		return
	}
	i, j := 0, len(s)-1
	for i < j {
		s[i], s[j] = s[j], s[i]
		i++
		j--
	}
}
