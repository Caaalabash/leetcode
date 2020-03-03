package problem1356

import "sort"

type NumList []int

var m map[int]int

func (this NumList) Less(i, j int) bool {
	if m[this[i]] == m[this[j]] {
		return this[i] < this[j]
	} else {
		return m[this[i]] < m[this[j]]
	}
}

func (this NumList) Swap(i, j int) {
	this[i], this[j] = this[j], this[i]
}

func (this NumList) Len() int {
	return len(this)
}

func getOneCount(num int) int {
	count := 0
	for num != 0 {
		if num&1 == 1 {
			count++
		}
		num >>= 1
	}
	return count
}

// 传统做法：自定义排序 + 获得1的个数
func sortByBits(arr []int) []int {
	// 构建哈希表，key为数字值，value为对应数字1的个数
	m = make(map[int]int, len(arr))
	for i := 0; i < len(arr); i++ {
		if _, ok := m[arr[i]]; !ok {
			m[arr[i]] = getOneCount(arr[i])
		}
	}
	// 自定义排序
	sort.Sort(NumList(arr))
	return arr
}

// 带秀做法：因为arr[i]的范围在[0, 10000]，arr[i]对应1的个数称为c[i], 在排序过程中c[i]有更高的优先级
// 因此可以这样操作 (c[i] << 16) | arr[i] 得到新的数字
func sortByBits1(arr []int) []int {
	nums := make([]int, len(arr))
	for i, num := range arr {
		nums[i] = (getOneCount(num) << 16) | num
	}
	sort.Ints(nums)
	for i := 0; i < len(nums); i++ {
		nums[i] &= 0xffff
	}
	return nums
}
