package problem0719

// 维护一个大顶堆, 和373做法完全一致，只是这道题的数据规模来说会超时
func smallestDistancePair(nums []int, k int) int {
	heap := make([]int, 0)
	for i := 0; i < len(nums); i++ {
		for j := i + 1; j < len(nums); j++ {
			val := abs(nums[i] - nums[j])
			if len(heap) < k {
				push(&heap, val)
			} else if less(heap[0], val) {
				pop(&heap)
				push(&heap, val)
			}
		}
	}
	return heap[len(heap)-k]
}

func push(arr *[]int, val int) {
	*arr = append(*arr, val)
	up(*arr, len(*arr)-1)
}

func pop(arr *[]int) {
	lastIndex := len(*arr) - 1
	swap(*arr, 0, lastIndex)
	down(*arr, 0, lastIndex)
	*arr = (*arr)[:lastIndex]
}

func up(arr []int, i int) {
	pIndex := (i - 1) / 2
	if less(arr[i], arr[pIndex]) {
		swap(arr, i, pIndex)
		up(arr, pIndex)
	}
}

func down(arr []int, i int, length int) {
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

func swap(arr []int, i, j int) {
	arr[i], arr[j] = arr[j], arr[i]
}

func less(a, b int) bool {
	return a > b
}

func abs(num int) int {
	if num < 0 {
		return -num
	}
	return num
}
