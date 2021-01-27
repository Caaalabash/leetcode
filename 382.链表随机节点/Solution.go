package problem0382

import (
	"math/rand"
	"time"
)

type ListNode struct {
	Val  int
	Next *ListNode
}

type Solution struct {
	head *ListNode
	r    *rand.Rand
}

func Constructor(head *ListNode) Solution {
	return Solution{
		head: head,
		r:    rand.New(rand.NewSource(time.Now().UnixNano())),
	}
}

func (this *Solution) GetRandom() int {
	val := this.head.Val
	cur := this.head.Next
	i := 1

	for cur != nil {
		i++
		if this.r.Intn(i) == 0 {
			val = cur.Val
		}
		cur = cur.Next
	}
	return val
}
