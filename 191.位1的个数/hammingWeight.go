package problem0191

func hammingWeight(num uint32) int {
	var result int
	for i := 0; i < 32; i++ {
		last := num & 1
		num >>= 1
		if last == 1 {
			result += 1
		}
	}
	return result
}