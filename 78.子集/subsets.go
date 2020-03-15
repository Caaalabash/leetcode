package problem0078

func subsets(nums []int) [][]int {
	var (
		result    [][]int
		backTrack func(index int, path []int)
	)
	backTrack = func(index int, path []int) {
		temp := make([]int, len(path))
		copy(temp, path)
		result = append(result, temp)

		for i := index; i < len(nums); i++ {
			path = append(path, nums[i])
			backTrack(i+1, path)
			path = path[:len(path)-1]
		}
	}
	backTrack(0, []int{})
	return result
}
