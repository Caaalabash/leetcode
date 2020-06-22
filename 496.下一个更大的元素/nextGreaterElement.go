package problem0496

// 单减栈
func nextGreaterElement(nums1 []int, nums2 []int) []int {
	pairs := make(map[int]int, 0)
	stack := make([]int, 0)
	result := make([]int, len(nums1))
	// 构建单减栈
	for _, num := range nums2 {
		// 所有比num小的栈元素都出栈
		for len(stack) > 0 && num > stack[len(stack)-1] {
			pairs[stack[len(stack)-1]] = num
			stack = stack[:len(stack)-1]
		}
		stack = append(stack, num)
	}
	for i, num := range nums1 {
		if v, ok := pairs[num]; ok {
			result[i] = v
		} else {
			result[i] = -1
		}
	}
	return result
}
