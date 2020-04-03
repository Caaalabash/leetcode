package problem0135

// 每个孩子一颗糖，相邻孩子中，评分高的必须获得更多的糖果(评分一样的可以不一样)
func candy(ratings []int) int {
	size := len(ratings)
	left, right, result := make([]int, size), make([]int, size), 0
	for i := 0; i < size; i++ {
		left[i] = 1
		right[i] = 1
	}
	for i := 1; i < size; i++ {
		if ratings[i] > ratings[i-1] {
			left[i] = left[i-1] + 1
		}
	}
	for i := size - 2; i >= 0; i-- {
		if ratings[i] > ratings[i+1] {
			right[i] = right[i+1] + 1
		}
	}
	for i := 0; i < size; i++ {
		result += max(left[i], right[i])
	}
	return result
}

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}
