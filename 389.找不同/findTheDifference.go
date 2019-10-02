package problem0389

func findTheDifference(s string, t string) byte {
	var result byte
	for i := 0; i < len(s); i++ {
		result = result ^ s[i] ^ t[i]
	}
	result ^= t[len(s)]
	return result
}
