package problem0169

// 摩尔投票法
// 诸国混战, 只要每个人都跟其他国家的人一换一, 人口最多的就赢了
func majorityElement(nums []int) int {
	major, count := nums[0], 1
	for i, lens := 1, len(nums); i < lens; i++ {
		if major == nums[i] {
			count++
		} else if count <= 0 {
			major, count = nums[i], 1
		} else {
			count--
		}
	}
	return major
}
