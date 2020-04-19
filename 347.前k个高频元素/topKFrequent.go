package problem0347

type Pair struct {
	Key   int
	Value int
}

type Pairs []Pair

func (this Pairs) Less(i, j int) bool { return this[i].Value > this[j].Value }
func (this Pairs) Len() int           { return len(this) }
func (this Pairs) Swap(i, j int)      { this[i], this[j] = this[j], this[i] }

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

// 1. 可以假定k值总是合理的
// 2. 算法时间复杂度必须优于O(nlogn) => 也就是堆
func topKFrequent(nums []int, k int) []int {
	frequentMap := make(map[int]int, 0)
	for _, v := range nums {
		frequentMap[v]++
	}

	pairs, i := make(Pairs, len(frequentMap)), 0
	for k, v := range frequentMap {
		pairs[i] = Pair{k, v}
		i++
	}
	heapSort(pairs)

	result := make([]int, 0)
	for _, pair := range pairs[:k] {
		result = append(result, pair.Key)
	}
	return result
}
