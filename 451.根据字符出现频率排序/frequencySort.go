package problem0451

import "strings"

type Interface interface {
	Len() int
	Swap(i, j int)
	Less(i, j int) bool
}

type Pair struct {
	Key   byte
	Value int
}

type Pairs []Pair

func (this Pairs) Len() int           { return len(this) }
func (this Pairs) Swap(i, j int)      { this[i], this[j] = this[j], this[i] }
func (this Pairs) Less(i, j int) bool { return this[i].Value > this[j].Value }

func siftDown(data Interface, low, high int) {
	for {
		child := low*2 + 1
		if child >= high {
			break
		}
		if child+1 < high && data.Less(child, child+1) {
			child++
		}
		if !data.Less(low, child) {
			break
		}
		data.Swap(low, child)
		low = child
	}
}

func heapSort(data Interface) {
	length := data.Len()

	for i := (length - 1) / 2; i >= 0; i-- {
		siftDown(data, i, length)
	}
	for i := length - 1; i >= 0; i-- {
		data.Swap(i, 0)
		siftDown(data, 0, i)
	}
}

// 根据字符出现频率排序
func frequencySort(s string) string {
	frequentMap := make(map[byte]int, 0)
	for _, v := range s {
		frequentMap[byte(v)]++
	}

	pairs, i := make(Pairs, len(frequentMap)), 0
	for k, v := range frequentMap {
		pairs[i] = Pair{k, v}
		i++
	}
	heapSort(pairs)

	var sb strings.Builder
	for _, pair := range pairs {
		for i := 0; i < pair.Value; i++ {
			sb.WriteByte(pair.Key)
		}
	}
	return sb.String()
}
