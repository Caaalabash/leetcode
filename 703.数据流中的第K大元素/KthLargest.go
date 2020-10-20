package problem0703

import "sort"

// https://leetcode-cn.com/problems/kth-largest-element-in-a-stream/
// 显然不能保存数据流中的所有数据，而是只保存k个最大的数据，构建小顶堆
type KthLargest struct {
	nums []int
	k    int
}

func Constructor(k int, nums []int) KthLargest {
	if len(nums) > k {
		sort.Ints(nums)
		nums = nums[len(nums)-k:]
	}
	heapify(nums)
	return KthLargest{
		nums: nums,
		k:    k,
	}
}

func (this *KthLargest) Add(val int) int {
	if len(this.nums) < this.k {
		this.nums = append(this.nums, val)
		siftUp(this.nums, len(this.nums)-1)
	} else {
		if val > this.nums[0] {
			this.nums[0] = val
			siftDown(this.nums, 0)
		}
	}
	return this.nums[0]
}

func heapify(nums []int) {
	for last := (len(nums) - 2) / 2; last >= 0; last-- {
		siftDown(nums, last)
	}
}

// 自顶向下调整，用于调整堆顶
func siftDown(nums []int, index int) {
	leftChildIndex := index*2 + 1
	if leftChildIndex >= len(nums) {
		return
	}
	if leftChildIndex+1 < len(nums) && less(nums[leftChildIndex+1], nums[leftChildIndex]) {
		leftChildIndex++
	}
	if less(nums[leftChildIndex], nums[index]) {
		swap(nums, index, leftChildIndex)
		siftDown(nums, leftChildIndex)
	}
}

// 自底向上调整，用于调整整个堆
func siftUp(nums []int, index int) {
	parentIndex := (index - 1) / 2
	if less(nums[index], nums[parentIndex]) {
		swap(nums, index, parentIndex)
		siftUp(nums, parentIndex)
	}
}

func less(a, b int) bool {
	return a < b
}

func swap(nums []int, i, j int) {
	nums[i], nums[j] = nums[j], nums[i]
}
