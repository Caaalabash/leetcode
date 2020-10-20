package problem0373

func kSmallestPairs(nums1 []int, nums2 []int, k int) [][]int {
	heap := make([][]int, 0)
	for _, a := range nums1 {
		for _, b := range nums2 {
			if len(heap) < k {
				push(&heap, []int{a, b})
			} else if less(heap[0], []int{a, b}) {
				pop(&heap)
				push(&heap, []int{a, b})
			}
		}
	}
	return heap
}

func push(arr *[][]int, x []int) {
	*arr = append(*arr, x)
	siftUp(*arr, len(*arr)-1)
}

func pop(arr *[][]int) {
	lastIndex := len(*arr) - 1
	swap(*arr, 0, lastIndex)
	siftDown(*arr, 0, lastIndex)
	*arr = (*arr)[0:lastIndex]
}

func siftDown(arr [][]int, i int, length int) {
	leftIndex := i*2 + 1
	if leftIndex >= length {
		return
	}
	if leftIndex+1 < length && less(arr[leftIndex+1], arr[leftIndex]) {
		leftIndex++
	}
	if less(arr[leftIndex], arr[i]) {
		swap(arr, leftIndex, i)
		siftDown(arr, leftIndex, length)
	}
}

func siftUp(arr [][]int, i int) {
	pIndex := (i - 1) / 2
	if less(arr[i], arr[pIndex]) {
		swap(arr, pIndex, i)
		siftUp(arr, pIndex)
	}
}

func less(a []int, b []int) bool {
	return a[0]+a[1] > b[0]+b[1]
}

func swap(arr [][]int, i int, j int) {
	arr[i], arr[j] = arr[j], arr[i]
}
