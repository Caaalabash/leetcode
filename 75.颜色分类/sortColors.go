package problem0075

// 给定一个包含[0, 1, 2]的数组，按照012排序，要求原地排序、常数空间、一趟扫描算法
// 双指针：p0为下一个存储0的索引，p2为下一个存储2的索引
func sortColors(nums []int) {
	p0, p2 := 0, len(nums)-1
	for i := 0; i <= p2; i++ {
		for i <= p2 && nums[i] == 2 {
			nums[i], nums[p2] = nums[p2], nums[i]
			p2--
		}
		if nums[i] == 0 {
			nums[i], nums[p0] = nums[p0], nums[i]
			p0++
		}
	}
}
