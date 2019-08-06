package problem0001

// 寻找 v1 + v2 = target, 返回[indexV1, indexV2]
// 遍历一次, 在map中记录每个元素的索引值, 判断target - v2是否在map中，如果在map中, 即找到答案
// 时间复杂度: 遍历包含n个元素的列表一次, 每次查找花费O(1)的时间, 结果为O(n)
// 空间复杂度: 需要一个能存储n个元素的哈希表, 结果为O(n)
func twoSum(nums []int, target int) []int {
	m := make(map[int]int, len(nums))

	for i, v := range nums {
		if j, ok := m[target - v]; ok {
			return []int{j, i}
		}
		m[v] = i
	}
	return nil
}