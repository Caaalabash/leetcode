package problem0378

import "container/heap"

// 堆排序方式
// todo：二分法
func kthSmallest(matrix [][]int, k int) int {
	maxHeap := &IntMaxHeap{}
	for _, row := range matrix {
		for _, n := range row {
			heap.Push(maxHeap, n)
			if maxHeap.Len() > k {
				heap.Pop(maxHeap)
			}
			if maxHeap.Peek() <= n && maxHeap.Len() >= k {
				break
			}
		}
	}
	return maxHeap.Peek()
}

type IntMaxHeap []int

func (pq *IntMaxHeap) Len() int {
	return len(*pq)
}
func (pq *IntMaxHeap) Less(i, j int) bool {
	return (*pq)[i] > (*pq)[j]
}
func (pq *IntMaxHeap) Swap(i, j int) {
	(*pq)[i], (*pq)[j] = (*pq)[j], (*pq)[i]
}

func (pq *IntMaxHeap) Push(x interface{}) {
	*pq = append(*pq, x.(int))
}

func (pq *IntMaxHeap) Pop() interface{} {
	n := len(*pq) - 1
	x := (*pq)[n]
	*pq = (*pq)[:n]
	return x
}
func (pq *IntMaxHeap) Peek() int {
	return (*pq)[0]
}
