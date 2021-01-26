package problem0168

func convertToTitle(n int) string {
	if n <= 0 {
		return ""
	}
	str := ""

	for n > 0 {
		n--
		str = string(n%26+65) + str
		n = n / 26
	}

	return str
}
