package problem1046

import "sort"

// 排序 -> for (第二重的不为0) { 处理最后两个；排序 } -> 返回最后一个元素
func lastStoneWeight(stones []int) int {
	if len(stones) == 1 {
		return stones[0]
	}
	sort.Ints(stones)

	for index := len(stones) - 1; stones[index-1] != 0; {
		if stones[index] == stones[index-1] {
			stones[index], stones[index-1] = 0, 0
		} else {
			stones[index], stones[index-1] = 0, stones[index]-stones[index-1]
		}
		sort.Ints(stones)
	}
	return stones[len(stones)-1]
}
