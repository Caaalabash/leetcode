package problem0045

// 贪心：
// 每次起跳前都检查一下能否一步超过终点，能就返回，
// 不能就在自己能够到的选项中选择一个i+nums[i]最大的值j，跳到j
func jump(nums []int) int {
	i, last, result := 0, len(nums)-1, 0
	for i < last {
		if i+nums[i] >= last {
			result++
			return result
		}
		// 找到下一跳
		sum, moveTo := 0, 0
		for j := i + 1; j < last && j <= i+nums[i]; j++ {
			if j+nums[j] > sum {
				sum = j + nums[j]
				moveTo = j
			}
		}
		i = moveTo
		result++
	}
	return result
}
