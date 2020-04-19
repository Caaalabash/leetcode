package problem0215

type heapSortList []int

func (this heapSortList) Less(i, j int) bool { return this[i] > this[j] }
func (this heapSortList) Len() int           { return len(this) }
func (this heapSortList) Swap(i, j int)      { this[i], this[j] = this[j], this[i] }

type Interface interface {
	Len() int
	Less(i, j int) bool
	Swap(i, j int)
}

func siftDown(data Interface, low, high int) {
	for {
		child := 2*low + 1
		if child >= high {
			break
		}
		if child+1 < high && data.Less(child, child+1) {
			child++
		}
		if !data.Less(low, child) {
			return
		}
		data.Swap(low, child)
		low = child
	}
}

func heapSort(data Interface) {
	length := data.Len()

	// Build heap with greatest element at top.
	for i := (length - 1) / 2; i >= 0; i-- {
		siftDown(data, i, length)
	}

	// Pop elements, largest first, into end of data.
	for i := length - 1; i >= 0; i-- {
		data.Swap(0, i)
		siftDown(data, 0, i)
	}
}

// 实现堆排序后返回索引
func findKthLargest(nums []int, k int) int {
	list := heapSortList(nums)
	heapSort(list)
	return list[k-1]
}
