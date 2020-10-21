package problem0786

// 麻了，堆标签的题用堆会超时，佛了测试数据
func kthSmallestPrimeFraction(A []int, K int) []int {
	heap := make([][]int, 0)
	for i := 0; i < len(A)-1; i++ {
		for j := i + 1; j < len(A); j++ {
			if len(heap) < K {
				push(&heap, []int{A[i], A[j]})
			} else if less(heap[0], []int{A[i], A[j]}) {
				pop(&heap)
				push(&heap, []int{A[i], A[j]})
			}
		}
	}
	return heap[0]
}

func push(arr *[][]int, val []int) {
	*arr = append(*arr, val)
	up(*arr, len(*arr)-1)
}

func pop(arr *[][]int) {
	lastIndex := len(*arr) - 1
	swap(*arr, 0, lastIndex)
	down(*arr, 0, lastIndex)
	*arr = (*arr)[:lastIndex]
}

func up(arr [][]int, i int) {
	pIndex := (i - 1) / 2
	if less(arr[i], arr[pIndex]) {
		swap(arr, i, pIndex)
		up(arr, pIndex)
	}
}

func down(arr [][]int, i int, length int) {
	leftIndex := i*2 + 1
	if leftIndex >= length {
		return
	}
	if leftIndex+1 < length && less(arr[leftIndex+1], arr[leftIndex]) {
		leftIndex++
	}
	if less(arr[leftIndex], arr[i]) {
		swap(arr, i, leftIndex)
		down(arr, leftIndex, length)
	}
}

func swap(arr [][]int, i, j int) {
	arr[i], arr[j] = arr[j], arr[i]
}

func less(a, b []int) bool {
	return a[0]*b[1] > a[1]*b[0]
}
