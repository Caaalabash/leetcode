package problem0692

import "container/heap"

type Item struct {
	value    string
	priority int
}

type PriorityQueue []*Item

func (this PriorityQueue) Len() int {
	return len(this)
}

func (this PriorityQueue) Less(i, j int) bool {
	if this[i].priority == this[j].priority {
		return this[i].value < this[j].value
	}
	return this[i].priority > this[j].priority
}

func (this PriorityQueue) Swap(i, j int) {
	this[i], this[j] = this[j], this[i]
}

func (this PriorityQueue) Push(x interface{}) {
	this = append(this, x.(*Item))
}

func (this *PriorityQueue) Pop() interface{} {
	old := *this
	x := old[len(old)-1]
	*this = old[:len(old)-1]
	return x
}

func topKFrequent(words []string, k int) []string {
	timesMap := make(map[string]int, 0)
	for _, word := range words {
		timesMap[word]++
	}

	pq, i := make(PriorityQueue, len(timesMap)), 0
	for value, priority := range timesMap {
		pq[i] = &Item{value, priority}
		i++
	}
	heap.Init(&pq)

	result := make([]string, 0)
	for k > 0 {
		result = append(result, heap.Pop(&pq).(*Item).value)
		k--
	}
	return result
}
