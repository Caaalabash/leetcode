package problem1317

func getNoZeroIntegers(n int) []int {
	i := 1
	for !isNoZeroInteger(i) || !isNoZeroInteger(n-i) {
		i++
	}
	return []int{i, n - i}
}

func isNoZeroInteger(n int) bool {
	for n > 0 {
		if n%10 == 0 {
			return false
		}
		n = n / 10
	}
	return true
}
