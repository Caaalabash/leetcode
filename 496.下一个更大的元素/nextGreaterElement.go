package problem0496

// 单调栈主要回答这样的几种问题
// 1. 比当前元素更大的下一个元素 (✅)
// 2. 比当前元素更小的下一个元素
// 3. 比当前元素更小的前一个元素
// 4. 比当前元素更大的前一个元素
// 而此题需要求一个比当前元素更大的下一个元素, 那么也就是一个递减栈
// 维护一个单调递减的栈，遍历数组，如果当前值 > 栈顶元素 => "当前值是栈顶元素的下一个更大的元素" => 哈希表记录
func nextGreaterElement(nums1 []int, nums2 []int) []int {
	m := make(map[int]int)
	var stack []int
	for _, v := range nums2 {
		for len(stack) > 0 && stack[len(stack)-1] < v {
			m[stack[len(stack)-1]] = v
			stack = stack[:len(stack)-1]
		}
		stack = append(stack, v)
	}
	result := make([]int, len(nums1))
	for i, v := range nums1 {
		if v, ok := m[v]; ok {
			result[i] = v
		} else {
			result[i] = -1
		}
	}
	return result
}
