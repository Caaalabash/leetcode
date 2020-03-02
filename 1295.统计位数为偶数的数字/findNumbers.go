package problem1295

func findNumbers(nums []int) int {
	result := 0
	for _, num := range nums {
		count := 0
		for num != 0 {
			num /= 10
			count++
		}
		if count&1 == 0 {
			result++
		}
	}
	return result
}
