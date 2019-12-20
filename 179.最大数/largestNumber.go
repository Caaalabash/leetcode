package problem0179

import (
	"sort"
	"strconv"
)

type NumList []int

func (this NumList) Len() int {
	return len(this)
}

func (this NumList) Swap(i, j int) {
	this[i], this[j] = this[j], this[i]
}

func (this NumList) Less(i, j int) bool {
	if strconv.Itoa(this[i])+strconv.Itoa(this[j]) > strconv.Itoa(this[j])+strconv.Itoa(this[i]) {
		return true
	}
	return false
}

func largestNumber(nums []int) string {
	sort.Sort(NumList(nums))
	// 处理[0, 0]的情况
	if nums[0] == 0 {
		return "0"
	}

	result := ""
	for i := 0; i < len(nums); i++ {
		result += strconv.Itoa(nums[i])
	}
	return result
}
