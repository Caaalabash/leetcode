package problem1431

func kidsWithCandies(candies []int, extraCandies int) []bool {
	maxRecord, length := 0, len(candies)
	for i := 0; i < length; i++ {
		maxRecord = max(maxRecord, candies[i])
	}
	result := make([]bool, length)
	for i := 0; i < length; i++ {
		result[i] = candies[i]+extraCandies >= maxRecord
	}
	return result
}

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}
