package problem0078

func subsets(nums []int) [][]int {
	var result [][]int

	backTracking(nums, 0, &result, []int{})
	return result
}

func backTracking(nums []int, index int, result *[][]int, temp []int) {
	*result = append(*result, temp)

	for i := index; i < len(nums); i++ {
		temp = append(temp, nums[i])
		t := make([]int, len(temp))
		copy(t, temp)
		backTracking(nums, i+1, result, t)
		temp = temp[:len(temp)-1]
	}
}
