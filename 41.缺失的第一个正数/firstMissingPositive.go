package problem0041

// 给你一个未排序的整数数组 nums ，请你找出其中没有出现的最小的正整数。
// 需要实现时间复杂度O(n), 空间复杂度O(1)的解决方案
// 原地哈希：主要应用在范围为[0, len(nums)]的数组解法中，将数组元素本身座位nums的下标
// 在本题中，相当于让每个数字n都回答都下标为n-1的位置
func firstMissingPositive(nums []int) int {
	length := len(nums)
	for i := 0; i < length; i++ {
		for nums[i] > 0 && nums[i] <= length && nums[nums[i]-1] != nums[i] {
			t := nums[nums[i]-1]
			nums[nums[i]-1] = nums[i]
			nums[i] = t
		}
	}
	for i := 0; i < length; i++ {
		if nums[i] != i+1 {
			return i + 1
		}
	}
	return length + 1
}
