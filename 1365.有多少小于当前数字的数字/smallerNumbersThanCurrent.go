package problem1365

// 暴力：遍历数组统计有多少数字比当前数字小 O(n2) + O(1)
func smallerNumbersThanCurrent(nums []int) []int {
	result := make([]int, len(nums))
	for i := 0; i < len(nums); i++ {
		for j := 0; j < len(nums); j++ {
			if nums[j] < nums[i] {
				result[i]++
			}
		}
	}
	return result
}

// 频次数组 + 前缀和
// 前缀和是一种重要的预处理，能大大降低查询的时间复杂度，我们可以简单理解为"数列的前n项的和"
// 典型：数组A有N个正整数，现在要求一个B数组，有B[i] = Σ(A[0]~A[i])
// 做法：递推 => A[0] = B[0] && B[i] - B[i-1] = A[i]
func smallerNumbersThanCurrent1(nums []int) []int {
	// 频次数组
	var cnt [101]int
	for i := 0; i < len(nums); i++ {
		cnt[nums[i]]++
	}
	// 前缀和，此时cnt[i-1]代表nums中小于i的数字的个数
	for i := 1; i <= 100; i++ {
		cnt[i] += cnt[i-1]
	}
	result := make([]int, len(nums))
	for i := 0; i < len(nums); i++ {
		if nums[i] != 0 {
			result[i] = cnt[nums[i]-1]
		}
	}
	return result
}
