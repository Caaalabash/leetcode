package problem1313

func decompressRLElist(nums []int) []int {
	result := make([]int, 0)
	for i := 0; i < len(nums)-1; i += 2 {
		for j := 0; j < nums[i]; j++ {
			result = append(result, nums[i+1])
		}
	}
	return result
}
