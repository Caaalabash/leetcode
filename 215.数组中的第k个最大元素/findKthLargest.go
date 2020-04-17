package problem0215

// 直接实现堆排序
func siftDown(data []int, cur int, length int) {
	for {
		child := cur*2 + 1
		if child >= length {
			break
		}
		if child+1 < length && data[child] > data[child+1] {
			child++
		}
		if data[child] > data[cur] {
			return
		}
		swap(data, child, cur)
		cur = child
	}
}

// 交换
func swap(data []int, a, b int) {
	data[a], data[b] = data[b], data[a]
}

// 实现堆排序后返回索引
func findKthLargest(nums []int, k int) int {
	length := len(nums)

	for i := (length - 1) / 2; i >= 0; i-- {
		siftDown(nums, i, length)
	}

	for i := length - 1; i >= 0; i-- {
		swap(nums, 0, i)
		siftDown(nums, 0, i)
	}

	return nums[k-1]
}
