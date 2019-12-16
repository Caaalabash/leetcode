package problem0080

// 你不需要考虑数组中超出新长度后面的元素
// 双指针即可:
//   快指针 - 随数组的遍历更新
//   慢指针 - 记录可以覆写数据的位置
func removeDuplicates(nums []int) int {
	if len(nums) <= 2 {
		return len(nums)
	}
	j := 2
	for i := 2; i < len(nums); i++ {
		if nums[i] != nums[j-2] {
			nums[j] = nums[i]
			j++
		}
	}
	return j
}
