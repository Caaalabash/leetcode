package problem0503

// 单减栈
func nextGreaterElements(nums []int) []int {
	length := len(nums)
	stack := make([]int, 0)
	result := make([]int, length)
	for i := 0; i < length; i++ {
		result[i] = -1
	}
	// 要求循环就2倍长度取余即可
	for i := 0; i < length*2; i++ {
		// stack存储索引
		for len(stack) > 0 && nums[i%length] >= nums[stack[len(stack)-1]] {
			result[stack[len(stack)-1]] = nums[i%length]
			stack = stack[:len(stack)-1]
		}
		stack = append(stack, i%length)
	}
	return result
}
