package problem1470

// 空间复杂度O(n)
func shuffle(nums []int, n int) []int {
	result := make([]int, 0)
	for i := 0; i < n; i++ {
		result = append(result, nums[i], nums[n+i])
	}
	return result
}

// 因为题目设定了数字在[1, 1000]，因此可以通过位运算，实现原地修改
func shuffle1(nums []int, n int) []int {
	for i := 0; i < n*2; i++ {
		// 计算换值目标索引
		// 当 i < n 时，比较明显，索引乘以2即可
		// 当 i >= n 时，(索引-n)*2 + 1
		j := 0
		if i < n {
			j = i * 2
		} else {
			j = (i-n)*2 + 1
		}
		// 将目标值存储到10～19bit
		nums[j] |= (nums[i] & 1023) << 10
	}
	for i := 0; i < n*2; i++ {
		nums[i] >>= 10
	}
	return nums
}
