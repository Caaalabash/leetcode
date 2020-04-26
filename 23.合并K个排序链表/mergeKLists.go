package problem0023

import "container/heap"

type ListNode struct {
	Val  int
	Next *ListNode
}

type PQ []*ListNode

func (p PQ) Len() int {
	return len(p)
}

func (p PQ) Swap(i, j int) {
	p[i], p[j] = p[j], p[i]
}

func (p PQ) Less(i, j int) bool {
	return p[i].Val < p[j].Val
}

func (p *PQ) Push(x interface{}) {
	*p = append(*p, x.(*ListNode))
}

func (p *PQ) Pop() interface{} {
	old := *p
	last := old[len(old)-1]
	*p = old[:len(old)-1]
	return last
}

// 用堆来做
func mergeKLists(lists []*ListNode) *ListNode {
	if len(lists) == 0 {
		return nil
	}
	head := &ListNode{-1, nil}
	cacheHead, pq := head, make(PQ, 0)
	for _, l := range lists {
		if l != nil {
			pq = append(pq, l)
		}
	}
	heap.Init(&pq)

	for len(pq) > 0 {
		item := heap.Pop(&pq).(*ListNode)

		head.Next = item
		head = head.Next

		if item.Next != nil {
			heap.Push(&pq, item.Next)
		}
	}
	return cacheHead.Next
}
