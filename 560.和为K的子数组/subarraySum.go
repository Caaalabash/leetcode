package problem0560

// 给定一个整数数组和一个整数 k，你需要找到该数组中和为 k 的连续的子数组的个数。
// 前缀和常用在求子数组的相关问题上，通过它可以轻松得到每个区间的和
// 容易知道 sum(0, i) - sum(0, i-1) = nums[i]
func subarraySum(nums []int, k int) int {
	// map: 前缀和 -> 该前缀和出现的次数，初始值：已经出现1次前缀和为0
	preMap := map[int]int{0: 1}
	result := 0
	sum := 0
	for _, num := range nums {
		sum += num
		// 如果前面有这个前缀和，这部分就和第一题很像
		if val, ok := preMap[sum - k]; ok {
			result += val
		}
		preMap[sum]++
	}
	return result
}
