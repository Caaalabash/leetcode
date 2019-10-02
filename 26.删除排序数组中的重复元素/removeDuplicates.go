package problem0026

// 双指针法
// 排序数组, 不需要考虑数组中超出新长度后面的元素, 也就是说不需要删除元素, 只需要换个位置
// 给定数组     0, 0, 1, 1, 1, 2, 2, 3, 3, 4
// 最后取值     0,    1,       2,    3,    4
func removeDuplicates(nums []int) int {
	if len(nums) == 0 {
		return 0
	}
	i := 0
	for j := 1; j < len(nums); j++ {
		if nums[i] != nums[j] {
			i++
			nums[i] = nums[j]
		}
	}
	return i + 1
}
