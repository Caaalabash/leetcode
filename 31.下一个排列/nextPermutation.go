package problem0031

import "sort"

// 下一个更大的排序, 过程
// 1. 倒序寻找一个降序索引, 例如[1,3,2], 降序索引为0, 值为1
// 2. 在降序索引后倒序寻找一个比降序值大的最小值, 此处值为2
// 3. 交换这两个值, 并对降序索引后的值重排
// 4. 如果不存在降序索引, 全部重排即可
func nextPermutation(nums []int) {
	// 倒着寻找一个降序索引
	index := -1
	for i := len(nums) - 1; i > 0; i-- {
		if nums[i-1] < nums[i] {
			// 实际是index += (i-1)+1
			index += i
			break
		}
	}
	// 当前已经是最大序
	if index == -1 {
		sort.Ints(nums)
	} else {
		// 从nums[index+1:]中寻找一个大于它的最小值
		for i := len(nums) - 1; i > index; i-- {
			if nums[i] > nums[index] {
				// 交换 & 重排
				nums[i], nums[index] = nums[index], nums[i]
				sort.Ints(nums[index+1:])
			}
		}
	}
}
