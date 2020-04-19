package problem0703

import "sort"

type KthLargest struct {
	nums []int
	k    int
}

func Constructor(k int, nums []int) KthLargest {
	// 若是k小于nums长度，则先降序排序nums，然后保留前k个元素，最后调整堆
	if k < len(nums) {
		sort.Ints(nums)
		nums = nums[len(nums)-k:]
	}
	siftUp(nums)

	return KthLargest{
		nums: nums,
		k:    k,
	}
}

func (this *KthLargest) Add(val int) int {
	if this.k > len(this.nums) {
		this.nums = append(this.nums, val)
		siftUp(this.nums)
	} else {
		if val > this.nums[0] {
			this.nums[0] = val
			siftDown(this.nums, 0)
		}
	}
	return this.nums[0]
}

// 自顶向下调整，用于调整堆顶
func siftDown(nums []int, index int) {
	numsLen := len(nums)
	minIndex := index
	for {
		left, right := 2*index+1, 2*index+2
		if left < numsLen && nums[left] < nums[minIndex] {
			minIndex = left
		}
		if right < numsLen && nums[right] < nums[minIndex] {
			minIndex = right
		}
		if minIndex == index {
			break
		}
		swap(nums, index, minIndex)
		index = minIndex
	}
}

// 自底向上调整，用于调整整个堆
func siftUp(nums []int) {
	numsLen := len(nums)
	for parent := numsLen/2 - 1; parent >= 0; parent-- {
		minIndex := parent
		left, right := 2*parent+1, 2*parent+2
		if left < numsLen && nums[left] < nums[minIndex] {
			minIndex = left
		}
		if right < numsLen && nums[right] < nums[minIndex] {
			minIndex = right
		}
		if parent != minIndex {
			swap(nums, parent, minIndex)
		}
	}
}

func swap(nums []int, i, j int) {
	nums[i], nums[j] = nums[j], nums[i]
}
