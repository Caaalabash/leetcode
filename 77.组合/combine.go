package problem0077

func combine(n int, k int) [][]int {
	var nums []int
	var result [][]int
	for i := 1; i <= n; i++ {
		nums = append(nums, i)
	}
	backTracking(nums, k, &result, []int{}, 0)
	return result
}

func backTracking(nums []int, k int, result *[][]int, temp []int, index int) bool {
	if len(temp) == k {
		t := make([]int, len(temp))
		copy(t, temp)
		*result = append(*result, t)
		return true
	} else if len(temp) > k {
		return false
	}
	for i, l := index, len(nums); i < l; i++ {
		temp = append(temp, nums[i])
		if !backTracking(nums, k, result, temp, i+1) {
			break
		}
		temp = temp[:len(temp)-1]
	}
	return true
}
