package problem0461

func hammingDistance(x int, y int) int {
	var count int
	for x != 0 || y != 0 {
		if (x&1)^(y&1) == 1 {
			count++
		}
		x >>= 1
		y >>= 1
	}
	return count
}
