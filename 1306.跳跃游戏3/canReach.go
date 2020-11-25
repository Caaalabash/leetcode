package problem1306

func canReach(arr []int, start int) bool {
	var (
		visited = make([]bool, len(arr))
		helper  func(index int) bool
	)
	helper = func(index int) bool {
		if index < 0 || index >= len(arr) || visited[index] {
			return false
		}
		if arr[index] == 0 {
			return true
		}
		visited[index] = true
		return helper(index+arr[index]) || helper(index-arr[index])
	}
	return helper(start)
}
