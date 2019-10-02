package problem0046

func permute(nums []int) [][]int {
	return backTracking(nums)
}

func backTracking(nums []int) [][]int {
	if len(nums) == 0 {
		return nil
	}
	if len(nums) == 1 {
		return [][]int{nums}
	}
	if len(nums) == 2 {
		return [][]int{{nums[0], nums[1]}, {nums[1], nums[0]}}
	}
	var result [][]int
	for i, v := range nums {
		temp := make([]int, len(nums))
		copy(temp, nums)
		rest := append(temp[:i], temp[i+1:]...)

		list := backTracking(rest)
		for _, l := range list {
			result = append(result, append([]int{v}, l...))
		}
	}
	return result
}
