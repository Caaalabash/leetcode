package problem0260

// 题目：恰好有2个元素只出现一次，剩下的元素都出现两次，求只出现一次的2个元素

// 分析：设只出现一次的2个元素为p,q, 遍历数组异或之后的结果为r = p ^ q
// 		异或的特点：不同为1，相同为0
// 		那么在r中找到任意一个非0位，它代表，p，q在此位上数值不同
// 		通过这个非0位可以将数组分成两部分，每一部分变成【题目136】
func singleNumber(nums []int) []int {
	// 全部异或，得到 p^q
	r := 0
	for _, num := range nums {
		r ^= num
	}
	// 找到r中任意一个非0位，此处取最低位，此处选择一个更好理解的版本
	filter := 1
	for r&1 == 0 {
		r >>= 1
		filter <<= 1
	}
	// 通过filter筛选数组并分组异或，得到p、q
	p, q := 0, 0
	for _, num := range nums {
		if num&filter == 0 {
			p ^= num
		} else {
			q ^= num
		}
	}
	return []int{p, q}
}
